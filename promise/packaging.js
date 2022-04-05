function myReadFile(path){
    return new Promise(function(resolve, reject){
        require('fs').readFile(path, (err, data) => {
            if(err) reject(err)
            resolve(data)
        })
    })
}

myReadFile('__dirname/../text/study.md')
.then(value => {
    console.log(value.toString())
},reason => {
    console.log(reason)
})