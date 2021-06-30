/////////////////

'use strict'

// sections & div
const profileContainer = document.querySelector('.profileInfo-container');
// image
let profileImage = document.querySelector('.profile-image');
// Form Inputs
const form = document.querySelector("form");
const inputFirstNme = document.querySelector('#fname');
const inputLastNme = document.querySelector('#lname');
// Hobbies 
const hobby1 = document.querySelector('.hobby1');
const hobby2 = document.querySelector('.hobby2');
const hobby3 = document.querySelector('.hobby3');
// Occupation:
const jobTitle = document.querySelector('.jobTitle');
// Pets info
const petName = document.querySelector('.petName');
// Colors
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
// Pick a Number 
const favNumber = document.querySelector('.numbers');




function Person() {
  this.firstName = inputFirstNme.value;
  this.lastName = inputLastNme.value;

  this.hobby1 = hobby1.value;
  this.hobby2 = hobby2.value;

  this.jobTitle = jobTitle.value;

  this.favColor1 = color1.value;

  this.favNumber = favNumber.value;

  this.petName = petName.value;

  this.firstInitial = this.firstName[0];
  this.secondInitial = this.lastName[0];

  this.applyStyles = function(element, text) {
    var elementToPage = element;

    elementToPage.innerText = this[text];
    elementToPage.style.fontSize = randomNumber(12, 22);
    elementToPage.style.transform = `translate(${randomNumber(12, 22)}px, ${randomNumber(12, 22)}px)`;

    return element;
  }
}

// create Initials & print on page
// what we need to assign to all elements created
// Size
// Positioning
// Color
function StyleElement() {

  Person.call(this);


  let initial1 = this.applyStyles(document.createElement('h1'), ['firstInitial']);
  let initial2 = this.applyStyles(document.createElement('h1'), ['secondInitial']);

  let hobbyToPage1 = this.applyStyles(document.createElement('p'), ['hobby1']);
  let hobbyToPage2 = this.applyStyles(document.createElement('p'), ['hobby2']);


  let jobToPage = this.applyStyles(document.createElement('h4'), ['jobTitle']);

  let petToPage = this.applyStyles(document.createElement('p'), ['petName']);

  let numberToPage = this.applyStyles(document.createElement('h3'), ['favNumber']);


  console.log(initial1);
  console.log(initial2);

  console.log(hobbyToPage1);
  console.log(hobbyToPage2);


  console.log(jobToPage);

  console.log(numberToPage);

  console.log(petToPage);
}


function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}



/* ------------------------------------------- */

function createProfile() {
  // Create a new object called newPerson
  let newPerson = new Person();
  /* binding the 'person' object to LogName
  This will allow the 'this.getFullName()' to run
  Bind creates a copy of LogName
  */
  let generateStyle = new StyleElement();

  generateStyle();
  
};



