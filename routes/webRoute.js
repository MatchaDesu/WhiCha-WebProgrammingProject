const express = require("express");
const router = express.Router();
const webController = require('../controllers/webController');

router.get('/', webController.home);

router.get('/my-learning', webController.mylearning);

router.get('/about-us', webController.aboutus);

router.get('/guide', webController.guide);


module.exports = router;