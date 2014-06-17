var http = require('http');
var bl = require('bl');

http.get(process.argv[2], process.argv[3], process.argv[4], function(res) {
  res.pipe(bl(function(err, data) {
	if (err) 
          return console.error(err);
        data.toString();
        console.log(data);
    })
  );
});
