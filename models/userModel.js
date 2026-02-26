const db = require('../config/db');

exports.getAll = () => {
    return new Promise((resolve, reject) => {
        db.all("SELECT * FROM users", [], (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
};

exports.getById = (id) => {
  return new Promise((resolve, reject) => {

    const sql = `SELECT * FROM users WHERE user_id = ?`;

    db.get(sql, [id], (err, row) => {
      if (err) return reject(err);
      resolve(row);
    });
  });
};

exports.getByEmail = (email) => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM users WHERE email = ?`;

    db.get(sql, [email], (err, row) => {
      if (err) return reject(err);
      resolve(row);
    });
  });
};

exports.createUser = () => {}
exports.updateProfile = () => {}
exports.softDelete = () => {}
exports.getByRole = (role) => {}