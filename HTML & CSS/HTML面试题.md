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
