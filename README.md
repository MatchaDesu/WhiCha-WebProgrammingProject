## WhiCha – Online Learning Platform

เว็บแอปสำหรับระบบเรียนออนไลน์ (LMS) พัฒนาด้วย **Node.js + Express + EJS + SQLite** รองรับบทบาทหลัก 3 แบบ:

- **Student**: สมัคร/ล็อกอิน, ลงคอร์ส, เรียนบทเรียน, ทำแบบทดสอบ (Quiz), ดูความคืบหน้าเรียน
- **Instructor**: สร้างคอร์ส, จัดการ Module / Lesson / Quiz, ดูนักเรียนในคอร์ส, ส่งประกาศถึงนักเรียน
- **Manager (Admin)**: ดูสถิติโดยรวม, อนุมัติ/ปฏิเสธคอร์ส, จัดการผู้ใช้และบทบาท (role), ดูข้อมูล enrollment และรายละเอียดคอร์ส

---

## เทคโนโลยีที่ใช้

- **Backend**: Node.js, Express (CommonJS)
- **View**: EJS + express-ejs-layouts
- **Database**: SQLite3 (ไฟล์ `data/database.db`)
- **Session**: express-session
- **Style**: Tailwind CSS (ผ่าน `@tailwindcss/cli` / `tailwindcss`)
- **อื่น ๆ**: multer (อัปโหลดไฟล์), json2csv (export CSV)

---

## การติดตั้งและรันโปรเจ็กต์

1. ติดตั้ง dependency

```bash
npm install
```

2. รันเซิร์ฟเวอร์

```bash
npm start
```

ค่าเริ่มต้นเซิร์ฟเวอร์คือ `http://localhost:3000` (อ่านจาก `index.js`)

3. (ออปชัน) seed ข้อมูลเริ่มต้น

```bash
npm run seed
```

---

## โครงสร้างหลักของโปรเจ็กต์

สำคัญ ๆ:

- `index.js` – ตั้งค่า Express, view engine, static, session, และ mount routes ต่าง ๆ
- `config/`
  - `db.js` – เชื่อมต่อ SQLite
  - `session.js` – ตั้งค่า express-session
- `middlewares/`
  - `authMiddleware.js`
    - `requireLogin` – บังคับให้ต้องล็อกอิน (ยกเว้น `/signin`, `/signup`)
    - `requireInstructor` – ให้เข้า route `/instructor/...` ได้เฉพาะ role `instructor`
    - `requireManager` – ให้เข้า route `/manager/...` ได้เฉพาะ role `manager`
  - `globalMiddleware.js` – โหลดข้อมูล user ปัจจุบันเข้า `res.locals.user`
  - `uploadMiddleware.js` – จัดการอัปโหลดไฟล์ (เช่น รูปภาพ)
- `routes/`
  - `authRoute.js` – signin / signup / signout
  - `webRoute.js` – หน้าเว็บทั่วไป (`/`, `/my-learning`, `/about-us`, `/guide`)
  - `courseRoute.js` – หน้า course, detail, checkout, learn, review, quiz, lesson progress
  - `userRoute.js` – โปรไฟล์ผู้ใช้ (`/users/:userId`)
  - `instructorRoute.js` – หน้าสำหรับอาจารย์ (ใช้ `requireInstructor`)
  - `managerRoute.js` – หน้าสำหรับแอดมิน (ใช้ `requireManager`)
  - `uploadRoute.js` – อัปโหลดไฟล์ต่าง ๆ
- `controllers/`
  - `authController.js` – ล็อกอิน, สมัครสมาชิก, จัดการ session
  - `webController.js` – home, my-learning, about, guide
  - `courseController.js` – ทุกอย่างฝั่ง student เกี่ยวกับคอร์ส (ดู course, enroll, เรียน, quiz, review)
  - `enrollmentController.js` – ลงทะเบียนเรียนคอร์ส (enroll)
  - `userController.js` – โปรไฟล์/แก้ไขโปรไฟล์
  - `instructorController.js` – จัดการคอร์ส, module, lesson, quiz, question, announcement, export CSV
  - `managerController.js` – dashboard admin, ดู users/courses/enrollments, อนุมัติ/ปฏิเสธคอร์ส, เปลี่ยน role
  - `uploadController.js` – logic การอัปโหลดไฟล์
- `models/` – ติดต่อฐานข้อมูล SQLite (ตารางต่าง ๆ เช่น `users`, `courses`, `modules`, `lessons`, `quizzes`, `questions`, `choices`, `enrollments`, `lesson_progress`, `quiz_attempts`, `announcements`)
  - ตัวอย่าง:
    - `userModel.js` – จัดการผู้ใช้, เปลี่ยน role
    - `courseModel.js` – คอร์ส, สถานะคอร์ส (pending/published)
    - `moduleModel.js`, `moduleItemModel.js` – โครงสร้าง module / item ใน course
    - `lessonModel.js`, `lessonProgressModel.js` – บทเรียน และความคืบหน้าการเรียน
    - `quizModel.js`, `questionModel.js`, `choiceModel.js`, `quizAttemptModel.js` – ระบบแบบทดสอบและ attempt
    - `enrollmentModel.js` – การลงทะเบียนเรียนคอร์สของนักเรียน
    - `reviewModel.js` – รีวิวคอร์ส
    - `announcementModel.js` – ประกาศในคอร์ส
- `views/`
  - `layouts/main.ejs` – Layout หลัก
  - `pages/` – หน้า home, my-learning, about, guide
  - `courses/` – หน้า listing, detail, learn, dashboard, students, announcement ฯลฯ
  - `instructor/` – หน้า dashboard, manage course, module/lesson/quiz editor, announcement, export ฯลฯ
  - `manager/` – หน้า dashboard admin, users, courses, enrollments, course-detail
  - `users/` – โปรไฟล์, edit profile
  - `partials/` – ส่วนประกอบซ้ำ ๆ เช่น navbar, course-nav
- `public/`
  - `css/` – Tailwind build (`tailwind.css`) และ config สำหรับ build
  - `js/` – สคริปต์ฝั่ง client
  - `img/` – รูปภาพที่ใช้ในหน้าเว็บ

---

## Flow การใช้งานหลัก

### 1. Student

- สมัคร / ล็อกอิน ผ่าน `/signin`, `/signup`
- ดูรายการคอร์สทั้งหมดที่เปิดสอนใน `/courses`
- กดเข้าไปดูรายละเอียดคอร์ส `/courses/:courseId`
- ลงทะเบียนเรียนคอร์สผ่านหน้า checkout และ enroll
- เรียนบทเรียนผ่านหน้า `/courses/:courseId/learn` และ `/courses/:courseId/learn/:type/:itemId`
- ทำแบบทดสอบ (Quiz) แล้วระบบจะคำนวณคะแนน เก็บใน `quiz_attempts` ผ่าน `quizAttemptModel`
- ติดตามคอร์สที่ลงเรียนผ่านหน้า `/my-learning`
- ให้รีวิวคอร์ส (thumb up/down + comment)

### 2. Instructor

- ต้องเป็น user ที่มี `role = 'instructor'`
- เข้าหน้า `/instructor` (dashboard) เพื่อดูคอร์สที่สอน
- สร้างคอร์สใหม่, แก้ไขคอร์ส, เปลี่ยนสถานะคอร์ส (pending/published)
- จัดการ Module / Lesson / Quiz และคำถาม/ตัวเลือกคำตอบ ในแต่ละคอร์ส
- ดูรายชื่อนักเรียนในคอร์ส และ export รายชื่อนักเรียนเป็นไฟล์ CSV
- สร้าง/แก้ไข/ลบประกาศในคอร์ส เพื่อแจ้งข้อมูลสำคัญให้นักเรียน

### 3. Manager (Admin)

- ต้องเป็น user ที่มี `role = 'manager'`
- เข้าหน้า `/manager` หรือ `/manager/dashboard` เพื่อดูสถิติโดยรวม
- ดูผู้ใช้ทั้งหมด และเปลี่ยนบทบาท (role) ของผู้ใช้แต่ละคน
- ดูคอร์สทั้งหมดในระบบ และอนุมัติ/ปฏิเสธคอร์สที่อยู่สถานะ pending
- ดูรายการ enrollment ทั้งหมด และรายละเอียดคอร์สเชิงลึก (module, lesson, quiz, questions, choices)

---

## ระบบสิทธิ์ (Authentication & Authorization)

- ใช้ session ผ่าน `express-session` เก็บข้อมูลผู้ใช้ใน `req.session.user`
- `requireLogin` – บังคับให้ต้องล็อกอินในทุกหน้า (ยกเว้น `/signin`, `/signup`)
- `requireInstructor` – ป้องกัน route ใต้ `/instructor` ให้เข้าได้เฉพาะผู้ใช้ที่มี `role = 'instructor'`
- `requireManager` – ป้องกัน route ใต้ `/manager` ให้เข้าได้เฉพาะผู้ใช้ที่มี `role = 'manager'`
- ใน `globalMiddleware` จะโหลดข้อมูล user ปัจจุบัน (จาก `userModel.getById`) ใส่ใน `res.locals.user` เพื่อให้ EJS ใช้งานได้ทุกหน้า

---

## การ build CSS (Tailwind)

ใน `package.json`:

```bash
npm run build
```

จะรันคำสั่ง:

```bash
npx @tailwindcss/cli -i public/css/config.css -o public/css/tailwind.css --watch
```

ใช้สำหรับ build ไฟล์ CSS จาก config ของ Tailwind

---

## หมายเหตุ / ข้อจำกัด

- โปรเจ็กต์นี้เน้นโครงสร้างฟีเจอร์และ flow การทำงานเป็นหลัก (academic project) ไม่ได้เน้น security ลึกระดับ production
- รหัสผ่านผู้ใช้ในตัวอย่างอาจยังไม่ได้ hash (ขึ้นกับการ implement ใน `authController` / `userModel`) ในงานจริงควรเพิ่มการเข้ารหัสรหัสผ่าน
- บางข้อมูลเริ่มต้นอาจต้องรัน `npm run seed` เพื่อเตรียมฐานข้อมูลให้พร้อมใช้งาน

