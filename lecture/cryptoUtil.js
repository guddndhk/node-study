/*
crypto(단방향 암호화)
암호화 는 가능하지만 복호화는 불가능.
암호화: 평문을 암호로 만듦
복호화: 암호를 평문으로 만듦.

단방향 암호화의 대표 주자는 해시 기법
문자열을 고정된 길이의 다른 문자열로 바꾸는 방식
abcdefgh 문자열 > qvew

Hash 사용하기
createHash : 사용할 해시 알고리즘을 넣어준다.
md5, sha1, sha256, sha512 등이 가능하지만 md5 , sha1 은 이미 취약점 발견
현재는 sha512 정도로 충분 나중에 sha512 마저도 취약해지면 더강화된 알고리즘으로 바꾸어야 한다.

update : 변환할 문자열을 넣어준다.
digest : 인코딩할 알고리즘을 넣어준다.
 */
const crypto = require('crypto');

console.log('base64', crypto.createHash('sha512').update('비밀번호').digest('base64'));
console.log('hex', crypto.createHash('sha512').update('비밀번호').digest('hex'));
console.log('base64', crypto.createHash('sha512').update('다른 비밀번호').digest('base64'));

/*
현재는 pdkdf2 나 , bcrypt, scrypt 알고리즘으로 비밀번호를 암호화.
node 는 pdkdf2, scrypt 을 지원한다.
bcrypt 는 지원하지 않는다. 하지만 사용법이 있다.. ㅎ
 */