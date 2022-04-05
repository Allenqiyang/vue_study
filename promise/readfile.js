const fs = require('fs');
const { resolve } = require('path/posix');

const p = new Promise((resolve, reject) => {
    fs.readFile('__dirname/../text/study.md',(err, data) => {
        resolve(data);
    })
})

p.then(value => {
    return new Promise((resolve, reject) => {
        fs.readFile('__dirname/../text/study.md',(err, data) => {
            resolve([value, data]);
        })
    })
}).then(value => {
    fs.readFile('__dirname/../text/study.md',(err, data) => {
        value.push(data);
        console.log(value.join('\n'));
    })
})