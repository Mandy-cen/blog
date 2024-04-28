# JS模块化从入门到精通

在 WEB 开发的早期，为了团队协作和代码维护的方便，许多开发者会选择将javascript 代码分开写在不同文件里面，然后通过多个标签来加载它们。

```js
<script src='./a.js'></script>
<script src='./b.js'></script>
<script src='./c.js'></script>
```

虽然每个代码处在不同的文件夹中，但最终所有JS变量还是会处在同一个 `全局作用域` 下，这时候就需要额外注意由于作用域 `变量提升` 所带来的问题。

```js
// index.html
<script>
  // a.js
var num = 1
setTimeout(() => console.log(num), 1000)
</script>
<script>
  // b.js
var num = 2
</script>
```

在这个例子中，我们分别加载了两个script标签，两段js都声明了 num 变量， 那第一段脚本中的本意本来是希望在1s后打印自己声明的num变量1，但最终运行结果打印了第二段脚本中的num变量的结果2。虽然两段代码写在不同的文件中，但是因为运行时声明变量都在全局下，最终产生了冲突。

同属，如果代码块之间有依赖关系的话，需要额外关注脚本加载的顺序，如果文件依赖顺序有改动，就需要在html手动变更加载标签的顺序，非常麻烦。

要解决这样的问题，我们就需要将这些脚本文件「模块化」：

- 1.每个模块都要有自己的`变量作用域`，两个模块之间的内部变量不会产生冲突。
- 2.不同模块之间保留相互 `导入和导出` 的方式方法，模块间能够相互通信。模块的执行与加载遵循一定的规范，能保证彼此之前的依赖关系。

主流的编程语言都有处理模块的关键词，在这些语言中，模块与模块之前的内部变量相互不受影响。同时，也可以通过关键字进行模块定义，引入和导出等等，例如 java 里面的 module 关键词，python 中的 import。

但是javascript这门语言在ECMAscript6规范之前并没有语言层面的模块导入导出关键词及相关规范，为了解决这样的问题，不同的js运行环境分别有自己的解决方案。

## CommonJS 规范初探

Node.js 就是一个基于V8引擎，事件驱动I/O 的服务端js运行环境，在2009年刚推出，它就实现了一套名为 `CommonJS` 的模块化规范。

在 CommonJS 规范里，每个js文件就是一个 `模块（module）`，每个模块内部可以使用`require`函数和`module.exports`对象来对模块化进行导入和导出。

```js
// 一个比较简单的 CommonJS 模块
const moduleA = require('./moduleA.js') // 获取相邻相对路径 ./moduleA.js 文件导出 结果
module.exports = moduleA // 导出当前模块内部 moduleA 的值
```

下面这三个模块稍微复杂一些，它们都是合法的 CommonJS 模块：

```js
// index.js
require('./moduleA.js')
var m = require('./moduleB.js')
console.log(m)

// moduleA.js
var m = require('./moduleB.js')
setTimeout(() => {console.log(m)}, 1000)

// moduleB.js
var m = new Date().getTime()
module.exports = m
```

- index.js 代表的模块化通过执行 `require` 函数，分别加载了相对路径为 `./moduleA.js` 和`./moduleB.js`两个模块，同时输出了 `moduleB`模块的结果。
- `./moduleA.js` 文件也通过 `require`  函数加载了`./moduleB.js` 模块，在1s后也输出了加载进来的结果。
- `./moduleB.js` 文件内部相对来说就简单很多，仅仅定义了一个时间戳，然后直接通过 `module.exports` 导出。

它们之间的`物理关系` 和 `逻辑关系` 如下图：














