"use strict";

function quadCalcs([a,b,c]) {
    [a,b,c] = [a,b,c].map(Number);
    let discriminant = Math.pow(b, 2) - (4 * a * c),
        x1 = 0,
        x2 = 0,
        x = 0;

    if (discriminant > 0) {
        x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        console.log(`${Math.min(x1, x2)}\n${Math.max(x1, x2)}`);
    } else if (discriminant == 0) {
        x = -b / (2*a);
        console.log(x);
    } else {
        console.log('No');
    }
}

quadCalcs([6, 11, -35]);
quadCalcs([1, -12, 36]);
quadCalcs([5, 2, 1]);

// discriminant
// d = b2 - 4*a*c

// possitive discriminant
// x1 = (-b + √d) / (2*a)
// x2 = (-b - √d) / (2*a)

// 0 discriminant
// x = -b / (2*a)

//negative discriminant
// No
