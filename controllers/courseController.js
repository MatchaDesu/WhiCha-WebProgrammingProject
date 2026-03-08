const courseModel = require('../models/courseModel');
const categoryModel = require('../models/categoryModel');
const enrollmentModel = require('../models/enrollmentModel');
const moduleModel = require('../models/moduleModel');
const moduleItemModel = require('../models/moduleItemModel');
const lessonModel = require('../models/lessonModel');
const quizModel = require('../models/quizModel');
const questionModel = require('../models/questionModel');
const choiceModel = require('../models/choiceModel');
const lessonProgressModel = require('../models/lessonProgressModel');
const quizAttemptModel    = require('../models/quizAttemptModel');

exports.getPublishedCourses = async (req, res) => {
    try {
        const keyword = req.query.search;
        let courses;

        if (keyword) {
            courses = await courseModel.getByKeyword(keyword);
        } else {
            courses = await courseModel.getAllPublished();
        }

        const categories = await categoryModel.getAll();

        res.render('courses/overall', { courses, categories });
    } catch (err) {
        console.log(err);
        res.status(500).send("Server Error");
    }
};



exports.getCourse = async (req, res) => {
    try {
        const courseId = req.params.courseId;

        const course = await courseModel.getById(courseId);
        const lessons = await lessonModel.getByCourse(courseId);

        let isEnrolled = false;
        if (req.session && req.session.user) {
            const userId = req.session.user.id;
            isEnrolled = await enrollmentModel.isEnrolled(userId, courseId);
        }

        // 4. ส่งข้อมูลทั้งหมดไปที่ View (สังเกตว่ามีการส่ง lessons ไปด้วยแล้ว!)
        res.render('courses/detail', { course, isEnrolled, lessons });
        
    } catch (err) {
        console.error("Error in getCourse:", err);
        res.status(500).send("Server Error");
    }
};

exports.getDashboard = async (req, res) => {
    try {
        const courseId = req.params.courseId;

        const course = await courseModel.getById(courseId);
        const modules = await moduleModel.getByCourse(courseId);
        const enrollments = await enrollmentModel.getByCourse(courseId);

        const moduleCount = modules ? modules.length : 0;
        const studentCount = enrollments ? enrollments.length : 0;

        res.render('courses/dashboard', {
            course,
            stats : { moduleCount, studentCount } 
        });

    } catch (err) {
        console.log(err);
        res.status(500).send("Server Error");
    }
}

exports.getStudentDashboard = async (req, res) => {
    try {
        const courseId = req.params.courseId;

        const course = await courseModel.getById(courseId);
        const enrollments = await enrollmentModel.getByCourse(courseId);

        res.render('courses/students', {
            course,
            enrollments: enrollments || []});

    } catch (err) {
        console.log(err);
        res.status(500).send("Server Error");
    }
}

exports.learnContent = async (req, res) => {
    try {
        const courseId = req.params.courseId;
        const userId = req.session.user.id;

        const course = await courseModel.getById(courseId);
        const isEnrolled = await enrollmentModel.isEnrolled(userId, courseId);

        const modules = await moduleModel.getByCourse(courseId);

        for (let module of modules) {
            const items = await moduleItemModel.getItemsByModule(module.module_id);
            module.items = [];

            for (let item of items) {
                if (item.item_type === 'lesson') {
                    const lesson = await lessonModel.getById(item.item_id);

                    // ✅ ดึง progress ของ user ในบทเรียนนี้
                    const progress = await lessonProgressModel.getByUserAndLesson(userId, lesson.lesson_id);
                    lesson.is_completed = progress ? progress.is_completed : 0;

                    module.items.push({ type: 'lesson', data: lesson });

                } else if (item.item_type === 'quiz') {
                    const quiz = await quizModel.getById(item.item_id);

                    // ✅ ดึง attempt ของ user ใน quiz นี้
                    const attempt = await quizAttemptModel.getByUserAndQuiz(userId, quiz.quiz_id);
                    quiz.submitted_at  = attempt ? attempt.submitted_at  : null;
                    quiz.score         = attempt ? attempt.score         : null;
                    quiz.total_points  = attempt ? attempt.total_points  : null;
                    quiz.passed        = attempt ? attempt.passed        : null;

                    module.items.push({ type: 'quiz', data: quiz });
                }
            }
        }

        // currentItem (เหมือนเดิม)
        const { type, itemId } = req.params;
        let currentItem = null;
        if (type && itemId) {
            for (let module of modules) {
                for (let item of module.items) {
                    if (
                        item.type === type &&
                        ((type === 'lesson' && item.data.lesson_id == itemId) ||
                         (type === 'quiz'   && item.data.quiz_id   == itemId))
                    ) {
                        currentItem = item;
                    }
                }
            }
        }

        // Quiz questions + choices (เหมือนเดิม)
        if (currentItem && currentItem.type === 'quiz') {
            const questions = await questionModel.getByQuiz(currentItem.data.quiz_id);
            if (questions && questions.length > 0) {
                for (let q of questions) {
                    q.choices = await choiceModel.getByQuestion(q.question_id);
                }
            }
            currentItem.data.questions = questions || [];
        }

        // ✅ คำนวณ progressPercent จาก view
        const progressData = await lessonProgressModel.getCourseProgress(userId, courseId);
        const progressPercent = progressData ? progressData.progress_percent : 0;

        res.render(`courses/learn`, { course, modules, currentItem, progressPercent });

    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

exports.completeLesson = async (req, res) => {
    try {
        const { courseId, lessonId } = req.params;
        const userId = req.session.user.id;

        await lessonProgressModel.markComplete(userId, lessonId);

        res.redirect(`/courses/${courseId}/learn/lesson/${lessonId}`);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

exports.incompleteLesson = async (req, res) => {
    try {
        const { courseId, lessonId } = req.params;
        const userId = req.session.user.id;

        await lessonProgressModel.markIncomplete(userId, lessonId);

        res.redirect(`/courses/${courseId}/learn/lesson/${lessonId}`);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

exports.submitQuiz = async (req, res) => {
    try {
        const { courseId, quizId } = req.params;
        const userId  = req.session.user.id;
        const answers = req.body.answers || {}; 
        // answers = { "question_id": "choice_id", ... }

        // ดึงคำถามทั้งหมดพร้อม choices ของ quiz นี้
        const questions = await questionModel.getByQuiz(quizId);
        for (let q of questions) {
            q.choices = await choiceModel.getByQuestion(q.question_id);
        }

        // คำนวณคะแนน
        let score       = 0;
        let totalPoints = 0;

        for (let q of questions) {
            totalPoints += q.points || 1;

            const selectedChoiceId = answers[q.question_id];
            if (!selectedChoiceId) continue;

            // หา choice ที่ user เลือก แล้วเช็คว่าถูกมั้ย
            const selectedChoice = q.choices.find(
                c => c.choice_id == selectedChoiceId
            );
            if (selectedChoice && selectedChoice.is_correct == 1) {
                score += q.points || 1;
            }
        }

        // บันทึกลง quiz_attempts
        await quizAttemptModel.saveAttempt(userId, quizId, score, totalPoints,);

        // redirect กลับไปหน้า quiz (จะแสดงผลลัพธ์ให้อัตโนมัติ)
        res.redirect(`/courses/${courseId}/learn/quiz/${quizId}`);

    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

