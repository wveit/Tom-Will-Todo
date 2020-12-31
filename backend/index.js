const express = require('express');
const app = express();

// registration endpoint
app.post('/users', function (req, res) {
    res.send('post /users');
});

// get current user
app.get('/users/me', function (req, res) {
    res.send('get /users/me');
});

// sign in endpoint
app.post('/users/signin', function (req, res) {
    res.send('post /users/signin');
});

// get all todos for current user
app.get('/todos', function (req, res) {
    res.send('get /todos');
});

// create new todo
app.post('/todos', function (req, res) {
    res.send('post /todos');
});

// edit todo
app.put('/todos/:id', function (req, res) {
    res.send('put /users/id');
});

// get todo details
app.get('/todos/:id', function (req, res) {
    res.send('get /todos/id');
});

// delete todo
app.delete('/todos/:id', function (req, res) {
    res.send('delete /todos/id');
});

app.listen(5000, function () {
    console.log('listening on port 5000');
});
