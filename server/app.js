// import files and packages up here
var express = require("express");
var data = require("./data.json");
var morgan = require("morgan");
var path = require("path");

// create your express server below
var app = express();
app.use(express.static(path.join(__dirname, '../public')));
morgan('dev');

app.get("/data", function(req, res){
    res.json(data);
})

// add your routes and middleware
 

// finally export the express application
module.exports = app;

