"use strict";

function calcs([sum, rate, frequency, length]) {
    [sum, rate, frequency, length] = [sum, rate, frequency, length].map(Number);

    let principalSum = sum;
    let interestRate = rate / 100; //in percent
    let compoundingFrequency = 12/ frequency; //in months
    let timespan = length; //in years
    let n = 1 + (interestRate / compoundingFrequency);
    let t = (compoundingFrequency * timespan);

    let formula = principalSum*(Math.pow(n, t));

    console.log(Math.round(formula * 100) / 100);
}

calcs([1500, 4.3, 3, 6]);
calcs([100000, 5, 12, 25]);