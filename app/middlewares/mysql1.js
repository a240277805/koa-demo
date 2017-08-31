var mysql  = require('mysql');  //调用MySQL模块

//创建一个connection
var connection = mysql.createConnection({
    host : 'rm-2ze2883bpa28prtmo.mysql.rds.aliyuncs.com',
    port : 3306 ,
    database : 'xhc',
    user: 'xhc_test',
    password : 'Xhc_test'                 //端口号
});
//创建一个connection
connection.connect(function(err){
    if(err){
        console.log('[query] - :'+err);
        return;
    }
    console.log('[connection connect]  succeed!');
});
//执行SQL语句
connection.query('select * from zmk_test', function(err, rows, fields) {
    if (err) {
        console.log('[query] - :'+err);
        return;
    }
    console.log('The solution is: ', rows);
});
//关闭connection
connection.end(function(err){
    if(err){
        return;
    }
    console.log('[connection end] succeed!');
});