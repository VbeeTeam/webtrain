/**
 * 静态服务器
 * 
 */
const express = require("express");
const app = express();
const port = 3000;

//get方法  根路径 发送给前端数据

app.get("/", (req, res) => res.send("hello world!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

//静态托管文件
