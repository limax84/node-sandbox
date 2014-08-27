/**
 * Set up the overall application settings
 * @type {exports}
 */

// Require modules
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// Require routes
var index = require('./routes/index');
var users = require('./routes/users');

// Instanciate the 'express' application
var app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Setup the favicon
app.use(favicon(path.join('.', 'public', 'images', 'favicon', 'favicon.ico')));

// Setup the "morgan" logger for every WS call
app.use(logger('dev'));

// Setup the JSON and encoded URL parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// Setup the cookie parser
app.use(cookieParser());

// Setup the LESS compiling middleware
app.use(require('less-middleware')(path.join(__dirname, 'public')));

// Setup the static folder
app.use(express.static(path.join(__dirname, 'public')));

// Setup and map the routes
app.use('/', index);
app.use('/users', users);

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;
