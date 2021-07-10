let express = require('express');
let app = express();

app.use((req,res,next) => {
    console.log(req.method,req.url)
    next()
})

app.get('/', (req,res) => {
    res.send(`<h1>Welcome to middlewear express</h1>`)
})

app.listen(4000, () => {
    console.log('Server is running on port 4000')
})