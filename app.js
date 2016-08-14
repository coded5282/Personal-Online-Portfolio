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

// var url = process.env.DATABASEURL || "mongodb://localhost/portfolio"; 
// mongoose.connect(url); // environment variable for database url 

// mongoose.connect("mongodb://localhost/yelp_camp"); 
// mongoose.connect("mongodb://ed:mongoed123@ds023634.mlab.com:23634/yelpcamp"); // connecting to mongolabs
mongoose.connect("mongodb://edchen:mongochen123@ds153715.mlab.com:53715/portfolio");  


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

// Project.create({
//     name: "Personal Online Portfolio -- link",
//     description: "Learn more about me here!",
//     technologies: "MongoDB, Mongoose.js, Express.js, Angular.js, Node.js",
//     github: "https://github.com/coded5282/Personal-Online-Portfolio",
//     image: "test_img"
// });

// Project.create({
//     name: "Camp Center -- powerful-atoll-57963.herokuapp.com",
//     description: "Explore all the possibilities of camping with this website I built!",
//     technologies: "MongoDB, Mongoose.js, Express.js, Node.js",
//     github: "https://github.com/coded5282/Camp-Center",
//     image: "test_img"
// });

// Project.create({
//     name: "Basic Social Network",
//     description: "Simple application I built to dive deeper into the MEAN stack",
//     technologies: "MongoDB, Mongoose.js, Express.js, Angular.js, Node.js",
//     github: "https://github.com/coded5282/Social-Network",
//     image: "test_img"
// });

// Project.create({
//     name: "Personal Blog",
//     description: "Personal blog I created to demonstrate my understanding of RESTful routing!",
//     technologies: "Node.js, Express.js, Mongoose.js, MongoDB, SemanticUI",
//     github: "https://github.com/coded5282/REST-Blog",
//     image: "test_img"
// });

// Project.create({
//     name: "Tapsing! -- https://coded5282.github.io/Tapsing/",
//     description: "Become a DJ and start mashing keys!",
//     technologies: "Javascript, Howler.js, Paper.js",
//     github: "https://github.com/coded5282/Tapsing",
//     image: "test_img"
// });

// Project.create({
//     name: "What To Do Today? -- https://coded5282.github.io/Todo-App/",
//     description: "Never forget important tasks with this app I made while trying to improve my CSS skills",
//     technologies: "Javascript, HTML, CSS",
//     github: "https://github.com/coded5282/Todo-App",
//     image: "test_img"
// });

// Project.create({
//     name: "RGB Guessing Game -- https://coded5282.github.io/RGB-Guessing-Game/",
//     description: "Test your RGB colors knowledge with this game I made during the summer!",
//     technologies: "Javascript, HTML, CSS",
//     github: "https://github.com/coded5282/RGB-Guessing-Game",
//     image: "test_img"
// });

// Project.create({
//     name: "Text Analyzer",
//     description: "A semester-long project I completed that provides analyses and encryption/decryption options on text files",
//     technologies: "C++, Eclipse",
//     github: "https://github.com/coded5282/Text-Analysis-Project",
//     image: "test_img"
// });

// Project.create({
//     name: "Go Fish Card Game",
//     description: "A game I made for an introductory programming class",
//     technologies: "C++, Eclipse",
//     github: "https://github.com/coded5282/Go-Fish-Game",
//     image: "test_img"
// });

// Project.create({
//     name: "Weather Forecast Application -- http://coded5282.github.io/Weather-Forecast-App/",
//     description: "Simple Single-Page-Application (SPA) I built while self-learning AngularJS",
//     technologies: "HTML, CSS, AngularJS, OpenWeatherMap API",
//     github: "https://github.com/coded5282/Weather-Forecast-App",
//     image: "test_img"
// });




















module.exports = app;
