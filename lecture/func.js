// ../부모폴더 ../../조부모 폴더 ./현재 나의 폴더
// const value = require('./var');
const {add, even} = require("./var");
// console.log(value);
console.time('hi');
function checkOddOrEven(number) {
    if (number % 2) {
        return add;
    } else {
        return even;
    }
}

console.timeEnd('hi');

//module.exports 는 보통 한가지 리턴할때 사용.
module.exports = checkOddOrEven;

/*
console.Time console.timeEnd 시간로깅
console.error 에러로깅
console.log 평범한 로그
console.dir : 객체로깅
console.trace : 호출스택 로깅 함수안에서 쓴다.
console.table
 */