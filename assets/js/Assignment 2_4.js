"use strict";
//Begin Tutorial Here
//New Elements
let section = document.getElementById("about");

let about = document.createElement("h2")
about.innerText ="About Our Company";
section.append(about)

let content = document.createElement("p");
content.textContent = "Our mission is to meet the needs of our customers by developing the latest web technology.."
content.className = "lead";
section.append(content);

let leadershipSection = document.getElementById("leadership");
let leadershipHeading = document.createElement("h2")
leadershipHeading.innerText ="Company Leadership";
leadershipSection.prepend(leadershipHeading);

let startButton = document.createElement("div");
startButton.className = "start-button"
startButton.innerText = "Get Started Working With Us";
document.getElementById("link").append(startButton);


let extraContent = document.createElement("p");
extraContent.textContent = "We believe that great businesses are powered by great people. And to be a great business, you need to create and manage an engaged workforce. So we make workforce solutions that are purpose-built for your industry and all your employees."
section.append(extraContent);

let divider = document.createElement("div");
divider.style.cssText = "height: 25px; background-color:rgb(9,169,203); margin:5px;";
section.before(divider);

let bottomDivider = document.createElement("div");
bottomDivider.style.cssText = "height: 25px; background-color:rgb(9,169,203); margin:5px;";
section.after(bottomDivider);


//Update Multiple Elements
let ul = document.getElementById("ul-1");
let leadership = ["Alvin Jordon, CEO", "Rachel Cook, Sales Manager", "Jia Lee, Technology Manager","Ajit Madhav, Senior Engineer"]

for(let i = 0; i < leadership.length; i++)
{
    let li = document.createElement("li");
    ul.append(li);
    li.innerText = leadership[i]
}

//Set image
let photo = document.getElementById("cover-image");
photo.src = photo.src = './assets/images/pexels-the-lazy-artist-gallery-999267.png';


//Remove Existing elements
document.getElementById("assignment").remove();

//Hide element, but do not Remove
let extra = document.getElementById("extra");
extra.textContent = navigator.userAgent;
extra.style.display = "none";

let companyName = prompt("Please Give Your Company A Name");
document.getElementById("company").innerText = companyName;