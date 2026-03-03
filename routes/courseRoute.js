const express = require("express");
const router = express.Router();
const courseController = require('../controllers/courseController');
const enrollmentController = require('../controllers/enrollmentController');

router.get("/", courseController.getPublishedCourses);
router.get("/:courseId/", courseController.getCourse);

router.get("/:courseId/dashboard", courseController.getDashboard);
router.get("/:courseId/students", courseController.getStudentDashboard);

router.get("/:courseId/learn", courseController.learnContent);
router.get("/:courseId/learn/:type/:itemId", courseController.learnContent);

router.post("/:courseId/enroll", enrollmentController.create);

module.exports = router;