/*
| For testing porpuse.
| I'm trying to understand the use of prototype.
| This script is not part of the proyect and can be deleted safely.
*/

var element = document.querySelector("#greeting");
element.innerText = "Hello, world!";

var vegetable = function() {
  this.type = "Veggie";
};

// This will add a print() function as a property to vegetable object
vegetable.prototype.print = function() {
  console.log(this.type + " " + "is good for you");
};

// This will instantiated vegetable and assigned to the variable carrot.
var carrot = new vegetable();
carrot.print(); // Now carrot have access to all vegetable properties.

vegetable.prototype.color = 'No value assigned yet';
console.log(carrot.color);

// Changing the value of the property vegetable.color for the variable carrot.
carrot.color = 'orange';
console.log('carrots are: ' + carrot.color);