var express = require('express');
var router = express.Router();

router.delete('/', (req, res) => {
  let info = req.body;
  console.log(info);
  if (info.username && info.password) {
      res.json({
          code: 200,
          message: "登录成功"
      });
  }else{
      res.json({
          code: 201,
          message: "请输入用户名和密码"
      })
  }
});

module.exports = router;
