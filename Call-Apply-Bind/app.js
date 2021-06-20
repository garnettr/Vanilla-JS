/////////////////

'use strict'


// object literal
// method getFullName added onto the object
var person = {  
  firstName: 'John',
  lastName: 'Doe',
  getFullName: function() {
    var fullname = this.firstName + " " + this.lastName;
    return fullname;
  }
}

var logName = function(lang1, lang2) {
  console.log('logged: ' + this.getFullName());
  console.log('Arguments: ' + lang1 + " " + lang2);
  console.log('----------------');
}

/* binding the 'person' object to LogName
This will allow the 'this.getFullName()' to run
Bind creates a copy of LogName
*/
var logPersonName = logName.bind(person)
logPersonName('en');

// .call lets you decide what the .this keyword should point to
// you can also pass parameters 
logName.call(person, 'en', 'es');
/* Apply does the same things as call, but take an
array for the parameters
*/
logName.apply(person, ['en', 'es']);


// function borrowing 
var person2 = {
  firstName: 'Jane',
  lastName: 'Doe',
}
console.log(person.getFullName.apply(person2));


// function curring
function multiply(a, b) {
  return a*b
}
// in this case, this permenatly sets 2 to this first parameter
var multiplyByTwo = multiply.bind(this, 2);
// 6 will be 'b' in the second parameter
console.log(multiplyByTwo(6));



