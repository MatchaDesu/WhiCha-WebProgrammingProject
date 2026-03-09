const db = require('../config/db');

exports.getAll = () => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM users`;

    db.all(sql, [], (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });
};

exports.createUser = (user) => {
  return new Promise((resolve, reject) => {

    const { username, first_name, last_name, email, phone, password } = user;
    const sql = `INSERT INTO users (username, password, first_name, last_name, email, phone)
                  VALUES (?, ?, ?, ?, ?, ?)`;

    db.run(sql, [username, password, first_name, last_name, email, phone], function (err) {
      if (err) return reject(err);
      resolve({ user_id: this.lastID });
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

    db.all(sql, [role], (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });
};

exports.updateProfile = (id, path) => {
  return new Promise((resolve, reject) => {

    const sql = `UPDATE users
                SET profile_image = ?
                WHERE user_id = ?`;

    db.run(sql, [path, id], function (err) {
      if (err) return reject(err);
      resolve({ changes: this.changes });
    });
  });
};

exports.updateUserInfo = (id, data) => {
  return new Promise((resolve, reject) => {

    const { username, first_name, last_name, email, phone } = data;

    const sql = `UPDATE users 
                 SET username = ?, first_name = ?, last_name = ?, email = ?, phone = ?
                 WHERE user_id = ?`;

    db.run(sql, [username, first_name, last_name, email, phone, id], function (err) {
      if (err) return reject(err);
      resolve({ changes: this.changes });
    });
  });
}

exports.updateUserPassword = (id, password) => {
  return new Promise((resolve, reject) => {

    const sql = `UPDATE users 
                 SET password = ?
                 WHERE user_id = ?`;

    db.run(sql, [password, id], function (err) {
      if (err) return reject(err);
      resolve({ changes: this.changes });
    });
  });
}

exports.softDelete = (id) => {
  return new Promise((resolve, reject) => {

    const sql = `UPDATE users
                SET deleted_at = CURRENT_TIMESTAMP
                WHERE user_id = ?`;

    db.run(sql, [id], function (err) {
      if (err) return reject(err);
      resolve({ changes: this.changes });
    });
  });
}

exports.getEnrolledCourses = (userId) => {
    return new Promise((resolve, reject) => {
        const sql = `
            SELECT c.course_id, c.course_name, c.course_image 
            FROM enrollments e
            JOIN courses c ON e.course_id = c.course_id
            WHERE e.user_id = ?
            ORDER BY e.enrolled_at DESC
        `;
        db.all(sql, [userId], (err, rows) => {
            if (err) return reject(err);
            resolve(rows);
        });
    });
};

//updateUser
exports.updateUser = (userId, data) => {
    return new Promise((resolve, reject) => {
        const { first_name, last_name } = data;
        const sql = `
            UPDATE users 
            SET first_name = ?, last_name = ? 
            WHERE user_id = ?
        `;
        db.run(sql, [first_name, last_name, userId], function (err) {
            if (err) return reject(err);
            resolve({ changes: this.changes });
        });
    });
};