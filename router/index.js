const KoaRouter = require("koa-router");
const fs = require('fs');
const path = require('path');
const router = new KoaRouter();

router.get('/addUser', async (ctx, next) => {
    ctx.body  = "xuegg";
});

router.post('/findUser', async (ctx, next) => {
    ctx.body = "11";
})

router.post("/upload", async (ctx, next) => {
    //单个文件
    const file = ctx.request.files.file;
    const reader = fs.createReadStream(file.path);
    let filePath = '/home/Nodejs/public/load'+ `/${file.name}`;    
//let filePath = path.join(__dirname, 'public/load') + `/${file.name}`;
    // 创造可写流
    const upStream = fs.createWriteStream(filePath);
    reader.pipe(upStream);
    ctx.body = "上传成功";
})

module.exports = router
