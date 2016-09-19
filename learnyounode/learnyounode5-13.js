var fs = require('fs');

fs.readdir(process.argv[2], (err, fileList) => {
	if (err) throw err;
	fileList.forEach(i => {
		if (i.split('.')[1] === (process.argv[3]))
			console.log(i);
	});
});

/*	// Rocommended by NodeJS
	var fs = require('fs')
	var path = require('path')

	var folder = process.argv[2]
	var ext = '.' + process.argv[3]

	fs.readdir(folder, function (err, files) {
	if (err) return console.error(err)
		files.forEach(function(file) {
		   if (path.extname(file) === ext) {
		       console.log(file)
		   }
		})
	})
*/