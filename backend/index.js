const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.json({
        greeting: 'hello',
        friend: 'Tom',
    });
});

app.listen(5000, function () {
    console.log('listening on port 5000');
});
