var router = require('express').Router();

var URI = 'http://api.thebus.org/route/?key=';
var API_KEY = '';
var routeNum = '&route=';
var stopNum = '&headsign=';

var ROUTE_ID = '';
var STOP_ID = '';

router.route('/route/:id')
  .get(function (req, res){

  });
module.exports = router;
