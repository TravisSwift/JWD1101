"use strict"
/*The following code has been written for you.  You will not need to modify it. */


//Color Cube Change Function.  
function colorCube(color)
{
    let cube = document.getElementById("cube");
    cube.style.backgroundColor = color;
}

//Lunch Order Functions
function orderLunch(lunch)
{

    let lunchOrder = document.createElement("p");
    lunchOrder.innerText = `${name} ordered a ${lunch} for lunch`;
    document.getElementById("lunch").append(lunchOrder);
}


function lunchNotAvailable(){
    let lunchOrder = document.createElement("p");
    lunchOrder.innerText = `Sorry, what you wanted wasn't available.`;
    document.getElementById("lunch").append(lunchOrder);

}

function notHungry(){
    let lunchOrder = document.createElement("p");
    lunchOrder.innerText = `Seems like you are not hungry`;
    document.getElementById("lunch").append(lunchOrder);

}

//User Input 
let name = prompt("Please enter your name");
let userReview = prompt("Please Leave a Movie Rating between 1 and 4 Stars.");
let userColor = prompt("Please choose a color from the following: red, blue, yellow , green, purple.");
let hungry = confirm("Are you hungry? Click OK for YES or Cancel For NO");
let lunch; //declare lunch, but don't assign it a value


//Place Movie Review onto page. 
let review = document.createElement("p");
review.className = "review";
document.getElementById("movie-review").append(review);

/*BEGIN WRITING YOUR CODE BELOW */

//STUDENT INSTRUCTIONS:
//If hungry is true, prompt for the lunch order




//STUDENT INSTRUCTIONS: Movie Review
//Write If/else if / else statement block to check for 1-4 in userReview.  If userReview is not any valid value, set the review.innerText to 
// "Sorry, we aren't sure what kind of review you left ";




//STUDENT INSTRUCTIONS: Color Cube
//Write a switch statement to check for the userColor values.  Call the colorCube function.
//If userColor does not match to the cases of "red", "blue", "yellow", "purple", or "green", default the cube to color "orange"
userColor = userColor.toLowerCase();
switch(userColor){
    case 'red':
        colorCube(userColor);
        break;
    case 'blue':
        colorCube(userColor);
        break;
    case 'yellow':
        colorCube(userColor);
        break;
    case 'purple':
        colorCube(userColor);
        break;
    case 'green':
        colorCube(userColor);
        break;
    default:
        colorCube("orange");
                                              
}




//STUDENT INSTRUCTIONS: Lunch Order
//If hungry is true, write a switch statement for the cases of "pizza", "burger", "salad" and execute orderLunch();
	//if none of the cases are found, then execute lunchNotAvailable()
//else execute notHungry()


if (hungry && lunch != undefined)
{
    switch(lunch){
        case 'pizza':
            orderLunch(lunch);
            break;
        case 'burger':
            orderLunch(lunch);
            break;
        case 'salad':
            orderLunch(lunch);
            break;
        default:
            lunchNotAvailable()
    }
}
else{
    notHungry();
}
