# Promise 从入门到精通

## 为什么需要 Promise
javascript 是一门单线程语言，所以早期我们解决异步的场景时，大部分都是通过回调函数进行。

例如在浏览器中发送 ajax 请求，就是常见的一个异步场景，发送请求后，一段时间服务端响应之后我们才能拿到结果。如果我们希望在异步结束之后执行某个操作，就只能通过回调函数这样的方式进行操作。

```js
var dynamicFunc = function(cb) {
    setTimeout(function() {
        cb()
    }, 1000)
}

dynamicFunc(function(){console.log(123)})
```

例如上面这个例子，这里的 dynamicFunc 就是一个异步的函数，里面执行的 setTimeout 会在 1s 之后调用传入的 cb 函数。 按照上面的调用方式， 最终 1s 之后，会打印123这个结果。

同样的，如果后续还有内容需要在异步函数结束时输出的话，就需要多个异步函数进行嵌套，非常不利于后续的维护。

```js
setTimeout(function() {
    console.log(123)
    setTimeout(function() {
        console.log(321)
        // ...
    }, 2000)
}, 1000)
```

为了能使回调函数以更优雅的方式进行调用，在ES6中js产生了一个名为promise的新规范，他让异步操作的变得近乎「同步化」。

## Promise 基础

在支持ES6 的高级浏览器环境中，我们通过 `new Promise()` 即可构造一个 `Promise` 实力。

这个构造函数接收一个函数，分别接收两个参数， `resolve` 和 `reject`，代表着我们需要改变当前实例的状态到 `已完成` 或是 `已拒绝`。

```js
function promise1(){
    return new Promise(function(resolve, reject){
        //定义异步的内容
        setTimeout(function(){
          console.log('1s 后输出')
          // 输出完成后，调用函数传入的 resolve 函数，将 promise 实例标记为已完成，当前promise 串行继续执行
          resolve()
        }, 1000)
    })
}
```

```js
function promise2() {
    return new Promise(function(resolve) {
        setTimeout(function(){
          console.log('2s 后输出')
          resolve()
        }, 2000) 
    })
}
```

上面的两个promise实例，串联起来即可写为：
`promise1().then(function() {return promise2()})` 也可以简写为 `promise1().then(promise2)`

浏览器中执行之后，即可看到，1s 之后出现 `1s 后输出` 字样，再经过 2s 出现 `2s后输出` 字样。在这个例子中我们能看到。当前promise 如果状态为已完成（执行了resolve方法），那么就会去执行then方法中的下一个promise函数。

同样的，如果我们的promise变成已拒绝状态（执行reject方法），那么就会进入后续的异常处理函数中。

```js
function promise3() {
    return new Promise(function(resolve， reject) {
        var random = Math.random() * 10;
        setTimeout(function(){
            if (random >= 5) {
                resolve(random)
            } else {
                reject(random)
            }
        }, 2000) 
    }, 1000)
}

var onResolve = function (val) {
    console.log('已完成：输出的数字是：', val)
}

var onReject = function (val) {
    console.log('已拒绝：输出的数字是：', val)
}

// promise 的then 也可以接受两个函数，第一个参数是resolve后执行，第二个函数为reject后执行
promise3().then(onResolve, onReject)

// 也可以通过 .catch 方法拦截状态变为已拒绝的 promi1
promise3().catch(onReject).then(onResolve)

// 也可以通过 try catch 进行拦截状态变为已拒绝的promise
try {
   promise3().then(onResolve)
} catch (e) {
  onReject(e)
}

```
这个例子使用了三种方式拦截最终变为「已拒绝」状态的promise，分别是`使用then 的第二个参数，使用.catch方法捕获前方promise抛出的异常，使用 try  catch 拦截代码块种promise抛出的异常`

同时我们还可以发现，在改变promise状态时调用resolve和reject函数的时候，也可以给下一步then种执行的函数传递参数。这个例子中我们把随机生成的数字传给了resolve和reject函数，我们也就能在then中执行函数的时候拿到这个值。

总结一下本小姐的内容：
- promise 会有三种状态，「进行中」「已完成」和「已拒绝」，进行中状态可以更改为已完成或已拒绝，已经更改过状态后无法继续更改（例如从已完成改为已拒绝状态）。
- ES6 中的Promise构造函数，我们构造之后需要传入一个函数，他接受两个函数参数，执行第一个参数之后就会改变当前Promise为「已完成」状态，执行第二个参数之后就会变为「已拒绝」状态。
- 通过.then方法，即可在上一个promise达到已完成时继续执行下一个函数promise。同时通过resolve或reject时传入参数，即可给下一个函数或promise传入初始化。
- 已拒绝的promise， 后续可以通过 .catch 方法或事.then方法的第二个参数或事 try catch 进行捕获。

## 如何封装异步操作为promise

我们可以将任何接受回调的函数封装为一个 promise，下面举几个简单例子来说明。

```
// 原函数
function dynamicFunc(cb) {
    setTimeout(function(){
      console.log('1s 后显示')
      resolve()
    }, 1000) 
}
var callback = function() {
    console.log('在异步结束后 log')
}

// 用传入回调函素的方式执行
dynamicFunc(callback)
```
上面的例子就是最传统的，使用传入回调函数的方式在异步结束后执行函数，我们可以通过封装promise的方式将这个异步函数变为promise。

```js
function dynamicFuncAsync) {
    return new Promise(function(resolve) {
        setTimeout(function {
            console.log('1s 后显示')
            resolve()
        })
    })
}

var callback = function() {
    console.log('在异步结束后 log')
}

dynamicFuncAsync().then(function(){callback()})
```
再举个例子，发送ajax请求也可以进行封装：

```js
function ajax(url, success, fail) {
    var clien = new XMLHttpRequest();
    clien.open('GET', url);
    clien.onreadystatechange = function() {
        if (this.readyState !== 4) {
            return;
        }
        if (this.status === 200) {
          success(this.response)
        } else {
          fail(new Error(this.statusText));
        }
    }
    client.send();
}

ajax('/url', function() {console.log('success')}, function(){console.log('fail')})
```

我们可以看到，调用ajax 方法需要传入success和fail函数的回调函数进行调用，我们可以不传入回调函数，通过封装promise的方式，在原来的执行回调函数的地方要更改当前promise的状态，就可以通过链式调用。

```js
function ajaxAsync(url) {
    return new Promise(function(resolve, reject) {
        var clien = new XMLHttpRequest();
        clien.open('GET', url)
        clien.onreadystatechange = function(){
            if (this.readyState !== 4) {
                return;
            }
            if (this.status === 200) {
                success(this.response)
            } else {
                fail(new Error(this.statusText));
            }
        }
        clien.send()
    })
}

ajax('/url').catch(function(){console.log('fail')}.then(function(){console.log('success')}))
```

总结一下当前小结：
- 我们可以轻松的把任何一个函数或者是异步函数改为promise，尤其是异步函数，改为promise 之后即可进行链式调用，增强可读性。
- 将带有回调函数的异步改为promise也很简单，只需在内部实例化promise 之后，在原来执行回调函数的地方执行对应的更改promise状态函数即可。

## Promise 规范解读
任何符合promise 规范的对象或函数都可以成为promise，promise A plus规范地址：https://promiseaplus.com/

上面我们熟悉了整体promise的用法，我们知道了如何去创建一个promise，如何去使用它，后面我们也熟悉了如何去改造回调函数到promise。本小节我们详细过一遍promise A+规范，从规范层面明白promise使用过程中的细节。

### 术语
Promise：promise是一个拥有 `then`方法的对象或函数，其行为符合本规范；
具有then方法（thenable）：是一个定义了`then`方法的对象或函数；
值（value）：指任何javascript 的合法值（包括 `undefined`，thenable 和promise）；
异常（exception）：是使用 `throw`语句抛出的一个值；
原因（reason）：表示一个promise 的拒绝原因。

### 要求

#### promise 的状态

一个Promise的当前状态必须为一下三种状态中的一种：`等待态（Pending）`、`已完成（Fulfiled）`和`已拒绝（Rejected）`.
- 处于等待态时，promise需满足以下条件：可以变为「已完成」或「已拒绝」
- 处于已完成时，promise需满足以下条件：1.不能迁移至其他任何状态；2.必须拥有一个`不可变`的值
- 处于已拒绝时，promise需满足以下条件：1.不能迁移至其他任何状态；2.必须拥有一个`不可变`的原因

#### 必须有一个then方法

一个promise必须提供一个 `then`方法以访问其当前值和原因。
promise的then方法接收两个参数：`promise.then(onFulfilled,onRejected)` 他们都是可选参数，同属他们都是函数，如果 `onFulfilled`或`onRejected`不是函数，则需要忽略他们。
- 如果 `onFulfilled` 是一个函数
  - 当 `promise` 执行结束后其必须被调用，其第一个参数为 `promise` 的结果
  - 在 `promise`执行结束前其不可被调用
  - 其调用次数不可超过一次

- 如果 `onRejected` 是一个函数
  - 当 `promise` 被拒绝执行后其必须被调用，其第一个参数为`promise`的原因
  - 当`promise`被拒绝执行前其不可被调用
  - 其调用次数不可超过一次

- 在执行上下文堆栈仅包含平台代码之前，不得调用`onFulfilled`或`onRejected`
- `onFulfilled`和`onRejected`必须被作为普通函数调用（即非实例化调用，这样函数内部 this 非严格模式下指向window）
- then 方法可以被同一个 `promise` 调用多次
  - 当`promise`成功执行时，所有`onFulfilled`需按照其注册顺序依次回调
  - 当`promise`被拒绝执行时，所有`onRejected`需按照其注册顺序依次回调

- then 方法必须返回一个`promise`对象`promise2=promise1.then(onFulfilled,onRejected)`
  - 只要`onFulfilled`或者`onRejected`返回一个值 `x`， promise2都会进入`onFulfilled`状态；
  - 如果`onFulfilled`或者`onRejected`抛出一个异常 `e`，则promise2必须拒绝执行，并返回拒绝原因`e`
  - 如果`onFulfilled`不是函数且`promise1`状态变为已完成，`promise2`必须成功执行并返回相同的值
  - 如果`onRejected`不是函数且`promise1`状态变为已拒绝，`promise2`必须执行拒绝回调并返回相同的拒绝原因

```js
var promise1 = new Promise((resolve, reject) => {reject()})
promise1.then(null, function(){
    return 123
})
.then(null, null)
.then(null, null)
.then(
(val) => {console.log('已完成', val)},
(val) => {console.log('已拒绝', val)},
)
```

### promise 的解决过程
promise解决过程时一个抽象的操作，其需输入一个`promise`和一个值，我们表示为`[[Resolve]](promise, x)`(这句话的意思就是把promise resolve 了，同时传入x作为值)
   
```js
promise.then(function(x){
    console.log(x)
})
```
如果`x`有`then`方法且看上去像一个Promise，解决程序即尝试使`promise`接收`x`的状态；否则其用`x`的值来执行`promise`
- 如果 `promise`为和`x`指向同一个对象，以`TypeError`为拒绝执行`promise`
- 如果`x`为`promise`
   - 如果`x`处于等待状态，`promise`需保持为等待状态直至`x`被执行或拒绝
   - 如果`x`处于执行状态，用相同的值执行`promise`
   - 如果`x`处于拒绝状态，用相同的拒绝`promise`

```js
var promise1 = function(){
    return new Promise(function(resolve){
        console.log(1)
        resolve()
    }, 1000)
}

var promise2 = function(){
    return new Promise(function(resolve){
        console.log(2)
        resolve()
    }, 2000)
}

promise1().then(function(){
    return promise2(); // 此处返回一个promise实例
}).then(function(){
    console.log('已完成')
}, function() {console.log('已拒绝')}
)
```
- 如果 x 为Object或function（不常见）
  - 首先尝试执行x.then
  - 如果取x.then是函数，将x作为函数的作用域this调用。传递两个回调函数作为参数，第一个参数叫做resolvePromise，第二个参数叫做rejectPromise；
  - 如果then是函数，将x作为函数的作用域this调用。传递两个回调函数作为参数，第一参数叫做resolvePromise，第二个参数叫做rejectPromise；
     - 如果 resolvePromise 以值y为参数被调用，则运行`[[Resolve]](promise, y)`
     - 如果 rejectPromise 以拒因r为参数被调用，则以拒因r拒绝promise
     - 如果 resolvePromise 和 rejectPromise 均被调用，或者被同一参数调用了多次，则优先采用首次调用并忽略其他的调用
     - 如果调用then方法抛出了异常e
         - 如果 resolvePromise 或 rejectPromise 已经被调用，则忽略
         - 否则以e为拒因拒绝`promise`
  - 如果then不为函数，以x为参数将`promise`变为已完成状态
  - 如果x不为对象或者函数，以x参数将`promise`变为已完成状态（重要且常见）

## Promise 构造函数上的静态方法

#### Promise.resolve
返回一个promise实例，并将它的状态设置为已完成，同时将他的结果作为传入promise实例的值
```js
var promise = Promise.resolve(123)
promise.then(val => {console.log('已完成:', val)})

// 已完成 123
```

#### Promise.reject
返回一个promise实例，并将它的状态设置为已拒绝，同时将他的结果作为原因传入onReject函数
```js
var promise = Promise.reject(123)
promise.then(val => {console.log('已拒绝:', val)})

//已拒绝 123
```

#### Promise.all
返回一个promise实例，接收一个数组，里面含有多个promise实例，当所有promise实例都成为已完成状态时，进入已完成状态，否则进入已拒绝状态
```js
Promise.all([promise1(), promise2()]).then(()=>{
    console.log('全部promise均已经完成')
})
```
注意，此时多个promise是同时进行的

#### Promise.rece

返回一个promise实例，接收一个数组，里面含有多个promise实例，当有一个promise实例状态改变时，就进入该状态且不可改变，这里所有的promise实例都是竞争关系，只选择第一个进入改变状态的promise的值。

```js
Promise.all([promise1(), promise2()]).then(()=>{
    console.log('全部promise均改变')
})
```
