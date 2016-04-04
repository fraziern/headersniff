'use strict';

var express = require('express');
// var Stamper = require('./stamper');

var app = express();
// var stamper = new Stamper();

// app.use(express.static(__dirname + '/public'));

// app.get('/', function(req, res, next) {
//   next();
// });

app.get('/', function (req, res) {
  res.send('Hi.');
});


var port = process.env.PORT || 8080;
app.listen(port,  function () {
  console.log('Node.js listening on port ' + port + '...');
});
