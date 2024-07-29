const user = {
    username: "Moon",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}
user.welcomeMessage()
user.username = "Sam"
user.welcomeMessage()

// console.log(this);

// function one() {
//     username = "Moon"
//     console.log(this.username);
// }
// one()
// const one = function() {
//     username = "Moon"
//     console.log(this.username);
// }
// one()
const one = () => {
    username = "Moon"
    console.log(this);
}
one()

// const addTwo = (num1, num2) => { //explecite return
    return num1 + num2
// }
console.log(addTwo(2, 5));

// const addTwo = (num1, num2) => ( num1 + num2 ) //implecite return
const addTwo = (num1, num2) => ( {username: "Moon"} ) // object return 

console.log(addTwo(2, 5));