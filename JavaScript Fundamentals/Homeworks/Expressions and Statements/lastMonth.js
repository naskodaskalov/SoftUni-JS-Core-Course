"use strict";

function checkLastDay(args) {
    let day = Number(args[0]);
    let month = Number(args[1]);
    let year = Number(args[2]);

    var currentDate = new Date(year, month - 1, 0);

    console.log(currentDate.getDate());
}

checkLastDay(['17','3','2002']);