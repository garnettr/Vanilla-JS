/////////////////
// Expression - 
// a unit of code that results in a value - it doesn't have to save to a a variable 
// additional info on statements vs expressions > https://www.oreilly.com/library/view/javascript-the-good/9780596517748/apbs09.html#:~:text=A%20function%20statement%20is%20shorthand,variable%20containing%20a%20function%20value.
/////////////////


'use strict'


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

// Selection Time P tag
const timeDate = document.querySelector('.js-time');

// Generates Date Object 
const date = new Date();

// Date formatting options
let options = { 
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};

// formatted Date and Time using above options
const timeStamp = new Intl.DateTimeFormat('en-US', options).format(date);


// the function Intro is hoisted above the call 
intro();

// example of function statement
function intro() {
  timeDate.innerText = timeStamp;
  welcomeh1.innerText = "Please enter your info below";
}



// example of function expression 
const greeting = () => subheaderh2.innerText = `Hi ${nameInput.value} glad  you could be here`

// Another function expression 
// first class function - passing a function as a parameter
// also knows and functional programming
const goodDays = (a) => {
  a()
}
goodDays(function() {
  console.log('God and Motorcycles');
}); 




updateButton.addEventListener("click", greeting);