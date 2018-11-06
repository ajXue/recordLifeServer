var KoaRouter = require("koa-router");
var router =  new KoaRouter();
var Login = require("../controller/login");
var DecodePhone = require("../controller/login");


router.get("/getWxInfo",Login.getWxInfo);
router.get("/getWxPhone",Login.getWxPhone);

module.exports = router;
