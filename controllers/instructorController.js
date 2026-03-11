const { Parser } = require('json2csv');

const userModel = require('../models/userModel');
const courseModel = require('../models/courseModel');
const categoryModel = require('../models/categoryModel');
const moduleModel = require('../models/moduleModel');
const moduleItemModel = require('../models/moduleItemModel');
const lessonModel = require('../models/lessonModel');
const quizModel = require('../models/quizModel');
const questionModel = require('../models/questionModel');
const choiceModel = require('../models/choiceModel');
const enrollmentModel = require('../models/enrollmentModel');
const announcementModel = require('../models/announcementModel');

exports.dashboard = async (req, res) => {
    try {
        const user_id = req.session.user.id;
        const courses = await courseModel.getByInstructor(user_id);
        res.render('instructor/courses-overview', { courses });
    } catch (err) {
        res.send(err);
    }
};

exports.courseCreate = async (req, res) => {
    const categories = await categoryModel.getAll();
    res.render('instructor/create-course', { categories });
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

        res.redirect(`/instructor/courses/${result.course_id}/edit`);
    } catch (err) {
        console.error(err);
        res.status(500).send("Create Error");
    }
};

exports.getCourseSettings = async (req, res) => {
    try {
        const courseId = req.params.id;
        const course = await courseModel.getById(courseId);
        const categories = await categoryModel.getAll();

        res.render("instructor/edit-course", { course, categories });
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
};

exports.getCourseModules = async (req, res) => {
    try {
        const courseId = req.params.id;
        const { type, itemId } = req.params;

        const course = await courseModel.getById(courseId);
        const modules = await moduleModel.getByCourse(courseId);
        for (let module of modules) {
            const items = await moduleItemModel.getItemsByModule(module.module_id);
            module.items = [];

            for (let item of items) {
                if (item.item_type === 'lesson') {
                    const lesson = await lessonModel.getById(item.item_id);
                    module.items.push({ type: 'lesson', data: lesson });

                } else if (item.item_type === 'quiz') {
                    const quiz = await quizModel.getById(item.item_id);
                    const questions = await questionModel.getByQuiz(quiz.quiz_id) || [];

                    for (let q of questions) {
                        q.choices = await choiceModel.getByQuestion(q.question_id) || [];
                    }
                    quiz.questions = questions;

                    module.items.push({ type: 'quiz', data: quiz });
                }
            }
        }

        if (!type || !itemId) {
            return res.render('instructor/course-modules', { course, modules, currentItem: null });
        }

        let currentItem = null;
        for (let module of modules) {
            for (let item of module.items) {
                if (
                    item.type === type &&
                    (
                        (type === 'lesson' && item.data.lesson_id == itemId) ||
                        (type === 'quiz' && item.data.quiz_id == itemId)
                    )
                ) {
                    currentItem = item;
                    break;
                }
            }
            if (currentItem) break;
        }

        if (type === 'lesson') {
            return res.render('instructor/lesson-editor', { course, modules, currentItem });
        } else if (type === 'quiz') {
            return res.render('instructor/quiz-editor', { course, modules, currentItem });
        }

        return res.render('instructor/course-modules', { course, modules, currentItem });

    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};


exports.updateModule = async (req, res) => {
    try {
        await moduleModel.updateModule(req.params.moduleId, {
            module_name: req.body.module_name
        });
        res.redirect(`/instructor/courses/${req.params.id}/modules`);
    } catch (err) {
        res.status(500).send("Update Module Error");
    }
};

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

exports.getStudentCSV = async (req, res) => {
    try {
        const courseId = req.params.id;
        const enrollments = await enrollmentModel.getByCourse(courseId);

        const fields = [
            'user_id',
            'first_name',
            'last_name',
            'email',
            'enrolled_at',
            'completed_lessons',
            'total_lessons'
        ];

        const parser = new Parser({ fields });
        let csv = parser.parse(enrollments);

        csv = '\uFEFF' + csv;

        res.header('Content-Type', 'text/csv');
        res.attachment(`students.csv`);
        res.send(csv);

    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
};

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

exports.pendingCourse = async (req, res) => {
    try {
        await courseModel.pendingCourse(req.params.id);
        res.redirect(`/instructor/courses/${req.params.id}/edit`);
    } catch (err) {
        res.status(500).send("Pending Error");
    }
};

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

        res.redirect(`/instructor/courses/${course_id}/modules`);
    } catch (err) {
        res.status(500).send("Module Error");
    }
};

exports.deleteModule = async (req, res) => {
    try {
        const module = await moduleModel.getById(req.params.moduleId);
        await moduleModel.deleteModule(req.params.moduleId);

        res.redirect(`/instructor/courses/${module.course_id}/modules`);
    } catch (err) {
        res.status(500).send("Delete Error");
    }
};

exports.createLesson = async (req, res) => {
    try {
        const moduleId = req.params.moduleId;
        const module = await moduleModel.getById(moduleId);

        const lesson = await lessonModel.createLesson({
            module_id: module.module_id,
            lesson_name: req.body.lesson_name || "New Lesson",
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

        res.redirect(`/instructor/courses/${req.params.id}/modules/lesson/${req.params.lessonId}`);
    } catch (err) {
        res.status(500).send("Update Lesson Error");
    }
};

exports.createQuiz = async (req, res) => {
    try {
        const moduleId = req.params.moduleId;
        const module = await moduleModel.getById(moduleId);

        const quiz = await quizModel.createQuiz({
            module_id: module.module_id,
            title: req.body.title || "New Quiz",
            description: req.body.description || ""
        });

        const items = await moduleItemModel.getItemsByModule(moduleId);
        const nextOrder = items.length + 1;

        await moduleItemModel.addItemToModule({
            module_id: moduleId,
            item_id: quiz.quiz_id,
            item_type: "quiz",
            order_index: nextOrder
        });

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

        res.redirect(`/instructor/courses/${req.params.id}/modules/quiz/${req.params.quizId}`);
    } catch (err) {
        console.error(err);
        res.status(500).send("Update Quiz Error");
    }
};

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

// ── Announcement ──────────────────────────────────────────────────────────────

exports.getAnnouncements = async (req, res) => {
    try {
        const courseId      = req.params.id;
        const course        = await courseModel.getById(courseId);
        const announcements = await announcementModel.getByCourse(courseId);

        res.render('instructor/instructor-announcement', {
            course,
            announcements: announcements || []
        });
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
};

exports.createAnnouncement = async (req, res) => {
    try {
        const courseId     = req.params.id;
        const instructorId = req.session.user.id;
        const { title, content } = req.body;

        await announcementModel.createAnnouncement({
            course_id:     courseId,
            instructor_id: instructorId,
            title,
            content
        });

        res.redirect(`/instructor/courses/${courseId}/announcement`);
    } catch (err) {
        console.error(err);
        res.status(500).send("Create Announcement Error");
    }
};

exports.editAnnouncement = async (req, res) => {
    try {
        const { id, announcementId } = req.params;
        const { title, content }     = req.body;

        await announcementModel.updateAnnouncement(announcementId, { title, content });

        res.redirect(`/instructor/courses/${id}/announcement`);
    } catch (err) {
        console.error(err);
        res.status(500).send("Edit Announcement Error");
    }
};

exports.deleteAnnouncement = async (req, res) => {
    try {
        const { id, announcementId } = req.params;

        await announcementModel.deleteAnnouncement(announcementId);

        res.redirect(`/instructor/courses/${id}/announcement`);
    } catch (err) {
        console.error(err);
        res.status(500).send("Delete Announcement Error");
    }
};