### 圣杯布局和双飞翼布局的理解和区别，并用代码实现
？？

### CSS3有哪些新增的特性？
？？

### 在页面上隐藏元素的方法有哪些？
？？

### CSS选择器有哪些？哪些属性可以继承？
？？

### CSS3新增伪类有哪些并简要描述
<img width="712" alt="image" src="https://github.com/user-attachments/assets/4bdea9dd-74c5-4284-a834-67534f641200">

### 用css创建一个三角形，并简述原理
创建一个div，宽高都为0，实现效果如下，发现border的四个边都是一个三角形，要实现三角形只需将其中几个边background设置为transparent，即可得到三角形
```
  <style>
    .rect {
      width: 0;
      height: 0;
      background-color: #fff;
      border-right: 100px solid transparent;
      border-left: 100px solid transparent;
      border-top: 100px solid rgb(29, 156, 194);
      border-bottom: 100px solid transparent;
    }
  </style>
```

### 简述你对BFC规范的理解
BFC也叫块级格式化上下文，它是一个独立的渲染区域，内部的元素与外界的元素互不干扰。它不会影响外部的布局，外部的布局也不会影响到它

- 触发BFC
```
1、根元素
2、float属性不为none
3、position为absolute（有定位的父元素或者html）或fixed（可视窗口）
4、display为inline-block, table-cell, table-caption, flex, inline-flex（css3）
5、overflow不为visible
```

- BFC的布局规则
```
内部的盒子会在垂直方向上一个接一个的放置
对于同一个BFC的俩个相邻的盒子的margin会发生重叠，与方向无关。
每个元素的左外边距与包含块的左边界相接触（从左到右），即使浮动元素也是如此
BFC的区域不会与float的元素区域重叠
计算BFC的高度时，浮动子元素也参与计算
BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之亦然
```

### 清除浮动的方式有哪些及优缺点？

- 1.额外标签法（在最后一个浮动标签后，新加一个标签，给其设置 clear： both）不推荐
  - 优点：通俗易懂，方便
  - 缺点：添加无意义标签，语义化差
    
- 2.父级添加 overflow 属性 （overflow：hidden）不推荐
  - 优点：代码简洁
  - 缺点：内容增多的时候容易造成不会自动换行导致内容被隐蔽掉，无法显示要溢出的元素

- 3.给父级设置高度
  - 优点：简单，代码少，容易掌握
  - 缺点：只适合高度固定的布局，要给出精确的高度，如果高度和父级 div 不一样时，会产生问题

- 4.父级 div 定义 overflow:auto(必须定义 width 或 zoom:1，同时不能定义 height，使用 overflow:auto 时，浏览器会自动检查浮动区域的高度)
  - 优点：简单，代码少，浏览器支持好
  - 缺点：内部宽高超过父级 div 时，会出现滚动条。

- 5.使用 after 伪元素清除浮动（推荐使用）
```
.clear:after{
  content:"";
  display:block;
  clear:both;
  height:0;
  overflow:hidden;
  visibility:hidden
}
```

  - 优点：符合闭合浮动思想，结构语义化正确
  - 缺点：ie6-7 不支持伪元素：after，使用 zoom：1 触发 hasLayout


### 简述下你理解的优雅降级和渐进增强
- 优雅降级:先不考虑兼容，优先最新版本浏览器效果，之后再逐渐兼容低版本浏览器。
- 渐进增强: 考虑兼容，以较低（多）浏览器效果为主，之后再逐渐增加对新版本浏览器的支持，以内容为主。也是多数公司所采用的方法。

### 对比下px、em、rem有什么不同？
1em = 当前元素的字体大小，1rem = 当前html元素的字体大小

### css常用的布局方式有哪些？
https://juejin.cn/post/6844903491891118087

- 流式布局: 最基本的布局，就是顺着 html 像流水一样流下来
- 绝对定位: 利用 position: absolute 进行绝对定位的布局
- float 布局: 最初用来解决多栏布局的问题。比如圣杯、双飞燕的布局都可以用 float 来实现
- 珊格布局: bootstrap 用的布局，把页面分为 24 分，通过 row 和 col 进行布局
- flex 布局: css3 的布局可以非常灵活地进行布局和排版
- grid 布局: 网格布局

### 说说你对css盒子模型的理解
标准盒模型：width=content
IE盒模型：width=content+padding+border

### ::before和:after中单冒号和双冒号的区别是什么，这两个伪元素有什么作用？（CSS的伪类和伪对象有什么不同？）
- :表示伪类，是一种样式，比如:hover, :active等
- ::表示伪元素，是具体的内容，比如::before是在元素前面插入内容，::after则是在元素后面插入内容，不过需要content配合，并且插入的内容是inline的。
- :before和:after其实还是表示伪元素，在css3中已经修订为::before和::after了，只是为了能兼容IE浏览器，所以也可以表示成:before和:after

### position:fixed;在ios下无效该怎么办？
** 第三方库 isScroll.js 可以解决此问题


### style标签写在body前和body后的区别是什么？
放在body前会跟HTML同时渲染
放在body后，浏览器会先渲染HTML，再渲染CSS，则会导致一开始出现一个没有样式的界面，再跳到有样式的界面。

### 请描述margin边界叠加是什么及解决方案
margin的塌陷，其实就是BFC带来的问题
解决方法：
```
将两个元素分别放在不同的BFC下
改成padding
```

### 解释下 CSS sprites的原理和优缺点分别是什么？
原理：把项目需要用到的图标合并成一张大图，在使用的时候通过position定位来展示指定的图标
优点：大大减少了请求次数
确定：定位不太好控制，多用于小图标的展示。

### 什么是FOUC？你是如何避免FOUC的？

FOUC 即 Flash of Unstyled Content，是指页面一开始以样式 A（或无样式）的渲染，突然变成样式B。
原因是样式表的晚于 HTML 加载导致页面重新进行绘制。
```
通过 @import 方式导入样式表
style 标签在 body 中
```
解决方法：把 link 标签将样式放在 head 中

### css的属性content有什么作用呢？有哪些场景可以用到？
content属性与 ::before 及 ::after 伪元素配合使用生成文本内容
应用场景：
```
在清除浮动时::after伪元素必须要添加content属性
content可以获取元素的属性值
可以引入外部资源
```

### 要让Chrome支持小于12px的文字怎么做？
- 改用图片
- 使用 -webkit-text-size-adjust:none; 但是不支持chrome 27.0以上版本
- 使用 transform: scale( )缩小

### 说说你对line-height是如何理解的？
line-height 行高，就是两行文字之间基线的距离，用来调整文字的行间距。

### 来说说你对重绘和重排的理解，以及如何优化？
- 重绘(repaint)：当元素样式的改变不影响布局时，浏览器将使用重绘对元素进行更新，此时由于只需要 UI 层面的重新像素绘制，因此损耗较少。
  - 触发重绘的条件：改变元素外观属性。如：color，background-color，font-size等。
- 回流(reflow)：又叫重排（layout）。当元素的尺寸、结构或者触发某些属性时，浏览器会重新渲染页面，称为回流。此时，浏览器需要重新经过计算，计算后还需要重新页面布局，因此是较重的操作
  - 　触发重排的条件：任何页面布局和几何属性的改变都会触发重排，比如：
```
  1、页面渲染初始化；(无法避免)
  2、添加或删除可见的DOM元素；
  3、元素位置的改变，或者使用动画；
  4、元素尺寸的改变——大小，外边距，边框；
  5、浏览器窗口尺寸的变化（resize事件发生时）；
  6、填充内容的改变，比如文本的改变或图片大小改变而引起的计算值宽度和高度的改变；
```

*重点：回流必定会触发重绘，重绘不一定会触发回流。重绘的开销较小，回流的代价较高。*

- 优化
```
1、浏览器自己的优化：浏览器会维护1个队列，把所有会引起回流、重绘的操作放入这个队列，等队列中的操作到了一定的数量或者到了一定的时间间隔，浏览器就会flush队列，进行一个批处理。这样就会让多次的回流、重绘变成一次回流重绘。
2、我们要注意的优化：我们要减少重绘和重排就是要减少对渲染树的操作，则我们可以合并多次的DOM和样式的修改。并减少对style样式的请求。
（1）直接改变元素的className
（2）display：none；先设置元素为display：none；然后进行页面布局等操作；设置完成后将元素设置为display：block；这样的话就只引发两次重绘和重排；
（3）不要经常访问浏览器的flush队列属性；如果一定要访问，可以利用缓存。将访问的值存储起来，接下来使用就不会再引发回流；
（4）使用cloneNode(true or false) 和 replaceChild 技术，引发一次回流和重绘；
（5）将需要多次重排的元素，position属性设为absolute或fixed，元素脱离了文档流，它的变化不会影响到其他元素；
（6）如果需要创建多个DOM节点，可以使用DocumentFragment创建完后一次性的加入document；
```

### 说说浏览器解析CSS选择器的过程？
按照从上到下，从右到左的顺序解析。

### 说说CSS的优先级是如何计算的？
!important > 内联样式（1000） > id 选择器（100） > class 选择器（10） > tag（1） > *

当有多个选择器在一起时，权重相加计算。

对于 CSS 选择器的写法不建议超过 3 层。

### 你有用过CSS预处理器吗？喜欢用哪个？原理是什么？
用过sass、less
原理：AST（抽象语法树）

### 在页面中的应该使用奇数还是偶数的字体？为什么呢？
常用偶数号字体,但奇数号字体也没关系


### 说说你对z-index的理解
z-index的意思就是在z轴的顺序，如果说网页是由x轴和y轴所决定的一个平面，那么z轴就是垂直于屏幕的一条虚拟坐标轴，浮动层就在这个坐标轴上，那么它们的顺序号就决定了谁上谁下了。


### 怎样修改chrome记住密码后自动填充表单的黄色背景？
-webkit-text-fill-color 设置文本颜色，-webkit-box-shadow inset设置填充

### rgba()和opacity这两个的透明效果有什么区别呢？

rgba 只对颜色有影响。如果放在 background 上的话，只对背景颜色有影响。不会影响元素中的其他内容以及子元素内容。

opacity 的透明效果是作用整个元素以及其子元素上的

### 请描述css的权重计算规则
<img width="508" alt="image" src="https://github.com/user-attachments/assets/f96d5136-127d-4ac4-8abf-41f10f4c5169">

### 描述下你所了解的图片格式及使用场景

<img width="724" alt="image" src="https://github.com/user-attachments/assets/63ffa3f4-488d-46f2-b739-53730480e63b">

###  让网页的字体变得清晰，变细用CSS怎么做？
font-weight 和 font-family

###  说下line-height三种赋值方式有何区别
- px 是固定的元素高度
- em 是相对于父级的
- rem 是相对于根元素的

### 用CSS绘制一个三角形
```
.triangle {
        width: 0;
        height: 0;
        margin: 100px auto;
        border-top: 50px solid transparent;
        border-left: 50px solid transparent;
        border-right: 50px solid transparent;
        border-bottom: 50px solid red;
    }
```

### 使用flex实现三栏布局，两边固定，中间自适应
`flex: 0 1 auto`

### 不使用border画出1px高的线，在不同浏览器的标准和怪异模式下都能保持效果一样
```
 <div style="width: 100%;height: 1px;"></div>
 <hr size="1">
```

### 实现单行文本居中和多行文本左对齐并超出显示"..."
```
.multi {
  overflow: hidden
  text-overflow: ellipsis
  display: -webkit-box
  -webkit-line-clamp: 3
  -webkit-box-orient: vertical
}
```

### 写出你知道的CSS水平和垂直居中的方法

- 水平居中
  - 行内元素水平居中 （使用 text-align: center ）
  - 块级元素的水平居中
    - 将该块级元素左右外边距margin-left和margin-right设置为auto
    - 使用table+margin （display: table;margin: 0 auto;）
    - 使用absolute+transform（  position:absolute;left:50%; transform:translateX(-50%);）
    - 使用flex+justify-content（display: flex; justify-content:center;）
    - 使用flex+margin （ margin:0 auto;）
    - 绝对定位元素水平居中 absolute + margin （ margin:0 auto;）
- 垂直居中
  - 单行内联元素垂直居中
    - line-height
  - 多行内联元素垂直居中
    - 利用flex+justify-content布局，其中flex-direction: column定义主轴方向为纵向
    - 使用table-cell+vertical-align
    - 使用absolute+负margin(已知高度宽度)
    - 使用absolute+transform
    - 使用flex+align-items
   
- 水平垂直居中
  - 绝对定位position: absolute;与margin:auto（已知高度宽度）
  - 绝对定位position: absolute+CSS3 transform: translate(-50%, -50%);(未知元素的高宽)
  - flex布局+justify-content: center + align-items: center
  - flex/grid与margin:auto(最简单写法)
 
### 怎么才能让图文不可复制？
```
-webkit-user-select: none;
-ms-user-select: none;
-moz-user-select: none;
-khtml-user-select: none;
user-select: none;
```

###  重置（初始化）css的作用是什么
我理解的，简单讲主要是为了 统一各个浏览器自带的默认样式而诞生的

### 说说你对媒体查询的理解
为了适应不同的设备终端

### 列举CSS优化、提高性能的方法

- 加载性能
  - 压缩CSS
  - 通过link方式加载，而不是@import
  - 复合属性其实分开写，执行效率更高，因为CSS最终也还是要去解析如 margin-left: left;
- 选择器性能
  - 尽量少的使用嵌套，可以采用BEM的方式来解决命名冲突
  - 尽量少甚至是不使用标签选择器，这个性能实在是差，同样的还有*选择器
  - 利用继承，减少代码量
- 渲染性能
  - 慎重使用高性能属性：浮动、定位；
  - 尽量减少页面重排、重绘；
  - css雪碧图
  - 自定义web字体，尽量少用
  - 尽量减少使用昂贵属性，如box-shadow/border-radius/filter/透明度/:nth-child等
  - 使用transform来变换而不是宽高等会造成重绘的属性

###  要是position跟display、overflow、float这些特性相互叠加后会怎么样？
display:none之后别的样式设置成什么都不管用了，dom元素不可见了。position:absolute之后float应该就不起作用了

### css3的:nth-child和:nth-of-type的区别是什么？
:nth-child(n) 选择器匹配属于其父元素的第 N 个子元素，不论元素的类型。
:nth-of-type(n) 选择器匹配属于父元素的特定类型的第 N 个子元素。

###  inline、block、inline-block这三个属性值有什么区别？

inline： 行内元素，元素不独占一行，不可以修改宽高
block： 块级元素，元素独占一行，可以修改宽高
inline-block： 行内块级元素，元素不独占一行，并且可以修改宽高

###  box-sizing常用的属性有哪些？分别有什么作用？
box-sizing常用的属性有 content-box 和 border-box。
content-box 盒子的宽度不包含 border和padding，border-box盒子的宽度包含border 和padding。

### 说说position的absolute和fixed共同与不同点分别是什么？
共同点：都能让元素定位,都脱离了文档流
不同点： position: absolute; 是根据定位父级定位，而position: fixed; 是根据浏览器窗口定位。

###  举例说明css中颜色的表示方法有几种
颜色单词: blue / lightblue / skyblue / transparent(透明)
rgb(0-255, 0-255, 0-255) / rgba(0-255, 0-255, 0-255, 0-1)
hsl色相: hsl(色调，饱和度，明度) hsla( 色调，饱和度，亮度，不透明度 ) (兼容性)
十六进制: #000000- #FFFFFF ( #000 - #fff ) ( 0-9 a-f | [A-F] )

###  如何消除transition闪屏？
```
.css { 
    -webkit-transform-style: preserve-3d; 
    -webkit-backface-visibility: hidden; 
    -webkit-perspective: 1000; 
}
```

### 请你解释下什么是浮动和它的工作原理是什么？同时浮动会引起什么问题

什么是浮动：我们在做布局的时候用到的一种技术，通过浮动可以让元素左右浮动，然后通过margin调整位置
工作原理：使元素脱离文档流，让元素可以左右浮动，直到遇到另一个浮动元素的边缘才停止。
带来的问题：浮动元素会造成父级元素无法自动获取高度，导致父级塌陷，布局错乱。

### 写例子说明如何强制（自动）中、英文换行与不换行
```
word-break:break-all;只对英文起作用，以字母作为换行依据
word-wrap:break-word; 只对英文起作用，以单词作为换行依据
white-space:pre-wrap; 只对中文起作用，强制换行
white-space:nowrap; 强制不换行，都起作用
white-space:nowrap; overflow:hidden; text-overflow:ellipsis;不换行，超出部分隐藏且以省略号形式出现（部分浏览器支持）
```

### 写出你遇到过IE6/7/8/9的BUG及解决方法
```
兼容性问题
1.IE6margin双边距问题
2.IE67 li间隙问题
3.图片间隙问题——vertical-align：top
4.ie6下高度小于19px处理成19px；font-size:0;或者overflow：hidden
5.ie8以下滤镜问题，filter:alpha(opacity=50)
6.IE6 position:fixed 不兼容，fixed定位ie6兼容，js处理，通过获取滚动高度，赋值给需要固定的元素，设置绝对定位，设置top
7.ie6下父级的overflow：hidden是保不住子级的相对定位的（relative）-解决，给父级加定位
8.ie6下，绝对定位的父级，宽高是奇数的话，定位偏移会出现1px的偏差
9.ie6下，内容会撑开设置好的宽度
10.ie6，7 3px问题
11.<p><h3></h3></p>会把p元素分割成两个，原因，嵌套的规范性，p需要嵌套inline元素
12.在ie6下，1px dotted #000 不兼容。精度问题，可以用背景平铺
13.ie6下margin传递需要触发haslayout，父级有边框时，子元素margin值消失，解决办法，触发父级haslayout
14.ie6下当一行子元素占有的宽度之和与父级的宽度相差超过3px或者有不满行状态的时候，最后一行子元素的下margin就会失效
15.ie6下的文字溢出bug 条件1，子元素的宽度和父级的宽度相差小于3px的时候，2，两个浮动元素中间有注释或内联元素——解决办法：用div吧注释或内联元素包裹起来
16.ie6下，当浮动元素和绝对定位元素是并列关系的时候，绝对定位会消失，解决办法：给定位元素外面包裹div
17.ie6，7下，输入类型的表单控件上下各有1px的间隙——解决办法：给input加浮动
18.ie6，7下，输入类型的表单控件加border：none无效，还是会出现边框——解决办法：1，给border：0；2，重置input的背景
19.ie6，7下，输入类型的表单控件输入文字的时候，背景图片会跟随移动——解决办法：把背景加给父级
20.处理ie6 png图片兼容问题js插件，DD_belatedPNG.js,也可以用CSS滤镜处理
a.css处理
b.微软behavior扩展，下载iepngfix.htc
c.js插件
21.css hack \9——IE10之前的浏览器解析，+，*——IE7包括IE7之前的浏览器解析， _ ——IE6包括IE6之前的IE浏览器
22.important兼容问题，在IE6下，在important后面加一条同样的样式，会破坏important优先级作用，按照默认的优先级顺序来走
23.IE6 margin负值不兼容，处理，只要position：relative；这个解决方案在圣杯布局中有出现。圣杯布局，可以用position：absolute；来定位
```

###  display有哪些值？分别说明他们的作用是什么？
```
display:block/inline-block 给元素转块/转行内块
display:inline 把元素转成内联元素（我很少用到）
display:none让元素消失，不显示
display:flex弹性布局
display:grid
```

### 写出几个初始化CSS的样式，并解释说明为什么要这样写？
```
/*清除元素默认的内外边距  */
* {
    margin: 0;
    padding: 0
}
/*让所有斜体 不倾斜*/
em,
i {
    font-style: normal;
}
/*去掉列表前面的小点*/
li {
    list-style: none;
}
/*图片没有边框   去掉图片底侧的空白缝隙*/
img {
    border: 0;  /*ie6*/
    vertical-align: middle;
}

/*取消链接的下划线*/
a {
    text-decoration: none;
}

/*清除浮动*/
.clearfix:after {
    visibility: hidden;
    clear: both;
    display: block;
    content: ".";
    height: 0
}

.clearfix {
    *zoom: 1
}
```

### 说说你对CSS样式覆盖规则的理解

首先看权重，权重高的样式会覆盖权重低大的样式。
!important > #id > .class > tag > *
同等权重时，css 靠后的覆盖靠前的（就近原则），只与 css 书写的顺序有关，与 class 引用的顺序无关
行内样式 > 内联样式 > 外联样式

###  CSS的overflow属性定义溢出元素内容区的内容会如何处理呢

- visible（默认值）：溢出的内容会照常显示在元素内容区之外；
- hidden：溢出的内容会被裁剪；
- scroll：溢出的内容会出现在滚动区，通过滚动条滚动可以看到；
- auto：当内容溢出时表现同scroll；

### 移动端的布局用过媒体查询吗？写出例子看看

```
    body{
      height: 60vh;
    }
    @media(max-width:500px) {
      body{
        background-color: #000;
      }
    }
    @media(min-width:501px) and (max-width:900px) {
      body{
        background-color: #f00;
      }
    }
    @media(min-width:901px){
      body{
        background-color: #0f0;
      }
    }
```


### 写出div在不固定高度的情况下水平垂直居中的方法？
```
<template>
  <div class="father">
    <div class="son">
      11111111111 <br>
      11111111111 <br>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
/* 第一种 flex */
.father {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.son {
  width: 100px;
  background-color: #ccc;
}
/* 第二种 transform+absolute */
.father {
  height: 100vh;
  position: relative;
}

.son {
  width: 100px;
  background-color: #ccc;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
```

### 如何更改placeholder的字体颜色和大小？
```
  /* Chrome浏览器 */
    input::-webkit-input-placeholder {
      color: red;
    }

    /* 火狐浏览器 */
    input::-moz-placeholder {
      color: red;
    }

    /* IE */
    input:-ms-input-placeholder {
      color: red;
    }
```

### 如何让大小不同的图片等比缩放不变形显示在固定大小的div里？写个例子
图片等比缩放 img{ object-fit: cover/contain;}

div宽高比例固定，跟随屏幕变化而变化，利用padding垂直方向的属性来实现

### 说说你对低版本IE的盒子模型的理解

盒子模型：content,padding,border,margin
W3C盒子宽高为content的宽高； box-sizing: content-box;
IE盒子宽高，content + padding + border； box-sizing: border-box;

### 怎么实现移动端的边框0.5px？
- 一种是通过transform中的scale
  ```
    border: 1px solid red;
    transform: scaleY(.5);
  ```
- 一种是通过meta viewport中设置init-scale为0.5
  `<meta name="viewport" content="width=device-width, initial-scale=0.5">`
  
- 一种是设置hr

    ```
    border: 0px;
    border-bottom: 1px solid red;
    ```
    
- 一种是基于背景渐变实现

    ```
    height: 2px;
    background-image: linear-gradient(0deg, red 50%, transparent 50%)
    ```
### CSS中的calc()有什么作用？
当使用calc的时候，运算符号 左右需要有空格的哦，否则，属性不生效。例如： width: calc(100% - 30px);

###  过渡和动画的区别是什么？
transition 是需要事件进行触发的，且只能触发一次。 无法定义中间的状态信息，类似Flash的关键帧，中间的补间动画无法详细定义
animation 无需事件触发，并且可以周期性播放。可定义中间状态。

### position的relative和absolute定位原点是哪里？
static或relative：最近的块级（display属性值为block，inline-block或list-item）祖先元素的content-box区域；或者最近的建立格式上下文的祖先元素，比如：table容器，flex容器，grid容器或块级容器。

absolute：最近的非static（fixed, absolute, relative, or sticky）祖先元素的padding-box区域。

fixed：可视窗口viewport本身（属于continuous media类型时）或页面区域page area（属于paged media类型时），即初始包含块；

当属性值为fixed或absolute时，其包含块还有可能是最近的含有transform或perspective值不为none的祖先元素的padding-box区域。

### 说下你对cursor属性的理解
cursor是用来显示鼠标不同的光标的
它的属性主要有auto，move，text，pointer，各种方向的resize，还有放大镜的zoom-in，放小镜的zoom-out等

###  标签、class和id选择器三者的区别是什么？分别在什么时候用？
三者的权重不同，都可以作为 CSS 的选择器使用。id > class > tag。

不过在一般的使用中，id 会留给 JavaScript 使用，用来进行 DOM 的操作并且 id 不允许重复。class 和 tag 一般用在 CSS 上，用来进行样式的编辑

### 为什么要使用css sprites？
减少HTTP请求
增加图片显示速度

###  Reset CSS和Normalize CSS的区别是什么？
Reset CSS: 将各个浏览器的默认样式重置
Normalize CSS: 保留各个浏览器的样式,只是让它们更加统一通用了

### 怎么自定义鼠标指针的图案？
cursor: url() ,auto
url是自定义光标图案的绝对路径，auto是默认光标，当我们自定义的光标不起作用时，就用默认光标代替

###  你知道CSS中的字母"C"代表什么吗？
CSS 层叠样式表 Cascading Style Sheet

### 设置字体时为什么建议设置替换字体？
这是由于网站用户的浏览设备不同，可能并不支持或没有安装你所设置的字体。
这时候就会自动使用替换字体来对网页进行一个展示。
设置替换字体可以尽可能保证所有用户的浏览体验。

### 举例说明伪类:nth-child、:first-child与:first-of-type这三者有什么不同？
:nth-child(n): 选择当前元素的父元素下的第n个子元素（从1开始）

:nth-of-type(n)： 选择当前元素的父元素下的第n个同类型子元素（从1开始）

:first-child: 相当于:nth-child(1)

:first-of-type: 相当于:nth-type(1)


### 说说你对min-width和max-width的理解，它们有什么运用场景？
min-width 最小宽度；
max-width 最大宽度。

在自适应的布局中用到，当一个dom元素的宽度不确定时，可以设定这个宽度的变化范围。

### 举例说明实现圆角的方式有哪些？
border-radius

### 有哪些方式可以对一个DOM设置它的CSS样式？
1.可以使用行内样式
2.可以使用style标签
3.可以使用link引入css文件
4.可以使用js动态修改

### transition、animation、transform三者有什么区别？
transition 顾名思义,定义过渡动效;一般都是定义某些属性的过渡动效;
animation: 定义动画,而不是简单的动效了; 必须通过一个 keframe来指定动画过程;
transform: 不定义任何动效或者动画; 只用来定义"变形"; 可以作为keyframe关键帧的动画效果;

### z-index有时不起作用的原因是什么？怎么解决？
1、可能是没有设置position
解决：设置position为relative,absolute,fixed
2、设置了浮动
解决：清除浮动
3、父元素position为relative
解决：设置为absolute

### 说下background-color:transparent和opacity:0的区别是什么？
background-color:transparents是将背景设置为透明，而opacity:0但是将整个块都做透明，包括里面的内容

###  word-wrap、word-break和white-space有什么区别？
word-wrap：现在改为overflow-wrap了；用于控制单词在超出其包裹元素时是否中断单词换行；
white-space：用于处理元素中的空白符号（包括空格，换行符，制表符，<br>元素，文字自然换行）；
word-break：用于控制单词在换行时如何断开；

### 说下你对background-size的理解，它有什么运用场景？
设置背景图的大小，一般用来设置背景图的大小。

###  什么是脱离文档流？有什么办法可以让元素脱离标准的文档流？
正常文档流是块级元素垂直分布，行内和行内块级是水平分布，脱离文档流就是不按照正常文档流的顺序进行排列。
设置float、position可以脱离文档流，float是半脱离，元素中的内容仍处于文档流之中，position:absolute和fixed也会使脱离文档流

### 请说说在什么时候用transition？什么时候使用animation？
transition 相当于是个过度动画，需要又过度效果才会触发。一般用来做元素的放大缩小、平移旋转等简单的操作。transition 只执行一次，当需要执行多次时，一般会利用 :hover 等时机或者使用 javaScript 改变类名进行控制。
animation 需要自己设定关键帧，可以做相对复杂的操作，比如延迟、循环播放等。一般在需要比较复杂的情况才会使用 animation。

### css中的border:none和border:0px有什么区别？
从border: 10px;过渡到border: none;，是不会有动画的；
从border: 10px;过渡到border: 0px;，是可以有动画的。

### 用css怎么实现两端对齐？
flex 中的justify-context 设置为 space-between

### 请说说你对vh、vw的理解以及它们的运用场景是什么？
vw: 100vw为视窗的宽度，即1vw是视窗宽度的1%
vh: 100vh为视窗的高度，即1vh是视窗高度的1%
运用场景
图片查看大图：img { max-height: 90vh; }
代替rem实现移动端布局

### 你有使用过字体图标吗？它有什么好处？
代替图片，可以减少http请求次数，提高页面加载性能。

### css3和css2的区别是什么？
css3增加了更多特性：动画、过渡效果，圆角、文字特效等

### 请举例说明css有哪些不可继承的属性？
1、display：规定元素应该生成的框的类型

2、文本属性：

vertical-align：垂直文本对齐

text-decoration：规定添加到文本的装饰

text-shadow：文本阴影效果

white-space：空白符的处理

unicode-bidi：设置文本的方向

3、盒子模型的属性：width、height、margin 、margin-top、margin-right、margin-bottom、margin-left、border、border-style、border-top-style、border-right-style、border-bottom-style、border-left-style、border-width、border-top-width、border-right-right、border-bottom-width、border-left-width、border-color、border-top-color、border-right-color、border-bottom-color、border-left-color、border-top、border-right、border-bottom、border-left、padding、padding-top、padding-right、padding-bottom、padding-left

4、背景属性：background、background-color、background-image、background-repeat、background-position、background-attachment

5、定位属性：float、clear、position、top、right、bottom、left、min-width、min-height、max-width、max-height、overflow、clip、z-index

6、生成内容属性：content、counter-reset、counter-increment

7、轮廓样式属性：outline-style、outline-width、outline-color、outline

8、页面样式属性：size、page-break-before、page-break-after

9、声音样式属性：pause-before、pause-after、pause、cue-before、cue-after、cue、play-during

### 请使用css画一个圆，方法可以多种
```
1.border-radius

.cirlce{
 width:10vw; height:10vw; background:gray;
 border-radius:50%;
}
2.clip-path

.circle{
 width:10vw; height:10vw; background:gray;
 clip-path: circle();
}
3.svg background

.circle{
width:10vw; height:10vw; 
 background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50%25' cy='50%25' r='50%25' fill='gray'/%3E%3C/svg%3E");
}
4.radial-gradient

.circle{
 width:10vw; height:10vw; 
 background:radial-gradient(gray 70%, transparent 70%);
}
5.font

.circle::after {
    content: "●";
    font-size: 10vw;//字体实际大小
    line-height: 1;
}
6.mix-blend-mode

.circle{
 width: 10vw;height: 10vw;background: gray;
}
.circle::after {
    content: "";display: block;width: 10vw;height: 10vw;
    mix-blend-mode: lighten;
    background: radial-gradient(#000 70%, #fff 70%);
}
```

### 你知道css的预处理器和后处理器都有哪些吗？它们有什么区别呢？
目前最主流的 CSS 预处理器：Sass、LESS、Stylus 。
优缺点
优点：语言级逻辑处理，动态特性，改善项目结构
缺点：采用特殊语法，框架耦合度高，复杂度高

后处理器：Rework 、PostCSS、
优缺点
优点：使用 CSS 语法，容易进行模块化，贴近 CSS 的未来标准
缺点：逻辑处理能力有限.

### 怎样去除图片自带的边距？
display:block

###  height和line-height的区别是什么呢？

height 是元素内容区域高度
line-height 元素内容行高
