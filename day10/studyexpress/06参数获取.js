/**
 * 解决post参数传递问题
 * 
 * 安装中间件body-parser
 * 
 */
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//挂载静态资源中间件
app.use(express.static('public'));

//挂载参数处理中间件(post)
//extended: false：表示使用系统模块querystring来处理
// extended: true：表示使用第三方模块qs来处理
app.use(bodyParser.urlencoded({extended: false}));

//get参数获取

// app.get("/login", (req,res) => {
//     let data = req.query;
//     console.log(data);
//     res.send("ok");
// });

//post参数获取
// app.post("/login", (req,res) => {
//     let data = req.body;
//     console.log(data);
//     if(data.username && data.password){
//         res.send("登录成功");
//     }else{
//         res.send("登录失败");
//     }
// });

//put方法
// app.put("/login", (req,res) => {
//     let data = req.body;
//     console.log(data);
//     if(data.username && data.password){
//         res.send("登录成功");
//     }else{
//         res.send("登录失败");
//     }
// });
//delete
// app.delete("/login", (req,res) => {
//     let data = req.body;
//     console.log(data);
//     if(data.username && data.password){
//         res.send("登录成功");
//     }else{
//         res.send("登录失败");
//     }
// });

app.listen(3000, () => {
    console.log("server success");
})