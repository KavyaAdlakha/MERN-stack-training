const data = {
    name: "kavya",
    age: 20,
    class: 12
}
const jsonData = JSON.stringify(data)
console.log(jsonData)

const fs = require("fs")
fs.writeFileSync('read.js',jsonData)