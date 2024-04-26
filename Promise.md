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
> 1. promise 会有三种状态，「进行中」「已完成」和「已拒绝」，进行中状态可以更改为已完成或已拒绝，已经更改过状态后无法继续更改（例如从已完成改为已拒绝状态）。
> 2. ES6 中的Promise构造函数，我们构造之后需要传入一个函数，他接受两个函数参数，执行第一个参数之后就会改变当前Promise为「已完成」状态，执行第二个参数之后就会变为「已拒绝」状态。
> 3. 通过.then方法，即可在上一个promise达到已完成时继续执行下一个函数promise。同时通过resolve或reject时传入参数，即可给下一个函数或promise传入初始化。
> 4. 已拒绝的promise， 后续可以通过 .catch 方法或事.then方法的第二个参数或事 try catch 进行捕获。

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


















