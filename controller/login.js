const mongoose = require("mongoose");
const https = require("https");
var Config = require("../config/config");

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
