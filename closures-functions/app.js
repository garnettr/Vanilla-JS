/////////////////

'use strict'

function buildFunctions() {

  var arr = [];
  // when build functions is run - i will return 3
  // The value of i is 3 when the function is called
  for (var i = 0; i < 3; i++) {
    arr.push(
      function() {
        console.log(`testing ${i}`);
      }
    )
  }

  return arr;
}

var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();


// using es6
function buildFunctions2() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    // using es6 j is scoped to the block
    // and will return 0,1,2
    let j = i;
    arr.push(
      function() {
        console.log(`testing ${j}`);
      }
    )
  }

  return arr;
}

var fs2 = buildFunctions2();

fs2[0]();
fs2[1]();
fs2[2]();


// using es5
function buildFunctions3() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    // every time the function is run
    // the value J is stored 
    arr.push(
      (function(j) {
        return function() {
          console.log(j);
        }
      }(i))
    )
  }

  return arr;
}

var fs3 = buildFunctions3();

fs3[0]();
fs3[1]();
fs3[2]();



// factory function
// setting a parameter function
/* the inner function is saved to greetEnglish 
or greetSpanish */
function makeGreeting(language) {

  return function(firstName, lastName) {

    if (language === 'en') {
      console.log('Hello ' + firstName+ ' ' + lastName);
    }

    if (language === 'es') {
      console.log('Hola ' + firstName + ' ' + lastName);
    }
  }
}


var greetEnglish = makeGreeting('en');
var greetSpanish = makeGreeting('es');


greetEnglish('Ian', 'Garnett')
greetSpanish('ian', 'garnett');