const enrollmentModel = require('../models/enrollmentModel');

exports.home = (req, res) => {
   res.render('pages/home');
};

exports.mylearning = async (req, res) => {
   try {
      const userId = req.session.user.id;
      const enrolledCourses = await enrollmentModel.getByUserWithProgress(userId);

      res.render('pages/my-learning', { enrolledCourses });
   } catch (err) {
      console.log(err);
      res.status(500).send("Server Error");
   }
}

exports.aboutus = (req, res) => {
   res.render('pages/about-us');
}