

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
