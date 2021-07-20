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
                test: /\.less$/,
                use: [ 
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                //处理图片资源
                test: /\.(jpg|png|gif)$/,
                //使用一个loader
                //下载：npm i url-loader file-loader -D
                loader: "url-loader",
                //配置属性
                options: {
                    //图片大小小于8kb，就会被base64编码处理为字符串
                    //有点：减少请求数量（减轻服务器压力）
                    //缺点：图片体积增大（文件请求速度慢）
                    limit: 8 * 1024,
                    //问题：因为url-loader默认使用es6模块化解析，而html-loader引入图片是commonjs方法
                    //解析时会出现问题：[object Module]
                    //解决:关闭url-loader的es6模块化，使用commonjs解析
                    esModule: false,

                    //图片名字太长，重命名 图片名字处理之后是hash值
                    //[hash:10]取图片的hash的前10位
                    //[ext]取文件原来的扩展名
                    name: '[hash:10].[ext]'
                }
            },
            {
                //下载 npm i html-loader -D
                test: /\.html$/,
                //处理html文件的img图片(负责引入img,从而能被url-loader进行处理)
                loader: "html-loader"
            }
        ]
    },
    //插件的配置
    plugins: [
        new htmlWebpackPlugin({
            //复制 ./src/index.html 文件，并且自动引入打包输出所有资源（JS、CSS）
            template: "./src/index.html"
        })
    ],
    //模式
    mode: "development", //开发模式，一般用开发，能够看懂
    // mode: "production" //生产模式

    //开发服务器 devServer:用来自动化（自动编辑，自动打开浏览器，自动刷新浏览器~~）
    //特点：只会在内存中编辑打包，不会有任何输出
    //下载：npm i webpack-dev-server -D
    //启动devserver指令为： npx webpack-dev-server
    devServer: {
        contentBase: path.join(__dirname, "dist"), //我要运行后的目录
        compress: true, //启动gzip压缩，让代码体积更小更快
        //端口号
        port: 3001,
        //自动打开浏览器
        open: true
    }
}