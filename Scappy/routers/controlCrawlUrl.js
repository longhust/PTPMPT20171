var Scappy = require('../model/crawlUrl');
var Domain = require('../database/domainTable');
var Url = require('../database/urlTable');
var Promise = require("bluebird");

function CrawlUrl() {
    Domain.getDomain(function (result) {
        result.forEach(function (element) {
            var promise = new Promise(function (fullfill, reject) {
                var scappy = new Scappy(element["Domain"], element["Domain_Id"]);
                fullfill(scappy);
            })
            promise.then((scappy) => {
                scappy.crawl();
            });

        });
    })
}

module.exports= CrawlUrl;