const courseModel = require('../models/courseModel');

exports.getPublishedCourses = async (req, res) => {
    try {
        const courses = await courseModel.getAllPublished();
        res.render('courses', { courses });
    } catch (err) {
        res.status(500).send("Server Error");
    }
};