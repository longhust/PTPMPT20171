var request = require('request');
var Crawler = require('crawler');
var Promise = require("bluebird");

function RequestHeader(domain_id, data) {
    var seft = this;
    this.domain_id = domain_id;
    this.data = data;
    this.dataCrawl = [];
    this.finished = false;
}
RequestHeader.prototype.crawData = async function () {
    var seft = this;
    let n = seft.data.length;
    return new Promise(function (fullfill, reject) {
        var crawl = new Crawler({
            rateLimit: 1,
            method: 'HEAD',
            timeout:5000,
            retries:1,
            maxConnections: 100,
            callback: function (err, res, done) {
                let k = res.options.k;
                let url_id = res.options.url_id;
                if (err) {
                    seft.dataCrawl.push({url_id:url_id,error:true});
                } else {
                    console.log(res.timming);
                    let respones = {
                        url_id: url_id,
                        stastusCode: res.statusCode,
                        date: res.headers.date,
                        error:false
                    }
                    seft.dataCrawl.push(respones);
                    //console.log(seft.dataCrawl.length);
                    if (k == n - 1) {
                        fullfill(seft.dataCrawl)
                    }
                }

                done();
            }
        });
        for (var i = 0; i < n; i++) {
            crawl.queue({
                uri: seft.data[i]["Url"],
                url_id: seft.data[i]["Url_Id"],
                k: i
            });
        }
    })

}
RequestHeader.prototype.start = async function (callback) {
    var seft = this;
    var data = await seft.crawData();
    //console.log(data);
    callback(seft.dataCrawl);
}
module.exports = RequestHeader;
var demo= new RequestHeader(1,[{Url_Id:'1', Url:'http://dantri.com.vn'}]);
demo.start()