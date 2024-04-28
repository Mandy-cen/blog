class Promise {
  constructor(handelFunc) {
    this.status = 'pending'
    this.value = undifined
    this.fulfilledList = []
    this.rejectedLIst = []
    handelFunc(this.triggerResolve.bind(this), this.triggerReject.bind(this))
  }
  triggerResolve(val){
    // 当前的primise状态已经变成了 resolve， 要执行后续的操作
    setTimeout(() => {
      if (this.status !== 'pending') return
      if (val instanceof Promise) {
        val.then(value => {}, err => {})
      } else {
        // resolve 方法传入普通值
        this.status = 'fulfilled'
        this.value = val
        this.triggerFulfilled()
      }
    }, 0)
  }
  triggerReject(){}
  triggerFulfilled(val) {
    this.fulfilledList.forEach(item => item(val))
    this.fulfilledList = []
  }
  then(onFullfilled, onRejected){
    return new Promise((onNextFullfilled, onNextRejected) =>{

      function onFinalFullfilled(val) {
        if (typeof onFullfilled !== 'function') {
          onNextFullfilled(val)
        } else {
          const res = onFullfilled(val)
          if (res instanceof Promise) {
            res.then(onNextFullfilled, onNextRejected)
          } else {
            onNextFullfilled(res)
          }
        }
      }
       function onFinalRejected(error) {
        if (typeof onRejected !== 'function') {
          onNextRejected(error)
        } else {
          const res = onRejected(error)
          if (res instanceof Promise) {
            res.then(onNextFullfilled, onNextRejected)
          } else {
            onFullfilled(res)
          }
        }
      }
      switch(this.status) {
        case 'pending': {
          this.fulfilledList.push(onFinalFullfilled)
          this.rejectedLIst.push(onFinalRejected)
          break
        }
      }
    })
  }
  catch(){}
  static resolve(value){
    if (res instanceof Promise) return value
    return new Primise(resolve => resolve(value))
  }
  static reject(value){}
  static race(list){
    return new Promise((resolve, reject) => {
      list.forEach(item => {
        Promise.resolve(item).then(
          res => {resolve(res)},
          err => {reject(res)}
        )
      })
    })
  }
  static all(list){
    return new Promise((resolve, reject) => {
      let count = 0
      const value = 0
      for (const [i, promiseInstalce] of list.entries) {
        this.resolve(promiseInstalce).then(res => {
          value[i] = res
          count++
          if (count === list.length) resolve(values)
        }, err => {
          reject(err)
        })
      }
    })
  }
}

new Promise(function(resolve, reject){})
