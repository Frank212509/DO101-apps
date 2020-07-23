var express = require('express');
app = express();

//app.get('/', function (req, res) {
//  res.send('Hello World!\n');
//});

var response;

app.get('/', function (req, res) {
  response = 'This is version 2 of the app.' + '\n';

  //send the response to the client
  res.send(response);

//app.get('/frank', function (req, res) {
//  res.send('Hello Frank! esto es una prueba\n');
//});

//pp.get('/torres', function (req, res) {
//  res.send('Hello Torres! esto es una prueba\n');
//});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
