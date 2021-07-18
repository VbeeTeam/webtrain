/**
 * 操作数据库
 */
const mysql = require('mysql');
//创建数据库连接
const connection = mysql.createConnection({
    host: 'localhost', //数据库所在的服务器或IP
    user: 'root', //登录数据库账号
    password: '123456', //登录数据库密码
    database: 'demo' //数据库名称
});
//执行连接操作
connection.connect();
//操作数据库 （验证数据库是否正常 结果为2数据库正常）
//select count(*) as total from demo
//SELECT 1 + 1 AS solution
connection.query('select count(*) as total from student', function (error, results, fields) {
    if (error) {
        console.log(error);
    };
    //console.log('The solution is: ', results[0].solution);
    console.log('表student中有: ', results[0].total + '条数据');
});
//关闭数据库
connection.end();