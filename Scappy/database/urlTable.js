var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "scappy"
});

var Url = {
    insertUrl: function (data,callback) {
        var sql = "INSERT INTO urls(Domain_Id,Url,Date,Status) VALUES ?";
        con.query(sql,[data], function (err, result) {
            if (err) console.log(err);
            //console.log("Numbers of records inserted:" + result.affectedRows);
        });
    },
    getUrl: function (id_domain,callback) {
        var listDomain;
        var sql = 'SELECT Url_Id,Url FROM urls WHERE Domain_Id=\''+id_domain+"\'";
        con.query(sql, function (err, result, fields) {
            if (err) console.log(err);
            callback(result);
        });
    },
    getUrlLimited: function (id_domain,limited,callback) {
        var listDomain;
        var sql = 'SELECT Url_Id,Url FROM urls WHERE Domain_Id=\''+id_domain+"\' LIMIT "+limited;
        con.query(sql, function (err, result, fields) {
            if (err) console.log(err);
            callback(result);
        });
    }
}
//Url.insertUrl(null);
// Url.getUrl(1,40,function(result){
//     console.log(result);
// });
// Url.getUrlLimited(1,10,function(data){
//     console.log(data);
// })
module.exports=Url;