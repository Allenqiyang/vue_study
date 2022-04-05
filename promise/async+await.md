## notes
    1.await 右侧的表达式一般为 promise 对象, 但也可以是其它的值
    2.如果表达式是 promise 对象, await 返回的是 promise 成功的值
    3.如果表达式是其它值, 直接将此值作为 await 的返回值
    
    Promise==>异步
    await==>异步转同步
    await 可以理解为是 async wait 的简写。await 必须出现在 async 函数内部，不能单独使用。
    await 后面可以跟任何的JS 表达式。虽然说 await 可以等很多类型的东西，但是它最主要的意图是用来等待 Promise 对象的状态被 resolved。如果await的是 promise对象会造成异步函数停止执行并且等待 promise 的解决,如果等的是正常的表达式则立即执行
    async==>同步转异步
    方法体内部的某个表达式使用await修饰，那么这个方法体所属方法必须要用async修饰所以使用await方法会自动升级为异步方法

### async function
    1.函数的返回值为 promise 对象
    2.promise 对象的结果由 async 函数执行的返回值决定

### await function
    1.await 右侧的表达式一般为 promise 对象, 但也可以是其它的值
    2.如果表达式是 promise 对象, await 返回的是 promise 成功的值
    3.如果表达式是其它值, 直接将此值作为 await 的返回值

### notice
    1.await 必须写在 async 函数中, 但 async 函数中可以没有 await
    2.如果 await 的 promise 失败了, 就会抛出异常, 需要通过 try...catch 捕获处理