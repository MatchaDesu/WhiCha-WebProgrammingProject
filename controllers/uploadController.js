const userModel = require('../models/userModel');
const courseModel = require('../models/courseModel');

exports.uploadProfile = async (req, res) => {

    try {
        const userId = req.params.id;

        if (!req.file) {
            return res.status(400).send("No file uploaded");
        }

        const imagePath = `/uploads/users/${userId}/${req.file.filename}`;

        await userModel.updateProfile(userId, imagePath);

        res.redirect(`/users/${userId}`);
    } catch (err) {
        console.log(err);
        res.status(500).send("Server Error");
    }

};

exports.uploadCourseCover = async (req, res) => {

    try {
        const courseId = req.params.id;

        if (!req.file) {
            return res.status(400).send("No file uploaded");
        }

        const imagePath = `/uploads/courses/${courseId}/${req.file.filename}`;

        await courseModel.updateProfile(courseId, imagePath);

        res.redirect(`/courses/${courseId}`);
    } catch (err) {
        console.log(err);
        res.status(500).send("Server Error");
    }

};