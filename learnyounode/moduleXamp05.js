// PATTERN 4: EXPORT AN ANONYMOUS OBJECT
var Buz = function () {
	console.log('Quack!');
};

Buz.prototype.log = function () {
	console.log('buz!');
};

module.exports = new Buz();