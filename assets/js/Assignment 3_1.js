"use strict";

let coffeeMug = {
    size: "large",
    color: "white",
    text: "Rise and Shine!",
    textColor: "black",
    drink: function() {console.log(`You drink some coffee in the ${this.size} ${this.color} coffee mug. ${this.text}`)},
    fill: function() {console.log(`You pour some coffee in the  ${this.size} ${this.color} coffee mug.`)}
}

coffeeMug.fill();
coffeeMug.drink();


let song = {
artist: "Nick Cave and The Bad Seeds",
title: "Red Right Hand",
length: "4.46",
play: function(){console.log(`You are listening to ${this.title} by ${this.artist}`)},
changeSong: function(newArtist, newTitle) {
    this.title = newTitle;
    this.artist = newArtist;
}

}

song.play();
song.changeSong('Johnny Cash', 'Folsom Prison Blues');
song.play();
