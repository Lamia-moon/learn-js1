// dates

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());

// console.log(typeof myDate);

// const myCreatedDate = new Date(2024, 6, 16);
// const myCreatedDate = new Date(2024, 6, 16, 10, 34);
// const myCreatedDate = new Date("2024-07-16");
const myCreatedDate = new Date("07-17-2024");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now

// console.log(myCreatedDate.getTime());
// console.log(Math.floor((Date.now()/1000)));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

newDate.toLocaleString('default' {
    weekday: "long",
})
