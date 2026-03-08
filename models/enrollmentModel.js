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
      resolve(!!row);
    });
  });
};

exports.getByUser = (user_id) => {
  return new Promise((resolve, reject) => {

    const sql = `
      SELECT e.*, c.*
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

exports.getByCourse = (course_id) => {
  return new Promise((resolve, reject) => {

    const sql = `
          SELECT e.*, u.first_name, u.last_name, u.email, u.profile_image,
            COUNT(DISTINCT l.lesson_id) as total_lessons,
            COUNT(DISTINCT lp.lesson_id) as completed_lessons
          FROM enrollments e
          JOIN users u ON e.user_id = u.user_id
          JOIN modules m ON m.course_id = e.course_id
          JOIN lessons l ON l.module_id = m.module_id
          LEFT JOIN lesson_progress lp ON lp.lesson_id = l.lesson_id AND lp.user_id = e.user_id
          WHERE e.course_id = ?
          AND u.deleted_at IS NULL
          GROUP BY e.enrollment_id
    `;

    db.all(sql, [course_id], (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });
};

exports.getByUserWithProgress = (userId) => {
    return new Promise((resolve, reject) => {
      
      const sql = `
            SELECT
                c.course_id,
                c.course_name,
                c.course_image,
                u.profile_image,
                u.first_name || ' ' || u.last_name AS fullname,
                u.username,
                COALESCE(p.progress_percent, 0) AS progress
            FROM enrollments e
            JOIN courses c ON c.course_id = e.course_id
            JOIN users u   ON u.user_id   = c.instructor_id
            LEFT JOIN course_progress_view p
                ON p.course_id = e.course_id
                AND p.user_id  = e.user_id
            WHERE e.user_id = ?
            ORDER BY e.enrolled_at DESC
        `

        db.all(sql, [userId], (err, rows) => {
            if (err) return reject(err);
            resolve(rows);
        });
    });
};