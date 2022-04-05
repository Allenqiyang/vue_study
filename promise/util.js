const util = require('util');
const fs = require('fs');
let myReadFile = util.promisify(fs.readFile);

myReadFile('__dirname/../text/study.md').then(value => {
    console.log(value.toString());
})