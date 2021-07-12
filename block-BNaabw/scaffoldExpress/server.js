// let express = require('express')
// let app = express()
// let logger = require('morgan')
// let cookieParser = require('cookie-parser')

// // middleWares
// app.use(logger('dev'))
// app.use((req,res,next) => {
//     res.cookie("username", "Narasimha")
//     next()
// })
// app.use(express.json())
// app.use(express.urlencoded({extended: false}))
// app.use(express.static(__dirname + '/public'))

// // routers
// app.get('/', (req,res) => {
//     res.send(`<h2>home page</h2>`)
// })
// app.get('/about', (req,res) => {
//     res.send(`<h2>About page</h2>`)
// })

// app.listen(4000, () => {
//     console.log("Server is running on port 4k")
// })



let express = require('express')
let app = express()
let logger = require('morgan')
let cookieParser = require('cookie-parser')

// middleWares
app.use(logger('dev'))
app.use((req,res,next) => {
    res.cookie("username", "Narasimha")
    next()
})
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static(__dirname + '/public'))

// routers
app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})
app.get('/project', (req,res) => {
    res.sendFile(__dirname + '/project.html')
})

app.listen(4000, () => {
    console.log("Server is running on port 4k")
})
