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
// Course Dashboard: Tabs Navigation (แยก 3 หน้า)
// ==========================================

// [Tab 1] ตั้งค่าคอร์ส (Course Settings)
router.get('/courses/:id/edit', instructorController.getCourseSettings);
router.post('/courses/:id/update', instructorController.updateCourse);
router.post('/courses/:id/pending', instructorController.pendingCourse);

// [Tab 2] จัดการเนื้อหา (Modules, Lessons, Quizzes)
router.get('/courses/:id/modules', instructorController.getCourseModules);
router.get('/courses/:id/modules/:type/:itemId', instructorController.getCourseModules); // สำหรับเปิดหน้าจอแก้ไข Lesson/Quiz ย่อย

// [Tab 3] รายชื่อนักเรียน (Students)
router.get('/courses/:id/students', instructorController.getCourseStudents);

// ==========================================
// Module Management (API/Action)
// ==========================================
router.post('/courses/:id/modules/create', instructorController.createModule);
router.post('/courses/:id/modules/:moduleId/update', instructorController.updateModule);
router.post('/courses/:id/modules/:moduleId/delete', instructorController.deleteModule);

// ==========================================
// Lesson Management (API/Action)
// ==========================================
router.post('/courses/:id/modules/:moduleId/lessons/create', instructorController.createLesson);
router.post('/courses/:id/lessons/:lessonId/update', instructorController.updateLesson);

// ==========================================
// Quiz & Question Management (API/Action)
// ==========================================
// จัดการตัวควิซหลัก
router.post('/courses/:id/modules/:moduleId/quizzes/create', instructorController.createQuiz);
router.post('/courses/:id/quizzes/:quizId/update', instructorController.updateQuiz);

// จัดการคำถามและตัวเลือกในควิซ
router.post('/courses/:id/quizzes/:quizId/questions/create', instructorController.createQuestion);
router.post('/courses/:id/quizzes/:quizId/questions/:questionId/update', instructorController.updateQuestion);
router.post('/courses/:id/quizzes/:quizId/questions/:questionId/delete', instructorController.deleteQuestion);

module.exports = router;