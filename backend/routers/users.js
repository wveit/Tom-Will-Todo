const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const jwtSecret = 'this is my jwt secret';

// registration endpoint
router.post('/users', async function (req, res) {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 8);
    const newUser = await User.create({
        name,
        email,
        hashedPassword,
    });
    const id = newUser.id;
    const token = jwt.sign({ id }, jwtSecret);
    res.json({ token });
});

// get current user
router.get('/users/me', function (req, res) {
    res.send('get /users/me');
});

// sign in endpoint
router.post('/users/signin', function (req, res) {
    res.send('post /users/signin');
});

module.exports = router;
