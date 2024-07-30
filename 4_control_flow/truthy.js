const userEmail = "" //"moon@gmail.com"

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy value

// false, 0, -0, BigInt, On, "", null, undefined, NaN

// truthy values
// "0", "false", " ", [], {}, function(){}

if (userEmail.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

//  Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = undefined ?? null

console.log(val1);

// Terniary Operator

//  conditin ? true: false

const teaPrice = 180
teaPrice <= 80? console.log("Less than 80") : console.log("More than 80");