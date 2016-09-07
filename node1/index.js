var express = require('express');
var app = express();

var path = require('path');

app.get('/', function (req, res) {
  res.type('html');
  res.sendFile(path.join(__dirname + '/article.html'));
});

app.get('/style.css', function(req,res) {
	res.type('css');
  res.sendFile(path.join(__dirname + '/style.css'));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
