"use strict";

function primeChecker(num) {
    let prime = true;
    for (let d = 2; d <= Math.sqrt(num); d++) {
        if (num % d == 0) {
            prime = false;
            break;
        }
    }
    return prime && (num > 1);
}

console.log(primeChecker(['7']));
console.log(primeChecker(['8']));
console.log(primeChecker(['81']));