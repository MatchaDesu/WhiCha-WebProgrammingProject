const db = require('../config/db');

// รายการรีวิวทั้งหมดของคอร์ส (ใช้ view — ได้ reviewer_name + profile_image มาเลย)
exports.getByCourse = (courseId) => {
    return new Promise((resolve, reject) => {
        const sql = `
            SELECT * FROM course_reviews_view
            WHERE course_id = ?
            ORDER BY created_at DESC
        `;

        db.all(sql, [courseId], (err, rows) => {
            if (err) return reject(err);
            resolve(rows);
        });
    });
};

// สรุป % แนะนำของคอร์ส
exports.getSummaryByCourse = (courseId) => {
    return new Promise((resolve, reject) => {
        const sql = `
            SELECT * FROM course_review_summary_view
            WHERE course_id = ?
        `;

        db.get(sql, [courseId], (err, row) => {
            if (err) return reject(err);
            resolve(row || null);
        });
    });
};

// รีวิวของ user คนนี้ในคอร์สนี้ (ใช้ view — ได้ reviewer_name + profile_image มาเลย)
exports.getByUserAndCourse = (userId, courseId) => {
    return new Promise((resolve, reject) => {
        const sql = `
            SELECT * FROM course_reviews_view
            WHERE user_id = ? AND course_id = ?
        `;

        db.get(sql, [userId, courseId], (err, row) => {
            if (err) return reject(err);
            resolve(row || null);
        });
    });
};

// สร้าง / แก้ไขรีวิว (upsert)
exports.upsert = (courseId, userId, isRecommended, comment) => {
    return new Promise((resolve, reject) => {
        const sql = `
            INSERT INTO reviews (course_id, user_id, is_recommended, comment)
            VALUES (?, ?, ?, ?)
            ON CONFLICT(user_id, course_id) DO UPDATE
                SET is_recommended = excluded.is_recommended,
                    comment        = excluded.comment,
                    created_at     = CURRENT_TIMESTAMP
        `;

        db.run(sql, [courseId, userId, isRecommended, comment || null], function (err) {
            if (err) return reject(err);
            resolve({ review_id: this.lastID });
        });
    });
};
