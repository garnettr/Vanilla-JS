/////////////////
// Objects  - 
// THIS > https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
// Objects > https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
// Constructor > https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
// Arrow Function Expressions > https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

'use strict'


const Manager = {
  name: "Sam",
  title: "Ui/Ux Dev Lead",
  description: "Lorem Ipsum",
  company: "Allianz",
  sayHi() {
    return console.log("hi " + this.name);
  }
}


function Employee(name, role, company){
  this.name = name,
  this.role = role,
  this.company = company;
  this.hi = function() {
    console.log("hi " + this.name);
  }
}

let Ian = new Employee("Ian Garnett", "Ui/Ux Dev", "Allianz" );


 