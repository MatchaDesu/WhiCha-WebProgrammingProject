-- 1. เพิ่มข้อมูล Users (ผู้สอน 1 คน, ผู้จัดการ 1 คน, นักเรียน 2 คน)
INSERT INTO users (username, password, first_name, last_name, email, phone, role) VALUES
('teacher_somchai', 'hashed_pass_1', 'Somchai', 'Jaidee', 'somchai@email.com', '0811111111', 'instructor'),
('admin_jane', 'hashed_pass_2', 'Jane', 'Manager', 'jane@email.com', '0822222222', 'manager'),
('student_alice', 'hashed_pass_3', 'Alice', 'Learn', 'alice@email.com', '0833333333', 'student'),
('student_bob', 'hashed_pass_4', 'Bob', 'Study', 'bob@email.com', '0844444444', 'student');

-- 2. เพิ่มข้อมูล Categories (หมวดหมู่คอร์สเรียน)
INSERT INTO categories (category_name) VALUES
('Programming'),
('Design & Arts'),
('Business');

-- 3. เพิ่มข้อมูล Courses (คอร์สเรียน 2 คอร์ส โดยดึง instructor_id = 1)
INSERT INTO courses (instructor_id, category_id, course_name, description, course_status, course_price) VALUES
(1, 1, 'Python 101 for Beginners', 'เรียน Python ตั้งแต่ศูนย์จนเขียนโปรแกรมเป็น', 'published', 1500),
(1, 2, 'Photoshop Masterclass', 'พื้นฐานการแต่งรูปด้วย Photoshop', 'draft', 990);

-- 4. เพิ่มข้อมูล Enrollments (นักเรียน Alice(3) และ Bob(4) ลงทะเบียนเรียนคอร์ส Python(1))
INSERT INTO enrollments (user_id, course_id) VALUES
(3, 1),
(4, 1);

-- 5. เพิ่มข้อมูล Modules (สร้าง 2 บทเรียนหลัก ให้คอร์ส Python(1))
INSERT INTO modules (course_id, module_name, order_index) VALUES
(1, 'Chapter 1: Getting Started', 1),
(1, 'Chapter 2: Core Concepts', 2);

-- 6. เพิ่มข้อมูล Lessons (สร้างเนื้อหาย่อย ให้คอร์ส Python(1))
INSERT INTO lessons (course_id, lesson_name, content) VALUES
(1, 'Welcome to Python', '# ยินดีต้อนรับ\nมาทำความรู้จักกับ Python กันเถอะ'),
(1, 'Installation Guide', '# การติดตั้ง\nสอนการโหลดและติดตั้งโปรแกรม'),
(1, 'Variables & Data Types', '# ตัวแปร\nวิธีประกาศตัวแปรใน Python');

-- 7. เพิ่มข้อมูล Quizzes (สร้างแบบทดสอบ ให้คอร์ส Python(1))
INSERT INTO quizzes (course_id, title, description) VALUES
(1, 'Chapter 1 Quiz', 'แบบทดสอบเก็บคะแนนประจำบทที่ 1');

-- 8. เพิ่มข้อมูล Modules Items (นำเนื้อหาและแบบทดสอบ ไปเรียงใส่ลงใน Module)
-- Module 1 (บทที่ 1) มี: Lesson 1 -> Lesson 2 -> Quiz 1
-- Module 2 (บทที่ 2) มี: Lesson 3
INSERT INTO modules_items (module_id, item_id, item_type, order_index) VALUES
(1, 1, 'lesson', 1),
(1, 2, 'lesson', 2),
(1, 1, 'quiz', 3),
(2, 3, 'lesson', 1);

-- 9. เพิ่มข้อมูล Content Medias (ไฟล์สื่อประกอบบทเรียน สำหรับ Lesson 1 และ 2)
INSERT INTO content_medias (lesson_id, media_name, media_path) VALUES
(1, 'Intro Video', '/storage/videos/intro.mp4'),
(2, 'Install PDF', '/storage/docs/install_guide.pdf');

-- 10. เพิ่มข้อมูล Lesson Progress (บันทึกว่านักเรียนเรียนบทไหนจบแล้วบ้าง)
-- Alice(3) เรียนจบ Lesson 1 และ 2
-- Bob(4) เพิ่งเรียนจบ Lesson 1
INSERT INTO lesson_progress (lesson_id, user_id) VALUES
(1, 3),
(2, 3),
(1, 4);

-- 11. เพิ่มข้อมูล Questions (สร้างคำถาม 2 ข้อ สำหรับ Quiz 1)
INSERT INTO questions (quiz_id, question_text, question_type, points, order_index) VALUES
(1, 'นามสกุลไฟล์ของภาษา Python คือข้อใด?', 'single', 1, 1),
(1, 'Python เป็นภาษาโปรแกรมที่ต้องทำการ Compile ก่อนรันเสมอ (True/False)?', 'true_false', 1, 2);

-- 12. เพิ่มข้อมูล Choices (ตัวเลือกคำตอบของแต่ละข้อ โดย 1=ถูก, 0=ผิด)
INSERT INTO choices (question_id, choice_text, is_correct) VALUES
(1, '.py', 1),
(1, '.python', 0),
(1, '.pt', 0),
(1, '.php', 0),
(2, 'True (จริง)', 0),
(2, 'False (เท็จ)', 1);

-- 13. เพิ่มข้อมูล Quiz Attempts (จำลองว่า Alice(3) สอบเสร็จแล้ว ได้ 2 คะแนนเต็ม)
INSERT INTO quiz_attempts (quiz_id, user_id, score, submitted_at) VALUES
(1, 3, 2, CURRENT_TIMESTAMP);