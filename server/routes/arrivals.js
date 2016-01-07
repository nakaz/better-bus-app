var router = require('express').Router();
var bodyParse = require('body-parser');
var http = require('http');

var BUS_KEY = process.env.DABUS_APP_KEY;

var xml2js = require('xml2js');
var parser = new xml2js.Parser();

var BASE_URL = 'http://api.thebus.org/arrivals/?key=';
var ID_PARAM = '&stop=';

var URI = BASE_URL + BUS_KEY + ID_PARAM;

router.get('/stop/:id', function (req, res){
  stopId = req.params.id;
  var data = '';
  http.get(URI + stopId, function (resp){
    resp.on('data', function (chunk){
      data += chunk;
    });
    resp.on('end', function (){
      parser.parseString(data, function (err, result){
        res.send(JSON.stringify(result));
      });
      console.log('au pau');
    });
  }).on('error', function (err){
    console.log(e.message);
  });
});

module.exports = router;