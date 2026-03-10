const { Parser } = require('json2csv');
const userModel = require('../models/userModel');
const enrollmentModel = require('../models/enrollmentModel');
const courseModel     = require('../models/courseModel');

exports.getProfile = async (req, res) => {
    try {
        const user_info = await userModel.getById(req.params.userId);

        if (!user_info) {
            return res.status(404).send("user not found");
        }

        const enrolledCourses = await enrollmentModel.getByUserWithProgress(req.params.userId);

        const teachingCourses = user_info.role === 'instructor'
            ? await courseModel.getByInstructor(req.params.userId)
            : [];

        res.render('users/profile', { user_info , enrolledCourses, teachingCourses });
    } catch (err) {
        res.status(500).send("Server Error");
    }
};

exports.editProfile = async (req, res) => {
    try {
        const user = await userModel.getById(req.params.userId);

        if (!user) {
            return res.status(404).send("user not found");
        }

        res.render('users/edit', { user });
    } catch (err) {
        console.log(err);
        res.status(500).send("Server Error");
    }
};