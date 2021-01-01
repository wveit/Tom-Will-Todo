const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { body, header, validationResult } = require('express-validator');

const jwtSecret = 'this is my jwt secret';

// registration endpoint
router.post(
    '/users',
    body('name').isLength({ min: 2 }),
    body('email').isEmail(),
    body('password').isLength({ min: 6 }),
    async function (req, res) {
        // handle validation results
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const errorObj = {};
            errors.array().forEach(function (error) {
                errorObj[error.param] = error.msg;
            });
            return res.status(400).json({ errors: errorObj });
        }

        const { name, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res
                .status(400)
                .json({ errors: { email: 'Email already in use' } });
        }

        // the actual registration code
        const hashedPassword = await bcrypt.hash(password, 8);
        const newUser = await User.create({
            name,
            email,
            hashedPassword,
        });
        const id = newUser.id;
        const token = jwt.sign({ id }, jwtSecret);
        res.json({ token });
    }
);

// get current user
router.get('/users/me', function (req, res) {
    res.send('get /users/me');
});

// sign in endpoint
router.post('/users/signin', function (req, res) {
    res.send('post /users/signin');
});

module.exports = router;
