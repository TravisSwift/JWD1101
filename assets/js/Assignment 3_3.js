"use strict";
const charCount = document.getElementById("char-count");
const tweets = document.getElementById("tweets");
const errorMsg = document.getElementById("error-msg");
const charLimit = 140;


//Add a new post if the text is less than the character limit.
function addNewPost(){
    let content = document.getElementById("new-tweet").value;

    if(content.length > charLimit)
    {
        return;
    }

    let nextTweet = document.createElement("p");
    nextTweet.textContent = content;
    tweets.prepend(nextTweet);

    document.getElementById("new-tweet").value = ""
    charCount.textContent = "";

}


//Count the characters and update the HTML, or report an error
function countCharacters(input){
    if(input.length < charLimit){
        charCount.textContent = input.length;
        errorMsg.style.display = "none";
    }
    else{
        errorMsg.textContent = `Tweet must be less than ${charLimit} characters.`
        errorMsg.style.color = "red";
        errorMsg.style.display = "block";
    }

}