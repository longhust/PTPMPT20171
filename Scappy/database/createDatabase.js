var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE IF NOT EXISTS scappy CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci'", function (err, result) {
        if (err) throw err;
        console.log("Database created");
        con.end();
    });

});