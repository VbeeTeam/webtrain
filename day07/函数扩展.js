/**
 * 函数扩展
 * 1.参数默认值
 * 2.参数解构赋值
 * 3.rest函数
 * 4.扩展运算符
 */

 //原来的函数
 function test(params){
    let str = params || "hello";
    console.log(str);
 }
//  test();
 test('hi');

 //扩展函数 默认值
 function test2(param = 'hehe') {
    console.log(param);
 }
//  test2();
 test2('haha');

//参数解构赋值
// function test3({username='张三',age=12} = {}) {
//     console.log(username,age);
// }
function test3({username='张三',age=12} = {}) {
    console.log(username,age);
}
test3({username:'李思',age:15});

//rest参数（剩余参数）
function test4(a,...e) {
    console.log(e)
}
test4(1,2,3);

//扩展运算符 ...
function test5(a,b,c,d) {
    console.log(a + b + c + d);
}
// test5(1,2,3,4);
let arr = [1,2,3,4];
//test5.apply(null,arr); //apply方法重用 第一个参数是对象，第二个参数是数组
test5(...arr);

// 合并数组
let arr1 = [1,2,3];
let arr2 = [2,3,4];
let arr3 = [...arr1,...arr2];
console.log(arr3);


