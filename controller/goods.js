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
    } else {
      return doc;
    }
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
      goodImg: "",
      goodSec: "",
      goodAddTime: ""
    });
    good.save(function(error) {
      if (error) {
        ctx.body = "error";
        return next();
      }
    });
    ctx.body = {
      code: 1,
      msg: "添加成功",
      data: []
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
