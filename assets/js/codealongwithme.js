"use strict";
let sayHello = "Hello world";
console.log(sayHello);

let myNumber = 10;
console.log(myNumber);

let newNumber = myNumber * 3;
console.log(newNumber);

myNumber += 5;
console.log(myNumber);

let myPet = "cat";
console.log("My pet is a " + myPet);

let compare = myNumber === newNumber;
console.log(compare);

console.log("The current value of myNumber is " + String(myNumber) );

let pet = {
    name: "Fido", 
    type: "Dog", 
    age: 4,
    breed:"Golden Retreiver",
    furColor: "Yellow",
}

console.log(pet);

console.log(pet.breed);
pet.age += 1;
console.log(pet.age);