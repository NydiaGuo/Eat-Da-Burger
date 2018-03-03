var orm = require("../config/orm.js");

var burger = {
  
	all:function(cb) {
		orm.all("burger", function(res) {
			cb(res);
		});
	}, 
  create:function(cols, vals, cb) {
    orm.insert("burger", cols, vals, function(res) {
      cb(res);
    });
  },
  update:function(valsOfObj, condition, cb) {
    orm.update("burger", valsOfObj, condition, function(res) {
      cb(res);
    });
  }
};

//sending this to burger controller
module.exports = burger;