let express = require('express')
let app = express();
let logger = require('morgan')

app.use(logger('combined'))

app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(express.static(__dirname + '/public'))

app.get('/',(req,res)=> {
    res.sendFile(__dirname + '/index.html')
})

app.get('/new', (req,res) => {
    res.sendFile(__dirname + '/new.html')
})

app.get('/users', (req,res)=> {
    res.json(req.query)
    res.end()
})

app.post('/new', (req,res) => {
    res.end('Form has been submitted')
})

app.listen(5000, () => {
    console.log('Server is running on port 5000')
})