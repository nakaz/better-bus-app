var express = require('express');
var app = express();
var router = express.Router();
var fs = require('fs');
var config = require('../config/config.json');

var xml2js = require('xml2js');

var bus_key = process.env.DABUS_APP_KEY;

var PORT = config.port;

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

var parser = new xml2js.Parser();

// Local file test for xml2js process need to test on data request results
fs.readFile(__dirname + '/../playgroundfiles/arrivals.xml', function (err, data){
  parser.parseString(data, function (err, result){
    console.dir(JSON.stringify(result));
    fs.writeFile(__dirname + '/../playgroundfiles/arrivals.json', JSON.stringify(result), function (err) {
      if (err) throw err;
      console.log('JSON file written!');
    });
  });
});

var server = app.listen(PORT, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Da Bus server stay listening at http://%s:%s', host, port);
});
