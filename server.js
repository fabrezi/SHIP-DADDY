//this will configure and run the server.
const express = require('express') //import the package
const app = express() //instance of the server
//app.use(express.json()) //body-parser middleware for req.body parameters
const path = require('path') //
const port = 4200

//app.param(path, callback)
app.get('/', (req, res) => {

  /*
  * This is the method to run and 
  * open a html file. res.sendfile is a function (Express only)
  * which allows to transfer file at the given path.
  * the __dirname is the directory name of the current module.
  * 
  */
  res.sendFile(path.join(__dirname,  'src/html_links/daddy.html'))
})

//to make a text as hyperlink, use either www or http
//this will make it into URL. Custom URL can not be set
//in Nodes.

app.listen(port, () => {
  console.log(`THE LINK :=> http://localhost:${port}`)
})



