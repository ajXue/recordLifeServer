const KoaRouter = require("koa-router");

const router = new KoaRouter();

router.get('/addUser', async (ctx, next) => {
    ctx.body  = "xuegg";
});

router.post('/findUser', async (ctx, next) => {
    ctx.body = "11";
})

router.get("/upload", async (ctx, next) => {
    console.log(ctx);
    ctx.body = "上传图片"
})

module.exports = router
