const score = 100;
const balance = new Number(100);
// console.log(balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 122.8995;

// console.log(otherNumber.toPrecision(3));

const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-BN'));

// +++++++++++++++++++++ Maths ++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-5));
// console.log(Math.round(5.8));
// console.log(Math.ceil(5.2));
// console.log(Math.floor(5.9));
// console.log(Math.max(5,2,7,9));
// console.log(Math.min(5,2,7,9));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const max = 6;
const min = 1;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
