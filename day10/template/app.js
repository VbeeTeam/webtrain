/**
 * 模板引擎的使用
 * art-template 官网：http://aui.github.io/art-template/
 */
const express = require("express");
const app = express();
const template = require("art-template");
const path = require("path");

//设置模板路径
app.set('views',path.join(__dirname, 'views'));

//设置 art 模板后缀
app.set('view engine', 'html');

//使express兼容art-template模板引擎
app.engine('html', require("express-art-template"));

app.get("/list", (req, res) => {
    //基本使用
    //  let html = template(__dirname + "/views/mytpl.html", {
    //      user: {
    //          name: "zhangsan"
    //      }
    //  });
    //  res.send(html);

    // 水果列表
    /* <ul>
        <li>apple</li>
        <li>banana</li>
        <li>orange</li> 橙子
    </ul> */

    //列表使用模板渲染
    // let html = template(__dirname + "/views/list.html", {
    //     list: ["apple", "banana", "orange"]
    // })

    //渲染调用方法
    // let tpl = `
    //     <ul>
    //         {{each list}}
    //             <li>{{$index}} {{$value}}</li>
    //         {{/each}}
    //     </ul>`;

    // let com = template.compile(tpl);
    // let html = com({
    //     list: ["apple", "banana", "orange"]
    // })
   
    // ---------------------------------------------

    // let html = template.render(tpl, {
    //     list: ["apple", "banana", "orange"]
    // });
    
    // res.send(html);

    // let data = {
    //     list: ["apple", "banana", "orange"]
    // } 
    //参数一：模板名称
    //参数二：渲染的数据
    // res.render("list",data);
});

app.listen(3000, () => console.log("success server"));