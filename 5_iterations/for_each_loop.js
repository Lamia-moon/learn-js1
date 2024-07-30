const coding = ["js", "java", "cpp", "python"]

// coding.forEach( function (val) {
//     console.log(val);
// })

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })

const myArr = [
    {
        languageName: "Javascript",
        fileName: "js"
    },
    {
        languageName: "Java",
        fileName: "java"
    },
    {
        languageName: "python",
        fileName: "py"
    }
]
myArr.forEach( (item) => {
    console.log(item.fileName);
} )
