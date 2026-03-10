const userModel = require('../models/userModel');
const courseModel = require('../models/courseModel');

exports.updateProfile = async (req, res) => {
    try {
        const userId = req.params.id;
        
        const { username, first_name, last_name, email, phone, password, confirm_password } = req.body;

        if (req.file) {
            const imagePath = `/uploads/users/${userId}/${req.file.filename}`;
            await userModel.updateProfile(userId, imagePath); 
        }

        const userData = { username, first_name, last_name, email, phone };
        await userModel.updateUserInfo(userId, userData);

        if (password) {
            if (password !== confirm_password) {
                return res.status(400).send("รหัสผ่านยืนยันไม่ตรงกัน");
            }
            await userModel.updateUserPassword(userId, password);
        }

        res.redirect(`/users/${userId}`);

    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
};

exports.updateCourse = async (req, res) => {
    try {
        const courseId = req.params.id;

        if (req.file) {
            const imagePath = `/uploads/courses/${courseId}/${req.file.filename}`;
            await courseModel.updateCourseImage(courseId, imagePath);
        }

        await courseModel.updateCourse(courseId, {
            course_name:  req.body.name,
            description:  req.body.description,
            course_price: req.body.price,
            category_id:  req.body.category,
        });

        res.redirect(`/instructor/courses/${courseId}/edit`);
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
};

exports.uploadLessonImage = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        const lessonId = req.params.id;
        const url = `/uploads/lessons/${lessonId}/${req.file.filename}`;
        res.json({ url });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server Error' });
    }
};
