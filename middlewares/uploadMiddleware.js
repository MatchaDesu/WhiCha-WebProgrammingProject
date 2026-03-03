const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Helper สำหรับสร้าง Folder (ย้ายไปไว้ Utility file แยกก็ได้)
const ensureDir = (dirPath) => {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
};

// สร้าง Factory Function สำหรับจัดเก็บไฟล์
const createStorage = (subfolder) => {
    return multer.diskStorage({
        destination: (req, file, cb) => {
            // ดึง ID จาก params หรือ body (กันพลาด)
            const id = req.params.id || req.body.id;
            
            if (!id) return cb(new Error("ID is required for upload"));

            // กำหนดโครงสร้าง Path ให้ชัดเจน
            const uploadPath = path.join(__dirname, "..", "uploads", subfolder, String(id));
            
            ensureDir(uploadPath);
            cb(null, uploadPath);
        },
        filename: (req, file, cb) => {
            const ext = path.extname(file.originalname).toLowerCase();
            const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}`;
            cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
        }
    });
};

// Export เป็น function สำหรับเรียกใช้ตามประเภทงาน
const uploadSource = (folderName) => multer({
    storage: createStorage(folderName),
    limits: { fileSize: 2 * 1024 * 1024 }, // 2MB
    fileFilter: (req, file, cb) => {
        if (!file.mimetype.startsWith("image/")) {
            return cb(new Error("Only images are allowed"), false);
        }
        cb(null, true);
    }
});

module.exports = uploadSource;