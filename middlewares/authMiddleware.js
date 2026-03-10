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

exports.requireRole = (role) => {
  return (req, res, next) => {
    if (!req.session.user) {
      return res.redirect('/signin');
    }

    if (req.session.user.role !== role) {
      return res.status(403).send('Forbidden');
    }

    next();
  };
};

exports.requireInstructor = exports.requireRole('instructor');
exports.requireManager    = exports.requireRole('manager');