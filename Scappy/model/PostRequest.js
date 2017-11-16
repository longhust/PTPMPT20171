var Url = require('../database/urlTable');
var Domain = require('../database/domainTable');
var request = require('request');
var numberRequest = 0
var server = [
    'http://127.0.0.1:3000',
    'http://127.0.0.1:3001',
    'http://192.168.0.107:3000',
]
var serverAlive = [];
function PostRequest() {
    //checkServerAlive();
    Domain.getDomain((listDomain) => {
        //var n = serverAlive.length+1;
        //console.log(n);
        listDomain.forEach ((element)=> {
            //var k=0;
            //let jobServer = serverAlive[k % n];
            //console.log(element.Domain_Id);
            Url.getUrlLimited(element.Domain_Id, 50, (listUrl) => {
                //console.log(jobServer);
                request.post({
                    url: 'http://192.168.0.107:3002/request',
                    json: {
                        domain_id: element.Domain_Id,
                        list: listUrl
                    },
                },
                    function optionalCallback(err, res, body) {
                        if (err) {

                        } else {
                            //console.log(body);
                            numberRequest += body.length;
                            console.log("Số lượt request thành công là :", numberRequest);
                            
                        }
                    }
                )
            });
        });
    });
}
function checkServerAlive() {
    server.forEach(element => {
        request.post({
            url: element,
        },
            function optionalCallback(err, res, body) {
                if (err) console.log("server " + element + " da chet");
                else {
                    serverAlive.push(element);
                }
            }
        )
    });
}
module.exports= PostRequest;