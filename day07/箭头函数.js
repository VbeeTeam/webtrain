/**
 * 箭头函数
 */

function test() {
    console.log('test：','hello');
}

//单个语句
let test2 = () => console.log('test2：', 'hello');

test2();

//多个语句必须用花括号包住
let test3 = () => {
    let a = 123
    console.log(a);
    console.log('test3：','hello');
}

test3();

//循环数组
let arr = [1, 2, 3, 4];

arr.forEach((item, index) => {
    console.log(item, index);
})

//优化代码的长度，也可以使代码读起来更加好看，增加可读
//箭头函数注意事项：
//1.函数体内的this对象就是定义时所在的对象，而不是使用时所在的对象
// var o = {
//     x: 1,
//     func: function () { console.log(this.x) },
//     test4: function () {
//         console.log(this);
//         setTimeout(function () {
//             this.func();
//         }, 100);
//     }
// };

var o = {
    x: 1,
    func: function () { console.log('test4：',this.x) },
    test4: function () {
        setTimeout(() => { this.func() }, 100);
    }
};
o.test4();

//2.不可以当作构造函数。也就是说，不可以使用new命令，否则会抛出一个错误
function test5() {
    this.num = 123;
}
// let test5 = () => this.num = 123;
let a =  new test5();
console.log('test5', a.num);


//3.不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用rest参数代替

// function test6(a,b,c,d) {
//     console.log('test6：',arguments);
// }

// let test6 = (a,b,c,d) => console.log('test6：',arguments);
let test6 = (...param) => console.log('test6：',param);

test6(1,2,3,4,5);







