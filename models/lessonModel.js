const db = require('../config/db');

exports.createLesson = ({ course_id, lesson_name, content }) => {
  return new Promise((resolve, reject) => {

    const sql = `
      INSERT INTO lessons (course_id, lesson_name, content)
      VALUES (?, ?, ?)
    `;

    db.run(sql, [course_id, lesson_name, content], function (err) {
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
      AND deleted_at IS NULL
    `;

    db.run(sql, [lesson_name, content, lesson_id], function (err) {
      if (err) return reject(err);
      resolve({ changes: this.changes });
    });
  });
};

exports.softDelete = (lesson_id) => {
  return new Promise((resolve, reject) => {

    const sql = `
      UPDATE lessons
      SET deleted_at = CURRENT_TIMESTAMP
      WHERE lesson_id = ?
      AND deleted_at IS NULL
    `;

    db.run(sql, [lesson_id], function (err) {
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
      AND deleted_at IS NULL
    `;

    db.get(sql, [lesson_id], (err, row) => {
      if (err) return reject(err);
      resolve(row);
    });
  });
};

exports.getByCourse = (course_id) => {
  return new Promise((resolve, reject) => {

    const sql = `
      SELECT *
      FROM lessons
      WHERE course_id = ?
      AND deleted_at IS NULL
      ORDER BY created_at ASC
    `;

    db.all(sql, [course_id], (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });
};
