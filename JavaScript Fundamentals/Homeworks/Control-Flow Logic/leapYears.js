"use strict";

function checkLeapYear([year]) {
    let leap = (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
    return leap ? "yes" : "no";
}

console.log(checkLeapYear(['2000']));