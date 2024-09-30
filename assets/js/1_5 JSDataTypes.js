//Numbers are a Data Type
//JS Numbers can be positive, negative, or decimal numbers.
console.log("JS Numbers can be positive, negative, or decimal numbers.");
let someNumber = 10;
let anotherNumber = 20;
let x = 1.55;
let y = -5;
console.log(someNumber, anotherNumber, x, y );

//JS treats dates like a number.
console.log("JS treats date/time like it's a number.")
let today = Date.now();
console.log(today);
console.log("We can reformat as text to get the date.")
//Date formatted as text
console.log(Date(today).toLocaleString());

//string
let someText = "This is text. It's also called a string or string text.";
let numberOrString = "100";
console.log(someText);

//booleans
let isWebDevelopmentFun = true;
let doPicklesTasteGood = false;
console.log("Is Web Development Fun?")
console.log(isWebDevelopmentFun);
console.log("Do pickles taste good?")
console.log(doPicklesTasteGood);

//Will be undefined because it's value has not been assigned.
let someData;
console.log("The variable someData has been left undefined. We don't know what it is yet");
console.log(someData);

//Will be null
let isNothing = null;
console.log("The variable isNothing has a value of null. It's value is 'nothing', but it is defined. We know its null.")
console.log(isNothing);

//casting example
let myNumber = 10; //this is a number
let myText = '15'; // this is text

console.log("Add the string myText and a number myNumber together gives unwanted results in this case.")
console.log(myNumber + myText);
//Result = 1015 , not what we wanted.

console.log("We can treat myText like a number by casting it to the number Data Type.")
console.log(myNumber + Number(myText) );
//Result = 25


//Adding strings to form a sentence.
let someCat = "Peach";
let anotherCat = "Nemo";
console.log("I have two cats named " + someCat + " and " + anotherCat);

//Cast someNumber as a string to treat it like text.
console.log("I have " + String(myNumber) +  " apples and " + myText + " oranges.");
//I have 10 apples and 15 oranges.