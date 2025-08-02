const data  = {
    name: "kavya",
    age: 20,
    class: 12
}

console.log(data)
const jsondata = JSON.stringify(data)
console.log(jsondata)

const objData = JSON.parse(jsondata)
console.log(objData)