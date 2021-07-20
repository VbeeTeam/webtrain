const path = require("path");

// 1.这个配置文件，起始就是一个 JS 文件，基于node平台运行的，通过 Node 中的模块操作，向外暴露了一个 配置对象
// webpack.config.js作用：指示webpack干哪些活（运行webpack指令时，会加载里面的配置）

module.exports = {
    //2大家已经学会了举一反4， 大家觉得，在配置文件中，需要手动指定 入口 和 出口
    entry: path.join(__dirname, './src/main.js'), // 入口，表示，要使用 webpack 打包哪个文件
    output: { // 出口 输出文件相关的配置
        path: path.join(__dirname, './dist'), // 指定 打包好的文件，输出到哪个目录中去
        filename: 'build.js' // 这是指定 输出的文件的名称
    }
    // 3.当我们在 控制台，直接输入 webpack 命令执行的时候，webpack 做了以下几步：
    //  (1). 首先，webpack 发现，我们并没有通过命令的形式，给它指定入口和出口
    //  (2). webpack 就会去 项目的 根目录中，查找一个叫做 `webpack.config.js` 的配置文件
    //  (3). 当找到配置文件后，webpack 会去解析执行这个 配置文件，当解析执行完配置文件后，就得到了 配置文件中，导出的配置对象
    //  (4). 当 webpack 拿到 配置对象后，就拿到了 配置对象中，指定的 入口  和 出口，然后进行打包构建；
}