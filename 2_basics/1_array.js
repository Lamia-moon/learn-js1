//  Arrays

// const myArr = [1, 5, 8, 6]
// const myColor = ['red', 'blue', 'green']
// console.log(myArr[1]);

// Array method

// myArr.push(6)
// myArr.pop()
// myArr.unshift(9)
// myArr.shift()

// console.log("A", myArr);
// const myn1 = myArr.slice(1, 3)

// console.log(myn1);
// const myn2 = myArr.splice(1, 3)
// console.log(myArr);

// ++++++++++++++++++ Array Function +++++++++++++++++++++

const colorOne = ['red', 'green', 'blue']
const colorTwo = ['yellow', 'white', 'black']

// colorOne.push(colorTwo)
// console.log(colorOne);
// console.log([2] [1]);

const newColor = colorOne.concat(colorTwo)
console.log(newColor);

const newColors = [...colorOne, ...colorTwo]
console.log(newColors);

const myArr = [0,1,2,3,[4,5],6,[7,8,[9,10]]]
const newArr = myArr.flat(Infinity)
console.log(newArr);

console.log(Array.isArray("Moon"));
console.log(Array.from("Moon"));
console.log(Array.from({name: "Moon"})); // interesting for interview

let num1 = 100
let num2 = 200
let num3 = 300

console.log(Array.of(num1, num2, num3));

