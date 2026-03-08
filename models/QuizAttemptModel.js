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

// upsert — ถ้าเคยทำแล้ว update, ถ้ายังไม่เคยทำ insert
exports.saveAttempt = (userId, quizId, score, totalPoints, passed) => {
    return new Promise((resolve, reject) => {
        db.run(`
            INSERT INTO quiz_attempts (user_id, quiz_id, score, total_points, passed, submitted_at)
            VALUES (?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
            ON CONFLICT(user_id, quiz_id)
            DO UPDATE SET
                score        = excluded.score,
                total_points = excluded.total_points,
                passed       = excluded.passed,
                submitted_at = CURRENT_TIMESTAMP
        `, [userId, quizId, score, totalPoints, passed],
        function (err) {
            if (err) return reject(err);
            resolve({ attempt_id: this.lastID });
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

exports.getByUserAndQuiz = (userId, quizId) => {
    return new Promise((resolve, reject) => {
        db.get(
            `SELECT * FROM quiz_attempts WHERE user_id = ? AND quiz_id = ?`,
            [userId, quizId],
            (err, row) => err ? reject(err) : resolve(row || null)
        );
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