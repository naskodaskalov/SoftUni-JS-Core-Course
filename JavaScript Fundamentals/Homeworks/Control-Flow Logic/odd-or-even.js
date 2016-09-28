"use strict";

function checkOddOrEven(input) {
    let num = Number(input[0]);
    num = num % 2;
    if (num == 0) {
        return "even";
    } else if (num == Math.round(num)) {
        return "odd";
    } else {
        return "invalid";
    }
}

console.log(checkOddOrEven(['5']));
console.log(checkOddOrEven(['8']));
console.log(checkOddOrEven(['1.5']));