# JS的作用域与闭包

## 专业术语

- 常量、变量、数据类型
- 形参、实参
- 匿名函数、具名函数、自执行函数
- 函数声明、函数表达式
- 堆、栈
- 同步、异步、进程、线程


## 执行上下文

当函数执行时，会创建一个称为执行上下文（execution context）的环境，分为创建和执行2个阶段

### 创建阶段

创建阶段，指函数被调用但还未执行任何代码时，此时创建了一个拥有3个属性的对象

```js
executionContext = {
    scopeChain: {}, // 创建作用域
    variableObject: {}, // 初始化变量，函数，形参
    this: {} // 指定this
}
```

### 代码执行阶段

代码执⾏阶段主要的⼯作是：1分配变量函数的引⽤赋值；2执⾏代码

举个栗⼦

```js
// ⼀段这样的代码
function demo(num) {
  var name = 'xiaowa';
  var getData = function getData() {};
    function c() {}
  }
demo(100);

// 创建阶段⼤致这样，在这个阶段就出现了【变量提升(Hoisting)】
executionContext = {
  scopeChain: { ... },
  variableObject: {
    arguments: {// 创建了参数对象
      0: 100,
      length: 1
    },
    num: 100, // 创建形参名称，赋值/或创建引⽤拷⻉
    c: pointer to function c(), // 有内部函数声明的话，创建引⽤指向函数体
    name: undefined, // 有内部声明变量a，初始化为undefined
    getData: undefined // 有内部声明变量b，初始化为undefined
  },
  this: { ... }
}

// 代码执⾏阶段，在这个阶段主要是赋值并执⾏代码
executionContext = {
  scopeChain: { ... },
  variableObject: {
    arguments: {
      0: 100,
      length: 1
    },
    num: 100,
    c: pointer to function c(),
    name: 'xiaowa', // 分配变量，赋值
    getData: pointer to function getData() // 分配函数的引⽤，赋值
  },
  this: { ... }
}
```

### 执⾏上下⽂栈

- 浏览器中的JS解释器是单线程的，相当于浏览器中同⼀时间只能做⼀个事情。
- 代码中只有⼀个全局执⾏上下⽂，和⽆数个函数执⾏上下⽂，这些组成了执⾏上下⽂栈 （Execution Stack）。
- ⼀个函数的执⾏上下⽂，在函数执⾏完毕后，会被移出执⾏上下⽂栈

举个栗⼦

```js
function c(){ console.log('ok'); }
function a(){
  function b(){
    c();
  }
  b();
 }
a();
```
这个栗⼦的执⾏上下⽂栈是这样的

<img width="564" alt="image" src="https://github.com/Mandy-cen/blog/assets/45354825/8f8aa316-a3b7-496d-b2cf-40e93f3ed38d">

## 作用域

## 闭包

## this


## 面向对象
