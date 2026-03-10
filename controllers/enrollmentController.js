const enrollmentModel = require('../models/enrollmentModel');

exports.create = async (req, res) => {
    try {
        const userId = req.session.user.id;
        const courseId = req.params.courseId;

        await enrollmentModel.enroll(userId, courseId);

        res.redirect(`/courses/${courseId}`);

    } catch (err) {
        res.status(500).send("Server Error");
    }
};