const courseModel = require('../models/courseModel');
const enrollmentModel = require('../models/enrollmentModel');
const moduleModel = require('../models/moduleModel');
const moduleItemModel = require('../models/moduleItemModel');
const lessonModel = require('../models/lessonModel');
const quizModel = require('../models/quizModel');
const questionModel = require('../models/questionModel');
const choiceModel = require('../models/choiceModel');

exports.getPublishedCourses = async (req, res) => {
    try {
        const courses = await courseModel.getAllPublished();
        res.render('courses', { courses });
    } catch (err) {
        res.status(500).send("Server Error");
    }
};

exports.getCourse = async (req, res) => {
    try {
        const course_id = req.params.id
        const user_id = req.session.user.id;

        const course = await courseModel.getById(course_id);
        const isEnrolled = await enrollmentModel.isEnrolled(user_id, course_id)

        res.render('courses/detail', { course, isEnrolled });
    } catch (err) {
        res.status(500).send("Server Error");
    }
};

exports.enterCourse = async (req, res) => {
    try {
        const courseId = req.params.id;
        const userId = req.session.user.id;

        const course = await courseModel.getById(courseId);

        const isEnrolled = await enrollmentModel.isEnrolled(userId, courseId);

        if (!isEnrolled) {
            return res.redirect(`/courses/${courseId}`);
        }

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

        // ... โค้ดเดิมข้างบนของคุณ ...
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

        // 🟢 เพิ่มโค้ดชุดนี้เข้าไปครับ: ดึงคำถามและตัวเลือก เฉพาะตอนที่ผู้ใช้กำลังเปิดดูหน้า Quiz 🟢
        if (currentItem && currentItem.type === "quiz") {
            // ดึงคำถามทั้งหมดของ Quiz นี้
            const questions = await questionModel.getByQuiz(currentItem.data.quiz_id);
            
            // วนลูปดึงตัวเลือก (Choices) ของแต่ละคำถาม
            if (questions && questions.length > 0) {
                for (let q of questions) {
                    q.choices = await choiceModel.getByQuestion(q.question_id);
                }
            }
            
            // นำคำถามยัดใส่กลับเข้าไปใน currentItem.data เพื่อส่งไปให้ EJS
            currentItem.data.questions = questions || [];
        }

        res.render("courses/learn", {
            course,
            modules,
            currentItem
        });

    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
};