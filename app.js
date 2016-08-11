var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
// var flash = require("connect-flash");
var passport = require("passport");
var LocalStrategy = require("passport-local");
var methodOverride = require("method-override");


var appRoutes = require('./routes/app');

var Project = require("./models/project"); 
var projectRoutes = require("./routes/projects"); 

var app = express();

var url = process.env.DATABASEURL || "mongodb://localhost/portfolio"; 
// mongoose.connect("mongodb://localhost/yelp_camp"); 
mongoose.connect(url); // environment variable for database url 
// mongoose.connect("mongodb://ed:mongoed123@ds023634.mlab.com:23634/yelpcamp"); // connecting to mongolabs 

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride("_method")); 
// app.use(flash()); 

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE');
    next();
});

app.use('/', appRoutes);
app.use("/projects", projectRoutes); 

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.json({
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: {}
    });
});

Project.create({
    name: "test_name",
    description: "test_desc",
    technologies: "test_tech",
    github: "test_git",
    image: "test_img"
})


module.exports = app;
