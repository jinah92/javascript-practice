const a = require('./var');
const b = require('./func');
// const { odd, even } = require('./var');
// const checkNumber = require('./func');

function checkStringOddOrEven(str) {
    if(str.length % 2) {    // 홀수
        // return odd;
        return a.odd;
    } else {                // 짝수
        // return even;
        return a.even;
    }
}

// console.log(checkNumber(10));
console.log(b(10));
console.log(checkStringOddOrEven('hello'));