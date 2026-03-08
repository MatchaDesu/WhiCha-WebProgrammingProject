-- ============================================================
--  WhiCha LMS — Database Schema (SQLite)
--  Updated: approval workflow, progress tracking,
--           bookmarks, orders, announcements
-- ============================================================

PRAGMA foreign_keys = ON;

-- ------------------------------------------------------------
-- users
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS users (
    user_id       INTEGER PRIMARY KEY AUTOINCREMENT,
    username      VARCHAR(30)  UNIQUE NOT NULL,
    password      TEXT         NOT NULL,
    first_name    VARCHAR(100) NOT NULL,
    last_name     VARCHAR(100) NOT NULL,
    email         TEXT         UNIQUE NOT NULL,
    phone         VARCHAR(15)  NOT NULL,
    profile_image TEXT DEFAULT '/default_image/profile-anonymous.svg',
    role          TEXT CHECK(role IN ('student', 'instructor', 'manager')) DEFAULT 'student',
    created_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at    TIMESTAMP NULL
);

-- ------------------------------------------------------------
-- categories
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS categories (
    category_id   INTEGER PRIMARY KEY AUTOINCREMENT,
    category_name TEXT UNIQUE NOT NULL
);

-- ------------------------------------------------------------
-- courses
-- [CHANGED] course_status: เพิ่ม 'pending' และ 'rejected'
--           draft -> pending -> published / rejected -> (แก้แล้ว) -> pending
-- [ADDED]   rejection_reason : เหตุผลที่ manager ปฏิเสธ
-- [ADDED]   reviewed_by      : manager ที่ review
-- [ADDED]   reviewed_at      : เวลาที่ review
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS courses (
    course_id        INTEGER PRIMARY KEY AUTOINCREMENT,
    instructor_id    INTEGER NOT NULL,
    category_id      INTEGER NOT NULL,
    course_name      TEXT    NOT NULL,
    description      TEXT,
    course_status    TEXT CHECK(course_status IN (
                         'draft',
                         'pending',
                         'published',
                         'rejected'
                     )) DEFAULT 'draft',
    course_image     TEXT DEFAULT '/default_image/course_image.png',
    course_price     INTEGER DEFAULT 0,
    publish_date     TIMESTAMP NULL,
    rejection_reason TEXT NULL,
    reviewed_by      INTEGER NULL,
    reviewed_at      TIMESTAMP NULL,
    created_at       TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at       TIMESTAMP NULL,

    FOREIGN KEY (instructor_id) REFERENCES users(user_id)          ON DELETE RESTRICT,
    FOREIGN KEY (category_id)   REFERENCES categories(category_id) ON DELETE RESTRICT,
    FOREIGN KEY (reviewed_by)   REFERENCES users(user_id)          ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS reviews (
    review_id   INTEGER PRIMARY KEY AUTOINCREMENT,
    course_id   INTEGER NOT NULL,
    user_id     INTEGER NOT NULL,
    rating      INTEGER CHECK(rating BETWEEN 1 AND 5) NOT NULL,
    comment     TEXT,
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    UNIQUE(user_id, course_id),

    FOREIGN KEY (course_id) REFERENCES courses(course_id) ON DELETE CASCADE,
    FOREIGN KEY (user_id)   REFERENCES users(user_id)     ON DELETE CASCADE
);

-- ------------------------------------------------------------
-- enrollments
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS enrollments (
    enrollment_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id       INTEGER NOT NULL,
    course_id     INTEGER NOT NULL,
    enrolled_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    UNIQUE(user_id, course_id),

    FOREIGN KEY (user_id)   REFERENCES users(user_id)     ON DELETE CASCADE,
    FOREIGN KEY (course_id) REFERENCES courses(course_id) ON DELETE CASCADE
);

-- ------------------------------------------------------------
-- modules
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS modules (
    module_id   INTEGER PRIMARY KEY AUTOINCREMENT,
    course_id   INTEGER      NOT NULL,
    module_name VARCHAR(255) NOT NULL,
    order_index INTEGER DEFAULT 0,
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (course_id) REFERENCES courses(course_id) ON DELETE CASCADE
);

-- ------------------------------------------------------------
-- modules_items
-- เชื่อม module กับ lesson/quiz ตาม order
-- item_id คือ lesson_id หรือ quiz_id ขึ้นอยู่กับ item_type
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS modules_items (
    module_item_id INTEGER PRIMARY KEY AUTOINCREMENT,
    module_id      INTEGER NOT NULL,
    item_id        INTEGER NOT NULL,
    item_type      TEXT CHECK(item_type IN ('lesson', 'quiz')) NOT NULL,
    order_index    INTEGER DEFAULT 0,

    UNIQUE(module_id, item_id, item_type),

    FOREIGN KEY (module_id) REFERENCES modules(module_id) ON DELETE CASCADE
);

-- ------------------------------------------------------------
-- lessons
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS lessons (
    lesson_id   INTEGER PRIMARY KEY AUTOINCREMENT,
    module_id   INTEGER NOT NULL,
    lesson_name TEXT,
    content     TEXT,
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (module_id) REFERENCES modules(module_id) ON DELETE CASCADE
);

-- ------------------------------------------------------------
-- content_medias
-- ไฟล์แนบของแต่ละบทเรียน (รูป, วิดีโอ, PDF ฯลฯ)
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS content_medias (
    media_id   INTEGER PRIMARY KEY AUTOINCREMENT,
    lesson_id  INTEGER NOT NULL,
    media_name TEXT,
    media_path TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (lesson_id) REFERENCES lessons(lesson_id) ON DELETE CASCADE
);

-- ------------------------------------------------------------
-- lesson_progress
-- [ADDED] is_completed : 0 = กำลังเรียน, 1 = เรียนจบแล้ว
-- [ADDED] completed_at : เวลาที่กดเสร็จ
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS lesson_progress (
    progress_id  INTEGER PRIMARY KEY AUTOINCREMENT,
    lesson_id    INTEGER NOT NULL,
    user_id      INTEGER NOT NULL,
    is_completed INTEGER DEFAULT 0,
    completed_at TIMESTAMP NULL,

    UNIQUE(user_id, lesson_id),

    FOREIGN KEY (user_id)   REFERENCES users(user_id)     ON DELETE CASCADE,
    FOREIGN KEY (lesson_id) REFERENCES lessons(lesson_id) ON DELETE CASCADE
);

-- ------------------------------------------------------------
-- quizzes
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS quizzes (
    quiz_id     INTEGER PRIMARY KEY AUTOINCREMENT,
    module_id   INTEGER NOT NULL,
    title       TEXT,
    description TEXT,
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (module_id) REFERENCES modules(module_id) ON DELETE CASCADE
);

-- ------------------------------------------------------------
-- questions
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS questions (
    question_id   INTEGER PRIMARY KEY AUTOINCREMENT,
    quiz_id       INTEGER NOT NULL,
    question_text TEXT    NOT NULL,
    question_type TEXT CHECK(question_type IN ('single', 'multiple', 'true_false')) NOT NULL,
    points        INTEGER DEFAULT 1,
    order_index   INTEGER DEFAULT 0,

    FOREIGN KEY (quiz_id) REFERENCES quizzes(quiz_id) ON DELETE CASCADE
);

-- ------------------------------------------------------------
-- choices
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS choices (
    choice_id   INTEGER PRIMARY KEY AUTOINCREMENT,
    question_id INTEGER      NOT NULL,
    choice_text VARCHAR(255) NOT NULL,
    is_correct  INTEGER DEFAULT 0,

    FOREIGN KEY (question_id) REFERENCES questions(question_id) ON DELETE CASCADE
);

-- ------------------------------------------------------------
-- quiz_attempts
-- [ADDED] total_points : คะแนนเต็มของ quiz (คำนวณตอน start)
-- [ADDED] passed       : 1 = ผ่าน, 0 = ไม่ผ่าน (คำนวณตอน submit)
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS quiz_attempts (
    attempt_id   INTEGER PRIMARY KEY AUTOINCREMENT,
    quiz_id      INTEGER NOT NULL,
    user_id      INTEGER NOT NULL,
    score        INTEGER DEFAULT 0,
    total_points INTEGER DEFAULT 0,
    passed       INTEGER DEFAULT 0,
    started_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    submitted_at TIMESTAMP NULL,

    UNIQUE(user_id, quiz_id),

    FOREIGN KEY (user_id) REFERENCES users(user_id)   ON DELETE CASCADE,
    FOREIGN KEY (quiz_id) REFERENCES quizzes(quiz_id) ON DELETE CASCADE
);

-- ------------------------------------------------------------
-- bookmarks
-- ผู้เรียน bookmark คอร์สที่สนใจไว้ดูทีหลัง
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS bookmarks (
    bookmark_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id     INTEGER NOT NULL,
    course_id   INTEGER NOT NULL,
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    UNIQUE(user_id, course_id),

    FOREIGN KEY (user_id)   REFERENCES users(user_id)     ON DELETE CASCADE,
    FOREIGN KEY (course_id) REFERENCES courses(course_id) ON DELETE CASCADE
);

-- ------------------------------------------------------------
-- orders
-- บันทึกการซื้อคอร์ส (รองรับคอร์สมีราคา)
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS orders (
    order_id   INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id    INTEGER NOT NULL,
    course_id  INTEGER NOT NULL,
    amount     INTEGER NOT NULL,
    status     TEXT CHECK(status IN ('pending', 'completed', 'refunded')) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (user_id)   REFERENCES users(user_id)     ON DELETE RESTRICT,
    FOREIGN KEY (course_id) REFERENCES courses(course_id) ON DELETE RESTRICT
);

-- ------------------------------------------------------------
-- announcements
-- ประกาศจาก instructor ถึงผู้เรียนในคอร์ส
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS announcements (
    announcement_id INTEGER PRIMARY KEY AUTOINCREMENT,
    course_id       INTEGER NOT NULL,
    instructor_id   INTEGER NOT NULL,
    title           TEXT    NOT NULL,
    content         TEXT,
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (course_id)     REFERENCES courses(course_id) ON DELETE CASCADE,
    FOREIGN KEY (instructor_id) REFERENCES users(user_id)     ON DELETE RESTRICT
);

-- ============================================================
--  VIEW: course_progress_view
--  คำนวณ progress ของผู้เรียนแต่ละคนในแต่ละคอร์ส
--
--  progress_percent =
--    (lessons ที่ is_completed=1 + quizzes ที่ submitted_at IS NOT NULL)
--    / items ทั้งหมดใน course * 100
-- ============================================================
CREATE VIEW IF NOT EXISTS course_progress_view AS
SELECT
    e.user_id,
    e.course_id,

    COUNT(DISTINCT mi.module_item_id) AS total_items,

    COUNT(DISTINCT CASE
        WHEN mi.item_type = 'lesson' AND lp.is_completed = 1
        THEN mi.module_item_id
    END) AS completed_lessons,

    COUNT(DISTINCT CASE
        WHEN mi.item_type = 'quiz' AND qa.submitted_at IS NOT NULL
        THEN mi.module_item_id
    END) AS completed_quizzes,

    ROUND(
        (
            COUNT(DISTINCT CASE
                WHEN mi.item_type = 'lesson' AND lp.is_completed = 1
                THEN mi.module_item_id
            END)
            +
            COUNT(DISTINCT CASE
                WHEN mi.item_type = 'quiz' AND qa.submitted_at IS NOT NULL
                THEN mi.module_item_id
            END)
        ) * 100.0
        / NULLIF(COUNT(DISTINCT mi.module_item_id), 0)
    , 1) AS progress_percent

FROM enrollments e
JOIN modules       m  ON m.course_id   = e.course_id
JOIN modules_items mi ON mi.module_id  = m.module_id

LEFT JOIN lesson_progress lp
    ON  lp.lesson_id = mi.item_id
    AND lp.user_id   = e.user_id
    AND mi.item_type = 'lesson'

LEFT JOIN quiz_attempts qa
    ON  qa.quiz_id = mi.item_id
    AND qa.user_id = e.user_id
    AND mi.item_type = 'quiz'

GROUP BY e.user_id, e.course_id;
