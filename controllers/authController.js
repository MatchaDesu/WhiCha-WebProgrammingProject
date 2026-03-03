const userModel = require('../models/userModel');

// ======================
//        Sign in
// ======================
exports.signIn = (req, res) => {
  res.render('auth/signIn', { layout: 'layouts/auth', error: null });
};

exports.postSignIn = async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.getByEmail(email);

  if (!user || user.password !== password) {
    return res.render('auth/signIn', { layout: 'layouts/auth', error: 'อีเมลหรือรหัสผ่านไม่ถูกต้อง' });
  }

  // ถ้า่ signin ผ่าน จะได้ session ที่มี id จากตาราง user
  req.session.user = {
    id: user.user_id
  };

  res.redirect('/');
};


// ======================
//        Sign up
// ======================
exports.signUp = (req, res) => {
  res.render('auth/signUp', { layout: 'layouts/auth', error: null });
};

exports.postSignUp = async (req, res) => {
  const userForm = req.body;

  if (!userForm || userForm.password !== userForm.confirm_password) {
    return res.render('auth/signUp', { layout: 'layouts/auth', error: 'รหัสผ่านไม่ตรงกัน'});
  }

  const user = await userModel.createUser(userForm);

  // ถ้า่ signup ผ่าน จะได้ session ที่มี id จากตาราง user
  req.session.user = {
    id: user.user_id,
  };

  res.redirect('/');
}


// ======================
//        Sign out
// ======================
exports.signOut = (req, res) => {

  // ทำลาย session ที่อยู่ใน config/session
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send('Logout failed');
    }

    res.clearCookie(process.env.SESSION_NAME || 'whicha.sid');;
    res.redirect('/');
  });
};