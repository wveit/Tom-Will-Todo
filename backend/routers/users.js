const express = require('express');
const router = express.Router();

// registration endpoint
router.post('/users', function (req, res) {
    res.send('post /users');
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
