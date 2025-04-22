import User from '../models/UserSchema.js';
import Service from '../models/ServiceSchema.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

// Handle registration and login

const generateToken = user => {
    return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET_KEY, {
        expiresIn: "15d",
    });
};

// Registration handler
export const register = async (req, res) => {
    const { email, password, name, role, photo, gender } = req.body;

    try {
        // Check if email already exists in either User or Service collection
        const existingUser = await User.findOne({ email });
        const existingService = await Service.findOne({ email });

        if (existingUser || existingService) {
            return res.status(400).json({ success: false, message: 'Email already exists' });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        let user;
        if (role === 'customer') {
            user = new User({
                name,
                email,
                password: hashPassword,
                photo,
                gender,
                role
            });
        } else if (role === 'service') {
            user = new Service({
                name,
                email,
                password: hashPassword,
                photo,
                gender,
                role
            });
        } else {
            return res.status(400).json({ success: false, message: 'Invalid role' });
        }

        await user.save();

        res.status(200).json({
            success: true,
            message: 'User successfully created'
        });

    } catch (err) {
        console.error('Registration error:', err);
        res.status(500).json({
            success: false,
            message: 'Internal server error, try again',
            error: err.message
        });
    }
};

// Login handler
export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check in both User and Service collections
        const user = await User.findOne({ email });
        const service = await Service.findOne({ email });

        const foundUser = user || service;

        if (!foundUser) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        // Compare password
        const isPasswordMatch = await bcrypt.compare(password, foundUser.password);

        if (!isPasswordMatch) {
            return res.status(400).json({ success: false, message: 'Invalid credentials' });
        }

        // Generate token
        const token = generateToken(foundUser);

        const { password: _, ...rest } = foundUser._doc;

        res.status(200).json({
            success: true,
            message: 'Successfully logged in',
            token,
            data: { ...rest },
            role: foundUser.role
        });

    } catch (err) {
        console.error('Login error:', err);
        res.status(500).json({
            success: false,
            message: 'Failed to login',
            error: err.message
        });
    }
};



