/**
 * 路由（根据请求路径和请求方式进行路径分发处理）
 * 
 */

const express = require("express");
const app = express();


//直接使用use分发可以处理所有路由的请求
// app.use((req,res) => res.send("ok"));

//基本的路由处理方法
app.get("/", (req, res) => {

    res.send("get data");
})
app.post("/", (req, res) => {

    res.send("post data");
})
app.delete("/", (req, res) => {

    res.send("delete data");
})
app.put("/", (req, res) => {

    res.send("put data");
})

//利用postman测试

app.listen(3000, () => console.log("server success"));