const express = require("express");
const router = express.Router();
const userController = require('../controllers/userController');

router.get("/:userId", userController.getProfile);
router.get("/:userId/edit", userController.editProfile);

module.exports = router;