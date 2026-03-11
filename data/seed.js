// ============================================================
//  WhiCha LMS — Seed Data (generated from database.db)
//  lib: sqlite3 (callback-based)
//  password: plain text (dev only)
//
//  Usage:
//    node seed.js
// ============================================================

const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const DB_PATH = process.env.DB_PATH || path.join(__dirname, 'database.db');
const db = new sqlite3.Database(DB_PATH, (err) => {
  if (err) { console.error('Cannot open database:', err.message); process.exit(1); }
  console.log('Connected to', DB_PATH);
});

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

const usersData = [
  {
    username: `manager01`,
    password: `manager1234`,
    first_name: `System`,
    last_name: `Manager`,
    email: `manager01@whicha.com`,
    phone: `0800000001`,
    profile_image: `/default_image/profile-anonymous.svg`,
    role: `manager`,
  },
  {
    username: `สัมภเวศิลป์`,
    password: `instructor1234`,
    first_name: `sumpha`,
    last_name: `wesin`,
    email: `instructor01@whicha.com`,
    phone: `0800000002`,
    profile_image: `/uploads/users/2/profile-1773170388031-404456912.jpg`,
    role: `instructor`,
  },
  {
    username: `ยิ้มดี มีชัย`,
    password: `instructor1234`,
    first_name: `ยิ้มดี`,
    last_name: `มีชัย`,
    email: `instructor02@whicha.com`,
    phone: `0800000003`,
    profile_image: `/uploads/users/3/profile-1773184927788-65194946.png`,
    role: `instructor`,
  },
  {
    username: `Somying`,
    password: `student1234`,
    first_name: `สมหญิง`,
    last_name: `สามัคคีชุมนุม`,
    email: `student01@whicha.com`,
    phone: `0800000004`,
    profile_image: `/uploads/users/4/profile-1773193813875-420149585.png`,
    role: `student`,
  },
  {
    username: `JordanKim`,
    password: `student1234`,
    first_name: `Jordan`,
    last_name: `Kim`,
    email: `student02@whicha.com`,
    phone: `0800000005`,
    profile_image: `/uploads/users/5/profile-1773194381849-962383206.png`,
    role: `student`,
  },
  {
    username: `student03`,
    password: `student1234`,
    first_name: `Taylor`,
    last_name: `Nguyen`,
    email: `student03@whicha.com`,
    phone: `0800000006`,
    profile_image: `/default_image/profile-anonymous.svg`,
    role: `student`,
  },
  {
    username: `student04`,
    password: `student1234`,
    first_name: `Robin`,
    last_name: `Patel`,
    email: `student04@whicha.com`,
    phone: `0800000007`,
    profile_image: `/default_image/profile-anonymous.svg`,
    role: `student`,
  },
  {
    username: `instructor03`,
    password: `12345`,
    first_name: `in`,
    last_name: `3`,
    email: `instructor03@whicha.com`,
    phone: `123456`,
    profile_image: `/default_image/profile-anonymous.svg`,
    role: `instructor`,
  },
  {
    username: `UNFOX English`,
    password: `12345`,
    first_name: `UNFOX `,
    last_name: `English`,
    email: `instructor04@whicha.com`,
    phone: `123456`,
    profile_image: `/default_image/profile-anonymous.svg`,
    role: `instructor`,
  },
  {
    username: `Uncle Ake (ลุงเอก)`,
    password: `12345`,
    first_name: `Uncle`,
    last_name: `Ake`,
    email: `instructor05@whicha.com`,
    phone: `123456`,
    profile_image: `/uploads/users/10/profile-1773182316144-947764388.jpg`,
    role: `instructor`,
  },
];

const categoriesData = [
  {
    category_name: `Arts`,
  },
  {
    category_name: `Language`,
  },
  {
    category_name: `Network`,
  },
  {
    category_name: `Design`,
  },
  {
    category_name: `Programming`,
  },
  {
    category_name: `Database`,
  },
  {
    category_name: `Development`,
  },
  {
    category_name: `Health`,
  },
  {
    category_name: `Science`,
  },
  {
    category_name: `Math`,
  },
  {
    category_name: `Music`,
  },
  {
    category_name: `Psychology`,
  },
  {
    category_name: `Religion`,
  },
  {
    category_name: `Sports`,
  },
  {
    category_name: `Technology`,
  },
  {
    category_name: `Other`,
  },
];

const coursesData = [
  {
    course_id: 1,
    instructor_id: 2,
    category_id: 1,
    course_name: `ถอดรหัสหนังผีไทย`,
    description: `คอร์สนี้ไม่ใช่การนั่งดูหนังผีเพื่อความบันเทิง แต่เป็นการ "ชำแหละ" องค์ประกอบทางศิลปะที่ซ่อนอยู่ในความสยองขวัญ ผู้เรียนจะได้วิเคราะห์ผ่านเลนส์ของทัศนศิลป์ (Visual Arts), การออกแบบเสียง (Sound Design), สัญญะวิทยา (Semiotic), และบริบททางสังคม เพื่อทำความเข้าใจว่าทำไมหนังผีไทยถึงมีเอกลักษณ์เฉพาะตัวที่โด่งดังไปทั่วโลก และ "ความกลัว" ถูกสร้างสรรค์ขึ้นมาอย่างวิจิตรบรรจงได้อย่างไร`,
    course_status: `published`,
    course_image: `/uploads/courses/1/course_image-1773170900331-574527896.png`,
    course_price: 599,
    publish_date: `2026-03-10 19:20:47`,
    rejection_reason: null,
    reviewed_by: null,
    reviewed_at: null,
  },
  {
    course_id: 2,
    instructor_id: 3,
    category_id: 5,
    course_name: `วิศวกรซอฟต์แวร์เบื้องต้น`,
    description: `- พื้นฐานวิศวกรรมซอฟต์แวร์ ภาพรวมและแนวคิดการออกแบบซอฟต์แวร์  และ การรับประกันคุณภาพซอฟต์แวร์ 
- เข้าใจเนื้อหาพื้นฐานที่สำคัญของศาสตร์ด้านวิศวกรรมซอฟต์แวร์เพื่อเป็นวิศวกรซอฟต์แวร์ที่ดี
- ไม่จำเป็นต้องมีความรู้มาก่อน ผู้เริ่มต้นก็สามารถเรียนรู้ได้

-  ผู้เรียนจะเข้าใจเนื้อหาพื้นฐานที่สำคัญของศาสตร์ด้านวิศวกรรมซอฟต์แวร์เพื่อเป็นวิศวกรซอฟต์แวร์ที่ดีได้
- ผู้เรียนจะได้รับความเข้าใจอย่างถี่ถ้วนเกี่ยวกับเนื้อหาของวิศวกรรมซอฟต์แวร์ตั้งแต่เริ่มต้นจนจบกระบวนการพัฒนาซอฟต์แวร์`,
    course_status: `published`,
    course_image: `/uploads/courses/2/course_image-1773184056292-473005016.png`,
    course_price: 0,
    publish_date: `2026-03-10 22:31:52`,
    rejection_reason: null,
    reviewed_by: null,
    reviewed_at: null,
  },
  {
    course_id: 3,
    instructor_id: 10,
    category_id: 4,
    course_name: `สอนใช้ Figma`,
    description: `สอนการใช้งานโปรแกรมออกแบบ Figma สำหรับผู้เริ่มต้น โดยเน้นไปที่การอธิบายฟังก์ชันพื้นฐานในกลุ่มเครื่องมือเคลื่อนย้ายและปรับขนาด
`,
    course_status: `published`,
    course_image: `/uploads/courses/3/course_image-1773182853569-763817112.png`,
    course_price: 459,
    publish_date: `2026-03-11 01:06:17`,
    rejection_reason: null,
    reviewed_by: null,
    reviewed_at: null,
  },
  {
    course_id: 4,
    instructor_id: 3,
    category_id: 15,
    course_name: `เครือข่ายคอมพิวเตอร์เบื้องต้น`,
    description: `หัวข้อหลักในการเรียนรู้:
- ความรู้เบื้องต้น: นิยามและประโยชน์ของเครือข่ายคอมพิวเตอร์
- ประเภทของเครือข่าย: LAN, WAN, MAN และเครือข่ายไร้สาย
- องค์ประกอบเครือข่าย: ฮาร์ดแวร์ (Router, Switch, Hub) และสายสัญญาณ

ประโยชน์ที่ได้รับ:
เข้าใจวิธีการส่งข้อมูลระหว่างคอมพิวเตอร์
สามารถแชร์ทรัพยากร เช่น เครื่องพิมพ์ หรือไฟล์ข้อมูลได้
มีทักษะพื้นฐานสำหรับสายงาน IT และการดูแลระบบเครือข่าย`,
    course_status: `published`,
    course_image: `/uploads/courses/4/course_image-1773185102410-477341184.png`,
    course_price: 399,
    publish_date: `2026-03-11 01:06:15`,
    rejection_reason: null,
    reviewed_by: null,
    reviewed_at: null,
  },
  {
    course_id: 5,
    instructor_id: 8,
    category_id: 1,
    course_name: `พับกระดาษโอริกามิ`,
    description: `ยินดีต้อนรับสู่โลกแห่งศิลปะการพับกระดาษ! คอร์ส พับโอริกามิเบื้องต้น จะพาคุณไปทำความรู้จักกับพื้นฐานการพับกระดาษสไตล์ญี่ปุ่น ตั้งแต่การเลือกกระดาษ การอ่านสัญลักษณ์พื้นฐาน ไปจนถึงการพับโมเดลยอดฮิตที่นำไปใช้เป็นของขวัญหรือของตกแต่งได้จริง ไม่จำเป็นต้องมีพื้นฐานมาก่อน เพียงแค่มีกระดาษแผ่นเดียว คุณก็สามารถสร้างสรรค์ผลงานศิลปะสามมิติสุดมหัศจรรย์ด้วยสองมือของคุณเองได้แล้ว
`,
    course_status: `pending`,
    course_image: `/uploads/courses/5/course_image-1773192718974-72454976.jpg`,
    course_price: 199,
    publish_date: ``,
    rejection_reason: null,
    reviewed_by: null,
    reviewed_at: null,
  },
  {
    course_id: 6,
    instructor_id: 9,
    category_id: 2,
    course_name: `Learn English for free`,
    description: `คอร์สนี้ถูกออกแบบมาเพื่อคนที่ไม่มีพื้นฐาน ทิ้งภาษาอังกฤษไปนาน หรือคนที่อยากเริ่มต้นใหม่ให้ถูกต้อง มีการปูพื้นฐานใหม่ทั้งหมด เรียนรู้วิธีเอาคำศัพท์มาเรียงกันให้ถูกต้อง เช่น การใช้คำขยาย (Adjective) เพื่อให้เห็นภาพชัดเจนขึ้น ทำให้เล่าเรื่องราวในชีวิตประจำวันได้ และสามารถถาม-ตอบได้จริง ไม่ใช่แค่บอกเล่า แต่คอร์สนี้จะสอนให้พลิกแพลงประโยคเพื่อไป "ตั้งคำถาม" ชวนฝรั่งคุย และ "ปฏิเสธ" ได้อย่างเป็นธรรมชาติ`,
    course_status: `published`,
    course_image: `/uploads/courses/6/course_image-1773194376842-921046204.png`,
    course_price: 299,
    publish_date: `2026-03-11 01:44:49`,
    rejection_reason: null,
    reviewed_by: null,
    reviewed_at: null,
  },
  {
    course_id: 7,
    instructor_id: 3,
    category_id: 15,
    course_name: `ระบบฐานข้อมูล`,
    description: `เนื้อหาสำคัญของระบบฐานข้อมูล (Database System) 
ประเภทของข้อมูล (Data Type): ชนิดข้อมูลที่จัดเก็บ (ข้อความ, ตัวเลข, วันที่)
คีย์ (Key): หลักสำคัญในการเชื่อมโยงข้อมูล เช่น Primary Key (คีย์หลัก), Foreign Key (คีย์ต่างประเทศ)
ความสัมพันธ์ (Relationships): รูปแบบข้อมูลที่เกี่ยวข้องกัน (1:1, 1:M, M:M)
การออกแบบฐานข้อมูล (Database Design): ขั้นตอนการวิเคราะห์ ปัญหา, ความต้องการของผู้ใช้, และการสร้างตาราง
Normalization: กฎการจัดรูปแบบฐานข้อมูลเพื่อลดความซ้ำซ้อน
ภาษาฐานข้อมูล (Database Language): เช่น SQL (Structured Query Language) สำหรับค้นหา จัดการ และแก้ไขข้อมูล
DBMS (Database Management System): ซอฟต์แวร์จัดการฐานข้อมูล เช่น MySQL, PostgreSQL, MongoDB 
`,
    course_status: `draft`,
    course_image: `/default_image/course_image.png`,
    course_price: 200,
    publish_date: null,
    rejection_reason: null,
    reviewed_by: null,
    reviewed_at: null,
  },
];

const modulesData = [
  {
    module_id: 1,
    course_id: 1,
    module_name: `ถอดรหัสที่ 1 สวย ลาก ไส้ (2550)`,
    order_index: 1,
  },
  {
    module_id: 2,
    course_id: 1,
    module_name: `ถอดรหัสที่ 2 แฝด (2007) `,
    order_index: 2,
  },
  {
    module_id: 3,
    course_id: 1,
    module_name: `ถอดรหัสที่ 3 บอดี้..ศพ #19`,
    order_index: 3,
  },
  {
    module_id: 4,
    course_id: 1,
    module_name: `ถอดรหัสที่ 4 มหาลัยสยองขวัญ (2552)`,
    order_index: 4,
  },
  {
    module_id: 5,
    course_id: 1,
    module_name: `ถอดรหัสที่ 5 นางนาก`,
    order_index: 5,
  },
  {
    module_id: 6,
    course_id: 1,
    module_name: `ถอดรหัสที่ 6  ทองสุก 13 (2556)`,
    order_index: 6,
  },
  {
    module_id: 7,
    course_id: 1,
    module_name: `ถอดรหัสที่ 7 คน ผี ปีศาจ `,
    order_index: 7,
  },
  {
    module_id: 8,
    course_id: 1,
    module_name: `ถอดรหัสที่ 8 ตายโหง (2553) `,
    order_index: 8,
  },
  {
    module_id: 9,
    course_id: 1,
    module_name: `ถอดรหัสที่ 9 ลองของ (2548)`,
    order_index: 9,
  },
  {
    module_id: 10,
    course_id: 1,
    module_name: `ถอดรหัสครั้งที่ 10 ถี่หยด`,
    order_index: 10,
  },
  {
    module_id: 11,
    course_id: 2,
    module_name: `บทที่ 1: ภาพรวมและแนวคิดการออกแบบซอฟต์แวร์ (Software Design Concepts)`,
    order_index: 1,
  },
  {
    module_id: 12,
    course_id: 2,
    module_name: `บทที่ 2 การออกแบบระดับคอมโพเนนต์`,
    order_index: 2,
  },
  {
    module_id: 13,
    course_id: 2,
    module_name: `บทที่ 3 หลักการออกแบบ SOLID`,
    order_index: 3,
  },
  {
    module_id: 14,
    course_id: 2,
    module_name: `บทที่ 4 รูปแบบการออกแบบกลุ่มสร้างอ็อบเจกต์`,
    order_index: 4,
  },
  {
    module_id: 15,
    course_id: 2,
    module_name: `บทที่ 5 รูปแบบการออกแบบกลุ่มโครงสร้าง`,
    order_index: 5,
  },
  {
    module_id: 16,
    course_id: 2,
    module_name: `บทที่ 6 รูปแบบการออกแบบกลุ่มพฤติกรรม`,
    order_index: 6,
  },
  {
    module_id: 17,
    course_id: 2,
    module_name: `บทที่ 7 แนวคิดด้านคุณภาพซอฟต์แวร์`,
    order_index: 7,
  },
  {
    module_id: 18,
    course_id: 2,
    module_name: `บทที่ 8 การรับประกันคุณภาพซอฟต์แวร์`,
    order_index: 8,
  },
  {
    module_id: 19,
    course_id: 2,
    module_name: `บทที่ 9 กลยุทธ์การทดสอบซอฟต์แวร์`,
    order_index: 9,
  },
  {
    module_id: 20,
    course_id: 2,
    module_name: `บทที่ 10 การพัฒนาโดยใช้การทดสอบเป็นตัวนำ`,
    order_index: 10,
  },
  {
    module_id: 21,
    course_id: 2,
    module_name: `แบบทดสอบหลังเรียน`,
    order_index: 11,
  },
  {
    module_id: 22,
    course_id: 3,
    module_name: `Move Tools: Move, Scale`,
    order_index: 1,
  },
  {
    module_id: 23,
    course_id: 4,
    module_name: `บทที่ 1 เครือข่ายคอมพิวเตอร์เบื้องต้น`,
    order_index: 1,
  },
  {
    module_id: 24,
    course_id: 4,
    module_name: `บทที่ 2 องค์ประกอบของเครือข่าย`,
    order_index: 2,
  },
  {
    module_id: 25,
    course_id: 4,
    module_name: `บทที่ 3 การแสดงภาพเครือข่ายและผังโครงสร้าง`,
    order_index: 3,
  },
  {
    module_id: 26,
    course_id: 4,
    module_name: `บทที่ 4 ประเภททั่วไปของเครือข่าย`,
    order_index: 4,
  },
  {
    module_id: 27,
    course_id: 4,
    module_name: `บทที่ 5 เทคโนโลยีการเข้าถึงอินเทอร์เน็ต`,
    order_index: 5,
  },
  {
    module_id: 28,
    course_id: 4,
    module_name: `บทที่ 6 สถาปัตยกรรมเครือข่าย`,
    order_index: 6,
  },
  {
    module_id: 29,
    course_id: 4,
    module_name: `บทที่ 7 แนวโน้มเครือข่าย`,
    order_index: 7,
  },
  {
    module_id: 30,
    course_id: 3,
    module_name: `Region Tools: Frame, Slice`,
    order_index: 2,
  },
  {
    module_id: 31,
    course_id: 3,
    module_name: `Shape Tool`,
    order_index: 3,
  },
  {
    module_id: 32,
    course_id: 3,
    module_name: `Drawing Tools : Pen,Pencil`,
    order_index: 4,
  },
  {
    module_id: 33,
    course_id: 3,
    module_name: `Text Tool`,
    order_index: 5,
  },
  {
    module_id: 34,
    course_id: 3,
    module_name: `Hand Tool `,
    order_index: 6,
  },
  {
    module_id: 35,
    course_id: 3,
    module_name: `การทำงานกับรูปภาพ`,
    order_index: 7,
  },
  {
    module_id: 36,
    course_id: 4,
    module_name: `บทที่ 8 ความปลอดภัยของเครือข่าย (Network Security)`,
    order_index: 8,
  },
  {
    module_id: 37,
    course_id: 4,
    module_name: `บทที่ 9 งานด้านเครือข่าย (Networking Jobs)`,
    order_index: 9,
  },
  {
    module_id: 38,
    course_id: 3,
    module_name: `การ Mask`,
    order_index: 8,
  },
  {
    module_id: 39,
    course_id: 3,
    module_name: `Effect`,
    order_index: 9,
  },
  {
    module_id: 40,
    course_id: 3,
    module_name: `Component`,
    order_index: 10,
  },
  {
    module_id: 41,
    course_id: 5,
    module_name: `บทที่ 1 โอริกามิเบื้องต้น`,
    order_index: 1,
  },
  {
    module_id: 42,
    course_id: 5,
    module_name: `บทที่ 2 พับไก่`,
    order_index: 2,
  },
  {
    module_id: 43,
    course_id: 6,
    module_name: `เทคนิคพิชิต TOEIC Listening Part 1 `,
    order_index: 1,
  },
  {
    module_id: 44,
    course_id: 5,
    module_name: `บทที่ 2 พับดอกไม้`,
    order_index: 3,
  },
  {
    module_id: 45,
    course_id: 6,
    module_name: `สร้างประโยคพื้นฐานและคำนาม`,
    order_index: 2,
  },
  {
    module_id: 46,
    course_id: 6,
    module_name: `ขยายประโยคและบอกสิ่งที่กำลังทำ`,
    order_index: 3,
  },
  {
    module_id: 47,
    course_id: 6,
    module_name: `การอธิบายลักษณะด้วย Adjectives`,
    order_index: 4,
  },
  {
    module_id: 48,
    course_id: 6,
    module_name: `บอกตำแหน่ง, ปฏิเสธ และคำถาม`,
    order_index: 5,
  },
  {
    module_id: 49,
    course_id: 6,
    module_name: `บอกกิจวัตรประจำวัน และความชอบ`,
    order_index: 6,
  },
  {
    module_id: 50,
    course_id: 6,
    module_name: `การสื่อสารขั้นสูง`,
    order_index: 7,
  },
  {
    module_id: 51,
    course_id: 6,
    module_name: `The Nuances of Fluent English`,
    order_index: 8,
  },
  {
    module_id: 52,
    course_id: 6,
    module_name: `Critical Thinking & Persuasive Debating `,
    order_index: 9,
  },
  {
    module_id: 53,
    course_id: 6,
    module_name: ` Lifelong Learning & Mastery`,
    order_index: 10,
  },
];

const modules_itemsData = [
  {
    module_item_id: 1,
    module_id: 1,
    item_id: 1,
    item_type: `lesson`,
    order_index: 1,
  },
  {
    module_item_id: 2,
    module_id: 1,
    item_id: 2,
    item_type: `lesson`,
    order_index: 2,
  },
  {
    module_item_id: 3,
    module_id: 1,
    item_id: 3,
    item_type: `lesson`,
    order_index: 3,
  },
  {
    module_item_id: 4,
    module_id: 1,
    item_id: 4,
    item_type: `lesson`,
    order_index: 4,
  },
  {
    module_item_id: 5,
    module_id: 1,
    item_id: 5,
    item_type: `lesson`,
    order_index: 5,
  },
  {
    module_item_id: 6,
    module_id: 1,
    item_id: 6,
    item_type: `lesson`,
    order_index: 6,
  },
  {
    module_item_id: 7,
    module_id: 1,
    item_id: 7,
    item_type: `lesson`,
    order_index: 7,
  },
  {
    module_item_id: 8,
    module_id: 1,
    item_id: 8,
    item_type: `lesson`,
    order_index: 8,
  },
  {
    module_item_id: 9,
    module_id: 1,
    item_id: 9,
    item_type: `lesson`,
    order_index: 9,
  },
  {
    module_item_id: 10,
    module_id: 1,
    item_id: 1,
    item_type: `quiz`,
    order_index: 10,
  },
  {
    module_item_id: 11,
    module_id: 2,
    item_id: 10,
    item_type: `lesson`,
    order_index: 1,
  },
  {
    module_item_id: 12,
    module_id: 2,
    item_id: 11,
    item_type: `lesson`,
    order_index: 2,
  },
  {
    module_item_id: 13,
    module_id: 2,
    item_id: 12,
    item_type: `lesson`,
    order_index: 3,
  },
  {
    module_item_id: 14,
    module_id: 2,
    item_id: 13,
    item_type: `lesson`,
    order_index: 4,
  },
  {
    module_item_id: 15,
    module_id: 2,
    item_id: 14,
    item_type: `lesson`,
    order_index: 5,
  },
  {
    module_item_id: 16,
    module_id: 2,
    item_id: 15,
    item_type: `lesson`,
    order_index: 6,
  },
  {
    module_item_id: 17,
    module_id: 2,
    item_id: 2,
    item_type: `quiz`,
    order_index: 7,
  },
  {
    module_item_id: 18,
    module_id: 3,
    item_id: 16,
    item_type: `lesson`,
    order_index: 1,
  },
  {
    module_item_id: 19,
    module_id: 3,
    item_id: 17,
    item_type: `lesson`,
    order_index: 2,
  },
  {
    module_item_id: 20,
    module_id: 3,
    item_id: 18,
    item_type: `lesson`,
    order_index: 3,
  },
  {
    module_item_id: 21,
    module_id: 3,
    item_id: 19,
    item_type: `lesson`,
    order_index: 4,
  },
  {
    module_item_id: 22,
    module_id: 3,
    item_id: 20,
    item_type: `lesson`,
    order_index: 5,
  },
  {
    module_item_id: 23,
    module_id: 3,
    item_id: 21,
    item_type: `lesson`,
    order_index: 6,
  },
  {
    module_item_id: 24,
    module_id: 3,
    item_id: 3,
    item_type: `quiz`,
    order_index: 7,
  },
  {
    module_item_id: 25,
    module_id: 3,
    item_id: 22,
    item_type: `lesson`,
    order_index: 8,
  },
  {
    module_item_id: 26,
    module_id: 4,
    item_id: 23,
    item_type: `lesson`,
    order_index: 1,
  },
  {
    module_item_id: 27,
    module_id: 4,
    item_id: 24,
    item_type: `lesson`,
    order_index: 2,
  },
  {
    module_item_id: 28,
    module_id: 4,
    item_id: 25,
    item_type: `lesson`,
    order_index: 3,
  },
  {
    module_item_id: 29,
    module_id: 4,
    item_id: 26,
    item_type: `lesson`,
    order_index: 4,
  },
  {
    module_item_id: 30,
    module_id: 4,
    item_id: 27,
    item_type: `lesson`,
    order_index: 5,
  },
  {
    module_item_id: 31,
    module_id: 4,
    item_id: 28,
    item_type: `lesson`,
    order_index: 6,
  },
  {
    module_item_id: 32,
    module_id: 5,
    item_id: 29,
    item_type: `lesson`,
    order_index: 1,
  },
  {
    module_item_id: 33,
    module_id: 5,
    item_id: 30,
    item_type: `lesson`,
    order_index: 2,
  },
  {
    module_item_id: 34,
    module_id: 5,
    item_id: 31,
    item_type: `lesson`,
    order_index: 3,
  },
  {
    module_item_id: 35,
    module_id: 5,
    item_id: 32,
    item_type: `lesson`,
    order_index: 4,
  },
  {
    module_item_id: 36,
    module_id: 5,
    item_id: 33,
    item_type: `lesson`,
    order_index: 5,
  },
  {
    module_item_id: 37,
    module_id: 5,
    item_id: 34,
    item_type: `lesson`,
    order_index: 6,
  },
  {
    module_item_id: 38,
    module_id: 5,
    item_id: 35,
    item_type: `lesson`,
    order_index: 7,
  },
  {
    module_item_id: 39,
    module_id: 5,
    item_id: 36,
    item_type: `lesson`,
    order_index: 8,
  },
  {
    module_item_id: 40,
    module_id: 6,
    item_id: 37,
    item_type: `lesson`,
    order_index: 1,
  },
  {
    module_item_id: 41,
    module_id: 6,
    item_id: 38,
    item_type: `lesson`,
    order_index: 2,
  },
  {
    module_item_id: 42,
    module_id: 6,
    item_id: 39,
    item_type: `lesson`,
    order_index: 3,
  },
  {
    module_item_id: 43,
    module_id: 6,
    item_id: 40,
    item_type: `lesson`,
    order_index: 4,
  },
  {
    module_item_id: 44,
    module_id: 6,
    item_id: 41,
    item_type: `lesson`,
    order_index: 5,
  },
  {
    module_item_id: 45,
    module_id: 6,
    item_id: 42,
    item_type: `lesson`,
    order_index: 6,
  },
  {
    module_item_id: 46,
    module_id: 7,
    item_id: 43,
    item_type: `lesson`,
    order_index: 1,
  },
  {
    module_item_id: 47,
    module_id: 7,
    item_id: 44,
    item_type: `lesson`,
    order_index: 2,
  },
  {
    module_item_id: 48,
    module_id: 7,
    item_id: 45,
    item_type: `lesson`,
    order_index: 3,
  },
  {
    module_item_id: 49,
    module_id: 7,
    item_id: 46,
    item_type: `lesson`,
    order_index: 4,
  },
  {
    module_item_id: 50,
    module_id: 7,
    item_id: 47,
    item_type: `lesson`,
    order_index: 5,
  },
  {
    module_item_id: 51,
    module_id: 7,
    item_id: 48,
    item_type: `lesson`,
    order_index: 6,
  },
  {
    module_item_id: 52,
    module_id: 7,
    item_id: 49,
    item_type: `lesson`,
    order_index: 7,
  },
  {
    module_item_id: 53,
    module_id: 8,
    item_id: 50,
    item_type: `lesson`,
    order_index: 1,
  },
  {
    module_item_id: 54,
    module_id: 8,
    item_id: 51,
    item_type: `lesson`,
    order_index: 2,
  },
  {
    module_item_id: 55,
    module_id: 8,
    item_id: 52,
    item_type: `lesson`,
    order_index: 3,
  },
  {
    module_item_id: 56,
    module_id: 8,
    item_id: 53,
    item_type: `lesson`,
    order_index: 4,
  },
  {
    module_item_id: 57,
    module_id: 8,
    item_id: 54,
    item_type: `lesson`,
    order_index: 5,
  },
  {
    module_item_id: 58,
    module_id: 8,
    item_id: 55,
    item_type: `lesson`,
    order_index: 6,
  },
  {
    module_item_id: 59,
    module_id: 9,
    item_id: 56,
    item_type: `lesson`,
    order_index: 1,
  },
  {
    module_item_id: 60,
    module_id: 9,
    item_id: 57,
    item_type: `lesson`,
    order_index: 2,
  },
  {
    module_item_id: 61,
    module_id: 9,
    item_id: 58,
    item_type: `lesson`,
    order_index: 3,
  },
  {
    module_item_id: 62,
    module_id: 9,
    item_id: 59,
    item_type: `lesson`,
    order_index: 4,
  },
  {
    module_item_id: 63,
    module_id: 9,
    item_id: 60,
    item_type: `lesson`,
    order_index: 5,
  },
  {
    module_item_id: 64,
    module_id: 10,
    item_id: 61,
    item_type: `lesson`,
    order_index: 1,
  },
  {
    module_item_id: 65,
    module_id: 10,
    item_id: 62,
    item_type: `lesson`,
    order_index: 2,
  },
  {
    module_item_id: 66,
    module_id: 10,
    item_id: 63,
    item_type: `lesson`,
    order_index: 3,
  },
  {
    module_item_id: 67,
    module_id: 10,
    item_id: 64,
    item_type: `lesson`,
    order_index: 4,
  },
  {
    module_item_id: 68,
    module_id: 10,
    item_id: 65,
    item_type: `lesson`,
    order_index: 5,
  },
  {
    module_item_id: 69,
    module_id: 11,
    item_id: 66,
    item_type: `lesson`,
    order_index: 1,
  },
  {
    module_item_id: 70,
    module_id: 11,
    item_id: 67,
    item_type: `lesson`,
    order_index: 2,
  },
  {
    module_item_id: 71,
    module_id: 11,
    item_id: 68,
    item_type: `lesson`,
    order_index: 3,
  },
  {
    module_item_id: 72,
    module_id: 12,
    item_id: 69,
    item_type: `lesson`,
    order_index: 1,
  },
  {
    module_item_id: 73,
    module_id: 12,
    item_id: 70,
    item_type: `lesson`,
    order_index: 2,
  },
  {
    module_item_id: 74,
    module_id: 13,
    item_id: 71,
    item_type: `lesson`,
    order_index: 1,
  },
  {
    module_item_id: 75,
    module_id: 14,
    item_id: 72,
    item_type: `lesson`,
    order_index: 1,
  },
  {
    module_item_id: 76,
    module_id: 14,
    item_id: 73,
    item_type: `lesson`,
    order_index: 2,
  },
  {
    module_item_id: 77,
    module_id: 14,
    item_id: 74,
    item_type: `lesson`,
    order_index: 3,
  },
  {
    module_item_id: 78,
    module_id: 15,
    item_id: 75,
    item_type: `lesson`,
    order_index: 1,
  },
  {
    module_item_id: 79,
    module_id: 15,
    item_id: 76,
    item_type: `lesson`,
    order_index: 2,
  },
  {
    module_item_id: 80,
    module_id: 22,
    item_id: 77,
    item_type: `lesson`,
    order_index: 1,
  },
  {
    module_item_id: 81,
    module_id: 22,
    item_id: 78,
    item_type: `lesson`,
    order_index: 2,
  },
  {
    module_item_id: 82,
    module_id: 22,
    item_id: 4,
    item_type: `quiz`,
    order_index: 3,
  },
  {
    module_item_id: 83,
    module_id: 15,
    item_id: 79,
    item_type: `lesson`,
    order_index: 3,
  },
  {
    module_item_id: 84,
    module_id: 15,
    item_id: 80,
    item_type: `lesson`,
    order_index: 4,
  },
  {
    module_item_id: 85,
    module_id: 16,
    item_id: 81,
    item_type: `lesson`,
    order_index: 1,
  },
  {
    module_item_id: 86,
    module_id: 16,
    item_id: 82,
    item_type: `lesson`,
    order_index: 2,
  },
  {
    module_item_id: 87,
    module_id: 16,
    item_id: 83,
    item_type: `lesson`,
    order_index: 3,
  },
  {
    module_item_id: 88,
    module_id: 16,
    item_id: 84,
    item_type: `lesson`,
    order_index: 4,
  },
  {
    module_item_id: 89,
    module_id: 17,
    item_id: 85,
    item_type: `lesson`,
    order_index: 1,
  },
  {
    module_item_id: 90,
    module_id: 17,
    item_id: 86,
    item_type: `lesson`,
    order_index: 2,
  },
  {
    module_item_id: 91,
    module_id: 17,
    item_id: 87,
    item_type: `lesson`,
    order_index: 3,
  },
  {
    module_item_id: 92,
    module_id: 17,
    item_id: 88,
    item_type: `lesson`,
    order_index: 4,
  },
  {
    module_item_id: 93,
    module_id: 18,
    item_id: 89,
    item_type: `lesson`,
    order_index: 1,
  },
  {
    module_item_id: 94,
    module_id: 18,
    item_id: 90,
    item_type: `lesson`,
    order_index: 2,
  },
  {
    module_item_id: 95,
    module_id: 18,
    item_id: 91,
    item_type: `lesson`,
    order_index: 3,
  },
  {
    module_item_id: 96,
    module_id: 18,
    item_id: 92,
    item_type: `lesson`,
    order_index: 4,
  },
  {
    module_item_id: 97,
    module_id: 18,
    item_id: 93,
    item_type: `lesson`,
    order_index: 5,
  },
  {
    module_item_id: 98,
    module_id: 19,
    item_id: 94,
    item_type: `lesson`,
    order_index: 1,
  },
  {
    module_item_id: 99,
    module_id: 19,
    item_id: 95,
    item_type: `lesson`,
    order_index: 2,
  },
  {
    module_item_id: 100,
    module_id: 19,
    item_id: 96,
    item_type: `lesson`,
    order_index: 3,
  },
  {
    module_item_id: 101,
    module_id: 19,
    item_id: 97,
    item_type: `lesson`,
    order_index: 4,
  },
  {
    module_item_id: 102,
    module_id: 20,
    item_id: 98,
    item_type: `lesson`,
    order_index: 1,
  },
  {
    module_item_id: 103,
    module_id: 20,
    item_id: 99,
    item_type: `lesson`,
    order_index: 2,
  },
  {
    module_item_id: 104,
    module_id: 20,
    item_id: 100,
    item_type: `lesson`,
    order_index: 3,
  },
  {
    module_item_id: 105,
    module_id: 20,
    item_id: 101,
    item_type: `lesson`,
    order_index: 4,
  },
  {
    module_item_id: 106,
    module_id: 20,
    item_id: 102,
    item_type: `lesson`,
    order_index: 5,
  },
  {
    module_item_id: 107,
    module_id: 24,
    item_id: 103,
    item_type: `lesson`,
    order_index: 1,
  },
  {
    module_item_id: 108,
    module_id: 24,
    item_id: 104,
    item_type: `lesson`,
    order_index: 2,
  },
  {
    module_item_id: 109,
    module_id: 24,
    item_id: 105,
    item_type: `lesson`,
    order_index: 3,
  },
  {
    module_item_id: 110,
    module_id: 24,
    item_id: 106,
    item_type: `lesson`,
    order_index: 4,
  },
  {
    module_item_id: 111,
    module_id: 24,
    item_id: 107,
    item_type: `lesson`,
    order_index: 5,
  },
  {
    module_item_id: 112,
    module_id: 23,
    item_id: 108,
    item_type: `lesson`,
    order_index: 1,
  },
  {
    module_item_id: 113,
    module_id: 25,
    item_id: 109,
    item_type: `lesson`,
    order_index: 1,
  },
  {
    module_item_id: 114,
    module_id: 30,
    item_id: 110,
    item_type: `lesson`,
    order_index: 1,
  },
  {
    module_item_id: 115,
    module_id: 30,
    item_id: 111,
    item_type: `lesson`,
    order_index: 2,
  },
  {
    module_item_id: 116,
    module_id: 31,
    item_id: 112,
    item_type: `lesson`,
    order_index: 1,
  },
  {
    module_item_id: 117,
    module_id: 31,
    item_id: 113,
    item_type: `lesson`,
    order_index: 2,
  },
  {
    module_item_id: 118,
    module_id: 31,
    item_id: 114,
    item_type: `lesson`,
    order_index: 3,
  },
  {
    module_item_id: 119,
    module_id: 32,
    item_id: 115,
    item_type: `lesson`,
    order_index: 1,
  },
  {
    module_item_id: 120,
    module_id: 32,
    item_id: 116,
    item_type: `lesson`,
    order_index: 2,
  },
  {
    module_item_id: 121,
    module_id: 33,
    item_id: 117,
    item_type: `lesson`,
    order_index: 1,
  },
  {
    module_item_id: 122,
    module_id: 33,
    item_id: 118,
    item_type: `lesson`,
    order_index: 2,
  },
  {
    module_item_id: 123,
    module_id: 33,
    item_id: 119,
    item_type: `lesson`,
    order_index: 3,
  },
  {
    module_item_id: 124,
    module_id: 34,
    item_id: 120,
    item_type: `lesson`,
    order_index: 1,
  },
  {
    module_item_id: 125,
    module_id: 34,
    item_id: 121,
    item_type: `lesson`,
    order_index: 2,
  },
  {
    module_item_id: 126,
    module_id: 34,
    item_id: 122,
    item_type: `lesson`,
    order_index: 3,
  },
  {
    module_item_id: 127,
    module_id: 34,
    item_id: 123,
    item_type: `lesson`,
    order_index: 4,
  },
  {
    module_item_id: 128,
    module_id: 35,
    item_id: 124,
    item_type: `lesson`,
    order_index: 1,
  },
  {
    module_item_id: 129,
    module_id: 36,
    item_id: 125,
    item_type: `lesson`,
    order_index: 1,
  },
  {
    module_item_id: 130,
    module_id: 35,
    item_id: 126,
    item_type: `lesson`,
    order_index: 2,
  },
  {
    module_item_id: 131,
    module_id: 35,
    item_id: 127,
    item_type: `lesson`,
    order_index: 3,
  },
  {
    module_item_id: 132,
    module_id: 36,
    item_id: 128,
    item_type: `lesson`,
    order_index: 2,
  },
  {
    module_item_id: 133,
    module_id: 38,
    item_id: 129,
    item_type: `lesson`,
    order_index: 1,
  },
  {
    module_item_id: 134,
    module_id: 38,
    item_id: 130,
    item_type: `lesson`,
    order_index: 2,
  },
  {
    module_item_id: 135,
    module_id: 29,
    item_id: 131,
    item_type: `lesson`,
    order_index: 1,
  },
  {
    module_item_id: 136,
    module_id: 38,
    item_id: 132,
    item_type: `lesson`,
    order_index: 3,
  },
  {
    module_item_id: 137,
    module_id: 38,
    item_id: 133,
    item_type: `lesson`,
    order_index: 4,
  },
  {
    module_item_id: 138,
    module_id: 39,
    item_id: 134,
    item_type: `lesson`,
    order_index: 1,
  },
  {
    module_item_id: 139,
    module_id: 39,
    item_id: 135,
    item_type: `lesson`,
    order_index: 2,
  },
  {
    module_item_id: 140,
    module_id: 39,
    item_id: 136,
    item_type: `lesson`,
    order_index: 3,
  },
  {
    module_item_id: 141,
    module_id: 39,
    item_id: 137,
    item_type: `lesson`,
    order_index: 4,
  },
  {
    module_item_id: 142,
    module_id: 40,
    item_id: 138,
    item_type: `lesson`,
    order_index: 1,
  },
  {
    module_item_id: 143,
    module_id: 28,
    item_id: 139,
    item_type: `lesson`,
    order_index: 1,
  },
  {
    module_item_id: 144,
    module_id: 40,
    item_id: 140,
    item_type: `lesson`,
    order_index: 2,
  },
  {
    module_item_id: 145,
    module_id: 26,
    item_id: 141,
    item_type: `lesson`,
    order_index: 1,
  },
  {
    module_item_id: 146,
    module_id: 40,
    item_id: 142,
    item_type: `lesson`,
    order_index: 3,
  },
  {
    module_item_id: 147,
    module_id: 40,
    item_id: 143,
    item_type: `lesson`,
    order_index: 4,
  },
  {
    module_item_id: 148,
    module_id: 26,
    item_id: 144,
    item_type: `lesson`,
    order_index: 2,
  },
  {
    module_item_id: 149,
    module_id: 26,
    item_id: 145,
    item_type: `lesson`,
    order_index: 3,
  },
  {
    module_item_id: 150,
    module_id: 26,
    item_id: 146,
    item_type: `lesson`,
    order_index: 4,
  },
  {
    module_item_id: 151,
    module_id: 27,
    item_id: 147,
    item_type: `lesson`,
    order_index: 1,
  },
  {
    module_item_id: 152,
    module_id: 42,
    item_id: 148,
    item_type: `lesson`,
    order_index: 1,
  },
  {
    module_item_id: 153,
    module_id: 43,
    item_id: 149,
    item_type: `lesson`,
    order_index: 1,
  },
  {
    module_item_id: 154,
    module_id: 43,
    item_id: 150,
    item_type: `lesson`,
    order_index: 2,
  },
  {
    module_item_id: 155,
    module_id: 41,
    item_id: 151,
    item_type: `lesson`,
    order_index: 1,
  },
  {
    module_item_id: 156,
    module_id: 43,
    item_id: 152,
    item_type: `lesson`,
    order_index: 3,
  },
  {
    module_item_id: 157,
    module_id: 44,
    item_id: 153,
    item_type: `lesson`,
    order_index: 1,
  },
  {
    module_item_id: 158,
    module_id: 43,
    item_id: 154,
    item_type: `lesson`,
    order_index: 4,
  },
  {
    module_item_id: 159,
    module_id: 45,
    item_id: 155,
    item_type: `lesson`,
    order_index: 1,
  },
  {
    module_item_id: 160,
    module_id: 45,
    item_id: 156,
    item_type: `lesson`,
    order_index: 2,
  },
  {
    module_item_id: 161,
    module_id: 21,
    item_id: 5,
    item_type: `quiz`,
    order_index: 1,
  },
  {
    module_item_id: 162,
    module_id: 45,
    item_id: 157,
    item_type: `lesson`,
    order_index: 3,
  },
  {
    module_item_id: 163,
    module_id: 45,
    item_id: 158,
    item_type: `lesson`,
    order_index: 4,
  },
  {
    module_item_id: 164,
    module_id: 46,
    item_id: 159,
    item_type: `lesson`,
    order_index: 1,
  },
  {
    module_item_id: 165,
    module_id: 46,
    item_id: 160,
    item_type: `lesson`,
    order_index: 2,
  },
  {
    module_item_id: 166,
    module_id: 46,
    item_id: 161,
    item_type: `lesson`,
    order_index: 3,
  },
  {
    module_item_id: 167,
    module_id: 46,
    item_id: 162,
    item_type: `lesson`,
    order_index: 4,
  },
  {
    module_item_id: 168,
    module_id: 47,
    item_id: 163,
    item_type: `lesson`,
    order_index: 1,
  },
  {
    module_item_id: 169,
    module_id: 47,
    item_id: 164,
    item_type: `lesson`,
    order_index: 2,
  },
  {
    module_item_id: 170,
    module_id: 47,
    item_id: 165,
    item_type: `lesson`,
    order_index: 3,
  },
  {
    module_item_id: 171,
    module_id: 47,
    item_id: 166,
    item_type: `lesson`,
    order_index: 4,
  },
  {
    module_item_id: 172,
    module_id: 48,
    item_id: 167,
    item_type: `lesson`,
    order_index: 1,
  },
  {
    module_item_id: 173,
    module_id: 48,
    item_id: 168,
    item_type: `lesson`,
    order_index: 2,
  },
  {
    module_item_id: 174,
    module_id: 48,
    item_id: 169,
    item_type: `lesson`,
    order_index: 3,
  },
  {
    module_item_id: 175,
    module_id: 48,
    item_id: 170,
    item_type: `lesson`,
    order_index: 4,
  },
  {
    module_item_id: 176,
    module_id: 49,
    item_id: 171,
    item_type: `lesson`,
    order_index: 1,
  },
  {
    module_item_id: 177,
    module_id: 49,
    item_id: 172,
    item_type: `lesson`,
    order_index: 2,
  },
  {
    module_item_id: 178,
    module_id: 49,
    item_id: 173,
    item_type: `lesson`,
    order_index: 3,
  },
  {
    module_item_id: 179,
    module_id: 49,
    item_id: 174,
    item_type: `lesson`,
    order_index: 4,
  },
  {
    module_item_id: 180,
    module_id: 50,
    item_id: 175,
    item_type: `lesson`,
    order_index: 1,
  },
  {
    module_item_id: 181,
    module_id: 50,
    item_id: 176,
    item_type: `lesson`,
    order_index: 2,
  },
  {
    module_item_id: 182,
    module_id: 50,
    item_id: 177,
    item_type: `lesson`,
    order_index: 3,
  },
  {
    module_item_id: 183,
    module_id: 50,
    item_id: 178,
    item_type: `lesson`,
    order_index: 4,
  },
  {
    module_item_id: 184,
    module_id: 50,
    item_id: 179,
    item_type: `lesson`,
    order_index: 5,
  },
  {
    module_item_id: 185,
    module_id: 51,
    item_id: 180,
    item_type: `lesson`,
    order_index: 1,
  },
  {
    module_item_id: 186,
    module_id: 51,
    item_id: 181,
    item_type: `lesson`,
    order_index: 2,
  },
  {
    module_item_id: 187,
    module_id: 51,
    item_id: 182,
    item_type: `lesson`,
    order_index: 3,
  },
  {
    module_item_id: 188,
    module_id: 51,
    item_id: 183,
    item_type: `lesson`,
    order_index: 4,
  },
  {
    module_item_id: 189,
    module_id: 52,
    item_id: 184,
    item_type: `lesson`,
    order_index: 1,
  },
  {
    module_item_id: 190,
    module_id: 52,
    item_id: 185,
    item_type: `lesson`,
    order_index: 2,
  },
  {
    module_item_id: 191,
    module_id: 52,
    item_id: 186,
    item_type: `lesson`,
    order_index: 3,
  },
  {
    module_item_id: 192,
    module_id: 52,
    item_id: 187,
    item_type: `lesson`,
    order_index: 4,
  },
  {
    module_item_id: 193,
    module_id: 53,
    item_id: 188,
    item_type: `lesson`,
    order_index: 1,
  },
  {
    module_item_id: 194,
    module_id: 53,
    item_id: 189,
    item_type: `lesson`,
    order_index: 2,
  },
  {
    module_item_id: 195,
    module_id: 53,
    item_id: 190,
    item_type: `lesson`,
    order_index: 3,
  },
];

const lessonsData = [
  {
    lesson_id: 1,
    module_id: 1,
    lesson_name: `ก่อนจะถอดรหัส`,
    content: `ภาพยนตร์เรื่อง **สวย ลาก ไส้ (พ.ศ. 2550)** ผลงานการกำกับโดย ทศพล ศิริวิวัฒน์ และ พีระพันธ์ เหล่ายนตร์ มิได้เป็นเพียงภาพยนตร์ในตระกูลสยองขวัญ (Horror Genre) ที่มุ่งเน้นความตื่นเต้นเร้าใจเพียงอย่างเดียว แต่หากพิจารณาผ่านมุมมองทางทัศนศิลป์ จะพบการใช้ประยุกต์ใช้ศาสตร์และศิลป์ที่แยบยลในการเปลี่ยนพื้นที่แห่งความงามอย่าง โรงพยาบาลศัลยกรรม ให้กลายเป็นสนามแห่งพิธีกรรมชำระบาป
เนื้อหาในบทเรียนนี้จะจำแนกองค์ประกอบที่ทำให้ภาพยนตร์เรื่องนี้ประสบความสำเร็จในการใช้ความสยองขวัญเป็นกระจกเงาสะท้อนภาพลักษณ์ความเน่าเฟะที่ซ่อนอยู่ภายใต้ความงดงามที่ฉาบฉวย`,
  },
  {
    lesson_id: 2,
    module_id: 1,
    lesson_name: `การสร้างแรงกดดันและการวางโครงสร้างบทละคร`,
    content: `1. ศาสตร์แห่งการสร้างแรงกดดันและการวางโครงสร้างบทละคร (Narrative Tension)
    ในเชิงการเล่าเรื่อง ภาพยนตร์ได้นำศาสตร์แห่งการบริหารอารมณ์ร่วมของผู้ชมมาใช้ผ่านสองกลวิธีหลัก
    1\\. กลไกนาฬิกาที่กำลังนับถอยหลัง \\(The Ticking Clock Scenario\\)
    การกำหนดเงื่อนไขเวลา 7 วัน มิได้เป็นเพียงการกำหนดกรอบเวลาตามความเชื่อเรื่องวิญญาณตามคติพื้นบ้านเท่านั้น แต่ในทางศาสตร์การเขียนบท นี่คือเครื่องมือในการสร้างความรู้สึกเร่งรีบ (Urgency) ที่บีบคั้นอารมณ์ผู้ชมอย่างต่อเนื่อง ภาวะการนับถอยหลังนี้ทำให้เกิดการไต่ระดับความรุนแรงของเหตุการณ์ (Escalation) จากจุดเริ่มต้นไปสู่จุดสูงสุดในวันที่ 7 ซึ่งเป็นช่วงเวลาที่แรงกดดันและความสยองขวัญถูกปลดปล่อยออกมาอย่างเต็มที่
    2\\. การสร้างภาวะอึดอัดในพื้นที่จำกัด \\(Claustrophobia\\)
     แม้ฉากหลังจะเป็นโรงพยาบาลที่กว้างขวางและทันสมัย แต่ผู้ออกแบบงานสร้างจงใจใ noช้เส้นสายทางเรขาคณิตที่แข็งกร้าวและมุมกล้องที่บีบอัดตัวละครจำนวนมากให้อยู่ในกรอบภาพเดียวกัน สภาวะเช่นนี้ทำให้เกิดความรู้สึกอึดอัดทางจิตวิทยา (Psychological Discomfort) ราวกับว่าตัวละครถูกกักขังอยู่ในกรงขังแห่งกรรมที่ไม่มีทางออก`,
  },
  {
    lesson_id: 3,
    module_id: 1,
    lesson_name: `ศิลปะเชิงสัญลักษณ์`,
    content: `2. ศิลปะเชิงสัญลักษณ์และการรื้อสร้างสุนทรียภาพ (Symbolism & Aesthetics)
หัวใจสำคัญของภาพยนตร์เรื่องนี้คือการใช้สัญลักษณ์เพื่อสื่อสารความหมายแฝง
การบิดเบือนการรับรู้เชิงทัศนศิลป์ (Visual Distortion)
การเลือกใช้เทคนิคการถ่ายภาพแบบ Close-up หรือการซูมเน้นไปที่ดวงตาเพียงข้างเดียว เป็นกลวิธีทางศิลปะที่ต้องการทำลายความสมมาตร (Symmetry) ซึ่งเป็นบรรทัดฐานของความงามตามธรรมชาติ เมื่อสายตาของมนุษย์ถูกบังคับให้มองเห็นความไม่สมบูรณ์ สัญชาตญาณจะตอบสนองด้วยความรู้สึกแปลกแยกและหวาดระแวง สื่อถึงภาวะจิตใจที่บิดเบี้ยวของตัวละครและการถูก จับจ้อง จากอำนาจมืดที่มองไม่เห็น
สัญลักษณ์แห่งวัฏจักรและความผูกพัน
การปรากฏของสัญลักษณ์ ปลาคราฟว่ายวน ในลักษณะหยินหยาง เป็นการหยิบยืมปรัชญาตะวันออกมาใช้เปรียบเปรยถึงพลังงานที่หมุนเวียนอย่างไม่มีสิ้นสุด ในบริบทของภาพยนตร์ สัญลักษณ์นี้แทนภาพความสัมพันธ์ระหว่างตัวละครที่เป็นดั่งเงาสะท้อนของกันและกัน เมื่อคนหนึ่งก่อกรรม อีกคนย่อมได้รับผล และทั้งหมดต่างติดอยู่ในวงจรแห่งกิเลสที่พันธนาการพวกเขาไว้ด้วยกันทั้งทางกายและจิตวิญญาณ
`,
  },
  {
    lesson_id: 4,
    module_id: 1,
    lesson_name: `โสตทัศนศิลป์และการสื่อสารผ่านความย้อนแย้ง`,
    content: `3. ศาสตร์แห่งโสตทัศนศิลป์และการสื่อสารผ่านนัยความย้อนแย้ง (Musical Irony)
ดนตรีประกอบในภาพยนตร์เรื่องนี้มิได้ทำหน้าที่เพียงสร้างบรรยากาศ แต่ยังเป็นเครื่องมือในการวิพากษ์เนื้อหา
ความย้อนแย้งของสัญญะแห่งโศกนาฏกรรม
การนำเพลง Bridal Chorus ของ ริชาร์ด วากเนอร์ มาใช้ประกอบฉาก เป็นการสร้างภาวะ ความย้อนแย้งเชิงศิลป์ (Irony) เนื่องจากในระดับพื้นฐาน เพลงนี้สื่อถึงการเริ่มต้นชีวิตคู่ที่สมบูรณ์แบบ แต่ในระดับลึก ภูมิหลังของบทเพลงจากละครอุปรากรเรื่อง Lohengrin กลับเล่าถึงความรักที่พังทลายด้วยความระแวงและโศกนาฏกรรม
เสียงที่สะท้อนประวัติศาสตร์อันมืดดำ
การเลือกงานของวากเนอร์ซึ่งมีประวัติศาสตร์ผูกโยงกับอุดมการณ์ที่รุนแรงในอดีต ช่วยสร้างความรู้สึกที่ไม่น่าไว้วางใจให้แก่ผู้ชม ดนตรีจึงทำหน้าที่ตอกย้ำว่า ความรัก ในความสัมพันธ์ระหว่างหมอต้าร์และเหล่าพยาบาลนั้น มิได้เกิดขึ้นจากความบริสุทธิ์ใจ แต่เต็มไปด้วยความแค้น ความริษยา และการครอบครอง
`,
  },
  {
    lesson_id: 5,
    module_id: 1,
    lesson_name: `การใช้แสงและสีในทางอารมณ์`,
    content: `Stylized Neon มักจะถูกใช้เรียกในบริบทของงานศิลปะ การออกแบบ (Graphic Design) และการตกแต่ง โดยมีจุดเด่นอยู่ที่การใช้แสงสีที่ฉูดฉาดและรูปทรงที่แปลกตาไปจากหลอดนีออนดั้งเดิม และภาพยนตร์เรื่องนี้มีความโดดเด่นอย่างมากในการใช้แสงสีแบบ Stylized Neon เพื่อทำหน้าที่เป็น ภาษาทางอารมณ์ (Emotional Language) ที่สื่อสารโดยตรงกับจิตใต้สำนึกของผู้ชม

* สีชมพูนีออน (Neon Pink): แม้โดยทั่วไปสีชมพูจะหมายถึงความอ่อนหวาน แต่ในบทเรียนนี้เราจะพบว่าภาพยนตร์ใช้สีชมพูในโทนที่จัดจ้านเกินจริง เพื่อแทนค่าของ ความหลงใหลที่ปรุงแต่ง (Synthetic Obsession) สื่อถึงตัณหาและความริษยาที่ฉาบหน้าด้วยความเป็นผู้หญิงและวงการแฟชั่น แต่เบื้องหลังกลับเต็มไปด้วยพิษร้ายที่พร้อมจะทำลายล้าง


* สีฟ้าครามและขาวโพลน (Clinical Blue & Stark White): เป็นการสื่อถึงอารมณ์ที่เย็นชา (Coldness) และการไร้ความปรานี หนังใช้โทนสีนี้เพื่อสร้างสภาวะการลดทอนความเป็นมนุษย์ (Dehumanization) โดยเปลี่ยนให้มนุษย์ที่มีชีวิตกลายเป็นเพียงสินค้าหรือวัตถุศัลยกรรมภายใต้แสงไฟที่สว่างจ้าแต่ไร้จิตใจ


* สีเขียวนีออน (Eerie Green): ทำหน้าที่สื่อสารอารมณ์แห่งความหวาดกลัวและการกัดกินของกรรม สีเขียวโทนนี้ในทางจิตวิทยาแทนค่าของ ความริษยา (Envy) และสภาวะจิตที่ป่วยไข้ (Sickness) เปรียบเสมือนแสงจากโลกวิญญาณที่คืบคลานเข้ามาทวงคืนความยุติธรรมในพื้นที่ที่กิเลสปกคลุม

ศาสตร์แห่งการปะทะของสี (Color Contrast): การเลือกใช้สีคู่ตรงข้ามที่รุนแรง (High-Contrast) ส่งผลโดยตรงต่อการรับรู้ทางประสาทสัมผัส ทำให้ผู้ชมรู้สึก ไม่มั่นคง และ เหนื่อยล้าทางสายตา ซึ่งเป็นเทคนิคทางศิลปะที่ช่วยจำลองสภาวะทางจิตของตัวละครที่กำลังถูกกดดันจากความผิดบาปและการจองเวร`,
  },
  {
    lesson_id: 6,
    module_id: 1,
    lesson_name: `ทฤษฎีความหลงใหลและสภาวะความผิดปกติทางจิต`,
    content: `เพื่อให้เข้าใจถึงแก่นของวิธีการตายที่ออกแบบตาม ความหลงใหล (Obsession) ของพยาบาลแต่ละคน เราต้องพิจารณาผ่านทฤษฎีทางจิตวิทยาเพิ่มเติม

* โรคคิดว่าตนเองมีรูปร่างผิดปกติ (Body Dysmorphic Disorder - BDD): ภาพยนตร์ใช้สภาวะที่ตัวละครหมกมุ่นอยู่กับจุดบกพร่องของร่างกายมาเป็นชนวนเหตุทางศิลปะ ในทางทฤษฎีสุนทรียศาสตร์ (Aesthetics) ความงามที่ถูก ตัดต่อ หรือ ศัลยกรรม คือการพยายามเข้าใกล้ความสมบูรณ์แบบที่ไม่มีอยู่จริง เมื่อตัวละครถูกฆ่าด้วยสิ่งที่ตนเองหลงใหล เช่น การถูกเย็บปากหรือการถูกชำแหละรูปร่าง มันคือการสะท้อนแนวคิด Poetic Justice หรือความยุติธรรมเชิงกวีที่ผลกรรมถูกสนองด้วยเครื่องมือที่ตนเองใช้สร้างมายาคติขึ้นมา
* สัญชาตญาณความตาย (Thanatos) และความปรารถนา (Eros): ทฤษฎีของ ซิกมันด์ ฟรอยด์ (Sigmund Freud) อธิบายถึงแรงขับทางเพศและความงาม (Eros) ที่มักจะอยู่คู่กับความตาย (Thanatos) เสมอ ในภาพยนตร์เรื่องนี้ โรงพยาบาลศัลยกรรม คือพื้นที่ที่ Eros และ Thanatos มาบรรจบกัน ความสวยงามที่เกิดขึ้นบนเตียงผ่าตัดไม่ได้หมายถึงการมีชีวิตใหม่ แต่คือความตายของเอกลักษณ์เดิมเพื่อสร้างตัวตนใหม่ที่สังคมยอมรับ`,
  },
  {
    lesson_id: 7,
    module_id: 1,
    lesson_name: `ทฤษฎีพื้นที่เหนือจริงและสภาวะกึ่งกลาง`,
    content: `ทฤษฎีพื้นที่เหนือจริงและสภาวะกึ่งกลาง (Liminal Space & Surrealism)
ศาสตร์แห่งการออกแบบฉากในภาพยนตร์เรื่องนี้สามารถวิเคราะห์ผ่านแนวคิดเรื่อง Liminal Space
ในทางจิตวิทยาและสุนทรียศาสตร์ Liminal Space ก่อให้เกิดความรู้สึก Uncanny Valley เมื่อเราเห็นสถานที่ที่คุ้นเคยอยู่ในบริบทที่ผิดปกติ สมองจะเกิดความสับสนและระแวง ทำให้รู้สึกอึดอัดหรือไม่สบายใจ

* พื้นที่รอยต่อระหว่างความจริงและความฝัน: โรงพยาบาลในเรื่องถูกนำเสนอในลักษณะ Surrealism หรือเหนือจริง แสงนีออนและรันเวย์ทำให้พื้นที่นี้สูญเสียความเป็น สถานพยาบาล ในโลกแห่งความเป็นจริงไปอย่างสิ้นเชิง สภาวะกึ่งกลางนี้ช่วยให้ภาพยนตร์สามารถนำเสนอความสยองขวัญที่หลุดพ้นจากตรรกะปกติได้ ผู้ชมจะรู้สึกเหมือนติดอยู่ในฝันร้ายที่มองเห็นทุกอย่างชัดเจนด้วยแสงไฟ แต่ไม่สามารถหาทางออกจากวังวนของเหตุการณ์ได้
* สถาปัตยกรรมแห่งการควบคุม (Panopticon): เส้นสายเรขาคณิตและการใช้กระจกสะท้อนในหลายฉาก ทำหน้าที่เหมือนโครงสร้างที่พยายามสอดส่องและควบคุมความงาม แต่เมื่อกฎเกณฑ์พังทลายลงจากการตายของดวงพร พื้นที่ที่เคยใช้ จ้องมอง เพื่อความงาม กลับกลายเป็นพื้นที่ที่ ดวงตา ของผู้ตายใช้จ้องมองกลับมาเพื่อล้างแค้น`,
  },
  {
    lesson_id: 8,
    module_id: 1,
    lesson_name: `ทฤษฎีความย้อนแย้งเชิงภาพ`,
    content: `ในภาพยนตร์เรื่องนี้มีความพยายามใช้ศาสตร์ของการสร้าง ความสวยที่น่าเกลียด (The Aesthetics of the Ugly)

* ความน่าเกลียดในฐานะความงามเชิงศิลปะ: นักปรัชญาอย่าง อุมแบร์โต เอโก (Umberto Eco) เคยกล่าวถึง ความน่าเกลียด ว่าสามารถมีสุนทรียศาสตร์ในตัวมันเองได้ ภาพยนตร์จงใจนำเสนอภาพเลือดและอวัยวะให้ดูสะอาดและมีความเป็นศิลปะ (Aestheticized Violence) เช่น ฉากการตายที่มีองค์ประกอบภาพคล้ายงานศิลปะจัดวาง (Installation Art)


* เป้าหมายเชิงสัญวิทยา: การทำเช่นนี้เพื่อสื่อว่าในโลกที่บูชาความฉาบฉวย แม้แต่ความตายและความเจ็บปวดก็ถูกทำให้กลายเป็นเรื่องที่ ดูดี ได้ นี่คือการวิพากษ์อุตสาหกรรมความงามที่เปลี่ยนความเจ็บปวดจากการถูกเฉือนเนื้อเถือหนังให้กลายเป็นมูลค่าทางการค้า`,
  },
  {
    lesson_id: 9,
    module_id: 1,
    lesson_name: `ส่งท้ายก่อนถอดรหัส`,
    content: `จากการพิจารณาทั้ง 7 หัวข้อข้างต้น เราจะเห็นได้ว่า สวย ลาก ไส้ มิได้เป็นเพียงหนังผีที่มุ่งเน้นการล้างแค้น แต่เป็นงานทัศนศิลป์ที่วิพากษ์มนุษย์ที่ให้ค่ากับสิ่งที่ตามองเห็นมากกว่าคุณค่าภายใน ศาสตร์และศิลป์ที่นำมาใช้ทั้งหมด ไม่ว่าจะเป็น แสงนีออน เพลงคลาสสิก หรือมุมกล้องที่ผิดเพี้ยน ต่างทำหน้าที่ร่วมกันเพื่อส่งสารสำคัญเพียงประการเดียวคือ:

> มายาคติที่สร้างขึ้นจากความริษยาและความหลงใหลนั้นเปราะบางเพียงใด และเมื่อถึงเวลาที่ความจริง (ในรูปของผลกรรม) ปรากฏขึ้น เปลือกนอกที่งดงามที่สุดก็ไม่อาจปกปิดความเน่าเฟะที่อยู่ข้างในได้เลย

บทวิเคราะห์ศาสตร์และศิลป์ที่ปรากฏในบทเรียนนี้ เป็นการถอดรหัสและตีความผ่านมุมมองทางทัศนศิลป์โดยอาศัยทฤษฎีทางสุนทรียศาสตร์มาเป็นแกนกลาง ทั้งนี้ ข้อสรุปทั้งหมดถือเป็นทัศนะและการวิเคราะห์เชิงวิพากษ์ส่วนบุคคล ซึ่งมุ่งเน้นไปที่การแสวงหาความหมายแฝงที่ซ่อนอยู่ในองค์ประกอบศิลป์ของภาพยนตร์เท่านั้น
การศึกษาในบทเรียนนี้จึงไม่ได้มีวัตถุประสงค์เพื่อจำกัดกรอบความคิด แต่เพื่อเป็นแนวทางเบื้องต้นในการชี้ให้เห็นว่า ภาษาภาพยนตร์ สามารถทำงานร่วมกับกิเลสตัณหาของมนุษย์ได้อย่างไร และเพื่อกระตุ้นให้ผู้อ่านได้เกิดการตั้งคำถามต่อมายาคติแห่งความงามในสังคมปัจจุบันต่อไป`,
  },
  {
    lesson_id: 10,
    module_id: 2,
    lesson_name: `ก่อนจะถอดรหัส`,
    content: `ภาพยนตร์เรื่อง แฝด (Alone, 2007) เป็นภาพยนตร์ไทยแนวสยองขวัญระดับขึ้นหิ้งที่ออกฉายในปี พ.ศ. 2550 ผลงานชิ้นเอกจากการสร้างของ จีทีเอช (GTH) ร่วมผลิตโดยบริษัท ฟีโนมีนา และ เดคดิเคท ภายใต้การกำกับของสองผู้กำกับแถวหน้า โต้ง - บรรจง ปิสัญธนะกูล และ โอ๋ - ภาคภูมิ วงศ์ภูมิ
ภาพยนตร์เรื่องนี้ไม่เพียงแต่เป็นหมุดหมายสำคัญของภาพยนตร์สยองขวัญไทย แต่ยังเป็นกรณีศึกษาที่น่าสนใจในเชิง มานุษยวิทยาของความกลัว โดยวิดีโอจากช่อง สัมภเวศิลป์ ได้ถอดรหัสภาพยนตร์เรื่องนี้ผ่านมุมมองที่ลึกซึ้งยิ่งกว่าเรื่องผีสางทั่วไป โดยชี้ให้เห็นว่าความสยองขวัญที่แท้จริงนั้นอุบัติขึ้นจาก สภาวะที่ไม่อาจแยกจากกันได้ (Inseparability) ทั้งในมิติของกายภาพ จิตวิญญาณ และพันธนาการแห่งการกระทำ
เรื่องราวได้นำเสนอชีวิตของ พิม และ พลอย ฝาแฝดที่มีตัวติดกัน (Conjoined Twins) นำไปสู่โศกนาฏกรรมสยองขวัญที่เกิดขึ้นเมื่อฝ่ายหนึ่งต้องจบชีวิตลง ทว่าความผูกพันกลับไม่ได้มรณกรรมตามไปด้วย ศาสตร์และศิลป์ที่ถูกนำมาใช้ในภาพยนตร์เรื่องนี้มีความโดดเด่นและควรค่าแก่การวิเคราะห์`,
  },
  {
    lesson_id: 11,
    module_id: 2,
    lesson_name: `ทฤษฎีความสมมาตรที่ถูกทำลาย `,
    content: `## **ทฤษฎีความสมมาตรที่ถูกทำลาย (Broken Symmetry)**

โดยปกติความสมมาตร (Symmetry) ในงานศิลปะมักสื่อถึงความสมดุลและความสวยงาม แต่ในเรื่อง แฝด ผู้กำกับใช้ความสมมาตรเพื่อสร้าง ความอึดอัด

1. ทฤษฎีความสมดุลเชิงภาพ (Visual Balance Theory)
    ในทางศิลปะ ความสมดุลแบบสมมาตร (Symmetrical Balance) สื่อถึงความสงบนิ่งและความสมบูรณ์ แต่ในภาพยนตร์เรื่อง แฝด ผู้กำกับใช้ทฤษฎีนี้ในทางตรงกันข้าม:
    ภาวะ Mirror Image ที่ผิดเพี้ยน: ตามทฤษฎีของ Rudolf Arnheim (นักจิตวิทยาศิลปะ) มนุษย์จะรู้สึกสบายใจเมื่อเห็นภาพที่มีน้ำหนักซ้ายขวาเท่ากัน แต่ในเรื่อง แฝด เมื่อตัวละครตัวหนึ่งหายไป แต่ องค์ประกอบภาพ (Composition) ยังถูกจัดวางให้เหมือนมีคนสองคน เช่น การเว้นที่ว่างข้างตัวพิม
    ความขัดแย้งทางจักษุสัมผัส: มันสร้างสิ่งที่เรียกว่า Visual Tension หรือความตึงเครียดทางสายตา เพราะสมองของผู้ชมพยายามจะมองหา สิ่งที่ควรจะอยู่ตรงนั้น แต่กลับไม่พบ ทำให้เกิดสภาวะกระสับกระส่าย (Anxiety) ตลอดการรับชม
2. **ทฤษฎีพื้นที่ลบ (Negative Space Theory)**
    **พื้นที่ว่างในเฟรมภาพไม่ใช่ความว่างเปล่า แต่เป็น พื้นที่ที่มีความหมาย**
    * **The Weight of Absence: ในเชิงวิชาการภาพยนตร์ พื้นที่ว่างที่จงใจเว้นไว้ข้างตัวพิมเรียกว่า Active Negative Space คือพื้นที่ที่ทำหน้าที่กดดันตัวละครหลัก พื้นที่นี้ไม่ได้ว่างเปล่า แต่มันเต็มไปด้วย ความทรงจำของพลอย**
    * **การอ้างอิงถึงสัมภเวศิล: สอดคล้องกับที่ช่องสัมภเวศิลวิเคราะห์ไว้ว่า พลอยไม่ยอมจากไปไหน พื้นที่ว่างข้างตัวพิมในเฟรมภาพจึงทำหน้าที่เป็น พยานวัตถุทางสายตา ที่บอกคนดูว่า พลอยยังคงจับจองพื้นที่นั้นอยู่เสมอ แม้จะมองไม่เห็นด้วยตาก็ตาม**

<br>
3. **ทฤษฎีความแปลกแยก (The Uncanny Valley & Doubling)**
    **Ernst Jentsch และ Sigmund Freud เคยอธิบายเรื่อง The Uncanny (ความน่าขนลุก) ว่ามักเกิดจากสิ่งที่ เหมือนคนแต่ไม่ใช่คน หรือ สิ่งที่ควรจะตายไปแล้วแต่กลับปรากฏขึ้นมาใหม่**
    * **The Double (Doppelgänger): ในเชิงศิลปะการสร้างภาพยนตร์ การใช้ แฝด คือการสร้างร่างจำลอง (Double) ที่ทำลายความเป็นหนึ่งเดียวของมนุษย์**
    * **Broken Symmetry ในเชิงอัตลักษณ์: เมื่อความสมมาตรทางกายภาพพังลง (แฝดคนหนึ่งตาย) แต่อีกคนยังพยายามรักษาความสมมาตรนั้นไว้ (พิมพยายามใช้ชีวิตแทนพลอย หรือพลอยพยายามทวงคืนพิม) มันคือการฉีกกระชากทฤษฎีเรื่องเอกภาพของตัวตน (Unity of Self) ทำให้ภาพที่ปรากฏบนจอมีความ แหว่งวิล ที่กระทบความรู้สึกของผู้ขมอย่างรุนแรง**

<br>
4.  **ทฤษฎีสถาปัตยกรรมของเฟรม (Architectural Framing)**
    **การใช้ประตู หน้าต่าง หรือทางเดิน (Liminal Spaces) มาแบ่งครึ่งเฟรมภาพ**
    **Split Composition: ผู้กำกับมักใช้เส้นตรงกลางเฟรม (เช่น ขอบประตู หรือเสา) เพื่อแบ่งแยกพิมออกจากโลกภายนอก หรือแบ่งแยกพิมออกจาก อดีต**`,
  },
  {
    lesson_id: 12,
    module_id: 2,
    lesson_name: `ทฤษฎีสีและแสงเงา`,
    content: `# ทฤษฎีสีและแสงเงา (Chiaroscuro & Color Palette)

การใช้แสงและสีในเรื่องนี้ไม่ได้เน้นแค่ความมืด แต่เน้น ความหม่นที่ซ้อนทับ

### 1\\. ทฤษฎี Chiaroscuro และความขัดแย้งเชิงทวิลักษณ์ \\(Duality\\)

ในเชิงวิชาการด้านศิลปะ Chiaroscuro (ภาษาอิตาลีแปลว่า แสง-มืด) คือเทคนิคการใช้ความต่างของแสงอย่างรุนแรงเพื่อสร้างมิติและแรงอารมณ์
แสงเงาบนใบหน้า (Split Lighting): ผู้กำกับมักจัดแสงให้ตกกระทบใบหน้าของพิมเพียงครึ่งเดียว ทิ้งอีกครึ่งหนึ่งไว้ในความมืดสนิท เทคนิคนี้ในทางศิลปะสื่อถึง ความลับ และในทางจิตวิทยาคือ The Shadow ตามทฤษฎีของ Carl Jung \\* การซ้อนทับของตัวตน: เงาที่พาดผ่านใบหน้าพิมเปรียบเสมือนการปรากฏตัวของ พลอย ที่ไม่ได้มาเป็นรูปร่าง แต่มาในรูปแบบของ ความมืด ที่เกาะกินพื้นที่ส่วนหนึ่งของพิมเสมอ แสงและเงาจึงไม่ได้หน้าที่แค่บอกทิศทาง แต่ทำหน้าที่เป็น สัญลักษณ์ของแฝดสยามที่ยังไม่ถูกผ่าแยกจากกันในเชิงจิตวิญญาณ

### 2\\. ทฤษฎีสีเชิงจิตวิทยา: จาก Cool Tone สู่สภาวะ Interspace

การใช้ Color Palette ในโทนสีคราม (Indigo) เทา (Slate Grey) และเขียวหม่น ในเรื่อง แฝด สามารถอธิบายผ่านทฤษฎีสีได้ดังนี้:
De-saturation (การลดความสดของสี): หนังเลือกใช้สีที่ดูซีดเซียวเพื่อทำลายความรู้สึกของ ชีวิต (Vitality) สีครามและเทาช่วยสร้างสภาวะ Liminality หรือพื้นที่กึ่งกลางระหว่างโลกคนเป็นและคนตาย บ้านที่ควรจะเป็นพื้นที่ปลอดภัย (Domestic Space) จึงถูกเปลี่ยนสภาพเป็นพื้นที่เย็นเยียบคล้ายสุสาน (Cemetery Aesthetics)
Color Symbolism: สีน้ำเงินหม่นสื่อถึงความเศร้าโศก (Melancholy) และความโดดเดี่ยวที่ลึกซึ้ง แต่เมื่อรวมกับแสงเงาแบบ Low-key มันกลับสื่อถึง ความเย็นของศพ การที่พิมถูกล้อมรอบด้วยโทนสีนี้ตลอดเวลาสะท้อนว่าเธอไม่เคยหลุดพ้นจากบรรยากาศของห้องผ่าตัดหรือวินาทีที่สูญเสียแฝดไปได้เลย

### 3\\. ทฤษฎี Low\\-key Lighting กับความไม่มั่นคงทางอารมณ์

ในการสร้างภาพยนตร์ ทฤษฎี Low-key Lighting (การใช้ Key Light ต่ำและอัตราส่วน Contrast สูง) ถูกนำมาใช้เพื่อสร้างบรรยากาศแบบ Film Noir
ความพร่าเลือนของเส้นแบ่ง: แสงสว่างที่น้อยทำให้ขอบเขตของสิ่งของและตัวละครดูไม่ชัดเจน (Soft Edges in Darkness) ในเชิงวิชาการศิลปะ สิ่งนี้สื่อถึง ความเปราะบางของตัวตน เมื่อมองไปในความมืด เราแยกไม่ออกว่าส่วนไหนคือพิม ส่วนไหนคือเงาของพลอย หรือส่วนไหนคือเฟอร์นิเจอร์
Atmospheric Horror: สัมภเวศิลวิเคราะห์ว่าความน่ากลัวเกิดจากสิ่งที่ มองเห็นไม่ชัด แสงแบบ Low-key จึงเป็นเครื่องมือทางศิลปะที่บีบคั้นให้คนดูต้อง เพ่ง และการเพ่งนี่เองที่เปิดโอกาสให้จินตนาการด้านลบทำงาน เป็นการใช้ศิลปะนำทางสัญชาตญาณความกลัวอย่างเป็นระบบ

### 4\\. ทฤษฎีการใช้สีที่ตัดกัน \\(Accent Color\\)

แม้ภาพรวมจะเป็นสีโทนเย็น แต่หนังมีการใช้ สีแดง (เลือด หรือสิ่งของบางอย่าง) แทรกเข้ามาเป็นจุดเด่น
Visual Shock: ตามทฤษฎี Color Contrast เมื่อสีแดง (Warm Tone/High Saturation) ปรากฏขึ้นท่ามกลางสีครามและเทา (Cool Tone) มันจะสร้างแรงปะทะทางสายตาที่รุนแรง สื่อถึง บาดแผล ที่ยังสดใหม่ และ แรงแค้น ที่ยังคุกรุ่นอยู่เสมอท่ามกลางความเย็นชาของอดีต`,
  },
  {
    lesson_id: 13,
    module_id: 2,
    lesson_name: ` ทฤษฎีมุมกล้องและการเคลื่อนที่`,
    content: `# ทฤษฎีมุมกล้องและการเคลื่อนที่ (Cinematic Point of View)
หนังสยองขวัญยุค 2000s ของไทยมักใช้มุมกล้องเพื่อสร้าง สายตาที่สาม (The Unseen Observer)
### 1. ทฤษฎี The Malevolent Gaze (การจ้องมองที่มุ่งร้าย)
ในทางภาพยนตร์ศึกษา การใช้มุมกล้องแบบ The Unseen Observer ไม่ได้เป็นเพียงการวางกล้องทิ้งไว้ แต่คือการใช้ทฤษฎี Voyeurism (ส่องปมจ้องมอง)
สายตาของ พลอย: ผู้กำกับมักใช้มุมกล้องระดับสายตา (Eye-level shot) ในตำแหน่งที่คนทั่วไปไม่ควรอยู่ เช่น มุมเพดาน หรือหลังบานประตู เพื่อสร้างสิ่งที่เรียกว่า Third-Person Point of View ที่มีความเป็นเจ้าของ (Possessive)
ความหมายเชิงวิชาการ: การจ้องมองนี้ทำหน้าที่เป็นสัญลักษณ์ของ อำนาจ ในอดีตแฝดต้องใช้สายตาร่วมกัน แต่ในปัจจุบัน พิมถูกลดทอนอำนาจลงให้กลายเป็น ผู้ถูกมอง (The Object of the Gaze) ส่วนพลอย (หรือความรู้สึกผิด) กลายเป็น ผู้มอง (The Subject) ซึ่งสร้างความกดดันเชิงจิตวิทยาว่าเธอไม่เคยมีพื้นที่ส่วนตัวอย่างแท้จริง
### 2. ทฤษฎี Claustrophobic Composition กับการเคลื่อนที่แบบ Tracking Shot
การใช้กล้องตามติดตัวละคร (Tracking Shot) ในพื้นที่จำกัด (Confined Space) เช่น โถงทางเดิน หรือห้องนอนเก่า มีนัยสำคัญทางศิลปะดังนี้:
การจำลองสภาวะแฝดสยาม (Physical Constraint): การใช้เลนส์ที่มีทางยาวโฟกัสค่อนข้างแคบ (Telephoto Lens) ในพื้นที่แคบ จะช่วยบีบอัดระยะห่างระหว่างตัวละครกับฉากหลังให้ดูอึดอัดขึ้น เทคนิคนี้คือการสื่อสารทางทัศนศิลป์ว่า โลกของพิมหดแคบลงเท่ากับตอนที่เธอมีชีวิตติดกับพลอย
Long Takes และความต่อเนื่องของความกลัว: การไม่ตัดภาพ (Cut) แต่ใช้การเคลื่อนกล้องตามแผ่นหลังของพิมไปเรื่อย ๆ ในเชิงวิชาการ นี่คือการสร้างสภาวะ Temporal Continuity ที่บังคับให้คนดูต้องเผชิญกับความอึดอัดไปพร้อมกับตัวละครโดยไม่มีจังหวะให้พักหายใจ
### 3. ทฤษฎี Ambiguous POV (มุมมองที่คลุมเครือ)
การสลับระหว่างมุมมองบุคคลที่ 1 (First-person POV) และบุคคลที่ 3 ในเชิงศิลปะเรียกว่าภาวะ Unreliable Narrator (ผู้เล่าเรื่องที่ไม่น่าไว้วางใจ)
Subjective vs. Objective: เมื่อกล้องแทนสายตาของพิม (Subjective) เราเห็นสิ่งที่เธอเห็น แต่เมื่อกล้องถอยออกมาเป็นมุมกว้าง (Objective) แล้วเราเห็นความว่างเปล่าข้างตัวเธอ ความขัดแย้งนี้สร้างทฤษฎี Cognitive Dissonance (ความย้อนแย้งทางพุทธิปัญญา) ให้กับผู้ชม
สุนทรียศาสตร์ของความหลอน (Aesthetics of Haunting): ตามที่สัมภเวศิลวิเคราะห์ว่าผีคือภาพสะท้อนของความรู้สึกผิด การเคลื่อนกล้องที่สลับไปมานี้จึงเป็นการตั้งคำถามเชิงปรัชญาว่า สิ่งที่น่ากลัวกว่า คือผีที่อยู่ข้างนอก หรือผีที่อยู่ในหัว? กล้องจึงทำหน้าที่เป็นเครื่องมือแยกส่วนระหว่าง ความจริงทางกายภาพ และ ความจริงทางจิต
### 4. ทฤษฎี Framing and Entrapment (การกักขังในเฟรม)
ในเชิงวิชาการด้านศิลปะภาพยนตร์ การใช้สิ่งของในฉาก (Internal Framing) เช่น ราวบันได ขอบประตู หรือเสา มาบดบังบางส่วนของเฟรมภาพ เรียกว่าเทคนิค Masking
การกักขังทางสายตา: การถ่ายภาพพิมผ่านซี่กรงบันไดหรือช่องประตูเล็ก ๆ สื่อถึงการที่ตัวละครถูกกักขังอยู่ในกรงที่มองไม่เห็น (Invisible Cage) ของอดีต
The Ghostly Presence: การจัดองค์ประกอบให้เห็น ส่วนเกิน ของเงาหรือขอบเสื้อที่มุมเฟรม คือการใช้ศิลปะเพื่อบอกว่ามี สิ่งแปลกปลอม (Abject presence) เข้ามาแชร์พื้นที่ในเฟรมภาพเสมอ ซึ่งเป็นการทำลายความเป็นส่วนตัวของพิมในเชิงพื้นที่ภาพอย่างรุนแรง`,
  },
  {
    lesson_id: 14,
    module_id: 2,
    lesson_name: `สัญลักษณ์ทางศิลปะ`,
    content: `# ภาษาสัญลักษณ์ทางศิลปะ (Visual Metaphor)
โดยเน้นไปที่แนวคิด สายใยที่ไม่ยอมขาด จากมุมมองของสัมภเวศิลป์ จะช่วยให้เราเห็นว่าภาพยนตร์ใช้ สัญญะ (Signs) เพื่อสื่อสารสภาวะทางจิตที่ไร้เสียง แต่ทรงพลังในเชิงวิชาการศิลปะ
### 1. ทฤษฎีสัญวิทยาของเสื้อผ้า (Semiotics of Costume)
ในทางศิลปะการออกแบบเครื่องแต่งกาย เสื้อผ้าไม่ใช่แค่สิ่งปกปิดร่างกาย แต่เป็น ผิวหนังชั้นที่สอง ที่บอกเล่าความสัมพันธ์
สัญลักษณ์ของการเป็นส่วนขยาย (Extension of Self): แม้ในฉากที่พิมอยู่คนเดียวในปัจจุบัน เสื้อผ้าที่เธอสวมใส่มักมีโทนสีหรือลวดลายที่ ล้อ (Echo) กับเสื้อผ้าของพลอยในอดีต ในเชิงวิชาการนี่คือการใช้ Visual Rhyme เพื่อบอกว่าพิมยังคงสวมบทบาทของ แฝด อยู่เสมอ เธอไม่เคยได้สวมชุดที่สะท้อนตัวตนเดี่ยวของเธออย่างแท้จริง
ลวดลายและพันธนาการ: การใช้เสื้อผ้าลายทาง (Stripes) หรือลายตาราง ในบางฉากทำหน้าที่เป็นอุปลักษณ์ของ กรงขัง สายใยที่สัมภเวศิลกล่าวถึงจึงถูกถ่ายทอดผ่านเส้นสายบนผืนผ้าที่พันธนาการตัวละครไว้กับความทรงจำที่ขีดฆ่าไม่ตาย
### 2. ทฤษฎีวัตถุพยานและการคงอยู่ (Object Ontology)
สัมภเวศิลเน้นย้ำเรื่อง สิ่งที่ทิ้งไว้เบื้องหลัง ซึ่งในเชิงศิลปะคือการใช้ Prop (อุปกรณ์ประกอบฉาก) เป็นตัวแทนของจิตวิญญาณ
เปียโน: สัญลักษณ์ของความพยายามที่ผิดพลาด: เปียโนเป็นเครื่องดนตรีที่ต้องอาศัยการประสานงานของมือสองข้าง เมื่อพิมเล่นเปียโนคนเดียว ภาพที่ปรากฏคือความไม่สมบูรณ์ (Asymmetry) เสียงที่ขาดหายไปคือ สายใย ที่พยายามจะดึงพลอยกลับมา ในทางทฤษฎีศิลปะ นี่คือการใช้ Metonymy (การใช้ส่วนหนึ่งแทนทั้งหมด) โดยใช้เสียงเพลงแทนการมีอยู่ของแฝดอีกคน
ภาพถ่าย: คุกแห่งกาลเวลา: ภาพถ่ายคู่ที่วางอยู่รอบบ้านทำหน้าที่เป็น Aesthetic Haunting (การตามหลอกหลอนทางสุนทรียภาพ) มันคือการยืนยันว่าอดีตยังไม่จบลง ในเชิงวิชาการ ภาพถ่ายเหล่านี้คือ Indexical Signs หรือเครื่องหมายที่ชี้ไปหาบุคคลที่ไม่อยู่แล้ว แต่แรงกดดันจากสายตาในภาพกลับทำให้พื้นที่นั้น หนาแน่น จนพิมไม่มีที่ว่างให้หายใจ
### 3. ทฤษฎีรอยแยกและรอยเย็บ (The Aesthetics of the Scar)
สายใยที่ไม่ยอมขาด ถูกทำให้เป็นรูปธรรมที่สุดผ่าน รอยแผลเป็น
แผลเป็นในฐานะงานศิลปะเชิงมานุษยวิทยา: ในทางศิลปะ รอยแผลเป็นบนตัวพิมคือ Visual Metaphor ของความล้มเหลวในการแยกจาก มันคือจุดบรรจบระหว่างเนื้อหนังและประวัติศาสตร์ รอยเย็บ (Stitches) คือสายใยทางกายภาพที่ถูกทำลายไปแล้ว แต่ทิ้งรอยประทับ (Trace) ไว้ในใจ
การเชื่อมต่อที่มองไม่เห็น: สัมภเวศิลวิเคราะห์ว่าพลอยไม่เคยจากไป รอยแผลนี้จึงทำหน้าที่เป็น พอร์ตัล (Portal) หรือประตูมิติทางศิลปะที่เชื่อมโลกคนเป็นและคนตายเข้าด้วยกัน ทุกครั้งที่กล้องซูมไปที่แผล มันคือการย้ำเตือนว่าสายใยนี้ไม่ได้ขาดสะบั้น แต่มันแค่ เปลี่ยนรูป จากเนื้อเยื่อไปเป็นความเจ็บปวด
### 4. ทฤษฎีสีและสายใยที่เยือกเย็น (Cold Color Symbolism)
สายใยในเรื่องนี้ไม่ได้ถูกฉายผ่านสีแดงของความรัก แต่เป็นสีครามและเทา
Umbilical Cord of Melancholy: สีน้ำเงินหม่นที่ปรากฏทั่วทั้งเรื่องเปรียบเสมือน สายสะดือแห่งความโศกเศร้า ที่เชื่อมพิมไว้กับศพของพลอย ในเชิงวิชาการด้านสุนทรียศาสตร์ สีโทนเย็นเหล่านี้ทำหน้าที่ลดทอน ความร้อนแรงของชีวิต ให้เหลือเพียง ความเยือกเย็นของความตาย สายใยนี้จึงไม่ใช่สายใยที่อบอุ่น แต่เป็นสายใยที่แช่แข็งตัวละครไว้ในอดีต`,
  },
  {
    lesson_id: 15,
    module_id: 2,
    lesson_name: `ส่งท้ายก่อนถอดรหัส`,
    content: `จากการพิจารณาประเด็นทางศาสตร์และศิลป์ข้างต้น เราจะเห็นได้ว่า แฝด มิได้เป็นเพียงภาพยนตร์สยองขวัญที่มุ่งเน้นความตื่นเต้นจากการปรากฏตัวของวิญญาณ แต่เป็นงานทัศนศิลป์ที่วิพากษ์ภาวะความเป็นมนุษย์ผ่านแง่มุมของ ตัวตนที่แตกสลาย และ พันธนาการที่มองไม่เห็น ศาสตร์และศิลป์ที่นำมาใช้ทั้งหมด ไม่ว่าจะเป็นการทำลายความสมมาตรในเฟรมภาพ การใช้แสงเงาแบบ Chiaroscuro ที่สร้างเงาซ้อนทับบนใบหน้า หรือการใช้สัญญะของไพ่ Q โพธิ์ดำ ต่างทำหน้าที่ร่วมกันเพื่อส่งสารสำคัญเพียงประการเดียวคือ:
> ความพยายามในการช่วงชิงอัตลักษณ์เพื่อดำรงอยู่เป็นปัจเจกเดียวนั้นมีราคาที่ต้องจ่าย และเมื่ออดีต (ในรูปของสายใยที่ไม่ยอมขาด) ย้อนกลับมาทวงคืนพื้นที่ของมัน ตัวตนที่ถูกสร้างขึ้นใหม่บนความผิดบาปย่อมพังทลายลงอย่างไม่อาจหลีกเลี่ยงได้

บทวิเคราะห์ศาสตร์และศิลป์ที่ปรากฏในบทความนี้ เป็นการถอดรหัสและตีความผ่านมุมมองทางทัศนศิลป์และจิตวิเคราะห์ โดยอาศัยทฤษฎีทางสุนทรียศาสตร์มาเป็นแกนกลาง ทั้งนี้ ข้อสรุปทั้งหมดถือเป็นทัศนะและการวิเคราะห์เชิงวิพากษ์ส่วนบุคคล ซึ่งมุ่งเน้นไปที่การแสวงหาความหมายแฝงที่ซ่อนอยู่ในองค์ประกอบศิลป์และสัญลักษณ์นิยมของภาพยนตร์เท่านั้น
การศึกษาในครั้งนี้จึงไม่ได้มีวัตถุประสงค์เพื่อจำกัดกรอบความคิด แต่เพื่อเป็นแนวทางเบื้องต้นในการชี้ให้เห็นว่า ภาษาภาพยนตร์ สามารถทำงานร่วมกับความซับซ้อนของจิตใจมนุษย์ได้อย่างไร และเพื่อกระตุ้นให้ผู้อ่านได้เกิดการตั้งคำถามต่อธรรมชาติของความสัมพันธ์และการยอมรับในตัวตนของตนเองและผู้อื่นต่อไป`,
  },
  {
    lesson_id: 16,
    module_id: 3,
    lesson_name: `ก่อนจะถอดรหัส`,
    content: `ภาพยนตร์เรื่อง **บอดี้..ศพ #19 (Body #19)** เป็นภาพยนตร์ไทยแนวสยองขวัญสั่นประสาท (Psychological Thriller) ระดับขึ้นหิ้งที่ออกฉายในปี พ.ศ. 2550 ผลงานชิ้นเอกจากการสร้างของ จีทีเอช (GTH) ภายใต้การกำกับของ ปวีณ ภูริจิตปัญญา ผู้ที่นำพาภาพยนตร์ไทยก้าวข้ามขีดจำกัดของการเล่าเรื่องแบบเดิมไปสู่ความซับซ้อนเชิงจิตวิทยา
ภาพยนตร์เรื่องนี้ไม่เพียงแต่เป็นหมุดหมายสำคัญของการใช้เทคนิคพิเศษด้านภาพ (Visual Effects) แต่ยังเป็นกรณีศึกษาที่น่าสนใจในเชิง สถาปัตยกรรมแห่งจิตและมายาคติของตัวตน โดยวิดีโอจากช่อง สัมภเวศิล ได้ถอดรหัสภาพยนตร์เรื่องนี้ผ่านมุมมองที่ลึกซึ้งยิ่งกว่าความสยองขวัญทั่วไป โดยชี้ให้เห็นว่าความน่ากลัวที่แท้จริงนั้นมิได้สถิตอยู่ในวิญญาณที่ตามหลอกหลอน หากแต่อุบัติขึ้นจาก สภาวะการปฏิเสธความจริง (Denial) และการพยายามลบเลือนร่องรอยแห่งกรรมที่ถูกชำแหละออกเป็นชิ้นส่วนในส่วนลึกของจิตใต้สำนึก
เรื่องราวได้นำเสนอการเดินทางอันพร่าเลือนของ ชล ชายหนุ่มที่ถูกภาพนิมิตการฆาตกรรมหญิงสาวนามว่า ดาราราย ตามหลอกหลอน นำไปสู่การสืบเสาะค้นหาความจริงที่ถูกซ่อนไว้ภายใต้กลไกการป้องกันตนเองทางจิต (Defense Mechanism) ทว่าความทรงจำที่ถูกทำลายกลับไม่เคยเลือนหายไปอย่างแท้จริง ศาสตร์และศิลป์ที่ถูกนำมาใช้ในภาพยนตร์เรื่องนี้มีความโดดเด่นและควรค่าแก่การวิเคราะห์`,
  },
  {
    lesson_id: 17,
    module_id: 3,
    lesson_name: `ศาสตร์แห่งสัญลักษณ์นิยม`,
    content: `# ศาสตร์แห่งสัญลักษณ์นิยม
ในบทวิเคราะห์ของสัมภเวศิลป์ ดาราราย คือร่างจำลองของ ความจริงที่ถูกปฏิเสธ (The Return of the Repressed) ตามหลักทฤษฎีของ Sigmund Freud ที่อธิบายว่าสิ่งที่มนุษย์พยายามกดทับไว้ในจิตใต้สำนึกจะหาทางกลับมาปรากฏตัวเสมอในรูปแบบที่บิดเบี้ยว
##### **ชิ้นส่วนศพ (Fragmented Body): สถาปัตยกรรมของจิตที่แตกสลาย**
ในทางทัศนศิลป์และการศึกษาสุนทรียศาสตร์เรื่องความสยองขวัญ ร่างกายที่ถูกแยกส่วน (Le Corps Morcelé) ตามแนวคิดของ Jacques Lacan สะท้อนถึงสภาวะที่มนุษย์สูญเสียความเป็นเอกภาพของตัวตน (Identity)
* จิ๊กซอว์แห่งความผิดบาป: การที่ภาพยนตร์นำเสนอภาพชิ้นส่วนศพที่กระจัดกระจาย คือการใช้อุปลักษณ์ทางภาพเพื่อแทนสภาวะจิตใจของตัวละครหลักที่แตกสลาย (Fragmented Mind) จากภาวะทางจิต
* นัยเชิงวิชาการ: การตามหาชิ้นส่วนของดารารายจึงไม่ใช่การสืบสวนคดีทางกายภาพ แต่เป็นการที่จิตใต้สำนึกพยายาม กอบกู้ (Reconstruct) เศษเสี้ยวของความทรงจำที่ถูกทำลายทิ้งไปให้กลับมาเป็นเอกภาพ ภาวะนี้ในทางศิลปะคือการเปลี่ยน ความว่างเปล่า (Void) ให้กลายเป็น รูปธรรม (Object) เพื่อให้ความผิดบาปได้รับการสะสาง
##### สัญญะของ เข็มเย็บผ้า: Visual Metaphor แห่งการปะติดปะต่อที่เจ็บปวด
เข็มและด้ายเป็นอุปกรณ์ที่มีนัยสำคัญยิ่งในเชิงสัญลักษณ์วิทยา (Semiology) สื่อถึงการเชื่อมโยง (Connection) และการกักขัง (Entrapment)
* การเย็บเพื่อคงสภาพความจริง: ในเชิงวิชาการ เข็ม คือเครื่องมือที่ใช้เชื่อมความแตกต่างสองสิ่งเข้าด้วยกัน ในภาพยนตร์เรื่องนี้ สื่อถึงความพยายามของจิตที่ต้องการ เย็บ โลกแห่งภาพหลอนและโลกแห่งความจริงให้กลายเป็นเนื้อเดียวกัน ทว่าทุกครั้งที่เข็มแทงลงไป มันกลับสร้างรอยแผล (Trauma) ใหม่ขึ้นมาเสมอ
* ทฤษฎีความสยองขวัญทางสัมผัส (Haptic Horror): ภาพการเย็บชิ้นส่วนศพเข้าด้วยกันไม่ได้สร้างเพียงความสยดสยองทางสายตา แต่เป็นการกระตุ้นความรู้สึกเจ็บปวดทางกายสัมผัสในตัวผู้ชม สื่อถึง สายใยแห่งกรรม ที่ถูกพยายามเย็บติดไว้ไม่ให้หลุดหายไป การเย็บจึงเป็นทั้งการพยายามเยียวยาอัตลักษณ์และการทรมานผู้ที่กระทำความผิดไปพร้อมๆ กัน`,
  },
  {
    lesson_id: 18,
    module_id: 3,
    lesson_name: ` ศาสตร์แห่งสถาปัตยกรรม`,
    content: `# ศาสตร์แห่งสถาปัตยกรรมทางจิต (Psychological Space)
ในเชิงวิชาการด้านภาพยนตร์ศึกษา (Film Studies) พื้นที่ในเรื่องนี้ถูกออกแบบมาเพื่อรองรับสภาวะทางจิตแบบ Interiorization คือการที่สภาพแวดล้อมภายนอกสะท้อนถึงกลไกภายในใจของตัวละคร โดยเฉพาะการ ขังตัวเอง ไว้ในความจำที่บิดเบี้ยว
##### **Labyrinthine Space:** เขาวงกตแห่งการลืมและการจำ
การใช้โถงทางเดินโรงพยาบาลที่ทอดยาวและซับซ้อน สอดคล้องกับทฤษฎี Deep Space Composition หรือการจัดองค์ประกอบภาพที่มีความลึกเป็นพิเศษ
* การจมดิ่งสู่จิตใต้สำนึก: ในทางศิลปะ เส้นนำสายตา (Leading Lines) ที่พุ่งสู่จุดรวมสายตา (Vanishing Point) ในความมืด สื่อถึงการจมลึกเข้าไปในจิตใต้สำนึกที่ไร้ก้นบึ้ง ยิ่งชลวิชชาเดินลึกเข้าไปในทางเดินเหล่านั้นมากเท่าไหร่ มันคือการจำลองภาวะ The Maze of the Mind ที่ตัวละครหลงทางอยู่ระหว่าง สิ่งที่เขาเห็น และ สิ่งที่เขาเป็น
* นัยเชิงมานุษยวิทยา: สัมภเวศิลชี้ให้เห็นว่าพื้นที่เหล่านี้คือ คุก ที่สร้างขึ้นจากความรู้สึกผิด ทางเดินที่วนกลับมาที่เดิมสื่อถึงความทรงจำที่เป็นวงจร (Cyclical Memory) ซึ่งฆาตกรไม่สามารถหนีพ้นผลกรรมที่วนเวียนอยู่ในใจได้
##### Clinical Aesthetics: สุนทรียศาสตร์แห่งความตายในพื้นที่สะอาด
การใช้พื้นผิววัสดุที่เน้นความมันวาว เช่น กระเบื้องสีขาวสะท้อนแสง สเตนเลส และกระจกเงา สร้างสภาวะทางอารมณ์ที่เรียกว่า Clinical Alienation (ความแปลกแยกในพื้นที่การแพทย์)
* การชำแหละตัวตน (Dissection of Identity): สีขาวและแสงไฟที่สว่างจ้าเกินจริง (High-key Lighting ในบางฉาก) ไม่ได้ให้ความรู้สึกปลอดภัย แต่กลับทำหน้าที่เป็น แสงในห้องผ่าตัด ที่พร้อมจะเปลื้องผ้าและชำแหละความลับของตัวละครออกมา
* ความเย็นชาและการสะท้อน: วัสดุที่เป็นโลหะและกระจกทำหน้าที่สะท้อนภาพซ้อน (The Double) ของตัวละครตลอดเวลา ในเชิงวิชาการศิลปะ สิ่งนี้สื่อถึงความไม่เป็นเอกภาพของตัวตน (Fragmented Self) พื้นที่แห่งการรักษา (Healing Space) จึงถูกบิดเบือนให้กลายเป็นพื้นที่แห่งการชำแหละ (Dissection Space) ที่ความจริงถูกแยกส่วนไม่ต่างจากศพของดาราราย
##### ศาสตร์แห่งพื้นที่ ก้ำกึ่ง (Liminal Space)
พื้นที่ในโรงพยาบาลและห้องแล็บในเรื่องนี้ทำหน้าที่เป็น Liminal Space หรือพื้นที่กึ่งกลางระหว่างโลกคนเป็นและโลกคนตาย
* การเปลี่ยนผ่านที่ไม่สิ้นสุด: บันไดวนและลิฟต์ที่เคลื่อนที่ไปสู่ชั้นที่ไม่มีอยู่จริง คือสัญลักษณ์ทางศิลปะของสภาวะจิตใจที่ค้างเติ่ง (Suspended Animation) ของชลวิชชา เขาไม่ได้อยู่ในโลกความจริง และไม่อาจยอมรับโลกแห่งกรรมได้ พื้นที่สถาปัตยกรรมในเรื่องจึงเป็นเหมือน ขุมนรกส่วนตัว ที่มีโครงสร้างเป็นโรงพยาบาลสมัยใหม่`,
  },
  {
    lesson_id: 19,
    module_id: 3,
    lesson_name: `ทฤษฎีการสร้างภาพยนตร์`,
    content: `# ทฤษฎีการสร้างภาพยนตร์: การลวงประสาทด้วยภาษาภาพ
ในเชิงภาพยนตร์ศาสตร์ (Film Studies) บอดี้..ศพ #19 คือตัวอย่างของการใช้ Visual Deception หรือการหลอกล่อด้วยภาพ โดยเปลี่ยนจากเพียงแค่การเล่าเรื่อง (Storytelling) มาเป็นการสร้างประสบการณ์ร่วมผ่านทฤษฎีสำคัญ:
##### ทฤษฎี Kuleshov Effect: การเย็บความหมายในหัวผู้ชม
ทฤษฎีนี้ว่าด้วยการที่ผู้ชมจะสร้าง ความหมายใหม่ จากการนำภาพสองภาพมาวางต่อกัน (Juxtaposition) แม้ภาพทั้งสองจะถ่ายทำคนละเวลาหรือสถานที่ก็ตาม
* การสร้างความจริงเสมือน: เมื่อผู้กำกับตัดสลับระหว่าง ใบหน้าที่ตื่นตระหนกของชล กับ ภาพเศษเนื้อหรือศพดาราราย ผู้ชมจะสรุปโดยอัตโนมัติว่าชลกำลังเห็นสิ่งนั้นอยู่ตรงหน้าจริงๆ ในเชิงวิชาการนี่คือการสร้าง Inferred Reality (ความจริงที่ถูกอนุมานขึ้น)
* นัยเชิงสัญลักษณ์: สัมภเวศิลป์วิเคราะห์ว่าการตัดต่อแบบนี้คือการ เย็บ (Stitch) ภาพหลอนเข้ากับโลกความจริงในสมองของชล เช่นเดียวกับสัญญะของเข็มเย็บผ้า การตัดต่อคือเครื่องมือทางเทคนิคที่ใช้ปะติดปะต่อความทรงจำที่ฆาตกรอยากแยกส่วนมันทิ้งไป
##### ทฤษฎี Dutch Angle: เมื่อความสมดุลของภาพคือความไม่มั่นคงของจิต
การใช้มุมกล้องเอียง (Canted Frame หรือ Dutch Angle) เป็นภาษาภาพสากลที่ใช้สื่อถึงภาวะ Psychological Instability
* การพังทลายของระนาบความจริง: ในโลกปกติ เส้นระดับสายตาต้องขนานกับพื้น แต่เมื่อกล้องเอียงไปมาในฉากที่ชลเริ่มเผชิญกับนิมิต มันคือการทำลายความรู้สึกมั่นคง (Equilibrium) ของผู้ชม
* การสะท้อนสภาวะ Vertigo: มุมกล้องนี้ไม่ได้แสดงเพียงความกลัว แต่แสดงถึงอาการ หลงทิศทาง ทางจิตวิญญาณ ในเชิงศิลปะมันคือการประกาศว่า โลกทัศน์เดิมของตัวละครพังทลายลงแล้ว และความจริงที่ผู้ชมเห็นอยู่นั้นเป็นเพียงเศษเสี้ยวที่บิดเบี้ยวจากความเป็นจริง
##### ทฤษฎี Montage of Attractions กับการจู่โจมประสาทสัมผัส
นอกเหนือจาก Kuleshov แล้ว ภาพยนตร์ยังใช้เทคนิคการตัดต่อแบบกระแทกกระทั้น (Rhythmic Montage)
* Visual Assault: การใช้ภาพนิมิตที่แทรกเข้ามาเพียงเสี้ยววินาที (Subliminal Shots) สื่อถึงการที่ความทรงจำส่วนที่ถูกกดทับ (Repressed Memory) พยายามจะพุ่งทะลุออกมาจากจิตใต้สำนึก เทคนิคนี้สร้างสภาวะ Shock Value ที่ไม่ได้มีไว้เพื่อความตกใจเพียงอย่างเดียว แต่มีไว้เพื่อสื่อสารว่าความจริงในใจของชลนั้นรุนแรงและไม่อาจจัดระเบียบได้`,
  },
  {
    lesson_id: 20,
    module_id: 3,
    lesson_name: `ศาสตร์แห่งดนตรีวิทยา`,
    content: `# ศาสตร์แห่งดนตรีวิทยา: เพลงคิดถึง ในฐานะสัญญะแห่งการจองจำ
ในเชิงมานุษยวิทยาดนตรีและการศึกษาภาพยนตร์ เสียงเพลงในเรื่องนี้ถูกใช้ในลักษณะ Diegetic Sound (เสียงที่มีที่มาในเนื้อเรื่อง) ที่พัฒนาไปสู่สภาวะหลอนประสาท โดยมีนัยสำคัญทางวิชาการดังนี้:
##### Leitmotif: แนวทำนองที่เป็นตัวแทนของเหยื่อ
ในทฤษฎีทางดนตรี Leitmotif คือแนวทำนองที่สั้นและจดจำง่าย ซึ่งถูกนำมาใช้ซ้ำเพื่อสื่อถึงตัวละครหรือแนวคิดเฉพาะ
*  พยานวัตถุทางเสียง (Auditory Evidence): สัมภเวศิลวิเคราะห์ว่า เพลงคิดถึง (ต้นฉบับโดยคุณจรรยา นาคเพชร) คือวิญญาณของดารารายที่อยู่ในรูปแบบของคลื่นเสียง เมื่อใดที่ทำนองนี้ดังขึ้น มันทำหน้าที่เป็น Involuntary Memory (ความทรงจำที่เกิดขึ้นเองโดยไม่ตั้งใจ) ซึ่งเข้าจู่โจมชลวิชชาโดยที่เขาไม่สามารถควบคุมได้ เพลงจึงเปลี่ยนสถานะจาก ศิลปะเพื่อความบันเทิง กลายเป็น เสียงตัดสินโทษ (Judgmental Sound) ที่คอยย้ำเตือนถึงบาปกรรมที่เขายังไม่ได้ชดใช้
* การพรรณนาถึงความโหยหาที่ผิดที่ผิดทาง: เนื้อเพลงที่กล่าวถึงการรอคอยและความคิดถึง เมื่อถูกวางลงในบริบทของการฆาตกรรมอำพราง ความหมายดั้งเดิมจึงถูกบิดเบือนไปสู่การโหยหาความยุติธรรม และการ รอคอย วันที่ชิ้นส่วนสุดท้ายจะถูกค้นพบ
##### Sonic Distortion: สุนทรียศาสตร์ของความสั่นพร่าและภาวะ Uncanny
เทคนิคการบิดเบือนเสียง (Sound Manipulation) ในภาพยนตร์เรื่องนี้สอดคล้องกับทฤษฎี Psychoacoustics (จิตฟิสิกส์ของการได้ยิน)
* รอยร้าวในกำแพงจิตใจ: เมื่อชลพยายามกดทับความจริง เสียงเพลงจะปรากฏขึ้นด้วยคุณภาพเสียงที่บิดเบี้ยว (Distortion) หรือเสียงแผ่นเสียงตกร่อง (Looping) ในทางดนตรีวิทยา ความผิดเพี้ยนนี้สื่อถึง Cognitive Dissonance หรือความย้อนแย้งในใจของฆาตกร ยิ่งความจริงใกล้ถูกเปิดเผย เสียงเพลงที่เคยไพเราะจะยิ่งถูกเร่งความเร็ว บิดโทนเสียง (Pitch Shifting) จนกลายเป็นเสียงที่สร้างความไม่สบายใจ
* สภาวะ Uncanny (ความหลอนที่คุ้นเคย): ทฤษฎีของ Sigmund Freud เรื่อง The Uncanny อธิบายถึงสิ่งที่เคยคุ้นเคยแต่ถูกทำให้ดูผิดแปลกไป เพลงคิดถึง ที่ดูอบอุ่นในอดีต เมื่อกลายเป็นเสียงแว่วที่ดังมาจากความมืดหรือห้องแล็บที่เย็นเฉียบ จึงสร้างความสยองขวัญในระดับจิตใต้สำนึกที่รุนแรงกว่าเสียงกรีดร้องทั่วไป`,
  },
  {
    lesson_id: 21,
    module_id: 3,
    lesson_name: `ส่งท้ายก่อนถอดรหัส`,
    content: `จากการพิจารณาประเด็นทางศาสตร์และศิลป์ผ่านเลนส์ของทฤษฎีภาพยนตร์และมุมมองของสัมภเวศิลป์ เราจะเห็นได้ว่า บอดี้..ศพ #19 มิได้เป็นเพียงภาพยนตร์ที่มุ่งเน้นการสืบสวนหาศพ แต่เป็นงานทัศนศิลป์ที่วิพากษ์ กลไกการป้องกันตนเองของมนุษย์ ที่สร้างโลกจำลองและท่วงทำนองลวงตาขึ้นมาเพื่อปกปิดความชั่วร้ายของตนเอง ศาสตร์การตัดต่อและมุมกล้องที่บิดเบี้ยวต่างทำหน้าที่ร่วมกันเพื่อส่งสารสำคัญเพียงประการเดียวคือ:
> ความจริงอาจถูกหั่นเป็นชิ้นและฝังไว้ในส่วนที่ลึกที่สุดของความทรงจำ แต่ 'ความรู้สึกผิด' (Guilt) คือพลังงานที่ไม่เคยสูญหาย มันจะคอยตามหาเจ้าของของมันผ่านท่วงทำนองและภาพนิมิต จนกว่าชิ้นส่วนสุดท้ายจะถูกวางลงในที่ที่มันควรอยู่
> 
บทวิเคราะห์ศาสตร์และศิลป์ที่ปรากฏในบทความนี้ เป็นการถอดรหัสและตีความผ่านมุมมองทางทัศนศิลป์ จิตวิทยาภาพยนตร์ และดนตรีวิทยา โดยอาศัยทฤษฎีทางสุนทรียศาสตร์มาเป็นแกนกลาง ทั้งนี้ ข้อสรุปทั้งหมดถือเป็นทัศนะและการวิเคราะห์เชิงวิพากษ์ส่วนบุคคล ซึ่งมุ่งเน้นไปที่การแสวงหาความหมายแฝงที่ซ่อนอยู่ในองค์ประกอบศิลป์ของภาพยนตร์เท่านั้น
การศึกษาในครั้งนี้จึงไม่ได้มีวัตถุประสงค์เพื่อจำกัดกรอบความคิด แต่เพื่อเป็นแนวทางเบื้องต้นในการชี้ให้เห็นว่า ภาษาภาพยนตร์ สามารถทำงานร่วมกับกิเลสตัณหาและความดำมืดของมนุษย์ได้อย่างไร และเพื่อกระตุ้นให้ผู้อ่านได้เกิดการตั้งคำถามต่อความถูกต้องของความทรงจำและตัวตนในสังคมปัจจุบันต่อไป`,
  },
  {
    lesson_id: 22,
    module_id: 3,
    lesson_name: `-`,
    content: ``,
  },
  {
    lesson_id: 23,
    module_id: 4,
    lesson_name: `ก่อนจะถอดรหัส`,
    content: `ภาพยนตร์เรื่อง มหาลัยสยองขวัญ (Haunted Universities) เป็นภาพยนตร์แนวสยองขวัญสั้น 4 เรื่อง (Anthology) ที่ออกฉายในปี พ.ศ. 2552 โดยหยิบยก ตำนานเมือง (Urban Legends) ที่เล่าขานกันในรั้วมหาวิทยาลัยไทยมาดัดแปลงเป็นภาษาภาพยนตร์
ภาพยนตร์เรื่องนี้ไม่เพียงแต่ตอบสนองความใคร่รู้ในเรื่องลี้ลับ แต่ยังเป็นกรณีศึกษาที่น่าสนใจในเชิง สถาปัตยกรรมแห่งความทรงจำร่วม โดยวิดีโอจากช่อง สัมภเวศิลป์ ได้ถอดรหัสภาพยนตร์เรื่องนี้ผ่านมุมมองที่ลึกซึ้งว่า ความสยองขวัญในมหาลัยคือสะท้อนของ ความกดดันและการเปลี่ยนผ่านของวัย ศาสตร์และศิลป์ที่ถูกนำมาใช้มีความโดดเด่นและควรค่าแก่การวิเคราะห์`,
  },
  {
    lesson_id: 24,
    module_id: 4,
    lesson_name: `ศาสตร์แห่งสัญลักษณ์นิยม`,
    content: `ศาสตร์แห่งสัญลักษณ์นิยม: ศพใต้เตียง และ ลิฟต์แดง ในฐานะตราบาป
ในบทวิเคราะห์ของสัมภเวศิลป์ วัตถุและสถานที่เหล่านี้มิได้เป็นเพียงองค์ประกอบเพื่อสร้างความตระหนก แต่คือ วัตถุพยานทางมานุษยวิทยา ที่ทำหน้าที่ฟ้องร้องเหตุการณ์ในอดีตที่ถูกทำให้ลืมผ่านสัญญะทางศิลปะดังนี้:
ศพใต้เตียง (The Hidden Truth): พื้นที่ศักดิ์สิทธิ์ที่ถูกละเมิด
ในทางทัศนศิลป์ เตียง (The Bed) คือสัญลักษณ์ของความเปราะบาง (Vulnerability) และเป็นพื้นที่ส่วนตัวที่ปลอดภัยที่สุดของมนุษย์
ทฤษฎี The Uncanny (Das Unheimliche): ตามแนวคิดของ Sigmund Freud ความสยองขวัญประเภทนี้เกิดจากการที่ สิ่งที่ควรจะปลอดภัยและคุ้นเคยที่สุด (Home/Bed) กลับกลายเป็นสิ่งที่น่าสะพรึงกลัว เมื่อมีศพอยู่ใต้เตียง มันคือการละเมิดพื้นที่ปลอดภัยทางจิตวิญญาณ เปลี่ยนที่พักผ่อนให้กลายเป็นสุสาน
การกดทับทางประวัติศาสตร์: ในเชิงสัญลักษณ์ ใต้เตียง คือพื้นที่มืดมิดที่ถูกใช้ซุกซ่อนสิ่งที่ไม่พึงประสงค์ (The Repressed) การที่ศพส่งกลิ่นหรือปรากฏตัวออกมา สื่อถึงภาวะที่ ความจริงไม่ยอมถูกจำกัดพื้นที่ และพร้อมจะกลับมาหลอกหลอนผู้ที่อาศัยอยู่บนโครงสร้างแห่งความตายนั้นเสมอ สะท้อนถึงความผิดบาปที่ถูกซุกไว้ใต้พรมของสถาบันที่รอวันปะทุ
ลิฟต์แดง (Blood Stained Memory): จิตรกรรมแห่งการอำพราง
สัญญะของลิฟต์แดงคือการปะทะกันระหว่าง ประวัติศาสตร์ที่ถูกชำระ (Official History) กับ ภาพจำที่ฝังราก (Collective Memory) ของสามัญชน
ทฤษฎี Colour Symbolism (สัญลักษณ์นิยมของสี): การเลือกใช้สีแดงสดบนพื้นผิวโลหะที่เย็นชา สร้างความขัดแย้งเชิงสุนทรียภาพ (Aesthetic Conflict) สีแดงในบริบทนี้ไม่ใช่สีแห่งความโชคดี แต่เป็น สีแห่งอาชญากรรม ในทางวิชาการศิลปะ การที่สถาบันเลือกใช้สีแดงทาทับรอยเลือด คือกลวิธี Whitewashing (การฟอกขาวทางประวัติศาสตร์) เพื่อเปลี่ยนรอยแผลเป็นให้กลายเป็นงานดีไซน์อำพรางตา
สถาปัตยกรรมแห่งการเคลื่อนที่ (Kinetic Architecture): ลิฟต์คือกล่องโลหะที่เคลื่อนที่ในแนวดิ่ง ในเชิงภาพยนตร์ ลิฟต์ทำหน้าที่เป็น พื้นที่ปิดตายที่ขยับได้ (Mobile Claustrophobia) การติดอยู่ในลิฟต์แดงจึงเปรียบเสมือนการถูกกักขังอยู่ในประวัติศาสตร์ที่กำลังหมุนวนและบีบอัดตัวละครให้เผชิญหน้ากับบาปกรรมที่ตนไม่ได้ก่อ เป็นการตอกย้ำว่าต่อให้ลิฟต์จะเคลื่อนที่ไปชั้นไหน อดีตที่นองเลือดก็ยังคงดำรงอยู่ข้างในนั้นไม่เปลี่ยนแปลง
`,
  },
  {
    lesson_id: 25,
    module_id: 4,
    lesson_name: `สถาปัตยกรรมกึ่งกลาง`,
    content: ` ศาสตร์แห่งสถาปัตยกรรมกึ่งกลาง (Liminal Space in Campus)
ในทางมานุษยวิทยาและสถาปัตยกรรมศาสตร์ มหาวิทยาลัยในภาพยนตร์ถูกนำเสนอผ่านสภาวะ Liminality หรือ สภาวะรอยต่อ ซึ่งเป็นพื้นที่ที่อยู่กึ่งกลางระหว่างจุดเริ่มต้นและจุดสิ้นสุด ส่งผลให้เกิดความรู้สึกไม่มั่นคงทางอารมณ์
โถงทางเดินและห้องน้ำหลังเที่ยงคืน: รอยต่อแห่งการเปลี่ยนผ่านอัตลักษณ์
ในเชิงสถาปัตยกรรมทางจิต (Psycho-architecture) พื้นที่เหล่านี้คือตัวแทนของช่วงวัยที่กำลังเปลี่ยนผ่านจาก โลกวัยเรียน ไปสู่ โลกของผู้ใหญ่
The Long Corridor (ทางเดินที่ไร้จุดจบ): การใช้โถงทางเดินที่ทอดยาวในภาพยนตร์สื่อถึงความโดดเดี่ยวของปัจเจกชน (Individual Isolation) ภายใต้โครงสร้างทางสถาบันที่มหึมา ในเชิงภาพยนตร์ เส้นนำสายตาที่พุ่งไปสู่ความมืดกระตุ้นภาวะ Spatial Anxiety หรือความวิตกกังวลต่อพื้นที่ที่ระบุจุดสิ้นสุดไม่ได้ สื่อว่านักศึกษาต้องเผชิญหน้ากับกฎระเบียบและตำนานที่มองไม่เห็นเพียงลำพัง
พื้นที่กึ่งสาธารณะ (Pseudo-public Space): ห้องน้ำหรือโถงทางเดินในยามค่ำคืนเปลี่ยนสถานะจากพื้นที่ที่คนพลุกพล่านกลายเป็นพื้นที่ร้างเปล่า ความขัดแย้งนี้สร้างสภาวะ Eerie คือการรับรู้ถึงการมีอยู่ของ บางสิ่ง ในที่ที่ ไม่มีใคร ซึ่งเป็นแกนกลางของความสยองขวัญในรั้วมหาวิทยาลัย
อาคารเรียนเก่า: สุนทรียศาสตร์แห่งความเสื่อมโทรม (Aesthetics of Decay)
การเลือกใช้สถานที่ที่มีพื้นผิวปูนเปลือย คราบตะไคร่น้ำ และไม้ที่ผุพัง ไม่ได้มีไว้เพื่อความขลังเพียงอย่างเดียว แต่มีนัยสำคัญเชิงวิพากษ์สถาบัน
การผุกร่อนของอำนาจ: ในทางทัศนศิลป์ ความเสื่อมโทรมของอาคาร (Decay) สื่อถึงการล่มสลายของระบบอาวุธโสและความศักดิ์สิทธิ์ที่ล้าสมัย อาคารเรียนเก่าในเรื่องจึงเป็นสัญลักษณ์ของ อดีตที่ปฏิเสธการปรับตัว จนกลายเป็นความสยองขวัญที่คอยกัดกินคนรุ่นใหม่
ทฤษฎี Hauntology ของสถาปัตยกรรม: อาคารเหล่านี้ทำหน้าที่เป็น ที่บรรจุความทรงจำ (Vessel of Memory) การที่วัสดุมีความเก่าแก่สื่อว่าความรุนแรงหรือเหตุการณ์ในตำนานเมืองได้ถูก ฝัง (Embedded) ลงไปในเนื้อวัสดุ ทำให้คนรุ่นหลังที่ก้าวเข้ามาในพื้นที่นี้ต้องแบกรับมรดกแห่งความกลัวอย่างเลี่ยงไม่ได้`,
  },
  {
    lesson_id: 26,
    module_id: 4,
    lesson_name: `มายาคติของ เรื่องเล่าต่อ`,
    content: ` ทฤษฎีการสร้างภาพยนตร์: มายาคติของ เรื่องเล่าต่อ (Oral Tradition to Visual)
ในเชิงภาพยนตร์ศึกษา (Film Studies) ผู้กำกับทำหน้าที่เป็นผู้เปลี่ยนสถานะของเรื่องเล่าจาก มุขปาฐะ (สิ่งที่ได้ยินมา) ให้กลายเป็น สัจนิยมสยองขวัญ (สิ่งที่เห็นตรงหน้า) ผ่านกลวิธีทางเทคนิค
The Unseen Narrator: มุมกล้องที่เป็นพยานและผู้สังเกตการณ์
การใช้มุมกล้องเดินตามตัวละคร (Tracking Shot) ในระดับสายตา โดยเฉพาะในมุมอับหรือการถ่ายผ่านซอกหลืบ (Voyeuristic Camera)
การเปลี่ยนผู้ชมให้กลายเป็นส่วนหนึ่งของข่าวลือ: ในทางทฤษฎีภาพยนตร์ มุมกล้องลักษณะนี้ทำให้ผู้ชมรู้สึกเหมือนเป็น ผู้แอบดู (Voyeur) ซึ่งสอดคล้องกับธรรมชาติของเรื่องผีมหาลัยที่มักเริ่มต้นจากคำว่า เขาเล่าว่า... การที่กล้องเคลื่อนที่ไปในมุมมืดตามตัวละคร สื่อว่าผู้ชมกำลังเผชิญหน้ากับความลี้ลับในฐานะพยานร่วมเหตุการณ์ ไม่ใช่แค่คนฟังเรื่องเล่าอีกต่อไป
ความตระหนกในพื้นที่จำกัด: การใช้ระยะภาพแบบ Close-up ในพื้นที่แคบ (เช่น ในลิฟต์ หรือใต้เตียง) บีบให้สายตาของผู้ชมไม่สามารถหนีไปที่อื่นได้ จำลองภาวะความอึดอัดทางจิตที่นักศึกษาได้รับเมื่อถูกล้อมกรอบด้วยกฎระเบียบและตำนานสยองขวัญ
Jump Cut และภาพติดตา: กลไกของความทรงจำที่ฝังใจ (Flashbulb Memory)
เทคนิคการตัดต่อที่รวดเร็วและกระชากอารมณ์ ถูกนำมาใช้เพื่อจำลองสภาวะทางจิตของคนที่ตกอยู่ในความกลัว
Flashbulb Memory ในเชิงสุนทรียภาพ: ทฤษฎีจิตวิทยาอธิบายว่ามนุษย์จะจดจำเหตุการณ์ที่สะเทือนขวัญได้ชัดเจนเหมือน แสงแฟลช ที่วาบขึ้นมา การใช้ Jump Cut ตัดภาพผีหรือความรุนแรงเพียงเสี้ยววินาที (Subliminal Editing) ทำให้ภาพนั้น ติดตา และหลอกหลอนผู้ชมแม้ฉากนั้นจะผ่านไปแล้ว เปรียบเสมือนเวลาเราฟังเรื่องผีแล้วจินตนาการถึงภาพที่น่ากลัวที่สุดขึ้นมาเองในใจ
การทำลายความต่อเนื่องของเวลา (Temporal Discontinuity): การตัดต่อที่จงใจให้สะดุดหรือข้ามจังหวะ สื่อถึงความบิดเบี้ยวของเวลาในตำนานเมือง ที่ซึ่งอดีต (วิญญาณ) และปัจจุบัน (นักศึกษา) มาบรรจบกันอย่างผิดจังหวะ สร้างความรู้สึกไม่น่าไว้วางใจให้กับพื้นที่ที่ตัวละครอาศัยอยู่`,
  },
  {
    lesson_id: 27,
    module_id: 4,
    lesson_name: `ศาสตร์แห่งโสตศิลป์`,
    content: `4. ศาสตร์แห่งโสตศิลป์: เสียงที่ไม่ได้มาจากคนเป็น (Ambient Horror)
ในมิติของดนตรีวิทยา (Musicology) และโสตศิลป์ภาพยนตร์ เสียงในภาพยนตร์เรื่องนี้ถูกออกแบบมาเพื่อสร้างภาวะ Acousmatic Sound หรือเสียงที่ผู้ฟังได้ยินแต่ไม่เห็นที่มา ซึ่งกระตุ้นให้เกิดความกลัวในเชิงสัญชาตญาณได้อย่างรุนแรง
เสียงฝีเท้าและเสียงลากของ: การทำลายสภาวะสมดุลทางโสตประสาท
เสียงประกอบที่ดูเป็นกิจวัตร (Everyday Sound) เมื่อถูกนำมาวางในพื้นที่และเวลาที่ผิดเพี้ยน จะกลายเป็นสัญลักษณ์ทางเสียง (Aural Symbolism) ที่ทรงพลัง
ภาวะ Cognitive Dissonance (ความย้อนแย้งในการรับรู้): ในทางวิชาการ เมื่อหูของเราได้ยินเสียง การเคลื่อนไหว (เช่น เสียงฝีเท้าเดินตามหลัง หรือเสียงลากเก้าอี้จากชั้นบน) ในขณะที่สายตายืนยันว่าพื้นที่นั้น ว่างเปล่า จะเกิดความขัดแย้งในการรับรู้ที่ทำให้สมองตื่นตัวถึงขีดสุด เสียงเหล่านี้ทำหน้าที่เป็น เข็มทิศความกลัว ที่ระบุตำแหน่งของสิ่งลี้ลับโดยไม่ต้องใช้ภาพ สื่อถึงการจองจำของวิญญาณที่ยังคงทำกิจกรรมเดิมๆ ซ้ำแล้วซ้ำเล่าในพื้นที่นั้น
Sound Foley และความสมจริงที่น่าเกลียดน่ากลัว: การเน้นเสียงที่มีความถี่ต่ำ (Low Frequency) หรือเสียงสะท้อน (Reverb) ในโถงทางเดินคอนกรีต ช่วยเน้นย้ำถึงความแข็งกระด้างและไร้ชีวิตของสถาปัตยกรรมมหาลัย
ความเงียบที่กดดัน: สุนทรียศาสตร์ของการตัดขาด (The Aesthetics of Isolation)
การใช้ความเงียบ (Silence) ในภาพยนตร์เรื่องนี้ไม่ได้หมายถึงการไม่มีเสียง แต่คือการ เลือกที่จะไม่ให้มีเสียง เพื่อสร้างความหมายเชิงภาวะวิสัย
การถูกตัดขาดจากสังคม (Social Isolation): มหาวิทยาลัยในช่วงกลางวันคือพื้นที่แห่งเสียงอึกทึกของคนหนุ่มสาว แต่เมื่อภาพยนตร์ตัดเข้าสู่ความเงียบสงัดในอาคารเรียนหลังเที่ยงคืน ความเงียบนั้นสื่อถึงการที่ตัวละครถูก ดีด ออกจากโครงสร้างสังคมปกติ กลายเป็นปัจเจกชนที่โดดเดี่ยวและเปราะบางที่สุด
Negative Space ของเสียง: ในเชิงศิลปะ ความเงียบคือพื้นที่ว่างที่อนุญาตให้จินตนาการของผู้ชมนิยามความน่ากลัวขึ้นมาเอง ความเงียบในเรื่องนี้จึงทำหน้าที่เป็น พายุที่สงบก่อนการปะทะ บีบคั้นให้ผู้ชมต้องเงี่ยหูฟังแม้เพียงเสียงลมหายใจ ซึ่งเป็นการดึงผู้ชมเข้าไปมีส่วนร่วมกับภาวะอกสั่นขวัญแขวนของตัวละครอย่างสมบูรณ์`,
  },
  {
    lesson_id: 28,
    module_id: 4,
    lesson_name: `ส่งท้ายก่อนถอดรหัส`,
    content: `จากการพิจารณาประเด็นทางศาสตร์และศิลป์ทั้ง 4 หัวข้อ ผ่านเลนส์ของทัศนศิลป์ ทฤษฎีภาพยนตร์ และมุมมองของสัมภเวศิล เราจะเห็นได้ว่า มหาลัยสยองขวัญ มิได้เป็นเพียงภาพยนตร์รวมเรื่องผีเพื่อความตื่นเต้น แต่เป็นงานศิลปะที่วิพากษ์ วัฒนธรรมการกล่อมเกลาด้วยความกลัว และการมีอยู่ของบาดแผลทางประวัติศาสตร์ในสถาบันการศึกษา ศาสตร์การสร้างภาพยนตร์และโสตศิลป์ที่แยบยลต่างทำงานร่วมกันเพื่อส่งสารสำคัญคือ:
> ตำนานสยองขวัญในรั้วมหาลัย คือจดหมายเหตุของความเจ็บปวดที่ถูกทำให้เงียบ เสียงผีและรอยเลือดคือร่องรอยของการที่อดีตไม่ยอมตาย และมันจะยังคงหลอกหลอนเพื่อทวงคืนพื้นที่ของความทรงจำ จนกว่าความจริงที่ถูกซุกไว้ใต้เตียงจะได้รับการรับรู้อย่างแท้จริง
> 
บทวิเคราะห์ศาสตร์และศิลป์ที่ปรากฏในบทเรียนนี้ เป็นการถอดรหัสและตีความผ่านมุมมองทางทัศนศิลป์โดยอาศัยทฤษฎีทางสุนทรียศาสตร์มาเป็นแกนกลาง ทั้งนี้ ข้อสรุปทั้งหมดถือเป็นทัศนะและการวิเคราะห์เชิงวิพากษ์ส่วนบุคคล ซึ่งมุ่งเน้นไปที่การแสวงหาความหมายแฝงที่ซ่อนอยู่ในองค์ประกอบศิลป์ของภาพยนตร์เท่านั้น เพื่อเป็นแนวทางเบื้องต้นในการชี้ให้เห็นว่า ภาษาภาพยนตร์ สามารถทำงานร่วมกับตำนานเมืองและกิเลสตัณหาของมนุษย์ได้อย่างไรต่อไป`,
  },
  {
    lesson_id: 29,
    module_id: 5,
    lesson_name: `ก่อนจะถอดรหัส`,
    content: `ภาพยนตร์เรื่อง นางนาก เวอร์ชัน พ.ศ. 2542 กำกับโดย นนทรีย์ นิมิบุตร ถือเป็นหลักหมุดหมายสำคัญของอุตสาหกรรมภาพยนตร์ไทย ในด้านการประยุกต์ใช้ทฤษฎีการเล่าเรื่องเชิงทัศน์ (Visual Storytelling) และการใช้สัญลักษณ์ (Symbolism) เพื่อสร้างอรรถรสทางอารมณ์ที่ลุ่มลึกกว่าภาพยนตร์สยองขวัญในยุคก่อนหน้า`,
  },
  {
    lesson_id: 30,
    module_id: 5,
    lesson_name: `ภววิทยา`,
    content: `1. รากฐานทางภววิทยา: ความสมดุลระหว่างสัจนิยมและรูปนิยม (Ontological Foundations)
ภาพยนตร์เรื่องนางนากจัดอยู่ในกลุ่ม แนวทางคลาสสิก (Classicism) ซึ่งเป็นจุดสมดุลบนแถบสเปกตรัมระหว่าง สัจนิยม (Realism) และ รูปนิยม (Formalism) โดยมีการใช้เทคนิคทางรูปนิยม เช่น การจัดแสงแบบ Chiaroscuro (การใช้แสงและเงาตัดกันอย่างรุนแรง) เพื่อรับใช้การเล่าเรื่องเชิงสัจนิยมที่เน้นความสมจริงของสภาพแวดล้อมและตัวละคร ภาพยนตร์เรื่องนี้พยายามรักษาสภาวะ ความสมจริงภายใน (Verisimilitude) หรือ ความจริงภายในเรื่อง เพื่อให้ผู้ชมยอมรับในกฎเกณฑ์ของโลกที่คนและผีอาศัยอยู่ร่วมกัน แม้จะเป็นเหตุการณ์เหนือธรรมชาติก็ตาม`,
  },
  {
    lesson_id: 31,
    module_id: 5,
    lesson_name: `โครงสร้างเรื่องเล่า`,
    content: `2. โครงสร้างเรื่องเล่าและแบบแผนสามองค์ (Narrative Structure)
ภาพยนตร์ดำเนินตาม โครงสร้าง 3 องค์ (Three-Act Structure) ตามทฤษฎีของอริสโตเติลอย่างเคร่งครัด:
องค์ที่ 1 (The Setup): การปูพื้นฐานความสัมพันธ์ระหว่าง มาก และ นาก ท่ามกลางบริบทประวัติศาสตร์สุริยุปราคา พ.ศ. 2411 ซึ่งทำหน้าที่เป็น ภาพเปิดเรื่อง (Opening Image) เพื่อสื่อถึงลางร้ายที่จะเกิดขึ้น
องค์ที่ 2 (The Confrontation): การเผชิญหน้ากับอุปสรรคเมื่อมากกลับจากสงครามและต้องใช้ชีวิตในบ้านที่นากสร้าง ภาพมายา (Illusion) ขึ้นมาปิดบังความจริง
องค์ที่ 3 (The Resolution): การคลี่คลายความขัดแย้งผ่าน จุด Climax ในพิธีกรรมสะกดวิญญาณ ซึ่งนำไปสู่การยอมรับความจริงและการเปลี่ยนแปลงสถานะของตัวละคร`,
  },
  {
    lesson_id: 32,
    module_id: 5,
    lesson_name: `ผู้สร้างและสไตล์ส่วนตัว `,
    content: ` ทฤษฎีผู้สร้างและสไตล์ส่วนตัว (Auteur Theory)
นนทรีย์ นิมิบุตร ทำหน้าที่เป็น Auteur หรือ ผู้กำกับในฐานะผู้ประพันธ์ โดยการนำวิสัยทัศน์ส่วนตัวมาตีความตำนานพื้นบ้านใหม่ เขาใช้กล้องเปรียบเสมือน Camera-Stylo หรือปากกาในการเขียนภาพเพื่อสื่อสารความหมาย สไตล์ที่เป็นเอกลักษณ์ (Hallmark) ของเขาคือการสร้างบรรยากาศที่เยือกเย็นผ่านเทคนิค Fog Effect และการเน้นความสมจริงของ Makeup SFX ซึ่งทำให้ผลงานของเขามีลายเซ็นทางศิลปะที่ชัดเจน`,
  },
  {
    lesson_id: 33,
    module_id: 5,
    lesson_name: `การรับรู้และหลักเกณฑ์`,
    content: `4. จิตวิทยาการรับรู้และหลักเกณฑ์เกสทัลต์ (Visual Perception and Gestalt)
ภาพยนตร์ใช้หลักการของ จิตวิทยาเกสทัลต์ (Gestalt Principles) เพื่อนำสายตาและอารมณ์ของผู้ชม:
การเติมเต็ม (Closure): ผู้ชมใช้กระบวนการทางจิต เติมเต็ม ช่วงเวลา 9 เดือนที่ผ่านไปจากการเห็นพัฒนาการทางกายภาพของนาก (ท้องโตขึ้น) โดยไม่ต้องมีคำบรรยาย
ความสัมพันธ์ระหว่างรูปและพื้น (Figure-Ground): การจัดแสงที่ส่องลงมายัง เจ้าอาวาส หรือ หลวงปู่ ท่ามกลางความมืดมิด ช่วยสร้างจุดโฟกัสที่สื่อถึงความศักดิ์สิทธิ์และความหวัง
สรีรวิทยาของการเห็น: ความสยองขวัญในเรื่องเกิดขึ้นจากการเล่นกับสภาวะ Persistence of Vision (การเห็นภาพติดตา) ในฉากที่ภาพศพปรากฏขึ้นอย่างรวดเร็วเพื่อกระตุ้นปฏิกิริยาทางอารมณ์`,
  },
  {
    lesson_id: 34,
    module_id: 5,
    lesson_name: `การตัดต่อและภาษาภาพ `,
    content: `วากยสัมพันธ์ของการตัดต่อและภาษาภาพ (Syntax of the Edit)
ในขณะที่ภาพยนตร์ส่วนใหญ่ใช้ การตัดต่อแบบต่อเนื่อง (Continuity Editing) เพื่อรักษาความไหลลื่นของเวลาและสถานที่ แต่ในฉากสยองขวัญมีการนำทฤษฎี มอนทาจ (Montage) มาใช้เพื่อสร้างความหมายใหม่จากการปะทะกันของภาพ (Collision) เช่น การโคลสอัพภาพแมงมุมสลับกับใบหน้าของนาก เพื่อสื่อสารถึงลางร้ายตามปรากฏการณ์ Kuleshov Effect ที่ทำให้ผู้ชมเชื่อมโยงอารมณ์ระหว่างสองช็อตเข้าด้วยกัน`,
  },
  {
    lesson_id: 35,
    module_id: 5,
    lesson_name: `จิตวิทยาแม่แบบและตัวละคร `,
    content: `จิตวิทยาแม่แบบและตัวละคร (Jungian Archetypes)
ตัวละครในนางนากสะท้อน แม่แบบ (Archetypes) ตามทฤษฎีของคาร์ล จุง:
The Shadow (ด้านมืด): จิตวิญญาณของนากที่ยึดติดและแสดงออกถึงความโกรธเกรี้ยวเมื่อความจริงถูกเปิดเผย สะท้อนถึงสภาวะจิตใจที่แตกสลาย
The Mentor (ผู้ชี้นำ): ตัวละครหลวงปู่ที่ใช้สันติวิธีและการเจรจาเพื่อให้วิญญาณบรรลุถึงการปล่อยวาง (Individuation)
PTSD และสภาวะทางจิต: ตัวละครมากสะท้อนอาการ Post-Traumatic Stress Disorder ผ่านทางภาพหลอนจากสงคราม (Flashbacks) ซึ่งเป็นเครื่องมือทางภาพยนตร์ที่ใช้สื่อถึงปมปัญหาภายในของตัวละคร`,
  },
  {
    lesson_id: 36,
    module_id: 5,
    lesson_name: `ศาสตร์แห่งสี`,
    content: `7. วิทยาศาสตร์สีและมาตรฐานภาพดิจิทัล (Color Science)
ในยุคปัจจุบันที่ภาพยนตร์เรื่องนี้ถูกนำมาเผยแพร่ผ่านแพลตฟอร์มดิจิทัล ความเที่ยงตรงของสีและรายละเอียดในส่วนมืด (Shadow) มีความสำคัญอย่างยิ่ง มาตรฐานอย่าง ACES (Academy Color Encoding System) จึงเป็นระบบสำคัญที่ช่วยรักษาเจตนารมณ์ดั้งเดิมของผู้กำกับภาพไว้ได้ แม้จะมีการเปลี่ยนแปลงอุปกรณ์แสดงผลจากฟิล์มไปสู่หน้าจอดิจิทัลแบบ HDR ก็ตาม
จากการพิจารณาประเด็นทางศาสตร์และศิลป์ผ่านเลนส์ของทัศนศิลป์ ทฤษฎีภาพยนตร์ และมุมมองของสัมภเวศิลป์ เราจะเห็นได้ว่า นางนาก (พ.ศ. 2542) มิได้เป็นเพียงภาพยนตร์สยองขวัญย้อนยุคเพื่อความสะพรึงกลัวเท่านั้น แต่เป็นงานศิลปะที่วิพากษ์ สภาวะความยึดติดในพันธนาการแห่งรัก และ การปะทะกันระหว่างภาพลวงตากับความเป็นจริง ศาสตร์การสร้างภาพยนตร์และเทคนิคการเล่าเรื่องเชิงทัศน์ที่แยบยล ทั้งการใช้สัญลักษณ์บอกใบ้ลางร้ายอย่างสุริยุปราคา การสร้างบรรยากาศที่เยือกเย็นผ่านหมอกควัน และการออกแบบเอฟเฟกต์ที่สมจริงอย่างยิ่งยวด ต่างทำงานร่วมกันเพื่อส่งสารสำคัญคือ:
ตำนานรักอมตะแห่งบางพระโขนง คือจดหมายเหตุของความอาลัยที่ก้าวข้ามขอบเขตของความพลัดพราก หมอกควันและภาพมายาคือร่องรอยของการที่อดีตไม่ยอมตาย และมันจะยังคงวนเวียนเพื่อทวงคืนพื้นที่ของความทรงจำอันแสนสุข จนกว่าความจริงอันเป็นอนิจจังจะได้รับการโอบรับด้วยสันติวิธีและการปล่อยวาง`,
  },
  {
    lesson_id: 37,
    module_id: 6,
    lesson_name: `ก่อนจะถอดรหัส`,
    content: `ภาพยนตร์เรื่อง ทองสุก 13 ซึ่งออกฉายในปี พ.ศ. 2556 ถือเป็นจุดเปลี่ยนสำคัญของภาพยนตร์แนวสยองขวัญไทย โดยเป็นการขยับตัวเข้าสู่แนว Action Horror และแนวระทึกขวัญเชิงจิตวิทยาที่มีแนวคิดสูง (High-concept) การสร้างภาพยนตร์เรื่องนี้สะท้อนถึงการปรับตัวของกลุ่มทุนสื่อสารมวลชนขนาดใหญ่ เช่น เวฟ พิคเจอร์ส (ในเครือเวฟ เอ็นเตอร์เทนเมนท์ และช่อง 3) ที่ต้องการรุกเข้าสู่ตลาดภาพยนตร์เพื่อจับกลุ่มผู้ชมวัยรุ่นที่นิยมสื่อดิจิทัลและภาพยนตร์ระดับสากล โดยมีการดึงทีมงานที่มีความเชี่ยวชาญทั้งสายพาณิชย์และสาย Cult อย่าง ทวีวัฒน์ วันทา ผู้กำกับที่มีสไตล์ภาพรุนแรงและรวดเร็ว และ เอกสิทธิ์ ไทยรัตน์ นักเขียนบทสายจิตวิทยาที่เน้นความสยองขวัญแบบแปลกใหม่มาทำงานร่วมกัน`,
  },
  {
    lesson_id: 38,
    module_id: 6,
    lesson_name: ` บริบททางอุตสาหกรรมและการเปลี่ยนผ่าน`,
    content: `บริบททางอุตสาหกรรมและการเปลี่ยนผ่านสู่ High-Concept Horror (Industrial Context and the Transition to High-Concept Horror)
ภาพยนตร์เรื่อง ทองสุก 13 (Long Weekend) ซึ่งออกฉายในปี พ.ศ. 2556 มิได้เป็นเพียงผลงานสยองขวัญดาษดื่น ทว่าถือเป็น หมุดหมายสำคัญทางประวัติศาสตร์ (Historical Milestone) ของการขยับตัวในอุตสาหกรรมภาพยนตร์ไทยยุคเปลี่ยนผ่าน เนื้อหาในบทเรียนนี้จะชำแหละโครงสร้างทางอุตสาหกรรมและยุทธศาสตร์การประกอบสร้างภาพยนตร์ ผ่านกรอบทฤษฎีที่สำคัญดังต่อไปนี้
1. เศรษฐศาสตร์การเมืองว่าด้วยอุตสาหกรรมภาพยนตร์ (Political Economy of Cinema) และการควบรวมขั้วตรงข้าม
การถือกำเนิดของภาพยนตร์เรื่องนี้ สะท้อนให้เห็นถึงปรากฏการณ์ทางเศรษฐศาสตร์การเมืองในระบบทุนนิยมสื่อ (Media Capitalism) ผ่านการร่วมทุนระหว่าง เวฟ พิคเจอร์ส (บริษัทในเครือสถานีโทรทัศน์ช่อง 3 ซึ่งเป็นตัวแทนของทุนกระแสหลักและฐานผู้ชมระดับมวลชน หรือ Mass Market) กับทีมงานสร้างสรรค์ที่มีลายเซ็นเฉพาะกลุ่ม (Niche/Cult Creators) การผนึกกำลังครั้งนี้คือการสร้างสมดุลระหว่าง ศิลปะ และ พาณิชย์ (Art-Commerce Dialectic) โดยมีผู้อำนวยการสร้างอย่าง อดิเรก วัฏลีลา ทำหน้าที่เป็นสถาปนิกโครงสร้างที่คอยรักษากรอบความเป็นภาพยนตร์กระแสหลัก (Mainstream Appeal) เพื่อรองรับจินตนาการอันสุดขั้วของผู้กำกับ
2. ทฤษฎีความเป็นผู้ประพันธ์แบบร่วมมือ (Collaborative Auteur Theory)
ในทางภาพยนตร์ศึกษา การสร้าง ทองสุก 13 เป็นการทำงานแบบ Collaborative Authorship หรือการประพันธ์ร่วมที่น่าสนใจยิ่ง เป็นการปะทะสังสรรค์กันระหว่างสองขั้วความคิด:
ทวีวัฒน์ วันทา (ผู้กำกับ): นำเสนอสุนทรียศาสตร์แห่งความรุนแรง (Aesthetics of Violence) และความกล้าหาญในการนำเสนอภาพแบบ Cult Cinema ซึ่งมีลักษณะท้าทายขนบ (Subversive)
เอกสิทธิ์ ไทยรัตน์ (ผู้เขียนบท): นำเสนอความลึกซึ้งทางจิตวิทยา (Psychological Depth) โดยใช้ความถนัดในการสำรวจสภาวะจิตใจที่บิดเบี้ยวและด้านมืดของมนุษย์ การหลอมรวมของวิสัยทัศน์ทั้งสอง ภายใต้การควบคุมจังหวะของผู้อำนวยการสร้าง ทำให้ตัวภาพยนตร์มีทั้งความดิบเถื่อนทางสายตา (Visual Extremity) และความซับซ้อนทางสติปัญญา (Cognitive Complexity)
3. ทฤษฎีภาพยนตร์แนวคิดหลักและวิศวกรรมข้ามวัฒนธรรม (High-Concept Theory and Cross-Cultural Engineering)
ตามทฤษฎี High-Concept ของ Justin Wyatt ภาพยนตร์ที่ประสบความสำเร็จในระดับอุตสาหกรรมต้องสามารถสื่อสารแนวคิดรวบยอดได้อย่างฉับไว ทองสุก 13 บรรลุเป้าหมายนี้ผ่านสมการเชิงวิศวกรรมทางวัฒนธรรม นั่นคือการนำ ศุกร์ 13 (สัญญะแห่งความโชคร้ายระดับสากล หรือ Global Signifier) มาปะทะกับ พิธีคืนผีแดก (ไสยศาสตร์เฉพาะถิ่น หรือ Local Folklore) กลยุทธ์ทางวาทกรรมนี้ (Discursive Strategy) ทำหน้าที่เป็น The Hook ที่ทรงพลัง มันช่วยลดทอนกำแพงความเข้าใจข้ามวัฒนธรรม (Cultural Barrier) ทำให้ภาพยนตร์สามารถส่งออก (Exportable) ไปยังตลาดเอเชียและตลาดโลกได้ โดยที่ยังคงความลึกลับน่าค้นหาแบบตะวันออก (Oriental Exoticism) เอาไว้ได้อย่างครบถ้วน
4. พลวัตของตระกูลหนังและสุนทรียศาสตร์แบบเร่งเร้า (Genre Dynamics and Non-stop Aesthetics)
ในเชิงวากยสัมพันธ์ทางภาพยนตร์ (Cinematic Syntax) ภาพยนตร์เรื่องนี้จงใจรื้อถอน (Deconstruct) โครงสร้างของภาพยนตร์ผีไทยในทศวรรษก่อนหน้า ซึ่งมักได้รับอิทธิพลจาก J-Horror (เน้นความเชื่องช้า บรรยากาศอึมครึม และความกลัวทางจิตวิทยา) ผู้สร้างได้ทำการปรับกระบวนทัศน์ (Paradigm Shift) ไปสู่แนวทาง Action Horror และ Non-stop Horror โดยหยิบยืมไวยากรณ์ของหนังแนว Slasher (ไล่เชือด) มาปรับใช้ การเน้นความต่อเนื่องของสถานการณ์ระทึกขวัญ เป็นการออกแบบที่พุ่งเป้าไปที่การกระตุ้นสรีรวิทยา (Physiological Stimulation) ของผู้ชมกลุ่มวัยรุ่นยุคใหม่ ที่คุ้นชินกับการบริโภคสื่อที่มีความเร็วสูงและเรียกร้องการตอบสนองทางอารมณ์อย่างฉับพลัน (Instant Gratification)`,
  },
  {
    lesson_id: 39,
    module_id: 6,
    lesson_name: ` สถาปัตยกรรมทางเรื่องเล่า`,
    content: `สถาปัตยกรรมทางเรื่องเล่าและจิตวิทยาตัวละคร (Narrative Architecture and Character Psychology)
ในมิติของการประพันธ์ ภาพยนตร์เรื่อง ทองสุก 13 มิได้ทำหน้าที่เพียงการสร้างความสยองขวัญเหนือธรรมชาติ หากแต่สถาปัตยกรรมของการเล่าเรื่อง (Narrative Architecture) ได้รับการออกแบบให้เป็น จุลภาคทางสังคม (Social Microcosm) เพื่อวิพากษ์และชำแหละโครงสร้างความรุนแรงในวัยรุ่น (Adolescent Cruelty) อย่างเป็นระบบ บทเรียนนี้จะเจาะลึกจิตวิทยาเบื้องหลังพฤติกรรมตัวละครผ่านกรอบทฤษฎีที่สำคัญ ดังนี้
1. วาทกรรม ตัวลง และทฤษฎีการตีตราทางสังคม (The Discourse of the Outcast and Sociology of Stigma)
ตำแหน่งแห่งที่ของตัวละคร ทองสุก ในระบบนิเวศของกลุ่ม ถูกกำหนดให้อยู่ในฐานะ ตัวลง หรือ ชายขอบของกลุ่ม (The Marginalized) ปรากฏการณ์นี้สามารถอธิบายได้อย่างลึกซึ้งผ่าน ทฤษฎีการตีตรา (Stigma Theory) ของ Erving Goffman ความบกพร่องทางพัฒนาการหรือสติปัญญาของทองสุก ไม่ได้เป็นเพียงลักษณะทางกายภาพหรือชีวภาพ แต่มันถูกกลุ่มเพื่อนนำมาสร้างเป็น ข้อบกพร่องทางสังคม (Social Discredit) กระบวนการนี้เรียกว่าการสร้าง ความเป็นอื่น (Othering) ซึ่งเป็นการขีดเส้นแบ่งระหว่างมนุษย์ปกติ (กลุ่มเพื่อน) และผู้ที่ด้อยกว่า (ทองสุก) การผลักให้ทองสุกกลายเป็นสิ่งมีชีวิตที่ต้อยต่ำกว่ามาตรฐานของกลุ่ม เป็นการมอบความชอบธรรมทางศีลธรรมจอมปลอมให้กลุ่มสามารถกระทำความรุนแรงต่อเขาได้โดยปราศจากความรู้สึกผิดบาป
2. นิเวศวิทยาของกลุ่มและพลวัตเชิงอำนาจ (Group Ecology and Power Dynamics)
สถาปัตยกรรมของกลุ่มตัวละครได้รับการจัดวางอย่างจงใจให้สะท้อนถึงต้นแบบทางจิตวิทยา (Psychological Archetypes) เพื่อขับเคลื่อนกลไกการกลั่นแกล้งทางสังคม (Social Bullying) อย่างเป็นระบบ:
The Alpha Male (บอย - ปิตาธิปไตยและการผูกขาดอำนาจ): บอยคือตัวแทนของสัญชาตญาณดิบที่ต้องการครองความเป็นใหญ่ (Hegemonic Masculinity) การใช้ความรุนแรงและข่มเหงทองสุก ไม่ใช่เพียงความคึกคะนอง แต่เป็นกลยุทธ์ในการผลิตซ้ำอำนาจ (Reproduction of Power) เพื่อบีบบังคับให้สมาชิกคนอื่นในกลุ่มต้องสยบยอมต่อสถานะผู้นำของเขา
The Moral Anchor (น้ำ - ความขัดแย้งทางปัญญาและภาวะรู้สึกผิด): น้ำทำหน้าที่เป็นสมอเรือทางศีลธรรมเพียงหนึ่งเดียวของกลุ่ม เธอตระหนักรู้ถึงความผิดชอบชั่วดี ทว่ากลับถูกกักขังอยู่ใน สภาวะความไม่ลงรอยกันทางสติปัญญา (Cognitive Dissonance) ความหวาดกลัวที่จะถูกขับออกจากลุ่ม (Fear of Ostracization) ทำให้เธอไม่กล้าลุกขึ้นต่อต้านอย่างเด็ดขาด นำไปสู่ตราบาปในใจ (Guilt Complex) ที่กัดกินตัวเธอเอง
The Complicit Majority (แจ็ค, บีม, ปุ้ย - ความธรรมดาสามัญของความชั่วร้าย): กลุ่มเพื่อนที่เหลือทำหน้าที่เป็น เสียงส่วนใหญ่ที่เพิกเฉย ซึ่งเป็นฟันเฟืองที่อันตรายที่สุดในนิเวศวิทยานี้ พฤติกรรมของพวกเขาสอดคล้องกับ ทฤษฎีปรากฏการณ์ผู้เพิกเฉย (Bystander Effect) และ การกระจายความรับผิดชอบ (Diffusion of Responsibility) การหัวเราะเยาะหรือการยืนมองเฉยๆ สะท้อนให้เห็นถึงแนวคิด ความธรรมดาสามัญของความชั่วร้าย (Banality of Evil) ของ Hannah Arendt ที่ชี้ให้เห็นว่า ความโหดร้ายอย่างที่สุดมักไม่ได้เกิดจากปีศาจ แต่เกิดจากคนธรรมดาที่เพิกเฉยและปฏิบัติตามกระแสสังคมโดยปราศจากการตั้งคำถาม
3. ปฐมบทแห่งแรงจูงใจและสภาวะการเปลี่ยนผ่านของอัตลักษณ์ (Authorial Motivation and the Metamorphosis of Identity)
รากฐานความสยองขวัญของโครงเรื่องนี้ มีความลึกซึ้งยิ่งขึ้นเมื่อพิจารณาจากรอยประทับจากประสบการณ์จริง (Lived Experience) ของผู้เขียนบท (เอกสิทธิ์ ไทยรัตน์) เกี่ยวกับเพื่อนที่หายสาบสูญและหวนคืนมาพร้อมกับตัวตนที่แปลกแยก องค์ประกอบนี้ถูกนำมาแปรสภาพเป็น ทฤษฎีการเปลี่ยนผ่านของตัวตน (Psychological Metamorphosis) ภัยคุกคามที่แท้จริงใน ทองสุก 13 จึงมิใช่เพียงวิญญาณอาฆาต แต่คือสภาวะ The Uncanny (ความแปลกประหลาดที่คุ้นเคย) เมื่อบุคคลที่เรารู้จักมักคุ้นและเคยกดขี่ข่มเหง ได้ก้าวข้ามเส้นแบ่งแห่งอัตลักษณ์เดิม กลับกลายเป็นตัวตนใหม่ที่ไม่อาจคาดเดาและเปี่ยมไปด้วยอำนาจทำลายล้าง การพังทลายของความคุ้นเคยนี้เอง ที่เป็นการกระชากรากฐานความปลอดภัยทางจิตวิทยาของกลุ่มเพื่อนให้พินาศลงอย่างย่อยยับ`,
  },
  {
    lesson_id: 40,
    module_id: 6,
    lesson_name: ` สัญวิทยา`,
    content: `สัญวิทยาและเทพปกรณัมประยุกต์ (Applied Semiotics and Mythology)
ในมิติของการประกอบสร้างความหมาย (Meaning-making Process) ภาพยนตร์เรื่อง ทองสุก 13 ได้ทำหน้าที่เป็นพื้นที่จำลองสำหรับการปะทะสังสรรค์ทางวัฒนธรรม บทเรียนนี้มุ่งถอดรหัส (Decode) สัญญะที่ซ่อนเร้นอยู่ในภาพยนตร์ ผ่านกรอบทฤษฎีทางสัญวิทยา (Semiotics) และการประยุกต์ใช้เทพปกรณัม (Applied Mythology) ดังต่อไปนี้
1. การสังเคราะห์ระบบความเชื่อและวิศวกรรมการสร้างเทพปกรณัมใหม่ (Synthesis of Beliefs and Neomythology)
ภาพยนตร์มิได้เพียงหยิบยืมความเชื่อที่มีอยู่เดิมมาใช้ แต่ได้ทำการสร้าง เทพปกรณัมสมมติ (Pseudomythology) ขึ้นมาใหม่ผ่านพิธีกรรมที่เรียกว่า คืนผีแดก (The Night of Devouring Ghosts) ตามแนวคิดเรื่อง มายาคติ (Myth) ของ Roland Barthes ผู้สร้างได้ทำการดัดแปลงสัญญะระดับสากลอย่าง วันศุกร์ที่ 13 (ตัวแทนของลางร้ายและความตายในคติชนวิทยาตะวันตก) ให้กลายเป็นสัญญะปฐมภูมิ ก่อนจะนำมาหลอมรวมเข้ากับพิธีกรรมไสยศาสตร์และลัทธิวิญญาณนิยม (Animism) แบบท้องถิ่นไทย กระบวนการข้ามสายพันธุ์ทางความเชื่อนี้ สร้างความชอบธรรมให้แก่โครงเรื่อง และทำให้ความเหนือธรรมชาติในภาพยนตร์ดูมีกฎเกณฑ์และรากเหง้าอันทรงพลัง
นอกจากนี้ การใช้ ตู้เหล็ก เป็นศูนย์กลางของพิธีกรรม ยังแฝงนัยยะทางสัญวิทยาที่ลึกซึ้ง ตู้เหล็กไม่ได้ทำหน้าที่เป็นเพียงภาชนะกักขัง แต่ในเชิงสถาปัตยกรรมทางความเชื่อ มันคือ แท่นบูชายัญ (Altar of Sacrifice) และ พื้นที่ก้ำกึ่ง (Liminal Space) ที่เชื่อมต่อระหว่างโลกคนเป็นและแดนคนตาย การนำเหยื่อ (ทองสุก) เข้าไปขังไว้ในนั้น จึงเปรียบเสมือนการส่งมอบเครื่องสังเวยเพื่อเปิดประตูแห่งหายนะ (Pandora's Box) อย่างเป็นทางการ
2. สัญญะของอสุรกายและเทพปกรณัมใต้พิภพ (Reptilian Imagery and the Chthonic Deity)
การออกแบบรูปลักษณ์ของ เจ้าพ่อท้ายเกาะ นับเป็นการใช้สัญวิทยาทางสายตา (Visual Semiotics) ที่ชาญฉลาดและสื่อความหมายถึงสัญชาตญาณดิบ ภาพยนตร์ปฏิเสธการใช้รูปลักษณ์วิญญาณโปร่งแสงแบบดั้งเดิม แต่เลือกประกอบสร้างอสุรกายผ่านสัญญะของ สัตว์เลื้อยคลาน (Reptilian Traits) เช่น การมีผิวหนังที่หนาหยาบกร้านดุจเกล็ด และการมีม่านตาขีดตั้ง (Vertical Pupils) คล้ายอสรพิษหรือจระเข้ ในทางจิตวิเคราะห์และเทพปกรณัมวิทยา (อ้างอิงจากแนวคิด Archetype ของ Carl Jung) สัตว์เลื้อยคลานคือตัวแทนของ อำนาจใต้พิภพ (Chthonic Entity) สิ่งมีชีวิตที่เก่าแก่ ดุร้าย และถูกขับเคลื่อนด้วยสัญชาตญาณการล่าระดับพื้นฐาน รูปลักษณ์เหล่านี้เป็นสัญญะที่สื่อถึง เจ้าที่ หรือเทพารักษ์ผู้คุ้มครองอาณาเขตทางธรรมชาติและผืนน้ำ ซึ่งมีอำนาจเบ็ดเสร็จและปราศจากความเมตตาแบบมนุษย์ (Non-human Morality)
3. ต้นแบบแห่งผู้ล่าและการบ่อนทำลายเชิงจิตวิทยา (The Predator Archetype and Psychological Subversion)
ความโดดเด่นของภัยคุกคามใน ทองสุก 13 คือการยกระดับสถานะของ ผี จากเพียงผู้หลอกหลอนวิญญาณ (Haunting Apparition) สู่การเป็น ผู้ล่าระดับบนสุด (Apex Predator) อสุรกายในเรื่องนี้มิได้พึ่งพาเพียงพละกำลังทางกายภาพ แต่ยังแสดงออกถึงสติปัญญาอันฉ้อฉล (Cunning Intelligence) กลวิธีในการล่าเหยื่อคือการขุดค้นและนำเอา ความทรงจำ และ ความไว้วางใจ ของมนุษย์มาดัดแปลงเป็นอาวุธ (Weaponization of Trust) การสวมรอยเป็นบุคคลที่เหยื่อรัก หรือการบิดเบือนภาพจำในอดีต คือการทำสงครามจิตวิทยา (Psychological Warfare) ที่มุ่งทำลาย พื้นที่ปลอดภัย (Safe Space) ในจิตใจของเหยื่อ การล่าในลักษณะนี้สอดคล้องกับกลไกของ ผู้เล่าเรื่องที่ลวงหลอก ซึ่งทลายปราการแห่งเหตุผลของมนุษย์ลงอย่างราบคาบ ก่อนจะจัดการปลิดชีพในท้ายที่สุด`,
  },
  {
    lesson_id: 41,
    module_id: 6,
    lesson_name: `ศาสตร์แห่งเทคนิคพิเศษและภูมิศาสตร์แห่งความกลัว`,
    content: `ศาสตร์แห่งเทคนิคพิเศษและภูมิศาสตร์แห่งความกลัว (Technical Art and the Geography of Terror)
ในมิติของกระบวนการผลิต (Production) ภาพยนตร์เรื่อง ทองสุก 13 ได้แสดงให้เห็นถึงความทะเยอทะยานในการยกระดับมาตรฐานทางเทคนิคของอุตสาหกรรมภาพยนตร์สยองขวัญไทย องค์ประกอบทางศิลป์ (Art Direction) และนวัตกรรมทางโสตทัศน์มิได้ทำหน้าที่เพียงการประดับประดาฉากหลัง หากแต่ถูกบูรณาการเข้าเป็นกลไกหลักในการผลิตความกลัว (Mechanisms of Fear Production) บทเรียนนี้จะชำแหละศาสตร์แห่งงานสร้างผ่านกรอบทฤษฎีสุนทรียศาสตร์ ดังนี้
1. นวัตกรรมการแต่งหน้าเอฟเฟกต์และสุนทรียศาสตร์แห่งเรือนร่างที่วิปลาส (Prosthetic Makeup Innovation and the Aesthetics of Body Horror)
ความสำเร็จอันเป็นที่ประจักษ์จนนำไปสู่การคว้ารางวัลสุพรรณหงส์ สาขาแต่งหน้ายอดเยี่ยม โดย อาภรณ์ มีบางยาง นั้น เกิดจากความกล้าหาญในการรื้อถอนขนบ (Deconstruction) ของรูปลักษณ์ผีไทยแบบดั้งเดิม ภาพยนตร์ปฏิเสธการใช้ใบหน้าที่ขาวซีดและการเคลื่อนไหวที่เชื่องช้า แต่มุ่งหน้าเข้าสู่พรมแดนของ สุนทรียศาสตร์แห่งความน่าขยะแขยง (The Abject) ตามทฤษฎีของ Julia Kristeva ซึ่งว่าด้วยความหวาดหวั่นเมื่อขอบเขตของร่างกายมนุษย์ถูกทำลายหรือบิดเบือน
การออกแบบอสุรกายในเรื่องนี้ ได้รับอิทธิพลอย่างลึกซึ้งจากภาพยนตร์สยองขวัญระดับสากล โดยเฉพาะการใช้เทคนิค การหักเหสรีระร่างกาย (Backwards-bending Choreography) การบิดเบี้ยวของข้อต่อที่ขัดต่อหลักกายวิภาคศาสตร์นี้ เป็นการจงใจกระตุ้น ปรากฏการณ์หุบเขาพิศวงเชิงจลนศาสตร์ (Kinesthetic Uncanny Valley) ทำให้ผู้ชมเกิดภาวะสับสนทางสายตา (Visual Incongruence) และสร้างความหวาดผวาในระดับสัญชาตญาณสัตว์ป่า (Primal Dread) ต่อความผิดปกติของสิ่งมีชีวิตเบื้องหน้า
2. สัจนิยมเชิงสภาพแวดล้อมและสถาปัตยกรรมแห่งความโดดเดี่ยว (Environmental Realism and the Architecture of Isolation)
การเลือกถ่ายทำ ณ เขื่อนแก่งกระจาน นับเป็นการประยุกต์ใช้ทฤษฎี ภูมิศาสตร์จิตวิทยา (Psychogeography) ที่ชาญฉลาด สภาพแวดล้อมทางธรรมชาติถูกแปรสภาพให้กลายเป็น ตัวละครที่ไร้ลมหายใจ (Non-human Agent) ที่คอยกดทับสภาวะจิตใจของมนุษย์ การนำเสนอภาพของ ป่าซากไม้ยืนต้นตาย ที่โผล่พ้นผิวน้ำอันเวิ้งว้าง เป็นการสร้างสุนทรียภาพแบบ Environmental Realism (สัจนิยมเชิงสภาพแวดล้อม) ที่ให้ความรู้สึกสมจริงทว่าแปลกแยก
ทัศนียภาพดังกล่าวทำหน้าที่สถาปนาสภาวะ ความแปลกประหลาดเหนือโลก (Otherworldly) ธรรมชาติที่แห้งแล้งและรายล้อมด้วยมวลน้ำอันมืดมิด ได้สร้าง สุญญากาศทางพื้นที่ (Spatial Quarantine) ที่ตัดขาดตัวละครออกจากอารยธรรมและความช่วยเหลือทุกประการ ความกว้างใหญ่ของสถานที่มิได้มอบอิสรภาพ แต่กลับผลิตความรู้สึกสยดสยองแบบ Agoraphobia (ความกลัวที่โล่งแจ้ง) ผสมผสานกับความอึดอัดคับแคบ (Claustrophobia) จากการไร้ทางหนี ทำให้ความโดดเดี่ยวกลายเป็นมวลสารที่จับต้องได้และกดดันผู้ชมอย่างหนักหน่วง
3. ไวยากรณ์โสตทัศน์แห่งความสับสนและการโจมตีทางสรีรวิทยา (Audio-Visual Grammar of Disorientation and Physiological Assault)
เพื่อให้สอดรับกับกระบวนทัศน์แบบ Action Horror ภาพยนตร์ได้ทำการเปลี่ยนผ่านจากการสร้างความกลัวแบบแช่มช้า (Slow-burn Suspense) ไปสู่ การโจมตีทางโสตประสาท (Sensory Assault) การออกแบบแสงและเสียงถูกใช้เป็นอาวุธในการควบคุมจิตวิทยาฝูงชน:
วิศวกรรมแสงกระพริบ (Strobe Lighting Engineering): การใช้แสงแฟลชที่สว่างวาบสลับกับความมืดมิด ทำหน้าที่ตัดทอนการมองเห็นอย่างต่อเนื่อง (Visual Fragmentation) สมองของผู้ชมจะถูกรบกวนจนเกิด สภาวะสับสนทิศทาง (Spatial Disorientation) ภาพของอสุรกายที่ปรากฏเป็นห้วงๆ ทำให้การเคลื่อนไหวดูเหนือธรรมชาติ คาดเดาไม่ได้ และเพิ่มพูนความรู้สึกไม่ปลอดภัยถึงขีดสุด
ประติมากรรมเสียงเชิงรุก (Aggressive Soundscapes): การออกแบบเสียงในเรื่องปฏิเสธความเงียบงัน แต่เลือกใช้เสียงประกอบที่ดุดัน กระด้าง และมีความถี่ที่สร้างความระคายเคือง (Dissonant Frequencies) เสียงเหล่านี้ทำหน้าที่ทะลวงผ่านโสตประสาท เพื่อกระตุ้นระบบประสาทซิมพาเทติก (Sympathetic Nervous System) ของผู้ชม บังคับให้ร่างกายหลั่งอะดรีนาลีนและเข้าสู่โหมด สู้หรือหนี (Fight or Flight) ซึ่งเป็นการบีบคั้นอารมณ์ให้สอดคล้องกับจังหวะการไล่ล่าแบบ Non-stop อย่างสมบูรณ์แบบ`,
  },
  {
    lesson_id: 42,
    module_id: 6,
    lesson_name: `ส่งท้ายก่อนถอดรหัส`,
    content: `จากการพิจารณาประเด็นทางศาสตร์และศิลป์ผ่านเลนส์ของจิตวิทยาสังคม สัญวิทยา และทฤษฎีภาพยนตร์สยองขวัญ เราจะเห็นได้ว่า ทองสุก 13 (พ.ศ. 2556) มิได้เป็นเพียงภาพยนตร์ระทึกขวัญแนวไล่เชือดวัยรุ่น (Teen Slasher) หรือผลงานกระตุ้นอะดรีนาลีนดาษดื่นเท่านั้น แต่เป็นบทวิพากษ์ทางสังคมวิทยาที่เปลื้องผ้า สถาปัตยกรรมแห่งความรุนแรง และ ความธรรมดาสามัญของความชั่วร้ายในพลวัตกลุ่ม ศาสตร์แห่งการประกอบสร้างภาพยนตร์และไวยากรณ์โสตทัศน์ที่ดุดัน ทั้งการใช้สัญญะของ ตู้เหล็ก ในฐานะแท่นบูชายัญและครรภ์มารดาที่ให้กำเนิดความวิปลาส การสร้างภูมิศาสตร์แห่งความโดดเดี่ยวกลางผืนน้ำอันเวิ้งว้าง ตลอดจนนวัตกรรมเอฟเฟกต์แห่งเรือนร่างที่บิดเบี้ยวผิดมนุษย์ (Body Horror) ต่างทำงานร่วมกันอย่างมีนัยสำคัญเพื่อส่งสารอันเจ็บปวดว่า:
> โศกนาฏกรรมในคืนผีแดก คือจดหมายเหตุของการกดขี่และการสร้างความเป็นอื่น (Othering) ที่ก้าวข้ามขีดจำกัดของศีลธรรม อสุรกายและการไล่ล่าที่ปรากฏ มิใช่เพียงภัยคุกคามจากมิติเร้นลับ หากแต่เป็นภาพสะท้อนของบาปปฐมภูมิอันเกิดจากการเพิกเฉยและการสมรู้ร่วมคิดอย่างเงียบงัน (Bystander Effect) และมันจะยังคงกลายพันธุ์เป็นฝันร้ายเพื่อทวงคืนความยุติธรรมอันบิดเบี้ยว จนกว่าโครงสร้างของอำนาจจอมปลอมจะถูกทำลาย และสติสัมปชัญญะที่แตกสลายของมนุษย์จะถูกชำระล้างด้วยหายนะอย่างเบ็ดเสร็จ
> 
บทวิเคราะห์ศาสตร์และศิลป์ที่ปรากฏในบทเรียนทั้งหมดนี้ เป็นการถอดรหัสและตีความผ่านมุมมองทางจิตวิเคราะห์ (Psychoanalysis) และสังคมวิทยา โดยอาศัยทฤษฎีทางสุนทรียศาสตร์ภาพยนตร์มาเป็นแกนกลาง ทั้งนี้ ข้อสรุปทั้งหมดถือเป็นทัศนะและการวิเคราะห์เชิงวิพากษ์ส่วนบุคคล ซึ่งมุ่งเน้นไปที่การแสวงหาความหมายแฝงที่ซ่อนอยู่ในสถาปัตยกรรมทางเรื่องเล่าและองค์ประกอบศิลป์ของภาพยนตร์เท่านั้น เพื่อเป็นแนวทางเบื้องต้นในการชี้ให้เห็นว่า ภาษาภาพยนตร์แนวระทึกขวัญ สามารถทำงานร่วมกับความเปราะบางทางจิตใจและสันดานดิบของมนุษย์ได้อย่างสั่นสะเทือนโสตประสาทและทรงพลังสืบไป`,
  },
  {
    lesson_id: 43,
    module_id: 7,
    lesson_name: `ก่อนจะถอดรหัส`,
    content: `ภาพยนตร์เรื่อง คน ผี ปีศาจ (กำกับโดย ชูเกียรติ ศักดิ์วีระกุล) ถือเป็นหมุดหมายสำคัญของการเปลี่ยนผ่านกระบวนทัศน์ (Paradigm Shift) ในอุตสาหกรรมภาพยนตร์สยองขวัญไทย จากการนำเสนอความตื่นตระหนกทางไสยศาสตร์แบบขนบดั้งเดิม สู่การเป็น ภาพยนตร์สยองขวัญเชิงจิตวิทยาและสังคมการเมือง (Socio-political Psychological Horror) ตัวภาพยนตร์ทำหน้าที่เป็นวาทกรรมวิพากษ์สังคม โดยใช้ไวยากรณ์ทางภาพยนตร์ (Cinematic Grammar) เพื่อซ่อนเร้นสัญญะของความรุนแรงเชิงโครงสร้างไว้ภายใต้เปลือกของสิ่งลี้ลับ`,
  },
  {
    lesson_id: 44,
    module_id: 7,
    lesson_name: `ความอึดอัดและสถาปัตยกรรมปิดตาย`,
    content: `ภูมิศาสตร์แห่งความอึดอัดและสถาปัตยกรรมปิดตาย (Claustrophobic Geography and the Architecture of Entrapment)
ในมิติของการออกแบบงานสร้าง (Production Design และ Art Direction) ภาพยนตร์เรื่อง คน ผี ปีศาจ มิได้ใช้ฉากหลังเป็นเพียงพื้นที่รองรับเหตุการณ์ หากแต่ได้สถาปนา สถาปัตยกรรม ขึ้นมาใหม่ เพื่อให้ทำหน้าที่เป็น ผู้บงการจิตวิทยา (Psychological Manipulator) ต่อผู้ชมอย่างแยบยล การออกแบบพื้นที่ในภาพยนตร์เรื่องนี้สามารถวิเคราะห์ผ่านกรอบทฤษฎีที่สำคัญ ดังต่อไปนี้
พื้นที่ทางเลือกในเคหสถาน (Domestic Heterotopia) และการพังทลายของพื้นที่ปลอดภัย: การเลือกใช้ โรงพิมพ์ในตึกแถวเก่า เป็นศูนย์กลางของเรื่องเล่า (Narrative Center) สามารถอธิบายได้ผ่านแนวคิดเรื่อง Heterotopia (พื้นที่ทางเลือก/พื้นที่ทับซ้อน) ของ Michel Foucault ภาพยนตร์จงใจเปลี่ยนพื้นที่พำนักอาศัย ซึ่งตามขนบของสังคมควรจะเป็น พื้นที่ปลอดภัย (Safe Space) ให้กลายเป็น พื้นที่ปิดตายที่ไร้ทางหนี (Claustrophobic Confinement) ความคับแคบของตึกแถว ทางเดินที่สลับซับซ้อน บันไดที่สูงชัน และเครื่องพิมพ์ขนาดใหญ่ที่ตั้งตระหง่านอยู่ท่ามกลางความมืด ทำหน้าที่ราวกับกรงขังเชิงกายภาพที่บีบอัดสภาวะอารมณ์ของตัวละคร สภาพแวดล้อมเหล่านี้ผลักให้ทั้งตัวละครและผู้ชมตกลงสู่สภาวะตึงเครียดขั้นสุด (Extreme Tension) และรู้สึกถึงการถูกคุกคามตลอดเวลา
สุนทรียศาสตร์ของพื้นที่ว่างเชิงลบ (Aesthetics of Negative Space) และจิตวิทยาของเงามืด: ในด้านเทคนิคการถ่ายทำ การตัดสินใจเลือกใช้สัดส่วนภาพแบบจอกว้าง (Wide Screen หรือ Anamorphic format) ภายในพื้นที่สถาปัตยกรรมที่คับแคบ มิได้มีวัตถุประสงค์เพื่อนำเสนอทัศนียภาพอันยิ่งใหญ่ ทว่าเป็นการใช้ไวยากรณ์ภาพยนตร์เชิงรุก (Aggressive Cinematic Grammar) เพื่อสร้าง พื้นที่ว่างอันมืดมิด (Negative Space) หรือที่ในทางศิลปะเรียกว่าสภาวะ Dark Soul ทิ้งไว้ที่มุมขอบของเฟรมภาพเสมอ กลวิธีทางโสตทัศน์นี้คือการสร้างปรากฏการณ์ ภัยคุกคามที่มองไม่เห็น (Fear of the Unknown / Off-screen Threat) ซึ่งเป็นการบังคับให้ระบบประสาทและสติปัญญาของผู้ชมต้องทำงานอย่างหนัก ในการจินตนาการและเติมเต็มรูปทัพของความหวาดผวาลงไปในเงามืดนั้นด้วยตนเอง นับเป็นการประกอบสร้างความกลัวที่ทรงประสิทธิภาพ เพราะมันคือการย้ายฐานการผลิตความสยดสยองจากบนจอภาพยนตร์ เข้าสู่จิตใต้สำนึกของผู้ชมโดยสมบูรณ์
การขยายความใน Lesson 2 ของคุณนั้น ทรงพลังและเจาะลึกถึงแก่นแท้ของการสร้างตัวละคร (Character Arc) ได้อย่างยอดเยี่ยมครับ การมองข้ามเปลือกนอกของผีสางและเจาะลึกไปที่ ความบอบช้ำทางจิตใจ ถือเป็นหัวใจสำคัญของภาพยนตร์เรื่องนี้เลยทีเดียว
ผมได้นำโครงร่างของคุณมารังสรรค์ใหม่ด้วย ภาษาเขียนเชิงวิชาการ (Academic Prose) เพื่อให้สอดรับกับมาตรฐานของบทวิเคราะห์ทางจิตวิเคราะห์และทฤษฎีภาพยนตร์ที่เราทำไว้ในบทเรียนก่อนหน้าครับ`,
  },
  {
    lesson_id: 45,
    module_id: 7,
    lesson_name: `บาดแผลและภาพสะท้อนทางจิตเวช `,
    content: `จิตวิเคราะห์ของบาดแผลและภาพสะท้อนทางจิตเวช (Psychoanalysis of Trauma and Psychiatric Reflections)
ในมิติของการประกอบสร้างตัวละคร (Character Construction) ภาพยนตร์เรื่อง คน ผี ปีศาจ ปฏิเสธการจัดวางตัวละครให้อยู่ในฐานะเพียง เหยื่อ (Passive Victims) ของปรากฏการณ์เหนือธรรมชาติ ทว่าตัวละครแต่ละตัวทำหน้าที่เป็น ภาพแทน (Representation) ของ สภาวะจิตใจที่แตกสลาย (Fractured Psyche) ซึ่งเป็นผลพวงจากความรุนแรงเชิงโครงสร้างและสถาบันครอบครัว พฤติกรรมและความหวาดผวาที่ปรากฏบนจอภาพยนตร์ สามารถนำมาชำแหละและอธิบายผ่านเลนส์ทางจิตเวชวิทยาและจิตวิเคราะห์ได้ดังนี้:
อุ้ย (ปรากฏการณ์วิทยาของบาดแผลทางใจ - Phenomenology of PTSD): อุ้ยคือภาพแทนของผู้ที่ตกเป็นเหยื่อจากความรุนแรงเชิงโครงสร้าง (Structural Violence) บาดแผลทางใจขั้นรุนแรงจากการสูญเสียครอบครัว ทำให้เธอตกอยู่ในภาวะ ความผิดปกติที่เกิดหลังความเครียดที่สะเทือนใจ (Post-Traumatic Stress Disorder - PTSD) การพึ่งพายาระงับประสาทและยาคลายความกังวลอย่างต่อเนื่อง ทำให้การรับรู้โลกทัศน์ของเธอถูกบิดเบือน ภาพยนตร์ใช้สภาวะนี้สร้างกลไก ผู้เล่าเรื่องที่เชื่อถือไม่ได้ (Unreliable Narrator) ผู้ชมจะถูกบีบบังคับให้ตั้งคำถามอยู่ตลอดเวลาว่า ภัยคุกคามที่อยู่เบื้องหน้านั้นคือ ความจริงเชิงประจักษ์ (Objective Reality) หรือเป็นเพียง อาการหลอนประสาท (Hallucination) ที่เกิดจากปฏิกิริยาเคมีในสมองอันบอบช้ำของเธอเอง
ป้าบัว (สภาวะหลายบุคลิกและมายาคติการคลั่งลัทธิ - Dissociative Identity Disorder and Cultish Myths): พฤติกรรมที่แปรปรวนและคลุ้มคลั่งของป้าบัว สามารถถอดรหัสผ่านทฤษฎีจิตเวชศาสตร์ในฐานะผู้ป่วย โรคหลายบุคลิก (Dissociative Identity Disorder - DID) ภาพยนตร์นำเสนอพื้นที่ทับซ้อนและการปะทะสังสรรค์กันระหว่าง คำอธิบายทางวิทยาศาสตร์การแพทย์ กับ ความเชื่อเรื่องร่างทรงไสยศาสตร์ อย่างแหลมคม นัยยะที่ซ่อนอยู่คือการวิพากษ์สังคมไทยที่มักใช้ มายาคติทางความเชื่อ (Mythology of Beliefs) และไสยศาสตร์ เป็นผ้าคลุมเพื่อปิดบังและสร้างความชอบธรรมให้กับความผิดปกติทางจิตเวช (Mental Illness) รวมถึงใช้เป็นเครื่องมือเพื่อปกปิดร่องรอยของการทารุณกรรมในเคหสถาน (Domestic Abuse) ให้รอดพ้นจากการตรวจสอบของสังคม
อาร์ม (บาดแผลจากการทารุณกรรมเด็กและโรคกลัวพื้นที่เฉพาะ - Child Abuse Trauma and Spatial Phobia): อาร์มไม่ใช่เพียงเด็กที่มีพฤติกรรมหวาดกลัวความมืดตามวัย แต่ภาพสะท้อนของเขาคือร่องรอยบาดแผลที่เกิดจากการถูกทารุณกรรมในวัยเด็ก (Child Abuse) อาการหวาดผวาอย่างรุนแรงต่อ ตู้เสื้อผ้า หรือ ห้องน้ำ เป็นการแสดงออกของกลไกทางจิตวิทยาที่เรียกว่า การผูกติดความตื่นตระหนกกับสถานที่ (Trauma Anchoring) หรือ โรคกลัวพื้นที่เฉพาะเจาะจง (Spatial Phobia) จิตใต้สำนึกของเด็กได้ทำการเชื่อมโยงความกลัวที่มีต่อ ผู้ใหญ่ที่คอยกดขี่ข่มเหง เข้ากับ สถานที่เกิดเหตุ อาณาบริเวณเหล่านั้นจึงกลายเป็นสถาปัตยกรรมแห่งความทรงจำอันเลวร้าย ที่คอยกระตุ้นบาดแผลทางจิตใจ (Trigger) ของอาร์มให้ปะทุขึ้นมาซ้ำแล้วซ้ำเล่า`,
  },
  {
    lesson_id: 46,
    module_id: 7,
    lesson_name: `สุนทรียศาสตร์แห่งความน่าขยะแขยงและพื้นที่ทับซ้อน`,
    content: `สุนทรียศาสตร์แห่งความน่าขยะแขยงและพื้นที่ทับซ้อน (Aesthetics of the Abject and Liminal Spaces)
ในมิติของการสร้างประสบการณ์ร่วม (Immersive Experience) ภาพยนตร์เรื่อง คน ผี ปีศาจ ปฏิเสธการสร้างความตื่นตระหนกผ่านเพียงเสียงกึกก้องหรือการปรากฏตัวอย่างฉับพลัน (Jump Scare) แต่เลือกที่จะผลักดันและบีบบังคับผู้ชมให้ก้าวข้ามพรมแดนของความสยดสยอง ผ่านกลไกทางสัญวิทยาที่ว่าด้วย การล่วงละเมิดข้อห้าม (Transgression of Taboos) ซึ่งสามารถอธิบายผ่านทฤษฎีทางสุนทรียศาสตร์และจิตวิเคราะห์ได้ดังนี้:
สัญวิทยาของการบริโภคเครื่องในและพิธีกรรมวิปริต (Semiotics of Cannibalistic Rituals): พฤติกรรมของป้าบัวที่บีบบังคับให้อาร์มบริโภคตับและเครื่องในดิบ (ซึ่งแฝงนัยยะว่าเป็นอวัยวะของพี่สุดใจ) เป็นการทำงานโดยตรงกับทฤษฎี ความน่าขยะแขยง (The Abject) ของ Julia Kristeva ในทางปรัชญา The Abject คือปฏิกิริยาต่อต้านขั้นรุนแรงเมื่อมนุษย์ต้องเผชิญหน้ากับสิ่งที่ทำลายเส้นแบ่งระหว่าง ตัวตน (Subject) และ วัตถุ/ซากศพ (Object) การบังคับให้กลืนกินเครื่องในมนุษย์ด้วยกันเอง จึงเป็นการทำลายเส้นแบ่งทางมานุษยวิทยา (Anthropological boundary) ระหว่างอารยชนและความเป็นสัตว์ป่า (Primal Regression) ฉากนี้ไม่ได้มุ่งสร้างเพียงความกลัว แต่จงใจสถาปนาความขยะแขยงระดับรากเหง้า (Visceral Disgust) เพื่อสะท้อนถึงความวิปลาสของสถาบันครอบครัวที่กลืนกินสมาชิกของตนเองอย่างเลือดเย็น
ตำนานพี่สุดใจและการรุกรานพื้นที่ปลอดภัย (The Uncanny of the Kitchen Sink): ฉากการปรากฏตัวของวิญญาณพี่สุดใจที่คืบคลานออกมาจากใต้ซิงก์ล้างจาน (ซึ่งได้รับการยกย่องให้เป็นฉาก Masterpiece ของเรื่อง) ถือเป็นการประยุกต์ใช้ทฤษฎีจิตวิเคราะห์ว่าด้วย ความแปลกประหลาดที่คุ้นเคย (The Uncanny / Das Unheimliche) ของ Sigmund Freud ได้อย่างทรงพลานุภาพ ในเชิงสถาปัตยกรรม ซิงก์ล้างจาน คือสัญญะของสุขอนามัย (Hygiene) กิจวัตรประจำวัน และความเป็นปกติสุขในเคหสถาน ภาพยนตร์ได้ทำการรื้อถอน (Deconstruct) ความหมายเหล่านี้ โดยแทรกซึมและเปลี่ยนรูปพื้นที่ดังกล่าวให้กลายเป็น พื้นที่ทับซ้อน (Liminal Space) ที่เชื่อมโยงระหว่างโลกคนเป็นกับบ่อเกรอะอันโสโครกเบื้องล่าง การให้กำเนิดอสุรกายจากพื้นที่ที่ดูไร้พิษสงที่สุด คือการประกาศกร้าวถึงการพังทลายและทำลายล้าง พื้นที่ปลอดภัย (Safe Space) โดยสมบูรณ์แบบ มันเป็นการส่งสารทางจิตวิทยาว่า ภัยคุกคามที่แท้จริงไม่ได้ซ่อนอยู่ในป่าช้าหรือสถานที่ห่างไกล แต่อาจกำลังคืบคลานอยู่ใต้ฝ่าเท้าในบ้านของเราเอง`,
  },
  {
    lesson_id: 47,
    module_id: 7,
    lesson_name: `บ่อนทำลายความจริงและวาทกรรมทางสังคม`,
    content: `การบ่อนทำลายความจริงและวาทกรรมทางสังคมการเมือง (Cognitive Subversion and Socio-Political Allegory)
ชั้นเชิงสูงสุดของภาพยนตร์ คน ผี ปีศาจ มิได้หยุดอยู่เพียงการกระตุ้นความสยดสยองในระดับปัจเจกบุคคลและพื้นที่ส่วนตัว (Private Sphere) แต่ก้าวล่วงไปสู่การทำงานในฐานะ อุปมานิทัศน์ (Allegory) ทางการเมืองที่แหลมคม การซ่อนวาทกรรมวิพากษ์สังคม (Social Critique Discourse) ไว้ภายใต้เปลือกนอก (Façade) ของภาพยนตร์แนวสยองขวัญ ถือเป็นยุทธวิธีทางภาพยนตร์ที่สามารถชำแหละประเด็นเหล่านี้ออกมาได้อย่างทรงพลัง:
การพังทลายของการรับรู้และการรื้อสร้างภววิทยา (Cognitive Dissonance and the Deconstruction of Ontology):
จุดหักมุม (Plot Twist) ในช่วงท้ายที่เฉลยว่าป้าบัวได้เสียชีวิตจากอุบัติเหตุไปตั้งแต่เวลา 18:00 น. มิได้ทำหน้าที่เพียงสร้างความตระหนกแบบผิวเผิน (Shock Value) ทว่าเป็นการ รื้อสร้าง (Deconstruction) ความจริงทางภววิทยา (Ontological Reality) ของเรื่องเล่าทั้งหมดทิ้งไป กลวิธีนี้ทำหน้าที่กระชากพรมแห่งความรับรู้ บีบบังคับให้ทั้งตัวละครและผู้ชมต้องเผชิญกับภาวะช็อกทางญาณวิทยา (Epistemological Shock) และตกอยู่ในสภาวะ ความไม่ลงรอยกันทางปัญญา (Cognitive Dissonance) อย่างรุนแรง เมื่อตระหนักว่าการดิ้นรนเอาชีวิตรอด การหลบหนี และการปะทะกันทางกายภาพที่กินเวลาตลอดทั้งคืนนั้น แท้จริงแล้วคือการต่อสู้กับภาพลวงตาที่ไม่มีตัวตนทางกายภาพ (Non-physical entity) เป็นการตอกย้ำว่าภาพหลอนจากความหวาดระแวงนั้น มีอำนาจควบคุมมนุษย์ได้เหนือกว่าความจริงเชิงประจักษ์
รัฐในฐานะอสุรกายสัมบูรณ์และความรุนแรงเชิงโครงสร้าง (The State as the Ultimate Monster and Structural Violence):
บทสรุปของภาพยนตร์ทิ้งทวนด้วยนัยยะอันหนาวเหน็บ เมื่อความจริงเบื้องหลังการเสียชีวิตยกครัวของครอบครัวอุ้ย ถูกเปิดเผยว่ามีความเชื่อมโยงกับ นโยบายทำสงครามยาเสพติด (War on Drugs) และวาทกรรมการฆ่าตัดตอน (Extrajudicial Killings) ในยุคสมัยนั้น สัญญะชิ้นสุดท้ายนี้เป็นการพลิกกลับความหมายของชื่อเรื่องอย่างสิ้นเชิง ภาพยนตร์กำลังสื่อสารว่า ท้ายที่สุดแล้ว วิญญาณร้าย หรือ ปีศาจ (Monsters) ที่น่าสะพรึงกลัวและสร้างบาดแผลที่หยั่งรากลึกที่สุดในสังคมไทย มิใช่สัมภเวสีหรือผีสางเทวดา หากแต่เป็น อำนาจรัฐ และ ความรุนแรงเชิงโครงสร้าง (Structural Violence) ที่สามารถบดขยี้ ทำลายล้าง และพรากชีวิตของประชาชนคนธรรมดาไปได้อย่างไร้ความปรานีและปราศจากความรับผิดชอบ (Impunity) นัยยะนี้ผลักดันให้ภาพยนตร์กลายเป็นจดหมายเหตุทางประวัติศาสตร์ที่บันทึกความโหดร้ายของรัฐผ่านเลนส์ของความสยดสยองได้อย่างสมบูรณ์`,
  },
  {
    lesson_id: 48,
    module_id: 7,
    lesson_name: `ทัศนศิลป์และสุนทรียศาสตร์แห่งการเล่าเรื่อง `,
    content: ` ทฤษฎีทางทัศนศิลป์และสุนทรียศาสตร์แห่งการเล่าเรื่อง (Visual Art Theories and the Aesthetics of Storytelling)
นอกเหนือจากมิติทางจิตวิเคราะห์และสังคมวิทยาแล้ว ไวยากรณ์ภาพยนตร์ (Cinematic Grammar) ของ คน ผี ปีศาจ ยังถูกขับเคลื่อนด้วย ทฤษฎีทางทัศนศิลป์ (Visual Art Theories) ที่ถูกนำมาประยุกต์ใช้เพื่อสร้างสัญญะและบงการอารมณ์ผู้ชม การออกแบบภาพและศิลป์ในเรื่องนี้สามารถถอดรหัสผ่านกระแสเคลื่อนไหวทางศิลปะที่สำคัญได้ดังนี้:
ลัทธิสำแดงพลังอารมณ์แบบเยอรมันและการสะท้อนภูมิทัศน์ภายใน (German Expressionism and Internal Landscapes):
ภาพยนตร์ได้รับอิทธิพลอย่างหนักจากทฤษฎีศิลปะแบบ Expressionism ซึ่งปฏิเสธการจำลองภาพความจริงแบบตรงไปตรงมา (Objective Reality) แต่เลือกที่จะบิดเบือนรูปทรง เส้นสาย และสัดส่วนทางสถาปัตยกรรม เพื่อสะท้อน ภูมิทัศน์ภายในจิตใจ (Internal Landscape) ที่บิดเบี้ยวของตัวละคร การใช้มุมกล้องที่เอียงผิดธรรมชาติ (Dutch Angle) และการออกแบบฉากโรงพิมพ์ให้ดูซับซ้อนราวกับเขาวงกตที่ไร้ระเบียบ เป็นการประกอบสร้างเชิงทัศนศิลป์เพื่อสะท้อนความวิกลจริตของป้าบัว และสภาวะความแตกสลายทางจิตใจของอุ้ย โลกทางกายภาพในภาพยนตร์จึงทำหน้าที่เป็นเพียง กระจกสะท้อน (Psychological Projection) ความหวาดผวาที่อยู่เบื้องลึกในจิตใต้สำนึกของมนุษย์
จิตรกรรมแห่งแสงและสุนทรียศาสตร์แบบคิอาโรสคูโร (Painting with Light and the Aesthetics of Chiaroscuro):
ในการจัดแสง (Lighting Design) ภาพยนตร์เลือกใช้เทคนิค คิอาโรสคูโร (Chiaroscuro) ซึ่งเป็นทฤษฎีศิลปะยุคเรอเนสซองส์และบารอก ที่เน้นการสร้างความเปรียบต่างขั้นสุด (High Contrast) ระหว่าง ความสว่างจัด และ ความมืดมิด ใน คน ผี ปีศาจ แสงสว่างมิได้ทำหน้าที่เพียงการให้ความชัดเจนในการมองเห็น ทว่าแสงคือ ทรัพยากรที่หายากและจำกัด ความมืดถูกนำเสนอในฐานะ มวลสาร (Mass) ที่มีน้ำหนัก สามารถกลืนกินและกดทับตัวละครได้ การปล่อยให้ครึ่งหนึ่งของใบหน้าตัวละครหรือฉากหลังจมหายไปในเงามืดดำสนิท เป็นการใช้ทฤษฎีศิลปะเพื่อปูพรมให้ความกลัวต่อสิ่งลี้ลับ (Fear of the Unknown) ได้เข้ามาทำหน้าที่ของมันอย่างสมบูรณ์
ลัทธิเหนือจริงและสภาวะกึ่งหลับกึ่งตื่นของโครงสร้างเรื่องเล่า (Surrealism and the Liminality of Narrative Structure):
ภาพยนตร์ยังหยิบยืมไวยากรณ์จาก ลัทธิเหนือจริง (Surrealism) มาใช้ในการออกแบบเส้นเรื่อง โดยเฉพาะในฉากที่อุ้ยตกอยู่ในสภาวะฤทธิ์ยา หรือฉากการไล่ล่าในช่วงท้าย ศิลปะแบบเหนือจริงมุ่งเน้นการปลดปล่อยพลังของ จิตไร้สำนึก (The Unconscious) ผ่านภาพความฝันและภาพหลอนที่ไร้ตรรกะเหตุผล
การผสานภาพความเป็นจริงเข้ากับภาพวิญญาณสยดสยองที่คลานออกมาจากใต้ซิงก์ล้างจาน หรือการทำลายเส้นเวลา (Timeline) ให้บิดเบี้ยว เป็นการใช้สุนทรียศาสตร์แบบ Surrealism เพื่อละลายเส้นแบ่งระหว่าง ความจริงเชิงประจักษ์ และ มายาคติ บีบบังคับให้ผู้ชมตกอยู่ในสภาวะกึ่งหลับกึ่งตื่น (Liminal State) ไม่สามารถใช้ตรรกะทางวิทยาศาสตร์มารองรับสิ่งที่เห็นบนจอภาพยนตร์ได้อีกต่อไป`,
  },
  {
    lesson_id: 49,
    module_id: 7,
    lesson_name: `ส่งท้ายก่อนถอดรหัส`,
    content: `จากการพิจารณาประเด็นทางศาสตร์และศิลป์ผ่านเลนส์ของจิตวิเคราะห์ ทฤษฎีบาดแผลทางใจ (Trauma Theory) และอุปมานิทัศน์ทางการเมือง (Political Allegory) เราจะเห็นได้ว่า คน ผี ปีศาจ (พ.ศ. 2547) มิได้เป็นเพียงภาพยนตร์สยองขวัญเหนือธรรมชาติที่มุ่งเน้นการสร้างความตื่นตระหนกดาษดื่นเท่านั้น แต่เป็นบทวิพากษ์ทางสังคมการเมืองที่เปลื้องผ้า ความรุนแรงเชิงโครงสร้าง และ สภาวะจิตใจที่แตกสลายอันเกิดจากอำนาจมืด ศาสตร์แห่งการประกอบสร้างภาพยนตร์และไวยากรณ์โสตทัศน์ที่แยบยล ทั้งการใช้สัญญะของ ซิงก์ล้างจาน ในฐานะพื้นที่ทับซ้อนที่ล่วงละเมิดความปลอดภัยของเคหสถาน (The Uncanny) การสร้างภูมิศาสตร์แห่งความอึดอัดภายในตึกแถวปิดตาย (Claustrophobic Architecture) ตลอดจนการบ่อนทำลายความจริงผ่านสภาวะการรับรู้ที่บิดเบี้ยวของตัวละคร ต่างทำงานร่วมกันอย่างมีนัยสำคัญเพื่อส่งสารอันเจ็บปวดว่า:
> การดิ้นรนเอาชีวิตรอดในโรงพิมพ์ร้างแห่งนี้ คือจดหมายเหตุของบาดแผลทางใจที่ก้าวข้ามขีดจำกัดของการกดขี่ วิญญาณอาฆาตและปีศาจในคราบมนุษย์ที่ปรากฏ มิใช่เพียงภัยคุกคามจากมิติเร้นลับ หากแต่เป็นภาพสะท้อนของความโหดร้ายปฐมภูมิอันเกิดจากการใช้อำนาจรัฐอย่างป่าเถื่อน (State Violence) และการทารุณกรรมที่ถูกซุกซ่อนอยู่ใต้พรมแห่งไสยศาสตร์ และมันจะยังคงแทรกซึมเป็นฝันร้ายเพื่อทวงถามถึงความยุติธรรมที่สูญหาย จนกว่ามายาคติแห่งความเชื่อจะถูกรื้อถอน และโศกนาฏกรรมของเหยื่อผู้ไร้เสียงจะได้รับการตระหนักรู้และชำระล้างอย่างแท้จริง
> 
บทวิเคราะห์ศาสตร์และศิลป์ที่ปรากฏในบทเรียนทั้งหมดนี้ เป็นการถอดรหัสและตีความผ่านมุมมองทางจิตวิเคราะห์ (Psychoanalysis) และสังคมวิทยาการเมือง โดยอาศัยทฤษฎีทางสุนทรียศาสตร์ภาพยนตร์มาเป็นแกนกลาง ทั้งนี้ ข้อสรุปทั้งหมดถือเป็นทัศนะและการวิเคราะห์เชิงวิพากษ์ส่วนบุคคล ซึ่งมุ่งเน้นไปที่การแสวงหาความหมายแฝงที่ซ่อนอยู่ในสถาปัตยกรรมทางเรื่องเล่าและองค์ประกอบศิลป์ของภาพยนตร์เท่านั้น เพื่อเป็นแนวทางเบื้องต้นในการชี้ให้เห็นว่า ภาษาภาพยนตร์สยองขวัญเชิงจิตวิทยา สามารถทำงานร่วมกับบาดแผลแห่งยุคสมัยและความบิดเบี้ยวของโครงสร้างอำนาจได้อย่างสั่นสะเทือนโสตประสาทและทรงพลังสืบไป`,
  },
  {
    lesson_id: 50,
    module_id: 8,
    lesson_name: `ก่อ่นจะถอดรหัส`,
    content: `เมื่อหน้าแรกของหนังสือพิมพ์ กลายเป็นสคริปต์ภาพยนตร์สยองขวัญ
ในอุตสาหกรรมภาพยนตร์สยองขวัญไทย "ตายโหง" (พ.ศ. 2553) ถือเป็นหมุดหมายที่ท้าทายศีลธรรมและจรรยาบรรณของการเล่าเรื่อง (Narrative Ethics) อย่างยิ่งยวด ด้วยการใช้โครงสร้างแบบภาพยนตร์รวมเรื่องสั้น (Anthology Film) ที่ดัดแปลงมาจาก "อาชญากรรมและโศกนาฏกรรมที่เกิดขึ้นจริง" ภาพยนตร์เรื่องนี้จึงมิได้ทำหน้าที่เพียงแค่กระตุ้นอะดรีนาลีนแห่งความกลัว แต่กำลังสถาปนาตนเองเป็น "จดหมายเหตุแห่งความรุนแรง" (Archive of Violence) ที่บันทึกความบอบช้ำร่วมของสังคมไทย (Collective Trauma) ผ่านการชำแหละกายวิภาคของความตาย 4 รูปแบบ ดังต่อไปนี้
เพื่อเติมเต็มบทวิเคราะห์ของ ตอน "ซานติฆ่า" ให้สมบูรณ์แบบในระดับโครงสร้างทางภาพยนตร์ (Cinematic Structure) ผมได้ทำการผสาน "ไวยากรณ์ทางโสตทัศน์" (Audio-Visual Grammar) ซึ่งประกอบด้วย แสง สี เสียง และมุมกล้อง เข้าไปเป็นส่วนหนึ่งของบทความวิชาการนี้ เพื่อชี้ให้เห็นว่าผู้กำกับใช้เครื่องมือเหล่านี้ในการ "บงการจิตใต้สำนึก" ของผู้ชมอย่างไร`,
  },
  {
    lesson_id: 51,
    module_id: 8,
    lesson_name: `ภววิทยา`,
    content: `ภววิทยาแห่งความตายฉับพลัน สภาวะปฏิเสธความจริง และไวยากรณ์ทางโสตทัศน์ (Ontology of Abrupt Death, Denial, and Audio-Visual Grammar)
บริบทศึกษา: ตอน "ซานติฆ่า" (วาทกรรมภาพยนตร์จากโศกนาฏกรรมเพลิงไหม้ซานติก้า ผับ)
1. โครงสร้างเรื่องเล่าและสภาวะปฏิเสธความจริง (Narrative Structure and the State of Denial)
ในทางจิตวิเคราะห์ สภาวะที่ "อาร์ม" ดำเนินชีวิตประจำวันในคอนโดมิเนียมโดยปราศจากการตระหนักรู้ถึงมรณกรรมของตนเอง ถือเป็นภาพแทนของ "สภาวะการปฏิเสธความจริง" (Denial) เมื่อมนุษย์ต้องเผชิญกับบาดแผลฉับพลัน (Abrupt Trauma) ที่รุนแรงเกินกว่าสมองจะประมวลผล จิตใต้สำนึกจึงสร้าง "ความจริงประดิษฐ์" (Artificial Reality) ขึ้นมาเป็นเกราะกำบัง เพื่อรองรับสภาวะกึ่งกลาง (Liminality) ระหว่างคนเป็นและคนตาย ภาพยนตร์ได้ประกอบสร้างสภาวะทางจิตวิทยานี้ผ่านองค์ประกอบทางศิลปะภาพยนตร์อย่างแยบยล ดังนี้:
2. สุนทรียศาสตร์ของการจัดแสงและจิตวิทยาของสี (Aesthetics of Lighting and Color Psychology)
ภาพยนตร์ใช้สีและแสงเป็นสัญญะ (Signifier) ในการแบ่งแยกเส้นแบ่งของความจริงและโลกหลังความตาย:
การปะทะกันของอุณหภูมิสี (Color Temperature Clash): ผู้กำกับจงใจสร้างความขัดแย้งทางสายตา ระหว่าง "สีแดงฉานและสีส้ม" ของเปลวเพลิงในผับ ซึ่งเป็นสัญญะของความตายที่รุนแรง นรกานต์ และความโกลาหล ปะทะกับ "สีฟ้าอมเทา" (Cyan/Cold Blue) ภายในคอนโดมิเนียมของอาร์ม สีฟ้าเย็นเยียบนี้ทำหน้าที่ลดทอนความเป็นมนุษย์ (Dehumanization) สร้างบรรยากาศของความโดดเดี่ยว และเป็นการบอกใบ้ทางจิตวิทยาว่าพื้นที่นี้คือ "โลกแห่งความตายที่หนาวเหน็บ"
แสงกะพริบและเงามืด (Flickering Lights and Chiaroscuro): การจัดแสงในคอนโดเน้นพื้นที่ว่างอันมืดมิด (Negative Space) แสงไฟที่กะพริบติดๆ ดับๆ ไม่ได้ทำหน้าที่เพียงสร้างความตระหนกตกใจ (Jump Scare) แต่เป็นภาพสะท้อนทางทัศนศิลป์ของ "สติสัมปชัญญะที่กำลังแตกสลาย" และความไม่เสถียรของวิญญาณที่กำลังจะถูกความจริงกลืนกิน
3. วากยสัมพันธ์ของมุมกล้อง (Syntax of Camera Angles)
การเลือกใช้ขนาดภาพและมุมกล้อง ทำหน้าที่เป็น "กรงขังทางสายตา" ที่บีบคั้นทั้งตัวละครและผู้ชม:
มุมกล้องบีบคั้นและพื้นที่ปิดตาย (Claustrophobic Framing): เมื่อเรื่องราวย้ายมาสู่คอนโดมิเนียม กล้องมักจะถูกวางในพื้นที่แคบ ผ่านกรอบประตู หรือมุมห้อง การจัดองค์ประกอบภาพเช่นนี้สร้างความรู้สึกอึดอัด ไร้ทางหนี สอดรับกับสภาวะที่วิญญาณถูกจองจำ
มุมเอียงผิดธรรมชาติ (Dutch Angle) และภาพแทนสายตา (POV): การใช้มุมกล้องที่เอียงไม่ได้ระนาบในฉากที่อาร์มเริ่มเห็นภาพหลอน เป็นการทำลายสมดุลทางสายตา (Visual Imbalance) เพื่อบังคับให้ผู้ชมก้าวเข้าไปอยู่ในสภาวะความผิดปกติทางจิต (Psychosis) ของตัวละคร เราถูกบังคับให้มองเห็นโลกที่บิดเบี้ยวผ่านสายตาของคนตายที่ไม่ยอมรับความตายของตนเอง
4. การออกแบบโสตศิลป์และภูมิทัศน์ทางเสียงเชิงจิตวิทยา (Audio Design and Psychological Soundscape)
เสียงในตอนนี้มิได้เป็นเพียงส่วนประกอบรอง แต่เป็นเครื่องมือหลักในการ "เจาะทะลวง" เกราะป้องกันทางจิตของตัวละคร:
ความเงียบสงัดที่ทิ่มแทง (Deafening Silence): ภายหลังความอึกทึกในผับ ภาพยนตร์ใช้ "ความเงียบ" ในคอนโดมิเนียมเป็นอาวุธ ความเงียบที่ผิดธรรมชาตินี้สร้างความรู้สึกแปลกแยก (Alienation)
เสียงหลอนจากจิตใต้สำนึก (Auditory Hallucinations): การแทรกเสียงไฟปะทุ (Crackling fire) เสียงไซเรน และเสียงกรีดร้องที่ดังก้องขึ้นมาท่ามกลางความเงียบ คือการทำงานของ Trauma ที่พยายามทะลักล้นออกมาจากการกดทับ (Repression) ดนตรีประกอบ (Musical Score) ที่เน้นเสียงความถี่ต่ำ (Low-frequency drone) ทำหน้าที่สร้างความสั่นสะเทือนในระดับโสตประสาท เพื่อกระตุ้นความรู้สึกไม่ปลอดภัย (Unease) ให้ฝังรากลึกตลอดการรับชม
`,
  },
  {
    lesson_id: 52,
    module_id: 8,
    lesson_name: ` สถาปัตยกรรมแห่งการลงทัณฑ์`,
    content: ` สถาปัตยกรรมแห่งการลงทัณฑ์ จิตใต้สำนึกที่บีบคั้น และไวยากรณ์ทางโสตทัศน์ (Architecture of Penance, the Punishing Superego, and Audio-Visual Grammar)
บริบทศึกษา: ตอน "คุกกองปราบ" (วาทกรรมภาพยนตร์จากตำนานผีชุดแดงในห้องขัง)
1. โครงสร้างเรื่องเล่าและสถาปัตยกรรมเชิงจิตวิเคราะห์ (Narrative Structure and Psychoanalytic Architecture) เรื่องราวของ "ก้อง" ชายหนุ่มที่ถูกส่งตัวเข้าห้องขังและต้องเผชิญหน้ากับวิญญาณ "ชายเสื้อแดง" ที่คอยปั่นประสาทให้เขาปลิดชีพตนเอง ทำงานสอดรับกับแนวคิด "Panopticon" (สถาปัตยกรรมแห่งการเฝ้าระวัง) ของ Michel Foucault อย่างไรก็ตาม ภาพยนตร์ได้ทำการรื้อโครงสร้าง (Deconstruct) แกนกลางของทฤษฎีนี้ จากเดิมที่นักโทษถูกเฝ้ามองโดยอำนาจรัฐหรือผู้คุม เปลี่ยนมาเป็นการ "ถูกเฝ้ามองโดยบาปของตนเอง" วิญญาณชายชุดแดงและหญิงชุดแดง แท้จริงแล้วคือบุคลาธิษฐาน (Personification) ของ "อภิอัตตา" (Superego) หรือมโนธรรมสำนึกในจิตใจของก้องที่ตีกลับมาทำหน้าที่ลงทัณฑ์ตัวเขาเองจากความผิดฐานข่มขืนฆ่าในอดีต การผูกคอตายในพื้นที่ปิดตายนี้ จึงมิใช่การปลดแอก (Liberation) หรือการหลบหนีทางกายภาพ แต่เป็นการจำนนอย่างสมบูรณ์ต่ออำนาจการพิพากษาทางจิตวิทยา ที่เขาสร้างขึ้นมาจองจำตนเองไปตลอดกาล
ภาพยนตร์ได้สถาปนาสภาวะบีบคั้นนี้ให้เป็นรูปธรรม ผ่านองค์ประกอบทางศิลปะภาพยนตร์ ดังนี้:
2. สัญวิทยาของสีและสุนทรียศาสตร์แห่งการจัดแสง (Semiotics of Color and Aesthetics of Lighting)
นัยยะของสีแดง (The Symbolism of Red): ผู้กำกับใช้สีแดงของเสื้อผ้าวิญญาณอย่างมีนัยสำคัญ ในทางจิตวิทยาและสัญวิทยา สีแดงมิได้เป็นเพียงตัวแทนของเลือดหรือความตายน่าสยดสยอง แต่คือ "สีแห่งความตื่นตัวทางอารมณ์ขั้นสุด" (Hyper-arousal) มันสะท้อนถึงกิเลสตัณหาปฐมภูมิ (การข่มขืน) และตราบาปที่ไม่อาจลบล้างได้ สีแดงทำหน้าที่ทิ่มแทงสายตาของผู้ชมและตัวละคร ตัดกับโทนสีทึมเทาของคุก เพื่อกระตุ้นบาดแผลทางใจ (Trigger) ให้ปะทุขึ้นมาอย่างรุนแรง
แสงฟลูออเรสเซนต์อันแข็งกระด้าง (Harsh Fluorescent Lighting): การใช้แสงสว่างจ้าจากหลอดไฟนีออนบนเพดานห้องขัง เป็นการจัดแสงแบบไร้ความปรานี (Unforgiving light) แสงนี้ลบเลือนความอบอุ่น ลิดรอนความเป็นมนุษย์ (Dehumanization) และสร้างสภาวะที่ตัวละคร "ไม่มีมุมมืดให้หลบซ่อน" จากความผิดของตนเอง มันคือแสงสว่างแห่งการสอบสวนที่เปลื้องผ้าความชั่วร้ายในจิตใจให้ปรากฏชัด
3. วากยสัมพันธ์ของมุมกล้องและกรอบภาพจองจำ (Syntax of Camera Angles and Imprisoning Frames)
การตีกรอบซ้อนกรอบ (Frame within a Frame): ไวยากรณ์ภาพที่ถูกใช้อย่างสม่ำเสมอคือการถ่ายภาพก้องผ่าน "ซี่ลูกกรง" เงาของลูกกรงที่พาดผ่านใบหน้าและร่างกาย ทำหน้าที่เป็นเส้นสายทางทัศนศิลป์ที่ขีดเขียนทับลงบนตัวตนของเขา บ่งบอกถึงการถูกจองจำทั้งทางกายภาพและระดับจิตวิญญาณ
มุมกล้องกดต่ำ (High Angle Shot): การวางกล้องในมุมสูงเพื่อกดทับตัวละครก้องให้ดูตัวเล็กลงเมื่ออยู่ในห้องขัง เป็นการสร้าง "ความรู้สึกไร้พลัง" (Powerlessness) มนุษย์ดูจ้อยร่อยเมื่อต้องเผชิญหน้ากับสถาปัตยกรรมแห่งอำนาจรัฐ (คุก) และสถาปัตยกรรมแห่งความรู้สึกผิดในจิตใจตนเอง
4. ภูมิทัศน์ทางเสียงแห่งความหลอนประสาท (Psychological Soundscape and Auditory Hallucinations)
เสียงก้องกังวานในพื้นที่ปิด (Reverberation of Confinement): การออกแบบเสียงในตอนนี้เน้นการสะท้อน (Echo) ของหยดน้ำ เสียงฝีเท้า และเสียงโลหะกระทบกัน ความก้องกังวานนี้ยิ่งตอกย้ำความว่างเปล่าและความโดดเดี่ยวของพื้นที่
เสียงกระซิบจากบาปในใจ (The ASMR of Guilt): เสียงพูดของวิญญาณชายชุดแดงที่มักจะมาในรูปแบบของเสียงกระซิบหรือการพูดด้วยโทนเสียงยั่วล้อ แท้จริงแล้วคือ เสียงสะท้อนจากความพังทลายภายใน (Internal Monologue) ที่ถูกทำให้เป็นรูปธรรมทางโสตประสาท มันทำหน้าที่กัดกร่อนสติสัมปชัญญะของตัวละครทีละน้อย จนนำไปสู่การแตกสลายโดยสมบูรณ์ในท้ายที่สุด`,
  },
  {
    lesson_id: 53,
    module_id: 8,
    lesson_name: `ไวยากรณ์ทางโสตทัศน์ `,
    content: ` สุนทรียศาสตร์แห่งความแปดเปื้อน การรุกล้ำทางชีวภาพ และไวยากรณ์ทางโสตทัศน์ (Aesthetics of Contamination, Biological Intrusion, and Audio-Visual Grammar)
บริบทศึกษา: ตอน "ศพในแทงค์น้ำ" (วาทกรรมภาพยนตร์จากคดีฆ่าหมกแทงค์น้ำ)
ปฐมบท: ภูมิศาสตร์สังคมของพื้นที่เช่าและความเปราะบางของคนชายขอบ (Prologue: Social Geography of Rented Spaces and Marginalized Vulnerability) ก่อนจะพิจารณาถึงความน่าขยะแขยงทางชีวภาพ เราต้องถอดรหัส "สถาปัตยกรรม" ของสถานที่เกิดเหตุกันก่อน หอพักราคาถูกและแทงค์น้ำบนดาดฟ้าในเรื่องนี้ มิได้ทำหน้าที่เป็นเพียงฉากหลัง (Backdrop) แต่เป็น "พื้นที่ทางสังคม" (Social Space) ที่สะท้อนวิถีชีวิตและข้อจำกัดของชนชั้นแรงงานในเมืองหลวง
การออกแบบพื้นที่เช่าที่แออัด บังคับให้ผู้คนแปลกหน้าต้องพึ่งพาทรัพยากรส่วนรวม (Shared Resources) อย่างหลีกเลี่ยงไม่ได้ ซึ่งในกรณีนี้คือ "สายน้ำจากแทงค์เดียวกัน" ตัวละคร "ปู" (ชายหูหนวกผู้เดินยา) และ "จ้อย" (หญิงสาวขี้ขโมย) ต่างก็เป็นภาพแทนของกลุ่มคนชายขอบ (The Marginalized) ที่ถูกผลักให้อยู่จุดต่ำสุดของห่วงโซ่สังคม การฆาตกรรมที่เกิดขึ้นเพื่อแย่งชิงผลประโยชน์เล็กๆ น้อยๆ และนำไปซุกซ่อนไว้ในสาธารณูปโภคส่วนรวม จึงเป็นวาทกรรมที่สื่อว่า "ความรุนแรงของชนชั้นล่างที่ถูกรัฐทอดทิ้ง สุดท้ายแล้วจะย้อนกลับมาแปดเปื้อนและทำลายระบบนิเวศของพวกเขากันเอง"
1. โครงสร้างเรื่องเล่าและทฤษฎีความน่าขยะแขยง (Narrative Structure and The Theory of the Abject) เรื่องราวของ "ปู" ชายหูหนวกที่นำศพ "จ้อย" ไปซุกซ่อนในแทงค์น้ำบนดาดฟ้า นำเสนอความสยองขวัญที่ก้าวข้ามการหลอกหลอนทางวิญญาณ ไปสู่ "สุนทรียศาสตร์แห่งความแปดเปื้อน" (Aesthetics of Contamination) ตอนนี้คือการทำงานอย่างจะแจ้งกับทฤษฎี ความน่าขยะแขยง (The Abject) ของ Julia Kristeva
ในทางสัญวิทยา (Semiotics) "น้ำ" คือตัวแทนของความสะอาด สุขอนามัย และการหล่อเลี้ยงชีวิต การนำศพ (ซึ่งเป็นตัวแทนสูงสุดของสิ่งปฏิกูลและความเสื่อมสลาย) ไปปะปนในแหล่งน้ำ คือการพังทลายเส้นแบ่ง (Boundary Breakdown) ระหว่างสิ่งที่สะอาดและสิ่งที่แปดเปื้อน ความสยดสยองขั้นสุดขีดไม่ได้เกิดจากจังหวะผีหลอก (Jump Scare) แต่เกิดจากภาวะน่าสะอิดสะเอียนทางชีวภาพ (Biological Horror) เมื่อผู้ชมและตัวละครตระหนักว่า "ความตายและซากศพได้ถูกกลืนกินและซึมซับเข้าสู่ร่างกาย" ผ่านกิจวัตรประจำวันที่ดูปลอดภัยที่สุดอย่างการอาบน้ำ แปรงฟัน หรือดื่มน้ำ มันคือการรุกล้ำพื้นที่ศักดิ์สิทธิ์ภายในร่างกายมนุษย์อย่างสมบูรณ์
2. สัญวิทยาของสีและสุนทรียศาสตร์แห่งความเสื่อมสลาย (Semiotics of Color and Aesthetics of Decay)
โทนสีเขียวอมเหลืองแห่งความป่วยไข้ (Sickly Green and Jaundice Yellow): ภาพยนตร์ใช้จิตวิทยาของสีเพื่อสร้างความรู้สึกไม่สบายตัว (Unease) โดยการย้อมภาพรวมของหอพักและน้ำที่ไหลออกมาให้เจือด้วยสีเขียวและเหลืองหม่น สีเหล่านี้ในทางทัศนศิลป์คือสัญญะของ "ความเน่าเฟะ" (Putrefaction) สนิม เชื้อโรค และความเจ็บป่วยทางกายภาพ มันทำหน้าที่ส่งสัญญาณเตือนภัยล่วงหน้าให้จิตใต้สำนึกของผู้ชมรู้สึกถึงความไม่ปลอดภัยของสภาพแวดล้อม
ความทึบแสงและมลทิน (Opacity and Impurity): น้ำในเรื่องไม่ได้ใสสะอาด แต่มีความขุ่นมัว การเล่นกับ "องค์ประกอบที่มองไม่เห็นชัดเจน" ภายใต้น้ำขุ่น เป็นการกระตุ้นความตระหนกต่อสิ่งแปลกปลอม (Fear of the Unknown)
3. วากยสัมพันธ์ของมุมกล้องและพื้นที่แห่งความขยะแขยง (Syntax of Camera Angles and Spaces of Disgust)
ภาพโคลสอัพสุดขีด (Extreme Close-Up): ผู้กำกับจงใจใช้ภาพขนาดใกล้ชิดเพื่อจับจ้องไปที่หยดน้ำ ก๊อกน้ำ เส้นผมที่ปนเปื้อน และผิวหนังของตัวละครขณะอาบน้ำ การบังคับให้ผู้ชมมองเห็น "ความสกปรก" ในระยะประชิด เป็นการสร้างความขยะแขยงทางสายตา (Visceral Disgust) ทำให้เรารู้สึกเหมือนความแปดเปื้อนนั้นกำลังสัมผัสร่างกายของเราเอง
มุมมองจากภายในแทงค์ (Inside the Abject Womb): แทงค์น้ำถูกนำเสนอในฐานะ "ครรภ์มารดาที่วิปลาส" (Monstrous Womb) กล้องมักจะจำลองมุมมองจากภายในแทงค์น้ำที่มืดมิดและคับแคบ สร้างสภาวะความอึดอัด (Claustrophobia) และตอกย้ำว่าต้นกำเนิดของสายน้ำที่ทุกคนใช้นั้น มาจากโลงศพเหล็กที่กักขังความตายเอาไว้
4. ภูมิทัศน์ทางเสียงแห่งความน่าสะอิดสะเอียนและสภาวะหูหนวก (Soundscape of Revulsion and Deafness)
เสียงของความเน่าเปื่อย (ASMR of Decay): ในขณะที่ตาเห็นความขุ่นมัว โสตประสาทของผู้ชมถูกรุกล้ำด้วยการขยายเสียง (Amplify) กิจวัตรประจำวันให้ดังผิดปกติ เช่น เสียงกลืนน้ำ เสียงกลั้วคอ เสียงน้ำหยดแหมะ และเสียงเนื้อที่เปื่อยยุ่ย เสียงเหล่านี้ทำงานโดยตรงกับระบบประสาทอัตโนมัติ กระตุ้นปฏิกิริยาอยากอาเจียน (Gag reflex) ของผู้ชม
ความเงียบสัมบูรณ์ของฆาตกร (The Absolute Silence of the Killer): ความย้อนแย้งที่ทรงพลังที่สุดคือการที่ตัวละคร "ปู" เป็นคนหูหนวก ภาพยนตร์สลับไปใช้มุมมองเสียงแบบ Subjective (ความเงียบงัน) เมื่อตัดรับภาพปู การที่ฆาตกรไม่ได้ยินเสียงความสยดสยองที่ตนเองก่อขึ้น สะท้อนถึง "การตัดขาดจากมโนธรรมสำนึก" (Moral Disconnection) ในขณะที่ผู้ชมและเหยื่อรายอื่นๆ ต้องทนทุกข์ทรมานกับเสียงแห่งความตายเหล่านั้นอย่างหลีกเลี่ยงไม่ได้`,
  },
  {
    lesson_id: 54,
    module_id: 8,
    lesson_name: `ระบบนิเวศแห่งกรรม `,
    content: `ลัทธิโชคชะตา ระบบนิเวศแห่งกรรม และไวยากรณ์ทางโสตทัศน์ (Fatalism, the Karmic Ecosystem, and Audio-Visual Grammar)
บริบทศึกษา: ตอน "ขึ้นครู" (วาทกรรมภาพยนตร์จากคดีฆ่าหมกม่านรูด)
ปฐมบท: เฮเทอโรโทเปียแห่งตัณหาและพื้นที่อโคจร (Prologue: Heterotopia of Desire and Transgressive Spaces) ก่อนจะไปถึงจุดจบของโชคชะตา ภาพยนตร์ได้กำหนดให้ "โรงแรมม่านรูดราคาถูก" เป็นสมรภูมิสุดท้าย ในทางสังคมวิทยา พื้นที่ลักษณะนี้สามารถอธิบายผ่านแนวคิด "เฮเทอโรโทเปีย" (Heterotopia) ของ Michel Foucault ซึ่งหมายถึงพื้นที่จริงที่ตั้งอยู่ชายขอบของสังคม เป็นพื้นที่ที่กฎเกณฑ์ทางศีลธรรมและบรรทัดฐานปกติถูกระงับชั่วคราว (Suspension of Morality) ม่านรูดจึงกลายเป็นแหล่งรวมความปรารถนาที่ถูกกดทับ ตัณหา และอาชญากรรม การเลือกพื้นที่อโคจรนี้เป็นฉากหลัง คือการตีแผ่ความเสื่อมทรามที่ซุกซ่อนอยู่ใต้พรมของสังคมที่อ้างตนว่ามีศีลธรรมอันดี
1. โครงสร้างเรื่องเล่าและอภิปรัชญาแห่งกรรม (Narrative Structure and the Metaphysics of Karma) เรื่องราวการฆาตกรรมหมู่ในม่านรูด และการรอดชีวิตของ "เจ๊ดาว" ที่นำไปสู่อุบัติเหตุรถชนซึ่งเชื่อมโยงกับตัวละครในตอนอื่นๆ เป็นการประกาศอุดมการณ์ทางปรัชญาแบบ ลัทธิโชคชะตา (Fatalism) อย่างเกรี้ยวกราด ภาพยนตร์ผสานปรัชญาตะวันตกนี้เข้ากับความเชื่อเรื่อง "กรรม" (Karma) ของไทย สร้างเป็น "ระบบนิเวศแห่งความตาย" (Ecology of Death) ที่ทุกชีวิตถักทอเข้าด้วยกันด้วยสายใยแห่งความรุนแรง
โครงสร้างการเล่าเรื่องแบบกางเขน (Intersecting Timelines) ทำหน้าที่ส่งสารว่า ในสังคมที่โครงสร้างเน่าเฟะ ไม่มีใครสามารถอ้างความบริสุทธิ์และหลบหนีออกจากวงจรนี้ได้ ไม่ว่าคุณจะเป็นผู้กระทำ (วัยรุ่นที่ฆ่าคน), ผู้ถูกกระทำ (หญิงบริการ), หรือผู้สมรู้ร่วมคิด/ผู้เพิกเฉย (ป้าสวิง) สุดท้ายทุกคนล้วนถูกพิพากษาให้กลายเป็น "ผีตายโหง" อย่างเท่าเทียมกัน หายนะทางรถยนต์ในตอนท้ายจึงไม่ใช่ความบังเอิญ แต่เป็นผลพวงของปรากฏการณ์ผีเสื้อขยับปีก (Butterfly Effect) แห่งบาปกรรม
2. สัญวิทยาของสีและสุนทรียศาสตร์แห่งราคะที่เน่าเฟะ (Semiotics of Color and Aesthetics of Decaying Lust)
แสงนีออนสีชมพูและแดงหม่น (Sleazy Neon Pink and Murky Red): ภาพยนตร์ใช้แสงไฟนีออนเป็นเครื่องมือบงการอารมณ์ สีชมพูและแดงที่ควรจะเป็นตัวแทนของความรักและโรแมนติก ถูกทำให้ดูราคาถูก หม่นหมอง และสกปรก (Sleazy) มันสะท้อนถึงความสัมพันธ์แบบฉาบฉวย การซื้อขายเรือนร่าง และตัณหาที่นำไปสู่ความตาย เป็นการทำลายภาพฝัน (Disillusion) ของการมีความรักในพื้นที่แห่งนี้
ความมืดที่กลืนกินแสงสว่าง (Encroaching Shadows): ในฉากฆาตกรรม ผู้กำกับปล่อยให้เงามืด (Shadows) เข้ามามีบทบาทเหนือแสงสว่าง ร่างกายของตัวละครถูกกลืนหายไปในความมืดครึ่งหนึ่ง สะท้อนถึงด้านมืดในจิตใจมนุษย์ (The Jungian Shadow) ที่เข้าครอบงำสติสัมปชัญญะอย่างสมบูรณ์
3. วากยสัมพันธ์ของมุมกล้องและการตัดต่อแห่งความโกลาหล (Syntax of Camera Angles and Chaotic Montage)
สายตาแห่งการถ้ำมอง (The Voyeuristic Gaze): ในช่วงต้น มุมกล้องถูกตั้งใจออกแบบให้ผู้ชมสวมบทบาทเป็น "ผู้ถ้ำมอง" (Voyeur) แอบดูพฤติกรรมของตัวละครผ่านช่องหน้าต่าง ซอกประตู หรือกระจกเงา เป็นการดึงผู้ชมเข้าไปมีส่วนร่วมในฐานะผู้สมรู้ร่วมคิดในพื้นที่อโคจรนี้
การตัดต่อแบบปะติดปะต่อและการชนกันของเวลา (Fragmented Editing and Time Collision): เมื่อเรื่องราวดำเนินมาถึงจุดจบที่เส้นเวลาของทุกตอนพุ่งชนกัน (รถชน) ภาพยนตร์ใช้เทคนิคการตัดต่อที่รวดเร็ว (Fast-paced Montage) สลับภาพเหตุการณ์ของแต่ละตัวละคร ความโกลาหลทางภาพนี้จำลองสภาวะ "ช็อก" ของจิตใจเมื่อเผชิญกับความตายฉับพลัน และเป็นการร้อยเรียงจิกซอว์ชิ้นสุดท้ายให้ผู้ชมเห็นภาพรวมของโศกนาฏกรรม
4. ภูมิทัศน์ทางเสียงแห่งจุดตัดโชคชะตา (Soundscape of the Fateful Intersection)
เสียงหึ่งๆ ของหลอดไฟนีออน (The Buzz of Moral Decay): เสียงบรรยากาศ (Ambient Sound) ที่ดังคลออยู่ตลอดคือเสียงกระแสไฟฟ้าวิ่งผ่านหลอดนีออนเก่าๆ เสียงนี้สร้างความน่ารำคาญใจระดับจิตใต้สำนึก สื่อถึงความไม่สมบูรณ์และความเสื่อมสภาพของทั้งสถานที่และจิตใจคน
การประสานเสียงของหายนะ (The Symphony of Destruction): ในฉากอุบัติเหตุตอนจบ เสียงเบรก เสียงรถชน และเสียงกระจกแตก ถูกออกแบบมาให้ดังกึกก้องและทับซ้อนกัน มันคือ "จุดตัด" ทางโสตประสาทที่ประกาศวาระสุดท้าย เป็นเสียงพิพากษาที่ดังกังวานเพื่อล้างบางทุกชีวิตในระบบนิเวศแห่งกรรมนี้ให้ดับสูญไปพร้อมๆ กัน`,
  },
  {
    lesson_id: 55,
    module_id: 8,
    lesson_name: `ส่งท้ายก่อนถอดรหัส`,
    content: `บทสรุปเชิงวิพากษ์
1. ไวยากรณ์แห่งความสิ้นหวังผ่านจิตวิทยาของสี (The Grammar of Despair through Color Psychology) นอกจากโครงสร้างการเล่าเรื่องที่แยบยล สิ่งที่ขับเน้นให้ "ตายโหง" ทำงานกับจิตใต้สำนึกของผู้ชมได้อย่างทรงพลัง คือการประยุกต์ใช้ จิตวิทยาของสี (Color Psychology) และ สัญวิทยาทางโสตทัศน์ (Visual Semiotics) อย่างเป็นระบบ ผู้กำกับมิได้ใช้สีเพียงเพื่อความสวยงาม แต่ใช้ในฐานะ "เครื่องมือแห่งการกดทับ" (Oppressive Tool)
ภาพยนตร์จงใจคุมโทนภาพด้วย "สีฟ้าอมเทา" (Cyan/Cold Blue) เพื่อยัดเยียดความรู้สึกโดดเดี่ยว แปลกแยก (Alienation) และความหนาวเหน็บของการถูกทอดทิ้ง
สลับกับการใช้ "สีเขียวอมเหลือง" (Sickly Green) อย่างมีนัยสำคัญในฉากคุกและแทงค์น้ำ ซึ่งทำงานเป็นสัญญะทางสายตาที่ชี้ชวนให้เห็นถึงความเสื่อมสลายทางชีวภาพ (Biological Decay) และตอกย้ำถึงความเน่าเฟะของศีลธรรมที่กำลังกัดกินตัวละครจากภายใน
2. ภววิทยาแห่งผีตายโหงในฐานะวาทกรรมทางการเมือง (Ontology of the Tragic Ghost as Political Discourse) ท้ายที่สุด "ตายโหง" จึงยืนหยัดในอุตสาหกรรมภาพยนตร์ไทยด้วยสถานะที่เหนือกว่าความบันเทิงเขย่าขวัญ ภาพยนตร์ใช้ "วิญญาณ" และ "สิ่งลี้ลับ" เป็นเพียงฉากหน้า (Façade) เพื่อรื้อถอนและวิพากษ์วิจารณ์ความมืดมิดที่แท้จริงของสังคมไทย ซึ่งสอดคล้องกับแนวคิด "การเมืองเรื่องความตาย" (Necropolitics) สังคมที่โครงสร้างอำนาจและทุนนิยมเป็นผู้ชี้ขาดว่าชีวิตใดมีค่าควรปกป้อง และชีวิตใดสามารถถูกปล่อยให้ตายได้อย่างไร้ค่า
ภาพยนตร์ได้สถาปนาตนเองเป็นจดหมายเหตุที่บันทึกไว้ว่า "ความตายอันอยุติธรรมและการกดขี่เชิงโครงสร้าง สามารถเกิดขึ้นได้ในทุกตารางนิ้วของประเทศนี้" ไม่ว่าจะเป็นพื้นที่ของทุนนิยม (ผับหรูใจกลางเมืองที่ไร้มาตรฐานความปลอดภัย), พื้นที่ของคนชายขอบ (หอพักซอมซ่อและม่านรูดราคาถูกที่ชีวิตถูกตีราคาต่ำต้อย), ไปจนถึงสถาบันที่ควรจะผดุงความยุติธรรมที่สุดของรัฐ (คุกตารางที่เป็นดั่งนรกจำลอง) อสุรกายที่แท้จริงใน "ตายโหง" จึงไม่ใช่ผีสาง แต่คือความวิปลาสของโครงสร้างสังคมที่ผลิตซ้ำความตายและความรุนแรงอย่างไม่รู้จบ`,
  },
  {
    lesson_id: 56,
    module_id: 9,
    lesson_name: `ก่อนจะถอดรหัส`,
    content: `เมื่อ "ของ" ที่เล่น ย้อนกลับมาเล่น "คน"
ภาพยนตร์เรื่อง "ลองของ" (พ.ศ. 2548) ไม่ได้เป็นเพียงภาพยนตร์ที่ขายความสยดสยองแหวะหวะ (Gore and Splatter) แต่เป็นงานประกอบสร้างทางภาพยนตร์ที่วิพากษ์ "กิเลสตัณหา" และ "ระบบนิเวศแห่งเวรกรรม" ผ่านไวยากรณ์ของไสยศาสตร์มนต์ดำ นี่คือภาพสะท้อนของการกระทำที่ว่า เมื่อมนุษย์ริอ่านก้าวล่วงไปหยิบยืมอำนาจมืดมาใช้ (การขี่หลังเสือ) สุดท้ายแล้วอำนาจนั้นจะย้อนกลับมากัดกินและทำลายล้างผู้ใช้เสียเอง
การจำแนกอนุกรมวิธานของแฟรนไชส์และวาทกรรมทางการค้า (Taxonomy of the 'Art of Devil' Franchise and Commercial Discourse)
ความสับสนในหมู่ผู้ชมและนักวิจารณ์มักเกิดจากความลักลั่นของการตั้งชื่อภาพยนตร์ ทั้งในฉบับภาษาไทยและชื่อจัดจำหน่ายในระดับสากล (International Title) หากเราถอดรหัสโครงสร้างของจักรวาลภาพยนตร์ชุดนี้ผ่านแกนเวลาและเนื้อเรื่อง จะสามารถจำแนกอนุกรมวิธานได้ดังนี้:
Art of Devil (พ.ศ. 2547) "คนเล่นของ": แม้จะใช้ชื่อภาษาอังกฤษว่า Art of Devil ซึ่งกลายมาเป็นชื่อแฟรนไชส์หลัก และมีแก่นเรื่อง (Theme) ที่ว่าด้วยผลกระทบของไสยศาสตร์มนต์ดำ แต่ในเชิงโครงสร้างการเล่าเรื่อง (Narrative Structure) เนื้อหาและตัวละคร ไม่มีความเชื่อมโยงใดๆ กับจักรวาลของครูพนอ ภาพยนตร์เรื่องนี้จึงมีสถานะเป็นภาพยนตร์เอกเทศ (Stand-alone Film) ที่ปูทางความสำเร็จด้านรายได้ให้กับการสร้างภาคต่อเชิงจิตวิญญาณ (Spiritual Sequel)
Art of Devil 2 (พ.ศ. 2548) "ลองของ": นี่คือ "ปฐมบทที่แท้จริง" (The True Genesis) ของจักรวาลครูพนอ ภาพยนตร์เรื่องนี้ได้สร้างปรากฏการณ์ความหลอนระดับชาติ และสถาปนากฎเกณฑ์ (Mythos) ของไสยศาสตร์ในโลกภาพยนตร์ยุคใหม่ การใช้ชื่อ Art of Devil 2 ในตลาดสากลเป็นเพียงวาทกรรมทางการค้า (Commercial Discourse) เพื่อดึงดูดฐานแฟนคลับจากภาคแรก แต่ในบริบทของไทย มันคือจุดเริ่มต้นของโศกนาฏกรรมทั้งหมด
Art of Devil 3 (พ.ศ. 2551) "ลองของ 2": โครงสร้างของภาคนี้มีความสลับซับซ้อนทางเวลา (Non-linear storytelling) โดยทำหน้าที่เป็นทั้ง ภาคต่อ (Sequel) ที่สานต่อชะตากรรมหลังความตาย และ ภาคต้น (Prequel) ที่ย้อนกลับไปเจาะลึกปูมหลังอันเจ็บปวดของครูพนอ รวมถึงสงครามแย่งชิงอำนาจทางมนต์ดำ (Occult Warfare) ก่อนหน้าเหตุการณ์ใน ลองของ ภาคแรก`,
  },
  {
    lesson_id: 57,
    module_id: 9,
    lesson_name: `ปฐมบทแห่งความวิปลาส `,
    content: `ปฐมบทแห่งความวิปลาส การบิดเบี้ยวของอำนาจ และสัญวิทยาทางโสตทัศน์ (The Genesis of Madness, Distortion of Power, and Audio-Visual Semiotics)
1. สถาบันการศึกษาในฐานะพื้นที่แห่งการกดขี่ (Educational Institution as an Oppressive Space) หากวิเคราะห์ผ่านกรอบคิดเรื่องโครงสร้างอำนาจ (Power Dynamics) เหตุการณ์ที่กลุ่มเพื่อนทั้ง 6 คน (คิม, ปอ, ต๊ะ, โก้, แต, นุช) ถ่ายคลิปความสัมพันธ์ชู้สาวระหว่าง "ครูพนอ" และ "ครูประเสริฐ" ได้นำไปสู่การเผยให้เห็นความเน่าเฟะของระบบ สถาบันโรงเรียนที่ควรเป็นพื้นที่ปลอดภัยกลับกลายเป็นพื้นที่ปิดตาย เมื่อ "โค้ชโอฬาน" จับได้ เขาไม่ได้ใช้กฎระเบียบของโรงเรียนในการลงโทษ แต่กลับสถาปนาตนเองเป็นผู้ใช้ศาลเตี้ย เขาใช้อำนาจของความเป็นครูประกอบกับอำนาจทางกายภาพ (ปืน) ในการข่มขู่และล่วงละเมิดทางเพศเด็กกลุ่มนี้อย่างโหดเหี้ยม
2. ไสยศาสตร์ในฐานะเครื่องมือทวงคืนความยุติธรรม (Occultism as an Instrument of Retributive Justice) บาดแผลทางจิตใจ (Trauma) ขั้นรุนแรงนี้ ผลักดันให้เด็กวัยรุ่นกลุ่มหนึ่งต้องหันหลังให้กับความมีเหตุผล นัยยะสำคัญของการเดินเข้าหา "หมอผีสายดำ" จึงไม่ใช่ความคึกคะนองแบบวัยรุ่นทั่วไป แต่เป็นการ "ใช้ความรุนแรงเหนือธรรมชาติ เพื่อทวงคืนความยุติธรรมที่ระบบเชิงโครงสร้าง (โรงเรียน/กฎหมาย) ไม่สามารถมอบให้ได้" ไสยศาสตร์จึงกลายเป็นอาวุธสุดท้ายของผู้ที่ถูกรังแกและไร้ทางสู้ (Weapon of the Marginalized)
3. สัญวิทยาแห่งการชำแรกศพและเวทมนตร์แห่งความคล้ายคลึง (Semiotics of Mutilation and Sympathetic Magic)
เรื่องราวเปิดฉากผลลัพธ์ของการชำระแค้นด้วยการเสียชีวิตอันวิจิตรพิสดารของโค้ชโอฬาน ภาพยนตร์นำเสนอแนวคิดของ "เวทมนตร์แห่งความคล้ายคลึง" (Sympathetic Magic) อย่างเป็นรูปธรรม สัญญะของ "ปลาดุกที่ถูกตอกตะปูและเกี่ยวด้วยตาเบ็ด" ไม่ได้เป็นเพียงวัตถุอาถรรพ์ (Occult Object) แต่มันคือตัวแทนทางกายภาพ (Voodoo equivalent) ของโค้ชโอฬาน ความเจ็บปวดจากการถูกตอกตะปูใส่ปลา ถูกส่งผ่านพิธีกรรมข้ามมิติมาบดขยี้อวัยวะภายในของเหยื่อโดยตรง
4. ไวยากรณ์ทางโสตทัศน์แห่งความทรมาน (Audio-Visual Grammar of Agony) ผู้กำกับประกอบสร้างความตายของโค้ชโอฬานให้ผู้ชมรู้สึก "เจ็บปวดร่วม" ผ่านไวยากรณ์ภาพยนตร์อย่างแยบยล:
ภาพโคลสอัพและองค์ประกอบที่รุกล้ำ (Intrusive Close-ups): กล้องจงใจจับภาพระยะประชิดไปที่ตะขอเบ็ดที่ทะลุออกมาจากกระพุ้งแก้มและผิวหนัง การเน้นให้เห็นเหล็กแหลมที่ฉีกขาดเนื้อเยื่อ เป็นการทำงานกับความกลัวระดับสัญชาตญาณของมนุษย์ (Visceral Fear)
การออกแบบเสียงแห่งความตาย (Sound Design of Mortality): ภาพยนตร์ละทิ้งดนตรีประกอบที่เร้าอารมณ์ แต่เลือกใช้เสียง (Foley) ที่สมจริงอย่างน่าสะอิดสะเอียน ทั้งเสียงอาเจียน เสียงสำลักเลือด และเสียงเหล็กที่ขูดขีดกับกระดูกและเส้นเสียงจากภายใน ภูมิทัศน์ทางเสียงนี้ทำหน้าที่ตอกย้ำว่า "ผลลัพธ์ของมนต์ดำนั้นจับต้องได้และทรมานแสนสาหัสเพียงใด"`,
  },
  {
    lesson_id: 58,
    module_id: 9,
    lesson_name: `ไวยากรณ์ทางโสตทัศน์`,
    content: `สุนทรียศาสตร์แห่งความน่าขยะแขยง งานเลี้ยงแห่งความตาย และไวยากรณ์ทางโสตทัศน์ (Aesthetics of the Abject, the Macabre Feast, and Audio-Visual Semiotics)
1. สุนทรียศาสตร์แห่งความน่าขยะแขยงและการพังทลายของเส้นแบ่ง (Aesthetics of the Abject and Boundary Breakdown) การกลับมาพบกันของกลุ่มเพื่อนที่บ้านของต๊ะ นำไปสู่ฉากบนโต๊ะอาหารที่คลาสสิกและทรงอิทธิพลที่สุดฉากหนึ่งในประวัติศาสตร์หนังสยองขวัญไทย: "ต้มข่าไก่ของครูพนอ" ความสยดสยองในฉากนี้ทำงานผ่านทฤษฎี "ความน่าขยะแขยง" (The Abject) ของ Julia Kristeva อย่างสมบูรณ์แบบ เมื่อ "โก้" สำลักเอาเศษเล็บที่ทาสีฟ้าลายโดเรมอนและคอนแทคเลนส์ออกมา ผู้ชมและตัวละครตระหนักพร้อมกันว่า "นุช" เพื่อนในกลุ่มได้ถูกชำแหละและแปรสภาพกลายเป็นอาหารที่พวกเขาเพิ่งกลืนกินเข้าไป
การล่วงละเมิดทางชีวภาพ (Biological Transgression): การพังทลายของเส้นแบ่งระหว่าง "อาหารที่หล่อเลี้ยงชีวิต" (สิ่งที่สะอาด) และ "ซากศพมนุษย์" (สิ่งปฏิกูลขั้นสุด) สร้างความสะอิดสะเอียนที่สั่นสะเทือนสติสัมปชัญญะ (Cognitive Dissonance) อาหารที่ควรให้พลังงานกลับกลายเป็นพาหะของความตายที่แทรกซึมเข้าสู่ร่างกายของตัวละครไปเรียบร้อยแล้ว
ไวยากรณ์ทางภาพและเสียง (Audio-Visual Grammar): ผู้กำกับจงใจใช้ภาพโคลสอัพ (Close-up) จับจ้องไปที่ริมฝีปาก การเคี้ยว และการกลืน ผสานกับการขยายเสียงเอฟเฟกต์ (Foley) ของการซดน้ำซุปและเคี้ยวเนื้อให้ดังผิดปกติ เพื่อดึงผู้ชมเข้าไปร่วม "ลิ้มรส" หายนะนี้อย่างใกล้ชิด ก่อนจะกระชากอารมณ์ด้วยสัญญะของ "เล็บสีฟ้า" ที่ตัดกับสีขาวของน้ำกะทิอย่างรุนแรง
2. กวีนิพนธ์แห่งการลงทัณฑ์และสัญวิทยาแห่งความทรมาน (Poetic Justice of Death and Semiotics of Torture) การชำระแค้นของครูพนอมิใช่การฆ่าแบบสุ่ม แต่ถูกออกแบบมาให้สอดคล้องกับพฤติกรรมและปมบาปของเหยื่อแต่ละคน (Poetic Justice) ราวกับเป็นพิธีกรรมทางศาลเตี้ย:
แต (ผู้ล่วงละเมิดทางการมองเห็น): ในฐานะคนต้นคิดแผน "แอบถ่ายคลิป" แตจึงถูกลงทัณฑ์ผ่านผัสสะการมองเห็น (The Gaze) เธอถูกภาพหลอนบีบคั้นจนสติแตก นำไปสู่การทำลายดวงตาตนเอง (ควักลูกตา) และจบชีวิตในหม้อน้ำร้อน สัญญะของการควักตาคือการปฏิเสธที่จะมองเห็นความจริงอันโหดร้ายที่ตนเองมีส่วนสร้างขึ้น
โก้ (ความเน่าเฟะจากภายใน): โก้ถูกทำร้ายจากภายในสู่ภายนอก (Internal Corruption) ด้วยการทำของให้ "ตุ๊กแก" สัตว์เลื้อยคลานที่สะท้อนถึงความสกปรก ผุดทะลักออกมาจากช่องท้องและทางเดินอาหาร เป็นการลงทัณฑ์ที่เล่นกับความกลัวต่อสิ่งแปลกปลอมที่ฝังตัวอยู่ในร่างกาย (Parasitic Horror)
ปอ (การถูกลิดรอนสิทธิและเสียง): ปอถูกจองจำและทรมานทางกายภาพอย่างสาหัสที่สุดผ่านการ "ถอนฟันสดๆ" และ "เทน้ำร้อนเดือดกรอกปาก" การทำลายช่องปากคือการทำลายศูนย์กลางของการเปล่งเสียง (Vocalization) สื่อถึงการถูกปิดปาก ลิดรอนอำนาจในการร้องขอความเมตตา และต้องรับความเจ็บปวดอย่างเงียบงัน`,
  },
  {
    lesson_id: 59,
    module_id: 9,
    lesson_name: `การรื้อสร้างความจริง `,
    content: `การรื้อสร้างความจริง ปรัชญาแห่งตัณหา และไวยากรณ์ทางโสตทัศน์ (Deconstruction of Reality, Philosophy of Desire, and Audio-Visual Semiotics)
ความอัจฉริยะของบทภาพยนตร์ "ลองของ" มิได้อยู่ที่การประดิษฐ์ฉากฆาตกรรมอันวิจิตรพิสดารเพียงอย่างเดียว แต่อยู่ที่สถาปัตยกรรมของการเล่าเรื่อง (Narrative Architecture) ที่ซ่อนจุดหักมุม (Plot Twist) ซ้อนกันถึงสองชั้น ซึ่งทำหน้าที่ "รื้อสร้าง" (Deconstruct) ความจริงทั้งหมดที่ผู้ชมและตัวละครเชื่อถือมาตั้งแต่ต้นเรื่อง
1. ภาวะกึ่งขอบมณฑลของต๊ะและสัญวิทยาทางกายภาพ (Liminality of Ta and Somatic Semiotics)
วิญญาณในพื้นที่ทับซ้อน: แท้จริงแล้ว "ต๊ะ" ได้เสียชีวิตไปแล้วด้วยฝีมือของครูพนอ การดำรงอยู่ของต๊ะในเรื่องจึงอยู่ใน "ภาวะกึ่งขอบมณฑล" (Liminality) ซึ่งเป็นสภาวะก้ำกึ่งระหว่างคนเป็นและคนตาย การที่ภาพยนตร์หลอกผู้ชมและตัวละครคิมได้อย่างแนบเนียน ถือเป็นการเล่นกับมุมมองบุคคลที่หนึ่งแบบจำกัด (Unreliable Narrator)
ไวยากรณ์ทางความรู้สึก (Somatic Grammar): อาการเหงื่อออกและมือร้อนของ "คิม" อย่างรุนแรงตลอดทั้งเรื่อง มิใช่อาการป่วยทางกายภาพ แต่คือ "สัญญะของการรุกล้ำทางวิญญาณ" (Spiritual Intrusion) ผู้กำกับจงใจใช้ภาพโคลสอัพจับไปที่หยาดเหงื่อและมือที่สั่นเทา เพื่อสื่อถึงอุณหภูมิแห่งความตาย (The Heat of Death) ที่กำลังแผดเผาคนเป็น ถือเป็นการสื่อสารความสยองขวัญผ่าน "ผัสสะทางกายภาพ" (Somatic Horror) ที่ทรงพลังกว่าการให้ผีปรากฏตัวเป็นรูปร่างเสียอีก
2. ต้นธารแห่งบาปและความตื้นเขินของความชั่วร้าย (The Original Sin and the Banality of Evil)
กิเลสอันตื้นเขิน: ภาพยนตร์หักมุมซ้ำชั้นที่สองด้วยการเฉลยว่า หายนะทั้งหมดไม่ได้มีจุดเริ่มต้นจากการแอบถ่ายคลิป (ซึ่งมีเหตุผลรองรับจากความบอบช้ำทางจิตใจ) แต่เริ่มต้นจาก "กิเลสอันตื้นเขิน" ของคิม ที่ต้องการชนะพนันเพื่อนด้วยการแอบไปทำเสน่ห์ยาแฝดใส่ต๊ะให้มารักตน การเปรียบเทียบระหว่างแรงจูงใจที่ยิ่งใหญ่ (การแก้แค้นจากการถูกข่มขืน) กับแรงจูงใจที่แสนจะธรรมดา (การอยากชนะเพื่อน) สะท้อนให้เห็นถึงแนวคิดเรื่อง "ความตื้นเขินของความชั่วร้าย" (The Banality of Evil) ที่ว่าโศกนาฏกรรมระดับทำลายล้าง มักมีจุดเริ่มต้นมาจากความเห็นแก่ตัวเพียงเล็กน้อยของมนุษย์เสมอ
3. บทสรุปเชิงอุดมการณ์: ระบบนิเวศแห่งกรรมและไวรัสแห่งไสยศาสตร์ (Ideological Conclusion: Karmic Ecosystem and the Occult Virus)
กติกาแห่งความวินาศร่วมกัน (Mutually Assured Destruction): บทสรุปที่คิมต้องกระโดดตึกตายตามต๊ะไป คือการประกาศอุดมการณ์สูงสุดของเรื่องที่ว่า "ในโลกของไสยศาสตร์ ไม่มีฝ่ายใดเป็นผู้ชนะ" การทำของเปรียบเสมือนการปล่อย "ไวรัส" เข้าสู่ระบบนิเวศทางศีลธรรม
จุดจบของการขี่หลังเสือ: เมื่อคุณเริ่มต้นร่ายมนต์เพื่อสนองกิเลสตนเอง ไม่ว่าจะมีเจตนาที่ดีหรือเลวร้ายเพียงใด คำสาปนั้นจะทำหน้าที่ราวกับปรสิตที่เกาะกินผู้กระทำไปจนวันตาย (ดังที่หมอผีได้เตือนไว้ตั้งแต่ต้น) ไวยากรณ์ภาพในฉากสุดท้ายที่ร่างของคิมร่วงหล่นลงมาสู่พื้น คือภาพแทนของการยอมจำนนต่อกฎแห่งกรรมอันเป็นนิรันดร์ ซึ่งไม่สามารถมีอำนาจใดบนโลกมาลบล้างได้`,
  },
  {
    lesson_id: 60,
    module_id: 9,
    lesson_name: `ส่งท้ายก่อนถอดรหัส`,
    content: `เกร็ดเบื้องหลัง: เมื่อสุนทรียศาสตร์ทับซ้อนกับความเชื่อทางมานุษยวิทยา (Behind the Scenes: Cinematic Intersection with Anthropological Beliefs)
ความทรงพลังของภาพยนตร์เรื่อง "ลองของ" ที่ยังคงทำงานกับความกลัวของผู้ชมมาจนถึงปัจจุบัน เกิดจากความกล้าหาญของผู้กำกับและทีมสร้างในการหลอมรวมเส้นแบ่งระหว่าง "เรื่องแต่งทางภาพยนตร์" (Cinematic Fiction) และ "ความจริงทางมานุษยวิทยา" (Anthropological Reality) ผ่านกระบวนการสร้าง 2 ประการ:
1. ภววิทยาของมนต์ตราและเส้นแบ่งที่พร่าเลือน (Ontology of Incantations and Blurred Boundaries): บทสวดมนต์ดำที่ "ครูพนอ" (รับบทโดย คุณมะหมี่ นภคปภา) ใช้บริกรรมตลอดทั้งเรื่อง มิใช่การประกอบคำขึ้นมาใหม่ แต่เป็นคาถาอาคมสายเขมรของจริง การนำสิ่งศักดิ์สิทธิ์สายมืดที่มีอยู่จริงมาใช้ในสื่อบันเทิง ทำให้ทีมงานต้องตระหนักถึง "ผลกระทบทางจิตวิทยา" และความเชื่อเรื่อง "ของเข้าตัว" จึงต้องมีการดัดแปลงอักขระและคำสวดบางส่วนระหว่างถ่ายทำ ความสมจริงในน้ำเสียงและอักขระนี้เอง ที่ทะลุผ่านจอภาพยนตร์ออกมาเขย่าโสตประสาทของผู้ชม สร้างความรู้สึกหวาดระแวงว่าเรากำลังมีส่วนร่วมในพิธีกรรมต้องห้ามนั้นจริงๆ
2. องค์ประกอบศิลป์แห่งความสิ้นหวังและการสถาปนาพื้นที่อโคจร (Mise-en-scène of Despair and the Establishment of Profane Space): ในทางสถาปัตยกรรมภาพยนตร์ ทีมงานศิลป์ (Production Design) จงใจรื้อถอน "สัญญะของการปกป้อง" หรือสิ่งศักดิ์สิทธิ์สายขาว (เช่น พระพุทธรูป ยันต์กันภัย หรือสายสิญจน์) ออกจากฉากบ้านของต๊ะอย่างหมดจด การสร้างสภาวะสุญญากาศทางความเชื่อนี้ เป็นการประกอบสร้าง "พื้นที่อัปมงคล" (Profane Space) อย่างเบ็ดเสร็จ มันคือการส่งสารทางภาพ (Visual Cue) ไปยังจิตใต้สำนึกของผู้ชมว่า ในพื้นที่แห่งนี้จะไม่มีปาฏิหาริย์แห่งความดีงามใดๆ มาช่วยกอบกู้สถานการณ์ได้ ตัวละครทุกตัวถูกขังรวมอยู่ในโดมแห่งมนต์ดำที่พร้อมจะบดขยี้ทุกคนอย่างเท่าเทียม
ท้ายที่สุด ภาพยนตร์เรื่อง "ลองของ" (Art of Devil 2) จึงยืนหยัดข้ามกาลเวลาในฐานะหมุดหมายสำคัญของวงการสยองขวัญไทย มันไม่ได้เป็นเพียงภาพยนตร์ที่สนองความสะใจผ่านความแหวะหวะ (Gore and Splatter) แต่เป็นงานประกอบสร้างทางศิลปะที่วิพากษ์ "กิเลสตัณหาอันตื้นเขิน" และ "อำนาจนิยมที่กดทับมนุษย์" ผ่านไวยากรณ์ของไสยศาสตร์
ภาพยนตร์เรื่องนี้ทำหน้าที่เป็นเสมือนกระจกเงาบานใหญ่ที่สะท้อนอภิปรัชญาของการ "ขี่หลังเสือ" ว่าเมื่อใดก็ตามที่มนุษย์ยอมจำนนต่อความมืดมิดและก้าวล่วงไปหยิบยืมอำนาจที่ตนควบคุมไม่ได้มาใช้ สุดท้ายแล้วอำนาจนั้นจะประกอบร่างเป็นระบบนิเวศแห่งเวรกรรม ที่ย้อนกลับมากัดกินและทำลายล้างทั้งเนื้อหนังและจิตวิญญาณของผู้ใช้... อย่างไม่มีข้อยกเว้น`,
  },
  {
    lesson_id: 61,
    module_id: 10,
    lesson_name: `ก่อนจะถอดรหัส`,
    content: `"ธี่หยด" (Death Whisperer) หมุดหมายใหม่แห่งความสยองขวัญไทย
1. จากมุขปาฐะยุคดิจิทัล สู่ปรากฏการณ์จอเงิน (From Digital Oral Tradition to Cinematic Phenomenon) ภาพยนตร์เรื่อง "ธี่หยด" (พ.ศ. 2566) เป็นผลงานการกำกับของ คุ้ย-ทวีวัฒน์ วันทา ซึ่งมีจุดกำเนิดที่น่าสนใจในแง่ของมานุษยวิทยายุคใหม่ เรื่องราวไม่ได้ดัดแปลงมาจากตำนานพื้นบ้านดั้งเดิม แต่เริ่มต้นจากการเป็น "เรื่องเล่าเขย่าขวัญ" บนเว็บบอร์ด Pantip.com โดยคุณกฤตานนท์ (Krittanon) ก่อนจะถูกตีพิมพ์เป็นนวนิยายที่สร้างปรากฏการณ์ยอดขายถล่มทลาย การเดินทางของเรื่องราวจากตัวอักษรบนโลกออนไลน์ สู่ภาพยนตร์ระดับบล็อกบัสเตอร์ (Blockbuster) สะท้อนให้เห็นถึงความทรงพลังของเนื้อหาที่สามารถเกาะกุมความกลัวร่วมสมัยของคนไทยได้อย่างอยู่หมัด
2. โครงเรื่องและสถาปัตยกรรมของความตึงเครียด (Synopsis and Architecture of Tension) เรื่องราวมีฉากหลังเป็นหมู่บ้านห่างไกลในจังหวัดกาญจนบุรี ปี พ.ศ. 2515 (ยุคที่ความเจริญทางวัตถุและเทคโนโลยียังเข้าไปไม่ถึง ทำให้ไสยศาสตร์ทำงานได้อย่างเต็มที่) เมื่อหยาดและครอบครัวชาวไร่ ต้องเผชิญกับภัยคุกคามที่ไม่สามารถอธิบายได้ทางวิทยาศาสตร์ เมื่อ "แย้ม" น้องสาวของหยาด มีอาการป่วยประหลาดและพฤติกรรมที่เปลี่ยนไปอย่างน่าขนลุก พร้อมกับการปรากฏตัวของหญิงชุดดำปริศนา และเสียงสวดบริกรรมยามวิกาลที่ฟังคล้ายคำว่า "ธี่หยด... ธี่หยด..."
ความตึงเครียดของเรื่องราวถูกยกระดับขึ้นเมื่อ "ยักษ์" (รับบทโดย ณเดชน์ คูกิมิยะ) พี่ชายคนโตผู้มีนิสัยดุดันและผ่านการเป็นทหาร ได้เดินทางกลับมาที่บ้าน ยักษ์กลายเป็นตัวแทนของ "ความรุนแรงทางกายภาพ" (Physical Force) ที่ต้องเข้าปะทะกับ "ความรุนแรงเหนือธรรมชาติ" (Supernatural Threat) เพื่อปกป้องครอบครัว
3. นัยยะของเสียงกระซิบแห่งความตาย (The Implication of the Death Whisper) คำว่า "ธี่หยด" ไม่ได้มีความหมายที่แน่ชัดในพจนานุกรม แต่ถูกสันนิษฐานว่าอาจเพี้ยนมาจากคำภาษามอญอย่าง "เตี๊ยะหยด" (แปลว่า โอมจงมา) ภาพยนตร์ชาญฉลาดที่ไม่ได้พยายามแปลความหมายของคำนี้ตรงๆ แต่ปล่อยให้มันทำงานในฐานะ "รหัสเสียงแห่งความตาย" (Acoustic Code of Death) เป็นเสียงที่ประกาศการมาเยือนของสิ่งชั่วร้าย และเป็นเสียงสะกดจิตที่บ่อนทำลายสติสัมปชัญญะของเหยื่อ
4. การก้าวข้ามขนบ: จากผู้ถูกล่า สู่การต่อต้าน (Paradigm Shift: From Prey to Resistance) สิ่งที่ทำให้ "ธี่หยด" โดดเด่นและกลายเป็นหมุดหมายใหม่ของอุตสาหกรรมภาพยนตร์ไทย คือการทลายขนบเดิม (Subversion of Tropes) ของหนังผีไทยที่ตัวละครมักจะเป็นเพียง "เหยื่อ" (Victim) ที่ต้องวิ่งหนี หรือพึ่งพาพระสงฆ์/สิ่งศักดิ์สิทธิ์ แต่ "ธี่หยด" เลือกที่จะให้ตัวละครเอกอย่าง 'ยักษ์' หยิบปืนลูกซองขึ้นมาต่อสู้กับผีอย่างตาต่อตาฟันต่อฟัน ภาพยนตร์จึงเป็นการผสมผสานระหว่างความเป็น Folk Horror (ความสยองขวัญพื้นบ้าน) และ Action-Horror ที่กระตุ้นอะดรีนาลีนของผู้ชมได้อย่างสมบูรณ์แบบ`,
  },
  {
    lesson_id: 62,
    module_id: 10,
    lesson_name: `สัญวิทยาของสีและการรื้อสร้างภาพจำ`,
    content: `สัญวิทยาของสีและการรื้อสร้างภาพจำ (Color Semiotics and Subversion of Tropes)
ภาพยนตร์เรื่องนี้มีความจงใจอย่างยิ่งยวดในการใช้จิตวิทยาของสี (Color Psychology) เพื่อควบคุมพฤติกรรมการรับรู้และสภาวะอารมณ์ของผู้ชมผ่านองค์ประกอบศิลป์ (Mise-en-scène):
ทฤษฎีสีโทนร้อนและการกระตุ้นเตือน (Warm Tone and Alertness): การคุมโทนภาพรวม (Color Palette) ให้เป็นสีอุ่นอย่างสีเหลืองและส้ม ไม่เพียงแต่ทำหน้าที่สร้างความสมจริงให้กับภูมิทัศน์ชนบทไทยในยุคอดีตเท่านั้น แต่ยังตั้งใจใช้เป็นสีพื้นหลังเพื่อขับเน้น "สีแดง" บนเสื้อผ้าของ "แย้ม" ให้โดดเด่นและปะทะสายตาผู้ชม (Visual Contrast) สีแดงในบริบทนี้จึงทำงานในฐานะ สัญลักษณ์ภาพที่ทำซ้ำ (Visual Motif) ซึ่งเป็นสัญญะของการคุกคาม (Threat) การเตือนภัย และอันตรายทางชีวภาพที่กำลังกัดกินตัวละครจากภายใน
การรื้อสร้างภาพจำของผีไทย (Subverting Traditional Tropes): ภาพยนตร์ตั้งใจละทิ้งขนบดั้งเดิมอย่าง "ผีหญิงชุดขาว" และเปลี่ยนมาใช้ "ผีหญิงชุดดำ" ซึ่งถือเป็นการทำงานกับจิตใต้สำนึกของมนุษย์อย่างแยบยล สอดคล้องกับทฤษฎีความกลัวต่อสิ่งเร้นลับ (Fear of the Unknown) ในทางฟิสิกส์และทัศนศาสตร์ สีดำทำหน้าที่ดูดกลืนแสง เมื่อผีชุดดำปรากฏตัวในฉากกลางคืนหรือพื้นที่แสงน้อย (Low-key Lighting) มันจะพรางตัวเข้ากับความมืดมิด ทำให้การมองเห็นของผู้ชมพร่ามัว สถาปนาความน่ากลัวในรูปแบบที่คาดเดาไม่ได้และไร้ขอบเขตที่ชัดเจน`,
  },
  {
    lesson_id: 63,
    module_id: 10,
    lesson_name: `ภูมิทัศน์แห่งแสง`,
    content: `ภูมิทัศน์แห่งแสงและสภาวะกึ่งขอบมณฑลของเวลา (Landscape of Light and Temporal Liminality)
ในไวยากรณ์ของภาพยนตร์สยองขวัญ แสงและเวลาคือเครื่องมือสำคัญในการกำหนดสภาวะอารมณ์ ทว่า "ธี่หยด" ได้ทำการรื้อสร้างและท้าทายกฎเกณฑ์เหล่านี้อย่างชาญฉลาด:
ความสยองขวัญกลางวันแสกๆ (Daylight Horror): ตามขนบดั้งเดิม ความมืดมิด (Low-key Lighting) คือเครื่องมือหลักที่ใช้ซ่อนเร้นภัยคุกคาม แต่การสร้างความกลัวในฉากกลางวันถือเป็นความท้าทายสูงสุดของงานกำกับภาพ ภาพยนตร์จงใจใช้แสงอาทิตย์ (High-key Lighting) เพื่อลิดรอนแนวคิดเรื่อง "พื้นที่ปลอดภัยในเวลากลางวัน" แสงสว่างจ้าทำหน้าที่เปิดโปงความผิดปกติทางกายภาพ (Body Horror) และความเน่าเฟะของ "แย้ม" อย่างโจ่งแจ้ง การลากสิ่งลี้ลับออกมาให้เห็นชัดเจนใต้แสงแดด คือการทำลายที่มั่นสุดท้ายทางจิตใจของผู้ชม เพราะมันสื่อว่า ไม่มีช่วงเวลาใดเลยที่ตัวละครจะปลอดภัย
ห้วงเวลาแห่งความตายและสถาปัตยกรรมของหมอก (Liminal Time and Architecture of Fog): การเลือกใช้เวลา "โพล้เพล้" (Twilight) หรือที่ในคติชนวิทยาไทยมักเรียกว่า "เวลาผีตากผ้าอ้อม" คือการดึงตัวละครเข้าสู่ สภาวะกึ่งขอบมณฑล (Liminality) ซึ่งเป็นรอยต่อที่พร่าเลือนระหว่างกลางวัน-กลางคืน และโลกคนเป็น-โลกคนตาย เมื่อนำมาผนวกกับการจัดฉากด้วยควันและหมอก (Fog Machine) มันจึงไม่ใช่แค่การสร้างบรรยากาศให้ดูวังเวง แต่เป็นการสร้าง "พื้นที่ปิดล้อมทางสายตา" (Visual Enclosure) ในเชิงเทคนิค หมอกทำหน้าที่ทำลายมิติความลึกของภาพ (Depth of Field) ตัดขาดตัวละครออกจากโลกภายนอก สร้างสภาวะอึดอัดและกลัวที่แคบ (Claustrophobia) ท่ามกลางทุ่งกว้าง และบีบบังคับให้ผู้ชมไม่มีทางเลือกอื่น นอกจากต้องเผชิญหน้ากับความสยดสยองที่พุ่งเข้ามาในระยะประชิด (Close-quarters Horror)`,
  },
  {
    lesson_id: 64,
    module_id: 10,
    lesson_name: `จิตวิทยาสัญญาณเสียง`,
    content: `จิตวิทยาสัญญาณเสียงและโสตประสาทแห่งความตาย (Psychoacoustics and the Auditory Nerve of Death)
ในโครงสร้างของภาพยนตร์เรื่อง "ธี่หยด" เสียง (Soundscape) ไม่ได้ทำหน้าที่เป็นเพียงองค์ประกอบรองที่ใช้สร้างความตกใจ (Jump Scare) ทั่วไป แต่ถูกยกระดับให้กลายเป็น "อาวุธ" (Weaponized Sound) หลักของตัวตนเหนือธรรมชาติ ซึ่งทำงานโดยตรงกับระบบประสาทส่วนกลางของผู้ชม:
ความสมจริงที่น่าสะอิดสะเอียน (Visceral Foley Realism): การออกแบบเสียงสเปเชียลเอฟเฟกต์ (Foley) ในเรื่องนี้ ปฏิเสธการใช้เสียงสังเคราะห์แบบดั้งเดิม แต่เน้นการบันทึกเสียงที่เลียนแบบความพังทลายของอวัยวะมนุษย์อย่างสมจริง (Hyper-realism) เช่น เสียงเลือดที่หยดกระทบพื้น เสียงการฉีกขาดของเนื้อเยื่อ หรือเสียงกระดูกลั่น เสียงเหล่านี้ถูกมิกซ์ (Sound Mixing) ให้มีความคมชัดสูงเพื่อพุ่งเป้าไปที่สมองส่วนอมิกดะลา (Amygdala) ซึ่งควบคุมความกลัว กระตุ้นสัญชาตญาณความขยะแขยง (Gag Reflex) และสร้างสภาวะความสยดสยองทางร่างกาย (Body Horror) ผ่านโสตประสาท แม้ในฉากที่ภาพอาจไม่ได้นำเสนอความแหวะหวะอย่างโจ่งแจ้งก็ตาม
อาวุธทางโสตประสาท (Acoustic Weaponry): ไฮไลต์สำคัญคือคำสวดบริกรรม "ธี่หยด" ซึ่งถูกออกแบบมาบนรากฐานของจิตวิทยาเสียง (Psychoacoustics) ภาพยนตร์เลือกใช้ความถี่เสียงที่สร้างความอึดอัด การเน้นจังหวะการเปล่งเสียงพยัญชนะที่มีกลุ่มลมพ่นออกมารุนแรง (Aspirated Consonant) อย่าง 'ท.ทหาร' ผสมผสานกับเสียงกระซิบ (Infrasound/Low-frequency) สร้างความสั่นสะเทือนในระดับความถี่ที่ผิดธรรมชาติ คลื่นเสียงนี้ทำหน้าที่เสมือนมนต์สะกด (Hypnotic Rhythm) ที่แทรกซึมเข้าสู่จิตใต้สำนึก นำไปสู่สภาวะถูกครอบงำ (Trance State) มันคือการจำลองประสบการณ์ ASMR (Autonomous Sensory Meridian Response) ในเวอร์ชันของความวิปลาส ที่ทำให้ทั้งตัวละครในเรื่องและผู้ชมในโรงภาพยนตร์รู้สึกเย็นวาบและถูกคุกคามโดยสมบูรณ์`,
  },
  {
    lesson_id: 65,
    module_id: 10,
    lesson_name: `ส่งท้ายก่อนถอดรหัส`,
    content: `จากการพิจารณาประเด็นทางศาสตร์และศิลป์ผ่านเลนส์ของคติชนวิทยาเชิงวิพากษ์ (Critical Folkloristics) ทฤษฎีความสยองขวัญทางชีวภาพและโสตประสาท (Bio-Acoustic Horror Theory) และการปะทะกันระหว่างกระบวนทัศน์ (Clash of Paradigms) เราจะเห็นได้ว่า ธี่หยด (พ.ศ. 2566) มิได้เป็นเพียงภาพยนตร์สยองขวัญเหนือธรรมชาติที่มุ่งเน้นการสร้างความตื่นตระหนกดาษดื่นเท่านั้น แต่เป็นบทวิพากษ์ทางสังคมวิทยาที่เปลื้องผ้า ความเปราะบางของสถาบันครอบครัว และ สภาวะการถูกรุกรานจากสิ่งแปลกปลอม (Invasion of the Other) ศาสตร์แห่งการประกอบสร้างภาพยนตร์และไวยากรณ์โสตทัศน์ที่แยบยล ทั้งการใช้สัญญะของ เสียงกระซิบ ในฐานะอาวุธทางโสตประสาท (Acoustic Weaponry) ที่ล่วงละเมิดพื้นที่ปลอดภัยของจิตใต้สำนึก การสร้างภูมิทัศน์แห่งความหวาดระแวงกลางวันแสกๆ (Daylight Horror) ที่รื้อสร้างมายาคติของแสงสว่าง ตลอดจนการบ่อนทำลายเส้นแบ่งระหว่างพื้นที่คนเป็นและคนตายผ่านสภาวะกึ่งขอบมณฑล (Liminality) ของเวลาโพล้เพล้และสายหมอก
ต่างทำงานร่วมกันอย่างมีนัยสำคัญเพื่อส่งสารอันเจ็บปวดว่า:
> การดิ้นรนเอาชีวิตรอดของครอบครัวชาวไร่แห่งนี้ คือจดหมายเหตุของการต่อสู้ดิ้นรนเพื่อรักษาสถานะความเป็นมนุษย์ (Human Agency) เมื่อต้องเผชิญหน้ากับอำนาจมืดอันไร้รูปร่าง (Formless Threat) หญิงชุดดำและเสียงบริกรรมมรณะที่ปรากฏ มิใช่เพียงภัยคุกคามจากมิติเร้นลับ หากแต่เป็นภาพสะท้อนของ "ความรุนแรงทางความเชื่อปฐมภูมิ" (Primal Violence of Beliefs) ที่เสื่อมทรามและมุ่งเน้นการกัดกินบ่อนทำลายจากภายใน (Internal Corruption) การลุกขึ้นจับอาวุธเพื่อตอบโต้ความเร้นลับด้วยความรุนแรงทางกายภาพ (Action Horror) จึงเป็นการประกาศอิสรภาพและทวงถามถึงสิทธิในการมีชีวิตรอด จนกว่าวาทกรรมแห่งความกลัวแบบดั้งเดิมที่กดทับผู้คนจะถูกรื้อถอน และสถาปนาอำนาจของมนุษย์เหนือมายาคติแห่งไสยศาสตร์อย่างแท้จริง
> 
บทวิเคราะห์ศาสตร์และศิลป์ที่ปรากฏในบทเรียนทั้งหมดนี้ เป็นการถอดรหัสและตีความผ่านมุมมองทางคติชนวิทยา (Folkloristics) และจิตวิทยาเสียง (Psychoacoustics) โดยอาศัยทฤษฎีทางสุนทรียศาสตร์ภาพยนตร์มาเป็นแกนกลาง ทั้งนี้ ข้อสรุปทั้งหมดถือเป็นทัศนะและการวิเคราะห์เชิงวิพากษ์ส่วนบุคคล ซึ่งมุ่งเน้นไปที่การแสวงหาความหมายแฝงที่ซ่อนอยู่ในสถาปัตยกรรมทางเรื่องเล่าและองค์ประกอบศิลป์ของภาพยนตร์เท่านั้น เพื่อเป็นแนวทางเบื้องต้นในการชี้ให้เห็นว่า ภาษาภาพยนตร์สยองขวัญพื้นบ้าน (Folk Horror) สามารถทำงานร่วมกับความหวาดระแวงแห่งยุคสมัยและการต่อสู้เพื่อปลดแอกตนเองจากความกลัว ได้อย่างสั่นสะเทือนโสตประสาทและทรงพลังสืบไป`,
  },
  {
    lesson_id: 66,
    module_id: 11,
    lesson_name: `ความสำคัญของการออกแบบ`,
    content: `การออกแบบซอฟต์แวร์คือหัวใจสำคัญที่เชื่อมโยงระหว่าง ความต้องการ (Requirements) และ การลงมือเขียนโค้ด (Implementation) เป็นกระบวนการที่ต้องใช้ความคิดสร้างสรรค์เพื่อสร้างแบบจำลอง (Model) ของระบบขึ้นมา

***
หัวใจของการออกแบบสามารถสรุปได้ในคำเดียวคือ **คุณภาพ (Quality)**

***

**ความครอบคลุม:** การออกแบบที่ดีต้องตอบสนองข้อกำหนดทั้งหมด ทั้งที่ระบุไว้ชัดเจน (Explicit - เช่น ต้องมีระบบล็อกอิน) และที่ไม่ได้ระบุไว้แต่จำเป็นต้องมี (Implicit - เช่น ระบบต้องปลอดภัยจากการเดารหัสผ่าน)

**ความเข้าใจง่าย:** ต้องทำหน้าที่เป็น คู่มือ หรือ พิมพ์เขียว ที่นักพัฒนาและผู้ทดสอบ (Tester) สามารถอ่านทำความเข้าใจและนำไปปฏิบัติงานต่อได้ง่าย

**ภาพรวมที่สมบูรณ์:** ต้องแสดงให้เห็นถึงโครงสร้างข้อมูล (Data), ฟังก์ชันการทำงาน (Function), และพฤติกรรม (Behavior) ของระบบอย่างครบถ้วน`,
  },
  {
    lesson_id: 67,
    module_id: 11,
    lesson_name: `งานหลักในการออกแบบ (Generic Task Set for Design)`,
    content: `กระบวนการเหล่านี้มักไม่ได้ทำเป็นเส้นตรง (Linear) แต่จะทำวนซ้ำและทำขนานกันไป:
1. **ตรวจสอบแบบจำลองข้อมูล (Data Model):** วิเคราะห์และออกแบบโครงสร้างข้อมูลที่จะใช้ในระบบ (เช่น ออกแบบตารางในฐานข้อมูล)
2. **เลือกรูปแบบสถาปัตยกรรม (Architectural Style):** เลือกโครงสร้างหลักของระบบให้เหมาะสมกับงาน (เช่น แบบ Client-Server, Microservices หรือ MVC)
3. **ออกแบบส่วนต่อประสาน (Interface Design):** กำหนดช่องทางการสื่อสารระหว่างระบบกับผู้ใช้งาน (UI) รวมถึงระหว่างระบบของเรากับระบบภายนอก (API)
4. **ออกแบบระดับคอมโพเนนต์ (Component-level Design):** ลงรายละเอียดภายในแต่ละส่วนย่อยของโปรแกรม
5. พัฒนาโมเดลการติดตั้ง (Deployment Model): วางแผนว่าซอฟต์แวร์จะไปติดตั้งและรันบนฮาร์ดแวร์หรือเซิร์ฟเวอร์แบบใด`,
  },
  {
    lesson_id: 68,
    module_id: 11,
    lesson_name: `แนวคิดหลักในการออกแบบ (Design Concepts)`,
    content: `1. **Abstraction (การทำนามธรรม):** การดึงเฉพาะ สาระสำคัญ ออกมาใช้งาน โดยซ่อน รายละเอียดความซับซ้อน เอาไว้ ตัวอย่าง: เมื่อเราขับรถ เราเหยียบคันเร่งเพื่อให้รถวิ่งเร็วขึ้น (นี่คือ Abstraction) โดยที่เราไม่ต้องรู้กลไกการฉีดน้ำมันเข้าห้องเผาไหม้ในเครื่องยนต์
3. **Architecture (สถาปัตยกรรม)**: โครงสร้างภาพรวมของระบบ การจัดกลุ่มโมดูล (Modules) และกำหนดวิธีที่พวกมันสื่อสารกัน
4. **Patterns**: โซลูชันมาตรฐานที่ได้รับการพิสูจน์แล้วว่าใช้งานได้ดีในการแก้ปัญหาซ้ำซากที่นักพัฒนามักเจอ
5. **Separation of Concerns** : การแบ่งปัญหาใหญ่ๆ ออกเป็นส่วนย่อยๆ เพื่อให้แก้ไข ควบคุม และจัดการได้ง่ายขึ้น (เช่น แยกส่วนแสดงผลออกจากส่วนประมวลผลฐานข้อมูล)
6. Refactoring: เทคนิคการ จัดระเบียบโค้ดใหม่ เพื่อให้โครงสร้างภายในดีขึ้น อ่านง่ายขึ้น ซ้ำซ้อนน้อยลง โดยที่ พฤติกรรมการทำงานภายนอกต้องเหมือนเดิมทุกประการ
7. **Design Classes:** การออกแบบคลาสที่ดีควรมีคุณสมบัติ:
8. **Primitiveness**: มีความเฉพาะเจาะจง โฟกัสเป้าหมายเดียว
9. **High Cohesion:** องค์ประกอบภายในคลาสมีความเกี่ยวข้องกันและทำงานสอดประสานกันเป็นอย่างดี
10. **Low Coupling:** แต่ละคลาสพึ่งพากันและกันให้น้อยที่สุด (หากคลาสหนึ่งพัง คลาสอื่นควรได้รับผลกระทบน้อยที่สุด)`,
  },
  {
    lesson_id: 69,
    module_id: 12,
    lesson_name: `เกริ่น`,
    content: `    ในฐานะวิศวกรซอฟต์แวร์ คุณคงเข้าใจดีว่าสถาปัตยกรรมที่แข็งแกร่งมีความสำคัญแค่ไหนในการสร้างโปรดักต์ให้สำเร็จ รากฐานของสถาปัตยกรรมซอฟต์แวร์ใดๆ ก็คือ การออกแบบระดับคอมโพเนนต์ (Component-level design) ซึ่งก็คือการแตกย่อยระบบใหญ่ๆ ออกเป็นส่วนประกอบเล็กๆ และกำหนดว่าแต่ละส่วนจะทำงานร่วมกันอย่างไร หากทำออกมาได้ดี การออกแบบระดับนี้จะช่วยให้เรานำโค้ดกลับมาใช้ซ้ำได้ ลดความยุ่งยากซับซ้อน และช่วยให้นักพัฒนาหลายคนแบ่งงานกันทำพร้อมกันได้ (Parallel development)

    แต่อย่างไรก็ตาม วิศวกรหลายคนยังคงเจอปัญหาในการตัดสินใจว่า ควรแบ่งคอมโพเนนต์ให้ย่อยละเอียดแค่ไหน (Granularity) และจะกำหนดช่องทางการสื่อสาร (Interfaces) ให้ชัดเจนได้อย่างไร บทความนี้จึงขอนำเสนอภาพรวมของหลักการสำคัญและวิธีปฏิบัติที่ดีที่สุด (Best practices) สำหรับการออกแบบระดับคอมโพเนนต์ เพื่อให้คุณนำไปปรับใช้กับโปรเจกต์ต่อไปได้ โดยเราจะไปดูทั้งกลยุทธ์การระบุตัวคอมโพเนนต์, การกำหนด Interface, การจัดการความพึ่งพา (Dependencies) และการทำให้อยู่ในระดับนามธรรม (Abstraction) ที่พอดี
    
    ท้ายที่สุดนี้ หากคุณมีแนวคิดที่รอบคอบในการออกแบบคอมโพเนนต์ คุณก็จะสามารถสร้างสถาปัตยกรรมที่ยืดหยุ่น ขยายขีดความสามารถได้ (Scalable) และใช้งานได้ในระยะยาว คอมโพเนนต์ที่แข็งแรงเปรียบเสมือนอิฐบล็อกที่ใช้สร้างระบบที่แข็งแกร่ง ดังนั้น การลงทุนให้เวลากับรากฐานชั้นนี้จะส่งผลตอบแทนที่คุ้มค่าอย่างแน่นอน ในวันที่ซอฟต์แวร์ของคุณขยายสเกลและมีความซับซ้อนมากขึ้น`,
  },
  {
    lesson_id: 70,
    module_id: 12,
    lesson_name: `การออกแบบระดับคอมโพเนนต์ (Component Level Design) คืออะไร?`,
    content: `การออกแบบระดับคอมโพเนนต์ หมายถึง กระบวนการแตกย่อยระบบออกเป็นส่วนประกอบย่อยๆ เพื่อให้เราเข้าใจได้ดีขึ้นว่าแต่ละส่วนนั้นมีปฏิสัมพันธ์และเชื่อมต่อกันอย่างไร ในทางวิศวกรรมซอฟต์แวร์ นี่คือช่วงเวลาที่เราจะโฟกัสไปที่การกำหนดและสร้าง ชิ้นส่วนซอฟต์แวร์ (Components) ที่จะถูกนำไปประกอบกันเป็นสถาปัตยกรรมระบบในภาพรวม

***
**การออกแบบระดับนี้มีเป้าหมายหลัก 2 อย่าง คือ:**
1. ระบุคอมโพเนนต์ (Identify components): หาให้เจอว่าต้องใช้ชิ้นส่วนอะไรบ้างในการสร้างระบบ ซึ่งรวมถึงการกำหนดขอบเขตหน้าที่ของแต่ละคอมโพเนนต์ และดูว่าพวกมันมีความสัมพันธ์กันอย่างไร

3. กำหนดส่วนต่อประสาน (Define interfaces): เพื่อเป็นช่องทางเชื่อมระหว่างคอมโพเนนต์ สิ่งนี้จะช่วยให้คอมโพเนนต์แต่ละตัวเป็นอิสระและไม่ต้องผูกมัดกันมากเกินไป (Loosely coupled) ทำให้เราสามารถแยกกันพัฒนาและทดสอบได้ ก่อนที่จะนำไปประกอบเข้ากับระบบเต็มรูปแบบ

**เวลาที่ต้องออกแบบคอมโพเนนต์ วิศวกรซอฟต์แวร์จะต้องคิดถึงเรื่องเหล่านี้:**
* 
* ฟังก์ชันการทำงาน (Functionality): จุดประสงค์ของคอมโพเนนต์นี้คืออะไร? มันจะมีฟีเจอร์อะไรให้ใช้งานบ้าง?
* ข้อมูล (Data): คอมโพเนนต์นี้ต้องรับข้อมูลอะไรเข้าไปประมวลผล? มันจะคายข้อมูลอะไรออกมา? และมันจะเชื่อมต่อข้อมูลกับคอมโพเนนต์อื่นอย่างไร?
* ความพึ่งพา (Dependencies): คอมโพเนนต์นี้ต้องพึ่งพายืมจมูกคอมโพเนนต์อื่นตัวไหนหายใจบ้าง? และเราจะจัดการกับความพึ่งพานั้นอย่างไร?
* การนำไปใช้ซ้ำ (Reusability): คอมโพเนนต์นี้เอาไปใช้ซ้ำในระบบอื่นได้ไหม? ถ้าได้ จะปรับการออกแบบให้เป็นกลาง (Generic) มากขึ้นได้อย่างไร?
* ความสามารถในการขยาย (Scalability): คอมโพเนนต์นี้จะรับมืออย่างไรถ้าระบบมีปริมาณผู้ใช้งานเพิ่มขึ้น? เราสามารถปรับจูนประสิทธิภาพของมันได้ไหม?
* 

    การออกแบบระดับคอมโพเนนต์คือขั้นตอนพื้นฐานที่สำคัญมากในการสร้างสถาปัตยกรรมซอฟต์แวร์แบบโมดูล (Modular) ที่แข็งแกร่ง การคิดให้ออกว่าจะหั่นระบบที่ซับซ้อนให้กลายเป็นชิ้นส่วนย่อยๆ ที่ประกอบเข้าด้วยกันได้อย่างไร จะช่วยให้วิศวกรสร้างโซลูชันที่ยืดหยุ่น ขยายต่อยอดได้ (Extensible) และทนทานต่อการเปลี่ยนแปลงสเปก ผลลัพธ์สุดท้ายคือระบบที่มีประสิทธิภาพและทรงพลังมากกว่าแค่การเอาชิ้นส่วนต่างๆ มารวมกัน`,
  },
  {
    lesson_id: 71,
    module_id: 13,
    lesson_name: `หลักการออกแบบ SOLID (SOLID Design Principles)`,
    content: `S.O.L.I.D ย่อมาจากอะไร?
ถ้าเราไม่ได้มองเป็นตัวย่อ เราอาจจะเข้าใจความหมายผิดไป แต่ที่จริงมันย่อจากหลักการต่างๆ ดังนี้
* S — Single-Responsibility principle
* O — Open/Closed principle
* L — Liskov Substitution principle
* I — Interface Segregation principle
* D — Dependency Inversion principle

ต่อไปก็จะขยายความของแต่ล่ะหลักการไปทีล่ะหลักการ

**S — Single-Responsibility (S.R.P)**
    เป็นหลักการแรกของ S.O.L.I.D ที่แนะนำ developer ว่าเขียน Class ให้มีเหตุผลเดียวที่จะเปลี่ยนแปลงแก้ไข โดยลุงกล่าวไว้ว่า:
> A class should have one, and only one, reason to change.
> 
ถ้าหนึ่ง class มีมากกว่าหนึ่งเหตุผลที่จะเปลี่ยนแปลงแก้ไขมัน นั้นก็หมายความว่ามันมีมากกว่า หนึ่ง ความรับผิดชอบ (Responsibility) คือว่า class นั้นทำหลายๆ อย่างไม่เพียงแต่ทำงานอย่างเดียว เมือเราเจอ class ที่มีลักษณะแบบนี้แล้ว เราควรจะแตก class นั้นออกเป็น class ย่อยๆ ตามความรับผิดชอบของงานนั้นเพียงงานเดียว

***
**O — Open/Close (OCP)**
เป็นหลักการที่สองที่แนะนำ developer ว่าควรเขียนหน่วยของซอฟต์แวร์(Classes, Modules, Functions เป็นต้น) ทั้งหลาย ต้องเปิดต่อการขยาย แต่ปิดต่อการแก้ไข โดย Mayer ได้นิยามไว้เข้าใจง่ายว่า:
> Software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification
> 
นั้นก็หมายความว่า class ควรจะจะง่ายต่อการขยายความสามารถโดยจะต้องไม่แก้ไข class นั้น ซึ่งจะต้องไม่แก้ไข source code หรือ binary ของ class เดิม

ถ้าเราต้องการจะขยายความสามารถของ AreaCalculator ให้สามารถคำนวนรูปแบบอื่นๆ ด้วย เช่นตอนนี้คำนวน Circle ได้ แต่ต้องการขยายให้สามารถคำนวนพื้นที่ของ Rectangle ด้วย เราจะต้องสร้าง method เพิ่มเพื่อให้รองรับความต้องการใหม่นี้ และเพิ่ม method เรื่อยๆ เพื่อรองรับรูปแบบที่เพิ่มขึ้น ทำให้ไม่ตรงกับหลักการนี้ ที่เราต้องมาแก้ source ของ AreaCalculator เสมอ
ดังนั้นเราจะดึง method ที่คำนวนพื้นที่ออกมาสร้างเป็น interface Shape เพื่อให้ class Circle และ Rectangle สืบทอดมาและใช้เรียกใน class AreaCalculator
***
**L — Liskov Substitution (LSP)**
เป็นหลักการที่นำแนวคิดของ Liskov ที่เสนอในปี 1987 โดยเป็นหลักการแทนทีของ type ในซอฟต์แวร์ นั้นก็คือคลาสย่อยจะต้องสามารถแทนที่สำหรับคลาสหลักของตัวเอง
> Derived classes must be substitutable for their base classes.
> Let q(x) be a property provable about objects of x of type T. Then q(y) should be provable for objects y of type S where S is a subtype of T.
Barbara Liskov

ตัวอย่างเช่น สร้างคลาสย่อย VolumnCalculator สืบทอดมาจาก AreaCalculator แต่ทว่า return type เป็น long ซึ่งไม่ตรงหลักการนี้ ที่จะให้คลาสย่อยต้องสามารถแทนที่ด้วยคลาสหลัก
ดังนั้นเราก็เพียงเปลี่ยน return type ของ method calc ให้เหมือนกับคลาสหลัก
***
**I — Interface Segregation (ISP)**
เป็นหลักการที่ว่า client ควรจะไม่โดนบังคับให้ implement interface โดยที่ไม่ได้ใช้ implement นั้น
> Clients should not be forced to implement interfaces they do not use.
> 
นั้นคือ class ที่ implement interface จะต้องไม่โดนบังคับให้ implement method ที่ class นั้นไม่ได้ใช้งาน ดังนั้นจะต้องแบ่ง interface ออกเป็น interface ย่อยตามลักษณะการใช้งาน

ตัวอย่างเช่น เราเพิ่ม method volume ของ interface Shape ทำให้มี 2 method และทุก class ที่สือบทอด interface Shape จะต้อง implement ทั้ง 2 method ซึ่งบาง class อย่างเช่น Square ไม่มีปริมาณดังนั้นไม่จำเป็นต้อง implement method volume ดังนั้น ทำให้ไม่ตรงกับหลักการนี้
ดังนั้นเราจะต้องแยก interface ออกเพื่อที่จะให้ class implement เฉพาะสิ่งที่ต้องการเท่านั้น โดยที่ Square จะ implement interface Shape เท่านั้น

***
**D — Dependency Inversion (DIP)**
เป็นหลักการสุดท้ายของหลักการ S.O.L.I.D กล่าวว่า หน่วยของซอฟต์แวร์จะต้องขึ้นอยู่กับ Abstraction ไม่ใช่ขึ้นอยู่กับ Concretion โดยระบุว่าโมดูลระดับสูงจะไม่ขึ้นกับโมดูลระดับล่างแต่ควรจะขึ้นอยู่กับ Abstraction
> Depend on abstractions, not on concretions.
> 
นั้นคือควรจะทำให้หน่วยของซอฟต์แวร์ขึ้นอยู่กับ abstract class หรือ interface แทน ที่จะขึ้นอยู่กับ concrete class
เราก็ใช้ตัวอย่างเดิม AreaCalculator ถ้า method calc รับค่าเป็น concrete class Circle ทำให้ไม่ตรงกับหลักการนี้
  ดังนั้นเราก็สร้าง abstract class Shape ขึ้นมาเพื่อให้ method calc ไม่ขึ้นอยู่กับ concrete class Circle อย่างเดียว ในอนาคตถ้ามีการเพิ่มเติมรูปแบบก็จะไม่ต้องแก้ไข method calc อีก
`,
  },
  {
    lesson_id: 72,
    module_id: 14,
    lesson_name: `รูปแบบการออกแบบกลุ่มสร้างอ็อบเจกต์ (Creational Design Patterns)`,
    content: `กระบวนการสร้างอ็อบเจกต์ หรือปัญหาที่เกี่ยวข้องกับการสร้างอ็อบเจกต์ รูปแบบเหล่านี้ช่วยให้ระบบเป็นอิสระจากวิธีการที่อ็อบเจกต์ถูกสร้าง ประกอบขึ้น และนำเสนอ

กลุ่ม Creational pattern ให้ความยืดหยุ่นอย่างมากในเรื่องของ สิ่งที่จะถูกสร้างขึ้น, ใครเป็นคนสร้าง, และ มันถูกสร้างขึ้นมาได้อย่างไร

มีแนวคิดหลัก 2 ประการในรูปแบบเหล่านี้:
1. พวกมันช่วยซ่อนข้อมูลเกี่ยวกับคลาสเฉพาะ (Specific classes) ที่ถูกใช้งานในระบบ
2. พวกมันช่วยซ่อนรายละเอียดว่า อินสแตนซ์ (Instances) ของคลาสเหล่านั้นถูกสร้างและประกอบขึ้นมาได้อย่างไร

ตัวอย่าง: ลองจินตนาการถึงโรงงานของเล่น
    คุณต้องการสร้างของเล่นประเภทต่างๆ เช่น รถยนต์ (Car), ตุ๊กตา (Doll), หรือ หุ่นยนต์ (Robot) แทนที่คุณจะลงมือสร้างของเล่นแต่ละชิ้นด้วยตัวเอง คุณแค่สั่งให้โรงงานผลิตให้คุณ โปรแกรมหลักของคุณไม่สนใจหรอกว่าของเล่นนั้นถูกสร้างขึ้นมาด้วยวิธีไหน — มันแค่รับของเล่นที่พร้อมใช้งานมาก็พอ`,
  },
  {
    lesson_id: 73,
    module_id: 14,
    lesson_name: `ประเภทของ Creational Design Patterns`,
    content: `**ประเภทของ Creational Design Patterns**
รูปแบบการออกแบบกลุ่มสร้างอ็อบเจกต์มีทั้งหมด 5 ประเภทหลัก:
บางครั้ง Creational pattern ก็เป็นคู่แข่งกัน (ใช้แทนกันได้) ตัวอย่างเช่น: มีบางกรณีที่คุณสามารถเลือกใช้ได้ทั้ง Prototype หรือ Abstract Factory แล้วได้ผลลัพธ์ที่ดีเหมือนกัน แต่ในเวลาอื่น พวกมันก็เป็นส่วนเสริมให้กันและกันเช่น Builder สามารถใช้รูปแบบอื่นมาช่วยในการสร้างคอมโพเนนต์ต่างๆ ได้ หรือ Prototype ก็สามารถนำ Singleton มาประยุกต์ใช้ในการทำงานของมันได้เช่นกัน
1. **Singleton Method Design Pattern**
Singleton เป็นหนึ่งในรูปแบบการออกแบบที่เรียบง่ายที่สุด มันช่วยรับประกันว่าคลาสหนึ่งๆ จะมี อินสแตนซ์เพียงตัวเดียวเท่านั้น และมีจุดศูนย์กลางให้ระบบเข้าถึงอินสแตนซ์นี้ได้ ควรใช้ Singleton เมื่อ:
คลาสต้องมีอินสแตนซ์เพียงตัวเดียวเท่านั้นอย่างแท้จริง และไคลเอนต์ (โค้ดส่วนที่เรียกใช้) ต้องสามารถเข้าถึงมันได้จากจุดเข้าถึงที่เป็นที่รู้จักร่วมกัน
เมื่ออินสแตนซ์เดียวนั้นควรจะสามารถขยายการทำงานได้ ผ่านการสืบทอด และไคลเอนต์ควรสามารถใช้งานอินสแตนซ์ที่ถูกขยายนั้นได้โดยไม่ต้องกลับไปแก้โค้ดเดิม
***
2. **Abstract Factory Method Design Pattern**
Abstract Factory มีความคล้ายคลึงกับ Factory Pattern มาก และถือเป็น อีกชั้นหนึ่งของความนามธรรม ที่ครอบทับ Factory pattern ไว้ รูปแบบนี้ทำงานโดยอาศัย ซูเปอร์แฟคทอรี ที่มีหน้าที่สร้างโรงงาน อื่นๆ อีกที ควรใช้ Abstract Factory เมื่อ:
ระบบควรเป็นอิสระจากวิธีการสร้าง ประกอบ และนำเสนอผลิตภัณฑ์ต่างๆ ของมัน
ระบบควรถูกกำหนดค่าให้ทำงานกับ กลุ่มของผลิตภัณฑ์หลายๆ รูปแบบได้
กลุ่มของอ็อบเจกต์ผลิตภัณฑ์ที่เกี่ยวข้องกัน ถูกออกแบบมาให้ใช้งานร่วมกัน และคุณต้องการบังคับใช้ข้อจำกัดนี้
คุณต้องการจัดเตรียมไลบรารีคลาสของผลิตภัณฑ์ โดยเปิดเผยเฉพาะส่วนต่อประสาน (Interfaces) ของพวกมัน แต่ไม่เปิดเผยรายละเอียดการเขียนโค้ดภายใน
***
3. **Factory Method Design Pattern (รูปแบบเมธอดโรงงาน)**
Factory Method มักจะมีประโยชน์มากเมื่อมีความจำเป็นต้องแยกส่วน การสร้างอ็อบเจกต์ ออกจากการทำงานของมัน ด้วยรูปแบบนี้ เราสามารถผลิตอ็อบเจกต์ออกมาได้โดยไม่จำเป็นต้องระบุคลาสที่แน่ชัดของอ็อบเจกต์ที่จะสร้างตั้งแต่แรก ควรใช้ Factory Method เมื่อ:
คลาสไม่สามารถคาดการณ์ล่วงหน้าได้ว่ามันจะต้องสร้างอ็อบเจกต์จากคลาสไหน
คลาสต้องการให้คลาสลูกเป็นผู้ระบุชนิดของอ็อบเจกต์ที่มันจะสร้างขึ้น
คลาสต้องการมอบหมายความรับผิดชอบให้กับหนึ่งในคลาสลูกที่เป็นตัวช่วยและคุณต้องการรวบรวมความรู้ที่ว่าคลาสลูกตัวไหนทำหน้าที่เป็นตัวแทน ไว้ในจุดเดียว
***
4. **Prototype Method Design Pattern (รูปแบบต้นแบบ)**
Prototype ช่วยให้เราสามารถซ่อนความซับซ้อนของการสร้างอินสแตนซ์ใหม่ๆ ไม่ให้ไคลเอนต์รับรู้ แนวคิดหลักคือการ คัดลอก อ็อบเจกต์ที่มีอยู่แล้ว แทนที่จะสร้างอินสแตนซ์ใหม่ขึ้นมาตั้งแต่ศูนย์ ซึ่งอาจเป็นกระบวนการที่กินทรัพยากรระบบสูงควรใช้ Prototype เมื่อ:
ระบบควรเป็นอิสระจากวิธีการสร้าง ประกอบ และนำเสนอผลิตภัณฑ์ของมัน
คลาสที่จะนำมาสร้างอินสแตนซ์ ถูกระบุในขณะที่โปรแกรมกำลังทำงาน ตัวอย่างเช่น การโหลดแบบไดนามิก
เพื่อหลีกเลี่ยงการสร้างลำดับชั้นคลาสของผู้สร้าง ให้ซ้ำซ้อนกับลำดับชั้นคลาสของผลิตภัณฑ์
***
5. **Builder Method Design Pattern (รูปแบบผู้สร้าง)**
Builder ใช้เพื่อแยกขั้นตอนการสร้างอ็อบเจกต์ที่ซับซ้อน ออกจากการนำเสนอของมัน เพื่อให้กระบวนการสร้างเดียวกันนี้สามารถสร้างผลลัพธ์ (อ็อบเจกต์) ออกมาได้หลายรูปแบบ รูปแบบนี้ช่วยในการสร้างอ็อบเจกต์ที่ซับซ้อนแบบค่อยเป็นค่อยไป ทีละขั้นตอนและขั้นตอนสุดท้ายจะเป็นการส่งคืนค่า อ็อบเจกต์นั้นออกมา ควรใช้ Builder เมื่อ:
อัลกอริทึมที่ใช้สร้างอ็อบเจกต์ที่ซับซ้อน ควรเป็นอิสระจากชิ้นส่วนที่ประกอบกันขึ้นเป็นอ็อบเจกต์ และเป็นอิสระจากวิธีการนำพวกมันมาประกอบเข้าด้วยกัน
กระบวนการสร้างจะต้องรองรับการสร้างอ็อบเจกต์ที่มีรูปแบบ`,
  },
  {
    lesson_id: 74,
    module_id: 14,
    lesson_name: `ประโยชน์ของ Creational Design Patterns`,
    content: `ประโยชน์ของ Creational Design Patterns
1. รูปแบบการออกแบบกลุ่มสร้างอ็อบเจกต์มีประโยชน์ที่สำคัญหลายประการ:
เพิ่มความยืดหยุ่นในการสร้างอ็อบเจกต์: การแยกกระบวนการสร้าง (Instantiation) ออกจากส่วนอื่นๆ ของระบบ ทำให้คุณสามารถเปลี่ยนคลาสที่จะนำมาสร้างได้ง่ายๆ โดยไม่ส่งผลกระทบต่อคอมโพเนนต์อื่น
2. รวบรวมตรรกะการสร้าง (Encapsulation): รูปแบบเหล่านี้ช่วยห่อหุ้มตรรกะในการสร้างอ็อบเจกต์เอาไว้ ซึ่งช่วยให้การจัดการโค้ดง่ายขึ้น และส่งเสริมให้โค้ดสะอาด เป็นระเบียบเรียบร้อยมากขึ้น
3. ส่งเสริมการนำกลับมาใช้ซ้ำ (Reusability): การรวบรวมตรรกะการสร้างไว้ที่ศูนย์กลาง ทำให้คุณสามารถใช้วิธีการสร้างแบบเดียวกันนี้ในส่วนต่างๆ ของแอปพลิเคชันได้
4. จัดการกระบวนการสร้างที่ซับซ้อน: ช่วยให้รับมือกับการตั้งค่า (Configurations) และความพึ่งพา (Dependencies) ได้ง่ายขึ้น โดยเฉพาะเมื่อต้องจัดการกับคลาสจำนวนมากที่เกี่ยวข้องกัน`,
  },
  {
    lesson_id: 75,
    module_id: 15,
    lesson_name: `รูปแบบการออกแบบกลุ่มโครงสร้าง`,
    content: `**รูปแบบการออกแบบกลุ่มโครงสร้าง (Structural Design Patterns)** มุ่งเน้นไปที่การจัดระเบียบคลาสและอ็อบเจกต์เพื่อสร้างโครงสร้างซอฟต์แวร์ที่ใหญ่ขึ้น มีประสิทธิภาพ และบำรุงรักษาง่าย รูปแบบเหล่านี้ช่วยลดความซับซ้อนของความสัมพันธ์ รองรับการนำโค้ดกลับมาใช้ใหม่ (Code reuse) และช่วยสร้างสถาปัตยกรรมที่ขยายตัวได้ (Scalable architectures)
มีแนวคิดหลัก 2 ประการในรูปแบบเหล่านี้:
1. รูปแบบนี้มีประโยชน์อย่างมากในการทำให้ไลบรารีคลาสที่ถูกพัฒนามาแยกต่างหาก สามารถทำงานร่วมกันได้
2. รูปแบบกลุ่มโครงสร้างอธิบายถึงวิธีการนำอ็อบเจกต์มาประกอบกัน (Compose objects) เพื่อสร้างฟังก์ชันการทำงานใหม่ๆ ความยืดหยุ่นที่เพิ่มขึ้นจากการประกอบอ็อบเจกต์นี้ มาจากความสามารถในการเปลี่ยนแปลงการประกอบกันได้ในขณะที่โปรแกรมทำงาน (Run-time) ซึ่งไม่สามารถทำได้หากใช้การสืบทอดคลาสแบบคงที่ตายตัว (Static class composition)

***
 **ตัวอย่าง:** โปรแกรมแก้ไขภาพวาดที่ให้ผู้ใช้สามารถวาดและจัดเรียงองค์ประกอบกราฟิก (เส้น, รูปหลายเหลี่ยม, ข้อความ ฯลฯ) ลงในภาพและไดอะแกรม นามธรรมหลัก (Key abstraction) ของโปรแกรมนี้คืออ็อบเจกต์กราฟิก ซึ่งมีรูปทรงที่แก้ไขได้และสามารถวาดตัวเองได้ ส่วนต่อประสาน (Interface) สำหรับอ็อบเจกต์กราฟิกถูกกำหนดโดยคลาสเชิงนามธรรม (Abstract class) ที่ชื่อว่า Shape จากนั้นโปรแกรมจะกำหนดคลาสย่อยของ Shape สำหรับกราฟิกแต่ละชนิด เช่น คลาส LineShape สำหรับเส้น, คลาส PolygonShape สำหรับรูปหลายเหลี่ยม เป็นต้น`,
  },
  {
    lesson_id: 76,
    module_id: 15,
    lesson_name: `ประเภทของรูปแบบการออกแบบกลุ่มโครงสร้าง`,
    content: `**ประเภทของรูปแบบการออกแบบกลุ่มโครงสร้าง**
รูปแบบการออกแบบกลุ่มโครงสร้างมีทั้งหมด 7 รูปแบบหลัก ดังนี้:

* **รูปแบบอะแดปเตอร์ (Adapter Method Design Pattern)**
Adapter หรือที่รู้จักกันในชื่อ Wrapper ทำหน้าที่แปลง Interface ของคลาสหนึ่งให้เป็นอีก Interface หนึ่งตามที่ไคลเอนต์คาดหวัง Adapter ช่วยให้คลาสที่ทำงานร่วมกันไม่ได้เนื่องจาก Interface ไม่ตรงกัน สามารถทำงานร่วมกันได้ ควรใช้รูปแบบ Adapter เมื่อ:

* ต้องการทำให้คลาสที่มีอยู่แล้วเข้ากันได้กับ Interface ใหม่ โดยไม่ต้องเปลี่ยนซอร์สโค้ดเดิม
* คุณต้องการใช้คลาสที่มีอยู่แล้ว แต่ Interface ของมันไม่ตรงกับที่คุณต้องการ
* คุณต้องการสร้างคลาสที่นำไปใช้ซ้ำได้ ซึ่งสามารถทำงานร่วมกับคลาสที่ไม่เกี่ยวข้องกันหรือไม่คาดคิดมาก่อนได้ (คลาสที่อาจมี Interface ไม่ตรงกัน)
* (สำหรับ Object adapter) คุณจำเป็นต้องใช้คลาสย่อยหลายๆ คลาสที่มีอยู่ แต่การไปปรับเปลี่ยน Interface ของทุกคลาสด้วยการทำ Subclassing นั้นไม่สามารถทำได้จริง Object adapter จะช่วยปรับ Interface ของคลาสแม่ให้แทนได้

***
* **รูปแบบบริดจ์ (Bridge Method Design Pattern)**
Bridge ช่วยแยก การทำงานภายใน (Implementation - ทำอย่างไร) ออกจาก นามธรรม (Abstraction - ทำอะไร) ทำให้ทั้งสองส่วนนี้สามารถพัฒนาแยกจากกันได้อย่างอิสระ ลองนึกภาพว่าคุณมีอุปกรณ์หลายชนิด (เช่น ทีวี และ วิทยุ) และมีวิธีควบคุมหลายแบบ (เช่น รีโมท และ สั่งงานด้วยเสียง) แทนที่จะผูกมัดอุปกรณ์แต่ละชิ้นเข้ากับวิธีควบคุมแต่ละแบบอย่างแน่นหนา รูปแบบ Bridge จะช่วยให้คุณเชื่อมต่อสิ่งเหล่านี้เข้าด้วยกันแบบหลวมๆ ได้ ควรใช้รูปแบบ Bridge เมื่อ:

* ต้องการแยก Abstraction ออกจากการทำงาน (Implementation) เพื่อให้ทั้งสองส่วนปรับเปลี่ยนได้อย่างอิสระ
* คุณต้องการหลีกเลี่ยงการผูกติดกันถาวรระหว่าง Abstraction และ Implementation เช่น เมื่อจำเป็นต้องเลือกหรือสลับการทำงานในขณะโปรแกรมรัน (Run-time)
* การเปลี่ยนแปลงในส่วน Implementation ต้องไม่ส่งผลกระทบต่อไคลเอนต์ (ไม่ต้องคอมไพล์โค้ดของไคลเอนต์ใหม่)
* คุณต้องการซ่อนรายละเอียดการทำงานของ Abstraction จากไคลเอนต์อย่างสมบูรณ์
* คุณต้องการแชร์ Implementation ร่วมกันระหว่างหลายๆ อ็อบเจกต์ โดยที่ไคลเอนต์ไม่จำเป็นต้องรับรู้
***
* **รูปแบบคอมโพสิต (Composite Method Design Pattern)**
Composite ใช้ประกอบอ็อบเจกต์เข้าด้วยกันเป็นโครงสร้างแบบต้นไม้ (Tree structures) เพื่อนำเสนอลำดับชั้นแบบ ส่วนย่อย-ส่วนรวม (Part-whole) รูปแบบนี้ช่วยให้ไคลเอนต์สามารถปฏิบัติกับอ็อบเจกต์เดี่ยวๆ และกลุ่มของอ็อบเจกต์ด้วยวิธีเดียวกันได้ ควรใช้รูปแบบ Composite เมื่อ:

* ต้องการนำเสนอลำดับชั้นแบบส่วนย่อย-ส่วนรวมของอ็อบเจกต์
* คุณต้องการให้ไคลเอนต์มองข้ามความแตกต่างระหว่างอ็อบเจกต์เดี่ยวๆ กับกลุ่มของอ็อบเจกต์ โดยไคลเอนต์จะจัดการกับอ็อบเจกต์ทั้งหมดในโครงสร้าง Composite ด้วยวิธีที่เหมือนกันหมด
***
* **รูปแบบเดคคอเรเตอร์ (Decorator Method Design Pattern)**
Decorator ช่วยให้เราสามารถเพิ่มฟีเจอร์หรือพฤติกรรมเข้าไปในอ็อบเจกต์ได้โดยไม่ต้องเปลี่ยนแปลงโครงสร้างของมัน ลองนึกภาพว่าคุณต้องการเพิ่มนม, น้ำตาล, หรือวิปครีมลงในกาแฟธรรมดา แทนที่จะต้องสร้างคลาสกาแฟชนิดใหม่สำหรับทุกๆ ส่วนผสม รูปแบบนี้จะช่วยให้คุณสามารถ ห่อหุ้ม (Wrap) กาแฟธรรมดาด้วยของที่ต้องการเพิ่มเข้าไปได้ ควรใช้รูปแบบ Decorator เมื่อ:
* ต้องการเพิ่มความรับผิดชอบให้กับอ็อบเจกต์แบบไดนามิกและโปร่งใส โดยไม่ส่งผลกระทบต่ออ็อบเจกต์อื่นๆ
* ต้องการเพิ่มความรับผิดชอบที่สามารถถอดถอนออกได้ในภายหลัง
* เมื่อการขยายความสามารถด้วยการสร้าง Subclass ทำได้ยาก (เช่น มีส่วนขยายอิสระจำนวนมาก ซึ่งจะทำให้เกิด Subclass จำนวนมหาศาลเพื่อรองรับทุกๆ การผสมผสาน)
***
* **รูปแบบฟาซาด (Facade Method Design Pattern)**
* Facade จัดเตรียม Interface เดียวที่เป็นศูนย์กลางเพื่อใช้โต้ตอบกับชุด Interface ย่อยๆ ภายในระบบ (Subsystem) Facade จะกำหนด Interface ระดับสูงขึ้นมาเพื่อให้ระบบย่อยนั้นใช้งานได้ง่ายขึ้น ควรใช้รูปแบบ Facade เมื่อ:

*  ต้องการสร้าง Interface ที่ใช้งานง่ายเพื่อครอบระบบย่อยที่ซับซ้อน (ระบบย่อยมักจะซับซ้อนขึ้นเมื่อพัฒนาไปเรื่อยๆ) เพื่อให้ไคลเอนต์ที่ไม่ต้องการปรับแต่งอะไรเชิงลึกสามารถใช้งานได้ง่าย
*  มีเส้นทางการพึ่งพากัน (Dependencies) ระหว่างไคลเอนต์และคลาสต่างๆ ในระบบย่อยจำนวนมาก การใช้ Facade จะช่วยลดการผูกมัด (Decouple) ระหว่างกัน
* คุณต้องการแบ่งระบบย่อยเป็นชั้นๆ (Layering) โดยใช้ Facade เป็นจุดเข้าถึง (Entry point) ของแต่ละชั้น
***
* **รูปแบบฟลายเวท (Flyweight Method Design Pattern)**
* Flyweight ช่วยลดการใช้หน่วยความจำโดยการแชร์ส่วนประกอบที่เหมือนกันของอ็อบเจกต์ แทนที่จะสร้างอินสแตนซ์แยกกันทั้งหมด จินตนาการถึงเกมที่มีต้นไม้จำนวนมาก แทนที่จะสร้างอ็อบเจกต์ต้นไม้แต่ละต้นพร้อมข้อมูลที่เหมือนกันเป๊ะ (เช่น พื้นผิว หรือ สี) รูปแบบนี้จะแชร์คุณสมบัติที่เหมือนกันเหล่านี้ข้ามอ็อบเจกต์ทั้งหมด และเก็บเฉพาะข้อมูลที่แตกต่างกันของต้นไม้แต่ละต้นแยกไว้ต่างหาก 
* ควรใช้รูปแบบ Flyweight เมื่อเงื่อนไขทั้งหมดนี้เป็นจริง:

* แอปพลิเคชันมีการใช้งานอ็อบเจกต์จำนวนมหาศาล
* ต้นทุนการจัดเก็บข้อมูลสูงมากเนื่องจากจำนวนอ็อบเจกต์
* สถานะส่วนใหญ่ของอ็อบเจกต์สามารถแยกออกไปอยู่ภายนอกได้ (Extrinsic state)
* กลุ่มอ็อบเจกต์จำนวนมากสามารถถูกแทนที่ได้ด้วยอ็อบเจกต์ที่แชร์กันเพียงไม่กี่ตัว
* แอปพลิเคชันไม่ได้พึ่งพาการระบุตัวตน (Identity) ของอ็อบเจกต์เป็นหลัก
* **
* **รูปแบบพร็อกซี (Proxy Method Design Pattern)**

* Proxy หรือเรียกอีกอย่างว่าตัวแทน (Surrogate) ทำหน้าที่เป็นตัวแทนหรือช่องว่าง (Placeholder) ให้กับอ็อบเจกต์อื่น เพื่อควบคุมการเข้าถึงอ็อบเจกต์นั้นๆ ควรใช้รูปแบบ Proxy เมื่อ: มีความจำเป็นต้องอ้างอิงถึงอ็อบเจกต์ด้วยวิธีที่ซับซ้อนหรือยืดหยุ่นกว่าการใช้ Pointer ธรรมดา เช่น:
* Remote proxy: เป็นตัวแทนระดับโลคอลสำหรับอ็อบเจกต์ที่อยู่คนละพื้นที่ (Address space)
* Virtual proxy: สร้างอ็อบเจกต์ที่กินทรัพยากรสูงเฉพาะเมื่อมีความต้องการใช้งานจริงๆ
* Protection proxy: ควบคุมการเข้าถึงอ็อบเจกต์ต้นฉบับ เหมาะสำหรับกรณีที่อ็อบเจกต์ต้องการสิทธิ์การเข้าถึงที่แตกต่างกัน
* Smart reference: ทำหน้าที่แทน Pointer เปล่าๆ โดยสามารถดำเนินการเพิ่มเติมบางอย่างเมื่อมีการเข้าถึงอ็อบเจกต์ได้`,
  },
  {
    lesson_id: 77,
    module_id: 22,
    lesson_name: ` Move Tool `,
    content: `1. Move Tool (ปุ่มลัด: กด V) เป็นเครื่องมือตั้งต้น (Default) และถูกใช้งานบ่อยที่สุดตลอดการทำโปรเจกต์
หน้าที่หลัก: ใช้สำหรับคลิกเลือกวัตถุ (Select) และคลิกค้างเพื่อลากย้ายตำแหน่ง (Move) ไปมาบนพื้นที่ทำงาน
พฤติกรรมการปรับขนาด (Resizing): เมื่อคุณนำเมาส์ไปชี้ที่มุมหรือขอบของวัตถุแล้วดึงขยาย สิ่งที่ Move Tool ทำคือการ "ขยายแค่ขอบเขตหรือกล่องบรรจุ (Bounding Box)" ของวัตถุนั้นๆ
ข้อควรระวังและจุดสังเกตสำคัญ: * กล่องข้อความ (Text): หากคุณใช้ Move Tool ดึงขยายกล่องข้อความ สิ่งที่กว้างขึ้นจะมีแค่ "พื้นที่กล่อง" เท่านั้น แต่ "ขนาดตัวอักษร (Font Size)" จะยังคงมีขนาดเท่าเดิมเป๊ะ ไม่ได้ใหญ่ตามกล่องแต่อย่างใด
เส้นขอบและมุมโค้ง (Stroke & Corner Radius): หากรูปทรงเรขาคณิตของคุณมีการใส่ความหนาของเส้นขอบ หรือทำมุมโค้งมนเอาไว้ เมื่อดึงขยายด้วย Move Tool ขนาดของรูปทรงจะใหญ่ขึ้น แต่ความหนาของเส้นขอบและความโค้งจะยังคงที่ (ตัวเลขเท่าเดิม) ทำให้บางครั้งสัดส่วนภาพรวมดูผิดเพี้ยนไปจากที่ตั้งใจไว้
`,
  },
  {
    lesson_id: 78,
    module_id: 22,
    lesson_name: `Scale Tool`,
    content: `2. Scale Tool (ปุ่มลัด: กด K) เครื่องมือนี้จะซ่อนอยู่ในเมนู Dropdown เดียวกับ Move Tool (คลิกลูกศรเล็กๆ ข้าง Move Tool เพื่อเลือก หรือกด K บนคีย์บอร์ด)
หน้าที่หลัก: ใช้สำหรับย่อหรือขยายวัตถุแบบ "คงสัดส่วน (Proportional Scaling)"
พฤติกรรมการปรับขนาด (Scaling): เมื่อคุณใช้ Scale Tool ดึงขยายวัตถุ Figma จะนำวัตถุชิ้นนั้นมาคำนวณสัดส่วนใหม่ทั้งหมด ทำให้ทุกสิ่งทุกอย่างที่อยู่ข้างในถูกขยายหรือย่อตามไปด้วยในสัดส่วนที่เป๊ะ 100%
จุดเด่นที่แตกต่างจาก Move Tool อย่างสิ้นเชิง: * กล่องข้อความ (Text): เมื่อดึงขยายกล่องข้อความด้วย Scale Tool ตัวหนังสือที่อยู่ข้างในจะค่อยๆ ขยายขนาด (Font Size) ใหญ่ตามขึ้นไปพร้อมๆ กับกล่อง
เส้นขอบและมุมโค้ง (Stroke & Corner Radius): หากคุณขยายปุ่มให้มีขนาดใหญ่ขึ้น 2 เท่า ความหนาของเส้นขอบและรัศมีมุมโค้งก็จะถูกคูณ 2 ให้หนาขึ้นตามไปด้วยโดยอัตโนมัติ
การใช้งานจริง: เครื่องมือนี้มีประโยชน์มากเวลาที่คุณออกแบบชิ้นงานที่มีความซับซ้อนเสร็จแล้ว (เช่น การ์ดสินค้า หรือ ปุ่มต่างๆ) แล้วต้องการนำไปย่อขยายเพื่อวางในหน้าจอขนาดอื่น การใช้ Scale Tool จะช่วยรักษาสัดส่วนทุกอย่างให้สวยงามเหมือนเดิมโดยที่คุณไม่ต้องมานั่งปรับแก้ขนาดฟอนต์หรือเส้นขอบใหม่ทีละจุด

`,
  },
  {
    lesson_id: 79,
    module_id: 15,
    lesson_name: `ความสำคัญของรูปแบบการออกแบบกลุ่มโครงสร้าง`,
    content: `รูปแบบกลุ่มโครงสร้างให้ประโยชน์ที่สำคัญหลายประการ ได้แก่:
* ลดความซับซ้อนของโค้ด (Simplify Code): ช่วยจัดระเบียบโค้ดโดยการเชื่อมต่ออ็อบเจกต์และคลาสอย่างชัดเจน ทำให้เข้าใจและจัดการความสัมพันธ์ที่ซับซ้อนได้ง่าย
* ลดการเขียนโค้ดซ้ำซ้อน (Reduce Duplicate Code): การนำโครงสร้างเดิมมาใช้ใหม่ช่วยป้องกันการเขียนโค้ดซ้ำ ทำให้โปรแกรมมีประสิทธิภาพและเกิดข้อผิดพลาดน้อยลง
* เพิ่มความยืดหยุ่น (Enhance Flexibility): ช่วยให้คุณสามารถเพิ่มหรือเปลี่ยนแปลงฟีเจอร์ได้โดยไม่ต้องแก้โค้ดเดิมมากเกินไป ทำให้โปรแกรมง่ายต่อการขยายหรือดัดแปลง
* ปรับปรุงให้อ่านง่ายขึ้น (Improve Readability): จัดเตรียมโครงสร้างที่ชัดเจนในการจัดระเบียบคลาสและอ็อบเจกต์ ทำให้คนอื่นในทีมเข้าใจและดูแลรักษาโค้ดได้ง่าย
* เพิ่มประสิทธิภาพการใช้ทรัพยากร (Optimize Resource Use): รูปแบบอย่าง Flyweight ช่วยลดการใช้หน่วยความจำและเพิ่มประสิทธิภาพโดยการแชร์ข้อมูลที่ใช้ร่วมกัน`,
  },
  {
    lesson_id: 80,
    module_id: 15,
    lesson_name: `ความท้าทายของรูปแบบการออกแบบกลุ่มโครงสร้าง`,
    content: `การใช้งานรูปแบบเหล่านี้ก็มีความท้าทายเช่นกัน:
* ความซับซ้อนที่เพิ่มขึ้น (Increased Complexity): รูปแบบอย่าง Decorator หรือ Proxy อาจเพิ่มเลเยอร์ให้โค้ด ทำให้ตามอ่านได้ยากขึ้น หากใช้หลายรูปแบบมากเกินไป โค้ดอาจซับซ้อนจนเกินงาม
* ปัญหาด้านประสิทธิภาพ (Performance Issues): บางรูปแบบ เช่น Flyweight อาจต้องอาศัยการประมวลผลเพิ่มเติมเพื่อจัดการอ็อบเจกต์ที่แชร์กัน ซึ่งอาจทำให้ระบบช้าลงหากใช้ไม่ระวัง
* ภาระในการบำรุงรักษา (Overhead in Maintenance): ยิ่งเพิ่มคลาสและ Interface เข้าไปมากเท่าไร การบำรุงรักษาหรืออัปเดตโค้ดก็อาจยากขึ้น นักพัฒนาใหม่อาจต้องใช้เวลาทำความเข้าใจโครงสร้างทั้งหมดนานขึ้น
* ความเสี่ยงจากการออกแบบเกินความจำเป็น (Risk of Overengineering): การใช้ Design Pattern พร่ำเพรื่อเป็นเรื่องที่เกิดขึ้นได้ง่าย ซึ่งนำไปสู่นามธรรมที่ไม่จำเป็น บางครั้งการเขียนโค้ดง่ายๆ โดยไม่ใช้ Pattern ก็ให้ผลลัพธ์ที่ดีและทำงานด้วยได้ง่ายกว่า
* ความยากในการหาจุดบกพร่อง (Difficulty in Debugging): ด้วยเลเยอร์ที่ซ้อนกันหลายชั้น การตามรอยบั๊กอาจเป็นเรื่องท้าทาย เพราะปัญหาอาจถูกซ่อนอยู่ลึกในโครงสร้างของ Pattern`,
  },
  {
    lesson_id: 81,
    module_id: 16,
    lesson_name: `รูปแบบการออกแบบกลุ่มพฤติกรรม`,
    content: `**รูปแบบการออกแบบกลุ่มพฤติกรรม (Behavioral Design Patterns)** มุ่งเน้นไปที่การสื่อสารและการโต้ตอบกันระหว่างอ็อบเจกต์ ช่วยในการจัดการว่าความรับผิดชอบจะถูกกระจายออกไปอย่างไร และอ็อบเจกต์ต่างๆ จะทำงานร่วมกันแบบไหน รูปแบบกลุ่มนี้ช่วยเพิ่มความยืดหยุ่นและลดความซับซ้อนของการควบคุมการไหลของข้อมูล (Control flows) ภายในระบบ
* อำนวยความสะดวกในการสื่อสารและการแบ่งปันความรับผิดชอบที่ชัดเจนระหว่างอ็อบเจกต์
* ช่วยจัดการเวิร์กโฟลว์ (Workflows) และโครงสร้างการควบคุมที่ซับซ้อน
* ส่งเสริมการเชื่อมต่อแบบหลวมๆ (Loose coupling) และปรับปรุงความยืดหยุ่นของระบบ`,
  },
  {
    lesson_id: 82,
    module_id: 16,
    lesson_name: `ประเภทของรูปแบบการออกแบบกลุ่มพฤติกรรม`,
    content: `รูปแบบกลุ่มพฤติกรรมมีทั้งหมด 10 รูปแบบหลัก ดังนี้:
1. **รูปแบบอ็อบเซิร์ฟเวอร์ (Observer Method Design Pattern)**
หรือที่รู้จักกันในชื่อ Dependents หรือ Publish-Subscribe รูปแบบนี้กำหนดความสัมพันธ์แบบ หนึ่ง-ต่อ-หลาย (One-to-many) ระหว่างอ็อบเจกต์ เมื่ออ็อบเจกต์หลัก (Subject) มีการเปลี่ยนสถานะ อ็อบเจกต์ที่ติดตามอยู่ทั้งหมด (Dependents/Observers) จะได้รับการแจ้งเตือนและอัปเดตโดยอัตโนมัติ ควรใช้เมื่อ / ประโยชน์การใช้งาน:
เมื่อการเปลี่ยนแปลงในอ็อบเจกต์หนึ่ง จำเป็นต้องไปเปลี่ยนแปลงอ็อบเจกต์อื่นๆ ด้วย โดยที่คุณไม่รู้จำนวนที่แน่ชัดว่ามีอ็อบเจกต์ที่ต้องเปลี่ยนกี่ตัว
เพื่อสร้างระบบ Publish-Subscribe เช่น ระบบจัดการเหตุการณ์ (Event handling) ในหน้าจอผู้ใช้งาน (GUI)
เพื่อลดการผูกมัด (Decouple) โดยที่อ็อบเจกต์หลักไม่จำเป็นต้องรู้รายละเอียดเจาะจงของอ็อบเจกต์ที่มาติดตามมัน

2. **รูปแบบกลยุทธ์ (Strategy Method Design Pattern)**
หรือเรียกว่า Policy รูปแบบนี้ใช้กำหนดกลุ่มของอัลกอริทึม ทำการห่อหุ้ม (Encapsulate) แต่ละตัวแยกกัน และทำให้มันสามารถสลับสับเปลี่ยนกันได้ Strategy ช่วยให้อัลกอริทึมสามารถเปลี่ยนแปลงได้อย่างอิสระจากไคลเอนต์ที่เรียกใช้งานมัน ควรใช้เมื่อ / ประโยชน์การใช้งาน:
เมื่อคุณมีอัลกอริทึมหลายตัวที่ใช้สลับกันได้ตามบริบท เช่น อัลกอริทึมการเรียงลำดับ (Bubble sort, Merge sort), การค้นหา, หรือวิธีการชำระเงิน
เพื่อสลับสับเปลี่ยนการทำงาน (Behavior) ในขณะที่โปรแกรมกำลังรัน (Runtime) โดยไม่ต้องแก้โค้ดฝั่งไคลเอนต์
เพื่อลดการใช้เงื่อนไข (If-else / Switch-case) ที่ซับซ้อนในการเลือกอัลกอริทึม

3. **รูปแบบสถานะ (State Method Design Pattern)**
หรือเรียกว่า Objects for states อนุญาตให้อ็อบเจกต์สามารถเปลี่ยนพฤติกรรมของตัวมันเองได้เมื่อสถานะภายใน (Internal state) ของมันเปลี่ยนไป เหมือนกับว่าตัวอ็อบเจกต์ได้เปลี่ยนคลาสของมันเอง ควรใช้เมื่อ / ประโยชน์การใช้งาน:
เมื่อการเขียนเงื่อนไข (If-else หรือ Switch-case) ภายในอ็อบเจกต์เริ่มยาวและซับซ้อนเกินไป
เมื่ออ็อบเจกต์มีการเปลี่ยนสถานะไปมาบ่อยครั้ง State pattern จะให้กลไกที่ชัดเจนในการจัดการการเปลี่ยนผ่านสถานะเหล่านั้น
เพื่อห่อหุ้มพฤติกรรมเฉพาะของแต่ละสถานะแยกไว้ในคลาสต่างหาก ทำให้โค้ดสะอาดขึ้น

4. **รูปแบบคำสั่ง (Command Method Design Pattern)**
เปลี่ยน คำขอ (Request) ให้กลายเป็นอ็อบเจกต์อิสระ (Stand-alone object) ที่รวบรวมข้อมูลทุกอย่างเกี่ยวกับคำขอนั้นไว้ เช่น ใครเป็นคนเรียก พารามิเตอร์คืออะไร และเมธอดไหนที่จะถูกใช้งาน ควรใช้เมื่อ / ประโยชน์การใช้งาน:
เพื่อแยกผู้ส่งคำขอ (Sender) ออกจากผู้ที่ทำหน้าที่รันคำสั่งนั้นจริงๆ (Receiver)
หากแอปพลิเคชันของคุณต้องการฟังก์ชัน เลิกทำ (Undo) และ ทำซ้ำ (Redo)
เพื่อเข้าคิว (Queue) คำสั่ง หรือบันทึกประวัติ (Log) คำขอไว้สำหรับการทำงานแบบหน่วงเวลา (Deferred execution)

5. **รูปแบบห่วงโซ่ความรับผิดชอบ (Chain Of Responsibility Method Design Pattern)**
อนุญาตให้ส่ง คำขอ ไปตามห่วงโซ่ของผู้จัดการ (Handlers) ผู้จัดการแต่ละคนในห่วงโซ่จะตัดสินใจว่า จะประมวลผลคำขอนั้นเอง หรือจะส่งต่อให้ผู้จัดการคนถัดไปในห่วงโซ่ ควรใช้เมื่อ / ประโยชน์การใช้งาน:
เพื่อจัดการคำขอแบบไดนามิก โดยไม่ต้องระบุผู้รับคำขอ (Receiver) อย่างเจาะจง
เพื่อสร้างท่อส่งผ่านการประมวลผล (Processing pipelines) ที่ยืดหยุ่น
เมื่อคุณต้องการเปลี่ยนพฤติกรรมการจัดการคำขอได้ง่ายๆ ในขณะที่โปรแกรมกำลังทำงาน

6. **รูปแบบเมธอดแม่แบบ (Template Method Design Pattern)**
กำหนด โครงร่าง (Skeleton) ของอัลกอริทึมไว้ในเมธอดหลัก และผลักไสให้คลาสลูก (Subclasses) ไปจัดการรายละเอียดในบางขั้นตอน รูปแบบนี้ช่วยให้คลาสลูกสามารถนิยามขั้นตอนเฉพาะบางอย่างใหม่ได้ โดยไม่ต้องเปลี่ยนโครงสร้างหลักของอัลกอริทึม ควรใช้เมื่อ / ประโยชน์การใช้งาน:
เพื่อบังคับใช้ลำดับขั้นตอนที่แน่นอนในอัลกอริทึม แต่ยังเปิดช่องให้ปรับแต่งรายละเอียดได้
เพื่อหลีกเลี่ยงการเขียนโค้ดซ้ำซ้อน (Duplicate code) โดยการนำโครงสร้างที่ใช้ร่วมกันกลับมาใช้ใหม่
หากคุณมีงานหรือกระบวนการที่คล้ายกัน ซึ่งต้องทำในบริบทที่แตกต่างกัน

7. **รูปแบบตัวแปลภาษา (Interpreter Method Design Pattern)**
กำหนดวิธีการตีความ (Interpret) และประเมินไวยากรณ์หรือนิพจน์ (Expressions) ของภาษา มันให้กลไกในการประเมินประโยคโดยใช้คลาสต่างๆ เป็นตัวแทนของกฎไวยากรณ์ ควรใช้เมื่อ / ประโยชน์การใช้งาน:
หากคุณต้องการตีความและประมวลผลคำสั่งในภาษาเฉพาะทาง (Domain-Specific Language - DSL)
เพื่อประเมินนิพจน์ (Expressions) แบบไดนามิกในช่วง Runtime
เมื่อแอปพลิเคชันของคุณจำเป็นต้องเพิ่มคำสั่งหรือกฎไวยากรณ์ใหม่ๆ อยู่เสมอ

8. **รูปแบบผู้เยี่ยมชม (Visitor Method Design Pattern)**
ช่วยให้คุณสามารถเพิ่มการทำงานใหม่ๆ ให้กับกลุ่มคลาสที่เกี่ยวข้องกันได้ โดยไม่ต้องไปดัดแปลงโครงสร้างของคลาสเหล่านั้น ควรใช้เมื่อ / ประโยชน์การใช้งาน:
เพื่อแยกอัลกอริทึมออกจากโครงสร้างของอ็อบเจกต์ ทำให้โค้ดสะอาดขึ้น
เมื่อโครงสร้างอ็อบเจกต์ของคุณค่อนข้างนิ่ง (ไม่เปลี่ยนบ่อย) แต่คุณคาดว่าจะต้องเพิ่มฟังก์ชันการทำงานใหม่ๆ เข้าไปอยู่เรื่อยๆ
เพื่อทำงานแบบข้ามไปมาระหว่างอ็อบเจกต์หลายๆ ตัวโดยไม่ต้องแก้โค้ดของอ็อบเจกต์นั้น

9. **รูปแบบตัวกลาง (Mediator Method Design Pattern)**
กำหนดอ็อบเจกต์ศูนย์กลางที่ทำหน้าที่ควบคุมวิธีการที่กลุ่มอ็อบเจกต์โต้ตอบกัน Mediator ช่วยลดการผูกมัด (Promotes loose coupling) โดยการห้ามไม่ให้อ็อบเจกต์ต่างๆ คุยกันเองโดยตรง แต่ต้องคุยผ่านตัวกลางเท่านั้น ควรใช้เมื่อ / ประโยชน์การใช้งาน:
เมื่อระบบของคุณประกอบด้วยกลุ่มอ็อบเจกต์ที่ต้องสื่อสารกันไปมาอย่างซับซ้อนและวุ่นวาย
เพื่อรวมศูนย์การสื่อสารที่ซับซ้อน ลดความพึ่งพากันระหว่างคอมโพเนนต์
เพื่อทำให้การบำรุงรักษาง่ายขึ้น โดยรวมลอจิกการโต้ตอบทั้งหมดไว้ใน Mediator ที่เดียว

10. **รูปแบบบันทึกความจำ (Memento Method Design Patterns)**
ใช้สำหรับ จับภาพ (Capture) และ กู้คืน (Restore) สถานะภายในของอ็อบเจกต์โดยไม่ทำลายการห่อหุ้ม (Violating encapsulation) ช่วยให้คุณบันทึกและย้อนสถานะกลับไปยังจุดก่อนหน้าได้ ควรใช้เมื่อ / ประโยชน์การใช้งาน:
เพื่อสร้างฟังก์ชัน เลิกทำ (Undo) หรือย้อนกลับ (Rollback)
เพื่อจัดการการบันทึกเวอร์ชัน (Versioning) หรือจุดตรวจสอบ (Checkpoints) ของสถานะอ็อบเจกต์
เมื่อคุณต้องการย้อนกลับการเปลี่ยนแปลงในกรณีที่เกิดข้อผิดพลาด (Errors/Exceptions) เช่น ในการทำธุรกรรมของฐานข้อมูล (Database transactions)`,
  },
  {
    lesson_id: 83,
    module_id: 16,
    lesson_name: `ความสำคัญของรูปแบบการออกแบบกลุ่มพฤติกรรม`,
    content: `* กำหนดการสื่อสารที่ชัดเจน: ระหว่างอ็อบเจกต์ ทำให้ระบบบำรุงรักษาง่ายขึ้น
* ส่งเสริมการนำโค้ดกลับมาใช้ซ้ำ: โดยการห่อหุ้มพฤติกรรมไว้ในคลาสแยกต่างหาก
* จัดการความซับซ้อน: ช่วยจัดการกระแสการควบคุม (Control flows) และการโต้ตอบกันได้อย่างมีประสิทธิภาพ
* ปรับปรุงความยืดหยุ่น: ช่วยให้สามารถเปลี่ยนแปลงพฤติกรรมของอ็อบเจกต์ได้แบบไดนามิก`,
  },
  {
    lesson_id: 84,
    module_id: 16,
    lesson_name: `ความท้าทายของรูปแบบการออกแบบกลุ่มพฤติกรรม`,
    content: `* เพิ่มความซับซ้อนให้ระบบ: อาจทำให้โค้ดอ่านและทำความเข้าใจได้ยากขึ้น
* คลาสล้นมือ: การใช้งานมากเกินไปอาจนำไปสู่การสร้างคลาสและอ็อบเจกต์ขนาดเล็กจำนวนมหาศาล
* ดีบัก (Debug) ยาก: ด้วยเลเยอร์ของการเรียกใช้งานที่ส่งต่อกันหลายทอด (Indirection) อาจทำให้ตามรอยบั๊กได้ลำบาก
* ผลกระทบด้านประสิทธิภาพ: การใช้ผิดวิธีอาจลดประสิทธิภาพระบบ หรือทำให้การตามรอยพฤติกรรมการทำงานทำได้ยากขึ้น`,
  },
  {
    lesson_id: 85,
    module_id: 17,
    lesson_name: `คุณภาพซอฟต์แวร์คืออะไร?`,
    content: `ตามธรรมเนียมแล้ว ผลิตภัณฑ์ที่มีคุณภาพสูงมักถูกนิยามในแง่ของ ความเหมาะสมกับวัตถุประสงค์การใช้งาน (Fitness of purpose) นั่นคือ ผลิตภัณฑ์คุณภาพสูงจะเป็นสิ่งที่ผู้ใช้ต้องการนำไปใช้งานอย่างแท้จริง สำหรับผลิตภัณฑ์ประเภทซอฟต์แวร์ (Code products) ความเหมาะสมกับวัตถุประสงค์มักจะถูกวัดจากความพึงพอใจต่อ ความต้องการ ที่ถูกระบุไว้ในเอกสาร SRS (Software Requirement Specification)

แม้ว่า ความเหมาะสมกับวัตถุประสงค์การใช้งาน อาจเป็นนิยามคุณภาพที่น่าพอใจสำหรับผลิตภัณฑ์บางอย่าง เช่น รถยนต์ พัดลมตั้งโต๊ะ เครื่องบด ฯลฯ แต่สำหรับซอฟต์แวร์ คำว่า ความเหมาะสมกับวัตถุประสงค์การใช้งาน ยังไม่ใช่นิยามของคุณภาพที่น่าพอใจและครอบคลุมอย่างสมบูรณ์

### **คุณภาพซอฟต์แวร์คืออะไร? (What is Software Quality?)**
คุณภาพซอฟต์แวร์บ่งบอกว่าผลิตภัณฑ์นั้นดีและน่าเชื่อถือเพียงใด เพื่อให้เห็นภาพ ลองจินตนาการถึงซอฟต์แวร์ที่ทำงานได้ถูกต้องตามฟังก์ชัน (Functionally correct) มันสามารถทำงานได้ตามที่ระบุไว้ในเอกสาร SRS ทุกประการ แต่กลับมีหน้าจอโปรแกรมที่แทบจะใช้งานไม่ได้เลย แม้ว่ามันจะทำงานได้ถูกต้องในเชิงฟังก์ชัน แต่เราก็มักจะไม่มองว่ามันเป็นผลิตภัณฑ์ที่มีคุณภาพสูง

อีกตัวอย่างหนึ่งคือ ผลิตภัณฑ์ที่มีทุกอย่างที่ผู้ใช้ต้องการ แต่มีซอร์สโค้ดที่แทบจะไม่สามารถทำความเข้าใจได้และไม่สามารถนำไปบำรุงรักษา (Maintain) ต่อได้ ดังนั้น แนวคิดแบบดั้งเดิมที่มองคุณภาพซอฟต์แวร์เป็นเพียง ความเหมาะสมกับวัตถุประสงค์ จึงยังไม่เพียงพอ
`,
  },
  {
    lesson_id: 86,
    module_id: 17,
    lesson_name: `ปัจจัยของคุณภาพซอฟต์แวร์ (Factors of Software Quality)`,
    content: `มุมมองสมัยใหม่เกี่ยวกับซอฟต์แวร์คุณภาพสูง จะเชื่อมโยงกับปัจจัยด้านคุณภาพหลายประการ ดังต่อไปนี้:
* Portability (ความสามารถในการพอร์ต/การย้ายระบบ): ซอฟต์แวร์จะถือว่าพอร์ตได้ หากสามารถนำไปปรับใช้ให้ทำงานในสภาพแวดล้อมที่แตกต่างกัน เครื่องคอมพิวเตอร์ที่ต่างกัน หรือทำงานร่วมกับซอฟต์แวร์อื่นๆ ได้อย่างง่ายดาย
* Usability (ความสามารถในการใช้งาน): ซอฟต์แวร์มีการใช้งานที่ดี หากผู้ใช้ในกลุ่มต่างๆ (ทั้งผู้เชี่ยวชาญและผู้เริ่มต้น) สามารถเรียกใช้งานฟังก์ชันต่างๆ ของผลิตภัณฑ์ได้อย่างง่ายดาย
* Reusability (ความสามารถในการนำกลับมาใช้ใหม่): ซอฟต์แวร์นำกลับมาใช้ใหม่ได้ดี หากโมดูลต่างๆ ของผลิตภัณฑ์สามารถนำไปใช้ซ้ำเพื่อพัฒนาผลิตภัณฑ์ใหม่ๆ ได้อย่างง่ายดาย
* Correctness (ความถูกต้อง): ซอฟต์แวร์มีความถูกต้อง หากข้อกำหนดความต้องการต่างๆ ที่ระบุไว้ในเอกสาร SRS ได้รับการนำไปปฏิบัติอย่างถูกต้อง
* Maintainability (ความสามารถในการบำรุงรักษา): ซอฟต์แวร์สามารถบำรุงรักษาได้ หากข้อผิดพลาด (Errors) สามารถแก้ไขได้ง่ายเมื่อตรวจพบ สามารถเพิ่มฟังก์ชันใหม่ๆ เข้าไปได้ง่าย และสามารถปรับเปลี่ยนการทำงานได้อย่างสะดวก
* Reliability (ความน่าเชื่อถือ): ซอฟต์แวร์จะมีความน่าเชื่อถือมากขึ้นหากมีอัตราการล้มเหลว (Failures) น้อยลง เนื่องจากวิศวกรซอฟต์แวร์ไม่ได้ตั้งใจให้ซอฟต์แวร์ของตนล้มเหลว ความน่าเชื่อถือจึงขึ้นอยู่กับจำนวนและประเภทของความผิดพลาดที่พวกเขาทำ ผู้ออกแบบสามารถปรับปรุงความน่าเชื่อถือได้โดยการทำให้ซอฟต์แวร์ง่ายต่อการนำไปใช้และปรับเปลี่ยน มีการทดสอบอย่างละเอียด และมั่นใจได้ว่าถ้าระบบล้มเหลว ระบบจะสามารถจัดการหรือกู้คืนตัวเองได้อย่างง่ายดาย
* Efficiency (ประสิทธิภาพ): ยิ่งซอฟต์แวร์มีประสิทธิภาพมากเท่าใด ก็ยิ่งใช้เวลา CPU, หน่วยความจำ, พื้นที่ดิสก์, แบนด์วิดท์เครือข่าย และทรัพยากรอื่นๆ น้อยลงเท่านั้น สิ่งนี้สำคัญสำหรับลูกค้าในการลดต้นทุนการรันซอฟต์แวร์ (แม้ว่าคอมพิวเตอร์ปัจจุบันจะทรงพลังจนเรื่อง CPU หรือหน่วยความจำจะไม่น่ากังวลเท่าในอดีตก็ตาม)
* `,
  },
  {
    lesson_id: 87,
    module_id: 17,
    lesson_name: `ระบบการจัดการคุณภาพซอฟต์แวร์ (Software Quality Management System)`,
    content: `ระบบการจัดการคุณภาพซอฟต์แวร์ประกอบด้วยวิธีการต่างๆ ที่ผู้มีอำนาจหรือทีมบริหารใช้เพื่อพัฒนาผลิตภัณฑ์ให้ได้คุณภาพตามที่ต้องการ ตัวอย่างวิธีการบางส่วน ได้แก่:

* Managerial Structure (โครงสร้างการบริหารจัดการ): ระบบคุณภาพมีหน้าที่รับผิดชอบในการจัดการโครงสร้างโดยรวม ทุกองค์กรต้องมีโครงสร้างการบริหารจัดการ
* Individual Responsibilities (ความรับผิดชอบส่วนบุคคล): แต่ละคนในองค์กรต้องมีความรับผิดชอบบางอย่างที่ผู้บริหารระดับสูงควรทบทวน และทุกคนในระบบต้องดำเนินการเรื่องนี้อย่างจริงจัง
* Quality System Activities (กิจกรรมของระบบคุณภาพ): กิจกรรมที่ทุกระบบคุณภาพต้องมี คือ การตรวจสอบโครงการ (Project Auditing) และการทบทวนระบบคุณภาพ สิ่งเหล่านี้ช่วยในการพัฒนาวิธีการและแนวทางปฏิบัติ
`,
  },
  {
    lesson_id: 88,
    module_id: 17,
    lesson_name: `วิวัฒนาการของระบบการจัดการคุณภาพ (Evolution of Quality Management System)`,
    content: `โดยพื้นฐานแล้ว ระบบคุณภาพมีวิวัฒนาการมาอย่างต่อเนื่องในช่วงหลายปีที่ผ่านมา วิวัฒนาการนี้เป็นกระบวนการ 4 ขั้นตอน:
* Inspection (การตรวจสอบ): งานตรวจสอบผลิตภัณฑ์เป็นเครื่องมือเบื้องต้นสำหรับการควบคุมคุณภาพ (QC)
* Quality Control (การควบคุมคุณภาพ): งานหลักของการควบคุมคุณภาพคือการตรวจจับอุปกรณ์หรือจุดที่มีข้อบกพร่อง และช่วยค้นหาสาเหตุที่ทำให้เกิดข้อบกพร่องนั้น รวมถึงช่วยในการแก้ไขบั๊ก
* Quality Assurance (การประกันคุณภาพ): การประกันคุณภาพช่วยองค์กรในการสร้างผลิตภัณฑ์ที่มีคุณภาพดี ช่วยยกระดับคุณภาพของผลิตภัณฑ์โดยการให้ผลิตภัณฑ์ผ่านการตรวจสอบความปลอดภัย
* Total Quality Management - TQM (การบริหารคุณภาพทั่วทั้งองค์กร): TQM จะตรวจสอบและรับรองว่า ขั้นตอนและกระบวนการทั้งหมดจะต้องได้รับการปรับปรุงอย่างต่อเนื่องเป็นประจำผ่านการวัดผลกระบวนการทำงาน

        คุณภาพซอฟต์แวร์ช่วยรับประกันว่าผลิตภัณฑ์จะมีความน่าเชื่อถือ บำรุงรักษาได้ และเป็นมิตรต่อผู้ใช้งาน ซึ่งถือเป็นการก้าวข้ามแค่การทำตามข้อกำหนด (Requirements) ไปอีกขั้น มันเกี่ยวข้องกับปัจจัยหลัก เช่น ความสามารถในการพอร์ต ความสามารถในการใช้งาน ความถูกต้อง และประสิทธิภาพ ระบบการจัดการคุณภาพที่แข็งแกร่งและกระบวนการปรับปรุงอย่างต่อเนื่องจะช่วยให้เราบรรลุมาตรฐานเหล่านี้ได้ ซอฟต์แวร์ที่มีคุณภาพสูงคือซอฟต์แวร์ที่ทำงานได้จริง มีประสิทธิภาพ และสามารถปรับตัวให้เข้ากับความต้องการของผู้ใช้งาน
`,
  },
  {
    lesson_id: 89,
    module_id: 18,
    lesson_name: `การประกันคุณภาพซอฟต์แวร์คืออะไร?`,
    content: `SQA คือชุดของกิจกรรมที่ช่วยให้มั่นใจว่า กระบวนการ (Processes) ขั้นตอน (Procedures) และมาตรฐาน (Standards) ต่างๆ มีความเหมาะสมกับโปรเจกต์และถูกนำไปใช้อย่างถูกต้อง

SQA เป็นกระบวนการที่ทำงาน คู่ขนาน ไปกับการพัฒนาซอฟต์แวร์ โดยมุ่งเน้นที่การปรับปรุงกระบวนการพัฒนาเพื่อ ป้องกัน ปัญหาไม่ให้เกิดขึ้นตั้งแต่แรก ดีกว่าปล่อยให้ลุกลามจนกลายเป็นเรื่องใหญ่ SQA ถือเป็น กิจกรรมครอบจักรวาล (Umbrella activity) ที่ประยุกต์ใช้ตลอดวงจรการพัฒนาซอฟต์แวร์ทั้งหมด

*(หมายเหตุ: คุณภาพของซอฟต์แวร์มักได้รับการตรวจสอบยืนยันจากหน่วยงานบุคคลที่สาม เช่น องค์การระหว่างประเทศว่าด้วยการมาตรฐาน หรือ ISO)*
`,
  },
  {
    lesson_id: 90,
    module_id: 18,
    lesson_name: `องค์ประกอบของ SQA (Elements of Software Quality Assurance)`,
    content: `ในการทำ SQA จะมีองค์ประกอบที่ต้องคำนึงถึงและจัดการ ดังนี้:
1. Standards (มาตรฐาน): องค์กรอย่าง IEEE หรือ ISO ได้สร้างมาตรฐานวิศวกรรมซอฟต์แวร์ไว้มากมาย หน้าที่ของ SQA คือตรวจสอบให้แน่ใจว่าทีมงานปฏิบัติตามมาตรฐานที่บริษัทเลือกใช้ และชิ้นงานทั้งหมดสอดคล้องกับมาตรฐานนั้น
2. Reviews and audits (การทบทวนและการตรวจสอบ): * Technical reviews: ทำโดยวิศวกรเพื่อหาข้อผิดพลาดของโค้ด 
    - Audits: ทำโดยบุคลากร SQA เพื่อให้แน่ใจว่ามีการปฏิบัติตามแนวทางด้านคุณภาพ
4. Testing (การทดสอบ): เป็นกระบวนการควบคุมคุณภาพที่มีเป้าหมายเพื่อ ค้นหาบั๊ก หน้าที่ของ SQA คือต้องดูแลให้การทดสอบนี้ถูกวางแผนและดำเนินการอย่างมีประสิทธิภาพ
5. Error/defect collection and analysis (การรวบรวมและวิเคราะห์ข้อผิดพลาด): รวบรวมข้อมูลบั๊กเพื่อนำมาวิเคราะห์ว่า มันเกิดขึ้นได้อย่างไร และ กิจกรรมใดที่จะช่วยกำจัดมันได้ดีที่สุด
6. Change management (การจัดการการเปลี่ยนแปลง): ตรวจสอบให้แน่ใจว่ามีการวางแนวปฏิบัติในการจัดการความเปลี่ยนแปลงต่างๆ ในโปรเจกต์อย่างเพียงพอ
7. Education (การศึกษา/การฝึกอบรม): เป็นผู้นำในการปรับปรุงกระบวนการ สนับสนุนโปรแกรมการฝึกอบรมให้วิศวกรซอฟต์แวร์และผู้เกี่ยวข้อง
8. Security management (การจัดการความปลอดภัย): ตรวจสอบว่ามีการใช้กระบวนการและเทคโนโลยีที่เหมาะสม เพื่อให้ซอฟต์แวร์ปลอดภัยจากการถูกโจมตี
9. Safety (ความปลอดภัยในชีวิตและทรัพย์สิน): ประเมินผลกระทบหากซอฟต์แวร์ล้มเหลว และริเริ่มขั้นตอนเพื่อลดความเสี่ยง (เช่น ซอฟต์แวร์ทางการแพทย์ หรือเครื่องบิน)
10. Risk management (การจัดการความเสี่ยง): ตรวจสอบว่ามีการจัดการความเสี่ยงอย่างถูกต้องและมี แผนสำรองฉุกเฉิน (Contingency plans) เตรียมไว้


`,
  },
  {
    lesson_id: 91,
    module_id: 18,
    lesson_name: `จุดสนใจหลักของ SQA`,
    content: `SQA จะให้ความสำคัญกับคุณลักษณะของซอฟต์แวร์ดังต่อไปนี้:
* Portability (ความสามารถในการพอร์ต): ความสามารถในการนำซอฟต์แวร์ไปปรับใช้กับสภาพแวดล้อมหรือแพลตฟอร์มต่างๆ ได้ง่ายโดยไม่ต้องรื้อโค้ดใหม่
* Usability (ความสามารถในการใช้งาน): ใช้งานง่าย เรียนรู้ได้ไว ไม่ซับซ้อนจนทำให้ผู้ใช้หงุดหงิด
* Reusability (ความสามารถในการนำกลับมาใช้ใหม่): การออกแบบคอมโพเนนต์ให้สามารถนำไปใช้ซ้ำในโปรเจกต์อื่นได้ เพื่อลดเวลาการพัฒนาลง
* Correctness (ความถูกต้อง): ซอฟต์แวร์ต้องประมวลผลและให้ผลลัพธ์ที่ถูกต้องตามข้อกำหนดเสมอ
* Maintainability (ความสามารถในการบำรุงรักษา): โค้ดถูกจัดระเบียบมาดี ทำให้ในอนาคตสามารถแก้ไข อัปเดต หรือต่อยอดได้ง่าย
* Error Control (การควบคุมข้อผิดพลาด): มีกลไกตรวจจับและกู้คืนระบบจากข้อผิดพลาดอย่างนุ่มนวล (Gracefully) โดยไม่ทำให้ระบบล่มทั้งหมด
`,
  },
  {
    lesson_id: 92,
    module_id: 18,
    lesson_name: `กิจกรรมหลักในการทำ SQA (Major Activities in SQA)`,
    content: `* SQA Management Plan: วางแผนการทำ SQA ตลอดทั้งโปรเจกต์ และประเมินทักษะของทีม SQA
* Set The Check Points: กำหนด จุดตรวจสอบ เป็นระยะๆ เพื่อประเมินผลการทำงานของโปรเจกต์
* Measure Change Impact: เมื่อแก้บั๊กหนึ่ง อาจทำให้เกิดบั๊กใหม่ (Regression) ทีม SQA ต้องวัดผลกระทบของการเปลี่ยนแปลง และตรวจสอบความเข้ากันได้ของการแก้ไขนั้นกับทั้งระบบ
* Multi testing Strategy: ไม่พึ่งพาวิธีการทดสอบเพียงแบบเดียว ควรใช้เครื่องมือและกลยุทธ์ที่หลากหลาย
* Manage Good Relations: สร้างความสัมพันธ์ที่ดีระหว่างทีม SQA และทีมโปรแกรมเมอร์ หากสองทีมนี้ขัดแย้งกัน โปรเจกต์จะพังแน่นอน
* Maintaining records and reports: จัดทำเอกสารและเก็บประวัติทุกอย่าง (Test cases, Defects, Cycles) ไว้อย่างครบถ้วน
* Reviews software engineering activities: ระบุขั้นตอนการทำงาน ทำเอกสาร และยืนยันความถูกต้องของผลิตภัณฑ์
* Formalize deviation handling: ติดตามและทำเอกสารสิ่งที่เบี่ยงเบนไปจากแผนอย่างเป็นทางการ`,
  },
  {
    lesson_id: 93,
    module_id: 18,
    lesson_name: `ข้อดี - ข้อเสีย ของ SQA (Benefits vs. Disadvantages)`,
    content: `##### ข้อดี (Benefits)
* ได้ซอฟต์แวร์ที่มีคุณภาพสูง มีความน่าเชื่อถือ
* ประหยัดเวลาและค่าใช้จ่ายในระยะยาว (High-quality saves time & cost)
* เพิ่มส่วนแบ่งการตลาดให้บริษัท เพราะสินค้ามีคุณภาพ
* ลดต้นทุนการบำรุงรักษา: ทำผลงานให้ออกมาดีตั้งแต่ครั้งแรก ดีกว่าปล่อยสินค้าที่เต็มไปด้วยบั๊กออกไป แล้วต้องมาติดอยู่ในวงจรการซ่อมแซมที่ไม่รู้จบ ซึ่งทั้งแพงและเสียเวลา
##### ข้อเสีย (Disadvantages)
* Cost (ต้นทุนสูง): ต้องใช้ทรัพยากรและงบประมาณเพิ่มขึ้น
* Time Consuming (ใช้เวลามาก): กระบวนการทดสอบอาจทำให้โปรเจกต์ล่าช้า
* Overhead (ภาระงานเอกสาร): เพิ่มภาระด้านการจัดการและทำรายงาน ซึ่งอาจดูไม่คุ้มค่าสำหรับโปรเจกต์ขนาดเล็ก
* Resource Intensive (ใช้บุคลากรเฉพาะทาง): ต้องการคนที่มีทักษะด้านเครื่องมือและระเบียบวิธีทดสอบ ซึ่งมีค่าตัวสูงและหาตัวจับยาก
* Resistance to Change (การต่อต้านจากทีม): ทีมงานบางคนอาจมองว่า SQA เป็นเรื่องยุ่งยาก จู้จี้ (Bureaucratic) ทำให้ต่อต้านการนำระบบนี้มาใช้
* Not Foolproof (ไม่รับประกัน 100%): ต่อให้มี SQA ที่ดีแค่ไหน ซอฟต์แวร์ก็ยังอาจมีบั๊กหลุดรอดไปได้ SQA ไม่สามารถเสกให้บั๊กหายไปได้ 100%
* Complexity (ความซับซ้อน): ในโปรเจกต์ใหญ่ๆ การจัดการกิจกรรม SQA ต้องใช้การประสานงานที่ซับซ้อนมาก
`,
  },
  {
    lesson_id: 94,
    module_id: 19,
    lesson_name: `กลยุทธ์การทดสอบที่พบบ่อย`,
    content: `การทดสอบซอฟต์แวร์ (Software Testing) คือกระบวนการประเมินแอปพลิเคชันซอฟต์แวร์เพื่อตรวจสอบว่ามันทำงานได้ตามข้อกำหนดที่ระบุไว้หรือไม่ และเพื่อค้นหาข้อบกพร่อง (Defects) ที่อาจเกิดขึ้น

**กลยุทธ์การทดสอบที่พบบ่อย (Common Testing Strategies)**
* Black box testing (การทดสอบกล่องดำ): ทดสอบฟังก์ชันการทำงานของซอฟต์แวร์โดยไม่ได้เข้าไปดูโครงสร้างโค้ดภายใน
* White box testing (การทดสอบกล่องขาว): ทดสอบโดยเจาะลึกเข้าไปดูโครงสร้างโค้ดและตรรกะการทำงานภายในของซอฟต์แวร์
* Unit testing (การทดสอบระดับหน่วย): ทดสอบหน่วยย่อยหรือคอมโพเนนต์แต่ละตัวของโปรแกรม เพื่อให้แน่ใจว่าทำงานได้ตามที่ออกแบบไว้
* Integration testing (การทดสอบการรวมระบบ): ทดสอบการเชื่อมต่อกันของคอมโพเนนต์ต่างๆ เพื่อดูว่าพวกมันสามารถทำงานร่วมกันเป็นระบบเดียวได้หรือไม่
* Functional testing (การทดสอบฟังก์ชัน): ทดสอบว่าระบบสามารถทำงานได้ตรงตามข้อกำหนดด้านฟังก์ชันการทำงาน (Functional requirements) หรือไม่
* System testing (การทดสอบระบบ): ทดสอบระบบซอฟต์แวร์แบบเบ็ดเสร็จทั้งระบบ เพื่อให้แน่ใจว่าตรงตามข้อกำหนดทั้งหมดที่ระบุไว้
* Acceptance testing (การทดสอบการยอมรับ): ทดสอบเพื่อให้แน่ใจว่าซอฟต์แวร์ทำงานได้ตรงตามความคาดหวังของลูกค้าหรือผู้ใช้งานจริง (End-user)
* Regression testing (การทดสอบถดถอย): การทดสอบซ้ำหลังจากที่มีการแก้ไขหรืออัปเดตโค้ด เพื่อเมกชัวร์ว่าการแก้ไขนั้นไม่ได้ไปสร้างบั๊กใหม่ขึ้นมา
* Performance testing (การทดสอบประสิทธิภาพ): ทดสอบเพื่อดูคุณลักษณะด้านประสิทธิภาพ เช่น ความเร็ว (Speed), ความสามารถในการขยายตัว (Scalability), และความเสถียร (Stability)
* Security testing (การทดสอบความปลอดภัย): ทดสอบเพื่อหาช่องโหว่และทำให้แน่ใจว่าซอฟต์แวร์ผ่านมาตรฐานความปลอดภัย
* `,
  },
  {
    lesson_id: 95,
    module_id: 19,
    lesson_name: `วัตถุประสงค์ของการทดสอบซอฟต์แวร์ (ตามแนวคิดของ Glen Myers)`,
    content: `1. การทดสอบคือกระบวนการตรวจสอบและสืบสวนโปรแกรม เพื่อหาว่ามี Error หรือไม่ และระบบตอบสนองข้อกำหนดได้จริงไหม
2. หากการทดสอบสามารถค้นพบ Error ได้จำนวนมาก ถือเป็นตัวชี้วัดว่าการทดสอบนั้นทำได้ดี และเป็นสัญญาณของ ชุดการทดสอบ (Test case) ที่มีคุณภาพ
3. การค้นพบ Error ที่ยังไม่เคยมีใครค้นพบมาก่อน ถือเป็นเครื่องยืนยันว่า Test case นั้นประสบความสำเร็จและยอดเยี่ยม
`,
  },
  {
    lesson_id: 96,
    module_id: 19,
    lesson_name: `กลยุทธ์การทดสอบซอฟต์แวร์ภาพรวม (Overall Testing Strategies)`,
    content: `เป้าหมายหลักของการทดสอบซอฟต์แวร์คือ การออกแบบการทดสอบให้สามารถค้นหา Error ชนิดต่างๆ ได้อย่างเป็นระบบ โดยใช้เวลาและแรงงานให้น้อยที่สุด เพื่อให้การพัฒนาซอฟต์แวร์รวดเร็วขึ้น กลยุทธ์โดยรวมประกอบด้วย:
1. กำหนด Requirement ให้วัดผลได้ตั้งแต่ก่อนเริ่ม: ต้องระบุคุณลักษณะด้านคุณภาพให้ชัดเจน เช่น ความสามารถในการบำรุงรักษา (Maintainability), การประเมินความเสี่ยง (Probability), และความง่ายในการใช้งาน (Usability) สิ่งเหล่านี้ควรถูกระบุตามลำดับเพื่อผลการทดสอบที่ชัดเจน
2. ระบุเป้าหมายการทดสอบอย่างละเอียดและชัดเจน: เช่น ประสิทธิภาพการทำงาน, ความล้มเหลว (Failure), และต้นทุนในการแก้บั๊ก สิ่งเหล่านี้ต้องระบุไว้ใน Test Plan (แผนการทดสอบ)
3. ระบุกลุ่มผู้ใช้และสร้างโปรไฟล์ผู้ใช้แต่ละกลุ่ม: ใช้ Use cases เพื่ออธิบายการโต้ตอบระหว่างผู้ใช้กลุ่มต่างๆ กับระบบ เพื่อระบุความต้องการที่แท้จริงและทดสอบการใช้งานจริงของผลิตภัณฑ์
4. พัฒนา Test Plan ที่เน้น Rapid-Cycle Testing: การทดสอบแบบรอบสั้นช่วยยกระดับคุณภาพด้วยการระบุและวัดผลการเปลี่ยนแปลงที่จำเป็น แผนการทดสอบจึงเป็นเอกสารสำคัญที่ช่วยให้ Tester ทำงานนี้ได้
5. พัฒนาซอฟต์แวร์ให้แข็งแกร่ง (Robust) และตรวจจับ Error เองได้: ซอฟต์แวร์ควรถูกออกแบบมาให้เอื้อต่อการทำ Automated Testing และ Regression Testing เพื่อให้หาผลกระทบจากการแก้โค้ดได้ง่ายขึ้น
6. ใช้การทบทวนอย่างเป็นทางการ (Formal Reviews) เป็นตัวกรองก่อนเริ่มเทสต์: การตรวจสอบทางเทคนิคก่อนเริ่มทดสอบจริง จะช่วยหา Error ล่วงหน้า ช่วยลดเวลาและแรงงานที่ต้องใช้ในขั้นตอนทดสอบจริงได้อย่างมาก
7. จัดการทบทวนทางเทคนิคเพื่อประเมิน Test Strategy และ Test Cases: ช่วยค้นหาช่องโหว่ในวิธีการทดสอบ เพื่อพัฒนาคุณภาพของแผนการทดสอบให้ดีขึ้น
8. พัฒนากระบวนการเพื่อการพัฒนาอย่างต่อเนื่อง: ควรนำกลยุทธ์การทดสอบที่เคยวัดผลไว้แล้ว มาปรับใช้เป็นส่วนหนึ่งของการควบคุมกระบวนการเชิงสถิติ (Statistical process control) เพื่อวัดและควบคุมคุณภาพ
9. `,
  },
  {
    lesson_id: 97,
    module_id: 19,
    lesson_name: `ข้อดีและข้อเสียของการทดสอบซอฟต์แวร์`,
    content: `##### ข้อดี (Advantages):
* พัฒนาคุณภาพและความน่าเชื่อถือ (Improves quality and reliability): ช่วยเจอบั๊กและแก้ได้ตั้งแต่เนิ่นๆ ลดความเสี่ยงที่ระบบจะล้มเหลว
* ยกระดับประสบการณ์ผู้ใช้งาน (Enhances user experience): ช่วยค้นหาปัญหาที่ทำให้ใช้งานยาก
* เพิ่มความมั่นใจ (Increases confidence): ทำให้นักพัฒนาและผู้เกี่ยวข้องมั่นใจว่าซอฟต์แวร์ทำงานได้ตรงตามสเปก
* บำรุงรักษาง่ายขึ้น (Facilitates maintenance): เมื่อแก้บั๊กไปตั้งแต่แรก การอัปเดตและดูแลซอฟต์แวร์ในอนาคตก็จะง่ายขึ้น
* ลดต้นทุน (Reduces costs): การแก้บั๊กในขั้นตอนแรกๆ ใช้เงินน้อยกว่าการตามแก้ในระยะหลังๆ มาก
##### ข้อเสีย (Disadvantages):
* กินเวลา (Time-consuming): ยิ่งทดสอบละเอียดและครอบคลุม ยิ่งต้องใช้เวลามาก
* สิ้นเปลืองทรัพยากร (Resource-intensive): ต้องอาศัยบุคลากรที่มีทักษะเฉพาะและทรัพยากรต่างๆ ซึ่งมีราคาแพง
* ครอบคลุมไม่จำกัด (Limited coverage): การทดสอบจะเห็นผลเฉพาะกับจุดที่มี Test case รองรับ ทำให้มีโอกาสที่บั๊กบางตัวจะหลุดรอดไปได้
* ผลลัพธ์คาดเดายาก (Unpredictable results): ข้อบกพร่องบางอย่างจำลองสถานการณ์ให้เกิดซ้ำได้ยาก ทำให้แก้ไขลำบาก
* อาจทำให้ส่งมอบล่าช้า (Delays in delivery): หากใช้เวลาทดสอบนานกว่าที่คาด หรือเจอบั๊กร้ายแรง อาจทำให้โปรเจกต์ล่าช้าได้
* `,
  },
  {
    lesson_id: 98,
    module_id: 20,
    lesson_name: `ประวัติของ TDD`,
    content: `Test-Driven Development (TDD) คือวิธีการพัฒนาซอฟต์แวร์ที่คุณจะต้องเขียน ชุดทดสอบอัตโนมัติ (Automation Tests) ขึ้นมาก่อนที่จะเริ่มกระบวนการพัฒนาหรือการเขียนโค้ดจริง ในบทความนี้เราจะมาเรียนรู้ TDD อย่างละเอียดพร้อมกับประเด็นสำคัญต่างๆ ที่เกี่ยวข้อง
##### 
##### ประวัติของ TDD
TDD มีความคล้ายคลึงกับการเขียนโปรแกรมแบบ Test-first จากแนวคิด Extreme Programming ซึ่งเริ่มต้นขึ้นในปี 1999 อย่างไรก็ตาม TDD ได้รับความสนใจอย่างแพร่หลายด้วยตัวของมันเอง โปรแกรมเมอร์ยังใช้ TDD เพื่อปรับปรุงและแก้ไขโค้ดเก่าที่ถูกเขียนขึ้นด้วยวิธีการอื่นด้วย แนวคิดของ TDD ถูกคิดค้นขึ้นจากหนังสือการเขียนโปรแกรมเล่มเก่า ซึ่งแนะนำวิธีการให้คุณป้อนผลลัพธ์ที่คาดหวังด้วยตัวเองก่อน จากนั้นจึงเขียนโค้ดจนกว่าจะได้ผลลัพธ์จริงที่ตรงกัน หลังจากมีการสร้างเฟรมเวิร์ก xUnit ตัวแรกขึ้นมา แนวคิดนี้ก็ถูกนำมาปัดฝุ่นและทดลองใช้ ซึ่งนำไปสู่การจุดประกายการคิดค้น TDD ในเวลาต่อมา
##### 
##### Test Driven Development (TDD) คืออะไร?
TDD เป็นวิธีการพัฒนาซอฟต์แวร์ที่มุ่งเน้นไปที่การเขียน ชุดทดสอบอัตโนมัติ ก่อนที่จะลงมือเขียนโค้ดจริงสำหรับฟีเจอร์ใดๆ ของแอปพลิเคชันหรือผลิตภัณฑ์ แนวทางนี้ใช้วงจรการพัฒนาแบบสั้นๆ ที่ทำซ้ำไปมาเพื่อตรวจสอบคุณภาพและความถูกต้องของโค้ด
กล่าวง่ายๆ คือ TDD เป็นวิธีการเขียนโค้ดที่คุณจะ เขียนเทสต์ขึ้นมาก่อน และปล่อยให้มันรันไม่ผ่าน (Fail) จากนั้นจึง เขียนโค้ดเพื่อให้รันเทสต์นั้นผ่าน (Pass) และสุดท้ายคือ การจัดระเบียบโค้ดให้สะอาด (Refactor) กระบวนการนี้จะถูกทำซ้ำเมื่อมีฟีเจอร์ใหม่หรือมีการเปลี่ยนแปลง แตกต่างจากวิธีอื่นที่คุณอาจจะเขียนโค้ดทั้งหมดก่อนแล้วค่อยเทสต์ หรือเขียนเทสต์ทั้งหมดก่อนค่อยเขียนโค้ด แต่ TDD จะผสานการเขียนเทสต์และเขียนโค้ดเข้าด้วยกันเป็นหนึ่งเดียว
`,
  },
  {
    lesson_id: 99,
    module_id: 20,
    lesson_name: `กระบวนการของ TDD`,
    content: `**กระบวนการของ TDD**
เป็นกระบวนการที่มีการเขียน Test Cases ขึ้นมาก่อนที่จะเขียนโค้ดเพื่อตรวจสอบเคสเหล่านั้น มันอาศัยการทำซ้ำของวงจรการพัฒนาที่กระชับ TDD เป็นเทคนิคที่ใช้ Unit tests แบบอัตโนมัติเพื่อขับเคลื่อนการออกแบบ และช่วยให้ระบบไม่ผูกติดกัน (Decoupling)
กระบวนการของ TDD จะทำตามวงจรซ้ำๆ ที่เรียกว่า Red-Green-Refactor:
* Red (แดง): สร้าง Test case ขึ้นมาและทำให้มันรันไม่ผ่าน (Fail)
* Green (เขียว): เขียนโค้ด (ยังไงก็ได้) เพื่อทำให้ Test case นั้นรันผ่าน (Pass)
* Refactor (จัดระเบียบ): ปรับเปลี่ยนโค้ดเพื่อลดความซ้ำซ้อน จัดระเบียบให้โค้ดสะอาดและดีขึ้นโดยที่เทสต์ยังต้องรันผ่านอยู่
เมื่อคุณทำวงจร Red-Green-Refactor เสร็จสิ้นหนึ่งรอบ คุณก็แค่ทำกระบวนการนี้ซ้ำกับฟังก์ชันการทำงานหรือโค้ดยูนิตถัดไป ทุกครั้งที่คุณเขียนเทสต์ใหม่ โค้ดของคุณก็จะดีขึ้นและน่าเชื่อถือมากขึ้น ทำให้ซอฟต์แวร์โดยรวมแข็งแกร่งขึ้น
`,
  },
  {
    lesson_id: 100,
    module_id: 20,
    lesson_name: `แนวทางของ TDD`,
    content: `TDD มีแนวทางหลัก 2 รูปแบบ คือ Inside Out และ Outside In
1. **Inside Out (จากข้างในออกข้างนอก):** คุณจะเริ่มต้นด้วยการทดสอบหน่วยที่เล็กที่สุดของโค้ด เช่น ฟังก์ชันหรือเมธอดเดี่ยวๆ แนวทางนี้เรียกอีกอย่างว่า Detroit School of TDD หรือ Classicist
เน้นการทดสอบหน่วยที่เล็กที่สุดก่อน แล้วค่อยประกอบกันให้ใหญ่ขึ้น
สถาปัตยกรรมของซอฟต์แวร์จะค่อยๆ เผยให้เห็นเองตามธรรมชาติในขณะที่เขียนเทสต์
การออกแบบและสถาปัตยกรรมจะถูกขัดเกลาในช่วงขั้นตอน Refactor (ซึ่งบางครั้งอาจนำไปสู่การเปลี่ยนแปลงครั้งใหญ่)
เรียนรู้ได้ง่ายกว่าสำหรับผู้เริ่มต้น
ลดการใช้ Mocks (วัตถุจำลอง) ให้เหลือน้อยที่สุด
ช่วยป้องกันการออกแบบที่ซับซ้อนเกินความจำเป็น (Over-engineering)
2. **Outside In (จากข้างนอกเข้าข้างใน):** แนวทางนี้รู้จักกันในชื่อ London School of TDD หรือ Mockist จะเน้นไปที่การทดสอบพฤติกรรมและการโต้ตอบของผู้ใช้เป็นหลัก
เริ่มทดสอบจากระดับนอกสุด เช่น หน้าจอผู้ใช้ (User Interface) แล้วค่อยๆ เจาะลึกเข้าไปหารายละเอียด
พึ่งพา Mocks และ Stubs อย่างมากเพื่อจำลองการเชื่อมต่อกับระบบภายนอก
เรียนรู้ยากกว่า แต่ช่วยให้มั่นใจได้ว่าโค้ดจะตอบโจทย์ความต้องการทางธุรกิจ (Business needs) ในภาพรวม
การออกแบบจะถูกพิจารณาตั้งแต่ขั้นตอน Red ทำให้เทสต์สอดคล้องกับความต้องการทางธุรกิจตั้งแต่เริ่มต้น
`,
  },
  {
    lesson_id: 101,
    module_id: 20,
    lesson_name: `การประยุกต์ใช้แนวคิด TDD กับการทำงานทั่วไป (Test-driven work)`,
    content: `##### การประยุกต์ใช้แนวคิด TDD กับการทำงานทั่วไป
TDD ไม่ได้ใช้สำหรับสร้างซอฟต์แวร์เท่านั้น แต่ยังสามารถนำไปประยุกต์ใช้กับการทำงานของทีมพัฒนาผลิตภัณฑ์และบริการได้ด้วย เพื่อให้การทดสอบประสบความสำเร็จ จะต้องมีการสร้างระบบเทสต์ทั้งในระดับเล็กและระดับใหญ่
ซึ่งหมายถึงการตรวจสอบงานในทุกๆ ส่วน เช่น เมธอดในคลาส, ค่าของข้อมูลที่ป้อนเข้า, ข้อความบันทึก (Log), และรหัสข้อผิดพลาด ในอีกมุมหนึ่ง นอกเหนือจากซอฟต์แวร์ ทีมที่ใช้ Quality Control (QC) จะมีการตรวจสอบก่อนเริ่มงาน การตรวจสอบเหล่านี้ช่วยในการวางแผนและเช็กผลลัพธ์ โดยจะทำตามกระบวนการที่คล้ายกับ TDD แต่มีการปรับเปลี่ยนเล็กน้อย ดังนี้:
* เพิ่มการตรวจสอบ (Add a check) แทน เพิ่มการเทสต์ (Add a test)
* รันการตรวจสอบทั้งหมด แทน รันการเทสต์ทั้งหมด
* ลงมือทำงาน แทน เขียนโค้ด
* ตรวจสอบผลลัพธ์ทั้งหมด แทน รันเทสต์เพื่อดูผล
* เก็บกวาด/จัดระเบียบงาน แทน Refactor โค้ด
* ทำขั้นตอนเหล่านี้ซ้ำ
##### **
##### TDD เปรียบเทียบกับการทดสอบแบบดั้งเดิม (Traditional Testing)**
* แนวทาง (Approach): TDD คือการสร้างซอฟต์แวร์โดยเขียนเทสต์ก่อนแล้วค่อยเขียนโค้ด ส่วนการทดสอบแบบดั้งเดิมจะสลับกัน คือเขียนโค้ดให้เสร็จก่อนแล้วค่อยมาเริ่มทดสอบ
* ขอบเขตการทดสอบ (Testing Scope): TDD จะตรวจสอบโค้ดส่วนเล็กๆ ทีละส่วน ส่วนการทดสอบแบบดั้งเดิมจะตรวจสอบระบบโดยรวม รวมถึงดูว่าแต่ละส่วนทำงานร่วมกันอย่างไร
* การทำซ้ำ (Iterative): TDD ทำงานเป็นก้าวเล็กๆ เขียนโค้ดและเทสต์สั้นๆ แล้วปรับปรุงเรื่อยๆ จนกว่าจะผ่านเทสต์ทั้งหมด ส่วนการทดสอบแบบดั้งเดิมจะเทสต์โค้ดในรวดเดียวแล้วค่อยมาตามแก้ปัญหาที่เจอ
* การแก้ไขจุดบกพร่อง (Debugging): TDD พยายามหาข้อผิดพลาดตั้งแต่เนิ่นๆ ทำให้แก้ได้ง่าย ส่วนการทดสอบแบบดั้งเดิมจะหาข้อผิดพลาดในภายหลัง ซึ่งมักจะแก้ไขได้ยากกว่าเมื่อระบบถูกเชื่อมต่อกันหมดแล้ว
* การทำเอกสาร (Documentation): TDD จะให้ความสำคัญกับเอกสารที่เป็นชุดการทดสอบและผลลัพธ์ของการทดสอบ (ตัวเทสต์เปรียบเสมือนเอกสาร) ส่วนการทดสอบแบบดั้งเดิมอาจมีข้อมูลที่ชัดเจนกว่าในแง่ของวิธีการทดสอบและวิธีทดสอบระบบ
* `,
  },
  {
    lesson_id: 102,
    module_id: 20,
    lesson_name: `ข้อดีข้อเสีย และ บทสรุป`,
    content: `##### ข้อดีของ TDD
* Unit test ให้ฟีดแบ็ก (Feedback) เกี่ยวกับฟังก์ชันการทำงานอย่างสม่ำเสมอ
* คุณภาพของการออกแบบ (Design) ดีขึ้น ซึ่งช่วยให้การบำรุงรักษาในอนาคตง่ายขึ้น
* TDD ทำหน้าที่เสมือน ตาข่ายนิรภัย (Safety net) คอยป้องกันระบบจากบั๊ก
* ทำให้มั่นใจได้ว่าแอปพลิเคชันของคุณตอบสนอง Requirement ที่ถูกกำหนดไว้จริงๆ
* มีวงจรชีวิตการพัฒนา (Development lifecycle) ที่สั้นและกระชับ
##### ข้อเสียของ TDD
* ปริมาณโค้ดเพิ่มขึ้น: การใช้ TDD หมายถึงคุณต้องเขียนโค้ดสำหรับ Test cases เพิ่มเติม ซึ่งอาจทำให้ฐานโค้ด (Codebase) โดยรวมใหญ่ขึ้น
* ความรู้สึกปลอดภัยแบบผิดๆ: การที่เทสต์ผ่าน อาจทำให้นักพัฒนาทึกทักเอาเองว่าโค้ดนั้นปลอดภัย 100% แล้ว ซึ่งอาจเป็นเพียงการสันนิษฐาน
* ภาระในการบำรุงรักษา: การดูแลชุดทดสอบจำนวนมากให้ทันสมัยอยู่เสมอเป็นเรื่องยากและกินเวลา
* ใช้เวลานาน: กระบวนการเขียนและบำรุงรักษาเทสต์ต้องใช้ระยะเวลาพอสมควร
* การตั้งค่า Environment: TDD จำเป็นต้องมีสภาพแวดล้อมการทดสอบ (Testing environment) ที่เหมาะสม ซึ่งต้องใช้ความพยายามในการตั้งค่าและดูแลรักษาทั้งโค้ดและข้อมูล
* 
##### บทสรุป

Test-Driven Development (TDD) คือระเบียบวิธีเขียนโค้ดที่ให้เขียนเทสต์ก่อนเขียนโค้ดจริง กระบวนการนี้ช่วยรับประกันความน่าเชื่อถือ คุณภาพ และความสามารถในการบำรุงรักษาโค้ดผ่านวงจร Red-Green-Refactor
แม้ TDD จะมีข้อดีหลายประการ เช่น การได้รับฟีดแบ็กตลอดเวลาและการออกแบบที่ดีขึ้น แต่ก็มาพร้อมความท้าทายเรื่องปริมาณโค้ดที่เพิ่มขึ้นและภาระในการบำรุงรักษา อย่างไรก็ตาม TDD ก็ยังคงเป็นแนวทางที่มีคุณค่าอย่างยิ่งในการ พัฒนาซอฟต์แวร์คุณภาพสูง, การค้นหาบั๊กตั้งแต่เนิ่นๆ และการทำให้โค้ดตอบโจทย์ ความต้องการทางธุรกิจ (Business Requirements)`,
  },
  {
    lesson_id: 103,
    module_id: 24,
    lesson_name: `บทบาทของโฮสต์ (Host Roles)`,
    content: `หากคุณต้องการเป็นส่วนหนึ่งของชุมชนออนไลน์ระดับโลก คอมพิวเตอร์ แท็บเล็ต หรือสมาร์ทโฟนของคุณต้องได้รับการเชื่อมต่อกับเครือข่ายเสียก่อน ซึ่งเครือข่ายนั้นจะต้องเชื่อมต่อกับอินเทอร์เน็ต หัวข้อนี้จะอธิบายถึงส่วนประกอบต่างๆ ของเครือข่าย ลองดูว่าคุณรู้จักส่วนประกอบเหล่านี้ในบ้านหรือที่โรงเรียนของคุณหรือไม่

คอมพิวเตอร์ทั้งหมดที่เชื่อมต่อกับเครือข่ายและมีส่วนร่วมโดยตรงในการสื่อสารข้อมูล จะถูกจัดประเภทเป็น โฮสต์ (Hosts) โฮสต์สามารถเรียกอีกอย่างหนึ่งว่า อุปกรณ์ปลายทาง (End devices) อย่างไรก็ตาม คำว่าโฮสต์นั้นหมายถึงอุปกรณ์บนเครือข่ายที่ได้รับหมายเลข เพื่อใช้สำหรับวัตถุประสงค์ในการสื่อสารโดยเฉพาะ หมายเลขนี้ทำหน้าที่ระบุตัวตนของโฮสต์ภายในเครือข่ายเฉพาะเจาะจงที่โฮสต์นั้นเชื่อมต่ออยู่ ซึ่งเรียกว่า หมายเลขไอพี (Internet Protocol - IP address)
เซิร์ฟเวอร์ (Servers) คือคอมพิวเตอร์ที่มีซอฟต์แวร์ซึ่งช่วยให้สามารถให้บริการข้อมูล เช่น อีเมล หรือหน้าเว็บ แก่อุปกรณ์ปลายทางอื่นๆ บนเครือข่ายได้ โดยแต่ละบริการต้องใช้ซอฟต์แวร์เซิร์ฟเวอร์แยกกัน ยกตัวอย่างเช่น เซิร์ฟเวอร์ต้องมีซอฟต์แวร์เว็บเซิร์ฟเวอร์เพื่อให้บริการเว็บแก่เครือข่าย คอมพิวเตอร์ที่มีซอฟต์แวร์เซิร์ฟเวอร์สามารถให้บริการแก่ไคลเอนต์หลายๆ เครื่องพร้อมกันได้

ดังที่ได้กล่าวไปก่อนหน้านี้ ไคลเอนต์ (Clients) คือประเภทหนึ่งของโฮสต์ โดยไคลเอนต์จะมีซอฟต์แวร์สำหรับร้องขอและแสดงผล ข้อมูลที่ได้รับมาจากเซิร์ฟเวอร์ ดังที่แสดงในภาพ (ภาพประกอบแสดงการเชื่อมต่อระหว่าง Client และ Server ผ่าน Internet)
ตัวอย่างของซอฟต์แวร์ฝั่งไคลเอนต์คือ เว็บเบราว์เซอร์ เช่น Chrome หรือ Firefox คอมพิวเตอร์เครื่องเดียวสามารถรันซอฟต์แวร์ไคลเอนต์ได้หลายประเภทพร้อมกัน ตัวอย่างเช่น ผู้ใช้สามารถเช็คอีเมลและดูหน้าเว็บไปพร้อมกับส่งข้อความทันที (Instant Messaging) และฟังเพลงออนไลน์ได้ ตารางต่อไปนี้แสดงรายการซอฟต์แวร์เซิร์ฟเวอร์ทั่วไป 3 ประเภท:
* Email (อีเมล): เซิร์ฟเวอร์รันซอฟต์แวร์อีเมลเซิร์ฟเวอร์ ส่วนไคลเอนต์ใช้ซอฟต์แวร์เมลไคลเอนต์ เช่น Microsoft Outlook เพื่อเข้าถึงอีเมลบนเซิร์ฟเวอร์
* Web (เว็บ): เซิร์ฟเวอร์รันซอฟต์แวร์เว็บเซิร์ฟเวอร์ ส่วนไคลเอนต์ใช้ซอฟต์แวร์เบราว์เซอร์ เช่น Windows Internet Explorer เพื่อเข้าถึงหน้าเว็บต่างๆ บนเซิร์ฟเวอร์
* File (ไฟล์): เซิร์ฟเวอร์ไฟล์ทำหน้าที่จัดเก็บไฟล์ขององค์กรและของผู้ใช้ไว้ที่ส่วนกลาง อุปกรณ์ไคลเอนต์จะเข้าถึงไฟล์เหล่านี้ด้วยซอฟต์แวร์ไคลเอนต์ เช่น Windows File Explorer`,
  },
  {
    lesson_id: 104,
    module_id: 24,
    lesson_name: `แบบเพียร์-ทู-เพียร์ (Peer-to-Peer)`,
    content: `โดยปกติซอฟต์แวร์ไคลเอนต์และเซิร์ฟเวอร์จะทำงานบนคอมพิวเตอร์แยกเครื่องกัน แต่เป็นไปได้ที่คอมพิวเตอร์เครื่องเดียวจะถูกใช้สำหรับทั้งสองบทบาทในเวลาเดียวกัน ในธุรกิจขนาดเล็กและตามบ้าน คอมพิวเตอร์หลายเครื่องทำหน้าที่เป็นทั้งเซิร์ฟเวอร์และไคลเอนต์ในเครือข่าย เครือข่ายประเภทนี้เรียกว่า เครือข่ายแบบเพียร์-ทู-เพียร์ (Peer-to-peer network)


| ข้อดี (Advantages) |  |
| --- | --- |
|  ตั้งค่าง่าย (Easy to set up)| ไม่มีการบริหารจัดการจากส่วนกลาง (No centralized administration) |
| มีความซับซ้อนน้อยกว่า (Less complex) |  ความปลอดภัยไม่สูงนัก (Not as secure)|
|  ค่าใช้จ่ายต่ำกว่า เนื่องจากอาจไม่จำเป็นต้องใช้อุปกรณ์เครือข่ายหรือเซิร์ฟเวอร์เฉพาะทาง|  ไม่สามารถขยายขนาดได้ดี (Not scalable)|
| เหมาะสำหรับงานง่ายๆ เช่น การถ่ายโอนไฟล์และการแชร์เครื่องพิมพ์ |  ประสิทธิภาพอาจลดลง เนื่องจากอุปกรณ์ทุกเครื่องอาจต้องทำหน้าที่เป็นทั้งไคลเอนต์และเซิร์ฟเวอร์ในเวลาเดียวกัน|`,
  },
  {
    lesson_id: 105,
    module_id: 24,
    lesson_name: `อุปกรณ์ปลายทาง (End Devices)`,
    content: `อุปกรณ์เครือข่ายที่ผู้คนคุ้นเคยมากที่สุดคือ อุปกรณ์ปลายทาง เพื่อให้สามารถแยกแยะอุปกรณ์ปลายทางเครื่องหนึ่งออกจากอีกเครื่องหนึ่งได้ อุปกรณ์ปลายทางแต่ละเครื่องบนเครือข่ายจึงต้องมี ที่อยู่ (Address) เมื่ออุปกรณ์ปลายทางเริ่มต้นการสื่อสาร มันจะใช้ที่อยู่ของอุปกรณ์ปลายทางฝั่ง เป้าหมาย เพื่อระบุตำแหน่งที่จะส่งข้อความไปให้
อุปกรณ์ปลายทางเป็นได้ทั้ง ต้นทาง (Source) หรือ ปลายทาง (Destination) ของข้อความที่ส่งผ่านเครือข่าย`,
  },
  {
    lesson_id: 106,
    module_id: 24,
    lesson_name: `อุปกรณ์ตัวกลาง (Intermediary Devices)`,
    content: `อุปกรณ์ตัวกลางทำหน้าที่เชื่อมต่ออุปกรณ์ปลายทางแต่ละเครื่องเข้ากับเครือข่าย และสามารถเชื่อมต่อเครือข่ายส่วนบุคคลหลายๆ เครือข่ายเพื่อรวมกันเป็น Internetwork อุปกรณ์ตัวกลางเหล่านี้ให้การเชื่อมต่อและรับรองว่าข้อมูลจะไหลเวียนไปทั่วเครือข่ายได้
อุปกรณ์ตัวกลางใช้ที่อยู่ของอุปกรณ์ปลายทางปลายทาง ร่วมกับข้อมูลเกี่ยวกับความเชื่อมโยงกันของเครือข่าย เพื่อกำหนดเส้นทางที่ข้อความควรจะใช้เดินทางผ่านเครือข่าย ตัวอย่างของอุปกรณ์ตัวกลางที่พบบ่อยและรายการหน้าที่ต่างๆ แสดงอยู่ในภาพ:
รายการอุปกรณ์: Wireless Router, LAN Switch, Router, Multilayer Switch, Firewall Appliance
**อุปกรณ์เครือข่ายตัวกลางทำหน้าที่บางอย่างหรือทั้งหมดดังต่อไปนี้:**

* สร้างสัญญาณการสื่อสารใหม่และส่งซ้ำ (Regenerate and retransmit)
* รักษาข้อมูลเกี่ยวกับเส้นทางที่มีอยู่ผ่านเครือข่ายและอินเทอร์เน็ตเวิร์ก
* แจ้งอุปกรณ์อื่นๆ เมื่อเกิดข้อผิดพลาดและความล้มเหลวในการสื่อสาร
* ส่งข้อมูลไปตามเส้นทางสำรองเมื่อมีลิงก์เชื่อมต่อล้มเหลว
* จัดลำดับความสำคัญและควบคุมทิศทางข้อความตามลำดับความสำคัญ
* อนุญาตหรือปฏิเสธการไหลของข้อมูลตามการตั้งค่าความปลอดภัย

`,
  },
  {
    lesson_id: 107,
    module_id: 24,
    lesson_name: `ตัวกลางเครือข่าย (Network Media)`,
    content: `การสื่อสารจะส่งผ่านเครือข่ายบน ตัวกลาง (Media) ซึ่งตัวกลางนี้ทำหน้าที่เป็น ช่องทาง (Channel) ที่ข้อความใช้เดินทางจากต้นทางไปยังปลายทาง
เครือข่ายสมัยใหม่ใช้ตัวกลาง 3 ประเภทหลักในการเชื่อมต่ออุปกรณ์ต่างๆ ดังแสดงในภาพ:
* สายลวดโลหะภายในเคเบิล (Metal wires within cables): ข้อมูลจะถูกเข้ารหัสเป็นสัญญาณพัลส์ไฟฟ้า (Electrical impulses)
* เส้นใยแก้วหรือพลาสติกภายในเคเบิล (Fiber-optic cable): ข้อมูลจะถูกเข้ารหัสเป็นพัลส์แสง (Pulses of light)
* การส่งสัญญาณไร้สาย (Wireless transmission): ข้อมูลจะถูกเข้ารหัสผ่านการมอดูเลตความถี่เฉพาะของคลื่นแม่เหล็กไฟฟ้า (Electromagnetic waves)`,
  },
  {
    lesson_id: 108,
    module_id: 23,
    lesson_name: `พื้นฐานเครือข่ายคอมพิวเตอร์ `,
    content: `เครือข่ายคอมพิวเตอร์ (Computer Network) คือระบบที่มีคอมพิวเตอร์อย่างน้อยสองเครื่องเชื่อมต่อกัน โดยใช้สื่อกลาง และสามารถสื่อสารข้อมูลกันได้อย่างมีประสิทธิภาพ นอกจากนี ้ยังสามารถใช้ทรัพยากรที่มี อยู ่ในระบบเครือข่ายร่วมกันได้เช่น เครื่องพิมพ์ ซีดีรอม ฮาร์ดดิสก์ สแกนเนอร์ เป็นต้น 

![Screenshot 2026-03-11 063801.png](/uploads/lessons/108/image-1773185900062-198652428.png)`,
  },
  {
    lesson_id: 109,
    module_id: 25,
    lesson_name: `การแสดงภาพเครือข่ายและผังโครงสร้าง `,
    content: `##### 1.2.1 การแสดงภาพเครือข่าย (Network Representations)
สถาปนิกและผู้ดูแลระบบเครือข่ายต้องสามารถแสดงภาพเครือข่ายของตนออกมาได้ เพื่อให้มองเห็นได้ง่ายว่าส่วนประกอบใดเชื่อมต่อกับส่วนประกอบใด ตั้งอยู่ที่ไหน และเชื่อมต่อกันอย่างไร ไดอะแกรมของเครือข่ายมักใช้ สัญลักษณ์ (Symbols) เพื่อแทนอุปกรณ์และการเชื่อมต่อต่างๆ ที่ประกอบกันเป็นเครือข่าย ดังนี้:

* อุปกรณ์ปลายทาง (End Devices): คอมพิวเตอร์ตั้งโต๊ะ (Desktop Computer), แล็ปท็อป (Laptop), เครื่องพิมพ์ (Printer), โทรศัพท์ไอพี (IP Phone), แท็บเล็ตไร้สาย (Wireless Tablet), และอุปกรณ์ปลายทาง TelePresence
* อุปกรณ์ตัวกลาง (Intermediary Devices): เร้าเตอร์ไร้สาย (Wireless Router), สวิตช์แลน (LAN Switch), เร้าเตอร์ (Router), มัลติเลเยอร์สวิตช์ (Multilayer Switch), และอุปกรณ์ไฟร์วอลล์ (Firewall Appliance)
* ตัวกลางเครือข่าย (Network Media): ตัวกลางไร้สาย (Wireless Media), ตัวกลางแลน (LAN Media), และตัวกลางแวน (WAN Media)
* 
**คำศัพท์เฉพาะทางที่สำคัญ**
นอกเหนือจากสัญลักษณ์เหล่านี้ ยังมีคำศัพท์เฉพาะที่ใช้ระบุการเชื่อมต่อ ได้แก่:
* Network Interface Card (NIC): การ์ดที่ทำหน้าที่เชื่อมต่ออุปกรณ์ปลายทางเข้ากับเครือข่ายทางกายภาพ
* Physical Port (พอร์ตทางกายภาพ): ช่องต่อหรือจุดเชื่อมบนอุปกรณ์เครือข่ายที่ใช้สำหรับเสียบตัวกลาง (สายเคเบิล) เพื่อเชื่อมต่อไปยังอุปกรณ์อื่น
* Interface (อินเทอร์เฟซ): พอร์ตพิเศษบนอุปกรณ์เครือข่ายที่เชื่อมต่อกับเครือข่ายแต่ละส่วน เนื่องจากเร้าเตอร์ทำหน้าที่เชื่อมต่อเครือข่ายต่างๆ เข้าด้วยกัน พอร์ตบนเร้าเตอร์จึงมักเรียกว่า อินเทอร์เฟซเครือข่าย
หมายเหตุ: คำว่า พอร์ต (Port) และ อินเทอร์เฟซ (Interface) มักใช้แทนกันได้ในความหมายทั่วไป

##### 1.2.2 ผังโครงสร้างเครือข่าย (Topology Diagrams)
ผังโครงสร้าง (Topology Diagrams) เป็นเอกสารที่จำเป็นอย่างยิ่งสำหรับทุกคนที่ทำงานเกี่ยวกับเครือข่าย เพื่อให้เห็นแผนที่ภาพรวมการเชื่อมต่อ โดยแบ่งออกเป็น 2 ประเภทหลัก:

* **ผังโครงสร้างทางกายภาพ (Physical Topology Diagrams)**

    แสดงถึง ตำแหน่งที่ตั้งจริง ของอุปกรณ์ตัวกลางและการติดตั้งสายเคเบิล
    จะระบุหมายเลขห้องที่อุปกรณ์ตั้งอยู่
    แสดงตำแหน่งของตู้แร็ค (Rack) และชั้นวาง (Shelf) ของอุปกรณ์แต่ละเครื่อง
    เช่น ระบุว่า Web Server อยู่ในห้อง Server Room: Rm: 2158 ที่แร็ค 2 ชั้นวาง 1

*  **ผังโครงสร้างทางตรรกะ (Logical Topology Diagrams)**
    แสดงถึง วิธีการส่งข้อมูล และรูปแบบการจัดการภายในเครือข่าย
    แสดงชื่ออุปกรณ์ พอร์ต (เช่น Fa0/1, G0/0) และ ระบบการกำหนดหมายเลขไอพี (Addressing Scheme) ของเครือข่าย
    แสดงให้เห็นว่าอุปกรณ์ปลายทางเชื่อมต่อกับอุปกรณ์ตัวกลางใด และใช้ตัวกลางชนิดใด
    ระบุขอบเขตของเครือข่ายย่อย (Subnet) เช่น Network 192.168.10.0
`,
  },
  {
    lesson_id: 110,
    module_id: 30,
    lesson_name: `Frame Tool `,
    content: `1. Frame Tool (ปุ่มลัด: กด F หรือ A) เปรียบเสมือน "กระดานวาดภาพ" หรือ Artboard ซึ่งเป็นหัวใจสำคัญที่สุดในการเริ่มต้นออกแบบ UI ใน Figma
การเลือกเทมเพลตขนาดหน้าจอมาตรฐาน: * ทันทีที่คุณกดปุ่ม F (หรือคลิกเลือกเครื่องมือ Frame) บริเวณพาเนลตั้งค่าด้านขวามือ (Properties Panel) จะเปลี่ยนเป็นตัวเลือกขนาดหน้าจอ (Templates) ให้โดยอัตโนมัติ
มีขนาดให้เลือกหลากหลายหมวดหมู่เพื่อตอบโจทย์ทุกงานออกแบบ เช่น หน้าจอสมาร์ทโฟน (iPhone รุ่นต่างๆ, Android), แท็บเล็ต, หน้าจอ Desktop, หน้ากระดาษเอกสาร, สไลด์นำเสนอ, หน้าปัดนาฬิกา (Apple Watch) ไปจนถึงขนาดโพสต์มาตรฐานของ Social Media
เมื่อคลิกชื่อเทมเพลต Figma จะสร้าง Frame ในสัดส่วนและขนาดพิกเซลที่ถูกต้องเป๊ะๆ ลงบนพื้นที่ทำงานทันที
การสร้าง Frame แบบอิสระ (Custom Size): หากไม่อยากใช้เทมเพลต คุณสามารถคลิกเม้าส์ค้างไว้แล้วลาก (Click & Drag) บนพื้นที่ว่างเพื่อตีกรอบกำหนดความกว้าง-ยาวของ Frame เองได้อย่างอิสระ
จุดเด่นที่สำคัญของ Frame ใน Figma (Nested Frames):
ความพิเศษของ Figma คือเราสามารถสร้าง "Frame ซ้อน Frame" ลงไปได้เรื่อยๆ (ซึ่งต่างจาก Artboard ในบางโปรแกรมที่ไม่สามารถซ้อนกันได้)
ตัวอย่างการใช้งานจริง: สร้าง Frame ตัวแม่เป็น "หน้าจอแอป" -> จากนั้นวาด Frame ตัวลูกซ้อนเข้าไปเพื่อทำเป็น "แถบเมนู (Navbar)" -> และอาจจะมี Frame ย่อยซ้อนลงไปอีกเพื่อทำเป็น "ปุ่ม (Button)"
การซ้อน Frame แบบนี้ช่วยให้จัดระเบียบไฟล์งานได้ดีมาก และเป็นพื้นฐานสำคัญที่ต้องใช้คู่กับฟังก์ชันขั้นสูงอย่าง Auto Layout ในอนาคต
ฟังก์ชัน Clip Content: Frame ทุกตัวจะมีคำสั่ง "Clip content" (ติ๊กถูกได้ที่พาเนลขวามือ) ซึ่งทำหน้าที่ควบคุมเนื้อหาที่ "ล้น" ออกนอกกรอบ หากเปิดใช้งานไว้ วัตถุที่วาดยื่นออกนอก Frame จะถูกซ่อนหรือถูกตัดขอบทิ้งไป ทำให้หน้าจอออกแบบดูเรียบร้อย`,
  },
  {
    lesson_id: 111,
    module_id: 30,
    lesson_name: ` Slice Tool `,
    content: `2. Slice Tool (ปุ่มลัด: กด S) เครื่องมือสำหรับ "หั่น" หรือ "ตีกรอบ" เฉพาะพื้นที่บางส่วนบนหน้าจอที่เราต้องการบันทึก (Export) ออกไปใช้งานจริง
หน้าที่หลัก: ใช้กำหนดขอบเขตพื้นที่แบบเจาะจง เพื่อสั่ง Export ให้ออกมาเป็นไฟล์รูปภาพ (เช่น PNG, JPG, SVG หรือ PDF)
วิธีการใช้งาน: กดปุ่ม S แล้วคลิกลากคลุมพื้นที่เป้าหมาย (เช่น ลากคลุมไอคอน 1 ตัว ลากคลุมรูปภาพ หรือลากคลุมเฉพาะปุ่มสั่งซื้อ) บริเวณนั้นจะเกิดเส้นประล้อมรอบ แสดงให้เห็นขอบเขตที่ถูก Slice
การตั้งค่า Export ก่อนนำไปใช้จริง: * เมื่อสร้างกรอบ Slice เสร็จแล้ว ให้มองไปที่พาเนลขวาล่างสุดตรงหัวข้อ "Export"
คุณสามารถตั้งค่าขนาดความคมชัดได้ เช่น x1 (ขนาดเท่าต้นฉบับ), x2, x3 (ขยายให้ใหญ่และชัดขึ้น เหมาะสำหรับหน้าจอความละเอียดสูงอย่าง Retina Display)
สามารถเลือกนามสกุลไฟล์ที่ต้องการเซฟได้ตรงนี้เลย
ประโยชน์ในการทำงาน: เครื่องมือนี้จำเป็นมากเมื่อต้องส่งมอบงานให้ทีมพัฒนา (Developer/Programmer) เพราะนักออกแบบสามารถ Slice เฉพาะชิ้นส่วนกราฟิกย่อยๆ ออกมา เพื่อให้โปรแกรมเมอร์นำไฟล์ภาพเหล่านั้นไปแทรกลงในโค้ด (Coding) เพื่อสร้างแอปพลิเคชันหรือเว็บไซต์ของจริงต่อไป
`,
  },
  {
    lesson_id: 112,
    module_id: 31,
    lesson_name: `Shortcuts`,
    content: `กลุ่มเครื่องมือ Shape Tools ใช้สำหรับสร้างรูปทรงเรขาคณิตพื้นฐานและการนำเข้ารูปภาพ ซึ่งเป็นองค์ประกอบหลักในการวาดชิ้นงาน UI ประกอบไปด้วย:
1. รูปทรงพื้นฐานและปุ่มลัด (Shortcuts)
Rectangle Tool (กด R): เครื่องมือสร้างรูปสี่เหลี่ยม (ใช้งานบ่อยมากที่สุดในการทำปุ่ม หรือ การ์ดต่างๆ)
Line Tool (กด L): เครื่องมือสร้างเส้นตรง
Arrow Tool (กด Shift + L): เครื่องมือสร้างเส้นลูกศร
Ellipse Tool (กด O): เครื่องมือสร้างวงรี หรือ วงกลม (ตัวโอ 'O' จำง่ายเพราะรูปร่างเหมือนวงกลม)
Polygon Tool: เครื่องมือสร้างรูปหลายเหลี่ยม (เริ่มต้นจะเป็นรูปสามเหลี่ยม สามารถไปปรับเพิ่มจำนวนเหลี่ยมได้ที่พาเนลด้านขวา)
Star Tool: เครื่องมือสร้างรูปดาว (สามารถปรับความลึกของแฉกดาว หรือเพิ่มจำนวนแฉกได้อิสระ)`,
  },
  {
    lesson_id: 113,
    module_id: 31,
    lesson_name: `ทริคสำคัญ`,
    content: `2. ทริคสำคัญในการวาดรูปทรง (การใช้ปุ่ม Shift)
หากต้องการวาด "สี่เหลี่ยมจัตุรัส" หรือ "วงกลมที่กลมดิ๊ก (Perfect Circle)" ให้กดปุ่ม Shift บนคีย์บอร์ดค้างไว้ในขณะที่คลิกเมาส์ลากวาดรูปทรงนั้นๆ
หากใช้ Line Tool วาดเส้นตรง การกด Shift ค้างไว้จะช่วยล็อกองศาให้เส้นตรงเป๊ะในแนวนอน (0 องศา), แนวตั้ง (90 องศา) หรือแนวทแยง (45 องศา) โดยที่เส้นไม่เบี้ยว
`,
  },
  {
    lesson_id: 114,
    module_id: 31,
    lesson_name: `การนำเข้ารูปภาพ `,
    content: `3. การนำเข้ารูปภาพ (Place Image/Video)
นอกจากรูปทรงแล้ว ในเมนูนี้ยังมีคำสั่ง Place image/video (ปุ่มลัด Ctrl + Shift + K สำหรับ Windows หรือ Cmd + Shift + K สำหรับ Mac)
ใช้สำหรับเลือกไฟล์รูปภาพจากในเครื่องคอมพิวเตอร์ของเรา แล้วนำมาคลิกวาง (Place) ลงในพื้นที่ทำงาน หรือคลิกใส่ลงในรูปทรง (Shape) ที่เราวาดเตรียมไว้ก็ได้

`,
  },
  {
    lesson_id: 115,
    module_id: 32,
    lesson_name: `Pen Tool `,
    content: `1. Pen Tool (เครื่องมือปากกา) เครื่องมือมหาเทพที่นักออกแบบและนักวาดภาพเวกเตอร์ (Vector) ต้องใช้ให้คล่อง
ปุ่มลัด (Shortcut): กด P
เทคนิคการวาด (คลิก vs ดึง):
เส้นตรง (Straight Line): หากคุณคลิกเมาส์ 1 ครั้งแล้วปล่อย (Click) จากนั้นไปคลิกที่จุดอื่น โปรแกรมจะลากเส้นตรงเชื่อม 2 จุดนั้นเข้าด้วยกัน
เส้นโค้ง (Bezier Curve): หากคุณ "คลิกเมาส์ค้างไว้แล้วลาก (Click & Drag)" สิ่งที่เกิดขึ้นคือจะมี "แขน (Handles)" ยื่นออกมาจากจุดนั้น ซึ่งคุณสามารถดึงแขนนี้เพื่อดัดองศาและความโค้งของเส้นได้อย่างอิสระ
จุดเด่นเฉพาะตัวของ Figma (Vector Networks): ในโปรแกรมวาดเวกเตอร์สมัยก่อน เส้นพาธ (Path) จะต้องวิ่งเป็นเส้นเดียวต่อเนื่องกันไป (มีแค่จุดหัวและท้าย) แต่ใน Figma ใช้ระบบ "Vector Networks" ซึ่งอนุญาตให้คุณลากเส้นใหม่ไปเชื่อมกับจุด (Node) เดิมตรงกลาง หรือแตกกิ่งก้านสาขาออกจากจุดเดียวกันเป็นเหมือนใยแมงมุมได้เลย ทำให้การวาดไอคอนที่ซับซ้อนทำได้ง่ายและรวดเร็วขึ้นมาก
การออกจากโหมดวาด: เมื่อวาดเส้นเสร็จแล้ว หากเส้นมาบรรจบกันมันจะกลายเป็นรูปทรงปิด (Closed Shape) ที่เราสามารถเทสี (Fill) ลงไปได้ และหากต้องการออกจากการวาด (Vector Edit Mode) ให้กดปุ่ม Enter, Esc บนคีย์บอร์ด หรือกดปุ่ม "Done" ที่แถบเมนูด้านบน
`,
  },
  {
    lesson_id: 116,
    module_id: 32,
    lesson_name: ` Pencil Tool`,
    content: `2. Pencil Tool (เครื่องมือดินสอ)
ปุ่มลัด (Shortcut): กด Shift + P
การใช้งาน: ทำงานเหมือนการจับดินสอวาดลงบนกระดาษจริงๆ (Freehand Drawing) เมื่อคลิกเมาส์ค้างไว้แล้วลากไปมา โปรแกรมก็จะวาดเส้นตามการเคลื่อนไหวของเมาส์
ประโยชน์: เหมาะสำหรับการวาดเส้นร่าง (Sketch), การโน้ตหรือขีดเขียนบนพื้นที่ทำงานเพื่ออธิบายงานให้ทีมฟัง (Annotations) หรือแม้กระทั่งใช้เมาส์แพดในการเซ็น "ลายเซ็นดิจิทัล (Digital Signature)" ลงในงาน
ข้อดี: เมื่อเราลากเส้นด้วยเครื่องมือ Pencil เสร็จ Figma จะมีระบบคำนวณและปรับเส้นที่อาจจะยึกยือให้ดูสมูท (Smooth) และเรียบเนียนขึ้นในระดับหนึ่งโดยอัตโนมัติ
`,
  },
  {
    lesson_id: 117,
    module_id: 33,
    lesson_name: `การเรียกใช้`,
    content: `1. การเรียกใช้งานและพฤติกรรมการพิมพ์เบื้องต้น
ปุ่มลัด (Shortcut): กด T
เทคนิคการสร้างกล่องข้อความ (Click vs Click & Drag): นี่คือจุดที่มือใหม่หลายคนมักสับสน เพราะการคลิกสร้างกล่องข้อความ 2 แบบนี้ ให้ผลลัพธ์ที่ต่างกันอย่างชัดเจน:
คลิก 1 ครั้งบนพื้นที่ว่าง (Auto Width): เมื่อเริ่มพิมพ์ กล่องข้อความจะขยายความกว้างออกไปด้านข้างเรื่อยๆ ตามจำนวนตัวอักษรแบบไม่มีขีดจำกัด (ข้อความจะยาวทะลุจอไปเลย) จนกว่าเราจะเป็นคนกดปุ่ม Enter เพื่อขึ้นบรรทัดใหม่เอง
คลิกเมาส์ค้างไว้แล้วลากเป็นกรอบ (Fixed Width): หากเราลากกำหนดความกว้างของกล่องข้อความไว้ก่อน เมื่อเราพิมพ์ข้อความไปจนชนขอบขวาของกล่อง โปรแกรมจะทำการปัดคำ (Wrap text) ขึ้นบรรทัดใหม่ให้โดยอัตโนมัติ`,
  },
  {
    lesson_id: 118,
    module_id: 33,
    lesson_name: ` การตั้งค่า`,
    content: `2. การตั้งค่า Text Resizing (หัวใจหลักของการจัดกล่องข้อความ) หากคุณมองไปที่พาเนลด้านขวามือ ตรงหัวข้อ "Text" จะมีไอคอนเล็กๆ 3 ตัวเรียงกัน ซึ่งใช้สำหรับควบคุมพฤติกรรมการยืดหดของกล่องข้อความ (สำคัญมากตอนเอาไปทำ Auto Layout ในอนาคต):
Auto width: กล่องข้อความจะโอบรัดพอดีกับความยาวของตัวหนังสือเสมอ
Auto height: เราจะล็อก "ความกว้าง" เอาไว้ตายตัว แต่ความสูงของกล่องจะยืดขยายลงมาด้านล่างเรื่อยๆ ตามปริมาณข้อความที่เพิ่มขึ้น (เหมาะมากสำหรับการทำย่อหน้าเนื้อหาบทความ)
Fixed size: กล่องข้อความจะถูกล็อกตายตัวทั้งความกว้างและความสูง หากพิมพ์ข้อความยาวเกินไป ตัวหนังสือก็จะล้นทะลุกรอบออกมา
`,
  },
  {
    lesson_id: 119,
    module_id: 33,
    lesson_name: `. การปรับแต่งรายละเอียดตัวอักษร `,
    content: `3. การปรับแต่งรายละเอียดตัวอักษร (Text Properties) นอกจากขนาดและสีแล้ว พาเนล Text ยังมีการตั้งค่าที่นักออกแบบต้องปรับบ่อยๆ เพื่อให้ตัวหนังสืออ่านง่ายและสวยงาม:
Font Family & Weight: เลือกตระกูลฟอนต์ และน้ำหนักของฟอนต์ (เช่น Regular, Medium, Bold)
Line Height: ปรับระยะห่าง "ระหว่างบรรทัด" (ช่องไฟแนวตั้ง) หากข้อความดูเบียดกันเกินไป การเพิ่มค่านี้จะช่วยให้ผู้ใช้อ่านเนื้อหาได้สบายตาขึ้น
Letter Spacing: ปรับระยะห่าง "ระหว่างตัวอักษร" (ช่องไฟแนวนอน)
Text Align: จัดตำแหน่งตัวหนังสือ (ชิดซ้าย, ตรงกลาง, ชิดขวา, กระจายเต็มบรรทัด) รวมถึงสามารถจัดตำแหน่งแนวตั้ง (Vertical align) ให้ข้อความอยู่ชิดขอบบน ตรงกลาง หรือขอบล่างของกล่องได้ด้วย
`,
  },
  {
    lesson_id: 120,
    module_id: 34,
    lesson_name: `หน้าที่หลักของ Hand Tool`,
    content: `เวลาที่เราออกแบบงานที่มีหลายๆ หน้าจอ (Frames) วางเรียงกันเยอะๆ การจะขยับมุมมองเพื่อเลื่อนดูส่วนต่างๆ ของงานโดยไม่ทำให้ชิ้นงานเคลื่อนที่ ถือเป็นเรื่องสำคัญมาก ซึ่ง Hand Tool ถูกสร้างมาเพื่อการนี้โดยเฉพาะครับ
1. หน้าที่หลักของ Hand Tool
ทำหน้าที่เสมือนการ "จับกระดานวาดภาพแล้วเลื่อนไปมา" เพื่อเปลี่ยนมุมมอง (Panning) โดยที่ "วัตถุหรือชิ้นงานต่างๆ จะไม่ถูกเคลื่อนย้ายตำแหน่งเลย" (ต่างจาก Move Tool ที่ถ้าคุณคลิกลาก จะเป็นการย้ายตำแหน่งวัตถุ)
`,
  },
  {
    lesson_id: 121,
    module_id: 34,
    lesson_name: ` การเรียกใช้`,
    content: `2. การเรียกใช้งานและปุ่มลัด (Shortcut)
ปุ่มลัดพื้นฐาน: กดตัว H (ย่อมาจาก Hand) เมาส์ของคุณจะเปลี่ยนเป็นไอคอนรูปมือทันที จากนั้นสามารถคลิกเมาส์ซ้ายค้างไว้แล้วลากเพื่อเลื่อนดูพื้นที่ทำงาน (Canvas) ได้อย่างอิสระ`,
  },
  {
    lesson_id: 122,
    module_id: 34,
    lesson_name: ` ทริคลับระดับโปร`,
    content: `3. ทริคลับระดับโปร (Temporary Hand Tool) นี่คือเทคนิคที่นักออกแบบทุกคนต้องใช้ให้ชินเป็นนิสัย เพราะมันจะช่วยประหยัดเวลาทำงานได้มหาศาลครับ!
การใช้ Spacebar: ในขณะที่คุณกำลังใช้เครื่องมืออื่นอยู่ (เช่น กำลังใช้ Pen Tool วาดเส้น หรือใช้ Move Tool จัดเลย์เอาต์) หากคุณต้องการเลื่อนดูพื้นที่ส่วนอื่นแบบด่วนๆ ให้กดปุ่ม Spacebar (สเปซบาร์) บนคีย์บอร์ดค้างไว้ เมาส์จะเปลี่ยนเป็นรูปมือชั่วคราวให้คุณคลิกลากหน้าจอได้ทันที และเมื่อคุณ "ปล่อย" ปุ่ม Spacebar เมาส์ก็จะเด้งกลับไปเป็นเครื่องมือเดิมที่คุณกำลังใช้อยู่โดยอัตโนมัติ ทำให้การทำงานลื่นไหลไม่สะดุด
`,
  },
  {
    lesson_id: 123,
    module_id: 34,
    lesson_name: `ทางเลือกอื่น`,
    content: `4. ทางเลือกอื่นในการเลื่อนหน้าจอ (Mouse & Trackpad) นอกจากคีย์บอร์ดแล้ว อุปกรณ์ของคุณก็รองรับการทำ Panning เช่นกัน:
เมาส์ (Mouse): หากเมาส์ของคุณมีลูกกลิ้งตรงกลาง (Scroll Wheel) คุณสามารถ "กดลูกกลิ้งลงไปตรงๆ ค้างไว้" (Middle Click) แล้วลากเมาส์ มันจะทำงานเหมือน Hand Tool เป๊ะเลยครับ
แทร็กแพด (Trackpad): สำหรับคนที่ใช้ MacBook หรือแล็ปท็อป คุณสามารถใช้ "2 นิ้ว" แตะแล้วถูเลื่อนไปมาบน Trackpad เพื่อเลื่อนดูพื้นที่ทำงานได้เลย โดยไม่ต้องกดปุ่มอะไรเพิ่ม
`,
  },
  {
    lesson_id: 124,
    module_id: 35,
    lesson_name: `หน้าต่างปรับแต่ง`,
    content: `1. หน้าต่างปรับแต่งรูปภาพ (Image Adjustments) คุณสามารถปรับแสงและสีของภาพได้ง่ายๆ ภายในโปรแกรม โดยคลิกที่รูปภาพ จากนั้นมองไปที่พาเนลขวามือในหมวด "Fill" แล้วคลิกซ้ายที่ "รูปขนาดย่อ (Thumbnail)" หน้าต่างตั้งค่ารูปภาพจะแสดงขึ้นมาพร้อมแถบเลื่อน (Sliders) ดังนี้:
Exposure: ปรับความสว่างโดยรวมของภาพ (เพิ่มค่าภาพจะสว่างจ้า ลดค่าภาพจะมืดลง)
Contrast: ปรับความเปรียบต่างของแสงและเงา ช่วยให้ภาพดูคมชัดและมีมิติมากขึ้น
Saturation (ความสดของสี): หากภาพดูจืดสามารถดึงค่านี้ขึ้นได้ และทริคสำคัญคือ หากลากไปทางซ้ายสุด (-100%) รูปภาพจะกลายเป็น "ภาพขาวดำ (Grayscale)" ทันที!
Temperature & Tint: ปรับอุณหภูมิสีภาพให้ดูอุ่น (อมเหลือง/ส้ม) หรือดูเย็น (อมฟ้า) รวมถึงแก้อาการภาพสีเพี้ยนอมเขียวหรืออมม่วง
Highlights & Shadows: เลือกปรับเฉพาะส่วนที่สว่างที่สุด หรือส่วนที่มืดที่สุดของภาพได้โดยไม่กระทบโทนสีรวม
`,
  },
  {
    lesson_id: 125,
    module_id: 36,
    lesson_name: `ภัยคุกคามความปลอดภัย (Security Threats)`,
    content: `1.8.1 ภัยคุกคามความปลอดภัย (Security Threats)
คุณคงเคยได้ยินหรืออ่านข่าวเกี่ยวกับเครือข่ายของบริษัทที่ถูกเจาะระบบ ซึ่งทำให้ผู้ไม่หวังดีสามารถเข้าถึงข้อมูลส่วนบุคคลของลูกค้านับพันรายได้ ด้วยเหตุนี้ ความปลอดภัยของเครือข่ายจึงเป็นเป้าหมายสำคัญอันดับแรกของผู้ดูแลระบบเสมอ
การรักษาความปลอดภัยของเครือข่ายเป็นส่วนสำคัญของเครือข่ายคอมพิวเตอร์ ไม่ว่าเครือข่ายนั้นจะเป็นเครือข่ายในบ้านที่มีการเชื่อมต่ออินเทอร์เน็ตเพียงจุดเดียว หรือเครือข่ายองค์กรที่มีผู้ใช้งานนับพันคนก็ตาม ระบบความปลอดภัยต้องคำนึงถึงสภาพแวดล้อม ตลอดจนเครื่องมือและข้อกำหนดของเครือข่าย โดยต้องสามารถรักษาความปลอดภัยของข้อมูลไปพร้อมๆ กับการรักษาคุณภาพการให้บริการ (QoS) ในระดับที่ผู้ใช้คาดหวังได้
การรักษาความปลอดภัยประกอบด้วยโปรโตคอล เทคโนโลยี อุปกรณ์ เครื่องมือ และเทคนิคต่างๆ เพื่อปกป้องข้อมูลและบรรเทาภัยคุกคาม ช่องทางการโจมตี (Threat vectors) อาจมาจากภายนอกหรือภายใน ซึ่งภัยคุกคามเครือข่ายจากภายนอกในปัจจุบันส่วนใหญ่มักมาจากอินเทอร์เน็ต

**ภัยคุกคามจากภายนอก (External Threats) ที่พบบ่อย ได้แก่:**
* Viruses, worms, and Trojan horses (ไวรัส, เวิร์ม, และม้าโทรจัน): เหล่านี้คือซอฟต์แวร์หรือโค้ดที่เป็นอันตรายซึ่งทำงานอยู่บนอุปกรณ์ของผู้ใช้
* Spyware and adware (สปายแวร์และแอดแวร์): เป็นประเภทของซอฟต์แวร์ที่ถูกติดตั้งบนอุปกรณ์ของผู้ใช้ จากนั้นซอฟต์แวร์จะลอบเก็บรวบรวมข้อมูลเกี่ยวกับผู้ใช้อย่างลับๆ
* Zero-day attacks (หรือ Zero-hour attacks): การโจมตีที่เกิดขึ้นตั้งแต่วันแรกที่พบช่องโหว่ (Vulnerability) ในระบบ
* Threat actor attacks: การที่บุคคลผู้ไม่หวังดีทำการโจมตีอุปกรณ์ของผู้ใช้หรือทรัพยากรเครือข่าย
* Denial of service attacks (การโจมตีโดยปฏิเสธการให้บริการ): การโจมตีเหล่านี้จะทำให้แอปพลิเคชันและกระบวนการทำงานบนอุปกรณ์เครือข่ายช้าลงหรือล่มไปเลย
* Data interception and theft (การดักจับและขโมยข้อมูล): เป็นการโจมตีเพื่อดักจับข้อมูลที่เป็นความลับจากเครือข่ายขององค์กร
* Identity theft (การขโมยข้อมูลระบุตัวตน): เป็นการขโมยข้อมูลการเข้าสู่ระบบ (Login credentials) ของผู้ใช้เพื่อเข้าถึงข้อมูลส่วนตัว

ภัยคุกคามจากภายใน (Internal Threats): การพิจารณาภัยคุกคามจากภายในก็มีความสำคัญไม่แพ้กัน มีการศึกษามากมายที่แสดงให้เห็นว่า การรั่วไหลของข้อมูลส่วนใหญ่เกิดจาก ผู้ใช้ภายในเครือข่าย เอง สาเหตุอาจมาจากอุปกรณ์สูญหายหรือถูกขโมย, การใช้งานผิดพลาดโดยไม่ตั้งใจของพนักงาน, หรือแม้แต่จากพนักงานที่มีเจตนาร้าย ด้วยกลยุทธ์ BYOD (Bring Your Own Device) ที่เพิ่มมากขึ้น ข้อมูลขององค์กรจึงยิ่งตกอยู่ในความเสี่ยง ดังนั้น ในการพัฒนานโยบายความปลอดภัย สิ่งสำคัญคือต้องจัดการกับภัยคุกคามทั้งจากภายนอกและภายในให้ครบถ้วน`,
  },
  {
    lesson_id: 126,
    module_id: 35,
    lesson_name: ` การทำมาสก์`,
    content: `2. การทำมาสก์ (Masking - การตัดขอบภาพด้วยรูปทรง) นอกจากการใช้ฟังก์ชัน Place Image ใส่รูปลงในรูปทรงโดยตรงแล้ว การทำ Mask ถือเป็นเทคนิคขั้นสูงที่ยืดหยุ่นกว่ามาก
กฎเหล็กของการทำ Mask: เลเยอร์รูปทรง (Shape) ต้องอยู่ "ด้านล่าง" หรือ "ด้านหลัง" เลเยอร์รูปภาพเสมอ
วิธีทำ: วาดรูปทรงที่ต้องการไว้ด้านหลังรูปภาพ คลุมดำเลือกทั้งสองเลเยอร์ แล้วคลิกไอคอนรูปพระจันทร์ครึ่งเสี้ยวที่แถบเครื่องมือด้านบน หรือกดปุ่มลัด Ctrl + Alt + M (Windows) / Cmd + Opt + M (Mac)
ข้อดี: คุณสามารถดัดแปลงรูปทรงที่เป็น Mask ได้ตลอดเวลา เช่น การปรับมุมโค้ง (Corner Radius) และสามารถใช้รูปทรงหลายๆ ชิ้นมาสร้างเป็นหน้ากากชิ้นเดียวได้`,
  },
  {
    lesson_id: 127,
    module_id: 35,
    lesson_name: `โหมดผสมสี`,
    content: `3. โหมดผสมสี (Blend Modes) ในหน้าต่างตั้งค่าภาพ (หรือในพาเนล Layer) จะมีไอคอนรูปหยดน้ำ ซึ่งใช้ผสมรูปภาพเข้ากับพื้นหลังหรือภาพอื่นๆ คล้ายใน Photoshop:
Multiply: ทำให้ภาพดูเข้มขึ้น (มักจะกลืนส่วนที่เป็นสีขาวของภาพทิ้งไป)
Screen: ทำให้ภาพสว่างขึ้น (มักจะกลืนส่วนที่เป็นสีดำของภาพทิ้งไป เหมาะกับภาพกราฟิกที่มีเอฟเฟกต์แสงหรือประกายไฟพื้นหลังดำ)
Overlay: เพิ่มคอนทราสต์ให้ภาพ ซ้อนสีและแสงให้กลมกลืนกัน`,
  },
  {
    lesson_id: 128,
    module_id: 36,
    lesson_name: `โซลูชันด้านความปลอดภัย (Security Solutions)`,
    content: `ไม่มีโซลูชันใดเพียงโซลูชันเดียวที่สามารถปกป้องเครือข่ายจากภัยคุกคามที่หลากหลายได้ทั้งหมด ด้วยเหตุนี้ จึงควรมีการนำระบบรักษาความปลอดภัยมาใช้เป็นแบบ หลายชั้น (Multiple layers) โดยใช้โซลูชันด้านความปลอดภัยมากกว่าหนึ่งรูปแบบ เพื่อให้โซลูชันอื่นสามารถทำงานปกป้องระบบได้หากมีโซลูชันใดโซลูชันหนึ่งล้มเหลว
การนำระบบความปลอดภัยมาใช้ใน เครือข่ายบ้านพักอาศัย มักจะเป็นแบบพื้นฐาน โดยปกติจะติดตั้งที่อุปกรณ์ปลายทางและจุดที่เชื่อมต่อกับอินเทอร์เน็ต และอาจพึ่งพาบริการเพิ่มเติมที่ทำสัญญาไว้กับผู้ให้บริการอินเทอร์เน็ต (ISP) ได้
ส่วนประกอบความปลอดภัยพื้นฐานสำหรับเครือข่ายบ้านหรือสำนักงานขนาดเล็ก (SOHO):
* Antivirus and antispyware: แอปพลิเคชันเหล่านี้ช่วยปกป้องอุปกรณ์ปลายทางไม่ให้ติดซอฟต์แวร์ที่เป็นอันตราย
* Firewall filtering (การกรองด้วยไฟร์วอลล์): ทำหน้าที่บล็อกการเข้าถึงเข้าและออกจากเครือข่ายโดยไม่ได้รับอนุญาต อาจรวมถึงระบบไฟร์วอลล์ที่ติดตั้งบนโฮสต์เอง หรือบริการกรองพื้นฐานบนเร้าเตอร์ที่บ้านเพื่อป้องกันโลกภายนอกไม่ให้เข้าสู่เครือข่าย
ในทางตรงกันข้าม การรักษาความปลอดภัยสำหรับ เครือข่ายระดับองค์กร มักจะประกอบด้วยส่วนประกอบมากมายที่ถูกสร้างขึ้นในเครือข่ายเพื่อตรวจสอบและกรองปริมาณข้อมูล ในอุดมคติ ทุกส่วนประกอบควรทำงานร่วมกัน เพื่อลดภาระการบำรุงรักษาและเพิ่มความปลอดภัยให้สูงสุด เครือข่ายองค์กรจะใช้ทั้ง Antivirus, antispyware และ Firewall filtering แต่ยังมีข้อกำหนดด้านความปลอดภัยเพิ่มเติม ดังนี้:
Dedicated firewall systems (ระบบไฟร์วอลล์เฉพาะทาง): ให้ความสามารถในการเป็นไฟร์วอลล์ขั้นสูง ที่สามารถกรองปริมาณข้อมูลขนาดใหญ่ได้อย่างละเอียดมากยิ่งขึ้น
* Access control lists (ACL - รายการควบคุมการเข้าถึง): ช่วยกรองการเข้าถึงและการส่งต่อข้อมูลเพิ่มเติม โดยพิจารณาจาก IP Address และประเภทของแอปพลิเคชัน
* Intrusion prevention systems (IPS - ระบบป้องกันการบุกรุก): ระบุและหยุดยั้งภัยคุกคามที่แพร่กระจายอย่างรวดเร็ว เช่น การโจมตีแบบ zero-day หรือ zero-hour
* Virtual private networks (VPN - เครือข่ายส่วนตัวเสมือน): ช่วยให้พนักงานที่ทำงานทางไกล (Remote workers) สามารถเข้าถึงเครือข่ายองค์กรได้อย่างปลอดภัย
ท้ายที่สุด ข้อกำหนดด้านความปลอดภัยเครือข่ายจะต้องพิจารณาถึงสภาพแวดล้อม ตลอดจนแอปพลิเคชันและความต้องการในการประมวลผล โซลูชันที่นำมาใช้ต้องสามารถปรับตัวให้เข้ากับแนวโน้มเครือข่ายที่เติบโตและเปลี่ยนแปลงไปได้ และการศึกษาเรื่องนี้จำเป็นต้องเริ่มต้นจากความเข้าใจที่ชัดเจนเกี่ยวกับโครงสร้างพื้นฐานการสวิตช์และการเราต์ (Switching and Routing) เสียก่อน`,
  },
  {
    lesson_id: 129,
    module_id: 38,
    lesson_name: ` กฎเหล็กและหัวใจสำคัญ`,
    content: `1. กฎเหล็กและหัวใจสำคัญของการทำ Mask
นี่คือจุดที่มือใหม่หลายคนมักสับสน (โดยเฉพาะคนที่มาจากโปรแกรมอื่นอย่าง Photoshop หรือ Illustrator) ใน Figma "เลเยอร์ที่จะทำหน้าที่เป็นหน้ากาก (Mask Shape) จะต้องอยู่ด้านล่างสุด หรือ หลังสุด เสมอ!" * สิ่งที่ซ้อนอยู่ด้านบนของหน้ากาก จะถูกตัดขอบให้แสดงผลเฉพาะในพื้นที่ของรูปทรงด้านล่างเท่านั้น
`,
  },
  {
    lesson_id: 130,
    module_id: 38,
    lesson_name: ` วิธีการสร้าง Mask และปุ่มลัด`,
    content: `2. วิธีการสร้าง Mask และปุ่มลัด (Shortcut)
เริ่มจากวางรูปภาพและรูปทรงซ้อนกัน (ย้ำอีกครั้ง: รูปทรงต้องอยู่ข้างล่างรูปภาพ)
คลุมดำเลือกทั้งสองเลเยอร์ แล้วสามารถสั่งการได้ 3 วิธี:
คลิกไอคอนรูป "พระจันทร์ครึ่งเสี้ยว (Use as mask)" ที่แถบเมนูด้านบนตรงกลางหน้าจอ
คลิกขวาที่เลเยอร์ แล้วเลือก Use as mask
ปุ่มลัดโปรเพลเยอร์: กด Ctrl + Alt + M (สำหรับ Windows) หรือ Cmd + Option + M (สำหรับ Mac)`,
  },
  {
    lesson_id: 131,
    module_id: 29,
    lesson_name: `แนวโน้มเครือข่าย`,
    content: `**1.7.1 แนวโน้มล่าสุด**
เครือข่ายมีการเปลี่ยนแปลงและพัฒนาอยู่ตลอดเวลา
เมื่อมีเทคโนโลยีและอุปกรณ์ปลายทางใหม่ๆ เข้าสู่ตลาด ธุรกิจและผู้บริโภคก็ต้องปรับตัวให้เข้ากับสภาพแวดล้อมที่เปลี่ยนแปลงไปนี้
แนวโน้มระบบเครือข่ายสำคัญที่มีผลกระทบต่อองค์กรและผู้บริโภคในปัจจุบัน ได้แก่:
การนำอุปกรณ์ส่วนตัวมาใช้ที่ทำงาน (Bring Your Own Device - BYOD)
การทำงานร่วมกันแบบออนไลน์ (Online collaboration)
การสื่อสารผ่านวิดีโอ (Video communications)
การประมวลผลบนคลาวด์ (Cloud Computing)

**1.7.2 การนำอุปกรณ์ส่วนตัวมาใช้ที่ทำงาน (BYOD)**
แนวคิดเรื่องการใช้ อุปกรณ์ใดก็ได้ สำหรับเนื้อหาใดก็ได้ ในรูปแบบใดก็ได้ ถือเป็นแนวโน้มระดับโลกที่สำคัญ ซึ่งต้องการการเปลี่ยนแปลงรูปแบบการใช้อุปกรณ์และการเชื่อมต่อเครือข่ายอย่างปลอดภัย โดยเรียกแนวคิดนี้ว่า BYOD
BYOD ให้อิสระแก่ผู้ใช้ปลายทางในการใช้เครื่องมือส่วนตัวเพื่อเข้าถึงข้อมูลและสื่อสารภายในเครือข่ายของธุรกิจหรือสถานศึกษา
ด้วยการเติบโตของตลาดอุปกรณ์อิเล็กทรอนิกส์สำหรับผู้บริโภคและราคาที่ถูกลง พนักงานและนักเรียนจึงมักมีอุปกรณ์คอมพิวเตอร์และเครือข่ายประสิทธิภาพสูงสำหรับใช้งานส่วนตัว เช่น แล็ปท็อป โน้ตบุ๊ก แท็บเล็ต สมาร์ทโฟน และ e-readers อุปกรณ์เหล่านี้อาจถูกซื้อโดยองค์กร ซื้อโดยผู้ใช้เอง หรือทั้งสองอย่าง
โดยสรุป: BYOD หมายถึง อุปกรณ์ใดๆ ของใครก็ตาม ที่สามารถนำมาใช้งานได้ในทุกๆ ที่

**1.7.3 การทำงานร่วมกันแบบออนไลน์ (Online Collaboration)**
ปัจจุบันผู้คนไม่เพียงแค่ต้องการเข้าถึงข้อมูลเท่านั้น แต่ต้องการเชื่อมต่อเพื่อ ทำงานร่วมกัน (Collaboration) ซึ่งหมายถึงการทำงานกับผู้อื่นในโปรเจกต์เดียวกัน
เครื่องมือทำงานร่วมกันอย่างเช่น Cisco WebEx เปิดโอกาสให้พนักงาน นักเรียน ครู ลูกค้า และคู่ค้า สามารถเชื่อมต่อ โต้ตอบ และบรรลุเป้าหมายร่วมกันได้ทันที
การทำงานร่วมกันเป็นกลยุทธ์สำคัญที่องค์กรใช้เพื่อรักษาความสามารถในการแข่งขัน และยังเป็นสิ่งสำคัญในการศึกษาเพื่อให้นักเรียนช่วยเหลือกันเรียนรู้และพัฒนาทักษะการทำงานเป็นทีม

**1.7.4 การสื่อสารผ่านวิดีโอ (Video Communications)**
วิดีโอมีความสำคัญอย่างยิ่งต่อการสื่อสารและการทำงานร่วมกัน โดยถูกนำมาใช้ทั้งในด้านการสื่อสาร การประสานงาน และความบันเทิง
การสนทนาผ่านวิดีโอสามารถเกิดขึ้นได้ระหว่างใครก็ตามที่มีอินเทอร์เน็ต ไม่ว่าจะอยู่ที่ไหนบนโลก
การประชุมผ่านวิดีโอ (Video conferencing) กำลังกลายเป็นข้อกำหนดที่ขาดไม่ได้สำหรับการทำงานร่วมกันที่มีประสิทธิภาพ โดยเฉพาะเมื่อองค์กรขยายขอบเขตการทำงานข้ามภูมิศาสตร์และวัฒนธรรม

**1.7.6 การประมวลผลบนคลาวด์ (Cloud Computing) - ประเภทของคลาวด์**
Public clouds (คลาวด์สาธารณะ): ให้บริการแอปพลิเคชันและบริการบนคลาวด์แก่ประชาชนทั่วไปผ่านอินเทอร์เน็ต อาจให้บริการฟรีหรือคิดค่าบริการตามการใช้งานจริง (Pay-per-use) เช่น บริการพื้นที่เก็บข้อมูลออนไลน์
Private clouds (คลาวด์ส่วนตัว): บริการถูกสร้างขึ้นมาเพื่อองค์กรหรือหน่วยงานเฉพาะ เช่น รัฐบาล อาจสร้างบนเครือข่ายส่วนตัวขององค์กรเอง (ซึ่งมีค่าใช้จ่ายในการสร้างและบำรุงรักษาสูง) หรือบริหารโดยองค์กรภายนอกที่มีระบบความปลอดภัยในการเข้าถึงที่เข้มงวด
Hybrid clouds (คลาวด์แบบผสม): เกิดจากการรวมกันของคลาวด์ตั้งแต่ 2 ประเภทขึ้นไป (เช่น ส่วนตัวผสมสาธารณะ) โดยยังแยกจากกันแต่นำมาเชื่อมต่อกันด้วยสถาปัตยกรรมเดียว ผู้ใช้จะมีระดับการเข้าถึงบริการที่แตกต่างกันตามสิทธิ์
Community clouds (คลาวด์ชุมชน): สร้างขึ้นเพื่อการใช้งานเฉพาะกลุ่มองค์กรที่มีความต้องการและข้อกังวลที่คล้ายคลึงกัน ตัวอย่างเช่น องค์กรด้านสุขภาพที่ต้องปฏิบัติตามกฎหมายควบคุมข้อมูลเฉพาะ (เช่น HIPAA) คลาวด์นี้จะคล้ายกับคลาวด์สาธารณะ แต่มีข้อกำหนดด้านความปลอดภัยและความเป็นส่วนตัวเทียบเท่าคลาวด์ส่วนตัว

|ประเภทของคลาวด์  | คำอธิบาย |
| --- | --- |
|Public clouds  | ให้บริการแอปพลิเคชันและบริการแก่ประชาชนทั่วไปผ่านอินเทอร์เน็ต อาจให้บริการฟรีหรือคิดค่าบริการตามการใช้งานจริง (เช่น พื้นที่เก็บข้อมูลออนไลน์) |
|  Private clouds|ให้บริการเฉพาะเจาะจงสำหรับองค์กรหรือหน่วยงานเดียว เช่น หน่วยงานรัฐบาล อาจสร้างบนเครือข่ายส่วนตัวขององค์กรเอง (มีต้นทุนการสร้างและบำรุงรักษาสูง) หรือบริหารจัดการโดยองค์กรภายนอกพร้อมระบบรักษาความปลอดภัยที่เข้มงวด  |
| Hybrid clouds |เป็นการรวมกันของคลาวด์ตั้งแต่ 2 ประเภทขึ้นไป (เช่น บางส่วนเป็นส่วนตัว บางส่วนเป็นสาธารณะ) แต่ละส่วนยังคงแยกจากกันแต่เชื่อมต่อกันภายใต้สถาปัตยกรรมเดียว ผู้ใช้จะสามารถเข้าถึงบริการได้ตามระดับสิทธิ์ที่ตั้งไว้  |
|  Community clouds|  สร้างขึ้นเพื่อใช้งานร่วมกันเฉพาะกลุ่มองค์กรที่มีความต้องการเหมือนกัน มีการปรับแต่งฟังก์ชันให้เข้ากับกลุ่มนั้น เช่น องค์กรด้านสุขภาพที่ต้องทำตามกฎหมายข้อมูล (HIPAA) มีรูปแบบคล้ายคลาวด์สาธารณะแต่กำหนดระดับความปลอดภัยและความเป็นส่วนตัวเทียบเท่าคลาวด์ส่วนตัว|

***
**1.7.7 แนวโน้มเทคโนโลยีในบ้าน (Technology Trends in the Home)**
แนวโน้มเครือข่ายยังเปลี่ยนรูปแบบการใช้ชีวิตในบ้านด้วยสิ่งที่เรียกว่า เทคโนโลยีบ้านอัจฉริยะ (Smart home technology)
เทคโนโลยีนี้จะผสานการเชื่อมต่อเข้ากับเครื่องใช้ไฟฟ้าในชีวิตประจำวัน ทำให้มันทำงานอัตโนมัติและฉลาดขึ้น
ตัวอย่างเช่น คุณสามารถเตรียมอาหารใส่เตาอบอัจฉริยะไว้ก่อนออกจากบ้าน จากนั้นเตาอบซึ่งเชื่อมต่อกับ ปฏิทินงาน ของคุณ จะคำนวณว่าคุณจะพร้อมทานอาหารเมื่อไหร่ และเริ่มทำอาหารในเวลาและอุณหภูมิที่เหมาะสม เมื่อเสร็จแล้ว เตาอบจะส่งข้อความแจ้งเตือนมายังสมาร์ทโฟนของคุณ
**1.7.8 เครือข่ายผ่านสายไฟฟ้า (Powerline Networking)**
เป็นเครือข่ายภายในบ้านที่ใช้ สายไฟฟ้าที่มีอยู่แล้ว ตามผนังบ้านเพื่อเชื่อมต่ออุปกรณ์เข้าด้วยกัน
ด้วยอะแดปเตอร์ Powerline คุณสามารถเชื่อมต่อ LAN ได้ทุกที่ที่มีเต้ารับไฟฟ้า โดยไม่ต้องเดินสายข้อมูล (Data cables) ใหม่ และแทบไม่กินไฟเพิ่ม อุปกรณ์จะส่งข้อมูลผ่านความถี่เฉพาะไปบนสายไฟฟ้าเส้นเดียวกับที่จ่ายไฟ
มีประโยชน์มากในบ้านที่จุดกระจายสัญญาณไร้สาย (Wi-Fi) ส่งสัญญาณไปไม่ถึง แม้จะไม่สามารถใช้ทดแทนการเดินสาย LAN หลักได้ แต่ก็เป็นทางเลือกที่ดีเยี่ยมเมื่อไม่สามารถเดินสาย LAN หรือไม่สามารถใช้งานสัญญาณไร้สายได้`,
  },
  {
    lesson_id: 132,
    module_id: 38,
    lesson_name: `พฤติกรรมของ Mask Group`,
    content: `3. พฤติกรรมของ Mask Group (กลุ่มหน้ากาก)
เมื่อสร้าง Mask เสร็จแล้ว Figma จะจับเลเยอร์เหล่านั้นมัดรวมกันเป็นกลุ่มพิเศษที่มีไอคอนพระจันทร์เสี้ยวเรียกว่า "Mask Group"
เลเยอร์รูปทรงที่อยู่ด้านล่างสุดจะมีสัญลักษณ์ลูกศรชี้ขึ้น (บ่งบอกว่าฉันคือตัวคุมหน้ากากนะ)
ความเจ๋งคือ คุณสามารถลากรูปภาพอื่นๆ, วัตถุ หรือแม้แต่ข้อความ เข้ามาใส่เพิ่มใน Mask Group นี้ได้เรื่อยๆ และทุกอย่างที่อยู่เหนือหน้ากากก็จะถูกตัดขอบตามหน้ากากนั้นทั้งหมด
`,
  },
  {
    lesson_id: 133,
    module_id: 38,
    lesson_name: ` ความยืดหยุ่นของการแก้ไข`,
    content: `4. ความยืดหยุ่นของการแก้ไข (Editing Flexibility)
ขยับรูปด้านใน: คุณสามารถคลิกเลือกเฉพาะเลเยอร์รูปภาพ แล้วลากขยับตำแหน่ง ย่อ ขยาย หรือหมุนได้อิสระ โดยที่กรอบหน้ากากยังอยู่คงเดิมไม่ขยับตาม
ปรับแต่งหน้ากาก: ในทางกลับกัน คุณสามารถคลิกที่เลเยอร์รูปทรงด้านล่าง แล้วดัดแปลงรูปทรงของหน้ากากได้ตามใจชอบ เช่น ปรับมุมให้โค้งมน (Corner Radius), ยืดให้ยาวขึ้น หรือใช้ Pen Tool ดัดจุดให้เป็นรูปทรงแปลกๆ ภาพที่อยู่ด้านบนก็จะแสดงผลตามรูปทรงใหม่นั้นแบบเรียลไทม์ทันที
`,
  },
  {
    lesson_id: 134,
    module_id: 39,
    lesson_name: `ประเภทของ Effects `,
    content: `การเพิ่มเอฟเฟกต์ใน Figma ทำได้ง่ายๆ โดยเลือกวัตถุที่ต้องการ แล้วมองไปที่พาเนลด้านขวามือตรงหัวข้อ "Effects" จากนั้นคลิกที่เครื่องหมาย + เพื่อเพิ่มเอฟเฟกต์ (โดยค่าเริ่มต้นโปรแกรมจะใส่ Drop Shadow มาให้ก่อนเสมอ)
1. ประเภทของ Effects ใน Figma (มี 4 แบบหลักๆ) เมื่อคลิกที่ไอคอนรูปดวงอาทิตย์ (Effect settings) คุณจะสามารถเลือกประเภทของเอฟเฟกต์ได้ดังนี้:
Drop Shadow (เงาตกกระทบด้านนอก): ใช้สร้างเงาด้านหลังวัตถุ ทำให้วัตถุนั้นดู "ลอย" หรือนูนขึ้นมาจากพื้นหลัง (เป็นเอฟเฟกต์ที่ใช้บ่อยที่สุดในการทำปุ่ม หรือ การ์ด)
Inner Shadow (เงาตกกระทบด้านใน): เงาจะตกลงมาที่ด้านในขอบของวัตถุ ทำให้วัตถุนั้นดู "บุ๋ม" หรือลึกลงไปเหมือนถูกเจาะช่อง
Layer Blur (การเบลอวัตถุ): ทำให้ตัววัตถุหรือเลเยอร์นั้นๆ เบลอฟุ้งไปทั้งชิ้น (นิยมนำไปประยุกต์ใช้ทำเงาสีๆ หรือฉากหลังแบบมีแสงออร่า)
Background Blur (การเบลอพื้นหลัง): เอฟเฟกต์นี้จะทำให้สิ่งที่อยู่ "ด้านหลัง/ด้านใต้" ของวัตถุนี้เบลอ นิยมใช้ทำเอฟเฟกต์ "กระจกฝ้า" หรือ "Glassmorphism"`,
  },
  {
    lesson_id: 135,
    module_id: 39,
    lesson_name: ` การตั้งค่าเงา`,
    content: `2. การตั้งค่าเงา (Shadow Settings) ในหน้าต่างตั้งค่า Drop Shadow และ Inner Shadow จะมีค่าให้ปรับแต่งหลักๆ 4 ตัว:
X: เลื่อนตำแหน่งเงาในแนวนอน (ซ้าย-ขวา)
Y: เลื่อนตำแหน่งเงาในแนวตั้ง (บน-ล่าง)
Blur: ปรับความฟุ้งเบลอของขอบเงา (ยิ่งค่าเยอะ เงายิ่งดูนุ่มและกระจายตัว)
Spread: ปรับขนาดความกว้าง/ความบานของเงาให้ใหญ่กว่าหรือเล็กกว่าตัววัตถุ
Color & Opacity: เปลี่ยนสีเงา และความเข้ม/อ่อน (ความโปร่งใส) ของเงาได้
`,
  },
  {
    lesson_id: 136,
    module_id: 39,
    lesson_name: ` ทริคสำคัญ`,
    content: `3. ทริคสำคัญของการทำ Background Blur (กระจกฝ้า) มือใหม่หลายคนมักตกม้าตายตรงนี้ครับ! การใส่ Background Blur อย่างเดียวจะไม่เห็นผลลัพธ์ใดๆ กฎเหล็กคือ คุณต้องไปลดค่าความทึบแสง (Opacity) ของสีวัตถุ (Fill) ลงด้วย (เช่น ปรับสี Fill ให้โปร่งใสเหลือสัก 10% - 40%) เพื่อให้เนื้อสีกระจกดูใสจนมองทะลุลงไปเห็นพื้นหลังที่ถูกเบลออยู่ด้านใต้ได้ครับ
`,
  },
  {
    lesson_id: 137,
    module_id: 39,
    lesson_name: ` การจัดการ Effects`,
    content: `4. การจัดการ Effects
คุณสามารถใส่เอฟเฟกต์ซ้อนกันกี่ชั้นก็ได้ในวัตถุเดียว (เช่น ใส่ Drop Shadow 2 ชั้น ชั้นแรกเงาเข้ม ชั้นสองเงาฟุ้งๆ เพื่อให้ดูสมจริงขึ้น) โดยการกดปุ่ม + เพิ่มไปเรื่อยๆ
สามารถกดไอคอน "รูปตา" เพื่อซ่อน/แสดงเอฟเฟกต์ หรือกดปุ่ม - เพื่อลบเอฟเฟกต์นั้นทิ้ง`,
  },
  {
    lesson_id: 138,
    module_id: 40,
    lesson_name: `Component คืออะไร?`,
    content: `1. Component คืออะไร? Component คือการแปลงชิ้นส่วน UI ที่เราต้องใช้ซ้ำบ่อยๆ (เช่น ปุ่ม Button, ไอคอน, การ์ดสินค้า, หรือแถบเมนูนำทาง) ให้กลายเป็น "ต้นแบบ" เพื่อนำไปคัดลอกวาง (Duplicate) ในหน้าจออื่นๆ ได้อย่างรวดเร็ว และที่สำคัญคือ "จัดการและแก้ไขได้ง่ายมาก"
`,
  },
  {
    lesson_id: 139,
    module_id: 28,
    lesson_name: ` สถาปัตยกรรมเครือข่าย`,
    content: `**1.6.1 สถาปัตยกรรมเครือข่าย (Network Architecture)**
บทบาทของเครือข่ายได้เปลี่ยนจากเครือข่ายที่ส่งข้อมูลเพียงอย่างเดียว มาเป็นระบบที่รองรับการเชื่อมต่อของผู้คน อุปกรณ์ และข้อมูลในสภาพแวดล้อมที่รวมศูนย์ (Converged network). เพื่อให้ทำงานได้อย่างมีประสิทธิภาพและเติบโตได้ เครือข่ายต้องถูกสร้างขึ้นบนสถาปัตยกรรมมาตรฐาน. สถาปัตยกรรมเครือข่ายในบริบทนี้หมายถึงเทคโนโลยีที่สนับสนุนโครงสร้างพื้นฐาน รวมถึงบริการและโปรโตคอลที่ใช้ในการเคลื่อนย้ายข้อมูลผ่านเครือข่าย.
สถาปัตยกรรมเครือข่ายต้องมีคุณลักษณะพื้นฐาน 4 ประการ เพื่อตอบสนองความคาดหวังของผู้ใช้งาน:
* ความทนทานต่อความผิดพลาด (Fault Tolerance)
* ความสามารถในการขยายขนาด (Scalability)
* คุณภาพการให้บริการ (Quality of Service - QoS)
* ความปลอดภัย (Security)

**1.6.2 ความทนทานต่อความผิดพลาด (Fault Tolerance)**
เครือข่ายที่ทนทานต่อความผิดพลาดคือเครือข่ายที่จำกัดจำนวนอุปกรณ์ที่ได้รับผลกระทบเมื่อเกิดความล้มเหลว และสามารถกู้คืนระบบได้อย่างรวดเร็ว.
Redundancy (ความซ้ำซ้อน): การสร้างเส้นทางเชื่อมต่อหลายเส้นทางระหว่างต้นทางและปลายทาง หากเส้นทางหนึ่งล้มเหลว ข้อมูลจะถูกส่งผ่านเส้นทางอื่นทันที.
Packet Switching: การแบ่งข้อมูล (เช่น อีเมลหรือวิดีโอ) ออกเป็นบล็อกเล็กๆ เรียกว่า แพ็กเกจ ซึ่งแต่ละแพ็กเกจมีที่อยู่ระบุต้นทางและปลายทาง เราเตอร์จะสลับทิศทางแพ็กเกจตามสภาพของเครือข่ายในขณะนั้น ทำให้ข้อมูลแต่ละชิ้นอาจเดินทางไปคนละเส้นทางแต่ถึงปลายทางเดียวกันได้.

**1.6.3 ความสามารถในการขยายขนาด (Scalability)**
เครือข่ายที่ขยายขนาดได้คือเครือข่ายที่สามารถเพิ่มผู้ใช้และแอปพลิเคชันใหม่ๆ ได้อย่างรวดเร็วโดยไม่ส่งผลกระทบต่อประสิทธิภาพการทำงานของผู้ใช้เดิม.
มาตรฐานเปิด: เครือข่ายเหล่านี้ขยายตัวได้ง่ายเพราะผู้ออกแบบปฏิบัติตามมาตรฐานและโปรโตคอลที่เป็นที่ยอมรับ.
ความยืดหยุ่น: ผู้ผลิตซอฟต์แวร์และฮาร์ดแวร์สามารถมุ่งเน้นที่การพัฒนาผลิตภัณฑ์ได้โดยไม่ต้องออกแบบกฎเกณฑ์การทำงานใหม่ทั้งหมดเมื่อมีการขยายเครือข่าย.

**1.6.4 คุณภาพการให้บริการ (Quality of Service - QoS)**
ในยุคที่ข้อมูล เสียง และวิดีโอรวมอยู่ในเครือข่ายเดียวกัน QoS จึงเป็นกลไกหลักในการจัดการกับความหนาแน่นของข้อมูล (Congestion).
การจัดการความหนาแน่น: เกิดขึ้นเมื่อความต้องการใช้แบนด์วิดท์ (Bandwidth) เกินกว่าที่มีอยู่ อุปกรณ์เครือข่ายจะเก็บแพ็กเกจไว้ในหน่วยความจำจนกว่าจะมีทรัพยากรว่าง.
การจัดลำดับความสำคัญ: นโยบาย QoS ช่วยให้เราเตอร์จัดการการไหลของข้อมูลได้ โดยให้ความสำคัญกับข้อมูลที่อ่อนไหวต่อเวลา เช่น การโทรศัพท์ผ่านไอพี (VoIP) เพื่อให้การสนทนาราบรื่น ในขณะที่ข้อมูลอย่างการเปิดเว็บเพจจะได้รับความสำคัญต่ำกว่า.

**1.6.5 ความปลอดภัยของเครือข่าย (Network Security)**
ผู้ดูแลระบบต้องดูแลความปลอดภัยใน 2 ส่วนหลัก คือ โครงสร้างพื้นฐาน (Infrastructure) และ ข้อมูล (Information).
ความปลอดภัยของโครงสร้างพื้นฐาน: รวมถึงการป้องกันอุปกรณ์จากการเข้าถึงทางกายภาพ และการป้องกันการเข้าถึงซอฟต์แวร์จัดการเครือข่ายโดยไม่ได้รับอนุญาต.
เป้าหมายหลัก 3 ประการของความปลอดภัย:
* Confidentiality (การรักษาความลับ): เฉพาะผู้ที่ได้รับอนุญาตเท่านั้นที่สามารถเข้าถึงและอ่านข้อมูลได้.
* Integrity (ความถูกต้องของข้อมูล): การรับรองว่าข้อมูลจะไม่ถูกเปลี่ยนแปลงระหว่างการรับส่งจากต้นทางถึงปลายทาง.
* Availability (ความพร้อมใช้งาน): การรับรองว่าผู้ใช้ที่ได้รับอนุญาตจะสามารถเข้าถึงบริการข้อมูลได้อย่างต่อเนื่องและน่าเชื่อถือ.`,
  },
  {
    lesson_id: 140,
    module_id: 40,
    lesson_name: `กฎของ ต้นแบบ`,
    content: `2. กฎของ ต้นแบบ (Main Component) และ ร่างโคลน (Instance) เมื่อคุณใช้งาน Component สิ่งที่คุณต้องแยกให้ออกมี 2 สถานะครับ:
Main Component (ร่างต้นแบบ): สังเกตได้จากไอคอนในพาเนล Layer จะเป็นรูป "สี่เหลี่ยมข้าวหลามตัดสีม่วง 4 อัน (❖)" นี่คือร่างต้นฉบับ หากคุณแก้ไขสี ขนาด หรือเปลี่ยนฟอนต์ข้อความที่ร่างต้นแบบนี้ ร่างโคลนทุกตัวที่กระจายอยู่ในงานจะถูกอัปเดตตามทั้งหมดทันที!
Instance (ร่างโคลน): เมื่อคุณก๊อปปี้ Main Component ออกมา มันจะกลายเป็น Instance ทันที สังเกตที่ไอคอน Layer จะเป็นรูป "สี่เหลี่ยมข้าวหลามตัดสีม่วงกลวงๆ 1 อัน (◇)"
`,
  },
  {
    lesson_id: 141,
    module_id: 26,
    lesson_name: `เครือข่ายที่มีหลายขนาด`,
    content: `1.4.1 เครือข่ายที่มีหลายขนาด (Networks of Many Sizes)
เครือข่ายมีหลายขนาด ตั้งแต่เครือข่ายอย่างง่ายที่ประกอบด้วยคอมพิวเตอร์สองเครื่อง ไปจนถึงเครือข่ายที่เชื่อมต่ออุปกรณ์หลายล้านเครื่อง
* เครือข่ายในบ้านขนาดเล็ก (Small Home Networks): ช่วยให้คุณแบ่งปันทรัพยากร เช่น เครื่องพิมพ์ เอกสาร รูปภาพ และเพลง ระหว่างอุปกรณ์ปลายทางในท้องถิ่นไม่กี่เครื่อง
* เครือข่ายสำนักงานขนาดเล็กและสำนักงานที่บ้าน (SOHO): ช่วยให้ผู้คนทำงานจากที่บ้านหรือสำนักงานระยะไกลได้ และเชื่อมต่อกับเครือข่ายองค์กรเพื่อเข้าถึงทรัพยากรที่ใช้ร่วมกันจากส่วนกลาง
* เครือข่ายขนาดกลางถึงขนาดใหญ่ (Medium to Large Networks): ใช้โดยองค์กรและโรงเรียน สามารถมีหลายสถานที่ตั้งพร้อมโฮสต์ที่เชื่อมต่อถึงกันนับร้อยหรือนับพันเครื่อง
* เครือข่ายทั่วโลก (World Wide Networks): อินเทอร์เน็ตคือเครือข่ายที่ใหญ่ที่สุดที่มีอยู่ ซึ่งคำว่าอินเทอร์เน็ตหมายถึง เครือข่ายของเครือข่าย ที่เชื่อมต่อคอมพิวเตอร์หลายร้อยล้านเครื่องทั่วโลก`,
  },
  {
    lesson_id: 142,
    module_id: 40,
    lesson_name: `การสร้าง Component `,
    content: `3. การสร้าง Component และปุ่มลัด (Shortcut)
เลือกชิ้นงานหรือกลุ่มของชิ้นงาน (Group/Frame) ที่ออกแบบเสร็จแล้ว
มองไปที่แถบเครื่องมือด้านบนตรงกลางหน้าจอ แล้วคลิกที่ไอคอนสี่เหลี่ยมข้าวหลามตัด 4 อัน (Create component)
ปุ่มลัดระดับโปร: กด Ctrl + Alt + K (Windows) หรือ Cmd + Option + K (Mac) ขอบชิ้นงานนั้นจะกลายเป็นสีม่วงเพื่อบ่งบอกสถานะการเป็น Component ทันที
`,
  },
  {
    lesson_id: 143,
    module_id: 40,
    lesson_name: `การเขียนทับร่างโคล`,
    content: `4. การเขียนทับร่างโคลน (Overrides) และการตัดหางปล่อยวัด (Detach Instance)
Overrides (การเขียนทับคุณสมบัติ): แม้ร่างโคลนจะมีหน้าที่เปลี่ยนรูปร่างตามต้นแบบ แต่ Figma ก็มีความยืดหยุ่นสูง โดยคุณสามารถ "พิมพ์ข้อความใหม่" หรือ "เปลี่ยนสี" เฉพาะในร่างโคลนตัวนั้นๆ ได้โดยไม่ส่งผลกระทบต่อต้นแบบ (เช่น ปุ่มต้นแบบเขียนว่า "Submit" แต่เราเอาร่างโคลนไปแก้คำเป็น "Cancel" เฉพาะบางหน้าจอได้)
Detach Instance: หากคุณต้องการให้ร่างโคลนตัวนั้นหลุดออกจากการควบคุมของต้นแบบอย่างถาวร (ให้กลับกลายเป็น Frame ธรรมดาที่แก้ไขอิสระ) ให้คลิกขวาที่ตัว Instance แล้วเลือกคำสั่ง "Detach instance" หรือใช้ปุ่มลัด Ctrl + Alt + B (Windows) / Cmd + Option + B (Mac)
`,
  },
  {
    lesson_id: 144,
    module_id: 26,
    lesson_name: `LAN และ WAN (LANs and WANs)`,
    content: `โครงสร้างพื้นฐานของเครือข่ายมีความแตกต่างกันอย่างมากในด้าน ขนาดพื้นที่ที่ครอบคลุม, จำนวนผู้ใช้ที่เชื่อมต่อ, จำนวนและประเภทของบริการที่มีให้ และขอบเขตความรับผิดชอบ
Local Area Networks (LANs): โครงสร้างพื้นฐานเครือข่ายที่ให้บริการเข้าถึงแก่ผู้ใช้และอุปกรณ์ปลายทางในพื้นที่ทางภูมิศาสตร์ขนาดเล็ก เช่น บ้าน โรงเรียน หรืออาคารสำนักงาน มักบริหารจัดการโดยองค์กรหรือบุคคลเดียว และให้บริการแบนด์วิดท์ความเร็วสูง
Wide Area Networks (WANs): โครงสร้างพื้นฐานเครือข่ายที่ให้บริการเข้าถึงเครือข่ายอื่นๆ ในพื้นที่ทางภูมิศาสตร์ที่กว้างขวาง เช่น ระหว่างเมือง รัฐ หรือประเทศ มักเป็นเจ้าของและบริหารโดยผู้ให้บริการโทรคมนาคม (ISP) และมีความเร็วในการเชื่อมต่อที่ช้ากว่า LAN`,
  },
  {
    lesson_id: 145,
    module_id: 26,
    lesson_name: `อินเทอร์เน็ต `,
    content: `1.4.3 อินเทอร์เน็ต (The Internet)
อินเทอร์เน็ตคือการรวบรวมเครือข่ายที่เชื่อมต่อถึงกันทั่วโลก (Internetworks หรือเรียกสั้นๆ ว่า Internet) โดยไม่มีบุคคลหรือกลุ่มใดเป็นเจ้าของ การสื่อสารที่มีประสิทธิภาพข้ามโครงสร้างพื้นฐานที่หลากหลายนี้ต้องอาศัยเทคโนโลยีและมาตรฐานที่ยอมรับร่วมกัน รวมถึงความร่วมมือจากหลายหน่วยงาน เช่น IETF, ICANN และ IAB`,
  },
  {
    lesson_id: 146,
    module_id: 26,
    lesson_name: `อินทราเน็ตและเอกซ์ทราเน็ต (Intranets and Extranets)`,
    content: `มีอีกสองคำที่มีความหมายคล้ายกับอินเทอร์เน็ต:
Intranet (อินทราเน็ต): การเชื่อมต่อ LAN และ WAN ภายในที่เป็นส่วนตัวขององค์กร ออกแบบมาให้เข้าถึงได้เฉพาะสมาชิก พนักงาน หรือผู้ที่ได้รับอนุญาตเท่านั้น (Company Only)
Extranet (เอกซ์ทราเน็ต): องค์กรอาจใช้เอกซ์ทราเน็ตเพื่อให้การเข้าถึงที่ปลอดภัยแก่บุคคลที่ทำงานให้กับองค์กรอื่นแต่จำเป็นต้องเข้าถึงข้อมูลขององค์กร เช่น ซัพพลายเออร์, ลูกค้า หรือผู้ร่วมงาน`,
  },
  {
    lesson_id: 147,
    module_id: 27,
    lesson_name: `เทคโนโลยีการเข้าถึงอินเทอร์เน็ต (Internet Access Technologies)`,
    content: `1.5.1 เทคโนโลยีการเข้าถึงอินเทอร์เน็ต (Internet Access Technologies)
มีหลายวิธีในการเชื่อมต่อผู้ใช้และองค์กรเข้ากับอินเทอร์เน็ต:
ผู้ใช้ทั่วไปและพนักงานทางไกล: มักเชื่อมต่อผ่านผู้ให้บริการอินเทอร์เน็ต (ISP) โดยตัวเลือกยอดนิยม ได้แก่ บรอดแบนด์เคเบิล (Broadband Cable), สายเช่าดิจิทัล (DSL), เครือข่ายไร้สายระยะไกล (Wireless WANs) และบริการผ่านมือถือ
องค์กร: ต้องการการเชื่อมต่อที่รวดเร็วเพื่อรองรับบริการทางธุรกิจ เช่น โทรศัพท์ IP, การประชุมผ่านวิดีโอ และการจัดเก็บข้อมูลใน Data Center โดย ISP จะเสนอทางเลือกในระดับธุรกิจ เช่น Business DSL, Leased Lines (สายเช่าเฉพาะ) และ Metro Ethernet
1.5.2 การเชื่อมต่ออินเทอร์เน็ตสำหรับบ้านและสำนักงานขนาดเล็ก
ตัวเลือกการเชื่อมต่อทั่วไปสำหรับผู้ใช้กลุ่มนี้ ได้แก่:
Cable (เคเบิล): ให้บริการโดยผู้ให้บริการเคเบิลทีวี โดยส่งสัญญาณข้อมูลไปตามสายเคเบิลเส้นเดียวกัน ให้แบนด์วิดท์สูงและเชื่อมต่อตลอดเวลา
DSL (Digital Subscriber Lines): ทำงานผ่านสายโทรศัพท์ โดยทั่วไปจะใช้แบบ Asymmetrical DSL (ADSL) ซึ่งมีความเร็วในการดาวน์โหลดสูงกว่าอัปโหลด
Cellular (เซลลูลาร์): เข้าถึงอินเทอร์เน็ตผ่านเครือข่ายโทรศัพท์มือถือ ประสิทธิภาพขึ้นอยู่กับความแรงของสัญญาณและขีดความสามารถของเสาสัญญาณในพื้นที่
Satellite (ดาวเทียม): เป็นประโยชน์สำหรับพื้นที่ที่ไม่มีการเชื่อมต่อประเภทอื่น โดยต้องติดตั้งจานดาวเทียมที่มองเห็นท้องฟ้าได้ชัดเจน
Dial-up Telephone: ตัวเลือกราคาถูกที่ใช้สายโทรศัพท์และโมเด็ม มีแบนด์วิดท์ต่ำ ไม่เหมาะสำหรับการรับส่งข้อมูลขนาดใหญ่
1.5.3 การเชื่อมต่ออินเทอร์เน็ตสำหรับธุรกิจ
ตัวเลือกสำหรับองค์กรต้องการแบนด์วิดท์ที่สูงขึ้นและมีความเสถียรมากกว่า:
Dedicated Leased Line (สายเช่าเฉพาะ): เป็นวงจรที่จองไว้เฉพาะภายในเครือข่ายของผู้ให้บริการ เพื่อเชื่อมต่อสำนักงานที่อยู่ห่างไกลเข้าด้วยกัน โดยมีค่าเช่าเป็นรายเดือนหรือรายปี
Metro Ethernet: บางครั้งเรียกว่า Ethernet WAN ซึ่งเป็นการขยายเทคโนโลยี LAN เข้าสู่เครือข่ายระดับกว้าง (WAN)
Business DSL: มีหลายรูปแบบ โดยที่นิยมคือ Symmetric Digital Subscriber Line (SDSL) ซึ่งมีความเร็วในการอัปโหลดและดาวน์โหลดสูงเท่ากัน
Satellite: ให้บริการในกรณีที่ไม่มีการเชื่อมต่อผ่านสายในพื้นที่นั้น
1.5.4 เครือข่ายแบบรวมศูนย์ (The Converging Network)
เครือข่ายแบบแยกส่วนในอดีต (Traditional Separate Networks)
ในอดีต เช่น เมื่อ 30 ปีก่อน โรงเรียนหรือองค์กรจะเดินสายแยกกันสำหรับเครือข่ายข้อมูล (คอมพิวเตอร์), เครือข่ายโทรศัพท์ และเครือข่ายวิดีโอ (โทรทัศน์) เครือข่ายเหล่านี้ไม่สามารถสื่อสารกันได้ และแต่ละเครือข่ายก็มีกฎเกณฑ์ (Rules) และมาตรฐาน (Standards) ของตนเองในการรับส่งสัญญาณ
เครือข่ายแบบรวมศูนย์ (Converged Networks)
ในปัจจุบัน เครือข่ายข้อมูล โทรศัพท์ และวิดีโอได้รวมเข้าด้วยกัน (Converge) เครือข่ายที่รวมศูนย์นี้สามารถส่งข้อมูล เสียง และวิดีโอระหว่างอุปกรณ์หลายประเภทผ่านโครงสร้างพื้นฐานเครือข่ายเดียวกัน โดยใช้ชุดกฎเกณฑ์ ข้อตกลง และมาตรฐานการนำไปใช้งานที่เหมือนกัน`,
  },
  {
    lesson_id: 148,
    module_id: 42,
    lesson_name: `พับไก่`,
    content: `![origami-chicken-tutorial-01.jpg](/uploads/lessons/148/image-1773192622921-852590580.jpg)![origami-chicken-tutorial-02.jpg](/uploads/lessons/148/image-1773192625884-779866193.jpg)
![origami-chicken-tutorial-03.jpg](/uploads/lessons/148/image-1773192644860-558768078.jpg)![origami-chicken-tutorial-04.jpg](/uploads/lessons/148/image-1773192647333-568143134.jpg)![origami-chicken-tutorial-05.jpg](/uploads/lessons/148/image-1773192649111-910154338.jpg)![origami-chicken-tutorial-05b.jpg](/uploads/lessons/148/image-1773192651506-244432244.jpg)
![origami-chicken-tutorial-06.jpg](/uploads/lessons/148/image-1773192667388-506380003.jpg)![origami-chicken-tutorial-07.jpg](/uploads/lessons/148/image-1773192669405-36775912.jpg)
![origami-chicken-tutorial-08.jpg](/uploads/lessons/148/image-1773192673579-645414135.jpg)![origami-chicken-tutorial-09.jpg](/uploads/lessons/148/image-1773192675820-555629865.jpg)![origami-chicken-tutorial-10.jpg](/uploads/lessons/148/image-1773192684130-251641443.jpg)!![origami-chicken-tutorial-19.jpg](/uploads/lessons/148/image-1773192699445-484579505.jpg)[origami-chicken-tutorial-14.jpg](/uploads/lessons/148/image-1773192693143-40426004.jpg)







`,
  },
  {
    lesson_id: 149,
    module_id: 43,
    lesson_name: `โครงสร้างของ Part 1`,
    content: `1. โครงสร้างของ Part 1 (Photographs) ในข้อสอบ TOEIC ปัจจุบัน พาร์ทนี้จะมีทั้งหมด 6 ข้อ (ลดลงจากเมื่อก่อนที่มี 10 ข้อ) คุณจะได้เห็นรูปภาพ 1 รูปในกระดาษคำถาม จากนั้นต้องฟังตัวเลือก A, B, C, D จากเสียงประกาศ (จะไม่มีตัวหนังสือให้ดู) และเลือกข้อที่บรรยายรูปภาพได้ถูกต้องที่สุดครับ`,
  },
  {
    lesson_id: 150,
    module_id: 43,
    lesson_name: `ประเภทของรูปภาพและจุดโฟกัส`,
    content: `2. ประเภทของรูปภาพและจุดโฟกัส (What to look for) ก่อนที่เสียงจะเริ่มพูด คุณมีเวลาประมาณ 3-5 วินาทีในการกวาดสายตาดูรูปภาพ ให้แบ่งการวิเคราะห์เป็น 2 ประเภท:
รูปคน (People Photos): โฟกัสไปที่ Action (กริยา/กำลังทำอะไร) และ Location (สถานที่) สังเกตมือ สายตา และท่าทาง เช่น กำลังจับปากกา (holding a pen), กำลังมองจอ (looking at a monitor), หรือกำลังใส่เสื้อ (putting on a jacket).
รูปสิ่งของหรือสถานที่ (Object/Scenery Photos): โฟกัสไปที่ ตำแหน่ง (Prepositions of place) ว่าอะไรอยู่ตรงไหน เช่น on the table, next to the wall, in the corner. สังเกตความว่างเปล่าหรือความพลุกพล่านของสถานที่ด้วยครับ`,
  },
  {
    lesson_id: 151,
    module_id: 41,
    lesson_name: `โอริกามิเบื้องต้น`,
    content: `ความหมายและจุดเริ่มต้น: คำว่า โอริกามิ มาจากภาษาญี่ปุ่นคำว่า โอรุ ที่แปลว่า การพับ และ Kami ที่แปลว่า กระดาษ การฝึกพับกระดาษเป็นกิจกรรมที่เพลิดเพลินและช่วยสร้างความรู้สึกภาคภูมิใจเมื่อเราสามารถพับโมเดลต่างๆ ได้สำเร็จ
รูปแบบการสอนที่เข้าใจง่าย: บทช่วยสอนสำหรับมือใหม่จะถูกนำเสนอในรูปแบบ Photo Tutorial หรือการสอนด้วยภาพถ่ายแบบทีละขั้นตอน (Step-by-step) ซึ่งถูกออกแบบมาให้ทำตามได้ง่ายที่สุด
เทคนิครอยพับพื้นฐาน (Foundational Folds): ก่อนจะพับโมเดลที่ซับซ้อน มือใหม่ควรเรียนรู้รอยพับพื้นฐานที่เป็นเหมือนบล็อกตัวต่อสำคัญ ได้แก่:
Valley Fold (รอยพับหุบเขา): การพับขอบกระดาษเข้าหากันให้เป็นรูปตัว 'V' นูนลงเหมือนหุบเขา
Mountain Fold (รอยพับภูเขา): การพับกระดาษไปด้านหลังให้รอยพับนูนขึ้นมาเหมือนสันเขา
Squash Fold (การพับกดแบน): การง้างกระดาษออกแล้วกดทับให้แบนแผ่ออกมา
Reverse Fold (การพับกลับด้าน): การดันพับกระดาษให้กลับทิศทางเข้าไปด้านใน มักใช้ทำส่วนหัว ปาก หรือขาของสัตว์
การเลือกอุปกรณ์: สำหรับผู้ที่เพิ่งเริ่มต้น แนะนำให้เลือกใช้กระดาษโอริกามิแบบบาง (Lightweight) เนื่องจากจะช่วยให้พับง่ายขึ้นและได้รอยกรีดที่คมชัด`,
  },
  {
    lesson_id: 152,
    module_id: 43,
    lesson_name: `กับดักและตัวหลอก`,
    content: `3. กับดักและตัวหลอกยอดฮิต (Common Distractors) ข้อสอบ TOEIC ชอบหลอกเราด้วยวิธีเหล่านี้ครับ:
คำพ้องเสียง (Sound-alikes): ในรูปมีรถตู้ (Van) แต่ในเสียงพูดคำว่า พัดลม (Fan) หรืองานเลี้ยง (Banquet) กับ ผ้าห่ม (Blanket) ถ้าฟังไม่ชัดอาจโดนหลอกได้
คำศัพท์มีในรูป แต่ความหมายผิด (Wrong Context): เช่น ในรูปมี "หนังสือ" วางอยู่บนโต๊ะ แต่ตัวเลือกบอกว่า "He is reading a book" (เขากำลังอ่านหนังสือ) แบบนี้คือหลอก เพราะมีหนังสือจริงแต่มนุษย์ไม่ได้กำลังอ่านครับ
หลอก Subject / Verb: รูปผู้หญิงกำลังเดิน แต่เสียงบอกว่า "The man is walking" (ประธานผิด) หรือ รูปผู้ชายกำลังยืน แต่เสียงบอก "The man is sitting" (กริยาผิด)`,
  },
  {
    lesson_id: 153,
    module_id: 44,
    lesson_name: `พับดอกไม้`,
    content: `![origami-simple-flower-tutorial-01.jpg](/uploads/lessons/153/image-1773192783166-114951307.jpg)![origami-simple-flower-tutorial-02.jpg](/uploads/lessons/153/image-1773192784383-341695827.jpg)![origami-simple-flower-tutorial-03.jpg](/uploads/lessons/153/image-1773192786722-264510994.jpg)![origami-simple-flower-tutorial-04.jpg](/uploads/lessons/153/image-1773192789219-173699048.jpg)![origami-simple-flower-tutorial-07.jpg](/uploads/lessons/153/image-1773192792458-757915935.jpg)




![origami-simple-flower-tutorial-13.jpg](/uploads/lessons/153/image-1773192806079-929087641.jpg)![origami-simple-flower-tutorial-14.jpg](/uploads/lessons/153/image-1773192807570-13486525.jpg)

![origami-simple-flower-tutorial-16.jpg](/uploads/lessons/153/image-1773192810688-874650263.jpg)

![origami-simple-flower-tutorial-17.jpg](/uploads/lessons/153/image-1773192817276-283807824.jpg)



![origami-simple-flower-tutorial-18.jpg](/uploads/lessons/153/image-1773192825127-60142350.jpg)`,
  },
  {
    lesson_id: 154,
    module_id: 43,
    lesson_name: `ไวยากรณ์ที่พบบ่อย`,
    content: `4. ไวยากรณ์ที่พบบ่อย (Common Grammar)
Present Continuous (S + is/am/are + V.ing): ใช้บ่อยมากกับรูปคน เพื่อบอกว่า "กำลังทำอะไร" เช่น She is typing on a keyboard.
Passive Voice (S + is/am/are + V.3 หรือ S + is/am/are + being + V.3): มักใช้กับรูปสิ่งของ เพื่อบอกว่าสิ่งนั้นถูกจัดวางไว้อย่างไร เช่น The chairs are arranged in a row. (เก้าอี้ถูกจัดเรียงเป็นแถว)`,
  },
  {
    lesson_id: 155,
    module_id: 45,
    lesson_name: `รระบุสิ่งของ`,
    content: `1. การระบุสิ่งของ (Demonstrative Pronouns: This, That, These, Those) ฝรั่งใช้คำกลุ่มนี้บ่อยมากเพื่อบอกว่าของชิ้นนั้นอยู่ "ใกล้" หรือ "ไกล" และมี "ชิ้นเดียว" หรือ "หลายชิ้น"
This (นี่): ใช้กับของ 1 สิ่ง ที่อยู่ ใกล้ตัว (This is a book.)
That (นั่น): ใช้กับของ 1 สิ่ง ที่อยู่ ไกลตัว (That is a car.)
These (เหล่านี้): ใช้กับของหลายสิ่ง ที่อยู่ ใกล้ตัว (These are books.)
Those (เหล่านั้น): ใช้กับของหลายสิ่ง ที่อยู่ ไกลตัว (Those are cars.)`,
  },
  {
    lesson_id: 156,
    module_id: 45,
    lesson_name: `การใช้ Article`,
    content: `2. การใช้ Article (A, An, The) นำหน้าคำนาม ในภาษาอังกฤษ คำนามนับได้ที่มีชิ้นเดียวจะไม่อยู่ลอยๆ ต้องมีคำนำหน้าเสมอครับ:
A (อะ): ใช้นำหน้าคำนามทั่วไปที่มีชิ้นเดียว (A cat, A teacher)
An (แอน): ใช้นำหน้าคำนามชิ้นเดียว ที่ขึ้นต้นด้วยเสียงสระ A, E, I, O, U (An apple, An umbrella)
The (เดอะ): ใช้ระบุแบบ "เจาะจง" ว่าคือชิ้นไหน อันไหน (คนพูดและคนฟังรู้กันว่าหมายถึงชิ้นไหน) ใช้ได้ทั้งของชิ้นเดียวและหลายชิ้น (The sun, The cats in my house)`,
  },
  {
    lesson_id: 157,
    module_id: 45,
    lesson_name: `การเปลี่ยนคำนามเอกพจน์`,
    content: `3. การเปลี่ยนคำนามเอกพจน์ (1 สิ่ง) เป็น พหูพจน์ (หลายสิ่ง) ถ้ามีของมากกว่า 1 ชิ้น เราต้องเติม -s หรือ -es ท้ายคำนามนั้นๆ:
กฎทั่วไป: เติม -s ได้เลย เช่น pen -> pens, dog -> dogs
คำนามที่ลงท้ายด้วย s, sh, ch, x, z: ต้องเติม -es เพื่อให้ออกเสียงได้ เช่น bus -> buses, box -> boxes
คำที่เปลี่ยนรูปไปเลย (Irregular): เช่น man -> men (ผู้ชายหลายคน), child -> children (เด็กหลายคน), person -> people (ผู้คน)`,
  },
  {
    lesson_id: 158,
    module_id: 45,
    lesson_name: ` การตั้งคำถามด้วย Wh- Questions`,
    content: `4. การตั้งคำถามด้วย Wh- Questions เบื้องต้น หากอยากเริ่มชวนฝรั่งคุย ต้องรู้จักคำแสดงคำถามเหล่านี้ครับ:
What (อะไร): What is this? (นี่คืออะไร)
Who (ใคร): Who is that man? (ผู้ชายคนนั้นคือใคร)
Where (ที่ไหน): Where are you? (คุณอยู่ที่ไหน)
ทริค: โครงสร้างคำถามง่ายๆ คือ Wh- Question + is/am/are + ประธาน?`,
  },
  {
    lesson_id: 159,
    module_id: 46,
    lesson_name: `การบอกสิ่งที่ "กำลังทำ"`,
    content: `1. การบอกสิ่งที่ "กำลังทำ" (Present Continuous Tense) ในบทนี้คุณจะได้ฝึกใช้โครงสร้างพื้นฐานที่ฝรั่งใช้บ่อยมากในชีวิตประจำวัน เพื่อบอกว่าตอนนี้กำลังเกิดอะไรขึ้น
โครงสร้าง: ประธาน + is / am / are + กริยาเติม -ing
ตัวอย่าง: The woman is driving. (ผู้หญิงกำลังขับรถ)
ทริค: แค่เติม -ing ท้ายคำกริยา ก็จะเปลี่ยนความหมายเป็นคำว่า "กำลัง..." ทันทีครับ`,
  },
  {
    lesson_id: 160,
    module_id: 46,
    lesson_name: `การขยายประโยค`,
    content: `2. การขยายประโยคให้ยาวและชัดเจนขึ้น (Adding Objects) จากข้อ 1 ถ้าเราพูดแค่ว่า "ผู้หญิงกำลังขับรถ" ฝรั่งฟังเข้าใจครับ แต่ถ้าอยากให้ดูโปรขึ้นและสื่อสารไม่ผิดพลาด เราต้องฝึกเติม "กรรม" (Object) เข้าไปต่อท้าย เพื่อบอกให้ชัดเจนว่าขับรถอะไร
ขับรถยนต์: The woman is driving a car.
ขับรถบรรทุก: The woman is driving a truck.`,
  },
  {
    lesson_id: 161,
    module_id: 46,
    lesson_name: `การบอกการครอบครองด้วย Verb to Have`,
    content: `3. การบอกการครอบครองด้วย Verb to Have (มี) การบอกว่าใคร "มี" อะไร จะใช้คำว่า Have หรือ Has โดยมีกฎการใช้ง่ายๆ ตามประธานของประโยคครับ:
Have ใช้กับประธานพหูพจน์ (I, You, We, They, หรือคนหลายคน)
ตัวอย่าง: I have a dog. (ฉันมีหมา 1 ตัว)
Has ใช้กับประธานเอกพจน์ (He, She, It, หรือคน 1 คน)
ตัวอย่าง: He has a dog. (ผู้ชายคนนั้นมีหมา 1 ตัว)
`,
  },
  {
    lesson_id: 162,
    module_id: 46,
    lesson_name: `สรรพนาม`,
    content: `4. การใช้คำสรรพนาม (Personal Pronouns) แทนที่ เพื่อไม่ให้การพูดดูซ้ำซากจำเจ ฝรั่งจะไม่เรียกชื่อคนซ้ำๆ ในทุกประโยค แต่จะใช้คำสรรพนามมาแทน เช่น พูดถึงผู้ชาย 1 คนในประโยคแรกไปแล้ว ประโยคต่อไปจะใช้ He แทนได้เลยครับ`,
  },
  {
    lesson_id: 163,
    module_id: 47,
    lesson_name: ` Adjective (คำคุณศัพท์) คืออะไร?`,
    content: `1. Adjective (คำคุณศัพท์) คืออะไร? Adjective คือคำที่ใช้ "บอกลักษณะ" ของคำนาม (คน, สัตว์, สิ่งของ) เพื่อให้เรารู้ว่าสิ่งนั้นมีรูปร่าง, ขนาด, สี, หรือความรู้สึกแบบไหน เช่น big (ใหญ่), small (เล็ก), hot (ร้อน), cold (เย็น), beautiful (สวย), happy (มีความสุข) รวมไปถึงคำบอกสีต่างๆ (red, blue, green) ด้วยครับ`,
  },
  {
    lesson_id: 164,
    module_id: 47,
    lesson_name: ` กฎเหล็กข้อที่ 1`,
    content: `2. กฎเหล็กข้อที่ 1: วาง "หน้า" คำนามเสมอ นี่คือจุดที่คนไทยมักจะสับสนบ่อยที่สุด! เพราะภาษาไทยเราจะเอาคำขยายไว้ "ข้างหลัง" (เช่น แมวสีดำ) แต่ภาษาอังกฤษต้องเอาคำขยายมาวางไว้ "ข้างหน้า" คำนามเสมอครับ:
แบบไทย: แมว (Cat) + ดำ (Black)
แบบอังกฤษ: A black cat. (แมวสีดำ 1 ตัว)
ตัวอย่าง: I have a new car. (ฉันมีรถคันใหม่) / He is a tall man. (เขาเป็นผู้ชายตัวสูง)`,
  },
  {
    lesson_id: 165,
    module_id: 47,
    lesson_name: `กฎเหล็กข้อที่ 2`,
    content: `3. กฎเหล็กข้อที่ 2: วาง "หลัง" Verb to be (is, am, are) ถ้าเราไม่ได้เอาคำขยายไปแปะติดกับคำนามโดยตรง แต่ต้องการแต่งประโยคเพื่อบรรยายว่าสิ่งนั้น "เป็น" อย่างไร เราจะวาง Adjective ไว้หลัง is, am, are ได้เลยครับ:
โครงสร้าง: ประธาน + is / am / are + Adjective
ตัวอย่าง: The car is fast. (รถคันนั้นเร็ว) / The coffee is hot. (กาแฟร้อน) / I am happy. (ฉันมีความสุข)`,
  },
  {
    lesson_id: 166,
    module_id: 47,
    lesson_name: ` การรวมกันของ Adjective หลายตัว`,
    content: `4. การรวมกันของ Adjective หลายตัว ถ้าเราอยากใส่คำขยายหลายๆ คำพร้อมกัน (เช่น ทั้งขนาดและสี) ภาษาอังกฤษมักจะเรียง "ขนาด (Size)" มาก่อน "สี (Color)" เสมอครับ:
ตัวอย่าง: A big black dog. (หมาสีดำตัวใหญ่ 1 ตัว) จะไม่พูดว่า A black big dog ครับ`,
  },
  {
    lesson_id: 167,
    module_id: 48,
    lesson_name: `There is / There are`,
    content: `1. การบอกว่า "มี..." ด้วย There is / There are ในบทที่ 3 เราเรียนคำว่า "Have/Has" ที่แปลว่า "มี" (แบบมีคนเป็นเจ้าของ) ไปแล้ว แต่ถ้าเราแค่อยากบรรยายว่า "มีสิ่งนั้นตั้งอยู่ หรือ ปรากฏอยู่" (โดยไม่ได้บอกว่าใครเป็นเจ้าของ) ฝรั่งจะใช้คำว่า There is หรือ There are แทนครับ:
There is: ใช้กับของ 1 สิ่ง (เอกพจน์) -> There is a book on the desk. (มีหนังสือ 1 เล่มอยู่บนโต๊ะ)
There are: ใช้กับของหลายสิ่ง (พหูพจน์) -> There are two dogs in the yard. (มีหมา 2 ตัวอยู่ในสนาม)`,
  },
  {
    lesson_id: 168,
    module_id: 48,
    lesson_name: `บอกตำแหน่งสถานที่ `,
    content: `2. การบอกตำแหน่งสถานที่ (Prepositions of Place) เมื่อเราบอกว่า "มีอะไร" แล้ว เราก็ต้องบอกได้ว่ามันอยู่ "ที่ไหน" ด้วยคำบุพบท (Prepositions) พื้นฐานเหล่านี้ครับ:
In (ใน): อยู่ในพื้นที่ปิด หรือในภาชนะ (in the box, in the room)
On (บน): วางอยู่บนพื้นผิว ทั้งแนวนอนและแนวตั้ง (on the table, on the wall)
At (ที่): ระบุสถานที่แบบเจาะจงจุด หรือเป็นสถานที่ตามสถานการณ์ (at the bus stop, at home, at school)
Under (ใต้) / Next to (ข้างๆ) / Behind (ข้างหลัง)`,
  },
  {
    lesson_id: 169,
    module_id: 48,
    lesson_name: `สร้างประโยคปฏิเสธ`,
    content: `3. การสร้างประโยคปฏิเสธ (Negative Sentences) ถ้าต้องการพูดว่า "ไม่" ในประโยคที่มี Verb to be (is, am, are) กฎนั้นง่ายนิดเดียวครับ แค่เติมคำว่า "not" ลงไปข้างหลัง is, am, หรือ are ได้เลย!
I am not a doctor. (ฉันไม่ได้เป็นหมอ)
The cat is not (isn't) black. (แมวตัวนั้นไม่ได้มีสีดำ)
They are not (aren't) sleeping. (พวกเขากำลังไม่ได้หลับอยู่)`,
  },
  {
    lesson_id: 170,
    module_id: 48,
    lesson_name: `เปลี่ยนเป็นประโยคคำถาม`,
    content: `4. การเปลี่ยนเป็นประโยคคำถาม (Yes/No Questions) ถ้าอยากถามเพื่อนว่า "ใช่ไหม?" ให้ใช้เทคนิค "สลับที่" โดยย้าย Verb to be (is, am, are) มาไว้ หน้าสุด ของประโยคครับ:
ประโยคบอกเล่า: He is happy. (เขามีความสุข)
ประโยคคำถาม: Is he happy? (เขามีความสุขไหม? - อย่าลืมขึ้นเสียงสูงที่ท้ายประโยคเวลาพูดจริงด้วยนะครับ)
ประโยคบอกเล่า: This is your car. (นี่คือรถของคุณ)
ประโยคคำถาม: Is this your car? (นี่คือรถของคุณใช่ไหม?)`,
  },
  {
    lesson_id: 171,
    module_id: 49,
    lesson_name: `Present Simple Tense`,
    content: `1. Present Simple Tense (การบอกกิจวัตรและความจริง) Tense นี้ใช้สำหรับเล่าสิ่งที่เราทำเป็นประจำ (Routines) หรือสิ่งที่เป็นความจริงเสมอครับ
โครงสร้างง่ายๆ: ประธาน + กริยาช่องที่ 1 (V.1)
กฎเหล็กเรื่องการเติม -s / -es:
ถ้าประธานเป็น พหูพจน์ (I, You, We, They) หรือหลายคน -> กริยาคงเดิมไม่ต้องเติมอะไร (เช่น I play tennis. / They eat rice.)
ถ้าประธานเป็น เอกพจน์ (He, She, It) หรือคนเดียว -> กริยาต้องเติม -s หรือ -es เสมอ! (เช่น He plays tennis. / She goes to school.)
`,
  },
  {
    lesson_id: 172,
    module_id: 49,
    lesson_name: ` การใช้ Do และ Does เป็นผู้ช่วย `,
    content: `2. การใช้ Do และ Does เป็นผู้ช่วย (คำถามและปฏิเสธ) เมื่อเราต้องการทำประโยคเหล่านี้ให้เป็น "คำถาม" หรือ "ปฏิเสธ" เราจะเอา Verb to be (is,am,are) มาใช้ไม่ได้แล้วครับ แต่ต้องเชิญผู้ช่วยที่ชื่อว่า Do และ Does มาแทน:
Do ใช้กับกลุ่มประธานพหูพจน์ (I, You, We, They)
Does ใช้กับกลุ่มประธานเอกพจน์ (He, She, It)
ประโยคปฏิเสธ: เติม not เข้าไปเป็น do not (don't) หรือ does not (doesn't)
ตัวอย่าง: I don't work on Sunday. (ฉันไม่ทำงานวันอาทิตย์) / He doesn't drink coffee. (เขาไม่ดื่มกาแฟ)
ประโยคคำถาม: เอา Do / Does วางหน้าสุดของประโยค
ตัวอย่าง: Do you like pizza? (คุณชอบพิซซ่าไหม?) / Does she live here? (เธออาศัยอยู่ที่นี่ใช่ไหม?)
ข้อควรระวังสุดๆ: ทันทีที่ในประโยคมีคำว่า Does (หรือ Doesn't) แล้ว คำกริยาหลักด้านหลัง "ห้ามเติม -s/-es เด็ดขาด" (เพราะ Does แย่งเติม -es ไปแล้วครับ!)`,
  },
  {
    lesson_id: 173,
    module_id: 49,
    lesson_name: `การบอกความชอบ`,
    content: `3. การบอกความชอบ (Like / Don't like) การบอกความชอบก็ใช้หลักการของ Present Simple เช่นกันครับ:
I like apples. (ฉันชอบแอปเปิ้ล)
She likes cats. (เธอชอบแมว - สังเกตว่า like ต้องเติม s)
We don't like playing football. (พวกเราไม่ชอบเล่นฟุตบอล)`,
  },
  {
    lesson_id: 174,
    module_id: 49,
    lesson_name: ` คำบอกความถี่ `,
    content: `4. คำบอกความถี่ (Adverbs of Frequency) เพื่อบอกให้รู้ว่าเราทำสิ่งนั้นบ่อยแค่ไหน ฝรั่งมักจะแทรกคำเหล่านี้ไว้ "หน้าคำกริยาหลัก":
Always: เสมอ (100%)
Usually: ปกติ/มักจะ (80%)
Sometimes: บางครั้ง (50%)
Never: ไม่เคยเลย (0%)
ตัวอย่าง: I always wake up at 7 AM. (ฉันตื่น 7 โมงเช้าเสมอ)`,
  },
  {
    lesson_id: 175,
    module_id: 50,
    lesson_name: `High-Impact Presentations `,
    content: `1. โครงสร้างการนำเสนอที่ดึงดูดใจ (The Presentation Framework)
การพรีเซนต์ที่ดีต้องไม่เริ่มด้วยการอ่านสไลด์ แต่ต้องมีโครงสร้างที่นำสายตาและความคิดของผู้ฟัง สอนให้ผู้เรียนจัดโครงสร้างแบบนี้ครับ:

The Hook (การเปิดเรื่องให้น่าติดตาม): ดึงความสนใจภายใน 30 วินาทีแรกด้วยคำถามชวนคิด สถิติที่น่าตกใจ หรือเรื่องเล่าสั้นๆ

"Have you ever wondered why...?" (คุณเคยสงสัยไหมว่าทำไม...)

"Imagine a world where..." (ลองจินตนาการถึงโลกที่...)

"Did you know that 80% of our clients..." (คุณรู้หรือไม่ว่า 80% ของลูกค้าเรา...)

The Roadmap (บอกทิศทาง): ทำให้ผู้ฟังรู้ว่ากำลังจะเจอกับอะไร เพื่อให้พวกเขาตามเราทัน

"Today, I’m going to walk you through three main areas..." (วันนี้ผมจะพาทุกท่านไปดู 3 ประเด็นหลัก...)

The Call to Action (บทสรุปที่ทรงพลัง): จบด้วยความชัดเจนว่าต้องการให้ผู้ฟังทำอะไรต่อไป

"Based on these findings, I strongly recommend that we..." (จากข้อมูลเหล่านี้ ผมขอเสนอให้เรา...)

2. ศิลปะการเล่าเรื่องเพื่อธุรกิจ (Business Storytelling)
คนเรามักลืมตัวเลข แต่จะจำ "เรื่องราว" ได้เสมอ สอนผู้เรียนใช้โครงสร้าง S-C-R (Situation - Complication - Resolution) เพื่อทำให้โปรเจกต์ดูมีมิติ:

Situation (ปูเรื่อง): เล่าถึงสถานการณ์เดิม

"A year ago, our sales team was facing a major challenge with..." (เมื่อปีที่แล้ว ทีมเซลส์ของเราเผชิญปัญหาใหญ่เรื่อง...)

Complication (จุดหักมุม/ปัญหา): เล่าถึงอุปสรรคที่ทำให้ต้องเกิดโปรเจกต์นี้

"The turning point came when we realized that..." (จุดเปลี่ยนมาถึงเมื่อเราตระหนักว่า...)

"However, we encountered a significant roadblock..." (อย่างไรก็ตาม เราพบกับอุปสรรคสำคัญ...)

Resolution (ทางออกและผลลัพธ์): เล่าถึงวิธีแก้ปัญหาและผลลัพธ์ที่ได้ (นี่คือจุดโชว์ของ)

"By implementing this strategy, we successfully..." (ด้วยการใช้กลยุทธ์นี้ เราประสบความสำเร็จในการ...)

3. คำศัพท์และวลีเพื่อโน้มน้าวใจ (Persuasive Power Phrases)
สอนผู้เรียนให้เลิกใช้คำศัพท์พื้นฐาน (Basic Words) และหันมาใช้คำศัพท์ทรงพลัง (Power Words) ที่ดูโปรเฟสชันแนลมากขึ้น:

เปลี่ยนคำธรรมดา ให้ดูโปร:

แทนที่จะพูด "We want to..." เปลี่ยนเป็น "Our vision is to..."

แทนที่จะพูด "This is a good idea." เปลี่ยนเป็น "This is a highly effective strategy."

แทนที่จะพูด "We changed it." เปลี่ยนเป็น "We completely transformed it."

Signposting (วลีเชื่อมโยงให้ลื่นไหล):

"Moving on to the next point..." (ไปที่ประเด็นถัดไป...)

"Let me illustrate this with an example..." (ขออนุญาตยกตัวอย่างให้เห็นภาพ...)

Emphasizing (การเน้นย้ำประเด็นสำคัญ):

"What’s crucial to understand here is..." (สิ่งที่สำคัญมากที่ต้องเข้าใจตรงนี้คือ...)

"I want to highlight this specific data point..." (ผมอยากเน้นย้ำข้อมูลจุดนี้เป็นพิเศษ...)

4. เทคนิคจิตวิทยาการพูด (Delivery & Psychology Tricks)
สอดแทรกเทคนิคเล็กๆ น้อยๆ ที่ทำให้การพรีเซนต์ดูเป็นธรรมชาติและมีสเน่ห์แบบฝรั่ง:

The Power of Pause: สอนให้รู้จัก "การทิ้งจังหวะหยุดพัก (Pause)" ก่อนพูดประโยคสำคัญ เพื่อดึงความสนใจของผู้ฟังกลับมา

The Rule of Three: กฎเลข 3 (คนเรามักจำข้อมูลที่มาเป็นชุดละ 3 อย่างได้ดีที่สุด) เช่น "Our new product is faster, cheaper, and more reliable."`,
  },
  {
    lesson_id: 176,
    module_id: 50,
    lesson_name: `The Art of Negotiation`,
    content: `1. กฎเหล็กของการเจรจา (The Win-Win Mindset)
เริ่มด้วยการปรับ Mindset ให้ผู้เรียนเข้าใจว่าการเจรจาในโลกธุรกิจระดับสากลเน้นความสัมพันธ์ระยะยาว สอนแนวคิดเรื่อง BATNA (Best Alternative to a Negotiated Agreement) หรือ "ทางเลือกสำรองที่ดีที่สุดหากเจรจาไม่สำเร็จ" เพื่อให้ผู้เรียนมีความมั่นใจในการคุย

2. วลีสำหรับการเปิดและยื่นข้อเสนอ (Opening & Proposing)
การเปิดฉากที่ดีต้องสร้างบรรยากาศที่เป็นมิตร แต่ก็ต้องชัดเจนในจุดประสงค์

สร้างบรรยากาศ:

"I’m glad we could get together today to discuss..." (ยินดีที่เราได้มาคุยกันวันนี้เรื่อง...)

"Our main objective today is to find a solution that works for both of us." (เป้าหมายหลักของเราวันนี้คือการหาทางออกที่ดีกับทั้งสองฝ่าย)

การยื่นข้อเสนอแบบหยั่งเชิง (Soft Proposals):

"We would like to propose that..." (เราอยากจะขอเสนอว่า...)

"How flexible are you on the timeline/budget?" (คุณสามารถยืดหยุ่นเรื่องเวลา/งบประมาณได้มากน้อยแค่ไหน?)

3. ศิลปะแห่งการใช้เงื่อนไข (The Power of "If")
สอนเทคนิคการใช้ Conditional Sentences (ประโยคเงื่อนไข If-clause) ซึ่งเป็นอาวุธสำคัญที่สุดในการต่อรอง เพื่อแลกเปลี่ยนผลประโยชน์โดยไม่เสียเปรียบ

"If you can commit to a larger order volume, then we can offer a 10% discount." (ถ้าคุณยืนยันยอดสั่งซื้อที่มากขึ้นได้ เราก็สามารถให้ส่วนลด 10% ได้)

"Supposing we extend the deadline, would you be able to include the extra features?" (สมมติว่าเราขยายเดดไลน์ให้ คุณจะสามารถเพิ่มฟีเจอร์พิเศษเข้าไปได้ไหม?)

4. การปฏิเสธและต่อรองกลับอย่างมืออาชีพ (Pushing Back & Counter-offering)
นี่คือจุดที่คนไทยมักจะเกรงใจ การสอนให้ปฏิเสธโดยใช้ "Diplomatic English" (ภาษาทางการทูต) จะช่วยให้ผู้เรียนกล้าปฏิเสธโดยไม่ทำลายความสัมพันธ์`,
  },
  {
    lesson_id: 177,
    module_id: 50,
    lesson_name: `Professional Networking & Small Talk`,
    content: `1. กฎของการเปิดบทสนทนา (Icebreakers that Actually Work)
สอนให้ผู้เรียนเลิกใช้คำถามน่าเบื่ออย่าง "How are you?" หรือ "What is your job?" ทันทีที่เจอหน้า แล้วเปลี่ยนมาใช้บริบทของงาน (Context) หรือสิ่งแวดล้อมรอบตัวในการเปิดบทสนทนาแทน

ทักทายจากสถานการณ์รอบตัว (The Situation):

"How are you enjoying the conference so far?" (งานสัมมนาจนถึงตอนนี้เป็นยังไงบ้างครับ ถูกใจไหม?)

"That last presentation was really insightful, wasn't it?" (พรีเซนต์เมื่อกี้เปิดมุมมองใหม่ได้ดีมากเลย คุณว่าไหม?)

ทักทายเรื่องการเดินทาง (The Journey):

"Did you have to travel far to get here?" (เดินทางมาไกลไหมครับกว่าจะถึงที่นี่?)

ทักทายแถวโซนอาหาร/เครื่องดื่ม (The Buffer Zone): จุดนี้คือทำเลทองของการเน็ตเวิร์กกิ้ง

"The coffee line is moving fast today. Have you tried the pastries?" (คิวกาแฟขยับเร็วดีนะครับ วันนี้ลองชิมขนมอบหรือยัง?)

2. เทคนิคคุยให้ลื่นไหลด้วย "กฎปิงปอง" (The Ping-Pong Technique)
ปัญหาหลักคือบทสนทนามักจะเกิด "เดดแอร์" (Dead air) สอนให้ผู้เรียนโต้ตอบเหมือนการตีปิงปอง คือ ตอบคำถาม + ขยายความ + โยนคำถามกลับ (Answer + Add Detail + Ask Back)

ตัวอย่างฝั่งเขาถาม: "Are you based in Bangkok?" (คุณทำงานที่กรุงเทพฯ เป็นหลักเลยไหม?)

อย่าตอบแค่: "Yes, I am." (จบเกม เดดแอร์ทันที)

ให้ตอบแบบปิงปอง: "Yes, I’m based in Bangkok. (Answer) Our main office is just right in the city center. (Add Detail) What about you? Are you local or visiting? (Ask Back)"

3. หัวข้อที่ปลอดภัยและหัวข้อที่ควรเลี่ยง (Safe vs. Taboo Topics)
การทำ Small Talk ในระดับสากลต้องระวังเรื่องวัฒนธรรมที่แตกต่างกัน

Safe Topics (คุยได้เลย ปลอดภัย 100%):

สภาพอากาศและการเดินทาง (Weather & Travel)

อาหารและร้านอาหารแนะนำ (Food & Recommendations)

กิจกรรมยามว่างและงานอดิเรก (Hobbies & Interests)

Taboo Topics (เลี่ยงเด็ดขาด):

การเมือง (Politics)

ศาสนา (Religion)

รูปร่างหน้าตาและน้ำหนัก (Appearance & Weight)

สถานะครอบครัวหรืออายุ (Personal status/Age) เว้นแต่อีกฝ่ายจะเปิดประเด็นก่อน

4. ศิลปะการขอตัวอย่างแนบเนียน (The Graceful Exit)
นี่คือสิ่งที่คนอยากรู้มากที่สุด! ทำอย่างไรถึงจะปลีกตัวออกจากวงสนทนาไปคุยกับคนอื่นต่อได้โดยไม่เสียมารยาท และยังรักษาคอนเนคชันไว้ได้

ออกตัวเพื่อไปทำกิจกรรมอื่น:

"It’s been absolutely great chatting with you, but I should probably go grab some food before it runs out." (คุยกับคุณสนุกมากเลยครับ แต่ผมคงต้องขอตัวไปหาอะไรทานก่อนที่อาหารจะหมด)

แนะนำให้รู้จักคนอื่น (The Hand-off):

"Oh, have you met Sarah? She’s also working in marketing. I’ll let you two get acquainted." (อ๊ะ คุณเคยเจอซาร่าหรือยังครับ เธอทำงานมาร์เก็ตติ้งเหมือนกัน เดี๋ยวผมปล่อยให้คุณสองคนทำความรู้จักกันต่อนะครับ)

แลก Contact ก่อนจาก:

"I'd love to hear more about your project. Do you have a card? Let's connect on LinkedIn." (ผมอยากฟังเรื่องโปรเจกต์คุณต่อจัง คุณมีนามบัตรไหมครับ หรือเราคอนเนคกันทาง LinkedIn ดี)`,
  },
  {
    lesson_id: 178,
    module_id: 50,
    lesson_name: `Executive Email Writing`,
    content: `1. กฎเหล็ก BLUF (Bottom Line Up Front)
ผู้บริหารหรือลูกค้าไม่มีเวลาอ่านอีเมลยาวๆ เพื่อหาว่าสรุปแล้วคุณต้องการอะไร สอนให้ผู้เรียนเอา "ใจความสำคัญ" หรือ "สิ่งที่ต้องการให้ทำ" ขึ้นมาไว้ที่ประโยคแรกสุดเสมอ

แบบเดิม (เกริ่นยาว): "I hope this email finds you well. I am writing to you today because we have been reviewing the project timeline and noticed that..." (น้ำเยอะไป)

แบบ BLUF (ตรงประเด็น): "I am writing to request your approval on the revised project timeline by this Friday. Here is a brief summary of the changes..." (บอกเลยว่าอีเมลนี้ส่งมาเพื่อขออนุมัติภายในวันศุกร์)

2. การเขียน Subject Line ให้ถูกเปิดอ่านทันที (Action-Driven Subjects)
ชื่อเรื่องอีเมลที่ดีต้องทำหน้าที่เหมือน "ป้ายบอกทาง" ให้คนรับรู้ทันทีว่าต้องทำอะไรกับอีเมลฉบับนี้ สอนการใช้ Tags ในวงเล็บเพื่อระบุความสำคัญ:

[Action Required] / [Approval Needed] - สำหรับอีเมลที่ต้องการให้คนรับตัดสินใจหรือทำอะไรบางอย่าง

ตัวอย่าง: [Approval Needed] Q3 Marketing Budget Proposal

[FYI] (For Your Information) - สำหรับอีเมลที่ส่งมาเพื่อแจ้งให้ทราบเฉยๆ ไม่ต้องตอบกลับ

ตัวอย่าง: [FYI] Update on Office Renovation Schedule

[Urgent] - ใช้เฉพาะกรณีฉุกเฉินจริงๆ เท่านั้น

3. ศิลปะการปรับ Tone ให้สุภาพแต่เด็ดขาด (Firm but Polite)
การเขียนอีเมลทวงงาน ปฏิเสธ หรือแจ้งข่าวร้าย มักเป็นจุดที่คนไทยกังวลว่าจะดูแข็งกร้าวเกินไป สอนวิธีเปลี่ยนคำพูดธรรมดาให้เป็นภาษาเขียนระดับ Executive

Gemini บอกว่า
ได้เลยครับ มาปิดท้าย Module 1 กันด้วย Lesson 1.4: Executive Email Writing ทักษะนี้คือตัวชี้วัดความเป็นมืออาชีพเลยครับ เพราะในระดับผู้บริหารหรือการทำงานข้ามชาติ ทุกคนมีเวลาจำกัด อีเมลที่ดีจึงต้อง "สั้น กระชับ ตรงประเด็น แต่ยังคงความสุภาพ" (Concise but Polite)

นี่คือโครงสร้างเนื้อหาและเทคนิคที่คุณสามารถนำไปสอนในบทนี้ได้ครับ

1. กฎเหล็ก BLUF (Bottom Line Up Front)
ผู้บริหารหรือลูกค้าไม่มีเวลาอ่านอีเมลยาวๆ เพื่อหาว่าสรุปแล้วคุณต้องการอะไร สอนให้ผู้เรียนเอา "ใจความสำคัญ" หรือ "สิ่งที่ต้องการให้ทำ" ขึ้นมาไว้ที่ประโยคแรกสุดเสมอ

แบบเดิม (เกริ่นยาว): "I hope this email finds you well. I am writing to you today because we have been reviewing the project timeline and noticed that..." (น้ำเยอะไป)

แบบ BLUF (ตรงประเด็น): "I am writing to request your approval on the revised project timeline by this Friday. Here is a brief summary of the changes..." (บอกเลยว่าอีเมลนี้ส่งมาเพื่อขออนุมัติภายในวันศุกร์)

2. การเขียน Subject Line ให้ถูกเปิดอ่านทันที (Action-Driven Subjects)
ชื่อเรื่องอีเมลที่ดีต้องทำหน้าที่เหมือน "ป้ายบอกทาง" ให้คนรับรู้ทันทีว่าต้องทำอะไรกับอีเมลฉบับนี้ สอนการใช้ Tags ในวงเล็บเพื่อระบุความสำคัญ:

[Action Required] / [Approval Needed] - สำหรับอีเมลที่ต้องการให้คนรับตัดสินใจหรือทำอะไรบางอย่าง

ตัวอย่าง: [Approval Needed] Q3 Marketing Budget Proposal

[FYI] (For Your Information) - สำหรับอีเมลที่ส่งมาเพื่อแจ้งให้ทราบเฉยๆ ไม่ต้องตอบกลับ

ตัวอย่าง: [FYI] Update on Office Renovation Schedule

[Urgent] - ใช้เฉพาะกรณีฉุกเฉินจริงๆ เท่านั้น

3. ศิลปะการปรับ Tone ให้สุภาพแต่เด็ดขาด (Firm but Polite)
การเขียนอีเมลทวงงาน ปฏิเสธ หรือแจ้งข่าวร้าย มักเป็นจุดที่คนไทยกังวลว่าจะดูแข็งกร้าวเกินไป สอนวิธีเปลี่ยนคำพูดธรรมดาให้เป็นภาษาเขียนระดับ Executive:

4. การใช้ Bullet Points และตัวหนา (Formatting for Scannability)
อีเมลระดับบริหารต้อง "สแกนด้วยสายตา" ได้ง่าย สอนเทคนิคการจัดหน้าอีเมล:

ห้ามเขียนเป็นพารากราฟติดกันเป็นพรืด: ให้เว้นบรรทัดบ่อยๆ

ใช้ Bullet Points: เมื่อต้องแจกแจงข้อมูลมากกว่า 2 ข้อขึ้นไป

ใช้ตัวหนา (Bolding): เฉพาะข้อมูลที่สำคัญที่สุด เช่น วันที่ (Dates), ตัวเลข (Metrics), หรือ ชื่อคนรับผิดชอบ (Owners) เพื่อให้ตาโฟกัสได้ทันที

5. การปิดท้ายด้วย Call to Action (CTA) ที่ชัดเจน
ก่อนลงท้ายด้วย Best regards, หรือ Sincerely, ต้องระบุเสมอว่าขั้นตอนต่อไป (Next steps) คืออะไร ใครต้องทำอะไร และภายในเมื่อไหร่

"Please review the attached document and provide your feedback by EOD Wednesday." (กรุณาตรวจเอกสารแนบและส่งฟีดแบ็กภายในสิ้นวันพุธ)

"Let me know if you are available for a quick 15-minute call this Thursday at 10 AM." (แจ้งผมได้เลยนะครับถ้าคุณสะดวกคุยสั้นๆ 15 นาที วันพฤหัสบดีนี้ตอน 10 โมงเช้า)`,
  },
  {
    lesson_id: 179,
    module_id: 50,
    lesson_name: `-`,
    content: ``,
  },
  {
    lesson_id: 180,
    module_id: 51,
    lesson_name: `Phrasal Verbs in Real Contexts`,
    content: `คนไทยหลายคนติดนิสัยใช้คำศัพท์หรูๆ (Formal Words) ตลอดเวลาเพราะจำมาจากห้องเรียน แต่ในชีวิตประจำวันหรือแม้แต่ในที่ทำงาน ฝรั่งมักจะใช้ Phrasal Verbs (กริยาวลีที่เกิดจาก Verb + Preposition) มากกว่า เพราะมันฟังดูเป็นกันเองและไม่อึดอัดจนเกินไปครับ

นี่คือโครงสร้างเนื้อหาที่แนะนำสำหรับบทนี้:

1. กฎการสลับร่าง: Formal vs. Natural English
สอนให้ผู้เรียนเห็นภาพชัดเจนว่า การเปลี่ยนคำศัพท์ทางการมาเป็น Phrasal Verbs ช่วยลดความตึงเครียดในบทสนทนาได้อย่างไร
2. กลุ่ม Phrasal Verbs ยอดฮิตในหมวดหมู่ต่างๆ (Contextual Grouping)
แทนที่จะให้ผู้เรียนท่องจำจาก A-Z ซึ่งน่าเบื่อและลืมง่าย แนะนำให้จัดกลุ่มตามสถานการณ์ครับ:

หมวดการสื่อสารและอีเมล (Communication):

Get back to (someone): ติดต่อกลับ "I'll find out and get back to you by noon."

Point out: ชี้ให้เห็น "I'd like to point out a minor error on page 3."

หมวดการจัดการโปรเจกต์ (Project Management):

Wrap up: สรุปจบ/ทำให้เสร็จ "Let's wrap up this project by Friday."

Catch up: ตามงานให้ทัน/อัปเดตชีวิต "I need to catch up on my emails."

หมวดปัญหาและอุปสรรค (Troubleshooting):

Sort out: จัดการปัญหาให้เข้าที่เข้าทาง "Don't worry, we'll sort this out together."

Fall through: ล้มเหลว/ไม่เป็นไปตามแผน "The deal fell through at the last minute."

3. เทคนิค Advanced: การแปลงร่างเป็นคำนาม (The Noun Transformation)
นี่คือเทคนิคระดับเซียนที่ทำให้ฟังดูเป็น Native สุดๆ ครับ คือการเอา Phrasal Verb มารวมร่างกันให้กลายเป็น "คำนาม (Noun)" คำเดียว

Set up (กริยา: ติดตั้ง/เตรียมการ) ➡️ A setup (นาม: การจัดวาง/ระบบ)

"We need to set up the system." ➡️ "The new setup looks great."

Back up (กริยา: สำรองข้อมูล/สนับสนุน) ➡️ A backup (นาม: ตัวสำรอง/แผนสำรอง)

"Did you back up the files?" ➡️ "Do we have a backup plan?"

Follow up (กริยา: ติดตามผล) ➡️ A follow-up (นาม: การติดตามผล)

"I will follow up with him." ➡️ "Let's schedule a follow-up meeting."

4. กฎไวยากรณ์เล็กๆ ที่คนมักพลาด (Separable vs. Inseparable)
สอดแทรกแกรมม่าเบาๆ เรื่องการแยกคำและการใช้ Pronoun (it/them) ไว้ตรงกลาง เช่น

✅ "Turn it on." (เปิดมันสิ)

❌ "Turn on it." (ผิดหลักธรรมชาติ)

✅ "Can you figure it out?" (คุณหาวิธีแก้ได้ไหม)`,
  },
  {
    lesson_id: 181,
    module_id: 51,
    lesson_name: `Modern Idioms & Expressions`,
    content: `1. ทลายกรอบสำนวนเก่า (Outdated vs. Modern Expressions)
เริ่มต้นด้วยการเรียกเสียงหัวเราะและความตระหนักรู้ โดยการเปรียบเทียบสำนวนในตำราเรียน กับสิ่งที่เจ้าของภาษาใช้พูดกันจริงๆ
2. สำนวนฮิตในออฟฟิศยุคใหม่ (Modern Workplace Jargon)
โลกการทำงานยุคปัจจุบัน (โดยเฉพาะหลังยุค WFH) มีคำศัพท์ที่เกิดใหม่มากมาย สอนให้ผู้เรียนคุ้นชินกับคำเหล่านี้เพราะได้ยินในที่ประชุมบ่อยแน่นอน:

Bandwidth (เวลา/พลังงานที่จะรับงานเพิ่ม): ยืมมาจากศัพท์ไอที แปลว่าความจุในการรับส่งข้อมูล

"I don't have the bandwidth to take on another project right now." (ตอนนี้ฉันไม่มีเวลา/พลังงานเหลือพอจะรับโปรเจกต์อื่นแล้ว)

Touch base (อัปเดตงานสั้นๆ / คุยกันซักหน่อย):

"Let's touch base on Monday to see where we are." (เดี๋ยววันจันทร์เรามาอัปเดตกันสั้นๆ นะว่างานถึงไหนแล้ว)

Move the needle (สร้างความเปลี่ยนแปลงที่เห็นผลชัดเจน):

"We need a marketing campaign that will really move the needle." (เราต้องการแคมเปญการตลาดที่สร้างยอดขายได้เป็นชิ้นเป็นอันจริงๆ)

Keep (someone) in the loop (อัปเดตข้อมูลให้รู้ตลอด/ไม่ให้ตกข่าว):

"Please keep me in the loop regarding the client's decision." (ช่วยอัปเดตให้ฉันรู้เรื่อยๆ ด้วยนะเรื่องการตัดสินใจของลูกค้า)

3. สำนวนติดปากในชีวิตประจำวัน (Everyday Conversational Expressions)
วลีสั้นๆ ที่ฝรั่งชอบใช้พูดเพื่อแสดงความเข้าใจ เห็นด้วย หรือสรุปความ:

Fair enough: เข้าใจได้ / มีเหตุผล (ใช้เมื่ออีกฝ่ายอธิบายเหตุผลแล้วเรารู้สึกว่ายอมรับได้)

A: "I can't come to the party, I have an early flight."

B: "Ah, fair enough." (อ้อ เข้าใจได้ๆ)

On the same page: เข้าใจตรงกัน / มองเห็นภาพเดียวกัน

"Before we start, I want to make sure everyone is on the same page." (ก่อนเริ่ม ผมอยากเมคชัวร์ว่าทุกคนเข้าใจตรงกันนะ)

So far, so good: ตอนนี้ยังโอเคอยู่ / ยังไม่มีปัญหาอะไร

"How's the new software? - So far, so good." (ซอฟต์แวร์ใหม่เป็นไงบ้าง - จนถึงตอนนี้ก็ยังปกติดีนะ)

Call it a day: เลิกงาน / พอแค่นี้สำหรับวันนี้

"We've been working for 10 hours. Let's call it a day." (เราทำมา 10 ชั่วโมงแล้ว วันนี้พอแค่นี้เถอะ)

4. ข้อควรระวัง: The Danger of "Overusing" Idioms
ปิดท้ายบทเรียนด้วยคำแนะนำที่สำคัญมาก คือ "อย่าพยายามยัดเยียดสำนวนมากเกินไป" (Don't force it) การพูดภาษาอังกฤษที่ดีคือการสื่อสารที่ชัดเจน (Clarity) สำนวนเปรียบเหมือน "เครื่องเทศ" ที่ใช้ปรุงรสบทสนทนาให้น่าสนใจขึ้น แต่ถ้าใส่เยอะเกินไปจะทำให้ฟังดูพยายามผิดธรรมชาติ และอาจทำให้เกิดความเข้าใจผิดได้ ให้เลือกใช้เฉพาะตอนที่รู้สึกว่ามันเข้ากับบริบทจริงๆ`,
  },
  {
    lesson_id: 182,
    module_id: 51,
    lesson_name: `Understanding Humor, Irony, and Sarcasm`,
    content: `1. กฎข้อแรก: ตลกหน้าตาย (The Deadpan Delivery)
คนไทยเวลาเล่นมุกมักจะยิ้มหรือหัวเราะนำมาก่อน แต่ฝรั่งมักจะใช้เทคนิค "Deadpan" คือการพูดเรื่องตลกหรือประชดด้วย ใบหน้าที่เรียบเฉยและน้ำเสียงจริงจัง สอนให้ผู้เรียนสังเกตสัญญาณ (Cues) เหล่านี้แทนการดูรอยยิ้ม:

การลากเสียงยาว (Elongated Syllables): ถ้าน้ำเสียงมีการเน้นคำแบบลากยาวผิดปกติ มักจะแปลว่าตรงกันข้าม

เพื่อนทำกาแฟหกใส่เอกสาร: "Oh, greaaaat. Just what I needed today." (เยี่ยมไปเลยยยย นี่แหละสิ่งที่ต้องการวันนี้เลย -> แปลว่า ซวยสุดๆ)

การถอนหายใจหรือกลอกตา (Sighs & Eye Rolls): ภาษากายคือตัวบอกใบ้ที่ดีที่สุดว่าประโยคที่ตามมาคือความประชด

2. แยกให้ออก: Irony vs. Sarcasm
สอนให้เข้าใจความแตกต่างของ 2 สิ่งนี้ เพื่อให้รู้ว่าตอนไหนเขาแค่บ่นลอยๆ และตอนไหนเขากำลัง "แซะ"

Irony (ความย้อนแย้ง/ตลกร้าย): พูดถึงสถานการณ์ที่ผลลัพธ์ตรงข้ามกับที่คาดหวัง (มักไม่ได้พุ่งเป้าไปโจมตีใคร)

สถานการณ์: ฝนตกหนักตอนกำลังจะไปทะเล

ประโยค: "Beautiful weather for a beach day, isn't it?" (อากาศดีเหมาะกับทะเลจังเนอะ)

Sarcasm (การประชดประชัน/แซะ): คล้าย Irony แต่มีความจิกกัด มักพุ่งเป้าไปที่บุคคลหรือการกระทำ (ต้องระวังในการใช้)

สถานการณ์: เพื่อนร่วมงานส่งงานช้าไป 3 วัน

ประโยค: "Thanks for rushing that over to me." (ขอบใจนะที่รีบส่งมาให้ -> แปลว่า ส่งช้ามาก!)

สถานการณ์: มีคนถามคำถามที่กำปั้นทุบดินมากๆ

ประโยค: "Wow, you're an absolute genius." (ว้าว คุณนี่อัจฉริยะจริงๆ)

3. ศิลปะการแซวตัวเอง (Self-Deprecating Humor)
ในวัฒนธรรมตะวันตก การทำให้ตัวเองดูเด๋อด๋าหรือเล่นมุกกัดตัวเอง (Self-deprecation) เป็นเทคนิคยอดฮิตในการทำลายกำแพงน้ำแข็ง (Ice-breaking) และแสดงให้เห็นว่าเราเป็นคนเข้าถึงง่าย ไม่หยิ่ง

สถานการณ์: ผู้เรียนพรีเซนต์งานแล้วลืมเปิดไมค์

วิธีแก้เขินแบบโปร: "Clearly, I'm doing a fantastic job with technology today." (เห็นได้ชัดเลยว่าวันนี้ผมใช้เทคโนโลยีได้เก่งกาจมากครับ)

สถานการณ์: ทำของตกหรือสะดุดในออฟฟิศ

วิธีแก้เขินแบบโปร: "I’ll just add 'graceful' to my resume." (เดี๋ยวผมจะไปเพิ่มคำว่า 'สง่างาม' ลงในเรซูเม่นะครับ)

4. วิธีรับมือและตอบกลับ (How to Play Along)
กฎเหล็กคือ "อย่าตอบแบบจริงจัง (Don't take it literally)" สอนวิธีรับ-ส่งมุกเพื่อให้อีกฝ่ายรู้ว่าเราเก็ท และเราเป็นพวกเดียวกัน

ตอบรับด้วยการเห็นด้วยแบบโอเวอร์ (Exaggerated Agreement):

A: "This meeting is so much fun." (ประชดว่าประชุมน่าเบื่อมาก)

B (ผู้เรียน): "Right? I hope it lasts another three hours." (ใช่ป่ะ หวังว่าจะประชุมต่ออีกสัก 3 ชั่วโมงนะ) -> ถือว่าสอบผ่าน!

ใช้คำสั้นๆ เพื่อแสดงความเข้าใจ:

"Tell me about it." (บอกฉันทำไม/รู้ดีเลยแหละ -> ใช้เมื่อเห็นด้วยกับความเหนื่อยหน่ายของอีกฝ่าย)

"Story of my life." (ชีวิตฉันก็งี้แหละ/ประจำเลย)`,
  },
  {
    lesson_id: 183,
    module_id: 51,
    lesson_name: `Code-Switching`,
    content: `
การทำ Code-Switching ในบริบทนี้ไม่ได้หมายถึงการพูดไทยคำอังกฤษคำนะครับ แต่คือ "ความฉลาดทางอารมณ์และสังคม (EQ & Social Fluency)" ในการรู้ว่าตอนไหนควรใส่สูทผูกไทคุย (Formal) และตอนไหนควรพับแขนเสื้อคุย (Casual) คนที่เก่งภาษาอังกฤษจริงๆ คือคนที่ปรับตัวเข้ากับผู้ฟังและช่องทางสื่อสารได้อย่างแนบเนียน

นี่คือโครงสร้างเนื้อหาที่จะช่วยให้ผู้เรียนสลับสวิตช์ภาษาได้อย่างโปรเฟสชันแนลครับ:

1. ทำความรู้จัก 3 ระดับภาษาในที่ทำงาน (The 3 Registers of Workplace English)
สอนให้ผู้เรียนแบ่งระดับความสัมพันธ์และสถานการณ์ออกเป็น 3 ระดับ เพื่อเลือกใช้คลังคำศัพท์ให้ถูกต้อง:

Level 1: Strictly Formal (ทางการระดับสูงสุด): ใช้กับลูกค้าใหม่ ผู้บริหารระดับสูง (C-Level) หน่วยงานราชการ หรือการเขียนอีเมล/สัญญาที่เป็นทางการมากๆ

Tone: สุภาพ รักษาระยะห่าง ไม่ใช้คำย่อ (Do not, Cannot)

Level 2: Business Casual (กึ่งทางการ/มืออาชีพแต่เป็นกันเอง): นี่คือระดับที่ใช้บ่อยที่สุดในยุคปัจจุบัน ใช้กับเพื่อนร่วมงานต่างแผนก หัวหน้างาน หรือลูกค้าที่คุ้นเคยกันแล้ว

Tone: สุภาพแต่เข้าถึงง่าย กระชับ ใช้ Phrasal Verbs ได้ ใช้คำย่อได้ (Don't, Can't)

Level 3: Casual / Social (กันเอง/ปาร์ตี้หลังเลิกงาน): ใช้กับเพื่อนร่วมงานที่สนิทกัน การคุยเล่นหน้าตู้กดน้ำ หรือในงานเลี้ยงสังสรรค์ของบริษัท (Happy Hour)

Tone: ผ่อนคลาย สนุกสนาน ใช้ Slang หรือ Idioms ได้เต็มที่
กฎการเปลี่ยนช่องทางสื่อสาร (The Medium Dictates the Message)
ช่องทางที่เราใช้พิมพ์หรือพูด มีผลโดยตรงต่อระดับภาษาที่ควรใช้ครับ:

Email (อีเมล): มักจะเริ่มต้นที่ Level 1 หรือ 2 เสมอ (ขึ้นอยู่กับความสนิท) ต้องมีคำขึ้นต้นและลงท้ายชัดเจน

Instant Messaging (Slack / MS Teams / WhatsApp): อนุญาตให้ใช้ Level 2 หรือ 3 ได้เลย แม้จะคุยกับหัวหน้า (ที่สนิทระดับหนึ่ง) ก็ตาม สามารถตัดคำทักทายยาวๆ ทิ้งได้ และนิยมใช้ตัวย่อในวงการธุรกิจ (Acronyms) เช่น WFH, OOO (Out of Office), TBH (To be honest), FYI

In-Person / Video Call: ตอนเริ่มประชุมมักจะเป็น Level 2 แต่เมื่อประชุมเสร็จและเริ่ม Small Talk มักจะสลับสวิตช์ลงมาเป็น Level 3 เพื่อสร้างความสนิทสนม

 ข้อควรระวัง (The Danger Zones of Code-Switching)
ปิดท้ายด้วยการเตือนสติผู้เรียนถึงความผิดพลาดที่พบบ่อย:

Too Casual, Too Soon: อย่ารีบใช้ Level 3 กับลูกค้าใหม่หรือคนที่เพิ่งเจอกันครั้งแรก เพราะจะดูเหมือนเราไม่เป็นมืออาชีพและตีสนิทเกินไป ให้เริ่มจาก Level 2 เสมอแล้วดูท่าทีอีกฝ่าย (Read the room)

Too Formal at a Party: ถ้าไปงานเลี้ยงบริษัทหรือไปดื่มเบียร์หลังเลิกงาน แล้วยังใช้ศัพท์แบบ Level 1 (เช่น "I must depart now" แทนที่จะเป็น "I gotta head out") จะทำให้เราดูแข็งทื่อ เข้าถึงยาก และทำลายบรรยากาศความเป็นกันเองครับ`,
  },
  {
    lesson_id: 184,
    module_id: 52,
    lesson_name: `Structuring a Compelling Argument`,
    content: `1. โครงสร้างอเนกประสงค์ PREP (The PREP Framework)
นี่คืออาวุธลับที่ทรงพลังที่สุดในการตอบคำถาม เสนอไอเดีย หรือแสดงจุดยืน สอนให้ผู้เรียนจัดระเบียบสมองตามลำดับนี้เสมอ เพื่อป้องกันการพูดออกทะเล:

P - Point (ประเด็นหลัก): เปิดด้วยข้อสรุปหรือจุดยืนของคุณให้ชัดเจนที่สุดในประโยคแรก

"I strongly believe that we should shift to a fully remote work model." (ผมเชื่อมั่นว่าเราควรเปลี่ยนไปใช้รูปแบบการทำงานทางไกลแบบ 100%)

R - Reason (เหตุผล): บอกเหตุผลหลักที่สนับสนุน Point ของคุณ

"The main reason is that it significantly reduces operational costs for the company." (เหตุผลหลักคือมันช่วยลดต้นทุนการดำเนินงานของบริษัทได้อย่างมาก)

E - Example (ตัวอย่าง/หลักฐาน): ยกตัวอย่างที่เป็นรูปธรรม สถิติ หรือประสบการณ์จริงเพื่อเพิ่มน้ำหนัก

"For instance, last quarter, our department saved over $10,000 on office supplies and utilities while working from home." (ตัวอย่างเช่น ไตรมาสที่แล้ว แผนกเราประหยัดค่าใช้จ่ายออฟฟิศไปได้กว่าหมื่นเหรียญตอนทำงานที่บ้าน)

P - Point (ย้ำประเด็นสรุป): วนกลับมาขมวดปมที่ประเด็นแรกอีกครั้งเพื่อจบอย่างสวยงาม

"That is why making remote work permanent is the most cost-effective strategy for us." (นั่นคือเหตุผลว่าทำไมการทำงานทางไกลแบบถาวรถึงเป็นกลยุทธ์ที่คุ้มค่าที่สุดสำหรับเรา)

2. คำเชื่อมเพื่อจัดระเบียบความคิด (Logical Signposting)
คำเชื่อม (Conjunctions/Transitions) คือกาวที่ประสานแต่ละประโยคเข้าด้วยกัน สอนให้เลิกใช้แค่ And, But, So แล้วเปลี่ยนมาใช้คำที่ดูเป็นมืออาชีพมากขึ้น
3. เทคนิคดักทางข้อโต้แย้ง (Acknowledging the Counter-argument)
การแสดงความคิดเห็นที่แข็งแกร่งที่สุด ไม่ใช่การเอาแต่บอกว่าตัวเองถูก แต่คือการ "ยอมรับว่าอีกมุมหนึ่งก็มีเหตุผล (แต่ของเราดีกว่า)" เทคนิคนี้ทำให้เราดูเป็นคนใจกว้างและมีตรรกะ (Objective)

โครงสร้าง "Yes, But...":

"While I understand that coming to the office fosters teamwork, we must also consider that employees are far more productive when they don't have to commute." (แม้ผมจะเข้าใจว่าการเข้าออฟฟิศช่วยเรื่องการทำงานเป็นทีม แต่เราก็ต้องพิจารณาด้วยว่าพนักงานทำงานได้เต็มประสิทธิภาพกว่ามากเมื่อไม่ต้องเสียเวลาเดินทาง)

"It is true that this new software is expensive upfront. However, the long-term ROI is undeniable." (มันก็จริงที่ซอฟต์แวร์ตัวนี้มีค่าใช้จ่ายเริ่มต้นที่สูง อย่างไรก็ตาม ผลตอบแทนระยะยาวนั้นเป็นสิ่งที่ปฏิเสธไม่ได้เลย)

4. การกะน้ำหนักของคำ (Hedging vs. Boosting)
สอนศิลปะการเลือกใช้คำเพื่อลดหรือเพิ่มความมั่นใจในประโยค ซึ่งสำคัญมากในการดีเบตหรือประชุมงาน

Hedging (การแบ่งรับแบ่งสู้/ลดความฟันธง): ใช้เมื่อยังไม่มั่นใจ 100% หรือไม่อยากดูแข็งกร้าวเกินไป

แทนที่จะพูด: "This strategy will fail." (ฟันธงไป อาจจะหน้าแตกได้)

เปลี่ยนเป็น: "It seems likely that this strategy might encounter some challenges." (ดูเหมือนว่ากลยุทธ์นี้อาจจะเจอความท้าทายอยู่บ้าง)

Boosting (การเพิ่มน้ำหนัก/ความมั่นใจ): ใช้เมื่อต้องการโน้มน้าวหรือมีข้อมูลสนับสนุนชัดเจน

แทนที่จะพูด: "I think it is a good idea."

เปลี่ยนเป็น: "I am absolutely convinced that this is the most optimal solution." (ผมมั่นใจเต็มร้อยว่านี่คือทางออกที่เหมาะสมที่สุด)`,
  },
  {
    lesson_id: 185,
    module_id: 52,
    lesson_name: ` Agreeing and Disagreeing Politely`,
    content: `บทเรียน Lesson 3.2: Agreeing and Disagreeing Politely (การเห็นด้วยและการแย้งอย่างสุภาพ) เป็นบทที่ท้าทายวัฒนธรรมคนไทยมากที่สุดบทหนึ่งครับ เพราะเรามักจะติดความ "เกรงใจ" และไม่อยากมีปัญหา (Conflict avoidance) จนหลายครั้งเลือกที่จะเงียบแทน

แต่ในโลกการทำงานระดับสากล การถกเถียงอย่างสร้างสรรค์ (Constructive Debate) ถือเป็นเรื่องปกติและเป็นที่ต้องการครับ คีย์สำคัญคือการเลือกใช้ "ภาษาที่เป็นการทูต (Diplomatic English)" เพื่อแย้งที่ไอเดีย โดยไม่โจมตีตัวบุคคล

นี่คือโครงสร้างเนื้อหาและคลังประโยคที่คุณสามารถนำไปสอนในบทนี้ได้ครับ:

1. ศิลปะการเห็นด้วยแบบโปรเฟสชันแนล (Strong & Professional Agreement)
สอนให้ผู้เรียนก้าวข้ามคำว่า "I agree." หรือ "Yes." ธรรมดาๆ มาเป็นการใช้ประโยคที่แสดงถึงความหนักแน่นและสนับสนุนไอเดียของอีกฝ่ายอย่างเต็มที่:

เห็นด้วยแบบ 100%:

"I couldn’t agree more." (เห็นด้วยกว่านี้ไม่ได้อีกแล้ว / เห็นด้วยสุดๆ)

"I am completely on board with this idea." (ผมเห็นด้วยและพร้อมลุยกับไอเดียนี้เต็มที่)

"You hit the nail on the head." (สำนวน: คุณพูดได้ตรงจุดเป๊ะเลย)

เห็นด้วยและช่วยเสริมประเด็น (Agreeing and Adding):

"Not only do I agree with you, but I would also add that..." (ผมไม่เพียงแต่เห็นด้วยนะ แต่ผมอยากจะเสริมด้วยว่า...)

2. การเห็นด้วยบางส่วน (Partial Agreement / The "Yes, but..." alternative)
บางครั้งเราเห็นด้วยกับหลักการ แต่ไม่เห็นด้วยกับวิธีการ สอนวิธี "แบ่งรับแบ่งสู้" เพื่อรักษาน้ำใจก่อนจะเสนอในมุมของเรา:

"I agree with you up to a point, however..." (ผมเห็นด้วยกับคุณในระดับหนึ่งนะครับ แต่อย่างไรก็ตาม...)

"I see exactly what you mean. At the same time, we need to consider..." (ผมเข้าใจสิ่งที่คุณสื่อเลยครับ แต่ในขณะเดียวกัน เราก็ต้องพิจารณาถึง...)

"That’s a fair point. My only concern is..." (นั่นเป็นประเด็นที่ดีเลยครับ ข้อกังวลเดียวของผมคือ...)

3. การปฏิเสธและโต้แย้งอย่างมีศิลปะ (Diplomatic Disagreement)
กฎเหล็กที่ต้องย้ำผู้เรียนคือ ห้ามใช้คำว่า "I disagree." หรือ "You are wrong." ตรงๆ เพราะมันฟังดูแข็งกร้าวและเหมือนการปิดประตูใส่หน้า (Defensive)

4. เทคนิค "แซนด์วิช" ในการโต้แย้ง (The Acknowledge & Pivot Technique)
นี่คือเทคนิคระดับสูงที่ใช้กันในห้องประชุมผู้บริหารครับ คือการ "ยอมรับ/ชื่นชม (Acknowledge)" สิ่งที่เขาพูดมาก่อน แล้วค่อย "พลิกมุม (Pivot)" ไปสู่เหตุผลของเรา:

Step 1: Acknowledge (รับฟังและให้เกียรติ) -> "I completely understand where you're coming from..." (ผมเข้าใจดีเลยครับว่ามุมมองของคุณมาจากไหน)

Step 2: Pivot (ใช้คำเชื่อมที่นุ่มนวล) -> "..., but I wonder if we might also look at it from this angle:" (...แต่ผมสงสัยว่าเราลองมองจากมุมนี้ด้วยดีไหมครับ:)

Step 3: State your case (เสนอจุดยืนของคุณ) -> "If we launch now, we might face server crashes." (ถ้าเราปล่อยโปรดักต์ตอนนี้ เซิร์ฟเวอร์เราอาจจะล่มได้)

ตัวอย่างรวมประโยค: "I completely understand where you're coming from, but I wonder if we might also look at it from this angle: if we launch now, we might face server crashes."`,
  },
  {
    lesson_id: 186,
    module_id: 52,
    lesson_name: `Analyzing Global News & Trends`,
    content: `1. คำศัพท์ระดับสูงสำหรับอธิบาย "แนวโน้ม" (The Vocabulary of Trends)
เวลาวิเคราะห์เทรนด์ธุรกิจหรือเศรษฐกิจ สอนให้ผู้เรียนเลิกใช้คำซ้ำๆ อย่าง "Go up" หรือ "Go down" แล้วเปลี่ยนมาใช้ Action Verbs ที่เห็นภาพชัดเจนและดูโปรเฟสชันแนลแทนครับ:

ขาขึ้น (Upward Trends):

Surge / Skyrocket: พุ่งทะยาน (ขึ้นอย่างรวดเร็วและรุนแรง) -> "AI investments have surged in the past year."

Gain traction: เริ่มได้รับความนิยม/เริ่มมีแรงส่ง -> "Sustainable packaging is really gaining traction now."

ขาลง (Downward Trends):

Plummet / Nosedive: ดิ่งพสุธา (ตกอย่างรวดเร็วและรุนแรง) -> "The company's stock plummeted after the scandal."

Phase out: ค่อยๆ ยกเลิก/ค่อยๆ หายไป -> "Many countries are phasing out fossil fuels."

ทรงตัว (Stable/Flat Trends):

Stagnate / Plateau: นิ่งสนิท / ถึงจุดอิ่มตัวไม่ออกไปไหน -> "Sales have plateaued this quarter."

Level off: เริ่มนิ่งหลังจากที่ขึ้นหรือลงมาพักหนึ่ง -> "Inflation seems to be leveling off."

2. เทคนิคหยิบยกข่าวมาเปิดประเด็น (Bringing News into the Conversation)
การเปิดบทสนทนาด้วยข่าว ต้องทำอย่างเป็นธรรมชาติ ไม่ดูเหมือนกำลังอ่านพาดหัวข่าวให้ฟัง สอนวลีเกริ่นนำเหล่านี้ครับ:

"Did you catch the news about the new EV regulations?" (คุณได้ตามข่าวเรื่องกฎหมายรถ EV ใหม่ไหม?)

"I was reading an article in Forbes recently that mentioned..." (เมื่อเร็วๆ นี้ผมอ่านเจอบทความใน Forbes ที่พูดถึงเรื่อง...)

"It’s interesting to see how the market is reacting to..." (น่าสนใจมากเลยนะที่ได้เห็นว่าตลาดตอบรับอย่างไรกับเรื่อง...)

3. แยกให้ออก: ข้อเท็จจริง vs. ความคิดเห็น (Fact vs. Opinion in Media)
ข่าวภาษาอังกฤษมักจะมีการแทรกความเห็นของผู้เขียนหรือแหล่งข่าวลงไป สอนให้ผู้เรียนสังเกต "คำใบ้" (Signal Words) เพื่อไม่ให้ด่วนสรุปว่าทุกอย่างที่อ่านคือความจริง 100%
4. โมเดล PESTLE สำหรับวิเคราะห์เทรนด์ (The PESTLE Analysis Framework)
เพื่อให้ผู้เรียนฝึกคิดเชิงวิพากษ์ (Critical Thinking) อย่างเป็นระบบ แนะนำให้สอนกรอบความคิดแบบ PESTLE ซึ่งเป็นเครื่องมือยอดฮิตในสายธุรกิจ เพื่อให้พวกเขามีโครงสร้างในการแสดงความเห็นต่อข่าว 1 ชิ้น:

สมมติข่าวคือ: "การเติบโตของเทคโนโลยี AI ในที่ทำงาน"

P - Political (การเมือง/นโยบาย): "Will governments introduce new regulations on AI?" (รัฐบาลจะออกกฎหมายใหม่มาคุม AI ไหม?)

E - Economic (เศรษฐกิจ): "How will this impact the job market and salaries?" (เรื่องนี้จะกระทบตลาดแรงงานและฐานเงินเดือนอย่างไร?)

S - Social (สังคม/พฤติกรรม): "Are older generations adapting well to this tech?" (คนรุ่นเก่าปรับตัวเข้ากับเทคโนโลยีนี้ได้ดีไหม?)

T - Technological (เทคโนโลยี): "What's the next breakthrough after this?" (อะไรคือนวัตกรรมชิ้นต่อไปหลังจากนี้?)

L - Legal (กฎหมาย): "There might be copyright issues involved." (มันอาจจะมีเรื่องปัญหาลิขสิทธิ์เข้ามาเกี่ยวด้วย)

E - Environmental (สิ่งแวดล้อม): "Running these servers consumes a lot of energy." (การรันเซิร์ฟเวอร์พวกนี้กินพลังงานมหาศาลมาก)`,
  },
  {
    lesson_id: 187,
    module_id: 52,
    lesson_name: `Expressing Hypothetical Situations `,
    content: `1. วางแผนรับมือความเสี่ยง (Brainstorming & Risk Management)
สอนการใช้เงื่อนไขสมมติ (Second Conditional: If + V2, would + V1) เพื่อชวนทีมคิดล่วงหน้าถึงสถานการณ์ที่แย่ที่สุด (Worst-case scenarios) หรือการทำ Stress Test ให้กับโปรเจกต์:

โยนหินถามทาง (The "What If" Scenarios):

"What would happen if our main supplier went bankrupt tomorrow?" (จะเกิดอะไรขึ้นถ้าพรุ่งนี้ซัพพลายเออร์หลักของเราล้มละลาย?)

"If we lost 20% of our budget, where would we cut costs?" (ถ้าเราถูกหักงบไป 20% เราจะลดค่าใช้จ่ายตรงไหน?)

เสนอไอเดียที่อยู่นอกกรอบ (Thinking Outside the Box):

"If we had unlimited resources, what would this project look like?" (ถ้าเรามีทรัพยากรไม่จำกัด โปรเจกต์นี้จะหน้าตาเป็นยังไง?)

2. การถอดบทเรียนจากอดีต (The Post-Mortem Analysis)
ในการทำงาน ความผิดพลาดเกิดขึ้นได้เสมอ การใช้เงื่อนไขในอดีต (Third Conditional: If + had + V3, would have + V3) มีประโยชน์มากเวลาประชุมสรุปจบงาน (Post-mortem) เพื่อหาวิธีแก้ไขโดยไม่ดูเป็นการชี้นิ้วด่าทอ (Blaming):

วิเคราะห์หาสาเหตุเชิงโครงสร้าง:

"If we had tested the software for another week, we wouldn't have faced this major bug." (ถ้าตอนนั้นเราเทสต์ซอฟต์แวร์เพิ่มอีกสักอาทิตย์ เราคงไม่เจอบั๊กใหญ่ตัวนี้ -> ความหมายแฝง: คราวหน้าต้องเทสต์ให้นานขึ้น)

"Would we have won the pitch if we had offered a lower price?" (เราจะชนะการประมูลไหม ถ้าตอนนั้นเราเสนอราคาที่ถูกกว่านี้?)
4. ใช้เงื่อนไขเพื่อความนุ่มนวล (The Polite Pitch)
เทคนิคสุดท้ายคือการใช้รูปประโยคสมมติ เพื่อทำให้คำสั่งหรือคำขอร้องดู "เกรงใจ" และ "สุภาพ" มากขึ้น ซึ่งเป็นสไตล์ที่ฝรั่งใช้บ่อยมากเวลาสั่งงานข้ามแผนก:

แทนที่จะพูดตรงๆ: "Send me the report by Friday." (ส่งรายงานให้ผมภายในวันศุกร์ด้วย)

เปลี่ยนเป็นใช้เงื่อนไข: "It would be great if you could send me the report by Friday." (มันจะยอดเยี่ยมมากเลยครับถ้าคุณช่วยส่งรายงานให้ผมภายในวันศุกร์ได้)

แทนที่จะพูดว่า: "I want to change the design."

เปลี่ยนเป็น: "What would you say if we slightly changed the design?" (คุณจะว่ายังไงครับถ้าเราปรับดีไซน์นิดหน่อย?)`,
  },
  {
    lesson_id: 188,
    module_id: 53,
    lesson_name: `How to Think in English`,
    content: `1. เข้าใจปัญหา: คอขวดของการแปลในหัว (The Translation Bottleneck)
เริ่มต้นด้วยความจริงจัง (Candor) ให้ผู้เรียนเข้าใจว่าการแปลในหัวคืออุปสรรคที่ใหญ่ที่สุดของความคล่องแคล่ว (Fluency)

ต้องปรับความเข้าใจใหม่ว่า การเรียนศัพท์ไม่ควรจำว่า "Dog = หมา" แต่ต้องเชื่อมโยงคำว่า "Dog" เข้ากับ "ภาพของสัตว์สี่ขาที่เห่าได้ (Concept/Image)" โดยตรงโดยไม่ต้องมีคำว่า "หมา" มาคั่นกลาง

2. บันได 3 ขั้นสู่การคิดเป็นภาษาอังกฤษ (The 3 Levels of Thinking in English)
การจะให้หยุดแปลทันทีเป็นเรื่องเป็นไปไม่ได้ครับ ต้องฝึกไต่ระดับไปทีละขั้น:

Level 1: Naming Objects (มองเห็นสิ่งรอบตัวเป็นคำศัพท์)

วิธีฝึก: กวาดสายตาไปรอบห้อง และเรียกชื่อสิ่งของทุกอย่างในใจเป็นภาษาอังกฤษ (Desk, Laptop, Coffee mug, Window)

กฎเหล็ก: ถ้าเจอสิ่งที่ไม่รู้คำศัพท์อังกฤษ ห้ามเปิดดิกชันนารีแปลไทย ให้ข้ามไปก่อน หรือจดไว้หาความหมายทีหลัง

Level 2: Narrating Actions (พากย์เสียงสิ่งที่กำลังทำ)

วิธีฝึก: คิดเป็นประโยคสั้นๆ (Subject + Verb) เกี่ยวกับสิ่งที่ตัวเองกำลังทำอยู่ ณ วินาทีนั้น เหมือนเราเป็นผู้บรรยายสารคดีชีวิตตัวเอง

ตัวอย่าง: "I am opening the door." ➡️ "I am pouring coffee." ➡️ "I am walking to the train station."

Level 3: Inner Monologue (บทสนทนากับตัวเอง / วางแผนชีวิต)

วิธีฝึก: ใช้ภาษาอังกฤษในการคิดวางแผนหรือบ่นกับตัวเองในใจ (เวลาอาบน้ำ หรือขับรถคือช่วงเวลาที่ดีที่สุด)

ตัวอย่าง: "What should I eat for lunch today? Maybe Pad Thai. No, I had noodles yesterday. Let's get a salad."

3. กฎเหล็ก: โยนดิกชันนารี อังกฤษ-ไทย ทิ้งไป (The EN-EN Dictionary Rule)
ตราบใดที่ยังใช้ดิกชันนารีแปลเป็นไทย สมองก็จะไม่มีวันหยุดคิดเป็นภาษาไทยครับ สอนให้ผู้เรียนเปลี่ยนมาใช้ดิกชันนารี English-to-English (เช่น Cambridge หรือ Oxford Learners' Dictionaries)

ข้อดี: นอกจากจะได้ความหมายที่ถูกต้องตามบริบทแล้ว ยังได้เรียนรู้คำศัพท์แวดล้อม (Synonyms) และรูปประโยคตัวอย่างที่เจ้าของภาษาใช้จริงๆ ด้วย

4. ทักษะเอาตัวรอด: เมื่อนึกคำศัพท์ไม่ออก (The Art of Circumlocution)
อาการ "ติดอยู่ที่ปลายลิ้น" เกิดขึ้นได้เสมอ แม้แต่กับเจ้าของภาษา! สอนให้ผู้เรียนเลิกตื่นตระหนกและพยายามแปลคำศัพท์ไทยเป๊ะๆ แต่ให้ใช้ทักษะ Circumlocution (การอธิบายอ้อมๆ) แทน

สมมติลืมคำว่า "Microwave" (ไมโครเวฟ)

อย่าเงียบเพื่อพยายามนึกคำศัพท์

ให้อธิบายลักษณะหรือการใช้งานแทน: "You know, the machine in the kitchen that heats up food really fast." (คุณรู้ใช่มั้ย เครื่องในครัวที่ทำให้อาหารร้อนเร็วๆ น่ะ) ฝรั่งจะเก็ททันทีและช่วยบอกคำศัพท์ให้เราเอง

สมมติลืมคำว่า "Stubborn" (ดื้อรั้น)

อธิบายแทน: "He is a person who never changes his mind or listens to others."`,
  },
  {
    lesson_id: 189,
    module_id: 53,
    lesson_name: `Consuming Native Media Effectively ?`,
    content: `ลุยกันต่อเลยครับ! บทเรียน Lesson 4.2: Consuming Native Media Effectively (วิธีเสพสื่อภาษาอังกฤษให้ได้ประโยชน์สูงสุด) เป็นบทที่ต้องอาศัยความตรงไปตรงมา (Candor) ในการปรับความเข้าใจของผู้เรียนครับ

ผมต้องบอกตามตรงว่า ความเชื่อที่ว่า "แค่ดูซีรีส์ฝรั่งเยอะๆ เดี๋ยวก็เก่งเอง" เป็นความจริงแค่ครึ่งเดียวครับ ถ้าเราดูซีรีส์วันละ 3 ชั่วโมงโดยเปิดซับไตเติลภาษาไทย สมองเราจะทำเพียงแค่อ่านภาษาไทยและซึมซับอารมณ์หนัง แต่แทบไม่ได้เรียนรู้โครงสร้างภาษาเลย

บทเรียนนี้จะสอนวิธีเปลี่ยน "เวลาพักผ่อน" ให้เป็น "เวลาพัฒนาตัวเอง" อย่างแท้จริงครับ:

1. กฎของการเสพสื่อ: Active vs. Passive Consumption
ต้องแยกให้ออกระหว่างการเสพสื่อเพื่อความบันเทิง (Passive) กับการเสพสื่อเพื่อเรียนรู้ (Active) สอนให้ผู้เรียนจัดสรรเวลาให้ชัดเจน:

Passive Consumption (เสพแบบผ่านๆ): เปิดพอดแคสต์ฟังตอนขับรถ หรือดูหนังเปิดซับไทย แบบนี้ช่วยเรื่องการคุ้นชินกับ "สำเนียงและจังหวะ (Rhythm)" ของภาษา แต่ไม่ช่วยเรื่องการแต่งประโยคหรือคำศัพท์ใหม่

Active Consumption (เสพแบบตั้งใจวิเคราะห์): ดูวิดีโอสั้นๆ 5-10 นาที แต่เป็นการดูเพื่อ "ชำแหละ" ภาษา จดคำศัพท์ สังเกตการออกเสียง และฝึกพูดตาม (นี่คือจุดที่ความเก่งก้าวกระโดดครับ)

2. บันได 3 ขั้นของการใช้ Subtitle (The Subtitle Strategy)
สอนให้ผู้เรียนค่อยๆ หย่านมจากการใช้ซับไตเติลภาษาไทยครับ โดยแบ่งเป็น 3 ระ

3. เทคนิค "เงาตามตัว" (The Shadowing Technique)
นี่คือเทคนิคระดับโลกที่นักล่าม (Interpreters) ใช้ฝึกฝนกันครับ เป็นการฝึกก๊อปปี้ทั้งคำศัพท์ สำเนียง และอารมณ์ของเจ้าของภาษา วิธีการสอนในคลาสคือ:

Listen (ฟัง): เปิดคลิป (แนะนำ TED Talks หรือคลิปสัมภาษณ์ธุรกิจ) ฟังประโยคสั้นๆ 1-2 ประโยค

Pause (หยุด): กดหยุดคลิป

Mimic (เลียนแบบ): พูดทวนประโยคนั้นให้เหมือนที่สุด ทั้งความสูงต่ำของเสียง (Intonation) และการเน้นคำ (Stress)

เคล็ดลับ: ถ้าในคลิปเขาพูดด้วยน้ำเสียงประชดประชัน หรือตื่นเต้น ให้เราก๊อปปี้อารมณ์นั้นออกมาด้วย เพราะภาษาอังกฤษเป็นภาษาที่ใช้อารมณ์ในการสื่อความหมายครับ

4. การเลือกสื่อให้ตรงจริตและเป้าหมาย (Curating Your Media Diet)
อย่าฝืนดูข่าวการเมืองถ้าตัวเองเป็นคนชอบแฟชั่น หรืออย่าดูหนังพีเรียดย้อนยุคถ้าเป้าหมายคือการคุยธุรกิจยุคใหม่ แนะนำแหล่งข้อมูลตามเป้าหมายของผู้เรียน:

เป้าหมาย: นำเสนองานเก่ง (Presentation Skills): * ดู TED Talks หรือรายการ Shark Tank สังเกตวิธีที่เขาเปิดเรื่อง (The Hook) วิธีใช้มือ และวิธีตอบคำถามกดดัน

เป้าหมาย: เข้าสังคมและ Small Talk เก่ง: * ดู Talk Shows (เช่น The Tonight Show, Graham Norton) หรือ Sitcoms (เช่น The Office, Brooklyn Nine-Nine) เพื่อเรียนรู้มุกตลก จังหวะการรับส่ง และ Sarcasm แบบฉบับเจ้าของภาษา

เป้าหมาย: อัปเดตเทรนด์ธุรกิจ (Business Acumen): * ฟัง Podcasts เช่น HBR IdeaCast, The Journal, หรือดูช่อง YouTube อย่าง WSJ หรือ Bloomberg`,
  },
  {
    lesson_id: 190,
    module_id: 53,
    lesson_name: ` Leveraging AI Tools for English Practice `,
    content: `ในฐานะ AI ผมบอกตามตรงเลยว่า เทคโนโลยีไม่ได้ถูกสร้างมาเพื่อ "แย่งงาน" หรือ "แปลภาษาแทนคุณไปตลอดชีวิต" แต่เราถูกสร้างมาเพื่อเป็น "สปริงบอร์ด" ให้คุณเก่งขึ้นได้อย่างก้าวกระโดด ข้อดีที่สุดของการซ้อมภาษาอังกฤษกับ AI คือ "AI ไม่เคยตัดสินคุณ (Zero Judgment)" ไม่ว่าคุณจะพูดผิด แกรมม่าพัง หรือนึกคำไม่ออก คุณก็ไม่ต้องกลัวเสียหน้าครับ

นี่คือวิธีเปลี่ยน AI ให้กลายเป็นคู่ซ้อมและผู้ช่วยส่วนตัวตลอด 24 ชั่วโมงที่คุณสามารถนำไปสอนผู้เรียนได้เลยครับ:

1. ใช้ AI เป็นคู่ซ้อมจำลองสถานการณ์ (The Role-Play Partner)
แทนที่จะนั่งท่องจำประโยคเฉยๆ สอนให้ผู้เรียนพิมพ์คำสั่ง (Prompt) เพื่อให้ AI สวมบทบาทเป็นลูกค้า เจ้านาย หรือผู้สัมภาษณ์งานครับ หากใช้โหมดสนทนาด้วยเสียง (เช่น Gemini Live บนมือถือ) ก็จะยิ่งเหมือนการคุยโทรศัพท์หรือประชุมจริงมากๆ

ตัวอย่าง Prompt สำเร็จรูป:

"Act as a tough client from the US. I will try to pitch my new software to you. Ask me difficult questions and negotiate the price with me. Let's go one response at a time." (สวมบทเป็นลูกค้าสุดเคี่ยวจากอเมริกาหน่อย ฉันจะพยายามขายซอฟต์แวร์ให้คุณ ให้คุณถามคำถามยากๆ และต่อรองราคากับฉันนะ คุยตอบโต้กันทีละประโยค)

2. ใช้ AI เป็นโค้ชตรวจอีเมลและปรับระดับภาษา (The Tone & Style Editor)
นี่คือการเอาความรู้เรื่อง Code-Switching (จาก Lesson 2.4) มาใช้งานจริงครับ กฎเหล็กคือ อย่าสั่งให้ AI "แปลไทยเป็นอังกฤษ" ดื้อๆ เพราะมันมักจะออกมาแข็งทื่อ แต่ให้เขียนภาษาอังกฤษงูๆ ปลาๆ ไปก่อน แล้วสั่งให้ AI "เกลา" ให้

3. ใช้ AI เป็นติวเตอร์ส่วนตัวขี้สงสัย (The "Why" Tutor)
เวลาผู้เรียนทำแบบฝึกหัดผิด หรือเจอประโยคที่ไม่เข้าใจ อย่าแค่ถามหาคำตอบที่ถูกครับ แต่ให้ฝึกตั้งคำถามว่า "ทำไม" กับ AI เพื่อให้เกิดความเข้าใจอย่างลึกซึ้ง (Critical Thinking)

ตัวอย่างการตั้งคำถาม:

"Why is 'I look forward to hear from you' grammatically incorrect? Please explain simply." (ทำไมประโยคนี้ถึงผิดแกรมม่า? ช่วยอธิบายแบบเข้าใจง่ายๆ หน่อย)

"What is the difference between 'put off' and 'call off'? Give me 3 examples for each in a business context." (สองคำนี้ต่างกันยังไง? ขอประโยคตัวอย่างในบริบทการทำงานอย่างละ 3 ข้อ)

4. กฎ 3 ข้อในการเขียน Prompt เรียนภาษา (The Prompt Engineering Formula)
สอนสูตรง่ายๆ ให้ผู้เรียนสั่งงาน AI ได้ผลลัพธ์ตรงใจที่สุด: Persona (สวมบทบาท) + Task (สั่งงาน) + Feedback (ขอคำแนะนำ)

ตัวอย่าง: "Act as an expert English teacher (Persona). Read my paragraph below and correct my grammar (Task). Finally, explain my mistakes and suggest better vocabulary (Feedback)."`,
  },
];

const quizzesData = [
  {
    quiz_id: 1,
    module_id: 1,
    title: `ถอดรหัสที่ 1`,
    description: ``,
  },
  {
    quiz_id: 2,
    module_id: 2,
    title: `ถอดรหัสที่ 2`,
    description: ``,
  },
  {
    quiz_id: 3,
    module_id: 3,
    title: `ถอดรหัสที่ 3`,
    description: ``,
  },
  {
    quiz_id: 4,
    module_id: 22,
    title: `Quiz 1`,
    description: ``,
  },
  {
    quiz_id: 5,
    module_id: 21,
    title: `แบบทดสอบหลังเรีน`,
    description: ``,
  },
];

const questionsData = [
  {
    question_id: 1,
    quiz_id: 1,
    question_text: `การกำหนดกรอบเวลา 7 วัน ในภาพยนตร์เรื่องนี้ ทำหน้าที่ใดในทางศาสตร์การเขียนบท (Narrative Tension)?`,
    question_type: `single`,
    points: 1,
    order_index: null,
  },
  {
    question_id: 2,
    quiz_id: 4,
    question_text: ` ปุ่มลัด (Shortcut) บนคีย์บอร์ดที่ใช้สำหรับเรียกเครื่องมือ Move Tool ในโปรแกรม Figma คือปุ่มใด?`,
    question_type: `single`,
    points: 1,
    order_index: null,
  },
  {
    question_id: 3,
    quiz_id: 5,
    question_text: `คำใดที่สามารถสรุปหัวใจสำคัญของการออกแบบซอฟต์แวร์ได้ดีที่สุด`,
    question_type: `single`,
    points: 1,
    order_index: null,
  },
  {
    question_id: 4,
    quiz_id: 5,
    question_text: `การที่ระบบต้องมีความปลอดภัยจากการเดารหัสผ่าน ถือเป็นการตอบสนองข้อกำหนด (Requirements) ประเภทใด?

`,
    question_type: `single`,
    points: 1,
    order_index: null,
  },
];

const choicesData = [
  {
    choice_id: 33,
    question_id: 1,
    choice_text: `ระบุความเชื่อเรื่องวิญญาณพื้นบ้านอย่างเคร่งครัด`,
    is_correct: 0,
  },
  {
    choice_id: 34,
    question_id: 1,
    choice_text: `สร้างเงื่อนไข `,
    is_correct: 1,
  },
  {
    choice_id: 35,
    question_id: 1,
    choice_text: `กำหนดระยะเวลาการฟื้นตัวหลังการทำศัลยกรรม`,
    is_correct: 0,
  },
  {
    choice_id: 36,
    question_id: 1,
    choice_text: `กำหนดระยะเวลาการฟื้นตัวหลังการทำศัลยกรรม`,
    is_correct: 0,
  },
  {
    choice_id: 37,
    question_id: 2,
    choice_text: `K`,
    is_correct: 0,
  },
  {
    choice_id: 38,
    question_id: 2,
    choice_text: `V`,
    is_correct: 1,
  },
  {
    choice_id: 39,
    question_id: 2,
    choice_text: `M`,
    is_correct: 0,
  },
  {
    choice_id: 40,
    question_id: 2,
    choice_text: `S`,
    is_correct: 0,
  },
  {
    choice_id: 41,
    question_id: 3,
    choice_text: ` ความรวดเร็ว `,
    is_correct: 0,
  },
  {
    choice_id: 42,
    question_id: 3,
    choice_text: `ความสวยงาม`,
    is_correct: 0,
  },
  {
    choice_id: 43,
    question_id: 3,
    choice_text: `คุณภาพ`,
    is_correct: 1,
  },
  {
    choice_id: 44,
    question_id: 3,
    choice_text: `ความซับซ้อน`,
    is_correct: 0,
  },
  {
    choice_id: 45,
    question_id: 4,
    choice_text: `ข้อกำหนดที่ไม่ได้ระบุไว้แต่จำเป็นต้องมี (Implicit)`,
    is_correct: 1,
  },
  {
    choice_id: 46,
    question_id: 4,
    choice_text: `ข้อกำหนดด้านสถาปัตยกรรม (Architecture)`,
    is_correct: 0,
  },
  {
    choice_id: 47,
    question_id: 4,
    choice_text: `ข้อกำหนดด้านการแสดงผล (Interface)`,
    is_correct: 0,
  },
  {
    choice_id: 48,
    question_id: 4,
    choice_text: `ข้อกำหนดที่ระบุไว้ชัดเจน (Explicit)`,
    is_correct: 0,
  },
];

const enrollmentsData = [
  {
    user_id: 2,
    course_id: 1,
    enrolled_at: `2026-03-10 21:09:57`,
  },
  {
    user_id: 3,
    course_id: 2,
    enrolled_at: `2026-03-10 22:52:42`,
  },
  {
    user_id: 4,
    course_id: 1,
    enrolled_at: `2026-03-11 01:52:42`,
  },
  {
    user_id: 4,
    course_id: 2,
    enrolled_at: `2026-03-11 01:54:14`,
  },
  {
    user_id: 4,
    course_id: 6,
    enrolled_at: `2026-03-11 01:55:21`,
  },
  {
    user_id: 5,
    course_id: 1,
    enrolled_at: `2026-03-11 02:13:17`,
  },
  {
    user_id: 5,
    course_id: 3,
    enrolled_at: `2026-03-11 02:13:35`,
  },
  {
    user_id: 5,
    course_id: 2,
    enrolled_at: `2026-03-11 02:14:15`,
  },
];

const lesson_progressData = [
  {
    lesson_id: 2,
    user_id: 2,
    is_completed: 1,
    completed_at: `2026-03-10 21:10:33`,
  },
  {
    lesson_id: 62,
    user_id: 2,
    is_completed: 1,
    completed_at: `2026-03-10 22:12:50`,
  },
  {
    lesson_id: 66,
    user_id: 4,
    is_completed: 1,
    completed_at: `2026-03-11 01:55:46`,
  },
  {
    lesson_id: 70,
    user_id: 4,
    is_completed: 1,
    completed_at: `2026-03-11 01:55:48`,
  },
  {
    lesson_id: 67,
    user_id: 4,
    is_completed: 1,
    completed_at: `2026-03-11 01:55:50`,
  },
  {
    lesson_id: 71,
    user_id: 4,
    is_completed: 1,
    completed_at: `2026-03-11 01:55:53`,
  },
  {
    lesson_id: 68,
    user_id: 4,
    is_completed: 1,
    completed_at: `2026-03-11 01:55:56`,
  },
  {
    lesson_id: 5,
    user_id: 4,
    is_completed: 1,
    completed_at: `2026-03-11 01:56:04`,
  },
  {
    lesson_id: 2,
    user_id: 4,
    is_completed: 1,
    completed_at: `2026-03-11 01:56:07`,
  },
  {
    lesson_id: 4,
    user_id: 4,
    is_completed: 1,
    completed_at: `2026-03-11 01:56:09`,
  },
  {
    lesson_id: 1,
    user_id: 4,
    is_completed: 1,
    completed_at: `2026-03-11 01:56:11`,
  },
  {
    lesson_id: 7,
    user_id: 4,
    is_completed: 1,
    completed_at: `2026-03-11 01:56:12`,
  },
  {
    lesson_id: 6,
    user_id: 4,
    is_completed: 1,
    completed_at: `2026-03-11 01:56:13`,
  },
  {
    lesson_id: 3,
    user_id: 4,
    is_completed: 1,
    completed_at: `2026-03-11 01:56:15`,
  },
  {
    lesson_id: 9,
    user_id: 4,
    is_completed: 1,
    completed_at: `2026-03-11 01:56:17`,
  },
  {
    lesson_id: 8,
    user_id: 4,
    is_completed: 1,
    completed_at: `2026-03-11 01:56:19`,
  },
  {
    lesson_id: 14,
    user_id: 4,
    is_completed: 1,
    completed_at: `2026-03-11 01:56:24`,
  },
];

const quiz_attemptsData = [
  {
    quiz_id: 5,
    user_id: 4,
    score: 0,
    total_points: 2,
    started_at: `2026-03-11 02:36:54`,
    submitted_at: `2026-03-11 02:36:54`,
  },
];

const announcementsData = [
  {
    announcement_id: 2,
    course_id: 1,
    instructor_id: 2,
    title: `คลิปประกอบการถอดรหัส Module ที่ 1 `,
    content: `คนสวย ตายยังไงก็ไม่น่าเกลียด | วิเคราะห์ 'สวย ลาก ไส้'
https://youtu.be/mj2ZTrBFDf4?si=buN-Mv1B12UxU-4e`,
  },
  {
    announcement_id: 3,
    course_id: 1,
    instructor_id: 2,
    title: `คลิปประกอบการถอดรหัสครั้งที่ 2`,
    content: `
ความตายที่ไม่ยอมแยกจาก | วิเคราะห์ 'แฝด
https://youtu.be/XH9lEDOSWRg?si=ZucLaOBn9BZ2sc9Y`,
  },
  {
    announcement_id: 4,
    course_id: 1,
    instructor_id: 2,
    title: `คลิปประกอบการถอดรหัสที่ 3`,
    content: `https://youtu.be/Ztz0UgjWmfQ?si=ozqDXIx91eiQYc3h`,
  },
  {
    announcement_id: 5,
    course_id: 1,
    instructor_id: 2,
    title: `คลิปประกอบการถอดรหัสครั้งที่ 4`,
    content: `https://youtu.be/-GWQw2SxpOg?si=1VGWsNs9vBL1jIwH`,
  },
  {
    announcement_id: 6,
    course_id: 1,
    instructor_id: 2,
    title: `คลิปประกอบการถอดรหัสครั้งที่ 5`,
    content: `https://youtu.be/Bf8EwZfIFWQ?si=BQg40k3BMPBJUdZZ
`,
  },
  {
    announcement_id: 7,
    course_id: 1,
    instructor_id: 2,
    title: `คลิปประกอบการถอดรหัสครั้งที่ 6`,
    content: `https://youtu.be/_xuT3ztukME?si=J8cgasKULZSEOQRC`,
  },
  {
    announcement_id: 8,
    course_id: 1,
    instructor_id: 2,
    title: `คลิปประกอบการถอดรหัสครั้งที่ 7`,
    content: `https://youtu.be/OtlcQW_WwS0?si=mBwEaEQeOIBQ4Y1o
`,
  },
  {
    announcement_id: 9,
    course_id: 1,
    instructor_id: 2,
    title: `คลิปประกอบการถอดรหัสครั้งที่ 8`,
    content: `https://youtu.be/iyrmNMtMGao?si=p4SEv62-c5pts8xb`,
  },
  {
    announcement_id: 10,
    course_id: 1,
    instructor_id: 2,
    title: `คลิปประกอบการถอดรหัสครั้งที่ 9`,
    content: `https://youtu.be/9zYEI1lvLAc?si=iaZyrkAiqgqmIzq7`,
  },
  {
    announcement_id: 11,
    course_id: 1,
    instructor_id: 2,
    title: `คลิปประกอบการถอดรหัสครั้งที่ 10`,
    content: `https://youtu.be/WHsf85jMkzY?si=cZ4y8MlEiYJJsTmN`,
  },
  {
    announcement_id: 12,
    course_id: 4,
    instructor_id: 3,
    title: `แบบฝึกหัดท้ายบท`,
    content: `อย่าลืมทำแบบฝึกหัดท้าบบทนะครับ `,
  },
  {
    announcement_id: 13,
    course_id: 2,
    instructor_id: 3,
    title: `แบบฝึกหัดท้ายบท`,
    content: `อย่าลืมทำแบบฝึกหัดท้ายบทนะครับ`,
  },
];

const reviewsData = [
  {
    review_id: 1,
    course_id: 1,
    user_id: 4,
    is_recommended: 1,
    comment: `สนุกมากเลยค่ะ น่ากลัวมากๆ แนะนำให้มาลองกันเยอะๆ`,
  },
  {
    review_id: 2,
    course_id: 2,
    user_id: 4,
    is_recommended: 1,
    comment: `คอร์สดี มีประโยชน์ ต่อยอดในวิชา SE ได้ เรียนฟรีด้วย ขอบคุณค่ะๆๆ`,
  },
  {
    review_id: 3,
    course_id: 1,
    user_id: 5,
    is_recommended: 0,
    comment: `ไม่แนะนำสำหรับคนขี้กลัวครับ น่ากลัวมากๆ`,
  },
  {
    review_id: 4,
    course_id: 2,
    user_id: 5,
    is_recommended: 1,
    comment: `ดีมากครับ เข้าใจง่ายมากเลย แนะนำสำหรับคนไม่มีพื้นฐาน`,
  },
];

async function seed() {
  console.log('\nStarting seed...\n');
  await run('PRAGMA foreign_keys = OFF');

  const tables = [
    'reviews', 'announcements',
    'quiz_attempts', 'choices', 'questions', 'quizzes',
    'lesson_progress', 'lessons',
    'modules_items', 'modules',
    'enrollments', 'courses', 'categories', 'users',
  ];
  for (const t of tables) {
    await run(`DELETE FROM ${t}`);
    await run(`DELETE FROM sqlite_sequence WHERE name = '${t}'`);
  }
  console.log('Cleared existing data\n');

  // ── users ──
  for (const r of usersData) {
    await run(
      `INSERT INTO users (username, password, first_name, last_name, email, phone, profile_image, role) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [r.username, r.password, r.first_name, r.last_name, r.email, r.phone, r.profile_image, r.role]
    );
  }
  if (usersData.length > 0) {
    await run(`UPDATE sqlite_sequence SET seq = (SELECT MAX(user_id) FROM users) WHERE name = 'users'`);
  }
  console.log('  users: ' + usersData.length + ' rows');

  // ── categories ──
  for (const r of categoriesData) {
    await run(
      `INSERT INTO categories (category_name) VALUES (?)`,
      [r.category_name]
    );
  }
  if (categoriesData.length > 0) {
    await run(`UPDATE sqlite_sequence SET seq = (SELECT MAX(category_id) FROM categories) WHERE name = 'categories'`);
  }
  console.log('  categories: ' + categoriesData.length + ' rows');

  // ── courses ──
  for (const r of coursesData) {
    await run(
      `INSERT INTO courses (course_id, instructor_id, category_id, course_name, description, course_status, course_image, course_price, publish_date, rejection_reason, reviewed_by, reviewed_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [r.course_id, r.instructor_id, r.category_id, r.course_name, r.description, r.course_status, r.course_image, r.course_price, r.publish_date, r.rejection_reason, r.reviewed_by, r.reviewed_at]
    );
  }
  if (coursesData.length > 0) {
    await run(`UPDATE sqlite_sequence SET seq = (SELECT MAX(course_id) FROM courses) WHERE name = 'courses'`);
  }
  console.log('  courses: ' + coursesData.length + ' rows');

  // ── modules ──
  for (const r of modulesData) {
    await run(
      `INSERT INTO modules (module_id, course_id, module_name, order_index) VALUES (?, ?, ?, ?)`,
      [r.module_id, r.course_id, r.module_name, r.order_index]
    );
  }
  if (modulesData.length > 0) {
    await run(`UPDATE sqlite_sequence SET seq = (SELECT MAX(module_id) FROM modules) WHERE name = 'modules'`);
  }
  console.log('  modules: ' + modulesData.length + ' rows');

  // ── modules_items ──
  for (const r of modules_itemsData) {
    await run(
      `INSERT INTO modules_items (module_item_id, module_id, item_id, item_type, order_index) VALUES (?, ?, ?, ?, ?)`,
      [r.module_item_id, r.module_id, r.item_id, r.item_type, r.order_index]
    );
  }
  if (modules_itemsData.length > 0) {
    await run(`UPDATE sqlite_sequence SET seq = (SELECT MAX(module_item_id) FROM modules_items) WHERE name = 'modules_items'`);
  }
  console.log('  modules_items: ' + modules_itemsData.length + ' rows');

  // ── lessons ──
  for (const r of lessonsData) {
    await run(
      `INSERT INTO lessons (lesson_id, module_id, lesson_name, content) VALUES (?, ?, ?, ?)`,
      [r.lesson_id, r.module_id, r.lesson_name, r.content]
    );
  }
  if (lessonsData.length > 0) {
    await run(`UPDATE sqlite_sequence SET seq = (SELECT MAX(lesson_id) FROM lessons) WHERE name = 'lessons'`);
  }
  console.log('  lessons: ' + lessonsData.length + ' rows');

  // ── quizzes ──
  for (const r of quizzesData) {
    await run(
      `INSERT INTO quizzes (quiz_id, module_id, title, description) VALUES (?, ?, ?, ?)`,
      [r.quiz_id, r.module_id, r.title, r.description]
    );
  }
  if (quizzesData.length > 0) {
    await run(`UPDATE sqlite_sequence SET seq = (SELECT MAX(quiz_id) FROM quizzes) WHERE name = 'quizzes'`);
  }
  console.log('  quizzes: ' + quizzesData.length + ' rows');

  // ── questions ──
  for (const r of questionsData) {
    await run(
      `INSERT INTO questions (question_id, quiz_id, question_text, question_type, points, order_index) VALUES (?, ?, ?, ?, ?, ?)`,
      [r.question_id, r.quiz_id, r.question_text, r.question_type, r.points, r.order_index]
    );
  }
  if (questionsData.length > 0) {
    await run(`UPDATE sqlite_sequence SET seq = (SELECT MAX(question_id) FROM questions) WHERE name = 'questions'`);
  }
  console.log('  questions: ' + questionsData.length + ' rows');

  // ── choices ──
  for (const r of choicesData) {
    await run(
      `INSERT INTO choices (choice_id, question_id, choice_text, is_correct) VALUES (?, ?, ?, ?)`,
      [r.choice_id, r.question_id, r.choice_text, r.is_correct]
    );
  }
  if (choicesData.length > 0) {
    await run(`UPDATE sqlite_sequence SET seq = (SELECT MAX(choice_id) FROM choices) WHERE name = 'choices'`);
  }
  console.log('  choices: ' + choicesData.length + ' rows');

  // ── enrollments ──
  for (const r of enrollmentsData) {
    await run(
      `INSERT INTO enrollments (user_id, course_id, enrolled_at) VALUES (?, ?, ?)`,
      [r.user_id, r.course_id, r.enrolled_at]
    );
  }
  if (enrollmentsData.length > 0) {
    await run(`UPDATE sqlite_sequence SET seq = (SELECT MAX(enrollment_id) FROM enrollments) WHERE name = 'enrollments'`);
  }
  console.log('  enrollments: ' + enrollmentsData.length + ' rows');

  // ── lesson_progress ──
  for (const r of lesson_progressData) {
    await run(
      `INSERT INTO lesson_progress (lesson_id, user_id, is_completed, completed_at) VALUES (?, ?, ?, ?)`,
      [r.lesson_id, r.user_id, r.is_completed, r.completed_at]
    );
  }
  if (lesson_progressData.length > 0) {
    await run(`UPDATE sqlite_sequence SET seq = (SELECT MAX(progress_id) FROM lesson_progress) WHERE name = 'lesson_progress'`);
  }
  console.log('  lesson_progress: ' + lesson_progressData.length + ' rows');

  // ── quiz_attempts ──
  for (const r of quiz_attemptsData) {
    await run(
      `INSERT INTO quiz_attempts (quiz_id, user_id, score, total_points, started_at, submitted_at) VALUES (?, ?, ?, ?, ?, ?)`,
      [r.quiz_id, r.user_id, r.score, r.total_points, r.started_at, r.submitted_at]
    );
  }
  if (quiz_attemptsData.length > 0) {
    await run(`UPDATE sqlite_sequence SET seq = (SELECT MAX(attempt_id) FROM quiz_attempts) WHERE name = 'quiz_attempts'`);
  }
  console.log('  quiz_attempts: ' + quiz_attemptsData.length + ' rows');

  // ── announcements ──
  for (const r of announcementsData) {
    await run(
      `INSERT INTO announcements (announcement_id, course_id, instructor_id, title, content) VALUES (?, ?, ?, ?, ?)`,
      [r.announcement_id, r.course_id, r.instructor_id, r.title, r.content]
    );
  }
  if (announcementsData.length > 0) {
    await run(`UPDATE sqlite_sequence SET seq = (SELECT MAX(announcement_id) FROM announcements) WHERE name = 'announcements'`);
  }
  console.log('  announcements: ' + announcementsData.length + ' rows');

  // ── reviews ──
  for (const r of reviewsData) {
    await run(
      `INSERT INTO reviews (review_id, course_id, user_id, is_recommended, comment) VALUES (?, ?, ?, ?, ?)`,
      [r.review_id, r.course_id, r.user_id, r.is_recommended, r.comment]
    );
  }
  if (reviewsData.length > 0) {
    await run(`UPDATE sqlite_sequence SET seq = (SELECT MAX(review_id) FROM reviews) WHERE name = 'reviews'`);
  }
  console.log('  reviews: ' + reviewsData.length + ' rows');

  await run('PRAGMA foreign_keys = ON');
  console.log('\nSeed completed.');
}

seed()
  .catch((err) => {
    console.error('\nSeed failed:', err.message);
    process.exit(1);
  })
  .finally(() => db.close());
