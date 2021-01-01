const express = require('express');
const router = express.Router();

// get all todos for current user
router.get('/todos', function (req, res) {
    res.send('get /todos');
});

// create new todo
router.post('/todos', function (req, res) {
    res.send('post /todos');
});

// edit todo
router.put('/todos/:id', function (req, res) {
    res.send('put /users/id');
});

// get todo details
router.get('/todos/:id', function (req, res) {
    res.send('get /todos/id');
});

// delete todo
router.delete('/todos/:id', function (req, res) {
    res.send('delete /todos/id');
});

module.exports = router;
