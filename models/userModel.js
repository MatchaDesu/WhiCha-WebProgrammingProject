const db = require('../config/db');

exports.createUser = (user) => {
  return new Promise((resolve, reject) => {

    const {username, first_name, last_name, email, phone, password} = user;
    const sql = `INSERT INTO users (username, password, first_name, last_name, email, phone)
                  VALUES (?, ?, ?, ?, ?, ?)`;

    db.run(sql, [username, password, first_name, last_name, email, phone], function (err) {
      if (err) return reject(err);
      resolve({user_id: this.lastID});
    });
  });
}

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

exports.getByRole = (role) => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM users WHERE role = ?`;

    db.get(sql, [role], (err, row) => {
      if (err) return reject(err);
      resolve(row);
    });
  });
};

exports.updateProfile = () => { }

exports.softDelete = () => { }

