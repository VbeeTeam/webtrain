/**
 * 中间件：就是处理过程中的一个环节
 * next(): 作用就是把请求传递到下一个中间件（函数）
 */
const express = require("express");
const app = express();
const port = 3000;

// app.get("/user", (req, res, next) => {
//     console.log("访问了user1");
//     // next();
// });
// app.get("/user", (req, res, next) => {
//     console.log("访问了user2");
//     // next();
// });
// app.get("/user", (req, res, next) => {
//     console.log("访问了user3");
//     // next();
// });

//---------------------------------------------

app.get("/abc", (req, res, next) => {
    console.log(1);
    // next();
}, (req, res) => {
    console.log(2);
    res.send("abc");
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
