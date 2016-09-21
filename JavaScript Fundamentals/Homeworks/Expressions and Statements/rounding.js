"use strict";

function rounding([number, precision]) {
    [number, precision] = [number, precision].map(Number);
    let multAndDivide = Math.pow(10, precision);
    let round = Math.round(number * multAndDivide) / multAndDivide;

    console.log(round);
}

rounding([3.1415926535897932384626433832795, 2]);
rounding([10.5, 3]);