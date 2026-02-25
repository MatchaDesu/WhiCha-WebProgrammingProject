const userModel = require('../models/userModel');

exports.postSignUp = async (req, res) => {
  const { email, password } = req.body;
}

exports.postSignIn = async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.getByEmail(email);

  if (!user || user.password !== password) {
    return res.render('auth/signIn', { layout: 'layouts/auth', error: 'อีเมลหรือรหัสผ่านไม่ถูกต้อง' });
  }

  req.session.user = {
    id: user.user_id
  };

  res.redirect('/');
};

exports.signIn = (req, res) => {
  res.render('auth/signIn', { layout: 'layouts/auth' });
};

exports.signUp = (req, res) => {
  res.render('auth/signUp', { layout: 'layouts/auth' });
};

exports.signOut = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send('Logout failed');
    }

    res.clearCookie(process.env.SESSION_NAME || 'whicha.sid');;
    res.redirect('/');
  });
};