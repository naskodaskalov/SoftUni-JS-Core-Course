"use strict";

function circleArea([radius]) {
    let area = Math.PI * radius * radius;

    console.log(area);
    return (Math.round(area * 100) / 100);
}

console.log(circleArea(['5']));