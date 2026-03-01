const enrollmentModel = require('../models/enrollmentModel');

exports.create = async (req, res) => {
    try {
        const user_id = req.session.user.id;
        const course_id = req.params.id;

        await enrollmentModel.enroll(user_id, course_id);

        res.redirect(`/courses/${course_id}`);

    } catch (err) {
        res.status(500).send("Server Error");
    }
};