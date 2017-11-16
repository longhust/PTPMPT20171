var express = require('express');
var router = express.Router();
var RequestHeader = require('../models/requestHeader');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/url', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/request', function (req, res, next) {
  var domain_id=req.body.domain_id,
      listUrl=req.body.list;
  //console.log(req.body);
  var crawl= new RequestHeader(domain_id,listUrl);
  crawl.start(function(result){
    res.json(result);
  })
 
});

module.exports = router;
