const userModel = require('../models/userModel');

//ดึงข้อมูลผู้ใช้ + คอร์สที่เรียน
exports.getProfile = async (req, res) => {
    try {
        const userId = req.params.userId;
        const user = await userModel.getById(userId);

        if (!user) {
            return res.status(404).send("User not found");
        }

        // ดึงข้อมูลวิชาที่ลงทะเบียน
        const enrolledCourses = await userModel.getEnrolledCourses(userId) || [];

        res.render('users/profile', { user, enrolledCourses }); 
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

exports.updateProfile = async (req, res) => {
    try {
        const userId = req.params.userId;
        const { first_name, last_name } = req.body;

        //อัปเดตข้อมูลลง Database
        await userModel.updateUser(userId, { first_name, last_name });

        res.redirect(`/users/${req.params.userId}`);
    } catch (err) {
        res.status(500).send("Server Error");
    }
};

exports.getMyLearning = async (req, res) => {
    try {
        const userId = req.session.user.id; 

        const [user, enrolledCourses] = await Promise.all([
            userModel.getById(userId),              // ดึงข้อมูล profile 
            userModel.getEnrolledCourses(userId)    // ดึงรายการคอร์ส
        ]);

        if (!user) {
            return res.status(404).send("User not found");
        }

        res.render('pages/my-learning', { 
            title: 'การเรียนของฉัน',
            user: user,
            enrolledCourses: enrolledCourses || [] 
        });
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
};