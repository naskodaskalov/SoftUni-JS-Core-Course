"use strict";

function calcs(args) {
    let a = Number(args[0]);
    let b = Number(args[1]);

    let perimeter = 2 * (a + b);
    let area = a * b;

    return `${area}\n${perimeter}`;
}

console.log(calcs(['2', '2']));