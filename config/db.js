const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, '../data/database.db');

let db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
      return console.error(err.message);
  }
  console.log('Connected to the SQlite database.');
});

module.exports = db;