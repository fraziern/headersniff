'use strict';

var express = require('express');

var app = express();

// return:
//   ip address
//   language
//   software

app.get('/', function (req, res) {
  var re = /\(([a-z\;_\s\d]+)\)/i;
  var str = req.get('User-Agent');
  var m = re.exec(str) || ['None'];

  var header = {
    ipaddress: req.ip,
    language: req.get('Accept-Language'),
    software: m[0]
  };

  res.json(header);
});

var port = process.env.PORT || 8080;
app.listen(port,  function () {
  console.log('Node.js listening on port ' + port + '...');
});
