// Server setup
const express = require('express')
const app = express()
const api = require('./Routes/api')
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})
// Mongoose setup
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/transactionsDB', { useNewUrlParser: true ,useUnifiedTopology: true})

app.use('/', api)

const port = process.env.PORT || 4200
app.listen(port, function () {
    console.log(`Running on port ${port}`)
})