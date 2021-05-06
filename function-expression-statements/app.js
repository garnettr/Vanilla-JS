/////////////////
// Expression - 
// a unit of code that results in a value - it doesn't have to save to a a variable 
// additional info on statements vs expressions > https://www.oreilly.com/library/view/javascript-the-good/9780596517748/apbs09.html#:~:text=A%20function%20statement%20is%20shorthand,variable%20containing%20a%20function%20value.
/////////////////



// Targeting the main element tha will render our elements
const mainDiv = document.querySelector("main") // returns the one main element in our html

// Selecting our Form inputs
const nameInput = document.querySelector('input[name="name"]') //selecting the input with 
const ageInput = document.querySelector('input[name="age"]') //selecting the input with 

// Selecting H1 Welcome header 
const welcomeh1 = document.querySelector('.js-welcomeHeader');

// Selecting H2 Sub header 
const subheaderh2 = document.querySelector('.js-subHeader');

// Selecting form submit button 
const updateButton = document.querySelector('#createitem');


intro();

// example of function statement
function intro() {
  welcomeh1.innerText = "Please fill out info below";
}

// example of function expression 
const greeting = () => subheaderh2.innerText = `Hi ${nameInput.value} glad  you could be here`




updateButton.addEventListener("click", greeting);