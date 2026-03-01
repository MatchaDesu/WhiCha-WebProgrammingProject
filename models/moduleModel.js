const db = require('../config/db');

// สร้าง module
exports.createModule = ({ course_id, title, order_index }) => {
  return new Promise((resolve, reject) => {

    const sql = `
      INSERT INTO modules (course_id, title, order_index)
      VALUES (?, ?, ?)
    `;

    db.run(sql, [course_id, title, order_index], function (err) {
      if (err) return reject(err);
      resolve({ module_id: this.lastID });
    });
  });
};

// แก้ไข module
exports.updateModule = (module_id, { title }) => {
  return new Promise((resolve, reject) => {

    const sql = `
      UPDATE modules
      SET title = ?
      WHERE module_id = ?
      AND deleted_at IS NULL
    `;

    db.run(sql, [title, module_id], function (err) {
      if (err) return reject(err);
      resolve({ changes: this.changes });
    });
  });
};

// ลบแบบ soft delete
exports.deleteModule = (module_id) => {
  return new Promise((resolve, reject) => {

    const sql = `
      UPDATE modules
      SET deleted_at = CURRENT_TIMESTAMP
      WHERE module_id = ?
      AND deleted_at IS NULL
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

    const stmt = db.prepare(`
      UPDATE modules
      SET order_index = ?
      WHERE module_id = ?
      AND course_id = ?
    `);

    db.serialize(() => {
      bulkUpdate.forEach(item => {
        stmt.run(item.order_index, item.module_id, course_id);
      });

      stmt.finalize(err => {
        if (err) return reject(err);
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
      AND deleted_at IS NULL
      ORDER BY order_index ASC
    `;

    db.all(sql, [course_id], (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });
};