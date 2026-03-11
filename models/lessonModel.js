const db = require('../config/db');

exports.createLesson = ({ module_id, lesson_name, content }) => {
  return new Promise((resolve, reject) => {

    const sql = `
      INSERT INTO lessons (module_id, lesson_name, content)
      VALUES (?, ?, ?)
    `;

    db.run(sql, [module_id, lesson_name, content], function (err) {
      if (err) return reject(err);
      resolve({ lesson_id: this.lastID });
    });
  });
};

exports.updateLesson = (lesson_id, { lesson_name, content }) => {
  return new Promise((resolve, reject) => {

    const sql = `
      UPDATE lessons
      SET lesson_name = ?, content = ?
      WHERE lesson_id = ?
    `;

    db.run(sql, [lesson_name, content, lesson_id], function (err) {
      if (err) return reject(err);
      resolve({ changes: this.changes });
    });
  });
};

exports.getById = (lesson_id) => {
  return new Promise((resolve, reject) => {

    const sql = `
      SELECT *
      FROM lessons
      WHERE lesson_id = ?
    `;

    db.get(sql, [lesson_id], (err, row) => {
      if (err) return reject(err);
      resolve(row);
    });
  });
};

exports.getByCourse = function(courseId) {
    return new Promise((resolve, reject) => {
        const sql = `
            SELECT l.lesson_id, l.lesson_name AS name, m.module_name
            FROM lessons l
            JOIN modules m ON l.module_id = m.module_id
            WHERE m.course_id = ?
            ORDER BY m.order_index ASC, l.lesson_id ASC
        `;
        
        db.all(sql, [courseId], (err, rows) => {
            if (err) return reject(err);
            resolve(rows);
        });
    });
};

exports.getByModule = (module_id) => {
  return new Promise((resolve, reject) => {

    const sql = `
      SELECT *
      FROM lessons
      WHERE module_id = ?
      ORDER BY created_at ASC
    `;

    db.all(sql, [module_id], (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });
};
