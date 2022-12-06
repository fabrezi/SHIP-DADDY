//this will configure and run the server.
const express = require('express')
const app = express() //instance of the server
const port = 4200

//app.param(path, callback)
app.get('/', (req, res) => {
  res.send('Welcome to Bob Burger Website!!')
})


//Open the UI-file

// app.get(path,callback => {
//     res.send(path.join)
// }) 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  //console.log('localhost:4200')
})

app.post('/i', (req,res) => {
    var user = req.body.user;
    //var psswd = req.body.psswd;
    console.log( `${user}`);
    res.send('Hello Beta :z')
})

