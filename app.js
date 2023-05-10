const express = require('express')
var app = express()
const path = require('path')
const ejs = require('ejs')
var fs = require('fs')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')));

var port = 1000

app.listen(port, function () {
    console.log("Listening on port " + port)
})

//main
app.get('/', function (req,res) {
    res.render('main.ejs')
})

app.get('/Collection', function (req,res) {
    res.render('collection.ejs')
})

app.get('/', function (req,res) {
    res.render('main.ejs')
})

app.get('/', function (req,res) {
    res.render('main.ejs')
})

app.get('/', function (req,res) {
    res.render('main.ejs')
})

app.get('/', function (req,res) {
    res.render('main.ejs')
})

app.get('/', function (req,res) {
    res.render('main.ejs')
})

app.get('/', function (req,res) {
    res.render('main.ejs')
})