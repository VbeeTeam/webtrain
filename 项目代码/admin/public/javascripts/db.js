/**
 * 操作数据库api
 * 
 */
const mysql = require("mysql");

module.exports = (sql, data, callback) => {

    //创建数据库连接
    var connection = mysql.createConnection({
        host: 'localhost', //数据库所在的服务器或IP
        user: 'root', //登录数据库的账号
        password: '123456', //登录数据库的密码
        database: 'customer' //数据库的名称
    });

    //连接数据库
    connection.connect();

    //操作数据库 验证数据库是否正常（results[0].solution = 2）ok
    connection.query(sql, data, function (error, results, fields) {
        if (error) {
            console.log(error)
        };
        callback(results);
    });

    //关闭数据
    connection.end();
}