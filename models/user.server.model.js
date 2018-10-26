var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    username: String,
    phone: Number,
    password: String,
    nickname: String,
    lastLogin: Date,
    system: {
        brand: String,
        model: String,
        version: String
    },
    goodsId: Array
})

var User = mongoose.model('User', UserSchema);

module.exports = User;