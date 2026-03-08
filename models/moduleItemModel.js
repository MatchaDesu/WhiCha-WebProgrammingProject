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

    db.serialize(() => {
      db.run('BEGIN TRANSACTION');

      const stmt = db.prepare(`
        UPDATE modules_items
        SET order_index = ?
        WHERE module_item_id = ?
        AND module_id = ?
      `);

      let hasError = false;

      bulkUpdate.forEach(item => {
        stmt.run(item.order_index, item.module_item_id, module_id, (err) => {
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

exports.removeItem = (item_id) => {
  return new Promise((resolve, reject) => {

    const sql = `
      DELETE FROM modules_items
      WHERE module_item_id = ?
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