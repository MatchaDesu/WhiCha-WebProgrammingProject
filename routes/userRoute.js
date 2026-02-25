const express = require("express");
const router = express.Router();
const userController = require('../controllers/userController');
const upload = require('../middlewares/uploadMiddleware');

router.get("/:id", userController.getProfile);

// Upload
router.post('/:id/profile', upload.single('profileImage'),userController.uploadProfile);

module.exports = router;