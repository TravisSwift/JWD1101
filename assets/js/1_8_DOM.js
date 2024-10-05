
var car = {
  make:"Honda",
  year:2020,

};

console.log(car.year);





document.getElementById("heading-1").innerHTML = "JS DOM Examples";
document.getElementById("heading-2").innerHTML = "My innerHTML content was set via JavaScript.";
document.getElementById("text-1").innerHTML = "JavaScript can add, change, or remove elements on a page.";
document.getElementById("text-2").innerHTML = "JavaScript can use the DOM to find elements, either by HTML id or through CSS Selector. When using querySelector, JS gets the first element found.";
document.getElementById("text-3").innerHTML = "In the list below, the first list item text color is changed to red.";
document.querySelector("#list-1 li").style.color = "red";

document.getElementById("element-1").style.backgroundColor = "#CCC";
document.getElementById("element-1").style.width = "400px";
document.getElementById("element-1").style.border = "4px solid black";
document.getElementById("element-1").style.padding = "1em";

document.querySelector("#element-1 p").innerHTML = "This Element was styled by JavaScript.";


//We can create variabls in JavaScript and use them on the page.
var someNumber = 5;
var someOtherNumber = 20;
document.getElementById("js-var-text").innerHTML = "The number shown below was calculated in JS."
document.getElementById("js-var-output").innerHTML = someNumber + someOtherNumber;
document.getElementById("js-var-output").style.fontSize = "6em";

document.querySelector(".class-example").innerHTML = "All content on this page was created with JavaScript.";

dog = {
  name:"Router",
  age:"Eight Years Old",
  breed:"Black Lab",
}

document.getElementById("dog-name").innerHTML = dog.name
document.getElementById("dog-age").innerHTML = dog.age
document.getElementById("dog-breed").innerHTML = dog.breed
document.querySelector("#dog img").src = 'pexels-pixabay-162149.jpg'