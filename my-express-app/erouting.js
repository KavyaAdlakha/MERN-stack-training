import express from 'express';
// import {Route} from "react-router-dom";
const app = express()
const port = 3000;
app.get('/',(req,res)=>{
    res.send("welcome to home page")
})
app.get('/about',(req,res)=>{
    res.send("this is aabout page")
})
app.get('/contact',(req,res)=>{
    res.send("contact no. 324567895")
})

app.listen(port,()=>{
    console.log(`listening to the port number ${port}`)
})
