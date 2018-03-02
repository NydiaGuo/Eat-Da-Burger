var express = require("express");
var routes = express.Router();

var burger = require("../models/burger.js");
console.log("testing");

//----------------create routes--------------------
routes.get("/", function(req, res) {
	//render all burgers to DOM
	burger.all(function(data) {
		var hdsObject = {
			burgers:data
		};

		console.log(hbsObject);
		res.render("index", hdsObject);
	});
});

//create a new burger
// routes.post("/api/burgers", function(req, res) {

// 	burger.insert(["burger_name", "devoured"], 
// 		[req.body.burger_name, req.body.devoured], 
// 		function(reslut){
// 			res.json({ id: reslut.insertId });
// 		});
// });

/*routes.put("api/burgers/:id", function(req, res) {
	var condition = "id" + req.params.id;
	console.log("condition", condition);

	burger.update({
		condition:req.body.condition
	}, condition, function(reslut) {
		if (reslut.changeRows == 0) {
			return res.status(404).end();
		} else {
			res.status(200).end();
		}
	});
});*/

module.exports = routes;