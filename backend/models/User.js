const mongoose = require('mongoose');

mongoose.connect(
    'mongodb://localhost:6000/dev',
    { useNewUrlParser: true, useUnifiedTopology: true },
    function (error) {
        if (error) {
            console.error('Could not connect to database');
        } else {
            console.log('Connected to database');
        }
    }
);

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    hashedPassword: String,
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
