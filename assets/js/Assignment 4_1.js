"use strict"
const VIEWER = document.getElementById("hero-viewer");



function Hero(heroName, realName, homeWorld, superPowers, weakness)
{
    this.heroName = heroName;
    this.realName = realName;
    this.homeWorld = homeWorld;
    this.superPowers = superPowers;
    this.weakness = weakness;
}


function HeroCard(hero){
    this.html = document.createElement("div");
    this.html.className = "flex-col hero-card";

    for(let prop in hero){

        let label = document.createElement("p");
        let heroInfo = document.createElement("p");

        label.innerText = prop.toUpperCase();
        heroInfo.innerText = hero[prop];

        this.html.append(label);
        this.html.append(heroInfo);
 
    }

}

function createHero(){
    let hero = new Hero(
        document.getElementById("heroname").value,
        document.getElementById("realname").value,
        document.getElementById("home").value,
        document.getElementById("superpowers").value,
        document.getElementById("weakness").value,
    )

    let card = new HeroCard(hero);
    VIEWER.append(card.html);


}