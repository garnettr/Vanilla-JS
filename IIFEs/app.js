/////////////////
// IIFE (Immediately Invoked Function Expression)
// https://developer.mozilla.org/en-US/docs/Glossary/IIFE

'use strict'


const makeWithdraw = balance => (function(copyBalance) {
  // save your balance as copyBalance
  let balance = copyBalance; // This variable is private
  // Logging a "private" var -- logging message  
  let doBadThings = function() {
    console.log("I will do bad things with your money");
  };
  //initiating private var
  doBadThings();

  // returning the real purpose of the object
  return {
    // make a withdraw for an amount
    withdraw: function(amount) {
      if (balance >= amount) {
        // subtracting withdraw amount from balance 
        balance -= amount;
        // return subtracted balance 
        return balance;
      } else {
        return "Insufficient money";
      }
    },
  }
})(balance);

const firstAccount = makeWithdraw(100); // "I will do bad things with your money"
// console.log(firstAccount.balance); // undefined
console.log(firstAccount.withdraw(20)); // 80
console.log(firstAccount.withdraw(80)); // 50
// console.log(firstAccount.doBadThings); // undefined, this method is private
const secondAccount = makeWithdraw(20);
secondAccount.withdraw(30); // "Insufficient money"
secondAccount.withdraw(20);  // 0



// ========================================


let firstName = "Ian";

(function(name) {
  let greeting = "Inside IIFE: Hello";
  console.log(greeting + " " + name);
}(firstName));


// IIFE Adjust grayScale percentage of image
(function(percentage) {
  let image = document.querySelector("img");
  image.style.filter = `grayscale(${percentage}%)`;
  console.log(`Image has a grayscale filter of ${percentage}%` );
}(75));
