"use strict";

// function getChessboard(n) {
//     let size = Number(n[0]);
//     let html = `<div class="chessboard">\n`;
//     for (let row = 1; row <= size; row++) {
//         html += `\t<div>\n`;
//         let color = (row % 2 == 0 ? 'white' : 'black');
//         for (let col = 1; col <= size; col++) {
//             html+= `\t\t<span class="${color}"></span>\n`;
//             color = (color == 'white') ? 'black' : 'white';
//         }
//         html += `\t</div>\n`;
//     }
//
//     html += `</div>`;
//     return html;
// }

//console.log(getChessboard(['4']));

function chessboard(num){
    let size = Number(num[0]);
    let html = '<div class = "chessboard">\n';
    for (let row = 1; row <= size; row++){
        html += "  <div>\n";
        let color = (row % 2 != 0) ? 'black' : 'white';
        for (let col = 1; col <=size; col++){
            html +=`<span class = '${color}'></span>\n`;
            color = (color == 'black') ? 'white' : 'black';
        }
        html += '</div>\n';
    }
    return html;
}
console.log(chessboard('5'));