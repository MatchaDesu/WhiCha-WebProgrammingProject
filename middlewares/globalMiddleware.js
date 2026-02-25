const userModel = require("../models/userModel");

exports.localUser = async (req, res, next) => {

  if (!req.session.user) {
    res.locals.user = null;
    return next();
  }

  try {
    const user = await userModel.getById(req.session.user.id);

    res.locals.user = user;
    next();
  } catch (err) {

    next(err);
  }
};