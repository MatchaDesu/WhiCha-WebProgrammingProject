const userModel = require("../models/userModel");

exports.loadGlobalData = async (req, res, next) => {
  try {
    if (req.session.user) {
      const user = await userModel.getById(req.session.user.id);
      res.locals.user = user;
    } else {
      res.locals.user = null;
    }

    next();
  } catch (err) {
    next(err);
  }
};