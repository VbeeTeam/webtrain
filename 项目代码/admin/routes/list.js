var express = require('express');
var router = express.Router();

var db = require("../public/javascripts/db");

router.get('/', function (req, res, next) {

    // select * from info limit m,n
    //limit用于分页 m从第几个数据开始 n查找多少条数据
    var page = req.query.page || 1; //传过来的页码
    var size = req.query.size || 5; //传过来的条数
    var m = (parseInt(page) - 1) * size
    var total = 0;
    let sql = "select * from info"
    if (req.query.name && req.query.sex) {
        sql = sql + ` where name='${req.query.name}' and sex='${req.query.sex}'`
    } else if (req.query.name) {
        sql = sql + ` where name='${req.query.name}'`
    } else if (req.query.sex) {
        sql = sql + ` where sex='${req.query.sex}'`
    }

    db(sql, null, (result) => {
        total = result.length;
    })
    //分页查询
    sql = sql + ` limit ${m},${size}`
    setTimeout(() => {
        db(sql, null, (result) => {
            if (result.length > 0) {
                result.forEach((item) => {
                    item.age = item.age.toString()
                })
                res.json({
                    code: 200,
                    message: "获取成功",
                    data: result,
                    total: total
                })
            } else {
                res.json({
                    code: 201,
                    message: "暂无数据"
                })
            }
        });
    }, 300)

});

module.exports = router;