const express = require('express');
const router = express.Router();
const instructorController = require('../controllers/instructorController');

router.get('/', instructorController.dashboard);

// หน้า create course
router.get('/create-course', instructorController.courseCreate);

// สร้าง course
router.post('/courses/create', instructorController.createCourse);

// หน้าแก้ไข course (รวม lesson / quiz)
router.get('/courses/:id/edit', instructorController.getEditCourse);

// เปิด edit lesson หรือ quiz
router.get(
  '/courses/:id/edit/:type/:itemId',
  instructorController.getEditCourse
);

// update course detail
router.post('/courses/:id/update', instructorController.updateCourse);

// publish course
router.post('/courses/:id/publish', instructorController.publishCourse);

// สร้าง module
router.post(
  '/courses/:id/modules/create',
  instructorController.createModule
);

// ลบ module
router.post(
  '/courses/:id/modules/:moduleId/delete',
  instructorController.deleteModule
);

// สร้าง lesson
router.post(
  '/courses/:id/modules/:moduleId/lessons/create',
  instructorController.createLesson
);

// update lesson
router.post(
  '/courses/:id/lessons/:lessonId/update',
  instructorController.updateLesson
);

// สร้าง quiz
router.post(
  '/courses/:id/modules/:moduleId/quizzes/create',
  instructorController.createQuiz
);

// update quiz
router.post(
  'quizzes/:quiz_id/update',
  instructorController.updateQuiz
);


module.exports = router;