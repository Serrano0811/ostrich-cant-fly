function myLocation() {
	var city = 'Mexicali';

	return {
		get: function() {console.log(city);},
		set: function(newCity) {city = newCity;}
	}
}

var myPlace = myLocation();
myPlace.get();
myPlace.set('Illinois');
myPlace.get();