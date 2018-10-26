var KoaRouter = require("koa-router");
var router =  new KoaRouter();

var Good = require("../controller/goods.js");

router.get('/addGood', Good.addGoods)
    .get('/findGoods', Good.findGoods)

module.exports = router;