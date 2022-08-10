const express = require('express')
const app = express()
const port = 8080;

//Middleware to serve static content
app.use(express.static('public'));
// app.get('/', (req, res) => { //This gets unused because of the previous middleware
//     res.send('Home Page')
// })

app.get('/hello-world', (req, res) => {
    res.send('Hello World with its route')
})

app.get('*', (req, res) => { //* Means all other route
    res.sendFile(__dirname + '/public/404.html');
})



app.listen(port, ()=>{
    console.log(`Listening to localhost: ${port}`);
})