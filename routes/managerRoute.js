const express = require('express');
const router = express.Router();

const managerController = require('../controllers/managerController');

router.get('/', managerController.dashboard);
router.get('/dashboard', managerController.dashboard);
router.get('/users',managerController.getUsers);
router.get('/courses',managerController.getCourses);
router.get('/enrollments',managerController.getEnrollments);
router.get('/courses/:courseId',managerController.getCourseDetail);

router.post('/courses/:courseId/approve', managerController.approveCourse);
router.post('/courses/:courseId/reject', managerController.rejectCourse);

module.exports = router;