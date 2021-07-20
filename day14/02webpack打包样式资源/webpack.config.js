const path = require("path");

module.exports = {
    // 入口，表示，要使用 webpack 打包哪个文件
    entry: path.join(__dirname, './src/main.js'),
    // 出口 输出文件相关的配置
    output: {
        // 指定 打包好的文件，输出到哪个目录中去
        path: path.join(__dirname, './dist'),
        // 这是指定 输出的文件的名称
        filename: 'build.js'
    },
    //loader的配置
    module: {
        rules: [
            //详细的loader配置
            {
                //匹配哪些文件   正则
                test: /\.css$/,
                //使用哪些loader进行处理
                use: [ //下载：npm i webpack webpack-cli -D | npm i css-loader style-loader -D
                    //use数组中loader执行顺序：从下到上
                    //创建style标签，将js中样式资源插入进行，添加到head标签中
                    'style-loader',
                    //将css文件打包成commonjs模块加载到js中，里面内容是样式字符串
                    'css-loader'
                ]
            },
            {
                //匹配哪些文件   正则
                test: /\.less$/,
                //使用哪些loader进行处理
                use: [ //下载：npm i less less-loader -D
                    'style-loader',
                    'css-loader',
                    //将less文件编辑到css文件 下载 less-loader  less
                    'less-loader'
                ]
            },
            {
                 //匹配哪些文件   正则
                 test: /\.scss$/,
                 //使用哪些loader进行处理
                 use: [ //下载：npm i sass sass-loader -D
                     'style-loader',
                     'css-loader',
                     //将sass文件编辑到css文件 下载 sass-loader  sass
                     'sass-loader'
                 ]
            }

        ]
    },
    //插件的配置
    plugins: [
        //详细plugins的配置
    ],
    //模式
    mode: "development", //开发模式，一般用开发，能够看懂
    // mode: "production" //生产模式
}