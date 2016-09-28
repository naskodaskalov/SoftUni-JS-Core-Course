"use strict";

function printTriangle(size) {
    for (let row=1; row <= size; row++) {
        //console.log(new Array(row+1).join('$'));
        console.log('$'.repeat(row));
    }
}

printTriangle([3]);