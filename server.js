'use strict';

//Todo update dependencies
//dependencies
const express = require('express'),
    path = require('path'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    Promise = require("bluebird"),
    mongoose = require("mongoose"),
    Routes = require('./routes/routes.js'),
    app = express();


// const request = require("request");

//===== SETUP Mongoose ======

// Mongoose Promise, overiding the native promise library
mongoose.Promise = Promise;

// Creating the mongoose connection
// mongoose.connect("mongodb://localhost/scraperlocal");
mongoose.connect("mongodb://heroku_lq8nlcqv:c0313cad57spinl2rak23krssg@ds133398.mlab.com:33398/heroku_lq8nlcqv");
const db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) {
    console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
    console.log("Mongoose connection successful.");
});



app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


//Establish route
app.use('/', Routes);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

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



// Listen on port 3000
app.listen(process.env.PORT || 3000, () => {
    console.log("App running on port 3000!");
});


module.exports = app;
