"use strict";

function calcDistance([v1, v2, t]) {
    [v1, v2, t] = [v1, v2, t].map(Number);
    let secondsToHours = t / 3600;
    let distanceA = v1 * secondsToHours;
    let distanceB = v2 * secondsToHours;
    let differenceInDistance = Math.abs(distanceA - distanceB);

    console.log(differenceInDistance * 1000);
}

calcDistance([0, 60, 3600]);
calcDistance([11, 10, 120]);
calcDistance([5, -5, 40]);