const userModel = require('../models/userModel');

// exports.getAllUsers = async (req, res) => {
//     try {
//         const users = await userModel.getAll();
//         res.render('users', { users });
//     } catch (err) {
//         res.status(500).send("Server Error");
//     }
// };

exports.getProfile = async (req, res) => {
    try {
        const user = await userModel.getById(req.params.id);

        if (!user) {
            return res.status(404).send("user not found");
        }

        res.render('users', { user });
    } catch (err) {
        res.status(500).send("Server Error");
    }
};

exports.uploadProfile = async (req, res) => {

    try {
        const userId = req.params.id;

        if (!req.file) {
            return res.status(400).send("No file uploaded");
        }

        const imagePath = `/uploads/users/${userId}/profile/${req.file.filename}`;

        await userModel.updateProfile(userId, imagePath);

        res.redirect(`/users/${userId}`);
    } catch (err) {
        res.status(500).send("Server Error");
    }

};

// exports.createuser = async (req, res) => {
//     try {
//         const { title, description } = req.body;

//         await userModel.create(title, description);

//         res.redirect('/users');
//     } catch (err) {
//         res.status(500).send("Server Error");
//     }
// };