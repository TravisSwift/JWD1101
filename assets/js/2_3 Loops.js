"use strict"
//loop examples
var list = ['a','b','c','d','e','f','g','h']

//for..of is perfect for arrays and collections that have a sequence/order
for (let item of list){
  console.log("The next value of the collection is : " + item);
}


//for..of  our magic word for the thing in our collection does not matter.
for (let magicword of list){
  console.log("The next value of the collection is : " + magicword);
}


//for..in works on a collection but returns index, not value
for (let item in list){
  console.log(item + " is a letter of the alphabet.")

}

//for..in on a collection. Get the value by calling array[index]
for (let index in list){
  console.log(list[index] + " is a letter of the alphabet.")
  //list[0]...
  //list[1]...
  //list[2]...
}


//for..in works on JS Objects.
let fruit = {
  name:'Strawberries',
  qty: 12,
  price: .99,
  whereGrown:'California',
}

//This returns the object property itself, not the value
for(let property in fruit)
{
  console.log(property)
}

//This returns the value of the property
for(let property in fruit)
{
  console.log(fruit[property])
}

// This does not work, because an object is not a collection,and is not iterable (no sequence)
// Uncommenting this code will thow an error.
// for(let item of fruit)
// {
//   console.log(item)
// }

//The classic for loop
//i = 0, while i is less than length of the array, run the loop. increase i each time.
for (var i = 0; i < list.length; i++)
{
  console.log("loop has ran " + i + " times")
}

//classic loop example 2
//you don't need to increase the counter i, the loop does it for you with i++
let characters = ['mario', 'peach', 'luigi', 'bowser'];
for (var i = 0; i < characters.length; i++)
{
	console.log(characters[i] + " is a character from Super Mario");
  //character[0]
}


//While Loop
let z = 1;
while ( z < 10 ){
    console.log("loop has ran " + z + " times")
    z++ //remember to increase the counter or you will be stuck in an endless loop
}

//Do While
let test = false;
do {
  console.log("Do.while... I must run at least once, even if my while condition is never true.");
}
while (test == true)


//DOM UPDATES
let ul = document.createElement("ul");
ul.innerText = "The properties of the fruit object are"
document.body.append(ul);
for(let prop in fruit){
  let li = document.createElement("li");
  li.innerText = prop + " : " + fruit[prop];
  ul.append(li);
}

let parentElement = document.getElementById("flex-row");
for (var i = 0; i < characters.length; i++)
{
  let gameCharacter = document.createElement("div");
  gameCharacter.innerText = characters[i];
  parentElement.append(gameCharacter)
}


//bad while loops -- common student mistakes
//1.  Forgetting to increase a counter variable
//let counter = 0;
//while (counter < 20);{
  //do something!!!
  //forget to increase the counter
//} 

//2. Using the wrong operator
//wrong operator! we need to use == or === in the while's condition
// let endOfWork = false;
// while (endOfWork = false){
//   //do stuff
//   endOfWork = true;
// }
