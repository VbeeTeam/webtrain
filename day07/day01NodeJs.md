# 01

## 初识Nodejs

- JavaScript是什么？ 

- JavaScript可以运行在哪里？ 

  - JavaScript一种在浏览器中解释运行的脚本语言，它的解释器被称为JavaScript引擎，为浏览器的一部分，是广泛用于

  客户端的脚本语言，最早是在HTML网页上使用，用来给HTML（HTML5）网页增加动态功能

| 浏览器  | 内核        |
| ------- | ----------- |
| IE      | Trident     |
| FireFox | Gecko       |
| Chrome  | WebKit\Bink |
| Safari  | WebKit      |
| Opera   | Presto      |
| Edge    | Chakra      |

## Node.js的诞生

- 作者Ryan Dahl 瑞恩·达尔
  + 2004 纽约 读数学博士 
  + 2006 退学到智利 转向开发 
  + 2009.5对外宣布node项目，年底js大会发表演讲 
  + 2010 加入Joyent云计算公司 
  + 2012 退居幕后

> 1.简单的说 Node.js 就是运行在服务端的 JavaScript。
>
> 2.Node.js 是一个基于Chrome JavaScript 运行时建立的一个平台。
>
> 3.Node.js是一个事件驱动I/O的服务端JavaScript环境（由C++编写），基于Google的V8引擎设计，V8引擎执行Javascript的速度非常快，性能非常好。

### 事件驱动

事件驱动模型主要包含3个对象：事件源、事件和事件处理程序。

· 事件源：产生事件的地方(html元素)

· 事件：点击/鼠标操作/键盘操作等等

· 事件对象：当某个事件发生时，可能会产生一个事件对象，该时间对象会封装好该时间的信息，传递给事件处理程序

· 事件处理程序：响应用户事件的代码 
我们使用的window系统也算得上是事件驱动了。简单的事例：监听鼠标点击事件，并能够显示鼠标点击的位置x,y。

### Node.js的工作原理

nodejs是单线程，异步I/O，事件驱动

1.node.js的单线程并不是真正的单线程，只是开启了单个线程进行业务处理（cpu的运算），同时开启了其他线程专门处理I/O。当一个指令到达主线程，主线程发现有I/O之后，直接把这个事件传给I/O线程，不会等待I/O结束后，再去处理下面的业务，而是拿到一个状态后立即往下走，这就是“单线程”、“异步I/O”。  

2.Node.js的I/O 处理完之后会有一个回调事件，这个事件会放在一个事件处理队列里头，在进程启动时node会创建一个类似于While(true)的循环，它的每一次轮询都会去查看是否有事件需要处理，是否有事件关联的回调函数需要处理，如果有就处理，然后加入下一个轮询，如果没有就退出进程，这就是所谓的“事件驱动”。

3.在node.js中，事件主要来源于网络请求，文件I/O等，根据事件的不同对观察者进行了分类，有文件I/O观察者，网络I/O观察者。事件驱动是一个典型的生产者/消费者模型，请求到达观察者那里，事件循环从观察者进行消费，主线程就可以马不停蹄的只关注业务不用再去进行I/O等待。

## Node.js可以用来做什么？

- 具有复杂逻辑的动态网站 
- WebSocket服务器 
- 命令行工具 
- 带有图形界面的本地应用程序 
- ......

## Node.js开发环境准备

1. 普通安装方式[官方网站](https://nodejs.org/zh-cn/)

2. 配置环境变量

   （1）node.js的msi包是一路next就可以了

   （2）安装完后，可以在命令行中输入node -v 来查看安装版本和是否安装成功，再输入npm-v查看npm模块是否正常

   （3）配置npm的全局模块（新建文件夹node_global、node_cache）

     npm config set prefix "D:\nodejs\node_global"  》模块配置位置
     npm config set cache "D:\nodejs\node_cache"   》缓存文件

   （4）配置环境变量

   进入环境变量对话框，在【系统变量】下新建【NODE_PATH】，输入D:\nodejs\node_global\node_modules

   将【用户变量】下的【Path】修改为 D:\nodejs\node_global

   (6) 配置完后，安装个module测试下，我们就安装最常用的express模块，打开cmd窗口输入命令，进行模块的全局安装

   npm install express -g      # -g是全局安装的意思
   
   

## 服务器端模块化

- 服务器端模块化规范CommonJS与实现Node.js

- 模块导出与引入     

  模块导出：exports、module

  模块引入：require()

- 模块导出机制分析

  exports导出调用时要调用导出方法

  module导出调用时直接使用方法

- 模块加载规则
  
  + 模块查找 不加扩展名的时候会按照如下后缀顺序进行查找 .js .json
  
- 模块分类
  + 自定义模块
  + 系统核心模块
    * fs 文件操作
    * http 网络操作
    * path 路径操作
    * querystring 查询参数解析
    * url url解析
    * ......

## ES6常用语法

- 变量声明let与const
- 变量的解构赋值
  + 数组解构赋值
  + 对象解构赋值
  + 字符串解构赋值
- 字符串扩展
  + includes()     判断字符串中是否包含指定的字符（有：true，无：false）
  + startsWith()  判断字符串是否以特定的字符开始（有：true，无：false）
  + endsWith()   判断字符串是否以特定的字符结束（有：true，无：false）
  + 模板字符串   ``反引号 表示模板，模板中的内容可以有格式，通过${}填充数据
- 函数扩展
  + 参数默认值
  + 参数解构赋值
  + rest函数
  + 扩展运算符
  + 箭头函数