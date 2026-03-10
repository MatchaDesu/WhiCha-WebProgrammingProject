const express = require('express');
const router = express.Router();
const uploadSource = require('../middlewares/uploadMiddleware');
const uploadController = require('../controllers/uploadController');

router.post(
    '/upload-user-profile/:id',
    uploadSource('users').single('profile'),
    uploadController.updateProfile
);

router.post(
    '/upload-courses-cover/:id',
    uploadSource('courses').single('course_image'),
    uploadController.updateCourse
);

router.post(
    '/lesson-image/:id',
    uploadSource('lessons').single('image'),
    uploadController.uploadLessonImage
);

module.exports = router;
