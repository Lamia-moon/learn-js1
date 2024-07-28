function sayMyName() {
    console.log("M");
    console.log("O");
    console.log("O");
    console.log("N");
}
// sayMyName()

function addTwoNums(num1, num2) {
    console.log(num1 + num2);
}
addTwoNums(3, 4)
// addTwoNums(3, null)
// addTwoNums("3", 4)
// addTwoNums(3, "4")
// addTwoNums(3, "v")

// const result = addTwoNums(3, 5)
// console.log("result: ", result);

function addTwoNums(num1, num2) {
    // let result = num1 + num2
    // return result
    return num1 + num2
}
const result = addTwoNums(3, 5)
// console.log("result: ", result);

function loginUserMessage(username = "Moon") {
    if (!username) {
        // console.log("Please enter a username");
        return 
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage());

function  calculateCartPrice(...num1) {
    return num1
}
// console.log(calculateCartPrice(100, 200, 300, 400));

// function  calculateCartPrice(val1, val2, ...num1) {
//     return num1
// }
// console.log(calculateCartPrice(100, 200, 300, 400));

const user = {
    username : "Moon",
    price : 199
}
function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    username: "Moon",
    price: 299
})

const myNewArr = [100, 200, 300, 400]
function returnSecondValue(getArr) {
    return getArr[1]
}
console.log(returnSecondValue(myNewArr));