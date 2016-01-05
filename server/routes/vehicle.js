var router = require('express').Router();

var URI= 'http://api.thebus.org/vehicle/?key=';
var API_KEY = '';
var vehicleNum = '&num=';
var VEHICLE_ID = '';

router.route('/vehicle/:id')
  .get(function (req, res){

  });
module.exports = router;
