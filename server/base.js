// ./server/base.js
var express = require('express');
var http = require('http');
var fs = require('fs');
var bodyParser = require('body-parser');
var bunyan = require('bunyan');
var logger = require('express-bunyan-logger');
var browserify = require('browserify-middleware');
var dualserver = require('./dualserver');

var project = JSON.parse(fs.readFileSync(__dirname + '/../project.json', 'utf-8'));

var app = module.exports = express();

app.set('port', project.env.port);

var dual = dualserver(app);
app.set('dual', dual);

var io = require('engine.io')();
app.set('io', io);

io.on('connection', function (socket) {
  return dual.engineio(socket);
});

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

// Serve Assets
app.use('/assets/package.json', express.static(__dirname + '/../package.json'));
app.use('/assets', express.static(__dirname + '/../client'));

// Serve dualapi
app.get('/assets/app/dualapi.js', browserify(__dirname + '/../client/app/served.js'));

// Serve Mock API
require('./mockRoutes')(app);

// Serve App
app.get('/:singlePage?/:id?', function (request, response, next) {
  response.sendFile('index.html', {
    root: __dirname + '/../client'
  });
});

var server = http.createServer(app);
app.get('io').attach(server);

server.listen(app.get('port'), function() {
  console.log('Serving http://localhost:' + server.address().port);
});

// app.listen(app.get('port'));
// console.log('Serving http://localhost:' + app.get('port'));
