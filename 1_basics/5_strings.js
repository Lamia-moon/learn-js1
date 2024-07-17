// const name = "Moon"
// const age = 26

// console.log(`My name is ${name} and age is ${age}`);

// const gameName = new String('Moon')
// console.log(gameName[0]);
// console.log(gameName[1]);
// console.log(gameName[2]);
// console.log(gameName[3]);
// console.log(gameName.__proto__);

// console.log(gameName[3]);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('n'));

const gameName = new String('Moon-hs')
const newString = gameName.substring(0, 5)
console.log(newString);

const anotherString = gameName.slice(-6, 3)
console.log(anotherString);

const newStringOne = "    Moon    "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://moon.com/moon%20mega"
console.log(url.replace ('%20', '_'));