const fs = require('fs').promises; //파일 시스템

async function main() {
    let data = await fs.readFile('./readme.txt');
    console.log('1번', data.toString());
    data = await fs.readFile('./readme.txt');
    console.log('2번', data.toString());
    data = await fs.readFile('./readme.txt');
    console.log('3번', data.toString());
    data = await fs.readFile('./readme.txt');
    console.log('4번', data.toString());
}

main();

//프로미스 지원으로 then 사용

// .then((data) => {
//     console.log('1번',data.toString());
//     return fs.readFile('./readme.txt');
// })
// .then((data) => {
//     console.log('2번',data.toString());
//     return fs.readFile('./readme.txt');
// })
// .then((data) => {
//     console.log('3번',data.toString());
//     return fs.readFile('./readme.txt');
// })
// .then((data) => {
//     console.log('4번',data.toString());
//     return fs.readFile('./readme.txt');
// })
// .catch(err => {
//     throw err;
// });