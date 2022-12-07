//this will configure and run the server.
const express = require('express') //import the package
const app = express() //instance of the server
//app.use(express.json()) //body-parser middleware for req.body parameters
const path = require('path') //
const port = 4200

//app.param(path, callback)
app.get('/', (req, res) => {
  //res.send('Welcome to Ship-Daddy!!')
  /*
  * This line has imp parts. This is the method to run and 
  * open a html file. res.sendfile is a function (Express only)
  * which allows to transfer file at the given path.
  * the __dirname is the directory name of the current module.
  * 
  */
  res.sendFile(path.join(__dirname,  'src/daddy.html'))
})

app.listen(port, () => {
  console.log(`App is run on port: ${port}`)
  //console.log('localhost:4200')
})

// app.post('/posty', (req,res) => {
//     var user = req.body.user;
//     res.send(`Hello Beta ${user}`)
// })

