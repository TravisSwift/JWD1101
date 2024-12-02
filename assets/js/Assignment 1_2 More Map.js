'use strict';
//EXERCISE 1 - Simple map with numbers
//The input array 
const exercise1_array = [3,7,9,4,12,21,145,99,2000];

//A map function that will return the number if it is an even number,
//else, it will subtract 1 from the number to make it even.

 
const exercise1_map_result = exercise1_array.map((n) => {
    if (n % 2 === 0) {
        return n; // Even number, keep it
    } else {
        return n - 1; // Odd number, subtract 1
    }
});

console.log(exercise1_map_result);



//What does the map function generate?
console.log(exercise1_map_result)

// 2, 6, 8, 4, 12, 20, 144, 98, 2000


//Exercise 2 Map with No Return
const exercise2_array = [5, 12, 13, 40, 7];
const exercise2_map_result = exercise2_array.map ( (number)=>
{
    number * 100;
}); 

console.log(exercise2_map_result)

//What does this map function generate?
console.log(exercise2_map_result)

// Five undefined results

//Exercise 3  Same Map with Return
const exercise3_array = [5, 12, 13, 40, 7];
const exercise3_map_result = exercise3_array.map ( (number)=>
{
    return number * 100;
}); 


//What does this map function generate?
console.log(exercise3_map_result)

// [500, 1200, 1300, 4000, 700]

//Exercise 4 - Map with Text
const exercise4_array = ["About Us", "Links", "News", "Contact", "Other Sites"];

//A map function that generates HTML using the text of the array.

const exercise4_map_result = exercise4_array.map ( (text) =>
    {
        const heading4 = document.createElement("h4");
        heading4.innerText = text;
        document.body.append(heading4);
        return heading4;
    
    });

//What does this map function generate?
console.log(exercise4_map_result)

// h4, h4, h4, h4, h4

//Exercise 5 - Map with an Object Property
const exercise5_array = [
    {value:10},
    {value:"someText"},
    {value:true},
    {value: {anotherObject: "anotherObject"} },
]

const exercise5_map_result = exercise5_array.map ( (object)=>
    {
        return object.value;
    });
    
//A map function that returns the object.value property.

 
 

//What does this map function generate?
console.log(exercise5_map_result)
// 10,someText,true, 

//Exercise 6 - Map with an Object 
const exercise6_array = [
    {width: '200px', backgroundColor:"red", margin:'10px'},
    {width: '300px', backgroundColor:"red", margin:'10px'},
    {width: '400px', backgroundColor:"red", margin:'10px'},
]

const exercise6_map_result = exercise6_array.map ( (object)=> {
    const newDiv = document.createElement("div");
    newDiv.style.width = object.width;
    newDiv.style.backgroundColor = object.backgroundColor;
    newDiv.style.margin = object.margin;
    newDiv.innerText = "\n";
    document.body.append(newDiv);
});

//A map function that generates HTML using the object data.


//What does this map function generate?
console.log(exercise6_map_result)

//[ undefined,undefined,undefined ]

//Exercise 7
const exercise7_map_result = exercise6_array.map ( (object)=>
{
    return {width: object.width, backgroundColor: "blue", margin: object.margin};
});

//What does this map function generate?
console.log(exercise7_map_result)

//Exercise 8



exercise7_map_result.map ( (object) => {
    const newDiv = document.createElement("div");
    newDiv.style.width = object.width;
    newDiv.style.backgroundColor = object.backgroundColor;
    newDiv.style.margin = object.margin;
    newDiv.innerText = "\n";
    document.body.append(newDiv);
});