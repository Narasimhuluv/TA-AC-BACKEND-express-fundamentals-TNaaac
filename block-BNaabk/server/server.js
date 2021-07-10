let express = require('express')
let app = express()

app.get('/', (req,res)=> {
    res.send(`<h1>Welcome</h1>`)
})

app.listen(3000, () => {
    console.log("SErver is running on port 3000")
})