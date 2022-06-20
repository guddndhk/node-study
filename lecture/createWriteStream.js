const fs = require('fs');

const writeStream = fs.createWriteStream('./write2.txt');

writeStream.on('finish', () => {
    console.log('파일 쓰기 완료');
});

//하나의 버퍼단위
writeStream.write('이 글을 씁니다. \n');
writeStream.write('한 번 더 씁니다.');
writeStream.end();
