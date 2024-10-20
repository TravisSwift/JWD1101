"use strict";
//Problem 1

// document.getElementById('string1').innerHTML = string1.length;

document.getElementById('answer1').textContent = document.getElementById('string1').textContent.length;


//Problem 2

// document.getElementById('answer2').textContent = fullString.indexOf('Spain');

document.getElementById('answer2').textContent = document.getElementById('string2').textContent.indexOf('Spain');
 
//Problem 3
document.getElementById('answer3').textContent = document.getElementById('string3').textContent.toUpperCase();


//Problem 4


document.getElementById('answer4').textContent = document.getElementById('string4').textContent.includes('hiddenword');

 

//Problem 5

// document.getElementById('answer5').textContent = document.getElementById('string5').textContent.indexOf('Down');

// document.getElementById('answer5').textContent = document.getElementById('string5').textContent.fullstring[];

let start = document.getElementById('string5').textContent.indexOf('Down');
let end = document.getElementById('string5').textContent.indexOf('Up');
let substring = document.getElementById('string5').textContent.slice(start, end);

document.getElementById('answer5').textContent = substring;

//Problem 6
document.getElementById('string6').textContent = document.getElementById('string6').textContent.replace('wreck', '');