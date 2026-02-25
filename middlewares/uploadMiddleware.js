const multer = require("multer");
const path = require("path");
const fs = require("fs");

// helper สร้างโฟลเดอร์
const ensureDir = (dirPath) => {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
};

const storage = multer.diskStorage({

    destination: (req, file, cb) => {

        try {
            const id = req.params.id;

            if (!id) {
                return cb(new Error("Missing ID parameter"));
            }

            let uploadPath = "";
            const url = req.originalUrl;

            // ===== USERS PROFILE =====
            if (url.includes(`users/${id}/profile`)) {

                uploadPath = path.join(
                    __dirname,
                    "..",                // ออกจากโฟลเดอร์ middlewares
                    "uploads",
                    "users",
                    String(id),
                    "profile"
                );
            }

            // ===== COURSES COVER =====
            else if (url.includes("upload-courses-cover")) {

                uploadPath = path.join(
                    __dirname,
                    "..",
                    "uploads",
                    "courses",
                    String(id),
                    "cover"
                );
            }

            else {
                return cb(new Error("Invalid upload path"));
            }

            ensureDir(uploadPath);

            cb(null, uploadPath);

        } catch (err) {
            cb(err);
        }
    },

    filename: (req, file, cb) => {

        const ext = path.extname(file.originalname).toLowerCase();

        // ตั้งชื่อไฟล์แบบ unique
        const fileName = `${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`;

        cb(null, fileName);
    }

});

const upload = multer({
    storage,

    limits: {
        fileSize: 2 * 1024 * 1024 // 2MB
    },

    fileFilter: (req, file, cb) => {

        // อนุญาตเฉพาะ image
        if (!file.mimetype.startsWith("image/")) {
            return cb(new Error("Only image files allowed"), false);
        }

        cb(null, true);
    }
});

module.exports = upload;