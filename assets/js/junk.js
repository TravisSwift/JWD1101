"use strict"

// Keyword = FUnction
// Function name
// () Input
function myFunction() {
    let message = "hello world";
    console.log(message); 
} 

myFunction();


 

function createADog(name, age, breed)
{
let newDog =  {
    name:name,
    age:age,
    breed:breed,
}
let functionScope = "I only live in the function";
console.log(functionScope);
return newDog;
 
}

let someDog = createADog("Honey", 1, "Poodle")
let anotherDog = createADog("Sam", 2, "Pitbull")
console.log(someDog);
console.log(anotherDog);
 

let myColors =["red", "blue", "green"];
for(let color of myColors){
    let paintBucket = {
        size: "half-gallon",
        paintcolor: color
    }
    console.log(paintBucket); 
      
}

 for (let color of myColors){
var paintBucket = {
    size: "Half-gallon",
    paintcolor:color
}
var artifact = "I should have been cleaned up";

console.log(paintBucket);
console.log(artifact);
    

 }

 
 
