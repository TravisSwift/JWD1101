'use strict'
//Begin following tutorial here.

function sumAllNumbers(elements)
{
    let sum = 0;
    for(let n of elements)
    {
        sum += Number(n.innerText);
    }

    document.getElementById("sum").textContent = sum;
    return sum;
}


function wordCount(element){
    let text = element.innerText;
    let array = text.split(" ");
    let wordCount = document.createElement("p");
    wordCount.className = "results";
    wordCount.textContent =  `${element.id} has a word count of ${array.length}`
    element.append(wordCount);
}

function checkSpam(element) {
    let lowerStr = element.innerText.toLowerCase();
    let results = lowerStr.includes('viagra') || lowerStr.includes('xxx');

    let spamChecker = document.createElement("p");
    spamChecker.className = "spamchecker";
    spamChecker.textContent =  `Checked ${element.id} . Spam Results: ${results}`
    element.after(spamChecker);
 }

 function sayHello(name="Guest")
 {
     document.getElementById("welcome").textContent = `Hello, ${name}`;
 }

//sayHello Function
let userName;
userName = prompt("Tell me your name");
sayHello(userName);

let numbers = document.querySelectorAll(".number");
let sum = sumAllNumbers(numbers);
console.log(`The sum of the numbers is ${sum}`);


//Word Counts 
let paragraphs = document.querySelectorAll(".word-count");
for (let element of paragraphs)
{
    wordCount(element);
}

//Spam Check
let emailElements = document.querySelectorAll(".emails");
for (let email of emailElements)
{
    checkSpam(email);
}

