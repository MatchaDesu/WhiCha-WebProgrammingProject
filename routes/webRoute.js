const express = require("express");
const router = express.Router();
const webController = require('../controllers/webController');

router.get('/', webController.home);

router.get('/about-us', webController.aboutus);

module.exports = router;