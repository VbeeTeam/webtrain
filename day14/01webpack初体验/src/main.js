/**
 * 项目的入口js文件
 */

//导入jq
//import *** from ***   ES6中导入模块的方式
//由于ES6代码太高级了，浏览器解析不了
import $ from "jquery";

$(function() {
    $("li:odd").css("backgroundColor", "red");
    $("li:even").css("backgroundColor", "pink");
})


// 经过刚才的演示，Webpack 可以做什么事情？？？
// 1. webpack 能够处理 JS 文件的互相依赖关系；
// 2. webpack 能够处理JS的兼容问题，把 高级的、浏览器不是别的语法，转为 低级的，浏览器能正常识别的语法
// 3. webpack 能够压缩JS文件

// 刚才运行的命令格式：    webpack  要打包的文件的路径 -o 打包好的输出文件的路径 环境
// webpack ./src/main.js -o ./dist/build.js --mode=development 开发环境
// webpack 会以./src/main.js为入口文件开始打包，打包输入到./dist/build.js，整体的打包环境是开发环境

// webpack ./src/main.js -o ./dist/build.js --mode=production  生产环境
// webpack 会以./src/main.js为入口文件开始打包，打包输入到./dist/build.js，整体的打包环境是生产环境