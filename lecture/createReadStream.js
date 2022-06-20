const fs = require('fs');
const readStream = fs.createReadStream('./readme3.txt', {highWaterMark: 16});

// 스트림을 눈으로 보는코드.
// 스트림 방식이 버퍼 방식보다 좋은점은 메모리를 아낄수있다.
//스트림은 순서대로 온다.
const data = [];
readStream.on('data', (chunk) => {
    data.push(chunk);
    console.log('data', chunk, chunk.length);
});

readStream.on('end', () => {
    console.log('end', Buffer.concat(data).toString());
});

//비동기는 항상 에러처리를 해주자 에러가 한번나면 프로그램이 망가진다.
readStream.on('error', (err) => {
    console.log('error', err);

});