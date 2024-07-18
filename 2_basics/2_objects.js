//  singleton
// object.create

// objects literals

const mySym = Symbol("key1")
const JsUser = {
    name: "Moon",
    "age" : 25,
    [mySym] : "mykey1",
    location: "Dhaka",
    email: "Moon@gmail.com",
    isLoggedIn: false
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["age"]);
// console.log(JsUser[mySym]);

JsUser.email = "moon007@gmail.com"
// Object.freeze(JsUser)
// JsUser.email = "moon001@gmail.com"

// console.log(JsUser);

JsUser.greetings = function () {
    console.log("Hello js user");
}

JsUser.greetingsTwo = function () {
    console.log(`Hello js user ${this.name}`);
}
console.log(JsUser.greetings());
console.log(JsUser.greetingsTwo());

// +++++++++++++++++++++++++ Part 2 ++++++++++++++++++++++++++

// const tinderUser = new Object() //singleton obj
const tinderUser = {} // non singleton obj

tinderUser.id = "123abc"
tinderUser.name = "Moon"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regulerUser = {
    id : "abc123",
    name: {
        userfullname: {
            firstname: "Lamia",
            lastname: "Moon"
        }
    }
}

console.log(regulerUser.name.userfullname.firstname);

const obj1 = {1:'a', 2:'b'}
const obj2 = {3:'a', 4:'b'}
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
console.log(obj3);

const users = [
    {
        id: 1,
        email: "M@gmail.com"
    },
    {

    },
    {

    },
]

users[1].email
console.log(tinderUser);

 console.log(Object.keys(tinderUser));
 console.log(Object.values(tinderUser));
 console.log(Object.entries(tinderUser));

 console.log(tinderUser.hasOwnProperty('name'));

//  ++++++++++++++++++++++ De-Structure/JSON API ++++++++++++++++++++++

