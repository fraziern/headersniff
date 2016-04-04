'use strict';

var express = require('express');

var app = express();

// return:
//   ip address
//   language
//   software

function getSoftware(str) {
  var re = /\(([a-z\;_\s\d]+)\)/i;
  var m = re.exec(str) || ['None','None'];
  return m[1];
}

function getIP(str) {
  var re = /\d{1,3}.\d{1,3}.\d{1,3}.\d{1,3}/;
  var m = re.exec(str) || ['None'];
  return m[0];
}

app.get('/', function (req, res) {

  var header = {
    ipaddress: getIP(req.ip),
    language: req.get('Accept-Language'),
    software: getSoftware(req.get('User-Agent'))
  };

  res.json(header);
});

var port = process.env.PORT || 8080;
app.listen(port,  function () {
  console.log('Node.js listening on port ' + port + '...');
});
