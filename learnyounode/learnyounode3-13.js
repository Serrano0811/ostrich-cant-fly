var fs = require('fs');
// Getting the buffer n converting it to string.
var lines = fs.readFileSync(process.argv[2]).toString().split('\n');
var counter = -1;
lines.forEach(c =>{
	//console.log(c);
	counter++;
});
console.log(counter);