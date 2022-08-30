const express = require('express')
const app = express()
const port = 5000
app.use(express.json())

app.get('/pets', function(req, res){
    res.send(req.body)
})

// app.get('/pets/3', function(req, res){

// })

// app.patch('/pets/3', function(req, res){

// })

// app.get('/', function(req, res){
//     res.send('this is working')
// })


app.listen(port, function(){
    console.log(`listening on port: ${port}`)
})