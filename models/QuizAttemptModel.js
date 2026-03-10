const db = require('../config/db');

// upsert — ถ้าเคยทำแล้ว update, ถ้ายังไม่เคยทำ insert
exports.saveAttempt = (userId, quizId, score, totalPoints) => {
    return new Promise((resolve, reject) => {
        db.run(`
            INSERT INTO quiz_attempts (user_id, quiz_id, score, total_points, submitted_at)
            VALUES (?, ?, ?, ?, CURRENT_TIMESTAMP)
            ON CONFLICT(user_id, quiz_id)
            DO UPDATE SET
                score        = excluded.score,
                total_points = excluded.total_points,
                submitted_at = CURRENT_TIMESTAMP
        `, [userId, quizId, score, totalPoints],
        function (err) {
            if (err) return reject(err);
            resolve({ attempt_id: this.lastID });
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