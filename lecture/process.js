// 프로세서

/*
밑처럼 비밀키를 가리는 용도로 사용하기도함.
 */
const secretId = process.env.SECRET_ID;
const secretCode = process.env.SECRET_CODE;

// NODE_OPTIONS=--max-old-space-size=8192 메모리 사용량 늘리기
// UV_THREADPOOL_SIZE=8 쓰레드 사이즈 늘리기 디폴트4개.

//process.nextTick (콜백)
/*
이벤트 루프가 다른 콜백 함수들 보다 nextTick 의 콜백 함수를 우선적으로 처리한다.
너무 남용시 다른 콜백 함수들 싱행이 늦어진다.
비슷한 경우로 promise 가 있다.
setImmediate, setTimeout 보다 promise 와 nextTick 가 먼저 실행됨.
우선순위가 있는 애들끼리는 순서가 지켜짐.
노드에서는 setTimeout 말고 setImmediate 를 사용하자.
 */