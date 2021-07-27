var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {

   
    let data = req.body;
    if(data.username && data.password){
        res.json({
            code: 200,
            message: "登录成功",
            token: "ok"
        })
    }else{
        res.json({
            code: 201,
            message: "登录失败"
        })
    }
 
});

module.exports = router;
