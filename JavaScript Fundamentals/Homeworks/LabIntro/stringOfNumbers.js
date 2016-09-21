"use strict";

function stringOfNumber(num) {
    let n = Number(num[0]);
    let string = "";
    
    for (let i = 1; i <= n; i++) {
        string += i;
    }

    console.log(string);
}

stringOfNumber(['11']);