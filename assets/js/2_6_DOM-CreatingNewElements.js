"use strict";
/*This is an example doesn't make use of the DRY principle. A lot of
code is repeated over and over, when it could be turned into functions.

While this code works, we would not consider it well-written.
*/

//Create some explantory text
let e1 = document.createElement("p");
e1.setAttribute("id", "info");
e1.classList.add("content");
e1.classList.add("text-italic");
e1.textContent =  "All of the elements you see on this page were created in JavaScript, then placed on the page."
document.body.append(e1);

//Create a button with id of id-1
let e2 = document.createElement("button");
e2.setAttribute("id", "id-1");
e2.classList.add("content");
e2.textContent =  "JavaScript Button"
document.body.append(e2);


//Create a div with id of id-2
let e3 = document.createElement("div");
e3.setAttribute("id", "id-2");
e3.classList.add("content");
e3.textContent =  "I'm some content for this element, creating using JavaScript."
document.body.append(e3);

//Create a div with id of flex-parent
let flexParent = document.createElement("div");
flexParent.setAttribute("id", "flex-parent");
flexParent.classList.add("flex-row") ;
flexParent.classList.add("align-center") ;
document.body.append(flexParent);

//Use a loop to create children in the flexbox.
let flexItems = [1,2,3,4,5,6,7,8]
for (let item of flexItems)
{
  let nextItem = document.createElement("div");
  nextItem.classList.add("flex-item");
  nextItem.textContent = item;
  flexParent.append(nextItem);
}
