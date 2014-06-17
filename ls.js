var fs = require('fs'), path = require('path');
var buffer = fs.readdir(process.argv[2], function(err, list) {
  if (err) throw err;
 // console.log(process.argv[3]);  
  list.forEach(function(file) {
    if (path.extname(file) == "." + process.argv[3])
	console.log(file);
  });
  
});
