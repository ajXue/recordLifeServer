var KoaRouter = require("koa-router");
var router =  new KoaRouter();
var Login = require("../controller/login");


router.get("/getWxInfo",Login.getWxInfo);

module.exports = router;
