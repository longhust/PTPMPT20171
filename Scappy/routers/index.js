var express=require('express');
var router=express.Router();
var PostRequest= require('../model/PostRequest');
var CrawlUrl=require('./controlCrawlUrl');
router.get("/listdomain",function(req,res) {

});

router.get("/request", function (req, res) {
    PostRequest();
    res.send("Dang tien hanh request...");
});
router.get("/crawlUrl",function (req,res) {
    CrawlUrl();
    res.send("Đang tiến hành quét url...")
});

router.get("/statistical", function(req,res) {

});

module.exports= router;
