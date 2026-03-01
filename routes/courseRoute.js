const express = require("express");
const router = express.Router();
const courseController = require('../controllers/courseController');
const enrollmentController = require('../controllers/enrollmentController');

router.get("/", courseController.getPublishedCourses);
router.get("/:id", courseController.getCourse);

router.post("/:id/enroll", enrollmentController.create);

module.exports = router;