const db = require('../config/db');

exports.markCompleted = (user_id, lesson_id) => {
  return new Promise((resolve, reject) => {

    const sql = `
      INSERT INTO lesson_progress (user_id, lesson_id, completed_at)
      VALUES (?, ?, CURRENT_TIMESTAMP)
    `;

    db.run(sql, [user_id, lesson_id], function (err) {

      if (err) {
        if (err.code === 'SQLITE_CONSTRAINT') {
          return resolve({ message: 'Already completed' });
        }
        return reject(err);
      }

      resolve({ progress_id: this.lastID });
    });
  });
};

exports.unmark = (user_id, lesson_id) => {
  return new Promise((resolve, reject) => {

    const sql = `
      DELETE FROM lesson_progress
      WHERE user_id = ? AND lesson_id = ?
    `;

    db.run(sql, [user_id, lesson_id], function (err) {
      if (err) return reject(err);
      resolve({ changes: this.changes });
    });
  });
};

exports.getProgressByUser = (user_id) => {
  return new Promise((resolve, reject) => {

    const sql = `
      SELECT *
      FROM lesson_progress
      WHERE user_id = ?
    `;

    db.all(sql, [user_id], (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });
};

exports.getCourseProgress = (user_id, course_id) => {
  return new Promise((resolve, reject) => {

    const sql = `
      SELECT 
        COUNT(DISTINCT l.lesson_id) as total_lessons,
        COUNT(DISTINCT lp.lesson_id) as completed_lessons
      FROM lessons l
      LEFT JOIN lesson_progress lp
        ON l.lesson_id = lp.lesson_id
        AND lp.user_id = ?
      FROM lessons l
      JOIN modules m ON l.module_id = m.module_id
      LEFT JOIN lesson_progress lp ON l.lesson_id = lp.lesson_id AND lp.user_id = ?
      WHERE m.course_id = ?
    `;

    db.get(sql, [user_id, course_id], (err, row) => {
      if (err) return reject(err);

      const percent = row.total_lessons === 0
        ? 0
        : Math.round((row.completed_lessons / row.total_lessons) * 100);

      resolve({
        total: row.total_lessons,
        completed: row.completed_lessons,
        percent
      });
    });
  });
};