var express = require('express');
var router = express.Router();

var db = require("../public/javascripts/db");

router.post('/', function(req, res, next) {

    let sql = "insert into info set ?";
    let data = req.body;
    console.log(data)
    db(sql, data, (result) => {
        if(result.affectedRows == 1){
            res.json({
                code: 200,
                message: "添加成功"
            })
        }else{
            res.json({
                code: 500,
                message: "服务器错误"
            })
        }
    });
});

module.exports = router;
