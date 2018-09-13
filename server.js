var express = require("express");
var mongoose = require("mongoose");
var expressHandlebars = require("express-handlebars");
var bodyParser = require("body-parser");

// Set up port 
var PORT = process.env.PORT || 3000;

//Start our Express App
var app = express();

//Set up an Express Router
var router = express.Router();

// Designate our public folder as static directory
app.use(express.static(__dirname + "/public"));

// Connect Handlebars to our Express app
app.engine("handlebars", expressHandlebars({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Use bodyParser in our app
app.use(bodyParser.urlencoded({
    extended: false
}));

var db = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// Connect mongoose to our database
mongoose.connect(db, function(error) {
    if(error) {
        console.log(error);
    }
    else {
        console.log("mongoose connection successfull");
    }
});

// Listen on Port
app.listen(PORT, function() {
    console.log("Listening on port:" + PORT);
});


