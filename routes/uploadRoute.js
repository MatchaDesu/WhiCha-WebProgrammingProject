const express = require('express');
const router = express.Router();
const uploadSource = require('../middlewares/uploadMiddleware');
const uploadController = require('../controllers/uploadController');

// สำหรับ User Profile
router.post(
    '/upload-user-profile/:id', 
    uploadSource('users').single('profile'),
    uploadController.updateProfile
);

// สำหรับ Course Cover
router.post(
    '/upload-courses-cover/:id', 
    uploadSource('courses').single('course_image'),
    uploadController.updateCourse
);

router.post(
    '/upload/lesson-image',
    uploadSource('lessons').single('image'),
    uploadController.uploadLessonImage
);


module.exports = router;