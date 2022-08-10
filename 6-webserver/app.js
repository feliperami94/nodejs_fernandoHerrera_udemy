const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Home Page')
})

app.get('/hello-world', function (req, res) {
    res.send('Hello World with its route')
  })

app.get('*', function (req, res) { //* Means all other route
    res.send('404 | Page not found')
  })

app.listen(8080)