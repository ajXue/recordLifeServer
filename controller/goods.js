var mongoose = require("mongoose");
var Goods = require("../models/goods.server.model");

exports.addGoods = async (ctx, next) => {
  var query = ctx.request.query;
  var findInfo = await Goods.find({ goodName: query.goodName }, function(
    err,
    doc
  ) {
    if (err) {
      console.log("add Error:", err);
    }
    return doc;
  });
  if (findInfo.length !== 0) {
    ctx.body = {
      code: 0,
      msg: "添加商品已存在",
      data: []
    };
  } else {
    var good = new Goods({
      goodName: query.goodName,
      goodPrice: query.goodPrice,
      goodImg: query.goodImg,
      goodSec: query.goodSec,
      goodAddTime: new Date().getTime()
    });
    var newGoodDoc = await good.save();
    console.log("_idididididididid",newGoodDoc["_id"])
    ctx.body = {
      code: 1,
      msg: "添加成功",
      data: {
        userId: newGoodDoc["_id"]
      }
    };
  }
};

exports.findGoods = async (ctx, next) => {
  var query = ctx.request.query;
  var param = {
    goodName: { $regex: query.goodName }
  };
  var doc = await Goods.find(param, function(err, doc) {
    if (err) {
      console.log("find Error:", err);
    } else {
      return doc;
    }
  });
  ctx.body = {
    code: 1,
    msg: "查询成功",
    data: doc
  };
};
