// ./server/base.js
var express = require('express');
var http = require('http');
var https = require('https');
var fs = require('fs');
var bodyParser = require('body-parser');
var bunyan = require('bunyan');
var logger = require('express-bunyan-logger');
var project = JSON.parse(fs.readFileSync(__dirname + '/../project.json', 'utf-8'));

var app = module.exports = express();
app.set('port', project.env.port);

var logConfig = {
  name        : 'logger',
  src         : true,
  serializers : bunyan.stdSerializers,
  streams     : [
    {
      level  : 'error',
      stream : process.stdout
    },
    {
      level : 'info',
      path  : __dirname + '/access.log'
    }
  ]
};

app.use(logger(logConfig));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (request, response, next) {
  response.sendFile('index.html', {
    root: __dirname + '/../client'
  });
});

app.use(express.static(__dirname + '/../client'));

app.listen(app.get('post'));
console.log('Serving http://localhost:' + app.get('port'));
