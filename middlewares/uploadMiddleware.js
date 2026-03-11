const multer = require("multer");
const path = require("path");
const fs = require("fs");

const ensureDir = (dirPath) => {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
};

const fileFilters = {
    image: (req, file, cb) => {
        if (!file.mimetype.startsWith("image/")) {
            return cb(new Error("Only images are allowed"), false);
        }
        cb(null, true);
    },
    any: (req, file, cb) => {
        cb(null, true);
    }
};

const createStorage = (subfolder, useIdSubdir = true) => {
    return multer.diskStorage({
        destination: (req, file, cb) => {
            let uploadPath;

            if (useIdSubdir) {
                const id = req.params.id
                        || req.params.lessonId
                        || req.params.courseId
                        || req.params.userId
                        || req.body.id;

                if (!id) return cb(new Error("ID is required for upload"));

                uploadPath = path.join(__dirname, "..", "uploads", subfolder, String(id));
            } else {
                uploadPath = path.join(__dirname, "..", "uploads", subfolder);
            }

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

const uploadSource = (folderName, options = {}) => {
    const { any = false, useIdSubdir = true, maxSize } = options;

    return multer({
        storage: createStorage(folderName, useIdSubdir),
        limits: { fileSize: maxSize || (any ? 50 : 2) * 1024 * 1024 },
        fileFilter: any ? fileFilters.any : fileFilters.image,
    });
};

module.exports = uploadSource;
