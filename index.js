require('dotenv').config();

const express = require('express');
const expressEjsLayouts = require('express-ejs-layouts'); // ใช้เป็น layout จะได้ไม่ต้อง include เยอะ

const app = express();
const path = require('path');
const session = require('./config/session');

const PORT = process.env.PORT || 3000 ;

const { requireLogin } = require('./middlewares/authMiddleware'); // Middlewares ที่บังคับไปหน้า login ถ้ายังไม่ได้ login
const { loadGlobalData } = require('./middlewares/globalMiddleware'); // ข้อมูลที่จะใช้ทุกที่ ไม่ต้องใส่เข้าตอน render ใช้เป็น req.locals.___

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(expressEjsLayouts);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session); // ใช้ config session ตามนี้
app.use(requireLogin); // ใช้ Middleware login
app.use(loadGlobalData); // ใช้ Middleware ข้อมูล global

// ตั้ง layout main เป็น default
app.set("layout", "layouts/main");

// ============================
//          SUB ROUTE 
// ============================

// เอาไว้ใช้ในการกำหนดแบ่ง route ให้เป็นระเบียบ

// หน้า signin / signup
const authRoutes = require("./routes/authRoute");
app.use("/", authRoutes);

// หน้าเว็บทั่วไป
const webRoutes = require("./routes/webRoute");
app.use("/", webRoutes);

// หน้าคอร์ส + หน้าเรียน
const courseRoutes = require("./routes/courseRoute");
app.use("/courses", courseRoutes);

// หน้าผู้ใช้
const userRoutes = require("./routes/userRoute");
app.use("/users", userRoutes);

// หน้า instructor
const instructorRoutes = require("./routes/instructorRoute");
app.use("/instructor", instructorRoutes);

// หน้า admin (manager)
const adminRoutes = require("./routes/adminRoute");
app.use("/admin", adminRoutes);

const uploadRoute = require("./routes/uploadRoute")
app.use('/upload', uploadRoute);

app.listen(PORT, () => {
    console.log("Server is Running...");
})

