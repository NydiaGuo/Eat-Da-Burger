var express = require("express");
var bodyParser = require("body-parser");
// var methodOverride = require("method-overrid");

var port = 8080;

var app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(port);
console.log("the port:"  + port );