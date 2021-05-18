/////////////////
// Objects  - 
// THIS > https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
// Objects > https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
// Constructor > https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
// Arrow Function Expressions > https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

'use strict'


var Manager = {
  name: "Sam",
  title: "Ui/Ux Dev Lead",
  description: "Lorem Ipsum",
  company: "Allianz",
  sayHi() {
    return console.log("hi " + this.name);
  }
}

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
  


 