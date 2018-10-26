const KoaRouter = require("koa-router");

const router = new KoaRouter();

router.get('/addUser', async (ctx, next) => {
    ctx.body  = "xuegg";
});

router.post('/findUser', async (ctx, next) => {
    ctx.body = "11";
})

module.exports = router