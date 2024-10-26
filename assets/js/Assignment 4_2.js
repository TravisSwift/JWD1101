"use strict";
const colorBox = document.getElementById("color-box");
const colorCode = document.getElementById("color-code")

const redControl = document.getElementById("red-control");
const greenControl = document.getElementById("green-control");
const blueControl = document.getElementById("blue-control");

function updateColorValue(){

  let colors = [redControl.value, greenControl.value, blueControl.value];
  let colorValue = `rgb(${colors.join(',')})`;
  changeColor(colorValue);

}


function changeColor(colorValue){
  colorBox.style.backgroundColor = colorValue;
  colorCode.innerText = colorValue;
}