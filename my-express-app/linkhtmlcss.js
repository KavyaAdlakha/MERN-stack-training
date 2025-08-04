import express from 'express';

const app = express()
const port = 3000;

//Middleware to serve static file ffrom the public directory
app.use(express.static('public'))

//define a root route to serve the index.html file(optional)
app.get('/',(req,res)=>{
   res.sendFile('index.html',{root: 'public'});
})

app.listen(port,()=>{
    console.log(`listening to the port number ${port}`)
})
