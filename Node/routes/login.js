const express = require('express');
const router = express.Router();
const { login } = require('../controller/loginController');

// Login route
router.post('/', login);

module.exports = router;
