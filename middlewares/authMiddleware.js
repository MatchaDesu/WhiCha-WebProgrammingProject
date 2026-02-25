exports.requireLogin = (req, res, next) => {
  const publicPaths = ['/signin', '/signup'];

  if (publicPaths.includes(req.path)) {
    return next();
  }

  if (!req.session.user) {
    return res.redirect('/signin');
  }

  next();
};