"use strict";

//accepts an event as input
function beginDrag(ev){
    ev.dataTransfer.setData("text/html", ev.target.id);
}



//accepts an event as input
function onDragOver(ev)
{
    ev.preventDefault();
    ev.dataTransfer.dropEffect="move";

}


//accepts an event as input
function drop(ev)
{
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text/html",);
    ev.target.append(document.getElementById(data));
    
}





function newGame(){
    clearBoard();
    let startingPieces = [0,1,2,3,4,5,6,7,8,9];

    for(let piece in startingPieces){
        newLetter(piece);
    }
}



function clearBoard(){
    let remainingLetters = document.getElementsByClassName("letter");

    if(remainingLetters.length === 0)
    {return}

    for(let i = remainingLetters.length -1; i > -1; i--)
    {
        remainingLetters[i].remove();
    }
}

function newLetter(id){
    
    let possibleLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let max = 26;

    const letterPos = Math.floor(Math.random() * max) 

    let letterText = possibleLetters[letterPos]
    
    let letter = document.createElement("p");
    letter.className = "letter";
    letter.innerText = letterText;
    letter.setAttribute("draggable", "true");
    letter.addEventListener("dragstart", beginDrag);
    letter.setAttribute("id", id);

    document.getElementById("letters").append(letter);

}


function getLetter()
{
    let remainingLetters = document.getElementsByClassName("letter");
    newLetter(remainingLetters.length);
}