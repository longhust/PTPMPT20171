var Crawler = require('crawler');
var bloomfilter = require('bloomfilter');
var formatDate = require("date-format");
var Url = require('../database/urlTable');
var Promise= require('bluebird');

var regUrl = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;

function Scappy(domain, id) {
    var seft = this;
    seft.init(domain, id);
}
Scappy.prototype.init = function (domain, id) {
    var seft = this;
    seft.bloom = new bloomfilter.BloomFilter(64 * 256, 16);
    seft.domain = domain;
    seft.id = id;
    Url.getUrl(seft.id, function (result) {
        result.forEach(function (element) {
            seft.bloom.add(element['Url']);
        });
    })
}

Scappy.prototype.crawl = function crawl() {
    var seft = this;
    var n = 0;
    var crawler = new Crawler({
        rateLimit: 10,
        retries: 5,
        timeout:1000,
        //queueSize:1000,
        maxConnections: 200,
        callback: function (error, res, done) {
            var urlPartent = res.request.uri.href;
            console.log(urlPartent);
            const date = formatDate.asString('hh:mm:ss-dd/MM/yyyy', new Date());
           
            if (error) {
                console.log(error);
            } else {
                if (res.$ != undefined) {
                    var $ = res.$
                    // $ is Cheerio by default
                    // a lean implementation of core jQuery designed specifically for the server
                    var listAElement = $(res.body).find('a');
                    extrUrl(listAElement,date);
                }
            }
            done();
            
        }
    });

    function extrUrl(listAElement,date){
        var promise= new Promise(function(fullfill,reject){
            var k=0;
            var data = [];
            for (var i = 0; i < listAElement.length; i++) {
                var url = listAElement[i]['attribs']['href'];
                if (url != undefined) {
                    if (url.match(regUrl)) {
                        if (url.match(/^\//)) {
                            url = seft.domain + url
                        }
                        // console.log(domain)
                        if (url.match('^' + seft.domain)) {
                            if (seft.bloom.test(url)) {
                                //console.log('Da ton tai' + url)
                            } else {
                                data.push([seft.id, url, date, '0']);
                                seft.bloom.add(url);
                                k++;                            
                                if (k > 10) {
                                    break;
                                }
                            }
                        }
                    }
                }
            };
            fullfill(data);
        });
        promise.then(function(data){
            reCrawl(data);
            if(data.length!=0){
                Url.insertUrl(data,function(){
                    console.log("inserted!")
                });
            }
        });
        function reCrawl(data) {
            for (var i = 0; i < data.length; i++) {
                crawler.queue(data[i][1]);
            }
        }     
    }
    crawler.queue(seft.domain);
}

module.exports = Scappy;