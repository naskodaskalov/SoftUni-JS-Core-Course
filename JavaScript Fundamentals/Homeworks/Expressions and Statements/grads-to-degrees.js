"use strict";

function convert(grads) {
    let gradsToConvert = grads.map(Number);
    let converted = (gradsToConvert * 0.9) % 360;

    if (converted < 0) {
        console.log(converted + 360);
    } else {
        console.log(converted);
    }
}

convert([100]);
convert([400]);
convert([850]);
convert([-50]);