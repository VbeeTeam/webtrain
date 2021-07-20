/**
 * loader => 1.下载 2.使用（配置loader）
 * 
 * plugins => 1.下载 2.引入 3.使用
 */
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [ 
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                 test: /\.scss$/,
                 use: [ 
                     'style-loader',
                     'css-loader',
                     'sass-loader'
                 ]
            }

        ]
    },
    //插件的配置
    plugins: [
        //详细plugins的配置
        //html-webpack-plugin 
        //功能默认创建一个空的HTML，自动输入打包输出所有资源（js/css）
        //需要有html结构
        new htmlWebpackPlugin({
            //复制 ./src/index.html 文件，并且自动引入打包输出所有资源（JS、CSS）
            template: "./src/index.html"
        })
    ],
    //模式
    mode: "development", //开发模式，一般用开发，能够看懂
    // mode: "production" //生产模式
}