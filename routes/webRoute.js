const express = require("express");
const router = express.Router();
const webController = require('../controllers/webController');
const userController = require('../controllers/userController');


router.get('/', webController.home);


router.get('/about-us', webController.aboutus);
router.get("/my-learning", userController.getMyLearning);

module.exports = router;