const mongoose = require("mongoose");
const KoaRouter = require("koa-router");
const fs = require('fs');
const path = require('path');
const router = new KoaRouter();

var Goods = require("../models/goods.server.model.js");
var Good = require("../controller/goods.js");

router.get('/addUser', async (ctx, next) => {
    ctx.body  = "xuegg";
});

router.post('/findUser', async (ctx, next) => {
    ctx.body = "11";
})

router.post("/upload", async (ctx, next) => {
    //单个文件
    const file = ctx.request.files.file;
    const userId = ctx.request.body.userId;
    const reader = fs.createReadStream(file.path);
    let filePath = '/home/Nodejs/public/load'+ `/${file.name}`;    
    //let filePath = path.join(__dirname, 'public/load') + `/${file.name}`;
    // 创造可写流
    const upStream = fs.createWriteStream(filePath);
    reader.pipe(upStream);
    
    console.log("filePath",filePath);
    console.log("userId", userId);    
    sId = (userId.toString());
   	    console.log(sId)
    var doc = await Goods.update({_id: userId},{goodImg:filePath}, function(err, doc) {
        if(err) {
            //console.log(err)
        }
        return doc;
    })
 
    ctx.body = "上传成功";
})

module.exports = router
