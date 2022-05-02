console.log(this);// js 에서는 윈도우 즉 글로벌인데 노드는 어떨까? (빈 객체이다.)
console.log(this === module.exports);

function a() {
    console.log(this === global);
}

a();