"use strict";

function multiplicationTable(n) {
    let size = n.map(Number),
        line = '';

    line += `<table border="1">`;
    line += '<tr><th>x</th>';
    for (let i = 1; i <= size; i++) {
        line += '<th>' + i + '</th>';
    }
    line += '</tr>';

    for (let rows = 1; rows <= size; rows++) {
        line += '<tr><th>' + rows + '</th>';
        let numbers = rows;
        for (let cols = 1; cols <= size; cols++) {
            line += '<td>' + (numbers * cols) +'</td>';
        }

        line += '</tr>';
    }
    line += `</table>`;

    return line;
}

