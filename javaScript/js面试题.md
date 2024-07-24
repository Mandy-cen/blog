

### 写一个把字符串大小写切换的方法

```js
function caseConvert(str){
    return str.replace(/([a-z]*)([A-Z]*)/g, (m, s1, s2)=>{
	return `${s1.toUpperCase()}${s2.toLowerCase()}`
    })
}
caseConvert('AsA33322A2aa') //aSa33322a2AA
```

### 写一个去除制表符和换行符的方法

```
   var str = '大家好  阿斯蒂芬阿斯顿\n发生的发生';
        function fn(str) {
            var s = str.replace(/[\t\n\v\r\f]+/g,'');
            return s;
        }
        console.log(fn(str))
```

### 统计某一字符或字符串在另一个字符串中出现的次数
```
function strCount(str, target) {
  let count = 0
  if (!target) return count
  while(str.match(target)) {
    str = str.replace(target, '')
    count++
  }
  return count
}

console.log(strCount('abcdef abcdef a', 'abc'))
```


[js]
写一个加密字符串的方法


### 写一个判断数据类型的方法
```
 function isType(obj) {
    return (type) => {
        return Object.prototype.toString.call(obj) === `[object ${type}]`
    }
}
```

### 简要描述下JS有哪些内置的对象
```
时间对象Date
字符串对象String
数学对象Math
数值对象Number
数组对象Array
函数对象Function
函数参数集合arguments
布尔对象Boolean
错误对象Error
基础对象Object
```

[js]
写一个获取当前url查询字符串中的参数的方法
[软技能]
网页应用从服务器主动推送到客户端有那些方式？

### 说说你对javascript的作用域的理解
- 全局作用域。这个没啥说的，就是在顶层环境中申明的变量都是全局作用域，他们的属性其实都在window对象下面。
- 函数作用域。在函数内部定义的变量都是函数作用域，只能在函数中访问到，当然也可以通过闭包来访问。除此之外，在其他地方是没法访问函数内部的变量的。

### 什么是闭包？优缺点分别是什么？
闭包是可以访问另一个函数作用域的函数。由于 javascript 的特性，外层的函数无法访问内部函数的变量；而内部函数可以访问外部函数的变量（即作用域链）。

- 优点：使用闭包可以隐藏变量以及防止变量被篡改和作用域的污染，从而实现封装。
- 缺点：由于保留了作用域链，会增加内存的开销。因此需要注意内存的使用，并且防止内存泄露的问题。

### 写一个数组去重的方法（支持多维数组）

### 返回到顶部的方法有哪些？把其中一个方法出来

- window.scrollTo(0,0); //ie不支持，但好用
- document.documentElement.scrollTop = 0;
- location.href += '#';

### typeof('abc')和typeof 'abc'都是string, 那么typeof是操作符还是函数？
typeof 是操作符，不是函数。可以添加括号，但是括号的作用是进行分组而非函数的调用。

### 说说你对SVN和GIT的理解和区别
SVN是集中式，GIT是分布式

### 你理解的"use strict";是什么?使用它有什么优缺点？

代码使用严格模式，其实就是更严格了

设立"严格模式"的目的，主要有以下几个：
　　- 消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为;
　　- 消除代码运行的一些不安全之处，保证代码运行的安全；
　　- 提高编译器效率，增加运行速度；
　　- 为未来新版本的Javascript做好铺垫。

几个常见的严格模式
- 禁止this关键字指向全局对象
- 禁止在函数内部遍历调用栈
- 全局变量必须显式声明
- arguments不再追踪参数的变化


### "attribute"和"property"有什么不同？
property是DOM中的属性，是JavaScript里的对象
attribute是HTML标签上的属性，它的值只能够是字符串，比如input标签，默认有value属性

### 写一个验证身份证号的方法

```
function isChinese(str) {
  const re = /^[\u4e00-\u9fa5]+$/;
  return re.test(str);
}
```

### 你对new操作符的理解是什么？手动实现一个new方法

### 0.1 + 0.2、0.1 + 0.3和0.1 * 0.2分别等于多少？并解释下为什么？
0.30000000000000004
0.4
0.020000000000000004

EcmaScrpt规范定义Number的类型遵循了IEEE754-2008中的64位浮点数规则定义的小数后的有效位数至多为52位导致计算出现精度丢失问题！

### 如何快速让一个数组乱序，写出来
arr.sort((a, b) => Math.random() - .5)

### 写一个判断设备来源的方法
```
let ua = navigator.userAgent;
  // 移动端
  isMobile: ("ontouchstart" in window || navigator.msMaxTouchPoints) ? true : false,
  // 微信
  isWechat: /micromessenger/gi.test(ua),
  // qq
  isQQ: /qq/gi.test(ua),
  // VV音乐
  isvvmusic: /vvmusic/gi.test(ua),
  // 安卓
  isAndroid: /android/gi.test(ua),
  // iOS
  isIOS: /iphone|ipad|ipod|itouch/gi.test(ua), // IOS
```

### 说说bind、call、apply的区别？并手写实现一个bind的方法
call() 和 apply() 作用都是改变 this 的指向，区别是传参的方式不同。除了第一个参数外，call() 可以接收一个参数列表，apply() 只接受一个参数数组。 bind() 绑定完之后返回一个新的函数，不执行。

### 说说你对arguments的理解，它是数组吗？

### 写一个方法判断字符串是否为回文字符串

```
 */
var isPalindrome = function(s) {
  if (s.length === 1) return true
  const str = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
  const strReverse = str.split('').reverse().join('')
  return str === strReverse
};
```
### 造成内存泄漏的操作有哪些？
- 1、没有使用的全局变量；
- 2、闭包(闭包可以维持函数内部变量);
- 3、过度递归；
- 4、死循环；

### 说说你对this的理解
指的是当前运行环境的上下文。当然这个this是会发生改变的 如 bind call apply

###  请你解释一个为什么10.toFixed(10)会报错？
原因是 toFixed前面跟一个整数时，他会把10.toFixed()这个“.”误解为小数点

### 说说你对eval的理解
不安全的,
容易出错, 因为你不知道你传入的参数是什么鬼
性能底下.
某种情况下跟new Function(), setTimeout, setInterval类似
不利于代码可维护性, 可拓展性
不是在无可奈何的情况下, 请不要使用

### 说说你对模块化的理解
模块化解决了代码污染的问题。提高了代码的重复率以及让多人合作编程了可能。

模块化分为
```
AMD: require.js 为代表，依赖前置，一律先加载再使用。
CMD: sea.js 为代表，依赖就近原则。
UMD: 同时支持 AMD 和 CMD 方法。
ES6 import/export
```

### 为什么会有跨域问题？怎么解决跨域？
浏览器为了安全，产生了同源策略，协议、域名、端口有一个不同，就会产生跨域.
```
JSONP 优点是可以兼容老浏览器，缺点是只能发送GET请求
CORS 优点简单方便，支持post请求，缺点是需要后端的配合,不支持老版浏览器。。
Server Proxy 优点是前端正常发送ajax请求，缺点是后端会二次请求。
```
###  写出几种创建对象的方式，并说说他们的区别是什么？
```
const a = new Object() // 创建, 不推荐
const b = {} // 赋值, 性能比a要好
const c = Object.create() // 继承创建, Object.create(null) 很多框架都有用来做性能优化
```
### 请说说你对事件冒泡机制的理解
事件流的过程包括 捕获阶段、目标阶段、冒泡阶段。 事件冒泡可以理解为当源dom触发事件后会一直向它的父级传播，直到document。 阻止冒泡可以使用 event.stopPropagation()来阻止

### 什么是事件委托？它有什么好处？能简单的写一个例子吗？
利用冒泡的原理，将事件加到父级身上，触发执行效果，这样只在内存中开辟一块空间，既节省资源又减少DOM操作，提高性能
可以为动态添加的元素绑定事件

### document的load 和ready有什么区别？

主要执行顺序的区别，load：页面资源加载完成； ready：是dom加载完成。

### JSONP的原理是什么？解决什么问题？
动态插入script标签，执行callback回调函数，将回调函数中的参数输出
解决跨越问题
缺点： 只支持get请求

### 请说下你对__proto__和prototype的理解
只有函数对象才有prototype属性；prototype对象上存放共用的方法和属性
对象都有__proto__属性，__proto__是指向该对象构造函数的原型属性（即prototype）

### 写一个格式化金额的方法
```
function moneyFormal(m){
  return m.toLocaleString()
}
```

### 如何让(a==1 && a==2 && a==3)的值为true，把"=="换成"==="后还能为true吗？

 ```
var val = 0;

Object.defineProperty(global, 'a', {
  get: function(){
    return ++val;
  }
})
```

### 说说你对数据类型转换的理解是什么？类型转换的方法有哪些？
数据类型的转换有显式转换和隐式转换
显式转换： number() parseInt() parseFloat()
隐式转换： + ++ * *= +=

### 说说你对base64的理解，它的使用场景有哪些？
上传图片时 先将图片转化为base64 然后上传
对于小质量的图片 我们可以转化为base64 在页面展示
url 通过base64加密

### Ajax请求中get和post方式有什么区别呢？分别在哪些场景下使用？

- get：
```
1.  GET请求会将参数跟在URL后进行传递，也就是会在url中显示

     2.  GET请求有数据长度限制，一般在2000个字符，而POST没有。

     3. GET方式请求的数据会被浏览器缓存起来，POST没有

     4.  GET在某些情况下会有安全问题，POST没有。

     5. 在客户端使用get请求时,服务器端使用Request.QueryString来获取参数

     6. get请求参数会在url中显示，容易被他人窃取，post在请求体中，不会被窃取
```
- post：
```
     1. POST请求是作为HTTP消息的实体内容发送给WEB服务器。

     2. 客户端使用post请求时,服务器端使用Request.Form来获取参数。 

     3. post一般用于修改服务器上的资源，对所发送的信息没有限制。
     4. post比get更加安全

     5. post需要设置请求头
```

### 移动端点击事件为什么会有延迟？有哪些方法可以解决？
原因：等待300ms看用户是点击还是双击缩放
解决办法：禁止缩放、设置默认视口宽度为设备宽度、设置css touch-action:none、fastclick.js

### js中=、==、===三个的区别是什么？并说明它们各自的工作过程

1：=是赋值操作符
2：==是相等运算符，判断两值是否相等，如果类型不一 会自动类型转换，
3：=== 全等于， 判断两值是否是相同类型，再判断是否是同值。

###  举例说明数组和对象的迭代方法分别有哪些？
ES5中为数组定义了5个迭代方法。每个方法都要接收两个参数：要在每一项上面运行的函数和（可选的）运行该函数的作用域对象---影响this的值。
1.every()和some();
every()：对数组中的每一项运行给定函数，如果每一项都返回true，则返回true，否则false；
some()：对数组中的每一项运行给定函数，如果至少有一项返回true，则返回true，否则false；
2.map()和filter();
filter()：对数组中的每一项给定函数，返回值为true的项重新组成新的数组；
map()：岁数组中的每一项给定函数，返回每一项调用这个函数的结果；
3.forEach();
forEach()：对方法中的每一项运行给定函数。这个方法没有返回值；
迭代对象:
用for-in遍历对象
用for-of遍历类数组对象（ES6）
用Object.keys()获取对象属性名的集合


### js延迟加载的方式有哪些？
defer 属性
async 属性
动态创建DOM方式
使用jQuery的getScript方法
使用setTimeout延迟方法
让JS最后加载

### js异步加载有哪些方案？
```
<script type="module">（自带 defer 效果） 和 动态加载模块的 import() 函数，配合 async/await
```

###  请描述下null和undefined的区别是什么？这两者分别运用在什么场景？
null 变量不存在
underfined 变量未赋值

### 解释下为什么`{} + [] === 0`为true？
```
{} 认定是语法块
这个放在前面，只有混淆作用，并不参与运算。
+[] 类型转换 0
0===0；
```

### 用js写出死循环的方法有哪些？
```
while（true）{
}

for(let i = 0;i<0;i++){
}
```

### 说说你理解的同步和异步的区别是什么？
同步就是上一个任务结束下一个任务再开始，比如alert弹窗，你不点击确定他就会阻塞后边代码的执行；
异步就是按顺序开始（不可能同时开始）但是不一定按顺序结束，比如图片的加载就是走的异步。

###  不依赖第三方库，说下如何使用js读取pdf？

```
这个问题两种方式解读：
1、前端不使用第三方库，如何将 PDF 文件显示在网页上。

现代桌面浏览器都自带 PDF viewer 插件的，用 <iframe src="file.pdf"> 就能显示。（embed应该也可以）

2、前端不使用第三方库，如何读取并解析 PDF 格式，利用 HTML 技术渲染 PDF 文件内容？

这个就是 pdf.js 干的事情。思路是使用 FileReader API 读取文件二进制内容，根据 PDF 文件规范解析内容（PDF 是开源格式），根据 PDF 文件描述的文档内容和布局，用 canvas 或者 DOM 展现出来。内嵌的 font 或图片可以提取二进制然后用 blob URL 搞定，难点是如何用 DOM 实现 PDF 格式描述的布局 (不清楚 PDF 是如何描述布局的)。
```

###  准确说出`'1,2,3,4'.split()`的结果是什么（包括类型和值）？
运行结果为 ["1,2,3,4"]，是一个长度为1的Array，元素类型为String。
关于split函数，其可以接受两个参数，第一个参数是字符串或正则表达式，从该参数指定的地方分割 stringObject；但是第二个参数并不是说限制分割次数，而是限制返回Array的最大长度，举个例子：
```
let a = '1,2,3,4,5,6';
a.split(',', 3);  // 返回的结果为 ["1", "2", "3"]
a.split(',', 5);  // 返回的结果为 ["1", "2", "3", "4", "5"]
```

### 请说说json和jsonp的区别？
json: 轻量级的数据格式
jsonp: 解决跨域的一种方式

### 说说你对作用域链的理解
```
作用域链指的是代码执行时,
查找变量的规则,
先在当前自身的作用域查找,
找不到在往上级作用域查找,
查不到的话直至全局环境,
当然全局环境不能访问局部作用域的变量
```
###  请描述下js的原型和原型链的理解以及它们之间的关系
原型:每个对象的__proto__属性
原型链: 每个对象找原型的规则
关系:只有有原型,才能形成原型链

### 请详细描述AJAX的工作原理
```
AJAX是用于网页和服务器进行异步通信的技术。
基本原理是，通过XMLHttpRequest向服务器发送异步请求，获得服务器返回的数据，利用js更新页面。
其核心功能在于XMLHttpRequest对象。
```
创建一个ajax的步骤大致可以分为以下几步
- 创建XHMHttpRequest对象
- 打开链接 （指定请求类型，需要请求数据在服务器的地址，是否异步i请求）
- 向服务器发送请求（get类型直接发送请求，post类型需要设置请求头）
- 接收服务器的响应数据（需根据XMLHttpRequest的readyState属性判定调用哪个回调函数）
- 更新页面


### 分别写出防抖和节流的两个函数，并描述它们分别有什么运用场景

```
type Timeout = number // browser
// type Timeout = NodeJS.Timeout // node

/**
 * 防抖：生成一个函数，它在被调用后会等待一段时间再执行。
 * 如果在等待期间再次调用，之前还未执行的调用会被取消。
 * @param fn 要防抖的函数
 * @param timeout 超时时间
 */
function debounce(fn: (...args: any[]) => any, timeout: number) {
    let time: Timeout = null
    return function _debounced(...args: any[]) {
        if (time !== null)
            { clearTimeout(time) }
        time = setTimeout(() => {
            fn(...args)
            time = null
        }, timeout)
    }
}

/**
 * 节流：生成一个函数，它在被调用后一段时间内再次被调用不起作用。
 * @param fn 要节流的函数
 * @param timeout 超时时间
 */
function throttle(fn: (...args: any[]) => any, timeout: number) {
    let time: Timeout = null
    return function _throttled(...args: any[]) {
        if (time === null) {
            fn(...args)
            time = setTimeout(() => time = null, timeout)
        }
    }
}
```

 ### 如何使用js来截图？怎样截可见区域和整个页面？
 ```
可以基于html2canvas 和 canvas2image 两个第三方类实现截图。

如果打算截取整个页面 可以直接设定

html2canvas(document.body).then(function (canvas) {
        document.body.appendChild(canvas);
      });
如果打算截取可见区域 额外设置一下宽高即可

width: document.documentElement.clientWidth,
height: document.documentElement.clientHeight,
y: document.documentElement.scrollTop
```

### document.write和innerHTML有什么区别？
document.write 是会对整个页面进行重绘。
innerHTML则是只对受影响的DOM元素进行重绘

###  如何实现文件拖动上传？
利用 HTML5 的 drag & drop API 来实现。需要注意的是，必须要设置 dragover 事件，不然不会触发 drop 事件。

###  JavaScript有几种类型值？
基本类型： string、number、boolean、Undefined、null、Symbol、BigInt
引用类型：object、array、function

### JSON.stringify有什么局限性和哪些技巧
会忽略undefined，function，Symbol，不能正确处理NaN，Infinity，循环引用

###  原生的字符串操作方法有哪些？请列举并描述其功能
str.split() 字符转数组
str.trim() 去除空格
str.replace() 内容替换
str.substr() 字符串截取
str.slice() 返回区间内字符串
str.repeat() 重复字符串
str.substring()
str.includes() 判断字符串中是否包含该字符
str.indexOf()

### 请解释下NaN === NaN的结果
false， NaN不等于任何数包括他自己

### 请描述下ajax的请求都有哪些步骤？
1.创建XMLHttpRequest
let xhr=new XMLHttpRequest;
2.连接服务器
xhr.open("get","goods.json",true)
true代表异步，false代表同步。goods.json代表请求的路径
3.向服务器发送请求
xhr.send()
4.接受服务器响应的数据

ajax的作用：向http服务器发送请求，并可以接收到http服务器响应的数据

###  CSS3中的transition是否可以过渡opacity和display？
transition可以过渡opacity, 但不可过渡display.

一般情况下线性属性如opacity都是可以被transition所过渡的, 非线性或者离散的值如display不可被过渡.

### 自己实现数组的 `map`、`filter`、`find` 方法

```
map

Array.prototype.newMap = function(fn, context) {
    let newArr = new Array;
    if(typeof fn !== "function") {
        throw new TypeError(fn + "is not a function");
    }
    var context = arguments[1];
    for (var i = 0; i < this.length; i++) {
        newArr.push(fn.call(context, this[i], i, this))
    }
    return newArr
}
find

Array.prototype.newFind = function(fn, context) {
    let str;
    if(typeof fn !== "function") {
        throw new TypeError(fn + "is not a function");
    }
    var context = arguments[1];
    for (var i = 0; i < this.length; i++) {
        if(fn.call(context, this[i], i, this)) {str = this[i];break; }
    }
    return str
}
filter

Array.prototype.newfilter = function (fn, context) {
    let newArr = new Array;
    if (typeof fn !== "function") {
        throw new TypeError(fn + "is not a function");
    }
    var context = arguments[1];
    for (var i = 0; i < this.length; i++) {
        if (fn.call(context, this[i], i, this)) { newArr.push(this[i]) }
    }
    return newArr
}
```

###  请举例说明动态操作DOM的方法有哪些？
```
创建一个元素

createElement()
向元素末尾添加一个子节点

appendChild()
将新的元素插入到指定元素的前面

insertBefore(new,old);
删除一个子节点
removeChild() //接收一个节点类型的；参数是要删除的这个元素；
替换子节点

replaceChild(new,old); //用新的元素替换原有的元素
克隆元素

cloneChild()
//接收一个布尔类型的参数 true,false
//如果不传参数，默认是false；
```

### 阻止事件的默认行为有哪些？说说它们之间的区别是什么？
阻止默认事件：event.preventDefault()
阻止事件冒泡：event.stopPropation()

### 实现异步编程有哪些方式？推荐用哪种
1、回调函数
2、事件监听。事件执行顺序取决于某个事件是否触发
3、Promise
4、生成器函数可以实现异步，但是不推荐
5、async/await 相当于生成器函数的语法糖

推荐使用async/await配合promise


### 在js中attribute和property的区别是什么？
attribute

元素在HTML中的键值对
attribute 会始终保持 html 代码中的初始值(除了href)
property

attribute在对应的JS DOM节点上的对象属性
Property是有可能变化的(跟随用户操作).

### 用js实现一个复制粘贴的功能
obj.select();//通过选中对象再执行复制命令
document.execCommand("Copy")

###  ajax的请求状态有哪几种？
<img width="713" alt="image" src="https://github.com/user-attachments/assets/46b66cd2-5689-4a38-8b86-abb2735d4a3e">

###  getElementById和querySelector方法的区别是什么？
getElementById 传入的值是dom的id
querySelector 传入的值 #id, .class, tag。。。,且命中第一个元素.

### 用原生js获取DOM元素的方法有哪些
getElementById
getElementByName --通过name属性
getElementByClassName
getElementByTagName
querySelector
querySelectorAll
document.documentElement ---获取html
document.body ---获取body

###  js如何实现打印指定的区域（局部打印）？
var dom = document.getElementById('div1');
var win = window.open('');
win.document.write(dom.outerHTML);
win.print();
win.close();

### 写一个网络不通时则提醒用户的方法
```
window.addEventListener('online',function(){
alert('online now');
});

window.addEventListener('offline',function(){
alert('offline now');
});
```

###  js垃圾回收的方式有哪些？
1、标记清除
2、引用计数

### 异步加载和延迟加载有什么区别？
异步加载：async
浏览器会在解析HTML的同时进行加载javascript，一旦该javascript加载完毕，浏览器会暂停HTML的加载并执行javascript，之后继续HTML的加载。

延迟加载： defer
同样是解析HTML的同时进行加载javascript，但是浏览器会等待HTML全部解析完毕后再进行执行已加载的javascript。


### 解释下offsetWidth、clientWidth、scrollWidth这三者的区别是什么
offsetWidth 是对象的实际宽度,边框，滚动条宽度
clientWidth是对象的整体宽度，不包含边框和滚动条
scrollWidth是对象的实际宽度，不包含边框和滚动条

### 说出至少十条你理解的js规范
1.尽量使用const去定义常量，且采用大写加_，如 MAX_COUNT = 10
2.尽量写代码注释；
3.try catch不确定的代码块；
4.Promise的reject处理；
5.及时清理不用的变量、定时器；
6.switch 语句应使用break中断，而不是return；
7.命名语义化；
8.尽量减少对闭包的使用
9.尽可能使用if判断做容错处理；
10.尽量避免使用内置方法或属性名字去定义，如var self = this;

###  举例说明这三种方法map、reduce和filter的区别是什么？
map: 遍历数组，执行回调，返回一个新数组
[2, 3, 4].map( a => a + 2) // 6,5,6
reduce: 方法对数组中的每个元素按序执行一个由您提供的 reducer 函数，每一次运行 reducer 会将先前元素的计算结果作为参数传入，最后将其结果汇总为单个返回值。
[2,3,4].reduce((a, b) => a + b, 10) // 19
filter: 过滤数组，返回满足条件的元素并返回一个新数组
[2,3,4].filter(a => a > 2) // 3,4

###  说说js跳出循环return、break、continue的区别？
return 是结束循环，并且返回一个值
break 是跳出当前的循环体，
coninue 是跳出当前这一次的循环，并接着循环

###  js事件中currentTarget和target的区别是什么
Event 接口的只读属性 currentTarget 表示的，标识是当事件沿着 DOM 触发时事件的当前目标。它总是指向事件绑定的元素，而 Event.target 则是事件触发的元素。

### 请比较下for、forEach、for of的性能的性能
1.for 最好
2.forEach与for of 相差无几 平均测试下来forEach略高for of
3.forEach 无法通过 break跳出 for of内存占用上有一定的优势

### 微任务和宏任务有什么区别？
宏任务：script整体代码、setTimeout、setInterval...
微任务：Promise.then、Object.observe、process.nextTick...
运行机制：当前宏任务执行结束 -> 是否有微任务 --> 执行当前微任务 --> 执行下一个宏任务

### 举例说明object.freeze有哪些用途呢？
Object.freeze() 方法可以冻结一个对象或数组。 可以提升性能。
它和const 完全不同

### 页面上的DOM有多个相同的ID，用js获取时结果会是怎么样的？
只能获取第一个id的dom。
想要获取全部id相同的dom可以用document.querySelectorAll()

###  setTimeout和setInterval有什么区别呢？
setTimeout 只执行一次，setInterval 没有终止会一直执行

###  axios为什么能在浏览器中环境运行又能在node中环境运行？
axios的getDefaultAdapter函数可以判断当前环境，浏览器环境会require一个js文件，node环境会require另一个js文件，前者是用promise管控的xhr一套流程，后者是用node的http库发起http请求。

 ### axios相比原生ajax的优点有哪些呢？
 从 node.js 创建 http 请求
在浏览器中创建 XMLHttpRequests
支持 Promise API
提供了一些并发请求的接口（重要，方便了很多的操作）
支持拦截请求和响应
转换请求和响应数据
取消请求
自动转换 JSON 数据
客户端支持防止CSRF
客户端支持防御 XSS

###  在axios中怎样添加授权验证？
可以在headers请求头里添加token
config.headers['Authorization'] = 'Bearer ' + token

###  Math.ceil()、Math.round()、Math.floor()三者的区别是什么？
上取整 四舍五入 下取整

### localStorage什么时候过期？
localStorage的存储默认不会过期的，需要手动清理或者清除浏览器的缓存
也可以在缓存数据时设置过期时间

###  fetch和axios请求的原理都是基于XMLHttpRerequst吗？
axios基于XMLHttpRequest封闭
fetch 是html5原生对象

###  使用delete删除数组，其长度会改变吗？
不会

### 内存泄漏和内存溢出有什么区别
内存泄漏是分配的内存无法释放，导致一直占用内存空间，最终可能引发内存溢出
内存溢出是申请或使用内存超出可以分配的内存时(例如往一个整形空间存放长整形的数据)

###  js源代码压缩都有哪些方法？它们的压缩原理分别是什么？
方法
1.在线工具
2.webpack

原理
1.删除注释
2.变量名方法名字符精减

###  ajax如何接收后台传来的图片？
1.设置responseType为 Blob，2.将Blob保存为文件

### 说说防止重复发送ajax请求的方法有哪些？各自有什么优缺点？
防抖法：在一段时间内重复请求，则取消本次请求
节流法：在一段时间内只能请求一次，下次请求必须在前一次请求完成后
等值法:未完成请求状态不再请求，而是完成后直接返回相同的内容

### 如何避免JS浮点运算的精度问题（例：0.1+0.7=0.7999999999999999）
可以利用Number.toLocaleString，默认最多保留3位有效小数

###  js中的undefined和 ReferenceError: xxx is not defined 有什么区别？
undefined是变量申明未赋值的初始值
ReferenceError: xxx is not defined是为声明变量的报错信息

### 为什么jsonp不支持post的方法？
jsonp是跨域解决方案的其中一种方式，依赖script来突破同源策略的限制，而script是通过get方式拉取资源的。


###  promise有哪几种状态？是如何变化的？
1.pending(初始状态)
2.调用resolve（成功），pending->fulfilled
3.调用reject（失败），pending->rejected
而且状态改变以后，就不能在变了

### 写一个方法，实现修改当前的URL链接但页面不跳转的功能
window.history.pushState("", "", "/test");

### 写个方法将base64的数据流装换为二进制流
```
/**

Base64字符串转二进制流
@param {String} dataurl Base64字符串(字符串包含Data URI scheme，例如：data:image/png;base64, )
/
function dataURLtoBlob(dataurl) {
var arr = dataurl.split(","),
mime = arr[0].match(/:(.?);/)[1],
bstr = atob(arr[1]),
n = bstr.length,
u8arr = new Uint8Array(n);
while (n--) {
u8arr[n] = bstr.charCodeAt(n);
}
return new Blob([u8arr], {
type: mime,
});
}
let dataurl = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAAGElEQVQIW2P4DwcMDAxAfBvMAhEQMYgcACEHG8ELxtbPAAAAAElFTkSuQmCC';
let blob = dataURLtoBlob(dataurl);
```

###  请说说html、body、document、window四者的区别是什么？
html
有多重意义，既是超文本标记语言，也是 HTML 文档的根元素，其他元素都是其子元素。

body
body 元素包含了文档的可见内容，HTML 文档最终显示的内容都是其子元素。document.body 可以直接访问此元素。

document
document 对象是 window 的子属性，用来访问页面中的元素，保存着操作 DOM 的 API。

window
window 对象在文档打开时自动创建，保存着 DOM，BOM，核心JS 等所有内容。
对于客户端 JS 而言，window 对象是其全局对象，通过访问 window 对象提供的客户端 API 操作DOM，发起网络请求，进行本地存储，开启定时器，获取浏览器信息等各种能力。

### 解释下什么是暂时性死区？
如果用ES6新出的语法let和const，这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。总之，在代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区
例子：
console.log(a); // ReferenceError
let a; // 声明前获取就会报错

###  Promise和setTimeout执行先后有什么区别？
Promise 和 setTimeout 都是异步代码。JS会先执行同步代码，待主线程清空后开始轮询任务队列的异步任务。

Promise 开启的异步任务在 resolve / reject 后推入到微任务队列，setTimeout 开启的异步任务会在计时结束后推入到宏任务队列。

轮询时会先将微任务队列中的待执行任务推入到主线程中执行。微任务队列清空后将宏任务队列的任务推入到主线程执行。

###  setTimeout(fn,0)，延迟执行吗？
会延迟

js是单线程的，所有任务按照任务队列（evenLoop ）顺序执行。
任务队列分为宏任务队列（macrotask）和微任务队列（microtask）

evenLoop 的执行顺序：script主线程任务（属于宏任务）-> 微任务（microtask）-> 下一个宏任务（macrotask）
setTimeout 属于宏任务
setTimeout(fn,0)的含义是，指定某个任务在主线程最早可得的空闲时间执行，也就是说，尽可能早得执行
HTML5标准规定了setTimeout()的第二个参数的最小值（最短间隔），不得低于4毫秒，如果低于这个值，就会自动增加

## js的作用域有哪些？
ES5中：全局变量和局部变量
ES6中：块级作用域

### 哪些场景下会使用闭包？

1.封装私有变量
2.setTimeout
3.函数防抖

###  Number.isNaN和isNaN有什么区别？
参照ECMA-262：
isNaN(number)：

let num = ToNumber(number);
如果num为NaN，返回true；
返回false；
Number.isNaN(number):

先判断number是否为数字类型，如果不是，直接返回false；
如果number为NaN,返回true；
否则返回false。

###  写一个方法获取文件的扩展名
```
function getFileExtension(filename) {
  const ex = filename.match(/(?<=\.)\w+$/);
  return ex && ex[0];
}
```
### []和{}的toString和valueOf的结果分别是什么？
[]的原型上方法：Array.prototype.toString() ,执行[].toString当然返回js内置的这个函数了，[].toString()返回函数返回值'';
{}的原型上方法：Object.prototype.toString(),执行({}).toString返回js内置的这个函数,({}).toString()返回"[object Object]"，等价于
Object.prototype.toString.call({}) ；
valueOf是Object基类原型上的方法：Object.prototype.valueOf,执行[].valueOf()即找到Object.prototype.valueOf执行，返回[];
({}).valueOf()同理返回{}

### 不安全的JSON值有哪些？
function，undefined，symbol，循环使用的对象

###  RegExp如何做到不区分大小写？
字面量 /a/i;构造函数 new RegExp('a','i')

### 写一个方法将时间戳转换为指定的时间格式
```
比如把时间戳date = '1536714683' 转化为字符串为 '2018-09-12 09:11:23'

formatDateTime(date) {
if (date instanceof Date) {
let year = date.getFullYear()
let month = date.getMonth() + 1
let day = date.getDate()
let hour = date.getHours()
let minute = date.getMinutes()
let second = date.getSeconds()
month = month > 9 ? month : '0' + month
day = day > 9 ? day : '0' + day
hour = hour > 9 ? hour : '0' + hour
minute = minute > 9 ? minute : '0' + minute
second = second > 9 ? second : '0' + second
return ( year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second )
}
return null
}
可以用以下函数formatDateTime（'1536714683'） = '2018-09-12 09:11:23'
```

### 当页面刷新时，JS请求哪些地方有缓存处理？
浏览器缓存，cdn缓存，dns缓存

### 请描述下js中click和onclick的区别？
1.onclick是绑定事件,告诉浏览器在鼠标点击时候要做什么
2.click本身是方法,作用是触发onclick事件,只要执行了元素的click()方法,就会触发onclick事件

###  js中splice()和slice()方法有什么区别？
两者都可以删除数组的某一部分；
splice 会改变原数组，并且除去删除之外，还可以添加
slice 不会改变原数组， slice(start,end) 包括start，不包括end

### 为什么会有同源策略？
主要是为了保护用户数据安全，体现在以下方面

1.为了防止恶意网页可以获取其他网站的本地数据。
2.为了防止恶意网站iframe其他网站的时候，获取数据。
3.为了防止恶意网站在自已网站有访问其他网站的权利，以免通过cookie免登，拿到数据。

###  为什么会有宏任务和微任务之分？

????

###  Object.defineProperty 和ES6中的Proxy有什么区别？
defineProperty 会对原数据造成改变，而 proxy 相当于对原数据的代理不会改变元数据
proxy 会自动监听数组长度的变化和对象属性的添加
proxy 监听整个对象，defineProperty 只能监听对象内的属性



