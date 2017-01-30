'use strict';

var express = require('./config/express');
var http = require('http');

var app = express();
app.set('port', (process.env.PORT || 3000));

var server = http.createServer(app);
server.listen(app.get('port'), function () {
   console.log("Executando na porta " + app.get('port'));
});

module.exports = app;
