
// =====================
/* Function Constructors:
A normal function that is used to construct objects.

--- 
The 'this' variable points a new empty object, and that object is returned from the function automatically
*/

function Person1(firstname, lastname) {

  console.log(this);
  this.firstname = firstname;
  this.lastname = lastname;
  console.log('this function is invoked');

}

Person1.prototype.getFullName = function() {
  return `${this.firstname} ${this.lastname}`; 
}


// =======================
// Prototypal Inheritance

// var john = new Person2('ian', 'garnett');
// console.log(john);

// var Quin = new Person('Quin', 'garnett');
// console.log(Quin.getFullName());



// =======
// Classes 

class Person3 {

  // create you constructor 
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
  // add your method
  greet() {
    return 'Hi ' + this.firstname;
  }
}

var ian = new Person3('John', 'Doe');


/* 
======================================
How to set the Prototype using Classes 

  -- "extends" is what sets the prototype

  -- "Super" calls the Constructor of the object that is your prototype

 */


class InformalPerson extends Person3 {
  
  constructor(firstname, lastname) {

    super(firstname, lastname);
  }

  greet() {
    return 'Yo' + this.firstname;
  }
}