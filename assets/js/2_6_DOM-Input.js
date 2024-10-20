"use strict";
function SimpleInput() {
  let inputName = prompt("Please enter your name.");
  document.getElementById("user-name").innerHTML =  inputName;

  let inputPlace = prompt("Where are you from?");
  document.getElementById("user-place").innerHTML =  inputPlace;

  let inputAge = prompt("What's your age?")
  document.getElementById("user-age").innerHTML =  inputAge;

  let inputQuestion = confirm("Do you enjoy learning JavaScript?")
  if(inputQuestion == true)
  {
    document.getElementById("user-question").innerHTML =  "Do";

  }
  else{
    document.getElementById("user-question").innerHTML =  "Don't";
  }

}

SimpleInput();