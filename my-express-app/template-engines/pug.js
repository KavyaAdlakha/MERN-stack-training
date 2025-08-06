const express = require('express')

const app = express();

app.set('view engine', 'pug');
app.set('views', '../views'); 

app.get('/',(req,res) => {
    res.render('index', {title:'pug example', message: 'hello pug'})
});

app.listen(3000, () => console.log('server is running on port 3000'))