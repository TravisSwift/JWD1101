"use strict";
//Problem 1

//  let newArray = [ 9, 12, 16, 22, 30];
// let answer1 = document.getElementById("newArray");

let newArray = [ 9, 12, 16, 22, 30];
document.getElementById("answer1").textContent = newArray;

//Problem 2

//  let problem2 = document.getElementById('problem2').textContent.split(" , ");
//  let problem2.push('JavaScript');

let problem2 = document.getElementById('problem2').innerHTML.split(" , ");
problem2.push(' JavaScript')
document.getElementById('answer2').textContent = problem2;



//Problem 3
// Task 3. Add the values at index zero and 1 from problem 1, and output the results to the answer box.

// let problem3 = document.getElementById('newArray').textContent = fullString.indexOf [0] + [1] = problem3;

let problem3 = newArray[0] + newArray[1];
document.getElementById('answer3').textContent = problem3;

//Problem 4
// Create an array with the values 17, 68, 49, 128, and 236. Sum all the values in the array using a loop.

// let array4 = [17, 68, 49, 128, 236];
// let problem4 = 0;

// for (let i = 0; i < 1; i++);

// document.getElementById('problem4').textContent = answer4;

let array4 = [17, 68, 49, 128, 236];
let problem4 = 0;

for(let number of array4)
{
 problem4 += number;
}
document.getElementById('answer4').textContent = problem4;

//Problem 5

 let animalArray = ['Lions', 'Tigers', 'Bears'];

document.getElementById('answer5-element1').textContent = animalArray[0];
document.getElementById('answer5-element2').textContent = animalArray[1];
document.getElementById('answer5-element3').textContent = animalArray[2];

//Problem 6
// Output the word count of the ipsum lorem by using an array.
// I was using textContent and got an answer of 120. 

let problem6 = document.getElementById('problem6').innerText;
let words = problem6.split(" ");
document.getElementById("answer6").textContent = words.length;


//Problem 7
let elements = document.querySelectorAll(".problem-7")

for(let e of elements){
    e.style.backgroundColor = "rgb(204, 31, 204)"
    e.style.color = "white"
}