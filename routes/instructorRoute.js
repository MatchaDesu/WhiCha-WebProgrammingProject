const express = require('express');
const router = express.Router();
const instructorController = require('../controllers/instructorController');

router.get('/', instructorController.dashboard);
router.get('/create-course', instructorController.courseCreate);
router.post('/courses/create', instructorController.createCourse);

router.get('/courses/:id/edit', instructorController.getCourseSettings);
router.post('/courses/:id/update', instructorController.updateCourse);
router.post('/courses/:id/pending', instructorController.pendingCourse);

router.get('/courses/:id/modules', instructorController.getCourseModules);
router.get('/courses/:id/modules/:type/:itemId', instructorController.getCourseModules);

router.get('/courses/:id/students', instructorController.getCourseStudents);
router.get('/courses/:id/students/export-csv', instructorController.getStudentCSV);

router.post('/courses/:id/modules/create', instructorController.createModule);
router.post('/courses/:id/modules/:moduleId/update', instructorController.updateModule);
router.post('/courses/:id/modules/:moduleId/delete', instructorController.deleteModule);

router.post('/courses/:id/modules/:moduleId/lessons/create', instructorController.createLesson);
router.post('/courses/:id/lessons/:lessonId/update', instructorController.updateLesson);

router.post('/courses/:id/modules/:moduleId/quizzes/create', instructorController.createQuiz);
router.post('/courses/:id/quizzes/:quizId/update', instructorController.updateQuiz);

router.post('/courses/:id/quizzes/:quizId/questions/create', instructorController.createQuestion);
router.post('/courses/:id/quizzes/:quizId/questions/:questionId/update', instructorController.updateQuestion);
router.post('/courses/:id/quizzes/:quizId/questions/:questionId/delete', instructorController.deleteQuestion);

module.exports = router;