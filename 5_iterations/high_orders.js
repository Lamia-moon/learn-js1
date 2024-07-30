// for of

// const arr = [1, 2, 3, 4, 5]
// for (const num of arr) {
//     console.log(num);
// }

// const greetings = "hellow World"
// for (const greet of greetings) {
//     // console.log(`each char is ${greet}`);
// }

// map

// const map = new Map()
// map.set('BN', "Bangladesh")
// map.set('JAP', "Japan")
// map.set('Fr', "France")
// console.log(map);
// for (const [key, value] of map) {
    // console.log(key, ':-', value);
// }

// Object

const myObject = {
    js: 'Javascript',
    cpp: 'C++',
    rb: 'Ruby'
}
for (const key in myObject) {
    // console.log(`${key} shortcut for ${myObject[key]}`);
}

const programming = ["js", "cpp", "py", "rb"]
for (const key in programming) {
    // console.log(programming[key]);
}

const map = new Map()
map.set('BN', "Bangladesh")
map.set('JAP', "Japan")
map.set('Fr', "France")
for (const key in map) {
    console.log(key);
}