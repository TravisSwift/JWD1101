 "use strict";

 let firstNumber = 5;
 let firstString = "Hello JS";
 let secondNumber = 10;
console.log(firstNumber + secondNumber);

firstNumber = 50;
console.log(firstNumber * secondNumber);



let secondString = "This is text";
console.log(firstString + secondString);

let noValueAssigned;
console.log(noValueAssigned);   

let nothingValue = null;
console.log(nothingValue);

let trueOrFalse = true;
console.log(trueOrFalse);

const canNotChangeMe = "This value can not be changed";
let compareThis = "a";
let toThat = "a";
console.log(compareThis == toThat);

compareThis = "b";
console.log(compareThis == toThat);

compareThis = 10;
toThat = 10;
console.log(compareThis == toThat);

toThat = "10";

console.log(compareThis === toThat);

compareThis = 200;
toThat = 200;

let resultOfComparison = compareThis === toThat;
console.log(resultOfComparison);


