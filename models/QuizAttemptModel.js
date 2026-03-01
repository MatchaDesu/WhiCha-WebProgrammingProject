const db = require('../config/db');

exports.startAttempt = (data) => {
  return new Promise((resolve, reject) => {
    const { quiz_id, user_id } = data;

    const sql = `INSERT INTO quiz_attempts (quiz_id, user_id) 
                 VALUES (?, ?)`;

    db.run(sql, [quiz_id, user_id], function (err) {
      if (err) return reject(err);

      resolve({ attempt_id: this.lastID });
    });
  });
};
//บันทึกคะแนนกับเวลาส่ง
exports.submitAttempt = (attempt_id, score) => {
  return new Promise((resolve, reject) => {
    //เรียก CURRENT_TIMESTAMP
    const sql = `UPDATE quiz_attempts 
                 SET score = ?, submitted_at = CURRENT_TIMESTAMP 
                 WHERE attempt_id = ?`;

    db.run(sql, [score, attempt_id], function (err) {
      if (err) return reject(err);
      resolve({ changes: this.changes });
    });
  });
};

exports.calculateScore = (quiz_id) => {
  return new Promise((resolve, reject) => {
    //กวาดหา ทุก questions /SUM max_score ของ questions รวมออกมาเป็น quiz max_score
    const sql = `SELECT SUM(points) as max_score 
                 FROM questions 
                 WHERE quiz_id = ?`;

    db.get(sql, [quiz_id], (err, row) => {
      if (err) return reject(err);

      resolve(row);
    });
  });
};

//ดึง Attemp his ทั้งหมด ของ user คนนี้ใน quiz นี้
exports.getAttemptByUser = (quiz_id, user_id) => {
  return new Promise((resolve, reject) => {

    const sql = `SELECT * FROM quiz_attempts 
                 WHERE quiz_id = ? AND user_id = ? 
                 ORDER BY started_at DESC`;

    db.all(sql, [quiz_id, user_id], (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
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