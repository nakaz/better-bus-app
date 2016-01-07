var express = require('express');
var app = express();
var config = require('../config/config.json');

var route = require('./routes/index');

var PORT = config.port;

app.use('/arrivals', route.arrivals);
app.use('/vehicle', route.vehicle);
app.use('/routes', route.routes);

var server = app.listen(PORT, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Da Bus server stay listening at http://%s:%s', host, port);
});
