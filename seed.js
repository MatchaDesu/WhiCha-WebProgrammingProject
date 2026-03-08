// ============================================================
//  WhiCha LMS — Seed Data
//  lib: sqlite3 (callback-based)
//  password: plain text (dev only)
//
//  Usage:
//    node seed.js
// ============================================================

const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const DB_PATH = process.env.DB_PATH || path.join(__dirname, 'data/database.db');
const db = new sqlite3.Database(DB_PATH, (err) => {
  if (err) { console.error('❌ Cannot open database:', err.message); process.exit(1); }
  console.log('📂 Connected to', DB_PATH);
});

// ── helper: run ที่ return Promise ────────────────────────────
const run = (sql, params = []) =>
  new Promise((resolve, reject) =>
    db.run(sql, params, function (err) {
      if (err) reject(err);
      else resolve(this.lastID);
    })
  );

const all = (sql, params = []) =>
  new Promise((resolve, reject) =>
    db.all(sql, params, (err, rows) => (err ? reject(err) : resolve(rows)))
  );

// ── main ──────────────────────────────────────────────────────
async function seed() {
  console.log('\n🌱 Starting seed...\n');

  await run('PRAGMA foreign_keys = ON');

  // ── 0. Clear existing data ──────────────────────────────────
  const tables = [
    'reviews',
    'announcements', 'bookmarks', 'orders',
    'quiz_attempts', 'choices', 'questions', 'quizzes',
    'lesson_progress', 'content_medias', 'lessons',
    'modules_items', 'modules',
    'enrollments', 'courses', 'categories', 'users',
  ];

  for (const t of tables) {
    await run(`DELETE FROM ${t}`);
    await run(`DELETE FROM sqlite_sequence WHERE name = '${t}'`);
  }
  console.log('🗑️  Cleared existing data');

  // ──────────────────────────────────────────────────────────
  // 1. USERS
  // ──────────────────────────────────────────────────────────
  const users = [
    // manager
    {
      username: 'manager01', password: 'manager1234',
      first_name: 'มานพ', last_name: 'พันธ์โคกกรวด',
      email: 'manager@whicha.dev', phone: '0800000001', role: 'manager',
    },
    // instructors
    {
      username: 'instructor01', password: 'instructor1234',
      first_name: 'สมชาย', last_name: 'ใจดี',
      email: 'somchai@whicha.dev', phone: '0800000002', role: 'instructor',
    },
    {
      username: 'instructor02', password: 'instructor1234',
      first_name: 'วิภา', last_name: 'รักสอน',
      email: 'wipa@whicha.dev', phone: '0800000003', role: 'instructor',
    },
    // students
    {
      username: 'student01', password: 'student1234',
      first_name: 'พลอยชมพู', last_name: 'จินดามัย',
      email: 'ploy@whicha.dev', phone: '0800000004', role: 'student',
    },
    {
      username: 'student02', password: 'student1234',
      first_name: 'นราธร', last_name: 'อู่สุวรรณ์',
      email: 'nara@whicha.dev', phone: '0800000005', role: 'student',
    },
    {
      username: 'student03', password: 'student1234',
      first_name: 'สายชล', last_name: 'ไชยมูล',
      email: 'saichon@whicha.dev', phone: '0800000006', role: 'student',
    },
    {
      username: 'student04', password: 'student1234',
      first_name: 'อนัญพร', last_name: 'สากำ',
      email: 'ananya@whicha.dev', phone: '0800000007', role: 'student',
    },
  ];

  const userIds = {};
  for (const u of users) {
    const id = await run(
      `INSERT INTO users (username, password, first_name, last_name, email, phone, role)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [u.username, u.password, u.first_name, u.last_name, u.email, u.phone, u.role]
    );
    userIds[u.username] = id;
  }
  console.log(`✅ Users (${users.length})`);

  // ──────────────────────────────────────────────────────────
  // 2. CATEGORIES
  // ──────────────────────────────────────────────────────────
  const categories = [
    'Programming', 'Web Development', 'Data Science',
    'Design', 'Business', 'Database',
  ];
  const catIds = {};
  for (const name of categories) {
    const id = await run(`INSERT INTO categories (category_name) VALUES (?)`, [name]);
    catIds[name] = id;
  }
  console.log(`✅ Categories (${categories.length})`);

  // ──────────────────────────────────────────────────────────
  // 3. COURSES
  // ──────────────────────────────────────────────────────────
  const courseDefs = [
    {
      key: 'webprog',
      instructor: 'instructor01',
      category: 'Web Development',
      course_name: 'Fundamental Web Programming',
      description: 'เรียนรู้พื้นฐาน HTML, CSS, JavaScript และ Node.js สำหรับผู้เริ่มต้น',
      course_status: 'published',
      course_price: 0,
      publish_date: '2025-01-10',
    },
    {
      key: 'nodejs',
      instructor: 'instructor01',
      category: 'Web Development',
      course_name: 'Node.js & Express ขั้นสูง',
      description: 'เจาะลึก REST API, Middleware, Authentication และ Deployment',
      course_status: 'published',
      course_price: 499,
      publish_date: '2025-02-01',
    },
    {
      key: 'database',
      instructor: 'instructor02',
      category: 'Database',
      course_name: 'SQL และ Database Design',
      description: 'ออกแบบ Schema, เขียน Query, และทำ Normalization',
      course_status: 'published',
      course_price: 299,
      publish_date: '2025-01-20',
    },
    {
      key: 'pending_course',
      instructor: 'instructor02',
      category: 'Data Science',
      course_name: 'Python for Data Science',
      description: 'pandas, numpy, matplotlib สำหรับนักวิเคราะห์ข้อมูล',
      course_status: 'pending',
      course_price: 599,
      publish_date: null,
    },
    {
      key: 'draft_course',
      instructor: 'instructor01',
      category: 'Design',
      course_name: 'UI/UX Design Fundamentals',
      description: 'หลักการออกแบบ UI/UX ด้วย Figma',
      course_status: 'draft',
      course_price: 0,
      publish_date: null,
    },
    {
      key: 'rejected_course',
      instructor: 'instructor02',
      category: 'Business',
      course_name: 'Digital Marketing เบื้องต้น',
      description: 'การตลาดออนไลน์ SEO, Social Media, และ Google Ads',
      course_status: 'rejected',
      course_price: 399,
      publish_date: null,
      rejection_reason: 'เนื้อหายังไม่ครบถ้วน กรุณาเพิ่ม Quiz อย่างน้อย 1 ชุดต่อ Module',
      reviewed_by: 'manager01',
    },
  ];

  const courseIds = {};
  for (const c of courseDefs) {
    const id = await run(
      `INSERT INTO courses
         (instructor_id, category_id, course_name, description, course_status, course_price,
          publish_date, rejection_reason, reviewed_by, reviewed_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        userIds[c.instructor],
        catIds[c.category],
        c.course_name,
        c.description,
        c.course_status,
        c.course_price,
        c.publish_date || null,
        c.rejection_reason || null,
        c.reviewed_by ? userIds[c.reviewed_by] : null,
        c.reviewed_by ? new Date().toISOString() : null,
      ]
    );
    courseIds[c.key] = id;
  }
  console.log(`✅ Courses (${courseDefs.length})`);

  // ──────────────────────────────────────────────────────────
  // 4. MODULES → LESSONS / QUIZZES → MODULES_ITEMS
  // ──────────────────────────────────────────────────────────

  // helper: สร้าง module พร้อม items ทั้งหมด
  async function createModule(courseId, moduleName, orderIndex, items) {
    const moduleId = await run(
      `INSERT INTO modules (course_id, module_name, order_index) VALUES (?, ?, ?)`,
      [courseId, moduleName, orderIndex]
    );

    let itemOrder = 0;
    const result = { moduleId, lessonIds: [], quizIds: [] };

    for (const item of items) {
      if (item.type === 'lesson') {
        const lessonId = await run(
          `INSERT INTO lessons (module_id, lesson_name, content) VALUES (?, ?, ?)`,
          [moduleId, item.name, item.content || '']
        );
        await run(
          `INSERT INTO modules_items (module_id, item_id, item_type, order_index) VALUES (?, ?, 'lesson', ?)`,
          [moduleId, lessonId, itemOrder++]
        );
        result.lessonIds.push(lessonId);

      } else if (item.type === 'quiz') {
        const quizId = await run(
          `INSERT INTO quizzes (module_id, title, description) VALUES (?, ?, ?)`,
          [moduleId, item.name, item.description || '']
        );
        await run(
          `INSERT INTO modules_items (module_id, item_id, item_type, order_index) VALUES (?, ?, 'quiz', ?)`,
          [moduleId, quizId, itemOrder++]
        );

        // สร้าง questions + choices
        if (item.questions) {
          let qOrder = 0;
          for (const q of item.questions) {
            const questionId = await run(
              `INSERT INTO questions (quiz_id, question_text, question_type, points, order_index)
               VALUES (?, ?, ?, ?, ?)`,
              [quizId, q.text, q.type || 'single', q.points || 1, qOrder++]
            );
            for (const ch of q.choices) {
              await run(
                `INSERT INTO choices (question_id, choice_text, is_correct) VALUES (?, ?, ?)`,
                [questionId, ch.text, ch.correct ? 1 : 0]
              );
            }
          }
        }
        result.quizIds.push(quizId);
      }
    }
    return result;
  }

  // ── Course: webprog ────────────────────────────────────────
  const wp = {};

  const wp1 = await createModule(courseIds.webprog, 'HTML พื้นฐาน', 1, [
    { type: 'lesson', name: 'HTML คืออะไร?', content: '## HTML คืออะไร?\nHTML ย่อมาจาก HyperText Markup Language...' },
    { type: 'lesson', name: 'Tags และ Elements', content: '## Tags พื้นฐาน\n`<h1>`, `<p>`, `<a>`, `<img>`...' },
    { type: 'lesson', name: 'Forms และ Input', content: '## HTML Forms\nการสร้างฟอร์มเพื่อรับข้อมูลจากผู้ใช้...' },
    {
      type: 'quiz', name: 'ทดสอบ HTML พื้นฐาน', description: 'ทดสอบความเข้าใจเรื่อง HTML',
      questions: [
        {
          text: 'HTML ย่อมาจากอะไร?', type: 'single', points: 1,
          choices: [
            { text: 'HyperText Markup Language', correct: true },
            { text: 'High Transfer Markup Language', correct: false },
            { text: 'Hyper Transfer Mode Language', correct: false },
            { text: 'HyperText Mode Language', correct: false },
          ],
        },
        {
          text: 'Tag ใดใช้สร้าง Heading ใหญ่ที่สุด?', type: 'single', points: 1,
          choices: [
            { text: '<h6>', correct: false },
            { text: '<h1>', correct: true },
            { text: '<head>', correct: false },
            { text: '<header>', correct: false },
          ],
        },
        {
          text: 'Attribute ใดใช้กำหนด URL ใน tag <a>?', type: 'single', points: 1,
          choices: [
            { text: 'src', correct: false },
            { text: 'href', correct: true },
            { text: 'link', correct: false },
            { text: 'url', correct: false },
          ],
        },
      ],
    },
  ]);
  wp.module1LessonIds = wp1.lessonIds;
  wp.module1QuizIds = wp1.quizIds;

  const wp2 = await createModule(courseIds.webprog, 'CSS และ Styling', 2, [
    { type: 'lesson', name: 'CSS Selectors', content: '## CSS Selectors\nClass, ID, Element selectors...' },
    { type: 'lesson', name: 'Flexbox Layout', content: '## Flexbox\n`display: flex`, `justify-content`, `align-items`...' },
    {
      type: 'quiz', name: 'ทดสอบ CSS', description: 'ทดสอบความเข้าใจเรื่อง CSS',
      questions: [
        {
          text: 'Property ใดใช้เปลี่ยนสีตัวอักษร?', type: 'single', points: 1,
          choices: [
            { text: 'font-color', correct: false },
            { text: 'text-color', correct: false },
            { text: 'color', correct: true },
            { text: 'foreground', correct: false },
          ],
        },
        {
          text: 'Flexbox เปิดใช้งานด้วย property ใด?', type: 'single', points: 1,
          choices: [
            { text: 'display: block', correct: false },
            { text: 'display: flex', correct: true },
            { text: 'flex: 1', correct: false },
            { text: 'layout: flex', correct: false },
          ],
        },
      ],
    },
  ]);
  wp.module2LessonIds = wp2.lessonIds;
  wp.module2QuizIds = wp2.quizIds;

  const wp3 = await createModule(courseIds.webprog, 'JavaScript เบื้องต้น', 3, [
    { type: 'lesson', name: 'Variables และ Types', content: '## Variables\n`var`, `let`, `const`...' },
    { type: 'lesson', name: 'Functions', content: '## Functions\nFunction Declaration vs Expression...' },
    { type: 'lesson', name: 'DOM Manipulation', content: '## DOM\n`querySelector`, `addEventListener`...' },
  ]);
  wp.module3LessonIds = wp3.lessonIds;

  // ── Course: nodejs ─────────────────────────────────────────
  await createModule(courseIds.nodejs, 'Node.js พื้นฐาน', 1, [
    { type: 'lesson', name: 'Node.js คืออะไร?', content: '## Node.js\nRuntime สำหรับ JavaScript ฝั่ง Server...' },
    { type: 'lesson', name: 'npm และ package.json', content: '## npm\nNode Package Manager...' },
  ]);

  await createModule(courseIds.nodejs, 'Express Framework', 2, [
    { type: 'lesson', name: 'สร้าง Express App', content: '## Express\n`const app = express()`...' },
    { type: 'lesson', name: 'Routing', content: '## Routing\n`app.get()`, `app.post()`...' },
    { type: 'lesson', name: 'Middleware', content: '## Middleware\n`app.use()`, `next()`...' },
    {
      type: 'quiz', name: 'ทดสอบ Express', description: 'ทดสอบ Express Framework',
      questions: [
        {
          text: 'Express เป็น framework สำหรับภาษาใด?', type: 'single', points: 1,
          choices: [
            { text: 'Python', correct: false },
            { text: 'JavaScript (Node.js)', correct: true },
            { text: 'PHP', correct: false },
            { text: 'Ruby', correct: false },
          ],
        },
      ],
    },
  ]);

  // ── Course: database ───────────────────────────────────────
  const db1 = await createModule(courseIds.database, 'SQL พื้นฐาน', 1, [
    { type: 'lesson', name: 'SELECT และ FROM', content: '## SELECT\n`SELECT * FROM table`...' },
    { type: 'lesson', name: 'WHERE และ Conditions', content: '## WHERE\nการกรองข้อมูล...' },
    {
      type: 'quiz', name: 'ทดสอบ SQL พื้นฐาน', description: 'ทดสอบ SELECT และ WHERE',
      questions: [
        {
          text: 'คำสั่งใดใช้ดึงข้อมูลจาก table?', type: 'single', points: 1,
          choices: [
            { text: 'GET', correct: false },
            { text: 'SELECT', correct: true },
            { text: 'FETCH', correct: false },
            { text: 'READ', correct: false },
          ],
        },
        {
          text: 'ข้อใดเป็น Primary Key ที่ดี?', type: 'single', points: 2,
          choices: [
            { text: 'ชื่อผู้ใช้', correct: false },
            { text: 'เบอร์โทร', correct: false },
            { text: 'AUTO INCREMENT integer', correct: true },
            { text: 'วันเกิด', correct: false },
          ],
        },
      ],
    },
  ]);

  await createModule(courseIds.database, 'Database Design', 2, [
    { type: 'lesson', name: 'ER Diagram', content: '## Entity Relationship Diagram...' },
    { type: 'lesson', name: 'Normalization', content: '## 1NF, 2NF, 3NF...' },
  ]);

  console.log('✅ Modules, Lessons, Quizzes, Questions, Choices');

  // ──────────────────────────────────────────────────────────
  // 5. ENROLLMENTS
  // ──────────────────────────────────────────────────────────
  const enrollments = [
    // student01 เรียน webprog และ nodejs
    { user: 'student01', course: 'webprog' },
    { user: 'student01', course: 'nodejs' },
    // student02 เรียน webprog และ database
    { user: 'student02', course: 'webprog' },
    { user: 'student02', course: 'database' },
    // student03 เรียน webprog
    { user: 'student03', course: 'webprog' },
    // student04 เรียน database
    { user: 'student04', course: 'database' },
    // manager ดู webprog
    { user: 'manager01', course: 'webprog' },
  ];

  const enrollmentIds = {};
  for (const e of enrollments) {
    const id = await run(
      `INSERT INTO enrollments (user_id, course_id) VALUES (?, ?)`,
      [userIds[e.user], courseIds[e.course]]
    );
    enrollmentIds[`${e.user}_${e.course}`] = id;
  }
  console.log(`✅ Enrollments (${enrollments.length})`);

  // ──────────────────────────────────────────────────────────
  // 6. LESSON PROGRESS
  // student01 เรียน module1 ของ webprog จบแล้ว
  // student02 เรียนไปบางส่วน
  // ──────────────────────────────────────────────────────────
  const now = new Date().toISOString();

  // student01 — จบ module1 ทั้งหมด
  for (const lessonId of wp.module1LessonIds) {
    await run(
      `INSERT INTO lesson_progress (lesson_id, user_id, is_completed, completed_at) VALUES (?, ?, 1, ?)`,
      [lessonId, userIds['student01'], now]
    );
  }
  // student01 — เรียน module2 ไป 1 บทแล้ว (ยังไม่จบ)
  await run(
    `INSERT INTO lesson_progress (lesson_id, user_id, is_completed, completed_at) VALUES (?, ?, 0, NULL)`,
    [wp.module2LessonIds[0], userIds['student01']]
  );

  // student02 — จบ module1 lesson แรก
  await run(
    `INSERT INTO lesson_progress (lesson_id, user_id, is_completed, completed_at) VALUES (?, ?, 1, ?)`,
    [wp.module1LessonIds[0], userIds['student02'], now]
  );
  console.log('✅ Lesson Progress');

  // ──────────────────────────────────────────────────────────
  // 7. QUIZ ATTEMPTS
  // student01 — ทำ quiz module1 ของ webprog แล้ว (ผ่าน)
  // student02 — ทำ quiz module1 ของ webprog แล้ว (ไม่ผ่าน)
  // ──────────────────────────────────────────────────────────
  if (wp.module1QuizIds.length > 0) {
    await run(
      `INSERT INTO quiz_attempts (quiz_id, user_id, score, total_points, passed, submitted_at)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [wp.module1QuizIds[0], userIds['student01'], 3, 3, 1, now]
    );
    await run(
      `INSERT INTO quiz_attempts (quiz_id, user_id, score, total_points, passed, submitted_at)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [wp.module1QuizIds[0], userIds['student02'], 1, 3, 0, now]
    );
  }
  console.log('✅ Quiz Attempts');

  // ──────────────────────────────────────────────────────────
  // 8. BOOKMARKS
  // ──────────────────────────────────────────────────────────
  const bookmarks = [
    { user: 'student01', course: 'database' },
    { user: 'student02', course: 'nodejs' },
    { user: 'student03', course: 'nodejs' },
    { user: 'student03', course: 'database' },
    { user: 'student04', course: 'webprog' },
  ];
  for (const b of bookmarks) {
    await run(
      `INSERT INTO bookmarks (user_id, course_id) VALUES (?, ?)`,
      [userIds[b.user], courseIds[b.course]]
    );
  }
  console.log(`✅ Bookmarks (${bookmarks.length})`);

  // ──────────────────────────────────────────────────────────
  // 9. ORDERS
  // ──────────────────────────────────────────────────────────
  const orders = [
    { user: 'student01', course: 'nodejs', amount: 499, status: 'completed' },
    { user: 'student02', course: 'database', amount: 299, status: 'completed' },
    { user: 'student04', course: 'database', amount: 299, status: 'completed' },
    { user: 'student03', course: 'nodejs', amount: 499, status: 'pending' },
  ];
  for (const o of orders) {
    await run(
      `INSERT INTO orders (user_id, course_id, amount, status) VALUES (?, ?, ?, ?)`,
      [userIds[o.user], courseIds[o.course], o.amount, o.status]
    );
  }
  console.log(`✅ Orders (${orders.length})`);

  // ──────────────────────────────────────────────────────────
  // 10. ANNOUNCEMENTS
  // ──────────────────────────────────────────────────────────
  const announcements = [
    {
      course: 'webprog', instructor: 'instructor01',
      title: 'ยินดีต้อนรับสู่คอร์ส Fundamental Web Programming!',
      content: 'สวัสดีนักเรียนทุกคน! คอร์สนี้เหมาะสำหรับผู้เริ่มต้น ขอให้สนุกกับการเรียนนะครับ',
    },
    {
      course: 'webprog', instructor: 'instructor01',
      title: 'อัปเดตเนื้อหา Module 3: JavaScript',
      content: 'เพิ่มเนื้อหาเรื่อง DOM Manipulation เรียบร้อยแล้วครับ',
    },
    {
      course: 'nodejs', instructor: 'instructor01',
      title: 'เปิดคอร์ส Node.js ขั้นสูงแล้ว!',
      content: 'ผู้ที่ลงทะเบียนแล้วสามารถเริ่มเรียนได้เลยครับ',
    },
    {
      course: 'database', instructor: 'instructor02',
      title: 'ประกาศตารางเรียน SQL',
      content: 'เนื้อหาทั้งหมดพร้อมแล้ว ขอให้ทำ Quiz หลังเรียนแต่ละ Module ด้วยนะคะ',
    },
  ];
  for (const a of announcements) {
    await run(
      `INSERT INTO announcements (course_id, instructor_id, title, content) VALUES (?, ?, ?, ?)`,
      [courseIds[a.course], userIds[a.instructor], a.title, a.content]
    );
  }
  console.log(`✅ Announcements (${announcements.length})`);

  // ──────────────────────────────────────────────────────────
  // 11. REVIEWS
  // เฉพาะ student ที่ enroll แล้วเท่านั้น
  // ──────────────────────────────────────────────────────────
  const reviews = [
    // webprog reviews
    { user: 'student01', course: 'webprog', rating: 5, comment: 'คอร์สดีมากครับ เนื้อหาเข้าใจง่าย เหมาะสำหรับมือใหม่มากๆ' },
    { user: 'student02', course: 'webprog', rating: 4, comment: 'เนื้อหาครบดี แต่อยากให้มีตัวอย่างเพิ่มขึ้นอีกหน่อย' },
    { user: 'student03', course: 'webprog', rating: 5, comment: 'ชอบมากเลยค่ะ อธิบายชัดเจนมาก' },
    // nodejs reviews
    { user: 'student01', course: 'nodejs', rating: 4, comment: 'เนื้อหาดี แต่ค่อนข้างเร็วสำหรับผู้เริ่มต้น' },
    // database reviews
    { user: 'student02', course: 'database', rating: 5, comment: 'สอน SQL ได้ดีมากค่ะ เข้าใจ normalization ขึ้นเยอะเลย' },
    { user: 'student04', course: 'database', rating: 3, comment: 'พอใช้ได้ครับ อยากให้มีการสอน index และ optimization เพิ่ม' },
  ];
  for (const r of reviews) {
    await run(
      `INSERT INTO reviews (course_id, user_id, rating, comment) VALUES (?, ?, ?, ?)`,
      [courseIds[r.course], userIds[r.user], r.rating, r.comment]
    );
  }
  console.log(`✅ Reviews (${reviews.length})`);

  // ── Summary ───────────────────────────────────────────────
  console.log('\n🎉 Seed completed!\n');
  console.log('📋 Summary:');

  const summary = await all(`
    SELECT 'users'         AS tbl, COUNT(*) AS n FROM users         UNION ALL
    SELECT 'categories',           COUNT(*)       FROM categories    UNION ALL
    SELECT 'courses',              COUNT(*)       FROM courses       UNION ALL
    SELECT 'modules',              COUNT(*)       FROM modules       UNION ALL
    SELECT 'lessons',              COUNT(*)       FROM lessons       UNION ALL
    SELECT 'quizzes',              COUNT(*)       FROM quizzes       UNION ALL
    SELECT 'questions',            COUNT(*)       FROM questions     UNION ALL
    SELECT 'choices',              COUNT(*)       FROM choices       UNION ALL
    SELECT 'enrollments',          COUNT(*)       FROM enrollments   UNION ALL
    SELECT 'lesson_progress',      COUNT(*)       FROM lesson_progress UNION ALL
    SELECT 'quiz_attempts',        COUNT(*)       FROM quiz_attempts UNION ALL
    SELECT 'bookmarks',            COUNT(*)       FROM bookmarks     UNION ALL
    SELECT 'orders',               COUNT(*)       FROM orders        UNION ALL
    SELECT 'announcements',        COUNT(*)       FROM announcements UNION ALL
    SELECT 'reviews',              COUNT(*)       FROM reviews
  `);

  for (const row of summary) {
    console.log(`   ${row.tbl.padEnd(20)} ${row.n} rows`);
  }

  console.log('\n👤 Test accounts (password แสดงตรงๆ เพราะ dev mode):');
  console.log('   Email                      Password');
  console.log('   ─────────────────────────────────────────────');
  console.log('   manager@whicha.dev         manager1234      (manager)');
  console.log('   somchai@whicha.dev         instructor1234   (instructor)');
  console.log('   wipa@whicha.dev            instructor1234   (instructor)');
  console.log('   ploy@whicha.dev            student1234      (student)');
  console.log('   nara@whicha.dev            student1234      (student)');
  console.log('   saichon@whicha.dev         student1234      (student)');
  console.log('   ananya@whicha.dev          student1234      (student)');
}

// ── run ───────────────────────────────────────────────────────
seed()
  .catch((err) => {
    console.error('\n❌ Seed failed:', err.message);
    process.exit(1);
  })
  .finally(() => db.close());
