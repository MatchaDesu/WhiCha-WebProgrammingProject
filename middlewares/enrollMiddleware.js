exports.isEnrolled = (req, res, next) => {

  if (!req.session.user) {
    return res.redirect('/signin');
  }

  next();
};