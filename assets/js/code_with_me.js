"use strict"

let myArray = ["cats", "dogs", "zebras"];
console.log(myArray);
console.log(myArray[0]);
console.log(myArray.length);
myArray.push("dino");
console.log(myArray);
let dino = myArray[2];
console.log(dino);
myArray.push(166);
console.log( myArray);

let lastItem = myArray.pop();
console.log(myArray);
console.log(lastItem);

let someData = "some cool data";
myArray.push(someData);
console.log(myArray);
myArray.unshift("lions");
console.log( myArray);

let myLions = myArray.shift();
console.log(myArray);

myArray.sort();
console.log(myArray);
myArray.reverse();
console.log(myArray);

let myAnimals = myArray.join("[");
console.log(myAnimals);

let z = 1;
while ( z <10 ){
    console.log("Loop has run " + z + "time")
    z++
}




