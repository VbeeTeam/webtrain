/**
 * 业务模块
 * 增删改查 (CRUD)
 */

const data = require("./data/data.json");

const path = require("path");
const fs = require("fs");

//登录信息
var login = null;

//自动生成图书id
let maxBookId = () =>{
    let arr = [];
    if(data.length == 0){
        arr.push(0);
    }else{
        data.forEach((item) => {
            arr.push(item.id);
        })
    }
    return Math.max.apply(null, arr);
}

//登录
exports.showLogin = (req, res) => {
    res.render("login", {})
}
//登录提交
exports.submitLogin = (req, res) => {
    console.log(1)
    let info = req.body;
    console.log(info);
    if(info.username && info.password){
        login = info;
        res.redirect("/index");  //路由重定向
    }else{
        res.send("login error");
    }
}

 //渲染列表
 exports.showIndex = (req, res) => {
     if(login){
        res.render("index", {list: data});
     }else{
        res.redirect("/");  //路由重定向
     }
 }

//跳转到添加图书页面
exports.toAdd = (req, res) => {
    if(login){
        res.render("add", {})
     }else{
        res.redirect("/");  //路由重定向
     }
}

//添加图书保存数据
exports.addBook = (req, res) => {
    //获取前端提交的参数
    let info = req.body;
    let book = {};
    for(let key in info){
        book[key] = info[key];
    }
    book.id = maxBookId() + 1;
    data.push(book);
    //把数据写入文件
    fs.writeFile(path.join(__dirname, "/data/data.json"), JSON.stringify(data), (err) => {
        if(err){
            res.send("server error");
        }
        //文件写入成功之后跳转到index.html
        res.redirect("/index");  //路由重定向
    })
}

//跳转到修改图书页面
exports.toEdit = (req, res) => {
    let id = req.query.id;
    let book = {};
    data.forEach((item) => {
        if(id == item.id) {
            book = item;
            return;
        }
    })
    if(login){
        res.render("edit", book);
     }else{
        res.redirect("/");  //路由重定向
     }
}

//修改图书提交
exports.editBook = (req, res) => {
    //获取前端提交的参数
    let info = req.body;
    console.log(info);
    data.forEach((item) => {
        if(info.id == item.id){
            for(let key in info){
                item[key] = info[key];
            }
            return;
        }
    })
    console.log(data);
    //把数据写入文件
    fs.writeFile(path.join(__dirname, "/data/data.json"), JSON.stringify(data), (err) => {
        if(err){
            res.send("server error");
        }
        //文件写入成功之后跳转到index.html
        res.redirect("/index");  //路由重定向
    })
}

//删除图书
exports.deleteBook = (req, res) => {
    let id = req.query.id;
    data.forEach((item, index) => {
        if(id == item.id) {
            data.splice(index, 1);
            return;
        }
    })
    //把数据写入文件
    fs.writeFile(path.join(__dirname, "/data/data.json"), JSON.stringify(data), (err) => {
        if(err){
            res.send("server error");
        }
        //文件写入成功之后跳转到index.html
        res.redirect("/index");  //路由重定向
    })
}

//查询图书
exports.searchBook = (req, res) => {
    let name = req.body.name;
    let book = [];
    if(name == ""){
        res.render("index", {list: data});
    }else{
        data.forEach((item) => {
            if(name == item.name) {
                book.push(item);
                return;
            }
        })
        res.render("index", {list: book});
    }
}