const express = require("express");
const router = express.Router();
const webController = require('../controllers/webController');

router.get('/', webController.home);

router.get('/aboutus', webController.aboutus);

module.exports = router;