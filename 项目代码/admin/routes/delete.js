var express = require('express');
var router = express.Router();

var db = require("../public/javascripts/db");

router.delete('/', function(req, res, next) {

    let sql = "delete from info where id = ?";
    let data = [req.body.id];
    db(sql, data, (result) => {
        if(result.affectedRows == 1){
            res.json({
                code: 200,
                message: "删除成功"
            })
        }else{
            res.json({
                code: 201,
                message: "删除失败"
            })
        }
    });
});

module.exports = router;
