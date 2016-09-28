"use strict";

function findThePoint(args) {
    let x = Number(args[0]),
        y = Number(args[1]),
        xMin = Number(args[2]),
        xMax = Number(args[3]),
        yMin = Number(args[4]),
        yMax = Number(args[5]);

    if (x >= xMin && x <= xMax && y >= yMin && y <= yMax) {
        console.log("inside");
    } else {
        console.log("outside");
    }
}

findThePoint([8, -1, 2, 12, -3, 3]);