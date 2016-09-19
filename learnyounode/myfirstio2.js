// This is the more sofisticated way to do myfirstio.js
// OR THE CORRECT WAY

var fs = require('fs');
console.log(fs.readFileSync(process.argv[2]).toString().split('\n').length - 1);