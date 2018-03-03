var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");

var port = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger("dev"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(port);
console.log("the port is:"  + port );