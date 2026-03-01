const userModel = require("../models/userModel");
const categoryModel = require("../models/categoryModel");

exports.loadGlobalData = async (req, res, next) => {
  try {
    // USER
    if (req.session.user) {
      const user = await userModel.getById(req.session.user.id);
      res.locals.user = user;
    } else {
      res.locals.user = null;
    }

    // CATEGORIES
    const categories = await categoryModel.getAll();
    res.locals.categories = categories;

    next();
  } catch (err) {
    next(err);
  }
};