/////////////////
// Objects  - 
// THIS > https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
// Objects > https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
// Constructor > https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
// Arrow Function Expressions > https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

'use strict'

//Object Methods
var c = {
  name: "the C object",
  // start method
  log: function() {
    // define this to the objects lexical environment using this
    var self = this;
    self.name = 'Updated C Object';
    // logging self to see name output
    console.log(self);
    // defining a expression, with pram to update .name 
    var setName = function(newname) {
      self.name = newname;
    }
    setName('update it again - the C object');
    // logging to see the updated .name value
    console.log(self);
  }
}
// initiating C expression 
c.log();

// creating object literal with method
var Manager = {
  name: "Sam",
  title: "Ui/Ux Dev Lead",
  description: "Lorem Ipsum",
  company: "Allianz",
  sayHi() {
    return console.log("hi " + this.name);
  }
}
// initiating sayHi method
Manager.sayHi();


function Employee(name, role, company){
  this.name = name;
  this.role = role;
  this.company = company;
  this.getFull = function() {
    return "Hi " + this.name + " you are a great" + this.role;
  }
}

// Save Object to Ian
var Ian = new Employee("Ian Garnett", "Ui/Ux Dev", "Allianz" );

// Get the full name of Employee
console.log(Ian.getFull());


// intro to event handlers using this 
var randomImg = document.querySelector("IMG");


// Setting up to return width of an image
var EventHandler = function() {
	console.log(this.width);
}
// OnClick Event to return width
randomImg.onclick = EventHandler;



// ===================
/* Objects - Assigning with Dots */
// An Array is an special kind of object

var person = []

person.name = "Mrs. White";

var who = person.name;

person[0] = "I was not in the Billiards room";

person["plea"] = "I would never";

console.log(person);


// -------------------------------

var box = {};

box['material'] = "cardBoard";
box[0] = 'Meow';
box['^&*'] = "Testing 123";

var test = box['^&*'];


console.log(test);



// Looping through an Object to access Values 

var triangle = {a: 1, b: 2, c: 3};
// start the loop of key's and values
for (const property in triangle) {
  console.log(`${property}: ${triangle[property]}`);
}
// start the loop of only values
for (const property in triangle) {
  console.log(`${triangle[property]}`);
}

 