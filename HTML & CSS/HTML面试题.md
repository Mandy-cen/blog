 ### 页面导入样式时，使用link和@import有什么区别？

 - link是html标签，import是css提供的
 - 加载页面时候，link会同时加载，import是等页面加载完成才开始加载
 - @import只有在ie5以上才可以被识别，而link是html标签，不存在浏览器兼容问题;
 - Link引入样式的权重大于@import引用（@import是将引用的样式导入到当前的页面中）

### html的元素有哪些（包含H5）？

- 行内元素 a、b、i、span、em、strong、img、input、button
- 块级元素 p、div、ul、ol、li、h1-h6
- 空元素 br
- H5新增的元素：header、nav、section、article、footer、aside等

### HTML全局属性(global attribute)有哪些？

- id
- class
- data-
- style
- title

### HTML5的文件离线存储怎么使用，工作原理是什么？
？？？

### 简述超链接target属性的取值和作用
<a> 标签的 target 属性规定在何处打开链接文档。

- _blank:打开一个全新窗口并显示内容
- _parent:在上一级的窗口显示内容
- _self:在原来的窗口显示内容
- _top:在浏览器的整个窗口显示内容，忽略掉所有的框架结构

### label都有哪些作用？并举相应的例子说明
label通常用来关联一个表单控件

### iframe框架都有哪些优缺点？
- 缺点：
```
1.不利于seo
2.增加服务器的请求
3.window.onload 事件会在所有 iframe 加载完成后才触发，因此会造成页面阻塞（可以通过动态的设置iframe的SRC解决）
```
- 优点：
```
1.投放广告之类的飘窗无疑是最好的选择
2.可以实现跨域，每个 iframe 的源都可以不相同（方便引入第三方内容）
3.异步刷新，单个 iframe 刷新不影响整体窗口的刷新
4.与主页面是分离的，可以独自重载
```

### 浏览器内多个标签页之间的通信方式有哪些？
```
WebSocket （可跨域）
postMessage（可跨域）
Worker之SharedWorker
Server-Sent Events
localStorage
BroadcastChannel
Cookies
```

### viewport常见设置都有哪些？
```
// width=device-width, initial-scale=1.0 是为了兼容不同浏览器
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
```
<img width="710" alt="image" src="https://github.com/user-attachments/assets/43f16675-fab3-402b-b9d3-18feb28fcf72">

### 你对标签语义化的理解是什么？
- 有利于SEO
- 方便维护
- 有利于浏览器识别

### 常见的浏览器内核都有哪些？并介绍下你对内核的理解
Trident （IE内核）
Gecko （FireFox内核）
Webkit （Safari内核，Chrome内核原型）
Blink （Chrome(28及往后版本)、Opera(15及往后版本)和Yandex）

### html5中的form怎么关闭自动完成？
autocomplete="off" （on 是打开）

### http都有哪些状态码？
```
200 成功
301 重定向
304 (未修改) 自从上次请求后，请求的网页未修改过。 服务器返回此响应时，不会返回网页内容。
400 (错误请求) 服务器不理解请求的语法。
403 (禁止) 服务器拒绝请求。
404 (未找到) 服务器找不到请求的网页。
500 (服务器内部错误) 服务器遇到错误，无法完成请求。
501 (尚未实施) 服务器不具备完成请求的功能。 例如，服务器无法识别请求方法时可能会返回此代码。
502 (错误网关) 服务器作为网关或代理，从上游服务器收到无效响应。
503 (服务不可用) 服务器目前无法使用(由于超载或停机维护)。 通常，这只是暂时状态。
504 (网关超时) 服务器作为网关或代理，但是没有及时从上游服务器收到请求。
505 (HTTP 版本不受支持) 服务器不支持请求中所用的 HTTP 协议版本。
```

### 为什么HTML5只需要写`<!DOCTYPE HTML>`就可以？
因为 HTML5 与 HTML4 基于的基准不同。HTML4 基于 SGML 因此需要除了 DOCTYPE 外还需要引入 DTD 来告诉浏览器用什么标准进行渲染。
DTD 还分为标准模式、严格模式。如果什么都不写，就完全让浏览器自我发挥，会变成怪异模式

### title与h1的区别、b与strong的区别、i与em的区别？
- title与h1的区别
  - title是网站标题，一个页面只能有一个
  - h1是文章主题

- b与strong的区别
  - b(bold)是实体标签，用来给文字加粗
  - strong是逻辑标签，作用是加强字符语气

- i与em的区别
  - i(italic)是实体标签，用来使字符倾斜
  - em(emphasis)是逻辑标签，作用是强调文本内容
 
### 你认为table的作用和优缺点是什么呢？
table 布局的好处在于样式好控制，特别是居中、对齐。
缺点在于会多处非常多的 DOM 节点（想想一个 td 里面再来一个 table），会导致页面加载变慢、不利于 SEO（table 原本就不是用来布局的）。
也因此，在 CSS 成熟之后，table 布局马上就变成历史了。


### 怎样在页面上实现一个圆形的可点击区域？
最简单的是border-radius: 50%,然后添加点击事件

### 说说你对html中的置换元素和非置换元素的理解
- 置换元素是指：浏览器根据元素的标签和属性，来决定元素的具体显示内容。例如：浏览器根据标签的src属性显示图片。根据标签的type属性决定显示输入框还是按钮。
- 非置换元素：浏览器中的大多数元素都是不可置换元素，即其内容直接展示给浏览器。例如标签，标签里的内容会被浏览器直接显示给用户。

### 请描述HTML元素的显示优先级
- 帧元素（frameset）> 表单元素 > 非表单元素；
- 有窗口元素 > 无窗口元素；
- 同一类元素间，z-index 值大的元素 > z-index 值小的元素。

### 谈谈你对input元素中readonly和disabled属性的理解
相同点：都会使文本框变成只读，不可编辑。
不同点：
```
readonly是只读(可能是某种特殊处理)，disabled是禁用(可能是权限或其他原因)，意义不同
disabled会使文本框变灰，readonly不会
disabled对所有表单都使用，readonly对hidden、radio、checkbox、range、color无效
disabled的值不会被form收集，readonly的值会
```

### js放在html的`<body>`和`<head>`有什么区别？
js 放在 <head> 中，如果不添加 async 或者 defer 时，当浏览器遇到 script 时，会阻塞 DOM 树的构建，进而影响页面的加载。当 js 文件较多时，页面白屏的时间也会变长。

### 关于`<form>`标签的enctype属性你有哪些了解？
<form> 标签的 enctype 属性，用来控制表单上传的数据的编码格式。其值和 HTTP 请求的 Content-type 值一样。在数据提交到服务器之前，会以 enctype 的值进行编码。
<img width="719" alt="image" src="https://github.com/user-attachments/assets/9ab3ecfa-ab1b-4ba2-88a8-0e58487fb7f9">


### 说说你对属性data-的理解
data- 是HTML5新增的自定义属性，可以用来页面间跳转时携带数据。

### 请说说`<script>`、`<script async>`和`<script defer>`的区别
- <script> : 加载的时候是同步的会阻塞后面代码的执行，加载立即执行。
- <script async>: 异步加载，加载和执行是并行的。
- <script defer>: 异步加载，需等到所有文档加载完才执行。

### 解释下你对GBK和UTF-8的理解？并说说页面上产生乱码的可能原因
GBK编码：是指中国的中文字符，其它它包含了简体中文与繁体中文字符，另外还有一种字符“gb2312”，这种字符仅能存储简体中文字符。

UTF-8编码：它是一种全国家通过的一种编码，如果你的网站涉及到多个国家的语言，那么建议你选择UTF-8编码。

### 说说你对影子(Shadow)DOM的了解
Shadow Dom 是 Web Component 的一种实现，另外 Custom Element 和 Template 亦是如此。
常见的Video Radio 都是对 Shadow dom 的实践，也就是对一段功能的封装，形成模块化。

### 说说你对`<meta>`标签的理解
SEO优化的标签TDK，设置文本格式utf-8等等，设置HTTP头部，设置视口专门做移动端缩放

###  网页上的验证码是为了解决什么问题？说说你了解的验证码种类有哪些
- 解决的问题：
 - 防止机器行为，确定是人为操作，比如登陆、发帖等。
 - 保护服务器，比如12306买票的时候，各种抢购的时候。
- 验证码种类：
 - 1：滑动
 - 2：手机验证码
 - 3：图形验证码

### DOM和BOM有什么区别？
DOM是页面元素节点对象
BOM是浏览器对象

### html和html5有什么区别呢？
1.HTML5简化了很多细微的语法，例如doctype的声明，只需要写<!doctype html>就行了。HTML5与HTML5，XHTML1兼容，但是与SGML不兼容。
2.新增与语义化标签【header、footer、section、article等】
3.canvas替代Flash

### 用一个div模拟textarea的实现

```
  <div class="edit" contenteditable="true">这里是可以编辑的内容，配合容器的 overflow ，多行截断，自定义滚动条，简直好用的不要不要的</div>
```

###  HTML与XHTML二者有不同
XHTML 元素必须被正确地嵌套。
XHTML 元素必须被关闭。
XHTML 标签名必须用小写字母。
XHTML 文档必须拥有根元素。


### html5哪些标签可以优化SEO?
优化 SEO 应该是可以给爬虫有比较明确的含义的标签。尽可能地不要使用 div 到底。

meta: meta 标签中的 keywords 和 description
h1-h6
nav
section
article
footer
header

### 说说你对cookie和session的理解
cookie: 可以通过客户端, 服务端设置, 容量小, 可以通过设置domain来实现同步登录, 除了name, value, 它还有多个选项, domain, path, secure, expires, 客户端和服务端可以通过cookie来通讯, 传递信息

session: 由服务端设置并发起, 是服务端对于用户行为的一种凭证, 通常也是由cookie来维持这种关系, 比如session_id, 或者现在webstorm设置的Webstorm-bb00fc34等! 通过这种维持两者的关系,

### 说说你对WEB标准和W3C的理解与认识？
web标准指的是要符合ECMA和W3C的规范

W3C是对CSS、JS、XML、HTML等的规范和标准。为了更方便使用者和开发者

###  src、href、link的区别是什么？
使用的地方不同，src一般用于表示图片源，js源。 。href一般在标签中使用，表示跳转地址。link一般用于引入css。

###  html的a标签属性rel='nofollow'有什么作用

告诉爬虫，别往下走了，防止爬虫跳出自己的站点。
爬虫默认遇见链接，会继续爬取链接的内容。


### 你对响应式设计的理解是什么？知道它基本的原理是吗
理解：在不同系统，不同设备，不同尺寸的界面，有良好的用户体验，舒适的阅读体验，交互体验。
原理：根据不同设备尺寸，浏览器自动调整或通过样式调整，来保证用户体验。

###  在a标签上的四个伪类执行顺序是什么？
link > visited > hover > active

### a标签下的href="javascript:void(0)"起到了什么作用？说说你对javascript:void(0)的理解？
简单来说，就是阻止a的默认跳转事件

### 举例说明你对HTML5的ruby标签的理解，都有哪些应用场景？
标签定义 ruby 注释（中文注音或字符）
<img width="318" alt="image" src="https://github.com/user-attachments/assets/df49819b-e21e-4a3a-8f3f-86800cae5fce">

### 举例说明如何原样输出HTML代码，不被浏览器解析？
用<textarea></textarea>标签
使用pre标签

###  a标签的href和onclick属性同时存在时哪个先触发？
```
<a href="javascript:alert(1)" onclick="alert(2)">点一下试试，看谁先触发</a>

<a href="javascript:alert(1)" onclick="alert(2);return false;">点一下试试</a>
```
onclick事件先触发， 如果函数执行返回false(全等), 则href不会被触发。
只在chrome 和 frrefox 中试过

### 举例说明你对ol和ul标签的区别？它们的运用场景分别是什么呢？
ol是有序列表，ul是无序列表；
下拉菜单或者横向切换的tab经常使用ul去完成。

### 请描述下元素的href和src有什么区别？
- 1.概念不同
 - href用于在当前文档和引用资源之间确立联系
 - src用于将资源替换当前元素
- 2.解析方式不同
 - href解析时，会并行下载资源且不会停止当前文档处理
 - src解析时，会暂停当前文档处理


### 写出以下几个HTML标签：字体、居中、文字加粗、下标
```
字体：<font></font>
居中：<center></center>
文字加粗：<strong></strong> or <b></b>
下标：<sub></sub>
```

###  HTML5怎么为输入框添加语音输入的功能呢？
`<input type=”text” speech x-webkit-speech />`
原理：在人说话时接收语音，然后放到谷歌后台，谷歌自己写的语音识别系统，再返回数据
缺陷：
 - 只支持google11以上的浏览器
 - 现在谷歌需要翻墙，此功能会失效

### 行内元素、块级元素、空(void)元素分别有哪些？
行内元素： a span b strong i em
块级元素：div ol ul li h1 h2 h3 h4 h5 h6 p
空元素：img br hr input

###  请描述一下cookies、sessionStorage和localStorage的区别？
<img width="723" alt="image" src="https://github.com/user-attachments/assets/94bd6ba3-0f90-4b26-9c1e-7e9f6bec46ad">

### 说说HTML中的`<html>`标签有什么作用？
<html> 元素定义了整个 HTML 文档。
这个元素拥有一个开始标签 <html>，以及一个结束标签 </html>，是为了告诉浏览器html从哪里开始，从哪里结束
元素内容是另一个 HTML 元素（body 元素）。

###  如何在HTML5页面中嵌入音频和视频？
基于<video><audio>两个标签插入，设置src即可

###  在默认的情况下，使用h1标签呈现出什么效果？
h1标签
默认：加粗 块状元素
字体大小：font-size:2em 未经过调整的浏览器大小是 32px

### 

