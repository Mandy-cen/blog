## 1.什么是HTML？
超文本标记语言（HyperText Markup Language），在浏览器上运行的一种标记语言；
HTML 不是一种编程语言，而是一种标记语言；
标记语言是一套标记标签 ，HTML 使用标记标签来描述网页 。

## 2、HTML5的新增特性
语义特性，本地存储特性，设备兼容特性，连接特性，网页多媒体特性，三维、图形及特效特性，性能与集成特性，CSS3特性。

![image](https://github.com/user-attachments/assets/472d6543-d853-49e8-8b37-8a4520843b54)

## 3、HTML5 新的表单属性
HTML5 的 <form> 和 <input>标签添加了几个新属性.

<form>新属性：
autocomplete
novalidate
  
<input>新属性：
autocomplete
autofocus
form
formaction
formenctype
formmethod
formnovalidate
formtarget
height 与 width
list
min 与 max
multiple
pattern (regexp)
placeholder
required
step

## `<a>` 元素：创建链接的主要HTML元素是`<a>`（锚）元素。`<a>`元素具有以下属性：

1. href：指定链接目标的URL，这是链接的最重要属性。可以是另一个网页的URL、文件的URL或其他资源的URL。
2. target（可选）：指定链接如何在浏览器中打开。常见的值包括:_blank（在新标签或窗口中打开链接）和 _self（在当前标签或窗口中打开链接）。
3. title（可选）：提供链接的额外信息，通常在鼠标悬停在链接上时显示为工具提示。
4. rel（可选）：指定与链接目标的关系，如 nofollow、noopener 等。

## HTML和XHTML的区别：
```
1、XHTML DOCTYPE 是强制性的，<html>、<head>、<title> 以及 <body> 也是强制性的

2、XHTML 元素必须正确嵌套，必须有结束标签，标签必须小写，必须有

3、属性必须使用小写，属性值必须用引号包围，且不允许属性简写
```


## WebSocket 属性
以下是 WebSocket 对象的属性。假定我们使用了以上代码创建了 Socket 对象：

Socket.readyState只读属性 readyState 表示连接状态，可以是以下值：

```
0 - 表示连接尚未建立。

1 - 表示连接已建立，可以进行通信。

2 - 表示连接正在进行关闭。

3 - 表示连接已经关闭或者连接不能打开。
```

Socket.bufferedAmount:只读属性 bufferedAmount 已被 send()放入正在队列中等待传输，但是还没有发出的 UTF-8 文本字节数。

WebSocket 事件
open	Socket.onopen	连接建立时触发
message	Socket.onmessage	客户端接收服务端数据时触发
error	Socket.onerror	通信发生错误时触发
close	Socket.onclose	连接关闭时触发

WebSocket 方法

Socket.send()	
使用连接发送数据

Socket.close()	
关闭连接
