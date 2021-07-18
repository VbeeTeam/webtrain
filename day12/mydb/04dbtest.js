/**
 * 测试通用api
 */
const db = require("./03db");

//插入
let sql = 'insert into student set ?'
let data = {
    name: "测试",
    sex: "男",
    date: new Date()
}

db.base(sql, data, (result) => {
    console.log(result);
})