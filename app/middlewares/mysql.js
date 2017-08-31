var wrapper = require('co-mysql'),
    co=require('co'),
    mysql = require('mysql');

var options = {
    host : 'rm-2ze2883bpa28prtmo.mysql.rds.aliyuncs.com',
    port : 3306 ,
    database : 'xhc',
    user: 'xhc_test',
    password : 'Xhc_test'
};
var pool = mysql.createPool(options),
    p = wrapper(pool);

co(function*() {
    var rows = yield p.query('SELECT * from zmk_test');
    console.log(rows);
});
