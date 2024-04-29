# Javascript ⾯向对象编程、原型链、继承.md

## ⾯向对象编程

### 什么是⾯向对象编程？

⾯向对象是⼀种编程思想，经常被拿来和⾯向过程⽐较。

其实说的简单点，

⾯向过程关注的重点是动词，是分析出解决问题需要的步骤，然后编写函数实现每个步骤，最后依次调⽤函数。

⽽⾯向对象关注的重点是主谓，是把构成问题的事物拆解为各个对象，⽽拆解出对象的⽬的也不是为了实现某个步骤，⽽是为了描述这个事物在当前问题中的各种⾏为。

⾯向对象的特点是什么？
封装：让使⽤对象的⼈不考虑内部实现，只考虑功能使⽤把内部的代码保护起来，只留出⼀些 api 接⼝供⽤户使⽤
继承：就是为了代码的复⽤，从⽗类上继承出⼀些⽅法和属性，⼦类也有⾃⼰的⼀些属性
多态：是不同对象作⽤于同⼀操作产⽣不同的效果。多态的思想实际上是把“想做什么”和“谁去做“分开

⽐如下棋的过程,
⾯向过程是这样的：开局->⽩⽅下棋->棋盘展示->检查胜负->⿊⽅下棋->棋盘展示->检查->胜负->循环

⽤代码表示可能是⼀连串函数的调⽤
init();
whitePlay(); // ⾥⾯实现⼀遍下棋的操作
repaint(); // 棋盘展示
check();
blackPlay(); // 再单独实现⼀遍下棋的操作
repaint(); // 棋盘展示
check();

⾯向对象是这样的：棋盘->开局选⼿->下棋->棋盘->重新展示->棋盘->检查胜负->选⼿->下棋->棋盘->重新展示->棋盘->检查胜负

⽤代码表示可能是这样的
const checkerBoard = new CheckerBoard(); // CheckerBoard 类内部封账了棋盘的操作，⽐如初始化棋盘，检查胜负关系等
const whitePlayer = new Player(‘white’); // Player 类内部封装了各种玩家的操作，⽐如等待，落棋，悔棋
const blackPlayer = new Player(‘black’);

whitePlayer.start(); // start ⽅法的结束，内部封装了或者通过事件发布触发checkerBoard.repaint(), checkerBoard.check()的调⽤
blackPlayer.start();

你只需要调⽤ new ⼀个 player, 然后调⽤ start ⽅法，也就是说我们只需要关注⾏为，⽽不需要知道内部到底做了什么。

⽽且如果要加⼀些新功能，⽐如悔棋，⽐如再加⼀个玩家，⾯向对象都很好扩展。

### 在上⾯的例⼦中，⾯向对象的特性是怎么表现出来的呢？

- 封装： Player, CheckerBoard 类，使⽤的时候并不需要知道内部实现了什么，只需要考虑暴露出的 api 的使⽤
- 继承：whitePlayer 和 blackPlayer 都继承⾃ Player，都可以直接使⽤ Player 的各种⽅法和属性
- 多态：whitePlayer.start() 和 blackPlayer.start() 下棋的颜⾊分别是⽩⾊和⿊⾊

### 什么时候适合使⽤⾯向对象

可以看出来，在⽐较复杂的问题⾯前，或者参与⽅较多的时候，⾯向对象的编程思想可以很好的简化问题，并且能够更好的扩展和维护。

⽽在⽐较简单的问题⾯前，⾯向对象和⾯向过程其实差异并不明显，也可以⼀步⼀步地按照步骤来调⽤。

## Js 中的⾯向对象

### 对象包含什么

- 方法
- 属性

### ⼀些内置对象
* Object Array Date Function RegExp *

### 创建对象

#### 1.普通⽅式

每⼀个新对象都要重新写⼀遍 color 和 start 的赋值

```js 
const Player = newObject();
Player.color = "white";
Player.start = function(){
   console.log("white下棋");
};
```

或者⼯⼚模式，这两种⽅式都⽆法识别对象类型，⽐如 Player 的类型只是 Object
```js
function createObject(){
   const Player =new Object
   Player.color ="white";
   Player.start=function(){
       console.log("white下棋");
   }; 
  return Player;
}
```

#### 2.构造函数/实例

通过 this 添加的属性和⽅法总是指向当前对象的，所以在实例化的时候，通过 this 添加的属性和⽅法都会在内存中复制⼀份，这样就会造成内存的浪费。

但是这样创建的好处是即使改变了某⼀个对象的属性或⽅法，不会影响其他的对象（因为每⼀个对象都是复制的⼀份）

```js
function Player(color){
  this.color  = color;
  this.start =function(){
    console.log(color +"下棋");
  };
}

const whitePlayer = new Player("white");
const blackPlayer = new Player("black");
```

Tips. 怎么看函数是不是在内存中创建了多次呢？

⽐如 2. 构造函数中，我们可以看到 whitePlayer.start === blackPlayer.start // 输出 false

#### 3.原型

通过原型继承的⽅法并不是⾃身的，我们要在原型链上⼀层⼀层的查找，这样创建的好处是只在内存中创建⼀次，实例化的对象都会指向这个 prototype 对象。

```js
function Player(color){
    this.color = color;
}

Player.prototype.start = function() {
     console.log(color +"下棋");
};

const whitePlayer = new Player("white");
const blackPlayer = new Player("black");
```

#### 4.静态属性

是绑定在构造函数上的属性⽅法，需要通过构造函数访问

⽐如我们想看⼀下⼀共创建了多少个玩家的实例

```js
function Player(color){
    this.color = color;
    if(!Player.total){
      Player.total = 0;
    }
    Player.total++;
}

let p1 = new Player("white");
console.log(Player.total);// 1
let p2 = new Player("black");
console.log(Player.total);// 2
```

## 原型及原型链

### 在原型上添加属性或者⽅法有什么好处？
刚才已经说过了，如果不通过原型的⽅式，每⽣成⼀个新对象，都会在内存中新开辟⼀块存储空间，当对象变多之后，性能会变得很差。

但是通过

```js
Player.prototype.xx = function(){};
Player.prototype.xx = function(){};
Player.prototype.xx = function(){};
```

这种⽅式向原型对象添加属性或者⽅法的话，⼜显得⾮常麻烦。所以我们可以这样写
```js
Player.prototype = {
   start: function(){
       console.log("下棋");
   },
  revert: function(){
       console.log("悔棋");
   },
};

```

### 怎么找到 Player 的原型对象？
```js
function Player(color){
  this.color = color;
}

Player.prototype.start = function(){ console.log(color +"下棋");};

const whitePlayer = new Player("white");
const blackPlayer = new Player("black");

console.log(blackPlayer.__proto__); // Player {}
console.log(Object.getPrototypeOf(blackPlayer));// Player {}，可以通过Object.getPrototypeOf来获取__proto__
console.log(Player.prototype);// Player {}
console.log(Player.__proto__);// [Function]
```
可以看⼀下 prototype.png 原型的流程图

<img width="604" alt="image" src="https://github.com/Mandy-cen/blog/assets/45354825/4d5c2ca0-b0e5-431b-9722-6306ab7c720c">

### 那么 new 关键字到底做了什么？

- 1.⼀个继承⾃ Player.prototype 的新对象 whitePlayer 被创建
- 2.whitePlayer.proto指向 Player.prototype，即 whitePlayer.proto = Player.prototype
- 3.将 this 指向新创建的对象 whitePlayer
- 4.返回新对象
     - 4.1 如果构造函数没有显式返回值，则返回 this
     - 4.2 如果构造函数有显式返回值，是基本类型，⽐如number,string,boolean, 那么还是返回this
     - 4.3 如果构造函数有显式返回值，是对象类型，⽐如{ a: 1 }, 则返回这个对象{ a: 1 }
 
后⾯看⼀下怎么⼿写实现 new 函数
```js
// 1. ⽤new Object() 的⽅式新建了⼀个对象 obj
// 2. 取出第⼀个参数，就是我们要传⼊的构造函数。此外因为 shift 会修改原数组，所以arguments 会被去除第⼀个参数
// 3. 将 obj 的原型指向构造函数，这样 obj 就可以访问到构造函数原型中的属性
// 4. 使⽤ apply，改变构造函数 this 的指向到新建的对象，这样 obj 就可以访问到构造函数中的属性
// 5. 返回obj

function objectFactory(){
    let obj =new Object();
    let Constructor = [].shift.call(arguments);
    obj.__proto__ = Constructor.prototype;
    let ret = Constructor.apply(obj, arguments);
    
    return typeof ret ==="object" ? ret : obj;
}
```

### 原型链⼜是什么呢？
我们都知道当读取实例的属性时，如果找不到，就会查找与对象关联的原型中的属性，如果还查不到，就去找原型的原型，⼀直找到最顶层为⽌。

举个例⼦

```js
function Player(){}
Player.prototype.name ="Kevin";
var p1 = new Player();
p1.name = "Daisy";
// 查找p1对象中的name属性，因为上⾯添加了name，所以会输出“Daisy”
console.log(p1.name);// Daisy
delete p1.name;
// 删除了p1.name，然后查找p1发现没有name属性，就会从p1的原型p1.__proto__中去找，也就是Player.prototype，然后找到了name，输出"Kevin"
console.log(p1.name);// Kevin
```

那如果我们在 Player.prototype 中也找不到 name 属性呢 那么就会去 Player.prototype.proto中去寻找，也就是
{}

```js
Object.prototype.name ="root";

function Player(){}

Player.prototype.name = "Kevin";
var p1 = newPlayer();

p1.name = "Daisy";
// 查找p1对象中的name属性，因为上⾯添加了name，所以会输出“Daisy”
console.log(p1.name);// Daisy

delete p1.name;
// 删除了p1.name，然后查找p1发现没有name属性，就会从p1的原型p1.__proto__中去找，也就是Player.prototype，然后找到了name，输出"Kevin"
console.log(p1.name);// Kevin

delete Player.prototype.name;
console.log(p1.name);
```
这样⼀条通过 proto和 prototype 去连接的对象的链条，就是原型链

### 继承

#### 原型链继承

##### 1. 如果有属性是引⽤类型的，⼀旦某个实例修改了这个属性，所有实例都会受到影响

```js
functionParent(){
    this.actions =["eat","run"];
}
functionChild(){}

Child.prototype = new Parent()
Child.prototype.constructor = Child

const child1 = new Child()
const child2 = new Child()

child1.actions.pop()
console.log(child1.actions)// ['eat']
console.log(child2.actions)// ['eat']
```

##### 2.创建 Child 实例的时候，不能传参

** 构造函数继承 **

看到上⾯的问题 1，我们想⼀下该怎么解决呢？
能不能想办法把 Parent 上的属性⽅法，添加到 Child 上呢？⽽不是都存在原型对象上，防⽌被所有实例共享。

##### 实现

针对问题1. 我们可以使⽤ call 来复制⼀遍 Parent 上的操作

```js
function Parent() {
  this.actions = ['eat', 'run']

  this.name = 'parentName'
}
function Child() {
  Parent.call(this)
}

const child1 = new Child()
const child2 = new Child()
child1.actions.pop()

console.log(child1.actions)// ['eat']
console.log(child1.actions)// ['eat', 'run']
```

针对问题 2. 我们应该怎么传参呢？

```js
function Parent(name, actions) {
  this.actions = actions

  this.name = name
}
function Child(id, name, actions) {
  Parent.call(this, name) //如果想直接传多个参数, 可以 Parent.apply(this, Array.from(arguments).slice(1))
  this.id = id
}
const child1 = new Child(1, 'c1', ['eat'])
const child2 = new Child(2, 'c2', ['sing', 'jump', 'rap'])

console.log(child1.name)// { actions: [ 'eat' ], name: 'c1', id: 1 }
console.log(child2.name)// { actions: [ 'sing', 'jump', 'rap' ], name: 'c2',id: 2 }
```

#### 隐含的问题

属性或者⽅法想被继承的话，只能在构造函数中定义。⽽如果⽅法在构造函数内定义了，那么每次创建实例都会创建⼀遍⽅法，多占⼀块内存。

```js
function Parent(name, actions) {
  this.actions = actions

  this.name = name

  this.eat = function () {
    console.log(`${name}- eat`)
  }
}
function Child(id) {
  Parent.apply(this, Array.prototype.slice.call(arguments, 1))

  this.id = id
}

const child1 = new Child(1, 'c1', ['eat'])
const child2 = new Child(2, 'c2', ['sing', 'jump', 'rap'])

console.log(child1.eat === child2.eat)// false
```

#### 组合继承
通过原型链继承我们实现了基本的继承，⽅法存在 prototype 上，⼦类可以直接调⽤。但是引⽤类型的属性会被所有实例共享，并且不能传参。

通过构造函数继承，我们解决了上⾯的两个问题：使⽤ call 在⼦构造函数内重复⼀遍属性和⽅法创建的操作，并且可以传参了。

但是构造函数同样带来了⼀个问题，就是构造函数内重复创建⽅法，导致内存占⽤过多。

是不是突然发现原型链继承是可以解决⽅法重复创建的问题？所以我们将这两种⽅式结合起来，这就叫做组合继承

实现
```js
function Parent(name, actions) {
  this.name = name

  this.actions = actions
}

Parent.prototype.eat = function () {
  console.log(`${this.name} - eat`)
}

function Child(id) {
  Parent.apply(this, Array.from(arguments).slice(1))
  this.id = id
}

Child.prototype = new Parent()
Child.prototype.constructor = Child

const child1 = new Child(1, 'c1', ['hahahahahhah'])
const child2 = new Child(2, 'c2', ['xixixixixixx'])
child1.eat()// c1 - eat
child2.eat()// c2 - eat

console.log(child1.eat === child2.eat)// true
```
##### 隐含的问题

调⽤了两次构造函数，做了重复的操作

```js
Parent.apply(this, Array.from(arguments).slice(1));
Child.prototype = new Parent();
```

#### 寄⽣组合式继承
上⾯重复调⽤了 2 次构造函数，想⼀下，我们可以精简掉哪⼀步？

我们可以考虑让 Child.prototype 间接访问到 Parent.prototype

实现
```js
function Parent(name, actions) {
  this.name = name

  this.actions = actions
}
Parent.prototype.eat = function () {
  console.log(
    `
${this.name}
 - eat`
  )
}
function Child(id) {
  Parent.apply(this, Array.from(arguments).slice(1))

  this.id = id
}

// 模拟Object.create的效果
// 如果直接使⽤Object.create的话，可以写成
Child.prototype = Object.create(Parent.prototype)
const TempFunction = function () {}
TempFunction.prototype = Parent.prototype
Child.prototype = new TempFunction()

Child.prototype.constructor = Child

const child1 = new Child(1, 'c1', ['hahahahahhah'])
const child2 = new Child(2, 'c2', ['xixixixixixx'])
```
也许有的同学会问，为什么⼀定要通过桥梁的⽅式让 Child.prototype 访问到Parent.prototype？
直接 Child.prototype = Parent.prototype 不⾏吗？
答：不⾏！！

咱们可以来看⼀下
```js
function Parent(name, actions) {
  this.name = name

  this.actions = actions
}
Parent.prototype.eat = function () {
  console.log(
    `
${this.name}
 - eat`
  )
}
function Child(id) {
  Parent.apply(this, Array.from(arguments).slice(1))

  this.id = id
}

Child.prototype = Parent.prototype

Child.prototype.constructor = Child

console.log(Parent.prototype)// Child { eat: [Function], childEat:[Function] }

Child.prototype.childEat = function () {
  console.log(`childEat -${this.name}` )
}

const child1 = new Child(1, 'c1', ['hahahahahhah'])

console.log(Parent.prototype)// Child { eat: [Function], childEat:[Function] }
```

可以看到，在给 Child.prototype 添加新的属性或者⽅法后，Parent.prototype 也会随之改变，这可不是我们想看到的。













