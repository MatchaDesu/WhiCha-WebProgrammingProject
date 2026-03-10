const db = require('../config/db');

exports.createAnnouncement = ({ course_id, instructor_id, title, content }) => {
    return new Promise((resolve, reject) => {
        const sql = `
            INSERT INTO announcements (course_id, instructor_id, title, content)
            VALUES (?, ?, ?, ?)
        `;

        db.run(sql, [course_id, instructor_id, title, content || null], function (err) {
            if (err) return reject(err);
            resolve({ announcement_id: this.lastID });
        });
    });
};

exports.getById = (announcement_id) => {
    return new Promise((resolve, reject) => {
        const sql = `
            SELECT a.*, 
                   u.first_name || ' ' || u.last_name AS instructor_name,
                   u.profile_image AS instructor_image
            FROM announcements a
            JOIN users u ON u.user_id = a.instructor_id
            WHERE a.announcement_id = ?
        `;

        db.get(sql, [announcement_id], (err, row) => {
            if (err) return reject(err);
            resolve(row || null);
        });
    });
};

exports.getByCourse = (course_id) => {
    return new Promise((resolve, reject) => {
        const sql = `
            SELECT a.*,
                   u.first_name || ' ' || u.last_name AS instructor_name,
                   u.profile_image AS instructor_image
            FROM announcements a
            JOIN users u ON u.user_id = a.instructor_id
            WHERE a.course_id = ?
            ORDER BY a.created_at DESC
        `;

        db.all(sql, [course_id], (err, rows) => {
            if (err) return reject(err);
            resolve(rows);
        });
    });
};

exports.updateAnnouncement = (announcement_id, { title, content }) => {
    return new Promise((resolve, reject) => {
        const sql = `
            UPDATE announcements
            SET title = ?, content = ?
            WHERE announcement_id = ?
        `;

        db.run(sql, [title, content || null, announcement_id], function (err) {
            if (err) return reject(err);
            resolve({ changes: this.changes });
        });
    });
};

exports.deleteAnnouncement = (announcement_id) => {
    return new Promise((resolve, reject) => {
        const sql = `DELETE FROM announcements WHERE announcement_id = ?`;

        db.run(sql, [announcement_id], function (err) {
            if (err) return reject(err);
            resolve({ changes: this.changes });
        });
    });
};
