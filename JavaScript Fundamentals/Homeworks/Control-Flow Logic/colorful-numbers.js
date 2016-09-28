"use strict";

function html(input) {
    let n = Number(input[0]);
    let result = "<ul>\n";
    for (let i = 1; i <= n; i++) {
        let color = (i % 2 == 0 ? "blue" : "green");
        result += `  <li><span style='color:${color}'>${i}</span></li>\n`;

    }

    result += "</ul>";
    return result;
}

console.log(html(['3']));