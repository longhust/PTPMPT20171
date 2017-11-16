var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "scappy"
});
var LogRequest = {
    insertLogRequest: function (data) {
        var sql = "INSERT INTO log_request(Url_Id,Http_Code,Date_crawl,Time_request,Ip_local,Ip_website) VALUES ?";
        con.query(sql, [data], function (err, result) {
            //if (err) throw err;
            //console.log("Numbers of records inserted:" + result.affectedRows);
        });
        con.end();
    },
    getLogRequest: function (callback) {
        //var listDomain;
        //con.connect();
        var sql = "SELECT * FROM log_request"
        con.query(sql, function (err, result, fields) {
            //if (err) throw err;
            con.end();
            callback(result);
        });
    }
}