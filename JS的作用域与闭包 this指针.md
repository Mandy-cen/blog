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

js中有全局作⽤域、函数作⽤域，es6中⼜增加了块级作⽤域。作⽤域的最⼤⽤途就是隔离变量或函 数，并控制他们的⽣命周期。作⽤域是在函数执⾏上下⽂创建时定义好的，不是函数执⾏时定义的。

举个栗⼦

```js
// 不要看晕了哦~
function a () {
    return function b() {
        var myname = 'b';
        console.log(myname); // b
    }
}
function c() {
    var myname = 'c';
     b();
}

var b = a();
c();

// 去掉函数b中的myname声明后
function a () {
    return function b() {
        // var myname = 'b';
        console.log(myname); // 这⾥会报错
    }
}
function c() {
    var myname = 'c';
     b();
}
var b = a();
c();
```

### 作⽤域链
当⼀个块或函数嵌套在另⼀个块或函数中时，就发⽣了作⽤域的嵌套。在当前函数中如果js引擎⽆法找 到某个变量，就会往上⼀级嵌套的作⽤域中去寻找，直到找到该变量或抵达全局作⽤域，这样的链式 关系就称为作⽤域链(Scope Chain)

## 闭包

⾼级程序设计三中:闭包是指有权访问另外⼀个函数作⽤域中的变量的函数.可以理解为(能够读取其他 函数内部变量的函数) 
wiki百科的解释： https://en.wikipedia.org/wiki/Closure_(computer_programming)

In programming languages, a closure, also lexical closure or function closure, is a technique for implementing lexically scoped name binding in a language with first-class functions. Operationally, a closure is a record storing a function[a] together with an environment.[1] The environment is a mapping associating each free variable of the function (variables that are used locally, but defined in an enclosing scope) with the value or reference to which the name was bound when the closure was created.[b] Unlike a plain function, a closure allows the function to access those captured variables through the closure's copies of their values or references, even when the function is invoked outside their scope.

```js
function outer() {
    var top = xxxx;
    function inner() {
        xxx.innerHTML = top;
    }
}
```

平时⽤在哪⼉？

1、封装私有变量(amd的框架等都使⽤)
```js
// 普通的定义类的⽅式
function Person() {
    this._attackVolume = 100;
}
Person.prototype = {
    attack(body) {
        body.bloodVolume -= this.attackVolume - body.defenseVolume;
    }
};
var person = new Person();
console.log(person._attackVolume);
// ⼯⼚⽅法
function Person() {
    var _attackVolume = 100;
    return {
        attack() {
            body.bloodVolume -= this.attackVolume - body.defenseVolume;
        }
    };
}
var person = new Person();
console.log(person._attackVolume);
```

2、存储变量
```js
// 封装的时候
function getListDataManager() {
    // 外层scope中定义⼀个变量
    let localData = null;
    return {
        getData() {
            // ⾥⾯的函数使⽤外层的变量，⽽且是反复使⽤
            if (localData) {
             return Promise.resolve(localData);
             }
            return fetch('xxxx') .then(data => localData = data.json());
        }
    };
}
// ⽤的时候
const listDataManager = getListDataManager();
button.onclick = () => { // 每次都会去获取数据，但是有可能是获取的缓存的数据          
    text.innerHTML = listDataManager.getData();
};
window.onscroll = () => {
    // 每次都会去获取数据，但是有可能是获取的缓存的数据
    text.innerHTML = listDataManager.getData();
};
```

## this

⼀共有5种场景。

### 场景1: 函数直接调⽤时
```js
function myfunc() {
    console.log(this) // this是widow
}
var a = 1;
myfunc();
```

### 场景2: 函数被别⼈调⽤时
```js
function myfunc() {
    console.log(this) // this是对象a
}
var a = { myfunc: myfunc };
a.myfunc();
```

### 场景3: new⼀个实例时
```js
function Person(name) {
    this.name = name;
    console.log(this); // this是指实例p
}
var p = new Person('zhaowa');
```

### 场景4: apply、call、bind时
```js
function getColor(color) {
    this.color = color;
    console.log(this);
}
function Car(name, color){
    this.name = name; // this指的是实例car
    getColor.call(this, color); // 这⾥的this从原本的getColor，变成了car
}
var car = new Car('卡⻋', '绿⾊');
```

### 场景5: 箭头函数时
```js
// 箭头函数
var a = {
myfunc: function() {
    setTimeout(() => {
        console.log(this); // this是a
    }, 0)}
};
a.myfunc();
```
总结⼀下

<img width="547" alt="image" src="https://github.com/Mandy-cen/blog/assets/45354825/77dcf842-bbc0-423d-a05b-b6c9b63f9119">

- 1、对于直接调⽤的函数来说，不管函数被放在了什么地⽅，this都是window 
- 2、对于被别⼈调⽤的函数来说，被谁点出来的，this就是谁 
- 3、在构造函数中，类中(函数体中)出现的this.xxx=xxx中的this是当前类的⼀个实例 
- 4、call、apply时，this是第⼀个参数。bind要优与call/apply哦，call参数多，apply参数少 
- 5、箭头函数没有⾃⼰的this，需要看其外层的是否有函数，如果有，外层函数的this就是内部箭头函数 的this，如果没有，则this是window



## 相关⾯试题

### 1、考察this三板斧

#### 1.1
```js
function show () {
    console.log('this:', this);
}
var obj = { show: show };
obj.show();

function show () { console.log('this:', this); }

var obj = {
    show: function () { show(); }
};

obj.show()
```

#### 1.2
```js
var obj = {
    show: function () {
        console.log('this:', this);
    }
};
(0, obj.show)();
```

#### 1.3
```js
var obj = {
    sub: {
        show: function () {
            console.log('this:', this);
        }
    }
}

#### 1.4
```js
var obj = { show: function () { console.log('this:', this); } };
var newobj = new obj.show();
```

#### 1.5
```js
var obj = {
    var obj = {
        show: function () { console.log('this:', this);}
    };
}
var newobj = new (obj.show.bind(obj))();
```


#### 1.6
```js
var obj = { show: function () { console.log('this:', this); } };
var newobj = new (obj.show.bind(obj))();
```

#### 1.7
```js
var obj = { show: function () { console.log('this:', this); } };
var elem = document.getElementById('book-search-results'); elem.addEventListener('click', obj.show);
elem.addEventListener('click', obj.show.bind(obj)); elem.addEventListener('click', function () { obj.show(); });
```

### 2. 作⽤域

#### 2.1
```js
var person = 1;
function showPerson() {
    var person = 2;
    console.log(person);
}
showPerson();
```

#### 2.2
```js
var person = 1;
function showPerson() {
    console.log(person);
    var person = 2;
}
showPerson();
```

#### 2.3
```js
var person = 1;
function showPerson() {
    console.log(person);
    var person = 2;
    function person() {}
}
showPerson();
```

#### 2.4
```js
var person = 1;
function showPerson() {
    console.log(person);
    function person() {}
    var person = 2;
}
showPerson()
```

#### 2.5
```js
for(var i = 0; i < 10; i++) {
    console.log(i);
}

for(var i = 0; i < 10; i++) {
    setTimeout(function(){
        console.log(i);
    }, 0);
}

for(var i = 0; i < 10; i++) {
    (function(i){
        setTimeout(function(){
            console.log(i);
        }, 0) }
    )(i);
}

for(let i = 0; i < 10; i++) {
    console.log(i);
}
```

###  ⾯向对象

#### 3.1
```js
function Person() {
    this.name = 1;
    return {};
}
var person = new Person();
console.log('name:', person.name);
```

#### 3.2
```js
function Person() {
    this.name = 1;
}
Person.prototype = {
    show: function () {
        console.log('name is:', this.name);
    }
};
var person = new Person();
person.show();
```

#### 3.3
```js
function Person() {
    this.name = 1;
}
Person.prototype = {
    name: 2,
    show: function () {
        console.log('name is:', this.name);
     }
};

var person = new Person();
Person.prototype.show = function () {
    console.log('new show');
};

person.show()
```

#### 3.4
```js
function Person() {
    this.name = 1;
}
Person.prototype = {
    name: 2,
    show: function () { console.log('name is:', this.name);}
};

var person = new Person();
var person2 = new Person();

person.show = function () { console.log('new show'); };
person2.show();
person.show();
```

### 4 综合题
```js
function Person() { this.name = 1; }

Person.prototype = {
    name: 2,
    show: function () { console.log('name is:', this.name);}
};
Person.prototype.show();

(new Person()).show();
```
