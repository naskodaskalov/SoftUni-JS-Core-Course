"use strict";

function lettersInString(input){
    let string = input[0];
    let letter = input[1];
    let count = 0;

    for (let i = 0; i < string.length; i++){
        if (string[i] == letter) {
            count++;
        }
    }

    console.log(count);
}

lettersInString(['hello', 'l']);