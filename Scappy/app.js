var express = require("express");
var request = require("request");
var app = express();
var cheerio = require("cheerio");
var user= require('./routers/user');
var index=require('./routers/index');
var port = process.env.PORT || 1337;
app.use('/',index);
app.use('/user',user);
// doc thong tin nguoi dung
var cookieParser = require('cookie-parser');
app.use(cookieParser())

app.set("view engine", "ejs");
app.set("views", "./views");

// middleware cho phep tai file public
app.use("/assets", express.static(__dirname+"/public"));

app.get("", function (req, res) {
    res.send("<link href='assets/style.css' rel='stylesheet' type='text/css'/>" +
        "<h1>Hello Express</h1>");
});


app.listen(port, function () {
    console.log("Server created port:", port);
});