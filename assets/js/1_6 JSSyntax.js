let someNumber = 5;
let anotherNumber = 10;
console.log("Is someNumber (5) greater than anotherNumber (10)?")
console.log(someNumber > anotherNumber)
//No, this comparison is false.

console.log("Is someNumber (5) + anotherNumber (10) equal to 15?")
console.log(someNumber + anotherNumber === 15);
//Yes, this comparison is true.

console.log("Is someNumber (5) - anotherNumber (10) less than 1?")
console.log(someNumber - anotherNumber < 1);
//Yes, this comparison is true.

console.log("Is someNumber (5) equal to anotherNumber (10)?")
console.log(someNumber === anotherNumber);
//No, they are not equal.

console.log("Set someNumber to be equal to anotherNumber");
someNumber = anotherNumber;
console.log(someNumber);
//the value of someNumber has been changed.

console.log("Now, are they equal?")
console.log(someNumber === anotherNumber);
//Yes, they are equal now.

let cat = "cat";
let dog = "dog";
console.log("Is a cat the same thing as a dog?")
console.log(cat === dog);

let poodle = "dog";
console.log("Is a poodle a dog?")
console.log(poodle == dog);

let ten = "10";
console.log("Is the text '10' the same thing as anotherNumber (10) ")
console.log(ten == anotherNumber);
//The answer is true with loose comparsion ==

console.log(ten === anotherNumber)
//The answer is false with strict comparsion ===
console.log("The answer is true with loose comparsion == and false with strict comparsion ===");
console.log("We recommend using strict comparsion.")

console.log("Add 5 + 3 + 12 and return the answer");
let answer = 5 + 3 + 12;
console.log(answer);
console.log("multiply the answer by 2.5");
console.log(answer * 2.5);
console.log("Is the value stored in the answer still 20, or did it change to 50?");
console.log(answer);
//It's still 20, because we never updated the value of answer by assigning it a new value.
console.log("Multiply the answer by 2.5 and save the result")
answer = answer * 2.5;
console.log(answer)
console.log("divide the answer by 5 and store the results in a variable called newAnswer")
newAnswer = answer / 5;
console.log(newAnswer);
console.log("Add the original answer and the new answer together. Do they equal 60?")
console.log(newAnswer + answer === 60);
console.log("Create a variable called 'final answer is sixty' and save the comparsion")
finalAnswerIsSixty = newAnswer + answer === 60;
console.log(finalAnswerIsSixty);
console.log("Create a new variable called final answer and save the final answer as a number");
finalAnswer = newAnswer + answer;
console.log(finalAnswer);