const express = require("express");
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/signin', authController.signIn);
router.get('/signup', authController.signUp);
router.get('/signout', authController.signOut);

router.post('/signin', authController.postSignIn);
router.post('/signup', authController.postSignUp);

module.exports = router;