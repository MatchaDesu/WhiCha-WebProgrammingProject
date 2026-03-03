const express = require('express');
const router = express.Router();
const instructorController = require('../controllers/instructorController');

// ==========================================
// Dashboard & Course Creation
// ==========================================
router.get('/', instructorController.dashboard);
router.get('/create-course', instructorController.courseCreate);
router.post('/courses/create', instructorController.createCourse);

// ==========================================
// Course Management (Edit, Update, Publish)
// ==========================================
router.get('/courses/:id/edit', instructorController.getEditCourse);
router.get('/courses/:id/edit/:type/:itemId', instructorController.getEditCourse);
router.post('/courses/:id/update', instructorController.updateCourse);
router.post('/courses/:id/publish', instructorController.publishCourse);

// ==========================================
// Module Management
// ==========================================
router.post('/courses/:id/modules/create', instructorController.createModule);
router.post('/courses/:id/modules/:moduleId/delete', instructorController.deleteModule);

// ==========================================
// Lesson Management
// ==========================================
router.post('/courses/:id/modules/:moduleId/lessons/create', instructorController.createLesson);
router.post('/courses/:id/lessons/:lessonId/update', instructorController.updateLesson);

// ==========================================
// Quiz & Question Management
// ==========================================
router.post('/courses/:id/modules/:moduleId/quizzes/create', instructorController.createQuiz);
router.post('/courses/:id/quizzes/:quizId/update', instructorController.updateQuiz);

router.post('/courses/:id/quizzes/:quizId/questions/create', instructorController.createQuestion);
router.post('/courses/:id/quizzes/:quizId/questions/:questionId/update', instructorController.updateQuestion);
router.post('/courses/:id/quizzes/:quizId/questions/:questionId/delete', instructorController.deleteQuestion);

module.exports = router;