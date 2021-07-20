var express = require('express');
var router = express.Router();
const db = require("../public/javascripts/db")

router.get('/', (req, res) => {

    let sql = 'select * from book';
    db(sql, null, (result) => {
        console.log(result)
        if (result.length > 0) {
            res.json({
                code: 200,
                message: "获取成功",
                data: result
            });
        } else {
            res.json({
                code: 500,
                message: "服务器错误"
            })
        }
    })

});

module.exports = router;