const courseModel = require('../models/courseModel');
const moduleModel = require('../models/moduleModel');
const moduleItemModel = require('../models/moduleItemModel');
const lessonModel = require('../models/lessonModel');
const quizModel = require('../models/quizModel');

/* =========================
   DASHBOARD
========================= */

exports.dashboard = async (req, res) => {
    try {
        const user_id = req.session.user.id;
        const courses = await courseModel.getByInstructor(user_id);
        res.render('instructor', { courses });
    } catch (err) {
        res.send(err);
    }
};

/* =========================
   COURSE
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

        res.redirect(`/instructor/courses/${result.course_id}/edit`);

    } catch (err) {
        console.error(err);
        res.status(500).send("Create Error");
    }
};

exports.getEditCourse = async (req, res) => {
    try {

        const courseId = req.params.id;

        const course = await courseModel.getById(courseId);
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
                    module.items.push({
                        type: "quiz",
                        data: quiz
                    });
                }
            }
        }

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

        res.render("instructor/edit-course", {
            course,
            modules,
            currentItem
        });

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

/* =========================
   MODULE
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

        res.redirect(`/instructor/courses/${course_id}/edit`);

    } catch (err) {
        res.status(500).send("Module Error");
    }
};

exports.deleteModule = async (req, res) => {
    try {

        const module = await moduleModel.getById(req.params.moduleId);
        await moduleModel.deleteModule(req.params.moduleId);

        res.redirect(`/instructor/courses/${module.course_id}/edit`);

    } catch (err) {
        res.status(500).send("Delete Error");
    }
};

/* =========================
   LESSON
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

        res.redirect(
            `/instructor/courses/${module.course_id}/edit/lesson/${lesson.lesson_id}`
        );

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

        res.redirect(`/instructor/courses/${req.params.id}/edit`);

    } catch (err) {
        res.status(500).send("Update Lesson Error");
    }
};

/* =========================
   QUIZ
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

        res.redirect(
            `/instructor/courses/${module.course_id}/edit/quiz/${quiz.quiz_id}`
        );

    } catch (err) {
        console.error(err);
        res.status(500).send("Quiz Error");
    }
};

exports.updateQuiz = async (req, res) => {
    try {

        await quizModel.updateQuiz(req.params.id, {
            title: req.body.title,
            description: req.body.description
        });

        res.redirect('back');

    } catch (err) {
        res.status(500).send("Update Quiz Error");
    }
};