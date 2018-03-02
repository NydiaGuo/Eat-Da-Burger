var orm = require("../config/orm.js");

var burger = {
  
	all:function(cb) {
		orm.all("burger", function(res) {
      console.log("burger");
			cb(res);
		});
	}
  //, insert:function(cols, vals, cb) {
  //   orm.insert("burger", cols, vals, function(res) {
  //     cb(res);
  //   });
  // },
  // update:function(valsOfObj, condition, cb) {
  //   orm.update("burger", valsOfObj, condition, function(res) {
  //     cb(res);
  //   });
  // }
};


module.exports = burger;