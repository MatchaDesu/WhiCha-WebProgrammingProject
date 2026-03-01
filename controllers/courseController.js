const courseModel = require('../models/courseModel');
const enrollmentModel = require('../models/enrollmentModel');

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

        res.render('courses/detail', { course, isEnrolled});
    } catch (err) {
        res.status(500).send("Server Error");
    }
};