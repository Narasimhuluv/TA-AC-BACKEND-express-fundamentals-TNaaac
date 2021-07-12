let express = require('express')
let app = express();
let logger = require('morgan')

app.use(logger('dev'))

app.use('/admin',(req, res, next) => {
    next("Unauthorized");
  });

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(express.static(__dirname + '/public'))


// routers
app.get('/', (req,res)=> {
    res.sendFile(__dirname + '/index.html')
})

app.get('/about', (req,res)=> {
    res.send('About page')
})

// error middlwares

app.use((err,req,res,next)=> {
    res.send(err)
})

app.listen(7000, () => {
    console.log('SErver is running on port 7k')
})

