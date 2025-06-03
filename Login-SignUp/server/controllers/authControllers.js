const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validateSignup, validatePassword } = require('../utils/validates');
const sendEmail = require('../utils/sendEmail');

// In-memory OTP store: { email: { otp: '123456', expiresAt: timestamp } }
let otpStore = {};

exports.signup = async (req, res) => {
    try {
        const { username, email, mobile, dob, password, role } = req.body;

        if (!validateSignup(req.body)) {
            return res.status(400).json({ message: 'Validation failed. Please check your input.' });
        }

        const existingUser = await User.findOne({ $or: [{ email }, { username }] });
        if (existingUser) {
            return res.status(409).json({ message: 'User with this email or username already exists.' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            username,
            email,
            mobile,
            dob,
            password: hashedPassword,
            role
        });

        await user.save();

        res.status(201).json({ message: 'User registered successfully.' });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { identifier, password } = req.body;

        const user = await User.findOne({
            $or: [{ email: identifier }, { username: identifier }]
        });

        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials.' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials.' });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ message: 'Login successful.', token });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Step 1: Request OTP for password reset
exports.requestReset = async (req, res) => {
    try {
        const { email } = req.body;

        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: 'User not found.' });

        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        otpStore[email] = {
            otp,
            expiresAt: Date.now() + 10 * 60 * 1000 // 10 minutes from now
        };

        await sendEmail(
            email,
            'Your Password Reset OTP',
            `Your OTP code is: ${otp}. It expires in 10 minutes.`
        );

        res.json({ message: 'OTP sent to your email.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Step 2: Reset password using OTP
exports.resetPassword = async (req, res) => {
    try {
        const { email, otp, newPassword } = req.body;

        const record = otpStore[email];
        if (!record || record.otp !== otp || record.expiresAt < Date.now()) {
            return res.status(400).json({ message: 'Invalid or expired OTP.' });
        }

        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: 'User not found.' });

        if (!validatePassword(newPassword)) {
            return res.status(400).json({ message: 'Password does not meet security requirements.' });
        }

        user.password = await bcrypt.hash(newPassword, 10);
        await user.save();

        delete otpStore[email];

        res.json({ message: 'Password reset successfully.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
