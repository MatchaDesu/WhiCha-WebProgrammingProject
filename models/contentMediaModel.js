const db = require('../config/db');

exports.addMedia = ({ lesson_id, media_name, media_path }) => {
  return new Promise((resolve, reject) => {

    const sql = `
      INSERT INTO content_medias (lesson_id, media_name, media_path)
      VALUES (?, ?, ?)
    `;

    db.run(sql, [lesson_id, media_name, media_path], function (err) {
      if (err) return reject(err);

      resolve({ media_id: this.lastID });
    });
  });
};

exports.getMediaByLesson = (lesson_id) => {
  return new Promise((resolve, reject) => {

    const sql = `
      SELECT *
      FROM content_medias
      WHERE lesson_id = ?
      ORDER BY created_at ASC
    `;

    db.all(sql, [lesson_id], (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });
};

exports.deleteMedia = (media_id) => {
  return new Promise((resolve, reject) => {

    const sql = `
      DELETE FROM content_medias
      WHERE media_id = ?
    `;

    db.run(sql, [media_id], function (err) {
      if (err) return reject(err);
      resolve({ changes: this.changes });
    });
  });
};