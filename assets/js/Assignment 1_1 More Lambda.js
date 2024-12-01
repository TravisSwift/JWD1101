'use strict';

//Exercise 1 - A function that outputs to the console.
function f1() 
{
    console.log("Function 1 executed.")
}
f1();

const lambda1 = () => {console.log("Lambda 1 executed")};
lambda1();



//Exercise 2 - A function that sends input to the console.
function f2( someInput) {
    console.log(`The input you gave was ${someInput}`);
}
f2(100);
f2("grapefruit");



const lambda2 = (someInput) => console.log(`The input you gave was ${someInput}`);

lambda2(100);
lambda2("grapfruit");

//Exercise 3 - A function that returns true/false if some text contains a phrase.
function f3(text, searchPhrase)
{
    if( text.includes(searchPhrase)) 
    {
        console.log(true);
        return true;
    }
    
    console.log(false);
    return false;
    
}
f3("It's raining cats and dogs","cat")
f3("Let the cat out of the bag","cat")
f3("Curiosity killed the mouse","cat")

const lambda3 = (text, searchPhrase) => {
    if (text.includes(searchPhrase)) {
        console.log(true);
        return true;  
    }
    console.log(false);
    return false;  
};
lambda3("It's raining cats and dogs", "cat")
lambda3("Let the cat out of the bag", "cat")
lambda3("Curiosity killed the mouse", "cat")

//Exercise 4  - A function that lists out the property names of a object
function f4(someObject)
{
    console.log('These are the properties of the object.')
    for(let prop in someObject)
    {
        console.log(prop);
    }
}

f4( {name:"Pencils",price:2.99, quantity:10} );
f4( {firstName: "Elvis", lastName: "Presley", city:"Los Vegas", occupation:"singer"} );


const lambda4 = (someObject) =>
{
    console.log('These are the properties of the object.')
    for(let prop in someObject)
    {
        console.log(prop);
    }
}

lambda4({name:"Pencils", price:2.99, quantity:10});
lambda4 ({firstName: "Elvis", lastName: "Presley", city:"las Vegas", occupation:"singer"});


//Exercise 5 - A function that uses a closure to create a counter.
function f5()
{
    let counter = 0;

    function innerFunction()
    {
        counter++;
        console.log(counter);

    }

    return innerFunction;
}

let useF5 = f5();
useF5();
useF5();
useF5()

const lambda5 = () => 
    {
    let counter = 0;
   function innerFunction()
    {
        counter++;
        console.log(counter);
    }
    return innerFunction;
}

 

let useIt = lambda5();

useIt();
useIt();
useIt();