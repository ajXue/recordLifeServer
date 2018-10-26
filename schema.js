var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    sex: Boolean,
})

var userModel = mongoose.Model('userModel', userSchema);