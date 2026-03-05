const courseModel = require('../models/courseModel');
const moduleModel = require('../models/moduleModel');
const moduleItemModel = require('../models/moduleItemModel');
const lessonModel = require('../models/lessonModel');
const quizModel = require('../models/quizModel');
const questionModel = require('../models/questionModel');
const choiceModel = require('../models/choiceModel');
const enrollmentModel = require('../models/enrollmentModel');

/* =========================
   DASHBOARD
========================= */

exports.dashboard = async (req, res) => {
    try {
        const user_id = req.session.user.id;
        const courses = await courseModel.getByInstructor(user_id);
        res.render('instructor/courses-overview', { courses });
    } catch (err) {
        res.send(err);
    }
};

/* =========================
   COURSE CREATION
========================= */

exports.courseCreate = async (req, res) => {
    res.render('instructor/create-course');
};

exports.createCourse = async (req, res) => {
    try {
        const instructor_id = req.session.user.id;
        const result = await courseModel.createCourse({
            instructor_id,
            category_id: req.body.category_id,
            course_name: req.body.course_name,
            description: req.body.description,
            course_price: req.body.course_price
        });

        // สร้างเสร็จให้ไปหน้าตั้งค่า (Tab 1)
        res.redirect(`/instructor/courses/${result.course_id}/edit`);
    } catch (err) {
        console.error(err);
        res.status(500).send("Create Error");
    }
};

/* =========================
   COURSE DASHBOARD TABS
========================= */

// [Tab 1] ตั้งค่าคอร์สเรียน
exports.getCourseSettings = async (req, res) => {
    try {
        const courseId = req.params.id;
        // ดึงแค่ข้อมูล Course พื้นฐาน
        const course = await courseModel.getById(courseId); 
        
        res.render("instructor/edit-course", { course });
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
};

// [Tab 2] จัดการเนื้อหา (Modules)
exports.getCourseModules = async (req, res) => {
    try {
        const courseId = req.params.id;
        
        // 1. ดึง Course มาเพื่อแสดงชื่อที่ Header
        const course = await courseModel.getById(courseId); 
        
        // 2. ดึง Modules และ Items ทั้งหมดในคอร์ส
        const modules = await moduleModel.getByCourse(courseId);
        
        for (let module of modules) {
            const items = await moduleItemModel.getItemsByModule(module.module_id);
            module.items = [];
            
            for (let item of items) {
                if (item.item_type === "lesson") {
                    const lesson = await lessonModel.getById(item.item_id);
                    module.items.push({
                        type: "lesson",
                        data: lesson
                    });
                } else if (item.item_type === "quiz") {
                    const quiz = await quizModel.getById(item.item_id);

                    // ดึงคำถามและตัวเลือกของควิซนี้มาด้วย
                    const questions = await questionModel.getByQuiz(quiz.quiz_id) || [];
                    for (let q of questions) {
                        q.choices = await choiceModel.getByQuestion(q.question_id) || [];
                    }
                    quiz.questions = questions; 

                    module.items.push({
                        type: "quiz",
                        data: quiz
                    });
                }
            }
        }

        // 3. ตรวจสอบว่ากำลังเปิดแก้ไข Lesson หรือ Quiz ตัวไหนอยู่หรือไม่
        const { type, itemId } = req.params;
        let currentItem = null;
        
        if (type && itemId) {
            for (let module of modules) {
                for (let item of module.items) {
                    if (
                        item.type === type &&
                        (
                            (type === "lesson" && item.data.lesson_id == itemId) ||
                            (type === "quiz" && item.data.quiz_id == itemId)
                        )
                    ) {
                        currentItem = item;
                    }
                }
            }
        }

        res.render("instructor/course-modules", {
            course,
            modules,
            currentItem
        });

    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
};

// [Tab 3] รายชื่อนักเรียน
exports.getCourseStudents = async (req, res) => {
    try {
        const courseId = req.params.id;
        const course = await courseModel.getById(courseId);
        
        const enrollments = await enrollmentModel.getByCourse(courseId);

        res.render("instructor/course-students", { course, enrollments });
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
};

/* =========================
   COURSE ACTIONS
========================= */

exports.updateCourse = async (req, res) => {
    try {
        await courseModel.updateCourse(req.params.id, {
            course_name: req.body.course_name,
            description: req.body.description,
            course_price: req.body.course_price
        });
        res.redirect(`/instructor/courses/${req.params.id}/edit`);
    } catch (err) {
        res.status(500).send("Update Error");
    }
};

exports.publishCourse = async (req, res) => {
    try {
        await courseModel.publishCourse(req.params.id);
        res.redirect(`/instructor/courses/${req.params.id}/edit`);
    } catch (err) {
        res.status(500).send("Publish Error");
    }
};

/* =========================
   MODULE ACTIONS
========================= */

exports.createModule = async (req, res) => {
    try {
        const course_id = req.params.id;
        const modules = await moduleModel.getByCourse(course_id);
        const nextOrder = modules.length + 1;

        await moduleModel.createModule({
            course_id,
            module_name: req.body.module_name || "New Module",
            order_index: nextOrder
        });

        // Redirect กลับไปหน้าจัดการเนื้อหา (Tab 2)
        res.redirect(`/instructor/courses/${course_id}/modules`);
    } catch (err) {
        res.status(500).send("Module Error");
    }
};

exports.deleteModule = async (req, res) => {
    try {
        const module = await moduleModel.getById(req.params.moduleId);
        await moduleModel.deleteModule(req.params.moduleId);

        // Redirect กลับไปหน้าจัดการเนื้อหา (Tab 2)
        res.redirect(`/instructor/courses/${module.course_id}/modules`);
    } catch (err) {
        res.status(500).send("Delete Error");
    }
};

/* =========================
   LESSON ACTIONS
========================= */

exports.createLesson = async (req, res) => {
    try {
        const moduleId = req.params.moduleId;
        const module = await moduleModel.getById(moduleId);

        const lesson = await lessonModel.createLesson({
            module_id: module.module_id,
            lesson_name: "New Lesson",
            content: ""
        });

        const items = await moduleItemModel.getItemsByModule(moduleId);
        const nextOrder = items.length + 1;

        await moduleItemModel.addItemToModule({
            module_id: moduleId,
            item_id: lesson.lesson_id,
            item_type: "lesson",
            order_index: nextOrder
        });

        // Redirect เปิดหน้า Lesson ที่เพิ่งสร้างใหม่
        res.redirect(`/instructor/courses/${module.course_id}/modules/lesson/${lesson.lesson_id}`);
    } catch (err) {
        console.error(err);
        res.status(500).send("Lesson Error");
    }
};

exports.updateLesson = async (req, res) => {
    try {
        await lessonModel.updateLesson(req.params.lessonId, {
            lesson_name: req.body.lesson_name,
            content: req.body.content
        });

        // เซฟเสร็จแล้วเปิดหน้าเดิมค้างไว้
        res.redirect(`/instructor/courses/${req.params.id}/modules/lesson/${req.params.lessonId}`);
    } catch (err) {
        res.status(500).send("Update Lesson Error");
    }
};

/* =========================
   QUIZ ACTIONS
========================= */

exports.createQuiz = async (req, res) => {
    try {
        const moduleId = req.params.moduleId;
        const module = await moduleModel.getById(moduleId);

        const quiz = await quizModel.createQuiz({
            module_id: module.module_id,
            title: "New Quiz",
            description: ""
        });

        const items = await moduleItemModel.getItemsByModule(moduleId);
        const nextOrder = items.length + 1;

        await moduleItemModel.addItemToModule({
            module_id: moduleId,
            item_id: quiz.quiz_id,
            item_type: "quiz",
            order_index: nextOrder
        });

        // Redirect เปิดหน้า Quiz ที่เพิ่งสร้างใหม่
        res.redirect(`/instructor/courses/${module.course_id}/modules/quiz/${quiz.quiz_id}`);
    } catch (err) {
        console.error(err);
        res.status(500).send("Quiz Error");
    }
};

exports.updateQuiz = async (req, res) => {
    try {
        await quizModel.updateQuiz(req.params.quizId, {
            title: req.body.title,
            description: req.body.description
        });

        // เซฟเสร็จแล้วเปิดหน้าเดิมค้างไว้
        res.redirect(`/instructor/courses/${req.params.id}/modules/quiz/${req.params.quizId}`);
    } catch (err) {
        console.error(err);
        res.status(500).send("Update Quiz Error");
    }
};

/* =========================
   QUESTION & CHOICES (QUIZ)
========================= */

exports.createQuestion = async (req, res) => {
    try {
        const { id, quizId } = req.params;
        const { question_text, question_type, points, choices, correct_choice_index } = req.body;

        const question = await questionModel.createQuestion({
            quiz_id: quizId,
            question_text: question_text,
            question_type: question_type || 'single',
            points: points || 1
        });

        if (choices && choices.length > 0) {
            for (let i = 0; i < choices.length; i++) {
                const is_correct = (i.toString() === correct_choice_index) ? 1 : 0;
                await choiceModel.createChoice({
                    question_id: question.question_id, 
                    choice_text: choices[i],
                    is_correct: is_correct
                });
            }
        }

        // เซฟคำถามเสร็จ กลับไปหน้าแก้ Quiz
        res.redirect(`/instructor/courses/${id}/modules/quiz/${quizId}`);
    } catch (err) {
        console.error(err);
        res.status(500).send("Create Question Error");
    }
};

exports.updateQuestion = async (req, res) => {
    try {
        const { id, quizId, questionId } = req.params;
        const { question_text, question_type, points, choices, correct_choice_index } = req.body;

        await questionModel.updateQuestion(questionId, {
            question_text: question_text,
            question_type: question_type || 'single',
            points: points || 1
        });

        await choiceModel.deleteByQuestion(questionId);

        if (choices && choices.length > 0) {
            for (let i = 0; i < choices.length; i++) {
                const is_correct = (i.toString() === correct_choice_index) ? 1 : 0;
                await choiceModel.createChoice({
                    question_id: questionId,
                    choice_text: choices[i],
                    is_correct: is_correct
                });
            }
        }

        res.redirect(`/instructor/courses/${id}/modules/quiz/${quizId}`);
    } catch (err) {
        console.error(err);
        res.status(500).send("Update Question Error");
    }
};

exports.deleteQuestion = async (req, res) => {
    try {
        const { id, quizId, questionId } = req.params;

        await questionModel.deleteQuestion(questionId);
        res.redirect(`/instructor/courses/${id}/modules/quiz/${quizId}`);
    } catch (err) {
        console.error(err);
        res.status(500).send("Delete Question Error");
    }
};