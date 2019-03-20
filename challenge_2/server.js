

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(express.static('./client'));
app.use(bodyParser.urlencoded({extended: false}));

app.post('/', function(req, res) {
  // turn JSON into CSV
  var formInput = req.body.inputText;
  var reportData = formInput.slice(0);
  var parsedData = JSON.parse(reportData)
  console.log('my request body data: ', typeof(parsedData));
  // parsedData is now an object

  // res.end probably
  res.end();
})

app.listen(port, () => console.log('express server listening on ', port));

