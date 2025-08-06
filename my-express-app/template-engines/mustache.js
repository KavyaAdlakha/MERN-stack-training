import express from 'express';
import mustacheExpress from 'mustache-express';

const app = express();
app.engine('mustache',mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', '../views')

app.get('/', (req,res) => {
    res.render('index', {title: "Hello, mustache", message: "this is dynamic mustache"})
});

app.listen(8000, () => console.log('server is running on port 8000'))