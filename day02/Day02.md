# Day02  

# HTML、CSS移动端 弹性布局、圣杯布局

### 一、移动端相关概念https://www.apple.com/

1.屏幕尺寸

屏幕对角线的长度，单位为英寸，1英寸=2.54厘米

常见移动端设备尺寸

iphone4  3.5寸

iphone6,7,8    4.7寸

iphone6,7,8plus   5.5寸

2.屏幕分辨率

屏幕分辨率是指横纵方向上的像素点数，单位为px，1px=1个像素点

常见移动端设备屏幕分辨率

iphone5  1136*640

iphone6,7,8   1334*750

iphone6,7,8plus   1920*1080

3.ppi

屏幕上每英寸可以显示的像素点数称为屏幕像素密度，单位为ppi(pixels per inch)  

常见移动端设备屏幕像素密度：

iphone4  326ppi

iphone6,7,8  326ppi

iphone6,7,8plus   401ppi

### 二、移动端相关单位

1.px

相对于屏幕分辨率而言

2.em

相对于父元素字体大小的单位

3.rem

相对于根元素(html)字体大小的单位

注：16px = 1em

4.vw

vw  viewport width(视窗宽度)    1vw= 视窗宽度的1%

5.vh

vh  viewport height(视窗高度)   1vh= 视窗高度的1%

### 三、单位计算

html{

​	font-size: 16px;

vw相当于百分比

​	1vw = 3.75px;

​	16px = ?vw 

? = 16/3.75 =4.27vw

(每次px/16)

​	?vw = 100px;

? = 100 / 3.75 = 26.67vw;

​	

}

### 四、圣杯布局



### 五、移动端布局

![](C:\Users\susu\Desktop\实训\wzsxy\day01\img\zfb.jpg)

## 动画

### 一、css3变形

语法：transform:rotate(旋转)|scale(缩放)|skew(倾斜)|translate(位移);

1.rotate(旋转)    rotate3d（x,y,z）

a) rotateX(180deg)   沿x轴旋转  等价于  rotate3d(1,0,0,180deg)

b) rotateY(-180deg)  沿y轴旋转  等价于  rotate3d(0,1,0,-180deg)

c) rotateZ(180deg)   沿z轴旋转  等价于  rotate3d(0,0,1,180deg)

d) rotate(180deg)    类似于沿z轴旋转，正值为顺时针旋转，负值为逆时针旋转

注：rotate旋转的单位为deg

### 2.scale(缩放)

a) scaleX(1.5)  沿x轴缩放，大于1为放大，小于1为缩小，设置为0时，类似于隐藏不可见

b) scaleY(.5)   沿y轴缩放，大于1为放大，小于1为缩小

c) scale(1.5)   不指定轴时，沿x轴和y轴同时缩放

d) scale(-1.5)  当设置负值时，先翻转后缩放

e) scaleZ(1.5)  沿z轴缩放

### 3.skew(倾斜)

a) skewX(30deg)   沿x轴倾斜

b) skewY(-30deg)  沿y轴倾斜

c) skew(30deg)    不指定轴时，默认沿x轴倾斜

d) skew(30deg,30deg)   或 skewX(30deg) skewY(30deg)   

沿x轴和y轴同时倾斜，当时两种方式效果不同

注：倾斜的单位也为deg

### 4.translate(位移)

a) translateX(100px)  沿x轴位移，正值向右，负值向左

b) translateY(-100px) 沿y轴位移，正值向下，负值向上

c) translateZ(100px)  沿z轴位移，正值向前，负值向后

注：设置沿z轴的位移时，需要给元素或父元素设置透视值

d) translate(100px)  不指定轴时，默认沿x轴位移

eg: transform:translate(100px,100px);

    transform:translateX(100px) translateY(100px);

x轴和y轴同时位移