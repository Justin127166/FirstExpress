const express = require('express')
const app = express()
const Port = 3000
app.use(express.json())


app.get('/hello', function(req, res){
    res.send('this is working')
})
app.get('/', function(req, res){
    res.send('home page')
})


app.post('/', function(req, res){
    res.send('post route is working')

})


app.listen(3000, function(){
    console.log(`listening on port: ${Port}`)
})