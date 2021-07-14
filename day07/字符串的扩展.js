/**
 * 字符串的扩展
 * includes(参数一，参数二)  
 * 判断字符串中是否包含指定的字符（有：true，无：false）
 * 参数一：匹配的字符
 * 参数二：从第几个开始匹配
 * ============================
 * startsWith(参数) 
 * 判断字符串是否以特定的字符开始
 * 参数：匹配的字符
 * ============================
 * endsWith(参数)
 * 判断字符串是否以特定的字符结束
 * 参数：匹配的字符
 * 
 * 模板字符串
 * 
 */

var str = "hello world";
console.log(str.includes('world', 7));

console.log(str.startsWith('hello'));

console.log(str.endsWith('d'));

let obj = {
    username: "张三",
    age: 22,
    sex: "男"
}

let tag = '<div><span>' + obj.username + '</span><span>' + 
obj.age + '</span><span>' + obj.sex + '</span></div>';

//``反引号 表示模板，模板中的内容可以有格式，通过${}填充数据
//计算、函数调用

let fn = function(info) {
    return info;
}

let tag2 = `
    <div>
        <span>${obj.username}</span>
        <span>${obj.age}</span>
        <span>${obj.sex}</span>
        <span>${1 + 1}</span>
        <span>${fn('hello')}</span>
    </div>`

console.log(tag2);