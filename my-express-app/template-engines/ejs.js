import express from 'express';

const app = express();

app.set('view engine', 'ejs');  //set EJS as the template engine
app.set('views', '../views');   // specify the view folder

app.get('/', (req,res) => {
    res.render('index', {title: 'Hello EJS', message: 'This is  Ejs'})
});

app.listen(3000, ()=> 
    console.log('server running on http://localhost:3000')
)