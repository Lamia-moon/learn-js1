//  Primitive
//  7 types: string, Number, boolean, null, undefined, symbol, bigInt

// const score= 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let eserEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')
// console.log(id === anotherId);
// // output false

// const bigNumber = 1111111111122222222223333333n

// // Reference (Non primitive)
// //  Array, Objects, Functions

// const color = [ "red", "blue", "black"];
// let myObj = {
//     name: "moon",
//     age: 26,
// }

// const myFunction = function () {
//     console.log("Hello World");
// }
// console.log(typeof anotherId);

// ***************************************************************
//  stack(primitive) ||  heap(non primitive)

let myMainName = "Lamia"
let anotherName = myMainName
anotherName = "Moon"
console.log(myMainName);
console.log(anotherName);

let userOne = {
    email : "abcd@gmail.com"
}
let userTwo = userOne
userTwo.email = "bbccdd@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);