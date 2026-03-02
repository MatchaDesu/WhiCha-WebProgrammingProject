const db = require('../config/db');

exports.createQuiz = (quiz) => {
  return new Promise((resolve, reject) => {
    const { module_id, title, description } = quiz;

    const sql = `INSERT INTO quizzes (module_id, title, description) 
                 VALUES (?, ?, ?)`;

    db.run(sql, [module_id, title, description], function (err) {
      if (err) return reject(err);

      resolve({ quiz_id: this.lastID });
    });
  });
};

exports.getById = (quiz_id) => {
  return new Promise((resolve, reject) => {

    const sql = `
      SELECT *
      FROM quizzes
      WHERE quiz_id = ?
    `;

    db.get(sql, [quiz_id], (err, row) => {
      if (err) return reject(err);
      resolve(row);
    });
  });
};

exports.updateQuiz = (quiz_id, quiz) => {
  return new Promise((resolve, reject) => {

    const { title, description } = quiz;
    const sql = `UPDATE quizzes 
                 SET title = ?, description = ? 
                 WHERE quiz_id = ?`;

    db.run(sql, [title, description, quiz_id], function (err) {
      if (err) return reject(err);
      resolve({ changes: this.changes });
    });
  });
};

exports.deleteQuiz = (quiz_id) => {
  return new Promise((resolve, reject) => {
    const sql = `DELETE FROM quizzes WHERE quiz_id = ?`;

    db.run(sql, [quiz_id], function (err) {
      if (err) return reject(err);

      resolve({ changes: this.changes });
    });
  });
};

//ดึง quiz ทั้งหมด ของ course นี้
exports.getByModule = (module_id) => {
  return new Promise((resolve, reject) => {

    const sql = `SELECT * FROM quizzes 
                 WHERE module_id = ? 
                 ORDER BY created_at ASC`;

    db.all(sql, [module_id], (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });
};