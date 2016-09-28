"use strict";

function print(n) {
    let size = n.map(Number),
        lengthOfLine = (2 * size) - 1;

    if (size % 2 == 0) {
        size -+ 1;
    } else {
        size = size;
    }

    //first line
    console.log('+' + '-'.repeat((lengthOfLine-3)/2) + '+' + '-'.repeat((lengthOfLine-3)/2) + '+');

    if (size > 4) {
        middleLines();
    }
    //middle line
    console.log('+' + '-'.repeat((lengthOfLine-3)/2) + '+' + '-'.repeat((lengthOfLine-3)/2) + '+');

    if (size > 4) {
        middleLines();
    }

    //last line
    console.log('+' + '-'.repeat((lengthOfLine-3)/2) + '+' + '-'.repeat((lengthOfLine-3)/2) + '+');

    function middleLines() {
        let end = 0;
        if (size % 2 == 0) {
            end = (size-4)/2;
        } else {
            end = (size-3)/2;
        }
        for (let i = 0; i < (end); i++) {
            console.log('|' + ' '.repeat((lengthOfLine-3)/2) + '|' + ' '.repeat((lengthOfLine-3)/2) + '|');
        }
    }
}

print([5]);
//print([5]);
// print([6]);
// print([7]);


// n = 4
// +--+--+
// +--+--+
// +--+--+