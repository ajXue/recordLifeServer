var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    username: String,
    nickname: String,
    lastLogin: Date
})

var User = mongoose.model('User', UserSchema);

module.exports = User;