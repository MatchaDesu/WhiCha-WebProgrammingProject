require('dotenv').config();

const express = require('express');
const expressEjsLayouts = require('express-ejs-layouts');

const app = express();
const path = require('path');
const session = require('./config/session');

const PORT = process.env.PORT || 3000 ;

const { requireLogin } = require('./middlewares/authMiddleware');
const { loadGlobalData } = require('./middlewares/globalMiddleware');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(expressEjsLayouts);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session);
app.use(requireLogin);
app.use(loadGlobalData);

app.set("layout", "layouts/main");

const authRoute = require("./routes/authRoute");
app.use("/", authRoute);

const webRoute = require("./routes/webRoute");
app.use("/", webRoute);

const courseRoute = require("./routes/courseRoute");
app.use("/courses", courseRoute);

const userRoute = require("./routes/userRoute");
app.use("/users", userRoute);

const instructorRoute = require("./routes/instructorRoute");
app.use("/instructor", instructorRoute);

const managerRoute = require("./routes/managerRoute");
app.use("/manager", managerRoute);

const uploadRoute = require("./routes/uploadRoute")
app.use('/upload', uploadRoute);

app.listen(PORT, () => {
    console.log("Server is Running...");
})