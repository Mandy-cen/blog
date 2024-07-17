## 1.CSS中link和@import的区别是：
Link属于html标签，而@import是CSS中提供的；
在页面加载的时候，link会同时被加载页面，而@import引用的CSS会在页面加载完成后才会加载引用的CSS;
@import只有在ie5以上才可以被识别，而link是html标签，不存在浏览器兼容问题;
Link引入样式的权重大于@import引用（@import是将引用的样式导入到当前的页面中）

## 2、css的选择器有哪些

![image](https://github.com/user-attachments/assets/cd029df6-f03a-48cb-a042-27f6b1efa9c7)

基本选择器
![image](https://github.com/user-attachments/assets/f287ebc5-efb0-4c3c-a967-fce9cd264f4f)

（层次）关系选择器（~ + >）
![image](https://github.com/user-attachments/assets/38c04f36-3436-463b-826c-8b0d697c7c0e)
~选择元素下边的所有兄弟节点
注意:兄弟选择器选中的是【E标签之后】的所有兄弟F

动态伪类选择器
![image](https://github.com/user-attachments/assets/6fd17bf1-5367-41fc-bcfc-96e164919ea7)

目标伪类选择器
![image](https://github.com/user-attachments/assets/3ec6b11b-21aa-4a60-9bdd-5a88a6fe479d)

语言伪类选择器
![image](https://github.com/user-attachments/assets/d78ba7b5-984b-4065-9cfa-2b15eb83769b)

UI元素状态伪类选择器
![image](https://github.com/user-attachments/assets/0ce43307-3632-42c4-bce0-94d17bf75fce)

结构伪类选择器
![image](https://github.com/user-attachments/assets/0e620a3b-5fbc-479d-bcee-710e7b71f58f)

否定伪类选择器
![image](https://github.com/user-attachments/assets/094190d5-a23f-4907-8f80-0df5070d9807)

属性选择器（区分不同的元素）
```
Input[value]{background:red;}
Input[value=”abc”]{background:green;}
Input[value^=”abc”]{background:#ff0;} 匹配起始位置
Input[value$=”abc”]{background:#00f;} 匹配结束位置
Input[value*=”abc”]{background:#00f;} 无论任何位置都可以匹配到
```

伪元素选择器
```
：first-letter 对第一个字符的操作
P:first-letter{color:#f00}
：first-line  对第一行的操作
P:first-line{color:#ff0}
：after	指定元素之后
：before	指定元素之前
```


## 3、css三大特性

1.继承性
  （1）作用：子元素可以继承父元素的样式。
  （2）什么样的属性才可以继承：text-,font-,line-开头的属性以及color;（之后会学）
  （3）具体应用：
  在写页面前我们会通过给body设置一个字体，让页面上所有的标签都能继承这个属性。
  （4）特殊性：
  	1. <a>标签的颜色不能继承，如果一定要修改a标签的颜色直接作用在a标签上面。
    2. <h>标签的大小不能继承，如果一定要修改h标签的大小直接作用在h标签上面。

2.层叠性
（1）是浏览器处理冲突的一个能力。
（2）作用：如果同一个属性通过多个选择器设置到同一个元素上面，那么这个时候一个属性就会将另一个属性层叠掉。
3.优先级 [层叠的规则]
（1）！important>行内样式>id选择器>类选择器>标签选择器>通配符>继承
（2）变数：!important 【!important属性无法继承。】
权重（优先级的算法）
（1）作用：多个选择器组合以后的优先级。
（2）算法：（0，0，0，0）==》第一个0对应的是important（行内）的个数，第二个0对应的是id选择器	的个数，第三个0对应的类选择器的个数，第四个0对应的是标签选择器的个数，就是当前选择器的权重。
（3）比较：先从第一个0开始比较，如果第一个0大，那么说明这个选择器的权重高，如果第一个相同，比较第二个，依次类推。
（4）总结：权重其实是优先级的算法	
注意：选择器在查找元素的时候不是从左往右找，而是从右往左找。

## 4、行内元素+块级元素+行内块级元素
1.行内元素(行内不可置换元素)：
（1）代表标签：a,span,b,u,i,s,strong,em,del
（2）特点：一行里面可以显示多个；无法设置宽高；宽高由内容来决定
（3）属性：display: inline（显示方式：行内元素）

2.块级元素： 
（1）代表标签：p,h1-h6,div,ul,li,ol,dl,dt,dd
（2）特点：独占一行；可以设置宽高；默认宽度一整行
（3）属性： display:block（显示方式：块级元素）

3.行内块级元素(行内可置换元素)：
（1）代表标签：img,input，textarea
（2）特点：可以设置宽高；一行内可显示多个
（3）属性：display:inline-block

4.元素之间显示方式切换：修改display属性、使用浮动（为inline-block）

## 5、什么是渐进增强和优雅降级

渐进增强 progressive enhancement：针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、交互等改进和追加功能达到更好的用户体验
优雅降级 graceful degradation：一开始就构建完整的功能，然后再针对低版本浏览器进行兼容
区别：优雅降级是从复杂的现状开始，并试图减少用户体验的供给，而渐进增强则是从一个非常基础的，能够起作用的版本开始，并不断扩充，以适应未来环境的需要。降级（功能衰减）意味着往回看；而渐进增强则意味着朝前看，同时保证其根基处于安全地带.

## 6、文本的阴影text-shadow
text-shadow:5px 5px 5px #f66;（参数形式为X坐标 Y坐标 阴影模糊度 颜色）

## 7、文本溢出text-overflow
值：clip 无省略号   ellipsis 省略号 
配合width和overflow:hidden和white-space:nowrap一块使用

## 8、边框阴影box-shadow
![image](https://github.com/user-attachments/assets/0e21b3eb-304f-4bd6-b80f-d8e6dcd346c5)

## 9、背景

### background-size
background-size: auto|| number || percentage || cover || contain

### background-origin
background-origin 属性规定 background-position 属性相对于什么位置来定定位。
background-origin: padding-box|border-box|content-box;

### background-clip
![image](https://github.com/user-attachments/assets/6842034e-554a-4f35-9955-c00ec9983025)

## 10、linear-gradient线性渐变
指沿着某条直线朝一个方向产生渐变效果。
linear-gradient( [<point> || <angle>,]? <stop>, <stop> [, <stop>]* )
1. 第一个参数表示线性渐变的方向。
·to left：设置渐变为从右到左，相当于: 270deg;
·to right：设置渐变从左到右，相当于: 90deg;
·to top：设置渐变从下到上，相当于: 0deg;
·to bottom：设置渐变从上到下，相当于: 180deg。（默认值）
·也可以直接指定度数，如45deg
2. 第二个参数是起点颜色。
3. 第三个参数是终点颜色，你还可以在后面添加更多的参数，表示多种颜色的渐变。

## 11、不同浏览器前缀不同
-webkit-border-box：谷歌浏览器、国内浏览器
-0-border-box: opera浏览器
-moz-border-box：火狐浏览器
-ms-border-box：ie浏览器

### 浏览器内核有哪些
  Trident内核：主要代表为IE浏览器
	Gecko内核：主要代表为Firefox
	Presto内核：主要代表为Opera
	Webkit内核：产要代表为Chrome和Safari

## 12、什么是BFC
BFC(Block formatting context)直译为“块级格式化上下文”。它是一个独立的渲染区域，只有Block-level box（块）参与， 它规定了内部的Block-level Box如何布局，并且与这个区域外部毫不相干。

### BFC的布局规则
1、内部的Box会在垂直方向，一个接一个地放置。
2、Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠
3、每个元素的margin box的左边， 与包含块border box的左边相接触
盒模型=content+padding+border+margin。Width指的是content的宽，height=content的高。
4、BFC的区域不会与float box重叠。
5、BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。
6、计算BFC的高度时，浮动元素也参与计算

### 哪些元素或属性能触发BFC
1、根元素
2、float属性不为none
3、position为absolute（有定位的父元素或者html）或fixed（可视窗口）
4、display为inline-block, table-cell, table-caption, flex, inline-flex（css3）
5、overflow不为visible

## 13、position定位
<img width="562" alt="image" src="https://github.com/user-attachments/assets/d73abe68-c353-43d2-9af5-1e420e963d93">

## 14、Meta设置移动端标准视口
`<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>`
width 控制viewpoint的宽度，可以是固定值，也可以是device-width设备宽度
user-scalable:用户是否可以缩放
initial-scale 控制初始化缩放比例，1.0表示不可以缩放
maximum-scale 最大缩放比例
minimum-scale 最小缩放比例
