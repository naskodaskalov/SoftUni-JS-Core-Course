"use strict";

function createObj(args) {
    let obj = {
        [args[0]]: args[1],
        [args[2]]: args[3],
        [args[4]]: args[5]
    }
        console.log(obj);
}

createObj(['name', 'Pesho', 'age', '23', 'gender', 'male']);
createObj(['ssid', '90127461', 'status', 'admin', 'expires', '600']);