"use strict";

function boxesAndBottles([bottles , boxes]) {
    return Math.ceil(bottles/boxes);
}

console.log(boxesAndBottles(['20', '5']));