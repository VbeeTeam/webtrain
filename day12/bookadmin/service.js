/**
 * 业务模块
 * 增删改查 (CRUD)
 */

const data = require("./data/data.json");

const path = require("path");
const fs = require("fs");

const db = require("./db");

//登录信息
var login = null;

//登录
exports.showLogin = (req, res) => {
    res.render("login", {})
}
//登录提交
exports.submitLogin = (req, res) => {
    let info = req.body;
    if (info.username && info.password) {
        login = info;
        res.redirect("/index"); //路由重定向
    } else {
        res.send("login error");
    }
}

//渲染列表
exports.showIndex = (req, res) => {
    if (login) {
        let sql = 'select * from bookadmin';
        db.base(sql, null, (result) => {
            res.render("index", {
                list: result
            });
        })
    } else {
        res.redirect("/"); //路由重定向
    }
}

//跳转到添加图书页面
exports.toAdd = (req, res) => {
    if (login) {
        res.render("add", {})
    } else {
        res.redirect("/"); //路由重定向
    }
}

//添加图书保存数据
exports.addBook = (req, res) => {
    //获取前端提交的参数
    let info = req.body;
    let book = {};
    for (let key in info) {
        book[key] = info[key];
    }

    let sql = 'insert into bookadmin set ?';
    db.base(sql, book, (result) => {
        if (result.affectedRows == 1) {
            //文件写入成功之后跳转到index.html
            res.redirect("/index"); //路由重定向
        }
    })

}

//跳转到修改图书页面
exports.toEdit = (req, res) => {
    let id = req.query.id;
    console.log(id);
    let sql = 'select * from bookadmin where id=?';
    let data = [id];
    db.base(sql, data, (result) => {
        if (login) {
            res.render("edit", result[0]);
        } else {
            res.redirect("/");
        }
    })
   
}

//修改图书提交
exports.editBook = (req, res) => {
    //获取前端提交的参数
    let info = req.body;
    console.log(info)
    let sql = 'update bookadmin set name=?, author=?, category=?, desc=? where id=?';
    let data = [info.name, info.author, info.category, info.desc, 3];
    db.base(sql, data, (result) => {
        if(result.affectedRows == 1){
            res.redirect("/index"); //路由重定向
        }
    })

}

//删除图书
exports.deleteBook = (req, res) => {
    let id = req.query.id;

    let sql = 'delete from bookadmin where id=?';
    let data = [id];
    db.base(sql, data, (result) => {
        if (result.affectedRows == 1) {
            res.redirect("/index"); //路由重定向
        }
    })
}

//查询图书
exports.searchBook = (req, res) => {
    let name = req.body.name;
    
    let sql = 'select * from bookadmin where name = ?';
    let data = [name];
    db.base(sql, data, (result) => {
        console.log(result[0])
        res.render("index", {
            list: result
        });
    })
}