let a = 100
if (true) {
    let a = 10
    const b = 20
    // console.log("Inner: ", a);
}
// console.log("Outer: ", a);

function one (){
    const username = "Moon"
    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    // two()
}
// one()

if (true) {
    const username = "Moon"
    if (username === "Moon") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// ++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++++

console.log(addones(5));
function addones(num) {
    return num + 1
}

addTwo(5)
const addTwo = function (num) {
    return num + 2
}