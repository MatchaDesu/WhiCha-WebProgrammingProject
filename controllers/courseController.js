const courseModel = require('../models/courseModel');

exports.getAllCourses = async (req, res) => {
    try {
        const courses = await courseModel.getAll();
        res.render('courses', { courses });
    } catch (err) {
        res.status(500).send("Server Error");
    }
};

exports.getPublishedCourses = async (req, res) => {
    try {
        const courses = await courseModel.getPublishedCourse();
        res.render('courses', { courses });
    } catch (err) {
        res.status(500).send("Server Error");
    }
};

exports.getCourseDetail = async (req, res) => {
    try {
        const course = await courseModel.getById(req.params.id);

        if (!course) {
            return res.status(404).send("Course not found");
        }

        res.render('courses/detail', { course });
    } catch (err) {
        res.status(500).send("Server Error");
    }
};

// exports.createCourse = async (req, res) => {
//     try {
//         const { title, description } = req.body;

//         await courseModel.create(title, description);

//         res.redirect('/courses');
//     } catch (err) {
//         res.status(500).send("Server Error");
//     }
// };