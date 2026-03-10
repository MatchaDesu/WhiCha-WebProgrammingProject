const db = require('../config/db');

exports.createCourse = (course) => {
    return new Promise((resolve, reject) => {

        const {
            instructor_id,
            category_id,
            course_name,
            description,
            course_price
        } = course;

        const sql = `
            INSERT INTO courses
            (instructor_id, category_id, course_name, description, course_price)
            VALUES (?, ?, ?, ?, ?)
        `;

        db.run(
            sql,
            [instructor_id, category_id, course_name, description, course_price || 0],
            function (err) {
                if (err) return reject(err);
                resolve({ course_id: this.lastID });
            }
        );
    });
};

exports.getAllCourse = () => {
    return new Promise((resolve, reject) => {
        db.all(`
            SELECT c.*, u.username AS instructor_name
            FROM courses c
            JOIN users u ON u.user_id = c.instructor_id
            WHERE c.deleted_at IS NULL
            ORDER BY c.created_at DESC
        `, [], (err, rows) => err ? reject(err) : resolve(rows));
    });
};

exports.getAllPublished = () => {
    return new Promise((resolve, reject) => {

        const sql = `
            SELECT c.*,
            u.username AS instructor_name,
            u.profile_image AS instructor_profile
            FROM courses c
            JOIN users u ON c.instructor_id = u.user_id
            WHERE c.course_status = 'published'
            AND c.deleted_at IS NULL
        `;

        db.all(sql, [], (err, rows) => {
            if (err) return reject(err);
            resolve(rows);
        });
    });
};

exports.getById = (course_id) => {
    return new Promise((resolve, reject) => {

        const sql = `
            SELECT c.*,
            u.username AS instructor_name,
            u.profile_image AS instructor_profile
            FROM courses c
            JOIN users u ON c.instructor_id = u.user_id
            WHERE c.course_id = ?
            AND c.deleted_at IS NULL
        `;

        db.get(sql, [course_id], (err, row) => {
            if (err) return reject(err);
            resolve(row);
        });
    });
};

exports.getByKeyword = (keyword) => {
    return new Promise((resolve, reject) => {

        const sql = `
            SELECT c.*,
            u.username AS instructor_name,
            u.profile_image AS instructor_profile
            FROM courses c
            JOIN users u ON c.instructor_id = u.user_id
            WHERE course_name LIKE ?
            AND c.deleted_at IS NULL
            AND c.course_status = 'published'
        `;

        db.all(sql, ['%' + keyword + '%'], (err, row) => {
            if (err) return reject(err);
            resolve(row);
        });
    });
};

exports.updateCourse = (course_id, course) => {
    return new Promise((resolve, reject) => {

        const {
            category_id,
            course_name,
            description,
            course_price
        } = course;

        const sql = `
            UPDATE courses
            SET category_id = ?,
                course_name = ?,
                description = ?,
                course_price = ?
            WHERE course_id = ?
            AND deleted_at IS NULL
        `;

        db.run(
            sql,
            [category_id, course_name, description, course_price, course_id],
            function (err) {
                if (err) return reject(err);
                resolve({ changes: this.changes });
            }
        );
    });
};

exports.updateCourseImage = (courseId, imagePath) => {
    return new Promise((resolve, reject) => {
        db.run(
            `UPDATE courses SET course_image = ? WHERE course_id = ?`,
            [imagePath, courseId],
            (err) => err ? reject(err) : resolve()
        );
    });
};

exports.publishCourse = (course_id) => {
    return new Promise((resolve, reject) => {

        const sql = `
            UPDATE courses
            SET course_status = 'published',
                publish_date = CURRENT_TIMESTAMP
            WHERE course_id = ?
            AND deleted_at IS NULL
        `;

        db.run(sql, [course_id], function (err) {
            if (err) return reject(err);
            resolve({ changes: this.changes });
        });
    });
};

exports.pendingCourse = (course_id) => {
    return new Promise((resolve, reject) => {

        const sql = `
            UPDATE courses
            SET course_status = 'pending'
            WHERE course_id = ?
            AND deleted_at IS NULL
        `;

        db.run(sql, [course_id], function (err) {
            if (err) return reject(err);
            resolve({ changes: this.changes });
        });
    });
};

exports.rejectCourse = (course_id, rejection_reason) => {
    return new Promise((resolve, reject) => {

        const sql = `
            UPDATE courses
            SET course_status = 'rejected',
                rejection_reason = ?
            WHERE course_id = ?
            AND deleted_at IS NULL
        `;

        db.run(sql, [rejection_reason, course_id], function (err) {
            if (err) return reject(err);
            resolve({ changes: this.changes });
        });
    });
};

exports.getByInstructor = (instructor_id) => {
    return new Promise((resolve, reject) => {

        const sql = `
            SELECT *
            FROM courses
            WHERE instructor_id = ?
            AND deleted_at IS NULL
        `;

        db.all(sql, [instructor_id], (err, rows) => {
            if (err) return reject(err);
            resolve(rows);
        });
    });
};

exports.getByIdWithInstructor = (courseId) => {
    return new Promise((resolve, reject) => {
        db.get(`
            SELECT c.*,
                   u.username        AS instructor_name,
                   u.profile_image   AS instructor_image
            FROM courses c
            JOIN users u ON u.user_id = c.instructor_id
            WHERE c.course_id = ?
        `, [courseId], (err, row) => err ? reject(err) : resolve(row || null));
    });
};

exports.softDelete = (course_id) => {
    return new Promise((resolve, reject) => {

        const sql = `
            UPDATE courses
            SET deleted_at = CURRENT_TIMESTAMP
            WHERE course_id = ?
        `;

        db.run(sql, [course_id], function (err) {
            if (err) return reject(err);
            resolve({ changes: this.changes });
        });
    });
};