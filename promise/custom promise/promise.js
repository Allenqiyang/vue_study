function Promise(executor){
    this.PromiseState = 'pending'
    this.PromiseResult = null
    this.callbacks = []
    //保存实例对象的this 因为resolve和reject函数调用是window调用
    const self = this

    //resolve函数
    function resolve(data){
        //判断状态如果是更改过的就不走下面的代码
        if(self.PromiseState !== 'pending') return
        self.PromiseState = 'fulfilled'
        self.PromiseResult = data
        //当状态改变时成功的回调
        self.callbacks.forEach(item => {
            item.onResolved()
        })
    }

    //reject函数
    function reject(data){
        if(self.PromiseState !== 'pending') return
        self.PromiseState = 'rejected'
        self.PromiseResult = data
        //当状态改变时失败的回调
        self.callbacks.forEach(item => {
            item.onRejected()
        })
    }

    //同步调用执行器函数
    try{
        executor(resolve, reject)
    }catch(e){
        reject(e)
    }
}

//添加then方法
Promise.prototype.then = function(onResolved, onRejected){
    return new Promise((resolve, reject) => {
        const self = this
        //封装函数
        function callback(type){
            const result = type(self.PromiseResult)
            if(result instanceof Promise){
                //若返回值是Promise对象
                result.then(val => {
                    //且该Promise对象的状态是fulfilled
                    resolve(val)
                },res => {
                    //Promise对象状态为rejected
                    reject(res)
                })
            }else{
                //若返回值不是Promise对象
                resolve(result)
            }
        }
        if(this.PromiseState === 'fulfilled'){
            callback(onResolved)
        }
        if(this.PromiseState === 'rejected'){
            callback(onRejected)
        }
        if(this.PromiseState === 'pending'){
            //pending状态不知道执行哪一个,先把回调函数保存，状态改变才能执行
            this.callbacks.push({
                onResolved: () => {     //then里Promise成功走的回调
                    try{
                        callback(onResolved)
                    }catch(error){
                        reject(error)
                    }
                },
                onRejected: () => {     //then里Promise失败走的回调
                    try{
                        callback(onRejected)
                    }catch(error){
                        reject(error)
                    }
                }
            })
        }
    })
}

Promise.all = function(promises){
    return new Promise((resolve, reject) => {
        // 定义变量计数promise成功的数量
        let count = 0
        // 定义数组存promise成功的返回值
        let result = []
        //遍历
        for(let i = 0; i < promises.length; i++){
            promises[i].then(value => {
                //成功就加一
                count++
                //传入成功值
                result[i] = value
                //判断
                if(count === promises.length){
                    //修改状态
                    resolve(result)
                }
            },reason => {
                reject(reason)
            })
        }
    })
}

Promise.race = function(promises){
    return new Promise((resolve, reject) => {
        promises.forEach(item => {
            item.then(value=>{
                resolve(value)
            },reason=>{
                reject(reason)
            })
        })
    })
}