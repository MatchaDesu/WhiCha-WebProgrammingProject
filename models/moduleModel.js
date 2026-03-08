const db = require('../config/db');

// สร้าง module
exports.createModule = ({ course_id, module_name, order_index }) => {
  return new Promise((resolve, reject) => {

    const sql = `
      INSERT INTO modules (course_id, module_name, order_index)
      VALUES (?, ?, ?)
    `;

    db.run(sql, [course_id, module_name, order_index], function (err) {
      if (err) return reject(err);
      resolve({ module_id: this.lastID });
    });
  });
};

exports.getById = (module_id) => {
  return new Promise((resolve, reject) => {

    const sql = `
      SELECT *
      FROM modules
      WHERE module_id = ?
    `;

    db.get(sql, [module_id], (err, row) => {
      if (err) return reject(err);
      resolve(row);
    });
  });
};

// แก้ไข module
exports.updateModule = (module_id, { module_name }) => {
  return new Promise((resolve, reject) => {

    const sql = `
      UPDATE modules
      SET module_name = ?
      WHERE module_id = ?
    `;

    db.run(sql, [module_name, module_id], function (err) {
      if (err) return reject(err);
      resolve({ changes: this.changes });
    });
  });
};

// ลบแบบลบจริง (Hard delete)
exports.deleteModule = (module_id) => {
  return new Promise((resolve, reject) => {

    const sql = `
      DELETE FROM modules
      WHERE module_id = ?
    `;

    db.run(sql, [module_id], function (err) {
      if (err) return reject(err);
      resolve({ changes: this.changes });
    });
  });
};

// เรียงลำดับใหม่แบบ bulk
exports.reorderModule = (course_id, bulkUpdate) => {
  return new Promise((resolve, reject) => {

    db.serialize(() => {
      db.run('BEGIN TRANSACTION');

      const stmt = db.prepare(`
        UPDATE modules
        SET order_index = ?
        WHERE module_id = ?
        AND course_id = ?
      `);

      let hasError = false;

      bulkUpdate.forEach(item => {
        stmt.run(item.order_index, item.module_id, course_id, (err) => {
          if (err) hasError = true;
        });
      });

      stmt.finalize((err) => {
        if (err || hasError) {
          db.run('ROLLBACK');
          return reject(err || new Error('Reorder failed'));
        }
        db.run('COMMIT');
        resolve(true);
      });
    });
  });
};

// ดึง module ทั้งหมดของ course
exports.getByCourse = (course_id) => {
  return new Promise((resolve, reject) => {

    const sql = `
      SELECT *
      FROM modules
      WHERE course_id = ?
      ORDER BY order_index ASC
    `;

    db.all(sql, [course_id], (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });
};