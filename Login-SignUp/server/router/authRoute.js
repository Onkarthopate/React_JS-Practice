const express = require('express');
const router = express.Router();
const authController = require('../controllers/authControllers');
const userController = require('../controllers/userController')

// Signup route
router.post('/signUp', authController.signup);

// Login route
router.post('/login', authController.login);

// Request OTP to reset password
router.post('/requestReset', authController.requestReset);

// Reset password with OTP
router.post('/resetPassword', authController.resetPassword);

// Get all users route
router.get('/users', userController.getAllUsers); 

module.exports = router;
