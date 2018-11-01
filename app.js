"use strict";

const Koa = require("koa");
const router = require("./router/goods");
const bodyParser = require("koa-bodyparser");
const fs = require("fs");
const http = require("http");
const https = require("https");
const mongoose = require("mongoose");

const app = new Koa();
mongoose.connect("mongodb://127.0.0.1:27017/recordLife");

const db = mongoose.connection;
const enforceHttps = require("koa-sslify");

db.on("error", error => {
  console.log("连接数据库失败");
});

// Force HTTPS on all page
// app.use(enforceHttps());
// app.use(bodyParser());
//

// SSL options
 var options = {
   key: fs.readFileSync("/cert/1540481862542.key"),
   cert: fs.readFileSync("/cert/1540481862542.crt")
 };

// start the server
// http.createServer(app.callback()).listen(80);

app
  .use(require("./router/goods").routes())
  .use(require("./router/goods").allowedMethods())
  .use(require("./router/index").routes())
  .use(require("./router/index").allowedMethods())
  .use(require("./router/users").routes())
  .use(require("./router/users").allowedMethods())
  .use(require("./router/login").routes())
  .use(require("./router/login").allowedMethods())

// https 服务器启动
 https.createServer(options, app.callback()).listen(443);

//http 服务器启动
app.listen("3000", function(msg) {
  console.log("app is running at port 3000");
});
