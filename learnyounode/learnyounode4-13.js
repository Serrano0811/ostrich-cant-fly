var fs = require('fs');

fs.readFile(process.argv[2], (err, lines) => {
	if(err) throw err;
	console.log(lines.toString().split('\n').length - 1);
});