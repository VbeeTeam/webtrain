/** npm install express art-template body-parser --save
 * 图书管理系统-入口文件
 * 
 */

const express = require("express");
// const template = require("art-template");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const router = require("./router.js");


//设置模板引擎 npm install express-art-template --save 安装兼容
//设置模板路径
app.set('views', path.join(__dirname, 'views'));
//设置 art 模板后缀
app.set('view engine', 'html');
//使express兼容art-template模板引擎
app.engine('html', require("express-art-template"));

//挂载静态资源中间件
app.use(express.static('public'));

//挂载参数处理中间件(post)
app.use(bodyParser.urlencoded({extended: false}));
//处理json格式的参数
// app.use(bodyParser.json());

//启动服务器功能
//配置路由
app.use(router);
//监听端口
app.listen(3000, () => console.log("success server"));
