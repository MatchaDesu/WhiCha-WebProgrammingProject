const db = require('../config/db');

exports.startAttempt = ({ quiz_id, user_id }) => {
  return new Promise((resolve, reject) => {

    const sql = `
      INSERT INTO quiz_attempts (quiz_id, user_id)
      VALUES (?, ?)
    `;

    db.run(sql, [quiz_id, user_id], function (err) {
      if (err) {
        if (err.code === 'SQLITE_CONSTRAINT') {
          return reject(new Error('You already attempted this quiz'));
        }
        return reject(err);
      }

      resolve({ attempt_id: this.lastID });
    });
  });
};

//บันทึกคะแนนกับเวลาส่ง
exports.submitAttempt = (attempt_id, score) => {
  return new Promise((resolve, reject) => {

    const sql = `
      UPDATE quiz_attempts
      SET score = ?, submitted_at = CURRENT_TIMESTAMP
      WHERE attempt_id = ?
      AND submitted_at IS NULL
    `;

    db.run(sql, [score, attempt_id], function (err) {
      if (err) return reject(err);
      resolve({ changes: this.changes });
    });
  });
};

exports.getMaxScore = (quiz_id) => {
  return new Promise((resolve, reject) => {

    const sql = `
      SELECT IFNULL(SUM(points), 0) as max_score
      FROM questions
      WHERE quiz_id = ?
    `;

    db.get(sql, [quiz_id], (err, row) => {
      if (err) return reject(err);
      resolve(row.max_score);
    });
  });
};

//ดึง Attemp ทั้งหมด ของ user คนนี้ใน quiz นี้
exports.getAttemptByUser = (quiz_id, user_id) => {
  return new Promise((resolve, reject) => {

    const sql = `
      SELECT *
      FROM quiz_attempts
      WHERE quiz_id = ? AND user_id = ?
    `;

    db.get(sql, [quiz_id, user_id], (err, row) => {
      if (err) return reject(err);
      resolve(row);
    });
  });
};

exports.resetAttempt = (attempt_id) => {
  return new Promise((resolve, reject) => {
    const sql = `DELETE FROM quiz_attempts WHERE attempt_id = ?`;

    db.run(sql, [attempt_id], function (err) {
      if (err) return reject(err);
      resolve({ changes: this.changes });
    });
  });
};