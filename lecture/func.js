// ../부모폴더 ../../조부모 폴더 ./현재 나의 폴더
// const value = require('./var');
const {add, even} = require("./var");
// console.log(value);

function checkOddOrEven(number) {
    if (number % 2) {
        return add;
    } else {
        return even;
    }
}

module.exports = checkOddOrEven;