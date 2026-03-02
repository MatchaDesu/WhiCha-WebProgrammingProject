const express = require("express");
const router = express.Router();
const courseController = require('../controllers/courseController');
const enrollmentController = require('../controllers/enrollmentController');

router.get("/", courseController.getPublishedCourses);
router.get("/:id", courseController.getCourse);

router.get("/:id/learn", courseController.enterCourse);
router.get("/:id/learn/:type/:itemId", courseController.enterCourse);

router.post("/:id/enroll", enrollmentController.create);

module.exports = router;