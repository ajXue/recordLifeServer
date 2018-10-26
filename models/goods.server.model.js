var mongoose = require('mongoose');

var GoodsSchema = mongoose.Schema({
    goodName: String,
    goodPrice: Number,
    goodImg: String,
    goodSec: String,
    goodAddTime: Date,
})

var Goods = mongoose.model('Goods', GoodsSchema);

module.exports = Goods;