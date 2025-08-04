import express from 'express';

const app = express();
//without http
app.get("/",(req,res)=> {
    res.send("hello from express")
});
app.listen(8000,()=>{
    console.log('listening the port at 8000')
})