"use strict";

const myName = "Travis";

let student = {
    name: myName, 
    grade: "A",
    favoriteClass: "JavaScript"
}

console.log(`${student.name}'s favorite class is ${student.favoriteClass}`);

let basicCar = {
    make: "Honda",
    model: "Civic",
    price: 19_000,
    year: 2019
}

let expensiveCar = {
    make: "Porsche",
    model: "911",
    price: 101_000,
    year: 2021
}

console.log(basicCar)
console.log(expensiveCar);

 let isLessExpense = basicCar.price < expensiveCar.price;
let isNewer = expensiveCar.year > basicCar.year;
let priceDifference = expensiveCar.price - basicCar.price;
let yearDifference = expensiveCar.year - basicCar.year;

console.log(`Is the basic car less expensive than the expensive car?${isLessExpense}`);
console.log(`Is the expensive car newer than the basic car? ${isNewer}`);
console.log(`The difference in price between the cars is ${priceDifference}`);
console.log(`The age difference between the cars is ${yearDifference} years`);

student.car = expensiveCar;

console.log(`The studetn owns a car. It is a ${student.car.make} ${student.car.model}`);

 student.savings = 5_000;
 let carpayment = 500;
 student.savings -= carpayment;

 console.log(`The student makes a ${carpayment} car payment, and now the student's saving is ${student.savings} `);

student.dog = {
    name: "Teddy",
    breed: "Beagle"
}

console.log(`The student owns a dog name ${student.dog.name}. The dog is a ${student.dog.breed}`);
console.log(`The student takes their dog ${student.dog.name} for a ride in his ${student.car.make}`);