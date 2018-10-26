var mongoose = require("mongoose");
var Users = require("../models/users.server.model");


// 新增新用户
Users.addUser = async (ctx, next) => {
  let query = ctx.request.query;
  let doc = await Users.find({ phone: query.username }, function(err, doc) {
    if (err) {
      console.log("addUser", err);
    } else {
      return doc;
    }
  });
  if (doc.length !== 0) {
    ctx.body = {
      code: 0,
      msg: "添加用户已存在",
      data: []
    };
  } else {
    let user = new Users({
        username: query.username,
        phone: query.username,
        password: query.password,
        lastLogin: new Date().getTime()
    })
    user.save(function(err) {
        if(err) {
            ctx.body = {
                code: 0,
                msg: "添加用户失败",
                data: [] 
            }
        } 
        ctx.body = {
            code: 1,
            msg: "添加用户成功",
            data: [] 
        }
    })
  }
};
