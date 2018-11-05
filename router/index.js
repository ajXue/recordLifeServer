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
    let filePath = '/home/Nodejs/public/upload'+ `/${file.name}`;    
    let fileRelPath = '/upload'+ `/${file.name}`;
    //let filePath = path.join(__dirname, 'public/upload') + `/${file.name}`;
    // 创造可写流
    const upStream = fs.createWriteStream(filePath);
    reader.pipe(upStream);
    mongoose.Types.ObjectId(userId);
    
    var doc = await Goods.updateOne({_id: userId}, {goodImg:fileRelPath}, function(err, doc) {

        if(err) {
            //console.log(err)
        }
        return doc;
    })
    ctx.body = "上传成功";
})

module.exports = router
