var router = require('express').Router();
var bodyParse = require('body-parser');

var URI = 'http://api.thebus.org/arrivals/?key=';
var API_KEY = '';
var stopNum = '&stop=';
var STOP_ID = '';

router.get('/', function (req, res){
  console.log('pinging arrivals');
  res.send('you pinged arrivals!');
});

router.get('/stop/:id', function (req, res){
  console.log('stopppp');
  var id = req.params.id;
  res.send('you pinged the stop numbered ' + id);
});

module.exports = router;
