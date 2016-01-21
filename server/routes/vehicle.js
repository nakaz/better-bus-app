var router = require('express').Router();
var http = require('http');

var BUS_KEY = process.env.DABUS_APP_KEY;

var xml2js = require('xml2js');
var parser = new xml2js.Parser();

var BASE_URL = 'http://api.thebus.org/vehicle/?key=';
var ID_PARAM = '&num=';

var URI = BASE_URL + BUS_KEY + ID_PARAM;

router.get('/:id', function (req, res){
  vehicleId = req.params.id;
  var data = '';
  http.get(URI + vehicleId, function (resp){
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