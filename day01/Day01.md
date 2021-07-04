# Day01  开班   很高兴大家来参加培训，自我介绍路鹏中软国际web讲师

## Web前端实训安排

- 第一周：HTML、CSS、JavaScript基础巩固
- 第二周：Jquery、Node、MySql的基本使用
- 第三周：webpack、Vue的使用
- 第四周：结合Vue、Node、MySQL项目实战
- 项目考核：平时成绩（每周测试成绩+作业完成情况）+项目成绩+演讲能力
- 课堂纪律（线上课堂不要迟到跟早退，有问题及时反馈）8：30~12：00 13：30~17：00

## 前端和后端的区别

### 前端

![](C:\Users\susu\Desktop\实训\wzsxy\day01\img\src=http___photo.16pic.com_00_05_66_16pic_566331_b.jpg&refer=http___photo.16pic.jpg)

### 后端

![](C:\Users\susu\Desktop\实训\wzsxy\day01\img\src=http___images2.10qianwan.com_10qianwan_20180509_b_0_201805091348187671.jpg&refer=http___images2.10qianwan.jpg)

### 印象中的程序员

![](C:\Users\susu\Desktop\实训\wzsxy\day01\img\微信图片_20210326135631.png)

### 实际工作中的

![image-20210327201144865](C:\Users\susu\AppData\Roaming\Typora\typora-user-images\image-20210327201144865.png)



![](C:\Users\susu\Desktop\实训\wzsxy\day01\img\微信图片_20210326135651.png)

## 产品开发人员及流程



![](C:\Users\susu\Desktop\实训\wzsxy\day01\img\微信图片_20210327204026.png)



## 前端技术栈



![](C:\Users\susu\Desktop\实训\wzsxy\day01\img\微信图片_20210327203659.png)



## 认识网页

```
思考：  网页是由什么构成的呢?
网页主要由文字、图像和超链接等元素构成。当然，除了这些元素，网页中还可以包含音频、视频以及Flash等。
```

```
思考：  网页是如何形成的呢?
```

程序员写的代码=》浏览器=》客户端网页

## 常见浏览器介绍

```
浏览器是网页运行的平台，常用的浏览器有IE、火狐（Firefox）、谷歌（Chrome）、Safari和Opera等。我们平时称为五大浏览器。
```

![](C:\Users\susu\Desktop\实训\wzsxy\day01\img\b.png)

## 查看浏览器占有的市场份额（知晓）

查看网站： <a href="http://tongji.baidu.com/data/browser" target="_blank">http://tongji.baidu.com/data/browser</a>



## 浏览器内核

|         类别          |    内核     |
| :-------------------: | :---------: |
|          IE           |   Trident   |
| Mozilla FireFox(火狐) |    Gecko    |
|        Safari         |   WebKit    |
|    Chrome（谷歌）     | WebKit/Bink |
|     Opera（欧朋）     |   Presto    |

（1）Trident(IE内核) 

国内很多的双核浏览器的其中一核便是 Trident，美其名曰 "兼容模式"。

代表： IE、傲游、世界之窗浏览器、Avant、腾讯TT、猎豹安全浏览器、360极速浏览器、百度浏览器等。

Window10 发布后，IE 将其内置浏览器命名为 Edge，Edge 最显著的特点就是新内核 EdgeHTML。

（2）Gecko(firefox) 

Gecko(Firefox 内核)： Mozilla FireFox(火狐浏览器) 采用该内核，Gecko 的特点是代码完全公开，因此，其可开发程度很高，全世界的程序员都可以为其编写代码，增加功能。 可惜这几年已经没落了， 比如 打开速度慢、升级频繁、猪一样的队友flash、神一样的对手chrome。

（3） webkit(Safari)  

 Safari 是苹果公司开发的浏览器，所用浏览器内核的名称是大名鼎鼎的 WebKit。

 现在很多人错误地把 webkit 叫做 chrome内核（即使 chrome内核已经是 blink 了），苹果感觉像被别人抢了媳妇，都哭晕再厕所里面了。

 代表浏览器：傲游浏览器3、 Apple Safari (Win/Mac/iPhone/iPad)、Symbian手机浏览器、Android 默认浏览器，

（4） Chromium/Bink(chrome) 

   在 Chromium 项目中研发 Blink 渲染引擎（即浏览器核心），内置于 Chrome 浏览器之中。Blink 其实是 WebKit 的分支。 

​     大部分国产浏览器最新版都采用Blink内核。

（5） Presto(Opera) 

  Presto 是挪威产浏览器 opera 的 "前任" 内核，为何说是 "前任"，因为最新的 opera 浏览器早已将之抛弃从而投入到了谷歌怀抱了。

## Web标准（重点）

通过以上浏览器的内核不同，我们知道他们工作原理、解析肯定不同，显示就会有差别。

```
问：  哪个语言再全国基本都可以听得懂？ 
```

![](C:\Users\susu\Desktop\实训\wzsxy\day01\img\bz.png)

## Web 标准的好处

*1*、让Web的发展前景更广阔 
*2*、内容能被更广泛的设备访问
*3*、更容易被搜寻引擎搜索
*4*、降低网站流量费用
*5*、使网站更易于维护
*6*、提高页面浏览速度

##  Web 标准构成

 Web标准不是某一个标准，而是由W3C和其他标准化组织制定的一系列标准的集合。主要包括结构（Structure）、表现（Presentation）和行为（Behavior）三个方面。

~~~
结构标准：结构用于对网页元素进行整理和分类，主要包括XML和XHTML两个部分。
样式标准：表现用于设置网页元素的版式、颜色、大小等外观样式，主要指的是CSS。
行为标准：行为是指网页模型的定义及交互的编写，主要包括DOM和ECMAScript两个部分
~~~

理想状态我们的源码： .HTML    .css   .js 

```
专业的人，写专业的代码
```

![](C:\Users\susu\Desktop\实训\wzsxy\day01\img\wk.png)



总结WEB标准：

结构标准：  ![](C:\Users\susu\Desktop\实训\wzsxy\day01\img\hb1.png) 决定你是否有个好天然身体 



样式标准：  ![](C:\Users\susu\Desktop\实训\wzsxy\day01\img\hb2.png)   决定你是否打扮的美丽外观



行为标准：<img src="C:\Users\susu\Desktop\实训\wzsxy\day01\img\hb3.jpg" style="zoom:200%;" />    决定你是否有吸引人的行为



## 开发工具的使用

### 1.Vscode的下载、安装

（1）官网https://code.visualstudio.com/Download下载最新版   最好下载zip格式

（2）解压到非系统盘，文件夹最好不要出现中文和空格，我解压到D:\VSCode-win32-x64-1.31.1，直接运行code.exe即可

### 2.安装常用插件

- Chinese (Simplified) Language：中文（简体）语言包为 VS Code 提供本地化界面

- html CSS Support ：提供基础的语法知识编写辅助

- Open-In-Browser：在vscode中打开浏览器访问

- Prettier - Code formatter:格式化代码

- Beautify：美化代码

## Typora的使用

### 1.百度下载

### 2.常用快捷键

- Ctrl+1~6：一级标题~六级标题
- Ctrl+0: 段落
- Ctrl+Shift+[: 有序列表
- Ctrl+Shift+]: 无序列表
- (```js+Enter): js代码窗口
- Ctrl+T: 表格

### 3.可以转成PDF、HTML、Word等文件



## mindmaster的安装使用

作用：梳理所学的知识点及模块



## PhotoShop的使用

### 1.安装

### 2.常用快捷键

- 长按空格+鼠标左键拖动图片
- Alt+鼠标滚轮放大缩小图片
- Ctrl+C复制选择区域图片
- Ctrl+N创建空白区域
- Ctrl+V粘贴图片
- Ctrl+Shift+Alt+S保存图片格式

### 3. .jpg .png .gif

#### .jpg: 支持有损压缩，不支持透明，不支持动画

#### .png: 不支持压缩，支持透明，半透明，不透明，不支持动画

#### .gif: 支持有损压缩，支持半透明，支持动画

## HTML、CSS基础回顾

## HTML

1.什么是HTML？

html是超文本标记语言

2.常用的标签：

（1）内联元素：不可以设置宽高、盒子并在一行

- a
- span
- em
- b
- strong
- i

（2）块状元素：可以设置宽高、盒子独占一行

- div
- p
- ul
- li
- h1 - h6
- dl
- dt
- dd

(3)内联块状元素：能够设置width和height、默认排列方式并在一行

- input
- select
- textarea
- img

3.元素类型转换 display属性

- none   此元素不会被显示
- block   此元素将显示为块级元素
- inline   此元素会被显示为内联元素
- inline-block   此元素会被显示为内联块状元素

## CSS

1.什么是css？

css是层叠样式表

2.css权重

|            类型             | 权重 |
| :-------------------------: | :--: |
|         ! important         | 无穷 |
|          内联样式           | 1000 |
|             id              | 100  |
| class/属性选择器/伪类:hover |  10  |
|   标签选择器/伪元素:after   |  1   |
|           通配符*           |  0   |

! important  >   内联样式  >  id   >  class   >  标签选择器  >  通配符

3. 盒模型

   content+padding+border+margin

4. 浮动布局

   float: left/right/none /inherit:规定应该从父元素继承 float 属性的值

5. 定位布局

   定位模式position：相对定位relative、绝对定位absolute、固定定位fixed、默认定位static 

   边偏移：left、top、right、bottom

6. 弹性布局（移动端）

   

单行文本省略

```
width: 100px;
overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;
```

多行文本

```
display: -webkit-box;    作为弹性盒子模型显示
-webkit-box-orient: vertical; 设置弹性盒子 的子元素的排列方式
-webkit-line-clamp: 3;用来限制在一个块元素显示的文本的行数
overflow: hidden;  溢出隐藏
```

### 前端工程师须知pc电脑端分辨率

按屏幕宽度大小排序（主流的用橙色标明）

分辨率  比例 | 设备尺寸

1024*500 （8.9寸）

1024*768 （比例4：3  | 10.4寸、12.1寸、14.1寸、15寸; ）

1280*800（16：10  |15.4寸）

1280*1024(比例：5：4  | 14.1寸、15.0寸)


1280*854(比例：15：10 | 15.2）

1366*768 (比例：16：9 | 不常见）

1440*900 （16：10  17寸 仅苹果用）

1440*1050（比例：5：4  | 14.1寸、15.0寸）

1600*1024（14：9  不常见）

1600*1200 （4：3 | 15、16.1）

1680*1050（16：10 | 15.4寸、20.0寸）

1920*1200 (23寸）

 

#### 通过上面的电脑屏蔽及尺寸的例表上我们得到了几个宽度

1024  1280  1366  1440  1680  1920  

### HTML、CSSPC端 浮动布局、定位布局



![](C:\Users\susu\Desktop\实训\wzsxy\day01\img\卧龙控股.jpg)







