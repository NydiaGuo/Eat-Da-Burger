var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-overrid");

var port = 8080;

var app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
