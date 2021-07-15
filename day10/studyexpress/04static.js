/**
 * 托管静态文件
 * 
 */

 const express = require("express");
 const app = express();

//  将 public 目录下的图片、CSS 文件、JavaScript 文件对外开放访问

// 可以指向多个目录
// app.use(express.static("public"));

 // 虚拟路径
 app.use('/static', express.static('public'));

 app.listen(3000, () => console.log("server success"));

//  访问http://localhost:3000/hello.html

