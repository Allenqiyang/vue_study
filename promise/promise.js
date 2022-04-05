const fs = require('fs');

/* fs.readFile('./text/study.md',(err, data) => {
    if(err) throw err;
    console.log(data.toString());
}) */

const p = new Promise(function(resolve, reject) {
    fs.readFile('__dirname/../text/study.md',(err, data)=>{
        //read failed
        if(err) reject(err);
        //read success
        resolve(data.toString());
    })
})
p.then(function(value){
    console.log(value);
},function(reason){
    console.log('read file failed');
})