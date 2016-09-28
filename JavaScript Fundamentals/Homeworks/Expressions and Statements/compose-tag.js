"use strict";

function html([url, name]) {
    let link = url;
    let altName = name;

    console.log(`<img src="${link}" alt="${altName}">`);
}

html(['smiley.gif', 'Smiley Face']);