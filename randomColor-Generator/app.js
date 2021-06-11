/*
// Resources
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
*/


const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const rgbCode = document.querySelector(".js-rbgColor");
const hexCode = document.querySelector(".js-hexColor");


btn.addEventListener("click", () => {
  // get random number between 0 - 255
  let red = getRandomNumber(0, 255);
  let green = getRandomNumber(0, 255);
  let blue = getRandomNumber(0, 255);

  // Color Codes Codes
  let rgbColor = `rgb(${red}, ${green}, ${blue})`;
  let hexValue = rgbToHex(red, green, blue);

  document.body.style.backgroundColor = rgbColor;
  rgbCode.textContent = rgbColor;
  hexCode.textContent = hexValue;
});

let getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}


// Concert RGB to Hex using .toString()
let componentToHex = (c) => {
  let hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}
function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

