let express = require('express')
let app = express();

app.use((req,res,next) => {
    console.log(req.method, req.url)
    next()
})

app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(express.static(__dirname + '/public'))

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/about', (req,res) => {
    res.send("My Name is qwerty")
})

app.listen(5000, () => {
    console.log('Server is running on port 5k')
})

let express = require('express')
let app = express();

app.use((req,res,next) => {
    console.log(req.method, req.url)
    next()
})

app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(express.static(__dirname + '/public'))

// Routers

app.get('/form', (req,res) => {
    res.sendFile(__dirname + '/form.html')
})

app.post('/form', (req,res) => {
    res.send(req.body)
    console.log(req.body)
})

app.listen(5000, () => {
    console.log('Server is running on port 5k')
})



let express = require('express')
let app = express();
let logger = require('morgan')
let cookieParser = require('cookie-parser')

app.use(logger('dev'))
app.use(cookieParser())
app.use((req,res,next) => {
    res.cookie("username" , "Chinna")
    next()
})
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(express.static(__dirname + '/public'))

// Routers

app.get('/form', (req,res) => {
    res.sendFile(__dirname + '/form.html')
})

app.post('/form', (req,res) => {
    res.send(req.body)
    console.log(req.body)
})

app.listen(5000, () => {
    console.log('Server is running on port 5k')
})



let express = require('express')
let app = express();
let logger = require('morgan')
let cookieParser = require('cookie-parser')

app.use('/admin', (req,res,next) => {
    next("Undefined")
})

app.use(logger('dev'))
app.use(cookieParser())
app.use((req,res,next) => {
    res.cookie("username" , "Chinna")
    next()
})
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(express.static(__dirname + '/public'))

// Routers

app.get('/form', (req,res) => {
    res.sendFile(__dirname + '/form.html')
})

app.post('/form', (req,res) => {
    res.send(req.body)
    console.log(req.body)
})

app.get('/users/:username', (req,res) => {
    let userName = req.params.username
    res.send(userName)
})

app.use((err,req,res,next) => {
    res.send(err)
})

app.listen(5000, () => {
    console.log('Server is running on port 5k')
})