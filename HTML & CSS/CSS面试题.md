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

### ::before和:after中单冒号和双冒号的区别是什么，这两个伪元素有什么作用？
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

