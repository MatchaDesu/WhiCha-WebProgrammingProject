INSERT INTO users (username, password, first_name, last_name, email, phone, role)
VALUES 
('instructor1', '1234', 'Somchai', 'Tech', 'instructor1@mail.com', '0800000001', 'instructor'),
('student1', '1234', 'Anan', 'Learner', 'student1@mail.com', '0800000002', 'student');

INSERT INTO categories (category_name)
VALUES 
('Programming'),
('Web Development'),
('Database'),
('UX/UI'),
('DevOps');

INSERT INTO courses 
(instructor_id, category_id, course_name, description, course_status, course_price)
VALUES
(1, 1, 'JavaScript Fundamentals', 'พื้นฐาน JavaScript ตั้งแต่เริ่มต้น', 'published', 1500),
(1, 2, 'Node.js Backend Development', 'สร้าง Backend ด้วย Node.js', 'published', 2000),
(1, 3, 'SQL Mastery', 'เรียน SQL ตั้งแต่พื้นฐานถึงขั้นสูง', 'published', 1800),
(1, 4, 'UI/UX Design Basics', 'พื้นฐานการออกแบบ UX/UI', 'published', 1200),
(1, 5, 'DevOps for Beginners', 'พื้นฐาน CI/CD และ Deployment', 'published', 2200);

-- Course 1 (JavaScript)
INSERT INTO modules (course_id, module_name, order_index) VALUES
(1, 'Introduction to JavaScript', 1),
(1, 'Variables and Data Types', 2),
(1, 'Operators', 3),
(1, 'Control Flow', 4),
(1, 'Functions', 5),
(1, 'Arrays', 6),
(1, 'Objects', 7),
(1, 'DOM Manipulation', 8),
(1, 'Events', 9),
(1, 'Mini Project', 10);

-- Course 2 (Node.js)
INSERT INTO modules (course_id, module_name, order_index) VALUES
(2, 'Node.js Intro', 1),
(2, 'NPM and Packages', 2),
(2, 'Express Basics', 3),
(2, 'Routing', 4),
(2, 'Middleware', 5),
(2, 'REST API', 6),
(2, 'Authentication', 7),
(2, 'File Upload', 8),
(2, 'Deployment', 9),
(2, 'Final Project', 10);

-- Course 3 (SQL)
INSERT INTO modules (course_id, module_name, order_index) VALUES
(3, 'Database Intro', 1),
(3, 'SELECT Statement', 2),
(3, 'WHERE Clause', 3),
(3, 'JOIN Basics', 4),
(3, 'GROUP BY', 5),
(3, 'Indexes', 6),
(3, 'Transactions', 7),
(3, 'Subqueries', 8),
(3, 'Optimization', 9),
(3, 'SQL Project', 10);

-- Course 4 (UI/UX)
INSERT INTO modules (course_id, module_name, order_index) VALUES
(4, 'UX Principles', 1),
(4, 'User Research', 2),
(4, 'Wireframing', 3),
(4, 'Prototyping', 4),
(4, 'Color Theory', 5),
(4, 'Typography', 6),
(4, 'Design Systems', 7),
(4, 'Accessibility', 8),
(4, 'Usability Testing', 9),
(4, 'Portfolio Project', 10);

-- Course 5 (DevOps)
INSERT INTO modules (course_id, module_name, order_index) VALUES
(5, 'DevOps Intro', 1),
(5, 'Linux Basics', 2),
(5, 'Git Workflow', 3),
(5, 'CI/CD Concepts', 4),
(5, 'Docker Basics', 5),
(5, 'Docker Compose', 6),
(5, 'Cloud Deployment', 7),
(5, 'Monitoring', 8),
(5, 'Scaling', 9),
(5, 'Final Deployment Project', 10);

INSERT INTO lessons (module_id, lesson_name, content)
VALUES
(1, 'Lesson for Module 1', 'เนื้อหาของบทเรียน module 1');

INSERT INTO quizzes (module_id, title, description)
VALUES
(1, 'Quiz Module 1', 'แบบทดสอบประจำ Module 1');

INSERT INTO lessons (module_id, lesson_name, content)
SELECT module_id,
       'Lesson for Module ' || module_id,
       'Content for Module ' || module_id
FROM modules;

INSERT INTO quizzes (module_id, title, description)
SELECT module_id,
       'Quiz Module ' || module_id,
       'Quiz description for module ' || module_id
FROM modules;

INSERT INTO questions (quiz_id, question_text, question_type, points, order_index)
VALUES
(1, 'JavaScript เป็นภาษาแบบไหน?', 'single', 1, 1);

INSERT INTO choices (question_id, choice_text, is_correct)
VALUES
(1, 'Programming Language', 1),
(1, 'Database', 0),
(1, 'Operating System', 0);