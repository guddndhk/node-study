const fs = require('fs').promises; //파일 시스템

//프로미스 지원으로 then 사용
fs.writeFile('./writeme.txt','저장할 메세지 데이터.')
    .then((data) => {
        return fs.readFile('./writeme.txt')
    })
    .then((data) => {
        console.log(data.toString());
    })
    .catch(err => {
        throw err;
    });