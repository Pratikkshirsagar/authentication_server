const express = require('express');
const router = express.Router();

// Import the controller
const { signup } = require('../controllers/authController');

router.get('/signup', signup);

module.exports = router;
