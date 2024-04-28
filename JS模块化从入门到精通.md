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
<img width="807" alt="image" src="https://github.com/Mandy-cen/blog/assets/45354825/2aa9dbea-9a4a-4a2c-90ae-5d91bef25100">

在装有node.js 的机器上，我们可以直接执行 node index.js 查看输出的结果。我们可以发现，无论执行多少次，最终输出的两行结果均相同。

<img width="679" alt="image" src="https://github.com/Mandy-cen/blog/assets/45354825/bb93e18a-e9c0-4978-a4df-03707cf4af5e">

虽然这个例子非常简单，但是我们却可以发现 CommonJS 完美解决了最开始我们提出的痛点：

1、模块之间内部即使有相同的变量名，它们运行时没有冲突，`这说明它有处理模块变量作用域的能力`。上面这个例子中，三个模块中均有 m 变量，但是并没有冲突，
2、moduleB 通过 `module.exports` 导出了一个内部变量，而它在 `moduleA` 和 `index` 模块中能被加载。`这说明它有导入导出模块的方式，同时能够处理基本的依赖关系`。
3、我们在不同模块加载了 moduleB 两次，我们得到了相同的结果，`这说明它保证了模块单例`。

但是，这样的 CommonJS 模块只能在 node.js 环境中才能运行，直接在其他环境中运行这样的代码模块就会报错。这是因为只有node 才会在解析js的过程中提供一个 `require` 方法，这样当解析器执行代码时，发现有模块调用了 `require` 函数，就会通过参数找到对应的物理路径，通过系统调用从硬盘幅读取文件内容，解析这段内容最终拿到导出结果并返回。而其他运行环境并不一定会在解析时提供这么一个 `require` 方法，也就不能直接运行这样的模块了。 

从它的执行过程也能看出来 CommonJS 是一个 `同步加载模块`的模块化规范，每当一个模块  `require`一个字模块时，都会停止当前模块的解析直到子模块读取解析并加载。

## 适合 WEB 开发的 AMD 模块化规范

另一个为 WEB 开发者所熟知的 js 运行环境就是浏览器了，浏览器并没有提供像 node.js里一样的  `require` 方法。不过，收到 CommonJS 模块化的启发，WEB 端还是逐渐发展起来了 AMD， SystemJS 规范等适合浏览器端运行的js模块化开发规范。

AMD 全称 Asynchronous module definition，意为`异步模块定义`不同于 CommonJS 规范的同步加载，AMD 正如其名所有模块默认都是异步加载，这也是早期为了满足 WEB 开发的需要，因为如果在 web 端也使用同步加载，那么页面在解析脚本文件的过程中可能使页面暂停响应。

而 AMD 模块定义与 CommonJS 稍有不同，上面这个例子的三个模块分别改成 AMD 规范就类似这样：

```js
// index.js
require(['moduleA', 'moduleB'], function (moduleA, moduleB) {
    console.log(moduleB)
})

// moduleA.js
defined(function(require){
    var m = require('moduleB')
    setTimeout(() => {console.log(m)}, 1000)
})


// moduleB.js
defined(function(require){
    var m = new Date().getTime()
    return m
})
```

我们可以对比看到，AMD 规范也支持文件级别的模块，模块ID 默认为文件名，在这个模块文件中，我们需要使用 `define` 函数来定义一个模块，在回调函数中接受定义组件内容，这个回调函数接受一个 `require` 方法，能够在组件内部加载其他模块，这里我们分别传入ID，就能加载对应文件内的AMD模块，不同于 CommonJS 的是，这个回调函数的返回值即是模块导出结果。

差异比较大的地方在于我们的入口模块，我们定义好了 moduleA 和moduleB 之后，入口处需要加载进来它们，于是乎就要使用 AMD 提供的 require 函数，第一个参数写明入参数写明入口模块的依赖列表，第二个参数作为回调参数依次会传入前面依赖的导出值，所以这里我们在index.js中只需要在回调函数中打印moduleB传入的值即可。

Node.js 里我们直接通过 node index.js 来查看模块输出结果，在 WEB 端我们就需要使用 html 文件，同时在里面加载这个入口模块。这里我们再加入一个index.html 作为浏览器中的启动入口。

如果想要使用 AMD 规范，我们还需要添加一个符合 AMD 规范的加载器脚本在页面中，符合 AMD 规范实现的库很多，比较有名的就是 `require.js`

```js
<html>
// 必须加载 require
<script src='./require.js'></script>
// 只需要加载入口模块即可
<script src='./index.js'></script>
</html>
```

使用 AMD 规范改造项目之后的关系如下图，在物理关系里最多了两个文件，但是模块间的逻辑关系仍与之前相同。
<img width="807" alt="image" src="https://github.com/Mandy-cen/blog/assets/45354825/6c7e851e-dd4a-45b1-a3c5-7942db7df259">

启动静态服务知乎我们打开浏览器的控制台，无论我们刷新多少次页面，同Node.js 的例子一样，输出的结果均相同。同时我们还能看到，虽然我们只加载了index.js 也就是入口模块，但当使用 modlueA 和module B的时候，浏览器就会发请求去获取对应模块的内容。

从结果上来看，AMD 与 CommonJS 一样，都完美解决上面说的 `变量作用域` 和 `依赖关系` 之类的问题。但是 AMD 这种默认异步，在回调函数中定义模块内容，相对来说使用起来就会麻烦一些。

同样的，AMD 的模块也不能直接运行在 node 端，因为内部的 define 函数， require 函数都必须配合在浏览器中加载 require.js 这类 AMD 库才能使用。

## 能同时被 CommonJS 规范和 AMD规范加载的 UMD 模块

有时候我们写的模块需要同时运行在浏览器端和node.js 里面，这也就需要我们分别写一份 AMD 模块和 CommonJS 模块来运行在各自环境，这样如果每次模块内容有改动还得去两个地方分别进行更改，就比较麻烦。

```js
// 一个返回随机数的模块，浏览器使用的 AMD 模块
// math.js
defined(function(){
    return function() {
        return Math.random();
    }
})


// 一个返回随机数的模块， Node.js 使用的 CommonJS 模块
module.exports = function() {
    return Math.random();
}
```
基于这样的问题，UMD（Dniverdal Module Definition）作为一种 `同构` 的模块化解方案出现，它能够让我们只需要在一个地方定义模块内容，并同时兼容 AMD 和 CommonJS 语法。

写一个 UMD 模块也非常简单，我们只需要判断一下这些模块化的特征值，判断出当前究竟在哪种模块规范的环境下，然后把模块内容检测出模块化的语法导出即可。

```js
(function(self, factory){
    if(typeof module === 'object' && typeof module.exports === 'object') {
        // 当前环境是 CommonJS 规范环境
        module.exports = factory()
    } else if(typeof define === 'function' && define.amd) {
        define(factory)
    } else {
        // 什么环境都不是，直接在全局对象
        self.umdModule = factory()
    }
})(this.function(){
    return funtion(){
        return Math.random()
    }
})
```

上面就是一种定义UMD模块的方式，我们可以看到首先他会检测当前加载的模块化的规范究竟是什么，如果module.exports 在当前环境中为对象，那么肯定为 CommonJS， 我们就能用 module.exports 导出模块化内容。如果当前环境中有 define 函数并且 define.amd 为true，那我们就可以使用AMD的define
函数来定义一个模块。最后，即是没检测出来当前环境的模块化规范，我们也可以直接把模块化内容挂载在全局对象上，这样也能加载到模块导出的结果。

## ESModule 规范

前面我们说的 CommonJS 规范和 AMD 有这么几个特点：

- 语言上层的运行环境中实现模块化规范，模块化规范由环境自己定义。
- 相互之间不能共用模块，例如不能在Node.js 运行的AMD模块，不能直接在浏览器运行 CommonJS 模块。

在ecmascript 2015 也就是我们常说的ES6之后，js有了语言层面的模块化导入导出关键词与语法以及与之匹配的 ESModule 规范，使用 ESModule 规范，我们可以通过 import 和 export 两个关键字来对模块进行导入导出。

还是之前的例子，使用 ESModule 规范新的关键词就需要这样定义：

```js
// index.js
import './moduleA.js'
import m from './moduleB.js'
console.log(m)

// moduleA.js
import m from './moduleB.js'
setTimeout(() => {console.log(m)}, 1000)

// moduleB.js
var m = new Date().getTime()
export default m
```

ESModule 与 CommonJS 和 AMD 最大的区别在于，ESModule 是由 js 解释器实现，而后两者是在宿主环境中运行时实现。ESModule 导入实际上是在语法层面新增了一个语句，而 AMD 和 CommonJS 加载模块实际上是调用了 require 函数。

```js
// 这是一个新的语法，我们没有办法兼容，如果浏览器无法解析就会报语法错误
import moduleA from './moduleA'

// 我们只需要新增加一个 require 函数，就可以首先保证， AMD 和 CommonJS 模块不报语法错误
function require(){}
const moduleA = require('./moduleA')
```

ESModule 规范支持通过这些方式导入导出代码，具体使用哪种情况得根据如何导出来决定：

```js
import { var1, var2} from './moduleA'
import * as vars from './moduleB'
import m from './moduleC'

export default {
    var1: 1,
    var2: 2
}

export const var1 = 1

const obj = {
    var1,
    var2
}
export default obj
```
这里有一个地方需要额外注意， `import { var1, var2} from './moduleA'`这里的括号并不代表获取结果是个对象，虽然与 ES6 之后的对象解构语法非常相似。

用一张图表示各种模块规范语法和它们所处环境之间的关系：
<img width="804" alt="image" src="https://github.com/Mandy-cen/blog/assets/45354825/bc3ece75-2400-4389-bd48-1b7d8fd76d2b">

每个js的运行环境都有一个解析器，否则这个环境也不会认识js语法，他的作用就是用EMCAScript的规范去解释js的语法，也就是处理和执行语言本身的内容，例如按照逻辑正确执行 `var a = 123, function func(){console.log(123)}` 之类的内容。

在解析器的上层，每个运行环境都会在解析器的基础上封装一些环境相关的API。例如Node.js 中的 global对象、process 对象，浏览器中的window 对象，document 对象等等。这些运行环境的API收到了各自规范的影响，例如 浏览器端的 W3C 规范，它们规定了window对象和document 对象上的API内容，以使得我们能让document.getElementById 这样的API在所有的浏览器上运行正常。

事实上，类似于 setTimeout 和 console 这样的 API ，大部分也不是js Core 层面的，只不过是所有运行环境实现了相似的结果。

setTimeout 在ES7之后才进入 js Core 层面，在这之前都是浏览器和node.js等环境实现。

也就是说，如果想在Node.js 环境中使得ESModule， 就需要升级node.js到最高版本，这相对来说比较容易，毕竟服务器node.js 版本控制在开发员自己手中，但是浏览器端具有分布式的特点，是否能使用这种高版本特性取决于用户访问的版本，而且这种解释器语法层面的内容无法像AMD那样在运行时兼容，所以想要直接使用就会比较麻烦。

## 后模块化时代

通过前面分析我们可以看出来，使用ESModule的模块明显更符合js开发的历史进程，因为任何一个支持js的环境，随着我们对应解释器的升级，最终一定会支持ESModule的标准。但是，WEB端受制于用户浏览器的版本，我们并不能随心所欲的随时使用js的最新特性。为了能让我们的新代码也运行在用户的老浏览器中，社区涌现出越来越多的工具，它们能静态将高版本规范的代码编译为低版本的代码，最为大家所知的就是babel。

它把 js core中高版本规范的语法，也能按照相同语义在静态阶段转化为低版本规范的语法，这样即使是早期的浏览器，它们内置的js解释器也能看懂。

<img width="811" alt="image" src="https://github.com/Mandy-cen/blog/assets/45354825/34af3ca0-3643-4692-adf4-4e9f4ab2b776">

然后，不幸的是，对于模块化相关的 import 和 export 关键字， babel 最终将它编译为包含 require 和 exports 的 CommonJS 规范

这就造成了另一个问题，这样带有模块化关键词的模块，编译之后还是没办法直接运行在浏览器中，因为浏览器端并不能运行 CommonJS 的模块，为了能在 WEB 端直接使用 CommonJS 规范的模块，除了编译之外，我们还需要一个步骤叫做 `打包（bundle）`

所以打包工具比如 webpack/rollup，编译工具babel它们之间的区别和作用就很清楚了：

- 打包工具主要处理的是js不同版本间模块化的区别
- 编译工具主要处理的是js版本间语义的问题
