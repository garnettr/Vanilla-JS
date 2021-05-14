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

let Ian = new Employee("Ian Garnett", "Ui/Ux Dev", "Allianz" );

let sayHi = () => {
  console.log("hi " + this.name);
}

Ian.hi = sayHi;


console.log(Ian.hi())
 