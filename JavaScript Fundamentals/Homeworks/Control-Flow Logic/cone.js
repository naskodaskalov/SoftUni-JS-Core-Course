"use strict";

function calcs(input) {
    let height = Number(input[1]);
    let radius = Number(input[0]);
    let slant = Math.sqrt((radius * radius) + (height * height));
    let volume = (Math.PI * radius * radius * height) * (1/3);
    let area = (Math.PI * radius *radius) + (Math.PI * radius * slant);

    console.log(`volume = ${Math.round(volume * 10000) / 10000}`);
    console.log(`area = ${Math.round(area * 10000) / 10000}`);
}

calcs(['3', '5']);
calcs(['3.3', '7.8']);