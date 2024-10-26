"use strict"
let currentTotal = 0;
let currentNumber = 0;
let operation = 'none';

const display = document.getElementById('display')


function reset() {
  display.textContent = 0;
  currentTotal = 0;
  currentNumber = 0;
  operation = 'none';
  console.log("Cleared");

}


function input(button) {
  if (display.textContent == 0) {
    display.textContent = button.textContent;
  } 
  else {
    display.textContent += button.textContent;
  }

  currentNumber = Number(display.textContent);
}


function add(){
  calc();
  display.textContent = "0";
  operation ="add";

}

function subtract(){
  calc();
  display.textContent = "0";
  operation ="subtract";

}

function multiply(){
  calc();
  display.textContent = "0";
  operation ="multiply";
}

function divide(){
  calc();
  display.textContent = "0";
  operation ="divide";

}

function calc() {

  switch(operation){
    case `add`: currentTotal += Number(currentNumber);
    break;
    case `subtract`: currentTotal -= Number(currentNumber);
    break;
    case `multiply`: currentTotal = currentTotal * Number(currentNumber);
    break;
    case `divide`: currentTotal = currentTotal / Number(currentNumber);
    break;
    case 'none': currentTotal = currentNumber;
    break;
  }
  console.log("total " + currentTotal);

  display.textContent = currentTotal;
  currentNumber = currentTotal;
  operation = "none";
}