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


  


 