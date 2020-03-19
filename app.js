var express = require('express');
var app = express();
var bodyParser = require('body-parser');
//Rutas
var routes = require('./routes/routes');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
///Prefijo
app.use('/api/', routes);

module.exports = app;