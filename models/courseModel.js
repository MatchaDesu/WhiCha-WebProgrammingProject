const db = require('../config/db');

exports.getAllPublished = () => {
    return new Promise((resolve, reject) => {

        const sql = `SELECT c.*, u.username AS instructor_name
                    FROM course c
                    JOIN users u
                    ON c.instructor_id = u.user_id
                    WHERE c.course_status = ? `

        db.all(sql,['published'], (err, rows) => {
                if (err) return reject(err);
                resolve(rows);
            }
        );
    });
};

exports.getById = (id) => {
    return new Promise((resolve, reject) => {

        const sql = `SELECT c.*, u.username AS instructor_name
                    FROM course c
                    JOIN users u
                    ON c.instructor_id = u.user_id
                    WHERE c.course_id = ? `

        db.get(sql , [id], (err, row) => {
            if (err) reject(err);
            resolve(row);
        });
    });
};

exports.createCourse = () => { };
exports.updateCourse = () => { };
exports.publishCourse = () => { };
exports.archiveCourse = () => { };
exports.getByInstructor = () => { };
exports.softDelete = () => { };