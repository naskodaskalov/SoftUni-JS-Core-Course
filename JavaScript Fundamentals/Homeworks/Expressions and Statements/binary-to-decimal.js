"use strict";

function convert([binary]) {
    let decimal = parseInt(binary, 2);

    console.log(decimal);
}

convert(['00001001']);
convert(['11110000']);