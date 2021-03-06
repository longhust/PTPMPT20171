var mysql = require('mysql');
var formatDate = require('date-format');
const date=formatDate.asString('hh:mm:ss-dd/MM/yyyy',new  Date());
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "scappy"
});
var listDomain = [
    ['http://www.24h.com.vn',date],
    ['http://dantri.com.vn',date],
    ['http://kenh14.vn',date],
    ['http://www.yan.vn',date],
    ['http://vietnamnet.vn',date],
    ['https://www.baomoi.com',date],
    ['http://vov.vn',date],
    ['http://thanhnien.vn',date],
    ['https://vtc.vn',date],
    ['http://kienthuc.net.vn/',date],
    ['http://motthegioi.vn',date],
    ['http://danviet.vn',date],
    ['https://saostar.vn',date],
    ['https://www.tienphong.vn',date],
    ['https://laodong.vn',date],
    ['http://anninhthudo.vn',date],
    ['https://www.vietnamplus.vn',date],
    ['http://hanoimoi.com.vn/',date],
    ['http://nongnghiep.vn',date],
    ['https://news.zing.vn',date],
    ['http://bnews.vn',date],
    ['http://cand.com.vn',date],
    ['https://baotintuc.vn',date],
    ['http://www.nguoiduatin.vn',date],
    ['http://khampha.vn',date],
    ['http://enternews.vn',date],
    ['http://tinnhanhchungkhoan.vn',date],
    ['http://www.giadinhmoi.vn',date],
    ['http://bizlive.vn',date],
    ['http://kinhtedothi.vn',date],
    ['http://www.baonghean.vn',date],
    ['http://doisongvietnam.vn',date],
    ['http://infonet.vn',date],
    ['http://congly.vn',date],
    ['http://vtv.vn',date],
    ['https://cafeauto.vn',date],
    ['http://khoahocphattrien.vn',date],
    ['http://tapchimattran.vn',date],
    ['http://www.phunutoday.vn',date],
    ['http://toquoc.vn',date],
    ['http://kienthuc.net.vn',date],
    ['http://www.baogiaothong.vn',date],
    ['http://congan.com.vn',date],
    ['http://vnmedia.vn',date],
    ['http://2sao.vn',date],
    ['http://baodauthau.vn',date],
    ['http://cadn.com.vn',date],
    ['http://baotainguyenmoitruong.vn',date],
    ['http://www.baoxaydung.com.vn',date],
    ['http://baophapluat.vn',date],
    ['http://xedoisong.vn',date],
    ['http://www.doisongphapluat.com',date],
    ['http://nld.com.vn',date],
    ['http://antt.vn',date],
    ['http://thoibaonganhang.vn',date],
    ['http://baodansinh.vn',date], 
    ['http://daidoanket.vn',date],
    ['http://viettimes.vn',date],
    ['http://thethaovanhoa.vn',date],
    ['http://hanoimoi.com.',date],
    ['http://www.baohaiquan.vn',date],
    ['http://baodatviet.vn',date],
    ['http://ngaynay.vn',date],
    ['http://bongda24h.vn',date],
    ['http://nhandan.com.vn',date],
    ['http://tiin.vn',date],
    ['http://eva.vn',date],
    ['http://khoeplus24h.vn',date],
    ['https://ione.vnexpress.net',date],
    ['https://ngoisao.net',date],
    ['http://www.sggp.org',date],
    ['http://baochinhphu.vn',date],
    ['http://vnreview.vn',date],
    ['http://vietq.vn',date],
    ['http://nghenhinvietnam.vn',date],
    ['http://xahoithongtin.com.vn',date],
    ['http://ictnews.vn',date],
    ['http://phunusuckhoe.vn',date],
    ['http://phununews.vn',date],
    ['http://www.giadinhvietnam.com',date],
    ['http://emdep.vn',date],
    ['http://www.tapchigiaothong.vn',date],
    ['http://xe.baogiaothong.vn',date],
    ['http://autonet.com.vn',date],
    ['http://phapluatxahoi.vn',date],
    ['http://tieudungplus.vn',date],
    ['http://vietnamfinance.vn',date],
    ['https://cafeland.vn',date],
    ['http://laodongthudo.vn',date],
    ['http://thanhhoa.tintuc.vn',date],
    ['http://thanhhoaplus.vn',date],
    ['http://baothanhhoa.vn',date],
    ['http://www.bongda.com.vn',date],
    ['http://bongdaplus.vn',date],
    ['http://www.tinthethao.com.vn',date],
    ['https://vnexpress.net',date],
    ['http://vea.gov.vn',date],
    ['http://tapchimoitruong.vn',date],
    ['http://dichvu.nioeh.org.vn',date],
    ['http://tuoitre.vn',date],
    ['https://moitruongviet.edu.vn',date],
    ['http://www.thesaigontimes.vn',date],
    ['https://voer.edu.vn',date],
    ['http://sinhhocvietnam.com',date],
    ['http://www.yeumoitruong.vn',date],
    ['http://afamily.vn',date],
    ['http://www.tinmoitruong.vn',date],
    ['http://moitruong.com.vn',date],
    ['http://www.congnghemoitruong.info',date],
    ['http://www.tintuc.net',date],
    ['http://soha.vn',date],
    ['http://tintuconline.com.vn',date],
    ['https://www.tinmoi.vn',date],
    ['http://giadinh.net.vn',date],
    ['http://xahoi.com.vn',date],
    ['http://www.xaluan.com',date],
    ['https://www.tintucvietduc.net',date],
    ['https://vitalk.vn',date],
    ['http://bongdaso.com',date],
    ['http://vietbao.vn',date],
    ['http://www.kenh13.info',date],
    ['http://vneconomy.vn',date],
    ['http://cafef.vn',date],
    ['https://vn.yahoo.com',date],
    ['http://giaoduc.net.vn',date],
    ['http://sapa24h.com',date],
    ['http://www.tin247.com',date],
    ['http://songmoi.vn',date],
    ['http://www.muctim.com.vn',date],
    ['http://tapchigiadinh.com.vn',date],
    ['http://hoahoctro.vn',date],
    ['http://petrotimes.vn',date],
    ['http://docbao.vn',date],
    ['http://tiasang.com.vn',date]
];
var Domain = {
    insertDomain: function (data) {
        var sql = "INSERT INTO domain(Domain,Date) VALUES ?";
        con.query(sql, [data], function (err, result) {
            //if (err) throw err;
            console.log("Numbers of records inserted:" + result.affectedRows);
        });
        //con.end();
    },
    getDomain: function (callback) {
        //var listDomain;
        //con.connect();
        var sql = "SELECT Domain_Id,Domain FROM domain"
        con.query(sql, function (err, result, fields) {
            if (err)  console.log(err);
            callback(result);
        });
    }
}
//Domain.insertDomain(listDomain);
// Domain.getDomain(function(result){
//     console.log(result);
// })

module.exports= Domain;