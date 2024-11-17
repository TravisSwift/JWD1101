"use strict";

//Map Exercise
//global variables for referencing html elements needed.
const character = new Map();
const characterName = document.getElementById("characterName");
const vitality = document.getElementById("vitality");
const strength = document.getElementById("strength");
const dexterity = document.getElementById("dex");
const intelligence = document.getElementById("intelligence");
const characterHTML = document.getElementById("character")

 
function updateStats(){
    character.set("characterName", characterName.value);
    character.set("vitality", vitality.value);
    character.set("strength", strength.value);
    character.set("dexterity", dexterity.value);
    character.set("intelligence", intelligence.value);
}

 
function displayCharacter(){
    let i = 0;
    for(let stat of character)
    {

        characterHTML.children[i].innerText = `${stat[0]} : ${character.get(stat[0])}`
        i++    
    }
}

 
const visited = new Set();
const selectBox = document.getElementById("countrySelect")
const countryList = document.getElementById("country-list")


 
function addCountry(){
    visited.add(selectBox.value);
    countryList.innerHTML = "";
    for(let country of visited)
    {
        let html = document.createElement("p");
        html.className = "country"
        html.textContent = country;
        countryList.append(html);

    }

}