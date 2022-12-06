//this will configure and run the server.
const express = require('express')
const app = express()
const port = 4200

//app.param(path, callback)
app.get('/', (req, res) => {
  res.send('Welcome to Bob Burger Website!!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  //console.log('localhost:4200')
})

app.post('/i', (req,res) => {
    //Naam=req.params.name
    res.send('Hello Beta :z')
})

