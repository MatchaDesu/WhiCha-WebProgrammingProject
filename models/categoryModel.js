const db = require('../config/db');

exports.createCategory = (category_name) => {
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO categories (category_name) VALUES (?)`;

        db.run(sql, [category_name], function (err) {

            if (err) return reject(err);
            resolve({ category_id: this.lastID });
        });
    });
};

exports.getAll = () => {
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM categories`;

        db.all(sql, [], (err, rows) => {
            if (err) return reject(err);
            resolve(rows);
        });
    });
};

exports.getById = (id) => {
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM categories WHERE category_id = ?`;

        db.get(sql, [id], (err, row) => {
            if (err) return reject(err);
            resolve(row);
        });
    });
};

exports.update = (id, category_name) => {
    return new Promise((resolve, reject) => {
        const sql = `UPDATE categories 
                 SET category_name = ? 
                 WHERE category_id = ?`;

        db.run(sql, [category_name, id], function (err) {
            if (err) return reject(err);

            resolve({ changes: this.changes });
        });
    });
};

exports.delete = (id) => {
  return new Promise((resolve, reject) => {

    const sql = `DELETE FROM categories WHERE category_id = ?`;

    db.run(sql, [id], function (err) {
      if (err) return reject(err);
      resolve({ changes: this.changes });
    });
  });
};