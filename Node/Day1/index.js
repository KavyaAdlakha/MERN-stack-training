// --->  Sync method

// const fs=require("fs")
// buff_data = fs.readFileSync("hello.txt")
// Data = buff_data.toString()
// console.log(Data)
// fs.renameSync("hello.txt","hii.txt")
// fs.unlinkSync("hii.txt")

// ---> Async method


// const fs=require("fs")
// fs.writeFile("hello.txt","this is example of async",
//     (err)=>{
//         console.log("new file creates")
//         console.log(err)
//     }
// )
// fs.readFile("hello.txt","utf-8",
//     (err,data)=> {
//         console.log(data)
//         console.log(err)
//     }
// )

// ---> OPerating system os

// const os = require("os")
// os.

// Build Own module----------------------

const oper = require("./Module")
console.log(oper.add(5,6))
console.log(oper.diff(10,7))