const fs = require('fs');
const util = require('util');
const myReadFile = util.promisify(fs.readFile);

async function main(){
    try{
        let data1 = await myReadFile('__dirname/../text/study.md');
        let data2 = await myReadFile('__dirname/../text/farm.md');
        let data3 = await myReadFile('__dirname/../text/read.md');
        console.log(data1, data2, data3);
    }catch(e){
        console.log(e);
    }
}

main();