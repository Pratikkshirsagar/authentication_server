const express = require('express');
const router = express.Router();

// Import the controller
const { signup } = require('../controllers/authController');

// import the validators
const { userSignupValidator } = require('../validators/auth');
const { runValidation } = require('../validators');

router.post('/signup', userSignupValidator, runValidation, signup);

module.exports = router;
