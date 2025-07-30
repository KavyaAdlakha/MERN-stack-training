// const validator = require("validator");  // for common js
import validator from "validator"           // for ES Modules
const a=validator.isEmail('aman@gmail.com')
console.log(a)

const g = validator.isURL('https://www.google.com/')
console.log(g)

const n = validator.isNumeric('123456')
console.log(n)
const isPhoneNumber = validator.matches('9024755889', /^[0-9]{10}$/);
console.log(isPhoneNumber)