module.exports = function isOwner(paramName = "id") {
  return (req, res, next) => {

    if (!req.session.user) {
      return res.status(401).send("Unauthorized");
    }

    const sessionUserId = req.session.user.id;
    const resourceUserId = parseInt(req.params[paramName]);

    if (sessionUserId !== resourceUserId) {
      return res.status(403).send("Forbidden");
    }

    next();
  };
};