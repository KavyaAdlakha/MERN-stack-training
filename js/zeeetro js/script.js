// console.log(456);
// log is a method
// console.log("hello world");
// a = "hello"
// console.log(a);

// let a=5
// let b=++a
// console.log(a)
// console.log(b)

// console.log(5=='5')
// console.log(5==='5')

// let num = 15;
// if(num % 3== 0 && num % 5 ==0){
//     console.log("divisible by 3 and 5")
// } else {
//     console.log("not divisible")
// }

// a=5;
// console.log(`the value of a is ${a}`)

// const marks = 85;

// let branch;
// switch (true) {
//     case marks >= 90:
//     branch = "CSS";
//     break;
//     case marks >= 80:
//     branch = "mechanical";
//     break;
//     case marks >=70:
//     branch = "chemical";
//     break;
//     case marks >= 60:
//     branch = "Civil";
//     break;
//     case marks >=50:
//     branch = "electrical";
//     break;
//     default:
//         branch = "bio technology";
//         break;    

// }
// console.log(`student branch name is : ${branch}`)

// for(let i=1;i<=6;i++){
//     console.log(i);
//     }

// let i = 1
// while(i<=10){
//     console.log(i)
//     i++
// }

// let i=1
// do{
//     console.log(i)
//     i++
//     }
// while (i<0);

// for(i=1;i<=5;i++){
//     row=''
//     for(j=1;j<=5;j++){
//         row=row+'*'
//     }
//     console.log(row);
// }

// for(i=1;i<=5;i++){
//     row=''
//     for(j=1;j<=i;j++){
//         row=row+'*'
//     }
//     console.log(row);
// }

// for(i=5;i<=1;i++){
//     row=''
//     for(j=1;j<=i;j++){
//         row=row+'*'
//     }
//     console.log(row);
// }

// a= "hello world";
// console.log(a[2]);
// console.log(a.length);
// console.log(a.toUpperCase())
// console.log(a.toLowerCase())

// a="   hello  "
// console.log(a.trim())


// a="hello"
// console.log(a.slice(2,5))

// a="hello world";
// console.log(a.replace("hello","hii"))

// let str1="hello";
// let str2="world";
// let result=str1+" "+str2;
// console.log(result);

// let str1="hello";
// let str2="world";
// let result=str1.concat(" " +str2);
// console.log(result);

// let str1="hello";
// let str2="world";
// let result=(`${str1} ${str2}`);
// console.log(result);

// let a = "hello";
// let b= " "
// for(i=a.length-1;i>=0;i--){
//     b=b+a[i];
// }
// console.log(b)

// let marks = [85,46,85,96];
// console.log(marks);
// console.log(marks.length);
// marks.push(23);
// console.log(marks);
// marks.pop(5);
// console.log(marks)
// marks.toString(marks);
// console.log(marks);

// let a=[1,2,3,4,5];
// let b=[6,5,8,9,4];
// marks=a.concat(b)
// console.log(marks);

// marks.unshift(12);
// console.log(marks);

// marks.shift(12);
// console.log(marks)

// let a=[1,2,3,4,5,6,7];
// console.log(a);
// b=a.slice(2,5);
// console.log(b);
// a.splice(2,2,10,12);
// console.log(a);

// function hello(name){
//     console.log(`the name is ${name}`)
// }
// hello("rohit")

// const a = function(name){
//     console.log(`the name is ${name}`)
// }
// a("rohit")

// setTimeout(function(){
//     console.log("hello")
// },3000)

// const add=(a,b)=>{
//     console.log(a+b);
// }
// add(4,5);

// (function(){
//     console.log("this is a IIFE");
// })();

// function addition(a,b,addi){
//     return addi(a,b);
// }
// function add(a,b){
//     console.log(a+b);
// }

// addition(5,6,add);

// let a=window.document.getElementById("a")
// console.log(a.textContent);

// let a=window.document.getElementsByClassName("a")
// console.log(a[1].textContent)

// const element = document.querySelector('#mydiv')
// console.log(element.textContent)

// const element = document.querySelector('.myclass');
// console.log(element.textContent)

// const b=document.getElementById("a");
// b.textContent="hello frrom js";
// console.log(b.textContent)

// const b=document.getElementById('a')
// b.innerHTML='<b>hello from js</b>'
// console.log(b.innerHTML);

// const b=document.getElementById('a');
// b.style.color='red';

// function  printfibonacci(n) {
//     let a=0, b=1;
//     console.log("Fibonacci Series:");
//     for(i=0;i<n;i++){
//         console.log(a);
//         let next = a+b;
//         a=b;
//         b=next
//     }
// }
// printfibonacci(10);

function ispalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed
}
console.log(ispalindrome("madam"))

// const button = document.getElementById('mybutton');
// button.addEventListener('click', () => {
//     alert("button clicked");
// })

// const input = document.getElementById('myinput');
// input.addEventListener('keydown', (event) => {
//     console.log(`key pressed: ${event.key}`);
// });

// const form = document.getElementById('myform');
// form.addEventListener("submit", (event) => {
//     event.preventDefault(); //prevent from submitting the form
//     alert("form submitted");
// })

// window.addEventListener('load', () => {
//     console.log("page fully loaded")
// })

// const  greet = document.getElementById('myfocus');
// greet.addEventListener('focus', ()=> {
//     console.log("Input field focused");
// })
// greet.addEventListener('blur', ()=> {
//     console.log("Input field blured");
// })

// const select = document.getElementById('myselect');
// select.addEventListener('change', (event) => {
//     console.log(`Selected: ${event.target.value}`);
// })

const div = document.getElementById("box");
div.addEventListener("mouseover",() => {
    div.style.backgroundColor="yellow";
});
div.addEventListener("mouseout",() => {
    div.style.backgroundColor="lightblue";
});


  const list = document.getElementById("mylist");

  list.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
      alert(`You clicked on: ${event.target.textContent.trim()}`);
    }
  });

const person = {
    firstName : "john",
    lastName : "doe",
    greet : function() {
        return`hello,my name is ${this.firstName} ${this.lastName}`
    }
}
console.log(person.greet());

const obj = {a:1, b:2, c:3};
console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))

const target = {a:1};
const source = {b:2, c:3};
Object.assign(target,source);
console.log(target)

const objj = {a:1};
Object.freeze(objj);
objj.a=2; //error: can not modify a frozen object
console.log(objj)

const objjj ={a:1};
Object.seal(objjj);
objjj.a=2 //allowed
objjj.b=3 //error can not add new property
console.log(objjj)

// classes---------------------------------

class car{
    constructor(make, model){
    this.make = make;
    this.model = model;
    }
    getCarDetails(){
        return `${this.make} ${this.model}`;
    }
}

const mycar = new car('Toyota','Camry');
console.log(mycar.getCarDetails());

class calculator{
    add(a,b) {
        return a+b;
    }
    subtract(a,b) {
        return a-b;
    }
}
const calc = new calculator();
console.log(calc.add(10,5));
console.log(calc.subtract(10,5));

class animal{
    constructor(name){
        this.name=name;
    }
    speak() {
        console.log(`${this.name} makes a sound`);
    }
}
class dog extends animal{
    speak() {
        console.log(`${this.name} barks`);
    }
}
const Dog = new dog('buddy');
Dog.speak();  

// synchronus----------------------------------

console.log("start");

function synctask(){
    console.log("synchronus task")
}
synctask();
console.log("end")

// asynchronous-------------------------------

// callback-----------------------------------

// callback hell-------------------------------------

function getData (dataid,getnextdata){
    setTimeout(()=>{
        console.log("data with id",dataid)
        if(getnextdata){
            getnextdata();
        }
    },3000)
}

getData(1,()=>{
    getData(3,()=>{
        getData(4)
    })
})

// promise chain------------------------------

function asyncfunction1() {
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            console.log("data1");;
            resolve("success")
        },4000);
    })
}

function asyncfunction2 () {
    return new promise ((resolve,reject) =>{
        setTimeout(() => {
            console.log("data2");
            resolve("success")
        }, 4000);
    })
}

//Async---------------------------

async function hello(){
    console.log("hello")
}

// Await-----------------

function getData(dataId){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            console.log("data",dataId)
            resolve("success")
        },3000)
    } )
}

async function getAllData(){
    console.log("get data id 1")
    await getData(1);
    console.log("get data id 2")
    await getData(2);
    console.log("get data id 3")
    await getData(3);
    console.log("get data id 4")
    await getData(4);
    console.log("get data id 5")
    await getData(5);

}

// fetch api----------------------------------
const url = "https://api.artic.edu/api/v1/artworks";

let promise = fetch(url)
console.log(promise);

const getFacts = async()=>{
console.log("getting data")
let response = await fetch(url)
console.log(response)
}