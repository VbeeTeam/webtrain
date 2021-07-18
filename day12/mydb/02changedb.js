/**
 * 插入数据
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

// 新增
// let sql = 'insert into student set ?'
// let data = {
//     name: "王五",
//     sex: "男",
//     date: "2021-4-11"
// }

//修改
// let sql = 'update student set name=?, sex=?, date=? where id=?'
// let data = ['张三丰','女','2014-4-12',6]

//删除
// let sql = 'delete from student where id = ?'
// let data = [5]

//查询所有
// let sql = 'select * from student'
// let data = null
//查询单个
let sql = 'select * from student where id = ?'
let data = [1]

//操作数据库 
connection.query(sql, data, function (error, results, fields) {
    if (error) {
        console.log(error);
    };
    console.log(results);
});
//关闭数据库
connection.end();