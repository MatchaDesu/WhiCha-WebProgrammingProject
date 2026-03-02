const db = require('../config/db');

exports.addItemToModule = ({ module_id, item_type, item_id, order_index }) => {
  return new Promise((resolve, reject) => {

    const sql = `
      INSERT INTO modules_items
      (module_id, item_id, item_type, order_index)
      VALUES (?, ?, ?, ?)
    `;

    db.run(sql, [module_id, item_id, item_type, order_index], function (err) {
      if (err) return reject(err);
      resolve({ module_item_id: this.lastID });
    });
  });
};  

exports.updateItem = (item_id, { item_type, ref_id }) => {
  return new Promise((resolve, reject) => {

    const sql = `
      UPDATE modules_items
      SET item_type = ?, ref_id = ?
      WHERE item_id = ?
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
      UPDATE modules_items
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
      UPDATE modules_items
      SET deleted_at = CURRENT_TIMESTAMP
      WHERE item_id = ?
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
      FROM modules_items
      WHERE module_id = ?
      ORDER BY 
        CASE WHEN item_type = 'quiz' THEN 1 ELSE 0 END,
        order_index ASC
    `;

    db.all(sql, [module_id], (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });
};