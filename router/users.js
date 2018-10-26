var KoaRouter = require("koa-router");
var router =  new KoaRouter();

var mongoose = require('mongoose');
var User = mongoose.model('User');

router.get('/addUser', async (ctx, next) => {
    var user = new User({
        username: "xuerenwei",
        nickname: "weigg",
        lastLogin: 2018-10-17
    })
    user.save(function(error) {
        if(error) {
            ctx.body="error";
            return next();
        }
    })
    
})

module.exports = router;