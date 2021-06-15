/*
// Resources
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
*/


const btn = document.getElementById("btn");
const rgbCode = document.querySelector(".js-rbgColor");
const hexCode = document.querySelector(".js-hexColor");

// Copy Selection Buttons
const btn_RGB = document.querySelector(".btn-rgb");
const btn_HEX = document.querySelector(".btn-hex");


// Generate Random #
const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}


// Convert RGB to Hex using .toString()
const componentToHex = (c) => {
  let hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}
const rgbToHex = (r, g, b) => {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

// Copy Hex or RGB value
const copyValue = (input) => {
  //selected area 
  input.select();
  //Copy the text inside the text field 
  document.execCommand("copy");
  //Alert the copied text
  alert("Copied the text: " + input.value);
}


btn.addEventListener("click", () => {
  // get random number between 0 - 255
  let red = getRandomNumber(0, 255);
  let green = getRandomNumber(0, 255);
  let blue = getRandomNumber(0, 255);

  // Color Codes Codes
  let rgbColor = `rgb(${red}, ${green}, ${blue})`;
  let hexValue = rgbToHex(red, green, blue);

  rgbCode.value = rgbColor;
  hexCode.value = hexValue;

  document.body.style.backgroundColor = rgbColor;
});


btn_RGB.addEventListener("click", function(){copyValue(rgbCode)});
btn_HEX.addEventListener("click", function(){copyValue(hexCode)});



