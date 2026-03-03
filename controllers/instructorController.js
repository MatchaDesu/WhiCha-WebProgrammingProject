const courseModel = require('../models/courseModel');
const moduleModel = require('../models/moduleModel');
const moduleItemModel = require('../models/moduleItemModel');
const lessonModel = require('../models/lessonModel');
const quizModel = require('../models/quizModel');
const questionModel = require('../models/questionModel');
const choiceModel = require('../models/choiceModel');

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

                    // 🌟 [ส่วนที่แก้ไข] ดึงคำถามและตัวเลือกของควิซนี้มาด้วย
                    const questions = await questionModel.getByQuiz(quiz.quiz_id) || [];
                    for (let q of questions) {
                        q.choices = await choiceModel.getByQuestion(q.question_id) || [];
                    }
                    quiz.questions = questions; // ยัด questions ใส่เข้าไปใน object quiz
                    // 🌟 ----------------------------------------------------

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
        await quizModel.updateQuiz(req.params.quizId, {
            title: req.body.title,
            description: req.body.description
        });

        res.redirect(`/instructor/courses/${req.params.id}/edit`);

    } catch (err) {
        console.error(err);
        res.status(500).send("Update Quiz Error");
    }
};

/* =========================
   QUESTION & CHOICES (QUIZ)
========================= */

// สร้างคำถามและตัวเลือก
exports.createQuestion = async (req, res) => {
    try {
        const { id, quizId } = req.params;
        const { question_text, question_type, points, choices, correct_choice_index } = req.body;

        // 1. บันทึกคำถามลง Database
        const question = await questionModel.createQuestion({
            quiz_id: quizId,
            question_text: question_text,
            question_type: question_type || 'single',
            points: points || 1
        });

        // 2. บันทึกตัวเลือก (Choices) ทั้งหมดที่ถูกส่งมา
        if (choices && choices.length > 0) {
            for (let i = 0; i < choices.length; i++) {
                // เช็คว่า choice ไหนที่ user ติ๊กให้เป็นข้อที่ถูก (เทียบ index)
                const is_correct = (i.toString() === correct_choice_index) ? 1 : 0;

                await choiceModel.createChoice({
                    question_id: question.question_id, // ใช้ ID ของคำถามที่เพิ่งสร้าง
                    choice_text: choices[i],
                    is_correct: is_correct
                });
            }
        }

        // กลับไปหน้า Edit Course และเปิดหน้า Quiz ตัวเดิมค้างไว้
        res.redirect(`/instructor/courses/${id}/edit/quiz/${quizId}`);

    } catch (err) {
        console.error(err);
        res.status(500).send("Create Question Error");
    }
};

// อัปเดตคำถามและตัวเลือก (Edit Question)
exports.updateQuestion = async (req, res) => {
    try {
        const { id, quizId, questionId } = req.params;
        const { question_text, question_type, points, choices, correct_choice_index } = req.body;

        // 1. อัปเดตข้อมูลตัวคำถาม (Table: questions)
        await questionModel.updateQuestion(questionId, {
            question_text: question_text,
            question_type: question_type || 'single',
            points: points || 1
        });

        // 2. ลบตัวเลือก (Choices) เก่าของคำถามนี้ทิ้งให้หมดก่อน
        // **หมายเหตุ: อย่าลืมสร้างฟังก์ชัน deleteByQuestion ไว้ใน choiceModel ด้วยนะครับ**
        await choiceModel.deleteByQuestion(questionId);

        // 3. บันทึกตัวเลือกใหม่ (Choices) ที่ผู้ใช้ส่งเข้ามา
        if (choices && choices.length > 0) {
            for (let i = 0; i < choices.length; i++) {
                // เช็คว่า choice ไหนที่ user ติ๊กให้เป็นข้อที่ถูก (เทียบ index)
                const is_correct = (i.toString() === correct_choice_index) ? 1 : 0;

                await choiceModel.createChoice({
                    question_id: questionId,
                    choice_text: choices[i],
                    is_correct: is_correct
                });
            }
        }

        // 4. กลับไปหน้า Edit Course และเปิดหน้า Quiz ตัวเดิมค้างไว้
        res.redirect(`/instructor/courses/${id}/edit/quiz/${quizId}`);

    } catch (err) {
        console.error(err);
        res.status(500).send("Update Question Error");
    }
};

// ลบคำถาม
exports.deleteQuestion = async (req, res) => {
    try {
        const { id, quizId, questionId } = req.params;

        // บันทึก: ใน questionModel.deleteQuestion ควรลบ choices ที่ผูกกับคำถามนี้ด้วย 
        // หรือตั้งค่า ON DELETE CASCADE ไว้ที่ Database
        await questionModel.deleteQuestion(questionId);

        res.redirect(`/instructor/courses/${id}/edit/quiz/${quizId}`);

    } catch (err) {
        console.error(err);
        res.status(500).send("Delete Question Error");
    }
};