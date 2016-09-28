"use strict";

function triangleArea(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let c = Number(input[2]);
    let semiperimeter = (a + b + c) /2 ;

    let area = Math.sqrt(semiperimeter * (semiperimeter - a) * (semiperimeter - b) * (semiperimeter - c));
    return area;
}

console.log(triangleArea(['2', '3.5', '4']));