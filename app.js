"use strict";

const Koa = require("koa");
const router = require("./router/goods");
const koaBody = require("koa-body");
const koaStatic = require("koa-static");
const bodyParser = require("koa-bodyparser");
const path = require("path");
const fs = require("fs");
const http = require("http");
const https = require("https");
const mongoose = require("mongoose");

const app = new Koa();
mongoose.connect("mongodb://127.0.0.1:27017/recordLife");

// test
const db = mongoose.connection;
const enforceHttps = require("koa-sslify");

db.on("error", error => {
  console.log("连接数据库失败");
});

var staticServer = koaStatic(path.join(__dirname) + "/public/");
console.log(path.join(__dirname, "/public/"));
// Force HTTPS on all page
// app.use(enforceHttps());
// app.use(bodyParser());
//
app
  .use(
    koaBody({
      multipart: true,
      formidable: {
        maxFileSize: 2000 * 1024 * 1024
      }
    })
  )
  .use(staticServer);

// SSL options
var options = {
  key: fs.readFileSync("/cert/1540481862542.key"),
  cert: fs.readFileSync("/cert/1540481862542.crt")
};

// start the server
//http.createServer(app.callback()).listen(80);
app
  .use(require("./router/goods").routes())
  .use(require("./router/goods").allowedMethods())
  .use(require("./router/index").routes())
  .use(require("./router/index").allowedMethods())
  .use(require("./router/users").routes())
  .use(require("./router/users").allowedMethods())
  .use(require("./router/login").routes())
  .use(require("./router/login").allowedMethods());

// https 服务器启动
https.createServer(options, app.callback()).listen(443);

//http 服务器启动
app.listen("3000", function(msg) {
  console.log("app is running at port 3000");
});
