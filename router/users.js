var KoaRouter = require("koa-router");
var router =  new KoaRouter();

var User = require("../controller/user.js");

router.get('/addUser', User.addUser);

module.exports = router;