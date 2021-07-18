/**
 * 路由模块
 * 
 */

const express = require("express");
const router = express.Router();
const service = require("./service.js");

//登录页路由
router.get("/", service.showLogin);
//提交登录信息
router.post("/loginSubmit", service.submitLogin);

//渲染列表
router.get("/index", service.showIndex);

//添加图书(跳转到添加图书的页面)
router.get("/toAdd", service.toAdd);

//添加图书（提交表单）
router.post("/addBook", service.addBook);

//跳转到修改图书的页面
router.get("/toEdit", service.toEdit);

//修改图书（提交表单）
router.post("/editBook", service.editBook);

//删除图书
router.get("/delete", service.deleteBook);

//查询图书
router.post("/searchBook", service.searchBook);


module.exports = router;

