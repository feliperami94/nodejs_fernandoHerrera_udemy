require('dotenv').config();
const express = require('express')
var hbs = require('hbs');
const app = express()
const port = process.env.PORT;

console.log(port)



//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static('public'));

const params = {
    name: 'Felipe Ramirez',
    title: 'Node course'
}

app.get('/', (req, res) => {
    res.render('home', params);

})

app.get('/generic', (req, res) => {
    res.render('generic', params);

})

app.get('/elements', (req, res) => {
    res.render('elements', params);

})




app.listen(port, ()=>{
    console.log(`Listening to localhost: ${port}`);
})