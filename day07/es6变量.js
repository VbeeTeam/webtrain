/**
 * let 、const
 * let
 * 1. 声明的变量不存在预解析
 * 2. 声明的变量不允许重复
 * 3. 块级作用域:块内定义的变量，在外部不可以访问
 */
console.log(count);
var count = 123;
// let count =123;
// let count = 234;

{
    var flag = 111;
    // let flag = 111;
}
console.log(flag);

// for(let i=0; i<3; i++){
//     //for循环括号中声明的变量只能在循环体中使用
//     console.log(i);
// }
// console.log(i);

// ====================
/**
 * const用来声明常量
 * const声明的常量不允许重新赋值
 */
const n = 1;
n=2;
console.log(n);