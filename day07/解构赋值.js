/**
 * 变量的解构赋值
 */
// var a = 1;
// var b = 2;
// var c = 3;
//数组的解构赋值
// var [a,b,c] = [1,2,3];
// let [a,b,c] = [,123,]
// console.log(a,b,c);

//对象的解构赋值
// let {user,age} = {user: "张三", age: 22};
// console.log(user,age);
//起别名,原来的键名就无效了
let {user:name,age} = {user: "张三", age: 22};
console.log(name,age);

//字符串解构赋值
var [a,b,c,d,e] = "hello";
console.log(a,b,c,d,e);

let {length} = "hello";
console.log(length);

