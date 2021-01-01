const express = require('express');
const app = express();

const userRouter = require('./routers/users');
const todosRouter = require('./routers/todos');

app.use(userRouter);
app.use(todosRouter);

app.listen(5000, function () {
    console.log('listening on port 5000');
});
