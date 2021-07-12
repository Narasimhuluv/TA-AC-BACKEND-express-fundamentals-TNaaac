let express = require('express')
let app = express();
let logger = require('morgan')
let cookieParser = require('cookie-parser')


app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended : false}));
app.use(express.static(__dirname + "/public"))
app.use(cookieParser())

app.use('/about',(req,res,next) => {
    let username = req.cookies.username;
    res.cookie("userName" , "Suraj")
    console.log(username)
    next()
})

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html');
})

app.listen(5000, () => {
    console.log("Server is running on port 5k");
})