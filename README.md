## WhiCha – Online Learning Platform

## การติดตั้งและรันโปรเจ็กต์

**วิธีที่ 1** รันผ่าน run.bat
1. ดับเบิ้ลคลิ๊กที่ run.bat
2. ระบบจะทำการรันเซิฟเวอร์และเปิดหน้าเว็บให้อัตโนมัติ

**วิธีที่ 2**

1. ติดตั้ง dependency
```bash
npm install
```
2. รันเซิร์ฟเวอร์
```bash
npm start
```
ค่าเริ่มต้นเซิร์ฟเวอร์คือ `http://localhost:3000` (`index.js`)

3. (ออปชัน) seed ข้อมูลเริ่มต้น
```bash
npm run seed
```
## บัญชีสำหรับทดสอบ
Student:
Email: “student01@whicha.com ” | 
password: “student1234”

Manager:
Email: “manager01@whicha.com” | 
password: “manager1234”

Instructor:
Email: “instructor01@whicha.com” | 
password: “instructor1234”
Email: “instructor02@whicha.com” | 
password: “instructor1234”
Email: “instructor03@whicha.com” | 
password: “12345”
Email: “instructor04@whicha.com” | 
password: “12345”
Email: “instructor05@whicha.com” | 
password: “12345”

## บัญชีสำหรับทดสอบ

| Role | Email | Password |
|-----|------|------|
| Student | student01@whicha.com | student1234 |
| Manager | manager01@whicha.com | manager1234 |
| Instructor | instructor01@whicha.com | instructor1234 |
| Instructor | instructor02@whicha.com | instructor1234 |
| Instructor | instructor03@whicha.com | 12345 |
| Instructor | instructor04@whicha.com | 12345 |
| Instructor | instructor05@whicha.com | 12345 |
| Student | student01@whicha.com | student1234 |
| Student | student02@whicha.com | student1234 |
| Student | student03@whicha.com | student1234 |
| Student | student04@whicha.com | 12345 |

Student:
Email: “student01@whicha.com ” | 
password: “student1234”
Email: “student02@whicha.com ” | 
password: “student1234”
Email: “student03@whicha.com ” | 
password: “student1234”
Email: “student04@whicha.com ” | 
password: “12345”

รายชื่อสมาชิก
นางสาวพลอยชมพู จินดามัย  67070110
นายนราธร อู่สุวรรณ์ 		    67070242
นางสาวสายชล ไชยมูล 		  67070283
นางสาวอนัญพร สากำ 		  67070292



เว็บแอปสำหรับระบบเรียนออนไลน์พัฒนาด้วย **Node.js + Express + EJS + SQLite** รองรับบทบาทหลัก 3 แบบ:

- **Student**: สมัคร/ล็อกอิน, ลงคอร์ส, เรียนบทเรียน, ทำแบบทดสอบ (Quiz), ดูความคืบหน้าเรียน
- **Instructor**: สร้างคอร์ส, จัดการ Module / Lesson / Quiz, ดูนักเรียนในคอร์ส, ส่งประกาศถึงนักเรียน
- **Manager (Admin)**: ดูสถิติโดยรวม, อนุมัติ/ปฏิเสธคอร์ส, จัดการผู้ใช้และบทบาท, ดูข้อมูล enrollment และรายละเอียดคอร์ส



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

