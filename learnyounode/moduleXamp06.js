// PATTERN 5: EXPORT A NAMED OBJECT
var Baz = function () {};

Baz.prototype.log = function () {
	console.log('baz!');
};

exports.Baz = new Baz();