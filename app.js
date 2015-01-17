// Strict: apply strict mode to entire javascript file.
'use strict';

// Dependencies: express, config, glob, mongoose.
var express = require('express');
var config = require('./config/config');
var glob = require('glob');
var mongoose = require('mongoose');

// Database: Set up mongoose database.
mongoose.connect(config.db);
var db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + config.db);
});

// Database: Create models for database storage.
var models = glob.sync(config.root + '/app/models/*.js');
models.forEach(function (model) {
  require(model);
});

// Express: initialize and start app.
var app = express();
require('./config/express')(app, config);
app.listen(config.port);

