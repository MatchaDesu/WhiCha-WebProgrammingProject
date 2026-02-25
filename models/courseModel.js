const db = require('../config/db');

exports.getAll = () => {
    return new Promise((resolve, reject) => {
        const sql = `
            SELECT 
                c.*,
                u.user_name AS instructor_name
            FROM courses c
            JOIN users u 
                ON c.instructor_id = u.user_id
        `;

        db.all(sql, [], (err, rows) => {
            if (err) reject(err);
            else resolve(rows);
        });
    });
};

exports.getPublishedCourse = () => {
    return new Promise((resolve, reject) => {
        db.all(
            `
            SELECT 
                c.*,
                u.user_name AS instructor_name
            FROM courses c
            JOIN users u 
                ON c.instructor_id = u.user_id
            WHERE c.course_status = ?
            `,
            ['published'],
            (err, rows) => {
                if (err) return reject(err);
                resolve(rows);
            }
        );
    });
};

exports.getById = (id) => {
    return new Promise((resolve, reject) => {
        db.get("SELECT * FROM courses WHERE id = ?", [id], (err, row) => {
            if (err) reject(err);
            resolve(row);
        });
    });
};

exports.createCourse = () => {};
exports.updateCourse = () => {};
exports.publishCourse = () => {};
exports.archiveCourse = () => {};
exports.getById = () => {};
exports.getAllPublished = () => {};
exports.getByInstructor = () => {};
exports.softDelete = () => {};