//모듈화 하기
const add = '홀수 입니다.';
const even = '짝수 입니다.';

// 객체를 module.exports 에 대입. [] 배열도 가능.
// module.exports === exports === {add ,even}
module.exports = {
    // 객체를 안에 넣어주어야함. 여러가지 사용 할 경우!
    add, even,

};

//module.exports 와 exports 는 같이 쓸 수 없다.
exports.add = add;
exports.even = even;

