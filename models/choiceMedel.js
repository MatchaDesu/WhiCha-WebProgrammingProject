const db = require('../config/db');

//เพิ่ม choice ใน question
exports.addChoice = (choice) => {
  return new Promise((resolve, reject) => {
    //is_correct 0 or 1
    const { question_id, choice_text, is_correct } = choice;
    
    const sql = `INSERT INTO choices (question_id, choice_text, is_correct) 
                 VALUES (?, ?, ?)`;

    db.run(sql, [question_id, choice_text, is_correct], function (err) {
      if (err) return reject(err);

      resolve({ choice_id: this.lastID });
    });
  });
};

exports.updateChoice = (choice_id, choice) => {
  return new Promise((resolve, reject) => {
    const { choice_text, is_correct } = choice;
    
    const sql = `UPDATE choices 
                 SET choice_text = ?, is_correct = ? 
                 WHERE choice_id = ?`;

    db.run(sql, [choice_text, is_correct, choice_id], function (err) {
      if (err) return reject(err);
      resolve({ changes: this.changes });
    });
  });
};

//ดึง choice ทั้งหมด ของ question นี้
exports.getChoicesByQuestion = (question_id) => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM choices WHERE question_id = ?`;

    //1 คำถามมีหลาย choice
    db.all(sql, [question_id], (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });
};

exports.deleteChoice = () => {};