var http = require('http');
var bl = require('bl');

http.get(process.argv[2], function(res) {
  res.on('error', console.error);
  res.pipe(bl(function (err, data) {
      if (err) 
	return console.error(err);
      data = data.toString();
      console.log(data.length);
      console.log(data);
    })
  );
});
