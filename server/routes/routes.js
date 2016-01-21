var router = require('express').Router();
var http = require('http');

var BUS_KEY = process.env.DABUS_APP_KEY;

var xml2js = require('xml2js');
var parser = new xml2js.Parser();

var BASE_URL = 'http://api.thebus.org/route/?key=';
var BUS_NUM_PARAM = '&route=';
var BUS_NAME_PARAM = '&headsign=';

var NUM_URI = BASE_URL + BUS_KEY + BUS_NUM_PARAM;
var NAME_URI = BASE_URL + BUS_KEY + BUS_NAME_PARAM;

router.get('/num/:id', function (req, res){
  routeId = req.params.id;
  var data = '';
  http.get(NUM_URI + routeId, function (resp){
    resp.on('data', function (chunk){
      data += chunk;
    });
    resp.on('end', function (){
      parser.parseString(data, function (err, result){
        res.send(JSON.stringify(result));
      });
    });
  }).on('error', function (err){
    console.log(e.message);
  });
});

router.get('/name/:id', function (req, res){
  stopId = req.params.id;
  var data = '';
  http.get(NAME_URI + stopId, function (resp){
    resp.on('data', function (chunk){
      data += chunk;
    });
    resp.on('end', function (){
      parser.parseString(data, function (err, result){
        res.send(JSON.stringify(result));
      });
    });
  }).on('error', function (err){
    console.log(e.message);
  });
});

module.exports = router;