const db = require('../config/db');

exports.enroll = (user_id, course_id) => {
  return new Promise((resolve, reject) => {

    const sql = `
      INSERT INTO enrollments (user_id, course_id)
      VALUES (?, ?)
    `;

    db.run(sql, [user_id, course_id], function (err) {
      if (err) {
        if (err.code === 'SQLITE_CONSTRAINT') {
          return reject(new Error('Already enrolled'));
        }
        return reject(err);
      }

      resolve({ enrollment_id: this.lastID });
    });
  });
};

exports.unenroll = (user_id, course_id) => {
  return new Promise((resolve, reject) => {

    const sql = `
      DELETE FROM enrollments
      WHERE user_id = ? AND course_id = ?
    `;

    db.run(sql, [user_id, course_id], function (err) {
      if (err) return reject(err);
      resolve({ changes: this.changes });
    });
  });
};


exports.isEnrolled = (user_id, course_id) => {
  return new Promise((resolve, reject) => {

    const sql = `
      SELECT *
      FROM enrollments
      WHERE user_id = ? AND course_id = ?
    `;

    db.get(sql, [user_id, course_id], (err, row) => {
      if (err) return reject(err);
      resolve(!!row); // return true/false
    });
  });
};

exports.getCourseByUser = (user_id) => {
  return new Promise((resolve, reject) => {

    const sql = `
      SELECT c.*
      FROM enrollments e
      JOIN courses c ON e.course_id = c.course_id
      WHERE e.user_id = ?
      AND c.deleted_at IS NULL
    `;

    db.all(sql, [user_id], (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });
};

exports.getStudentByCourse = (course_id) => {
  return new Promise((resolve, reject) => {

    const sql = `
      SELECT u.user_id, u.username, u.email
      FROM enrollments e
      JOIN users u ON e.user_id = u.user_id
      WHERE e.course_id = ?
      AND u.deleted_at IS NULL
    `;

    db.all(sql, [course_id], (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });
};