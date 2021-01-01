const express = require('express');
const router = express.Router();
const User = require('../models/User');

// registration endpoint
router.post('/users', async function (req, res) {
    const { name, email, password } = req.body;
    console.log(req.body);
    const newUser = await User.create({
        name,
        email,
        hashedPassword: password,
    });
    res.json(newUser);
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
