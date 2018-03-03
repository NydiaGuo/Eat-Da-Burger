var express = require("express");
var routes = express.Router();
var burger = require("../models/burger.js");

//----------------create routes--------------------
//get the requires and responses from the web server 
routes.get("/", function(req, res) {
	//render all burgers to DOM
	burger.all(function(data) {
		var hdsObject = {
			burgers: data
		};
		res.render("index", hdsObject);
	});
});

//create a new burger
routes.post("/api/burgers", function(req, res) {
	burger.create([
		"burger_name", "devoured"
		], 
		[
		req.body.burger_name, req.body.devoured
		], 
		function(result){
			res.json({ id: result.insertId });
		});
});

//update the burger
routes.put("/api/burgers/:id", function(req, res) {
	var condition = "id = " + req.params.id;

	burger.update(req.body, condition, function(result) {
		if (result.changeRows == 0) {
			return res.status(404).end();
		} else {
			res.status(200).end();
		}
	});
});

//sending this to server
module.exports = routes;