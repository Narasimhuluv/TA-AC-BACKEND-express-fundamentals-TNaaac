let express = require('express')
let app = express();
let cookieParser = require('cookie-parser')
let logger = require('morgan')

// middleWares
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static(__dirname + '/public'))

// Routers

app.put('/', (req,res) => {
    res.json(req.body)
})
app.get('/static', (req,res) => {
    res.sendFile(__dirname + "/index.html")
})

app.listen(5000, () =>  {
    console.log("Server is running on port 6k")
})