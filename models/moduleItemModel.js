const db = require('../config/db');

exports.addItemToModule = ({ module_id, item_type, ref_id, order_index }) => {
  return new Promise((resolve, reject) => {

    const sql = `
      INSERT INTO module_items (module_id, item_type, ref_id, order_index)
      VALUES (?, ?, ?, ?)
    `;

    db.run(sql, [module_id, item_type, ref_id, order_index], function (err) {
      if (err) return reject(err);
      resolve({ item_id: this.lastID });
    });
  });
};

exports.updateItem = (item_id, { item_type, ref_id }) => {
  return new Promise((resolve, reject) => {

    const sql = `
      UPDATE module_items
      SET item_type = ?, ref_id = ?
      WHERE item_id = ?
      AND deleted_at IS NULL
    `;

    db.run(sql, [item_type, ref_id, item_id], function (err) {
      if (err) return reject(err);
      resolve({ changes: this.changes });
    });
  });
};

exports.reorderItems = (module_id, bulkUpdate) => {
  return new Promise((resolve, reject) => {

    const stmt = db.prepare(`
      UPDATE module_items
      SET order_index = ?
      WHERE item_id = ?
      AND module_id = ?
    `);

    db.serialize(() => {
      bulkUpdate.forEach(item => {
        stmt.run(item.order_index, item.item_id, module_id);
      });

      stmt.finalize(err => {
        if (err) return reject(err);
        resolve(true);
      });
    });
  });
};

exports.removeItem = (item_id) => {
  return new Promise((resolve, reject) => {

    const sql = `
      UPDATE module_items
      SET deleted_at = CURRENT_TIMESTAMP
      WHERE item_id = ?
      AND deleted_at IS NULL
    `;

    db.run(sql, [item_id], function (err) {
      if (err) return reject(err);
      resolve({ changes: this.changes });
    });
  });
};

exports.getItemsByModule = (module_id) => {
  return new Promise((resolve, reject) => {

    const sql = `
      SELECT *
      FROM module_items
      WHERE module_id = ?
      AND deleted_at IS NULL
      ORDER BY order_index ASC
    `;

    db.all(sql, [module_id], (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });
};