"use strict";

function convertUnits(unit) {
    [unit] = [unit].map(Number);
    let feet = unit / 12;
    let inches = unit % 12;

    console.log(`${Math.floor(feet)}'-${inches}"`);
}

convertUnits([36]);
convertUnits([55]);
convertUnits([11]);