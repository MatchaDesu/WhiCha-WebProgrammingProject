const userModel = require('../models/userModel')
const courseModel = require('../models/courseModel')
const moduleModel     = require('../models/moduleModel');
const moduleItemModel = require('../models/moduleItemModel');
const enrollmentModel = require('../models/enrollmentModel');
const lessonModel     = require('../models/lessonModel');
const quizModel       = require('../models/quizModel');
const questionModel   = require('../models/questionModel');
const choiceModel     = require('../models/choiceModel');

exports.dashboard = async (req, res) => {
    try {
        const allCourses  = await courseModel.getAllCourse();
        const allUsers    = await userModel.getAll();
        const enrollments = await enrollmentModel.getAll();
        const pendingCourses  = allCourses.filter(c => c.course_status === 'pending');

        res.render('manager/dashboard', {
            stats: {
                totalUsers:       allUsers.length,
                totalCourses:     allCourses.length,
                totalEnrollments: enrollments.length,
            },
            pendingCourses,
            users: allUsers.slice(0, 10),
        });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

exports.approveCourse = async (req, res) => {
    try {
        const managerId = req.session.user.id;
        await courseModel.publishCourse(req.params.courseId);
        res.redirect('/manager/dashboard');
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

exports.rejectCourse = async (req, res) => {
    try {
        const managerId = req.session.user.id;
        const { rejection_reason } = req.body;
        await courseModel.rejectCourse(req.params.courseId, rejection_reason);
        res.redirect('/manager/dashboard');
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error');
    }
};

exports.getUsers = async (req, res) => {
    try {
        const users = await userModel.getAll();
        res.render('manager/users', { users });
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

exports.getCourses = async (req, res) => {
    try {
        const courses = await courseModel.getAllCourse();
        res.render('manager/courses', { courses });
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

exports.getEnrollments = async (req, res) => {
    try {
        const enrollments = await enrollmentModel.getAllWithDetails();
        res.render('manager/enrollments', { enrollments });
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

exports.getCourseDetail = async (req, res) => {
    try {
        const course  = await courseModel.getByIdWithInstructor(req.params.courseId);
        const modules = await moduleModel.getByCourse(req.params.courseId);

        let lessonCount = 0, quizCount = 0;

        for (let mod of modules) {
            const items = await moduleItemModel.getItemsByModule(mod.module_id);
            mod.items = [];

            for (let item of items) {
                if (item.item_type === 'lesson') {
                    const lesson = await lessonModel.getById(item.item_id);
                    mod.items.push({ type: 'lesson', data: lesson });
                    lessonCount++;
                } else if (item.item_type === 'quiz') {
                    const quiz      = await quizModel.getById(item.item_id);
                    const questions = await questionModel.getByQuiz(quiz.quiz_id) || [];
                    for (let q of questions) {
                        q.choices = await choiceModel.getByQuestion(q.question_id) || [];
                    }
                    quiz.questions = questions;
                    mod.items.push({ type: 'quiz', data: quiz });
                    quizCount++;
                }
            }
        }

        res.render('manager/course-detail', {
            course, modules,
            stats: { moduleCount: modules.length, lessonCount, quizCount }
        });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};