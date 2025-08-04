import express from 'express';
const app =express();

app.get("/",(req,res)=>{
    res.send("hello from express")
})
app.get("/temp",(req,res)=>{
    res.send({
        id: 1,
        name: "rohan"
    })
})
app.listen(8000,()=>{
    console.log('listening the port at 8000')
})