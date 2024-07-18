用递归算法实现，数组长度为5且元素的随机数在2-32间不重复的值

[js]
写一个方法去掉字符串中的空格
[js]
去除字符串中最后一个指定的字符

[js]
写一个方法把下划线命名转成大驼峰命名


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
