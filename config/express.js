'use strict';

var config = require('./config'),
  express = require('express'),
  morgan = require('morgan'),
  methodOverride = require('method-override'),
  bodyParser = require('body-parser'),
  url = require('url'),
  cookieParser = require('cookie-parser'),
  proxy = require('http-proxy-middleware'),
  compression = require('compression');



module.exports = function() {


  var server = require('http').createServer(require("express")).listen(4555)
    , io = require('socket.io').listen(server);

  io.sockets.on('connection', function (socket) {
      console.log("conectado");
  });

  io.sockets.on('debugger', function (requestBody) {
      io.emit('debugger', 'an event sent to all connected clients');
  });

  var app = express();

  /*if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  } else if (process.env.NODE_ENV === 'production') {

  }*/

  app.use(compression());
  app.use(bodyParser.urlencoded({
    extended: true
  }));

  app.use(bodyParser.json());
  app.use(methodOverride());
  app.use(cookieParser());

  app.set('views', './app/views');
  app.set('view engine', 'ejs');


  var restream = function(proxyReq, req, res, options) {
      if (req.body) {
          var bodyData = JSON.stringify(req.body);
          // incase if content-type is application/x-www-form-urlencoded -> we need to change to application/json
          proxyReq.setHeader('Content-Type','application/json');
          proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData));
          // stream the content
          proxyReq.write(bodyData);
      }
  }

  io.on('connection', function(socket){

  });

  app.set("socketIo", io);
  require('../app/routes/pages.api.routes.js')(app);
  require('../app/routes/manager.api.routes.js')(app, io);
  app.use(express.static('./public'));

  return app;
};
