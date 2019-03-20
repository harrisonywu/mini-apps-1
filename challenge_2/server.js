

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;


// what does the below line do? I'm not sure
// if this is set up correctly, it does exactly what live-server does
app.use(express.static('./client'));
app.use(bodyParser.urlencoded({extended: false}));


app.post('/', function(req,res) {
  // turn JSON into CSV
  console.log('my request body data: ', req.body.inputText)
  // request body is undefined
  // DON'T RES.REDIRECT
  // definitely use preventDefault
  // res.end probably
  res.end();
})



app.listen(port, () => console.log('hello world from app.listen'));

