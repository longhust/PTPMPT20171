var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "scappy"
});


con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

    //create table web_domains

    var domain="CREATE TABLE domain(" +
        "Domain_Id int NOT NULL AUTO_INCREMENT," +
        "Domain varchar(255) NOT NULL," +
        "Date varchar(255)," +
        "PRIMARY KEY (Domain_Id) )";
    con.query(domain, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });

    //create table web_urls
    var urls="CREATE TABLE urls(" +
        "Url_Id int NOT NULL AUTO_INCREMENT," +
        "Domain_Id int NOT NULL," +
        "Url varchar(255) NOT NULL," +
        "Date varchar(255)," +
        "Status varchar(255)," +
        "PRIMARY KEY (Url_Id)," +
        "FOREIGN KEY(Domain_Id) REFERENCES domain(Domain_Id))"
    con.query(urls, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
    //create table log resurlt
    var log_request="CREATE TABLE log_request(" +
        "Request_Id int NOT NULL AUTO_INCREMENT,"+
        "Url_Id int NOT NULL," +
        "Http_Code text," +
        "Date_crawl varchar(255)," +
        "Time_request varchar(255),"+
        "Ip_local varchar(255) Not Null,"+
        "Ip_website varchar(255) Not Null,"+
        "PRIMARY KEY (Request_Id)," +
        "FOREIGN KEY (Url_Id) REFERENCES urls(Url_Id) )"
    con.query(log_request, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
});