require('dotenv').config();

const express = require('express');
const expressEjsLayouts = require('express-ejs-layouts');

const app = express();
const path = require('path');
const session = require('./config/session');

const PORT = process.env.PORT || 3000;

const { requireLogin } = require('./middlewares/authMiddleware');
const { localUser } = require('./middlewares/globalMiddleware');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(expressEjsLayouts);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session);
app.use(requireLogin);
app.use(localUser);

// ตั้ง layout main เป็น default
app.set("layout", "layouts/main");

const authRoutes = require("./routes/authRoute");
app.use("/", authRoutes);

const webRoutes = require("./routes/webRoute");
app.use("/", webRoutes);

const courseRoutes = require("./routes/courseRoute");
app.use("/courses", courseRoutes);

const userRoutes = require("./routes/userRoute");
app.use("/users", userRoutes);

app.listen(PORT, () => {
    console.log("Server is Running...");
})

