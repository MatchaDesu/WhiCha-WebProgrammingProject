const userModel = require('../models/userModel');

exports.getProfile = async (req, res) => {
    try {
        const user = await userModel.getById(req.params.userId);

        if (!user) {
            return res.status(404).send("user not found");
        }

        res.render('users/profile', { user });
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