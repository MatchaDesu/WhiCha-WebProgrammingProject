const userModel = require('../models/userModel');
exports.signIn = (req, res) => {
  res.render('auth/signIn', { layout: 'layouts/auth', error: null });
};

exports.postSignIn = async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.getByEmail(email);

  if (!user || user.password !== password) {
    return res.render('auth/signIn', { layout: 'layouts/auth', error: 'อีเมลหรือรหัสผ่านไม่ถูกต้อง' });
  }

  req.session.user = {
    id: user.user_id,
    role: user.role,
  };

  res.redirect('/');
};


exports.signUp = (req, res) => {
  res.render('auth/signUp', { layout: 'layouts/auth', error: null });
};

exports.postSignUp = async (req, res) => {
  const userForm = req.body;

  if (!userForm || userForm.password !== userForm.confirm_password) {
    return res.render('auth/signUp', { layout: 'layouts/auth', error: 'รหัสผ่านไม่ตรงกัน'});
  }

  const created = await userModel.createUser(userForm);
  const fullUser = await userModel.getById(created.user_id);

  req.session.user = {
    id: fullUser.user_id,
    role: fullUser.role,
  };

  res.redirect('/');
}


exports.signOut = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send('Logout failed');
    }

    res.clearCookie(process.env.SESSION_NAME || 'whicha.sid');;
    res.redirect('/');
  });
};