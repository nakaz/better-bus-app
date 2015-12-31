var express = require('express');
var app = express();
var router = express.Router();
var config = require('../config/config.json');

var bus_key = process.env.DABUS_APP_KEY;

var PORT = config.port;

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(PORT, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Da Bus server stay listening at http://%s:%s', host, port);
});