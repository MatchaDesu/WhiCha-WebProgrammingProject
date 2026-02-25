const express = require("express");
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/signin', authController.signIn);
router.post('/signin', authController.postSignIn);

router.get('/signup', authController.signUp);
router.post('/signup', authController.postSignUp);

router.get('/signout', authController.signOut);

module.exports = router;