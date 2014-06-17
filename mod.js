var fs = require('fs');
var path = require('path');

module.exports = function(dirname, ext, callback) {
  var data = [];  
  var buffer = fs.readdir(dirname, function(err, list) {
    if (err) 
	return callback(err);
	
    list.forEach(function(file)  {
        if (path.extname(file) == "." + ext)
  	  data.push(file);
    });
    callback(null, data); 
  });
};
