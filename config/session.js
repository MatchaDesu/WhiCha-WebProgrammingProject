const session = require('express-session');

module.exports = session({
  name: process.env.SESTION_NAME || 'whicha.sid',
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
  }
});