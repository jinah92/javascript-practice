const { odd, even } = require('./var');

function checkOddOrEven(num) {
    if (num % 2) {  // 홀수 (true === 1)
        return odd;
    } else {        // 짝수 (false === 0)
        return even;
    }
}

module.exports = checkOddOrEven;