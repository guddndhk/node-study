const fs = require('fs').promises; //파일 시스템

//프로미스 지원으로 then 사용
fs.readFile('./readme.txt')
    .then((data) => {
        console.log(data);
        console.log(data.toString());
    })
    .catch(err => {
        throw err;
    });

//콜백
// fs.readFile('./readme.txt', (err, data) => {
//     if (err) {
//         throw err;
//     }
//     console.log(data);
//     console.log(data.toString());
// });

// data : (Buffer) 2 진법을 16 진법으로 바꿈 그러나 사람이 못 읽는건 같기에 toString 으로 변환 해준다.