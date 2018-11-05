const KoaRouter = require("koa-router");
const fs = require('fs');
const path = require('path');
const router = new KoaRouter();

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
    // var doc =await Good.find({_id, userId}, function(err, doc) {
    //     if(err) {
    //         console.log(err);
    //     }
    //     return doc;
    // })
    console.log("filePath",filePath);
    var doc = await Good.update({_id: userId}, {goodImg:filePath}, function(err, doc) {
        if(err) {
            console.log(err)
        }
        return doc;
    })
    console.log(doc);
    ctx.body = "上传成功";
})

module.exports = router
