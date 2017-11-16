var request = require('request');
var Url = require('../database/urlTable');
//var Promise = require("bluebird");
var Crawler = require('crawler');
var n = 0;
var c = new Crawler({
    rateLimit:0,
    method: 'HEAD',
    retries: 10,
    maxConnections: 500,
    callback: function (err, res, done) {
        if(err){
             console.log(err);
        }
        console.log(n++);
        done();
    }
});

function demo() {
    //var d1 = new Date();
    Url.getUrl(1, function (resurlt) {
         resurlt.forEach(function (item) {
            //console.log(item);
            c.queue(item['Url']);
        });
    });
}

demo();