var namedFunc = require('./moduleXamp04.js');
namedFunc.fiz();
// Another way to do it is to pass the function 
// name in a single line like this.
/*
var namedFunc = require('./moduleXamp04.js').fiz;
namedFunc();
// This way we assign the function directly to the variable
// instead of the variable to be an object and need to access
// the function using dot sintaxys.
*/