const db = require('../config/db');

exports.getAll = () => {
    return new Promise((resolve, reject) => {
        db.all("SELECT * FROM users", [], (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
};

exports.createUser = () => {}
exports.getByEmail = () => {}
exports.getById = () => {}
exports.updateProfile = () => {}
exports.softDelete() = () => {}
exports.getByRole = (role) => {}