//  for

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element === 5) {
        // console.log("5 is the best number");
    }
    // console.log(element);
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Table of: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop ${j} and outer loop is ${i}`);
        // console.log(`${i} * ${j} = ${i*j}`);
    }
    
}
let myArr = ['red', 'blue', 'green']
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    // console.log(element);
}

// Break 

// for (let i = 1; i <= 10; i++) {
//     if (i == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//     console.log(`Value of i is ${i}`);
// }

// continue

for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        console.log(`Detected 5`);
        continue
    }
    console.log(`Value of i is ${i}`);
    
}