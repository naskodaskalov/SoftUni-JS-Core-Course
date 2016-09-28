"use strict";

function biggestNum([firstNum, secondNum, thirdNum]) {
    [firstNum, secondNum, thirdNum] = [firstNum, secondNum, thirdNum].map(Number);
    return Math.max(firstNum, secondNum, thirdNum);
}

console.log(biggestNum([5, -2, 7]));

