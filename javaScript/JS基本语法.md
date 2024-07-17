## js语言的组成
> javascript = ECMAScript + BOM + DOM

核心(ECMAScript)
浏览器对象模型(BOM)
文档对象模型(DOM)

## JS数据类型

### 基本数据类型
- Number：数字
  - 整型和浮点型
  - toFixed(num): 在数字后面调用，num为小数位，有四舍五入的功能，得到一个字符串
  - parseInt()
  - mparseFloat()
- String：字符串
  - 用引号（单/双引号）括起来的内容
- Boolean: 布尔类型
  - Boolean 类型有两个值：true和false

### 引用数据类型
- Array：数组
- Object：对象

### 特殊数据类型

- Null
  Null 类型是一个只有一个值的数据类型，即特殊的值 null。它表示一个空对象引用(指针)，而 typeof 操作符检测 null 会返回 object
  Undefined
  Undefined类型只有一个值，即特殊的 undefined，在使用 var 声明变量，但没有对其初始化时，这个变量的值就是 undefined
  与not defined的区别(not defined:未声明)
- NaN
  是一个特殊的值，即非数值(Not a Number)。数学运算无法得到数字时，就会返回NaN
  不代表任何值，也不等于任何值，甚至自己都不等于自己
  任何数据与它运算都返回NaN
  isNaN(a)：用来判断a到底是不是非数字,返回布尔值

### 数据类型判断

typeof
instanceof


## 作用域
### 全局变量与局部变量
- 全局变量：在全局作用域下声明的变量，可以在任意地方中使用，作用范围比较大，我们称为全局变量
- 局部变量：在函数内（局部作用域）声明的变量，只在函数中可以使用，作用范围较小，我们称之为局部变量

### 变量的访问规则
- 就近原则（如查找变量a）：
  - 使用变量a时先从当前函数查找，如果当前函数有变量a则使用;
  - 如果当前函数无变量a,则往父级函数查找，如果找到则使用，并停止查找;
  - 如果在父级函数还是无法找到，则继续往上一层函数查找，以此类推，直到最顶层(全局作用域)，如果还是没找到，则报not defined错误;
- 作用域链：每个函数在定义时就形成了局部作用域，如果存在多个函数嵌套，他们之间就会建立起某种联系，直到全局作用域，这种联系称之为作用域链。当函数访问变量时，根据就近原则在这个作用域链中从内到外查询变量。

## 数组方法
- push： 往数组尾部添加一个或多个元素，返回数组新的长度
- pop：删除数组最后一个元素，返回删除的元素
- unshift：往数组开头添加一个或多个元素，返回数组新的长度
- shift：删除数组第一个元素，返回删除的元素
- sort：将数组中的元素排序，并返回排序后的数组
  - 默认以字符串的排列方式（转换成ASCII码进行对比）

- reverse：将数组中的元素颠倒顺序，返回逆序后的数组
- slice(start[,end])：返回数组的片段或子数组，从start开始到end(不包括end所对应的元素)
  - 如果省略end参数，则截取到数组的最后一项

- splice(start,deleteNum,…items)：在数组中插入、删除、替换的通用方法
  - start：起始索引位置
  - deleteNum：要删除的数量
  - items：插入的元素（可以是多个）
    
- join(separator) 返回字符串值，其中包含了连接到一起的数组的所有元素
  - separator为分隔符，默认为逗号

- concat() 返回一个新数组，这个新数组是由调用这个方法的数组和参数组成
参数可以是多个

## ES5新增的方法

- 判断是否为数组 Array.isArray()

- 索引方法 indexOf/lastIndexOf(keyword [,startIndex]) （不存在keyword，则返回-1）

- 迭代方法
  - forEach(fn) 遍历方法，for循环没有太大差别，比for循环方便
  - map(fn) 返回每次函数调用的结果组成的数组
  - filter(fn) 得到执行fn后返回true时对应的数组元素，利用这个方法可对数组元素进行过滤筛选
  - every(fn) 如果该函数对每一项都返回 true，则返回true
  - some(fn) 如果该函数对任何一项返回 true，则返回true
 
- 归并方法reduce(fn,initVal) 、 reduceRight(fn,initVal)

## 字符串String
- 字符串的属性和方法

  - length: 表示字符串的长度，只读（只能读取）
  - charAt(3) //获取下标为3的字符
  - str[3]//通过下标获取
  - trim()：删除前后所有空格，返回新的字符串
    
  - 字符串的查找方法
    - indexOf/lastIndexOf(keyword [,startIndex]) 从开头/尾部向后查找字符串keyword第一次出现的位置,如果没找到返回-1
    - search(str|regExp) 查找字符串第一次出现的位置 （与indexOf的区别：search方法支持正则表达式）
    - match(str|regExp) 匹配字符串，返回一个数组
    - replace(str|rgExp,’‘) 替换字符串，注意：这里的替换只能执行一次，不能够进行全局匹配，如果需要全局匹配，则应使用正则表达式
      
  - 字符串的截取方法
    - substring(start[,end])：不包括end所在字符，end省略表示截取到最后
    - substr(start[,len])：支持负数，len为截取的数量
    - slice(start,end) ：截取start到end(不包括end)的字符串，支持负数
      
  - 字符串分割
    - split(分割符)：根据分割字符，把字符串拆分成数组
      
  - 字符串大小写转换
    - toLowerCase()：转换成小写
    - toUpperCase()：转换成大写

## Math对象方法

- Math.PI //3.1415926

- 方法
```
round(3.6) //四舍五入取整
ceil(11.3) //12 向上取整
floor(11.8) //11 向下取整
random() //返回0-1之间的随机数（不包括1）
max(num1, num2) //返回较大的数
min(num1, num2) //返回较小的数
abs(num) //绝对值
pow(x,y) //x的y次方
sqrt(num) //开平方根
```

## 日期Date
- 创建时间
```
//1）创建当前时间的日期和时间
var d = new Date();//得到的是代码执行时的时间（本地时间）

//2）创建指定日期的时间和日期
var d = new Date("2015/08/22");
var d = new Date(56521211021);//参数为距1970-1-1零时的毫秒数
```

- 获取/设置时间
  - 获取年月日
```
getFullYear()/setFullYear(2014)
getMonth()/setMonth(8)注意：获取月份是从0开始的
getDate()/setDate(25)
```
  - 获取星期
`getDay() 0-6:星期天-星期六`

 - 获取时分秒
```
getHours()/setHours()
getMinutes()/setMinutes()
getSeconds()/setSeconds()
```

- 其他
  ```
  getTime()/setTime()：获取/修改某个日期自1970年1月1日0时以来的毫秒数
  toLocaleDateString(); 以特定地区格式显示年、月、日
  toUTCString(); 转换成UTC时间

  // es5方法
  Date.parse(“2015-08-24”)//返回指定日期距1970-1-1零时的毫秒数 PS：转换格式默认支持2015-08-24或2015/08/24
  
  Date.now();//返回执行这行代码时距1970-1-1零时的毫秒数
  ```

- 延迟与定时器
```
setTimeout(fn,200)：两百毫秒后执行fn这个函数（只执行一次）,返回一个id标识
clearTimeout(timeoutID)：清除指定id标识的延迟操作
setInterval(fn,30)：每隔30毫秒执行一次fn这个函数,返回一个id标识
clearInterval(intervalID)：清除指定id标识的定时器操作
```

## BOM
BOM 是Browser Object Model（浏览器对象模型）的缩写，提供与浏览器窗口进行交互的对象。JavaScript语法的标准化组织是ECMA，DOM的标准化组织是W3C, 而BOM缺乏标准。这也是各种浏览器不兼容的根源所在
- 浏览器窗口尺寸
  - innerWidth/innerHeight, //表示浏览器窗口”可视区域”尺寸
  - outerWidth/outerHeight //表示整个浏览器窗口的尺寸
- 滚动相关
  - scrollX/scrollY //获取浏览器窗口滚动条滚动过的距离
  - scrollTo(x,y) //设置浏览器滚动距离
  - scrollBy(xnum,ynum) //设置基于当前位置滚动的距离，可以为负数
 
- 系统对话框
  - alert(msg)//弹出对话框
  - confirm(msg)//弹出警告框，返回布尔值
  - prompt(msg,default)//弹出输入框，返回消息或null
  (以上三个方法都会暂停代码的执行)

  - open(url,name,[options]) : 打开一个新窗口并返回新 window 对象
    -  name:不命名会每次打开新窗口，命名的第一次打开新窗口,之后在这个窗口中加载
    - options为字符串：'width=400,height=400,top=200,left=200'
    - opener父窗口对象，通过open方法打开的窗口才有opener对象
  - close(): 关闭窗口
  - print(): 调出打印对话框
 
- 属性对象
  - document(核心): 文档对象，让我们可以在js脚本中直接访问页面元素(DOM)
  - history(重要): 历史对象,包含窗口的浏览历史，可以实现后退
    - 属性：length 返回浏览器历史列表中的 URL 数量。
    - 方法：
      - back() 加载 history 列表中的前一个 URL。
      - forward() 加载 history 列表中的下一个 URL。
     
  - location: location是BOM最有用的对象之一，保存着当前窗口中加载文档的相关信息，还提供一些导航功能，它是个很特别的对象，既是window的属性，也是document的属性
    - 属性
      - hash 设置或返回从井号 (#) 开始的 URL（锚）==>哈希值。
      - href 设置或返回完整的 URL。
      - search 设置或返回从问号 (?) 开始的 URL（查询部分）。
    - 方法：
      - reload() 重新加载当前文档，带参数true表示不使用缓存刷新页面
    
  - navigator
    - appName 浏览器名称
    - appVersion 浏览器版本
    - platform 操作系统
    - userAgent 用户代理信息，通过该属性可以获取浏览器及操作系统信息
    - geolocation 获取地理位置信息

## DOM
DOM是Document Object Model（文档对象模型）的缩写，它是W3C国际组织的一套Web标准。是针对HTML和XML文档的一个API，它定义了访问HTML文档对象的一套属性、方法和事件

- 节点获取
  - document.getElementById(id)
  - getElementsByTagName(tagname)
  - getElementsByClassName()
  - document.getElementsByName()
 

- 节点属性
  - nodeType 获取节点类型 1：元素节点；2：属性节点；3：文本节点
  - nodeName  返回节点的名称，根据其类型。
  - nodeValue 返回节点的值（元素节点的nodeValue为null）

- 节点方法
  - document.createElement() 创建一个元素节点
  - document.createTextNode() 创建一个文本节点
  - document.createAttribute() 创建一个属性节点（了解）
  - parent.appendChild()  向节点的子节点列表的结尾添加新的子节点
  - parent.insertBefore(new,node)  在指定的子节点node前插入新的子节点new。
  - cloneNode(boolean)  复制节点，为true是深复制。
  - parent.removeChild(ele)  删除（并返回）当前节点parent的指定子节点ele。
  - parent.hasChildNodes() 判断当前节点是否拥有子节点,返回布尔值

- 利用节点关系获取其他节点
  - 获取父级节点
    - ele.parentNode 得到ele元素的父节点
  - 获取子节点
    - ele.childNodes 得到ele元素的全部子节点列表（类数组）
    - ele.firstChild 获得ele元素的第一个子节点
    - ele.lastChild 获得ele元素的最后一个子节点
  - 获取兄弟节点
    - ele.nextSibling 获得ele元素的下一个兄弟节点
    - ele.previousSibling 得到ele元素的上一个兄弟节点

- 元素节点的操作
 - ele.getAttribute(attr) //获取元素的属性值（自定义属性获取）
 - ele.setAttribute(attr,val); //设置元素的属性
 - ele.removeAttribute(attr) //删除属性attr
 - ele.hasAttribute(attr) //判断是否存在属性attr

## 事件

- 鼠标事件
  - onclick 当用户点击某个对象时调用的事件。
  - ondblclick 当用户双击某个对象时调用的事件。
  - onmousedown 鼠标按钮被按下。
  - onmouseup 鼠标按键被松开。
  - onmouseover 鼠标移到某元素之上。
  - onmouseout 鼠标从某元素移开。
  - onmousemove 鼠标被移动时触发。
  - onmouseenter 在鼠标光标从元素外部移动到元素范围之内时触发。这个事件不冒泡
  - onmouseleave 在位于元素上方的鼠标光标移动到元素范围之外时触发。这个事件不冒泡，
  - oncontextmenu 鼠标右键菜单展开时触发。
 
- 键盘事件
  - onkeydown 某个键盘按键被按下。
  - onkeyup 某个键盘按键被松开。
  - onkeypress 键盘<字符键>被按下,而且如果按住不放的话，会重复触发此事件。
 
- 表单事件
  - onselect 输入框文本被选中。
  - onblur 元素失去焦点时触发。
  - onfocus 元素获得焦点时触发。
  - onchange 元素内容被改变，且失去焦点时触发。
  - onreset 重置按钮被点击。
  - onsubmit 确认按钮被点击。
  - oninput 输入字符时触发

- 什么是事件冒泡
在一个对象上触发某类事件（如onclick事件），那么click事件就会沿着DOM树向这个对象的父级传播，从里到外，直至它被处理程序处理，或者事件到达了最顶层（document/window）

停止事件的传播
  - 标准：event.stopPropagation();
  - IE8-：event.cancelBubble = true;

阻止浏览器默认行为
  - 标准：event.preventDefault();
  - IE8-：event.returnValue = false;

## ES5

- document事件：readystatechange、DOMContentLoaded

为什么要用严格模式
- 消除javascript语法的一些不合理，不严谨的地方，减少一些怪异行为；
- 消除代码运行的一些不安全之处，保证代码运行的安全；
- 提高编译器效率，增加运行速度；
- 为未来新版本的javascript做好铺垫；

JSON对象方法
- JSON.parse(text)：将json字符串转换成对象/数组
- JSON.stringify(value)：将数组/对象转换成标准的json字符串

获取元素节点：
- querySelector(selector)获取匹配选择器的第一个元素节点，返回DOM节点
- querySelectorAll(selector) 获取匹配选择器的所有元素，返回数组

- bind() 用于将当前函数和指定对象绑定，返回一个新的函数

- data自定义属性

## ES6

- 变量声明
  - let
  - const

- 解构赋值

- 字符串扩展 includes、repeat、startsWith/endsWith
 
- 字符串模板, 使用反引号`表示(重点)

- 数组 for..of

- 对象扩展 Object.assign(obj1,obj2,…objN)

- 箭头函数

- 新增Symbol数据类型：表示独一无二的值，一旦创建后就不可更改

- 新增Map集合、Set集合
  
- 生成器 Generators

## 闭包

```
闭包是指有权访问另一函数作用域中的变量的函数
闭包，可以访问函数内部的局部变量，并让其长期驻留内存
由于闭包会携带包含它的作用域(运行环境)，因此会比其他函数占用更多内存，过度使用闭包可能会造成性能问题。
```

