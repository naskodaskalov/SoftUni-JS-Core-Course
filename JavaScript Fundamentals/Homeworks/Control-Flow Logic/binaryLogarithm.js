"use strict";

function binaryLogarithm(input) {
    for (let x of input) {
        console.log(Math.log2(x));
    }
}

binaryLogarithm(['1024', '1048576', '256', '1', '2']);