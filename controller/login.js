const mongoose = require("mongoose");
const https = require("https");
const Config = require("../config/config");

// 微信官方文件
var WXBizDataCrypt = require('../utils/WXBizDataCrypt')

exports.getWxInfo = async (ctx, next) => {
  let query = ctx.request.query;
  let result = null;
  await new Promise((resolve, reject) => {
    https.get(Config.code2Session + "&js_code=" + query.code, function(res) {
      let html = "";
      res.on("data", function(data) {
        html += data;
      });

      res.on("end", function() {
        // console.log(JSON.parse(html))
        result = JSON.parse(html);
        resolve();
        a = true;
      });
    });
  }).then(() => {});
  if (result) {
    ctx.body = {
      code: 1,
      msg: "返回成功",
      data: result
    };
  } else {
    ctx.body = {
      code: 0,
      msg: "返回失败"
    };
  }
};


exports.getWxPhone = async(ctx, next) => {
  let query = ctx.request.query;
      encryptedData = query.encry,
      sessionKey = query.sessionKey,
      iv = query.iv,
      appId = Config.appid;

  var pc = new WXBizDataCrypt(appId, sessionKey);
  var data = pc.decryptData(encryptedData , iv);
  ctx.body = {
    code: 1,
    msg: "返回成功",
    data: data
  }
}