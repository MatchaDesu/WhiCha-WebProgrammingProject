const express = require("express");
const router = express.Router();
const userController = require('../controllers/userController');

router.get("/:userId", userController.getProfile);

router.get("/:userId/edit", userController.editProfile);

router.post("/:userId/edit", userController.updateProfile);

module.exports = router;