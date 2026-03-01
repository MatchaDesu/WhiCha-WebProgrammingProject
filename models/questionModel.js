const db = require('../config/db');

//เพิ่ม question ใน quiz
exports.addQuestion = (question) => {
    return new Promise((resolve, reject) => {

        const { quiz_id, question_text, question_type, points, order_index } = question;

        const sql = `INSERT INTO questions (quiz_id, question_text, question_type, points, order_index) 
                 VALUES (?, ?, ?, ?, ?)`;

        db.run(sql, [quiz_id, question_text, question_type, points, order_index], function (err) {
            if (err) return reject(err);

            resolve({ question_id: this.lastID });
        });
    });
};

exports.updateQuestion = (question_id, question) => {
    return new Promise((resolve, reject) => {
        const { question_text, question_type, points } = question;

        const sql = `UPDATE questions 
                 SET question_text = ?, question_type = ?, points = ? 
                 WHERE question_id = ?`;

        db.run(sql, [question_text, question_type, points, question_id], function (err) {
            if (err) return reject(err);
            resolve({ changes: this.changes });
        });
    });
};

exports.reorderQuestion = (question_id, new_order_index) => {
    return new Promise((resolve, reject) => {
        const sql = `UPDATE questions 
                 SET order_index = ? 
                 WHERE question_id = ?`;

        db.run(sql, [new_order_index, question_id], function (err) {
            if (err) return reject(err);
            resolve({ changes: this.changes });
        });
    });
};

//ดึง question ทั้งหมด ของ quiz นี้
exports.getQuestionsByQuiz = (quiz_id) => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM questions 
                 WHERE quiz_id = ? 
                 ORDER BY order_index ASC`;

    db.all(sql, [quiz_id], (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });
};

exports.deleteQuestion = () => { };