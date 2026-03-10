const express = require("express");
const router = express.Router();
const courseController = require('../controllers/courseController');
const enrollmentController = require('../controllers/enrollmentController');

router.get("/", courseController.getPublishedCourses);
router.get("/:courseId/", courseController.getDetail);

router.get("/:courseId/dashboard", courseController.getDashboard);
router.get("/:courseId/students", courseController.getStudentDashboard);

router.get('/:courseId/checkout', courseController.getCheckout);
router.post("/:courseId/enroll", enrollmentController.create);

router.get("/:courseId/learn", courseController.learnContent);
router.get("/:courseId/learn/:type/:itemId", courseController.learnContent);

router.post("/:courseId/lessons/:lessonId/complete", courseController.completeLesson);
router.post("/:courseId/lessons/:lessonId/incomplete", courseController.incompleteLesson);

router.post('/:courseId/quizzes/:quizId/submit', courseController.submitQuiz);

router.post('/:courseId/reviews', courseController.submitReview);

module.exports = router;