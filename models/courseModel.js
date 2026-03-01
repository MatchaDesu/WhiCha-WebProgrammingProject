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

exports.getAllPublished = () => {
    return new Promise((resolve, reject) => {

        const sql = `
            SELECT c.*, u.username AS instructor_name
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
            SELECT c.*, u.username AS instructor_name
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

exports.archiveCourse = (course_id) => {
    return new Promise((resolve, reject) => {

        const sql = `
            UPDATE courses
            SET course_status = 'archived'
            WHERE course_id = ?
            AND deleted_at IS NULL
        `;

        db.run(sql, [course_id], function (err) {
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