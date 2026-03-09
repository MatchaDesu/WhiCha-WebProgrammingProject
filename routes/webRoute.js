const express = require("express");
const router = express.Router();
const webController = require('../controllers/webController');
const userController = require('../controllers/userController');


router.get('/', webController.home);

<<<<<<< HEAD
router.get('/my-learning', webController.mylearning);

router.get('/about-us', webController.aboutus);

router.get('/guide', webController.guide);

=======

router.get('/about-us', webController.aboutus);
router.get("/my-learning", userController.getMyLearning);
>>>>>>> 810e767a9f412bc4fa205befb84efba68a086ad2

module.exports = router;