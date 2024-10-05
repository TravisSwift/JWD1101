console.log("JS Objects are great at representing complex data.  Our story begins with a dog named Router.")
let dog = {
  name:"Router",
  age: 3,
  breed: "Black Lab",
  favoriteToy: "Chewy Stick"
};



console.log(dog);
console.log(dog.name);
console.log(dog.breed);
console.log(dog.age);

console.log("Next let's create objects that represent two people. Mary & Johnny.");
let mary = {
  name:"Mary",
  age:15,
  city:"Phoenix",
  birthday: "March 15th" 
}

console.log(mary);

let johnny = {
  name:"Johnny",
  age:17,
  city:"New York",
  birthday: "March 15th" 
}
console.log(johnny);

console.log("Do Mary and Johnny live in the same city?");
console.log(mary.city === johnny.city);
console.log("Are Mary and Johnny the same age?");
console.log(mary.age === johnny.age);
console.log("Do Mary and Johnny share the same birthday?");
console.log(mary.birthday === johnny.birthday);
console.log("Is Mary older than Johnny?");
console.log(mary.age > johnny.age);

console.log("Johnny adopts the dog router. Make router belong to johnny." )
johnny.dog = dog;
console.log(johnny);
console.log("Johnny plays ball with router. Change Router's favorite toy to baseball.")
dog.favoriteToy = "baseball";
console.log(johnny);
console.log("Johnny and Mary grow up. Add 5 years to their age. Dont' forget to update router's age too.")
johnny.age += 5;
mary.age += 5;
dog.age +=5; 

console.log("Mary buys a car. Give her a blue 2019 Toyota Camry");
mary.car = {
  color:"blue",
  year:2019,
  make: "Toyota",
  model: "Camry"
}

console.log(mary);

console.log("Mary and Johnny get married. Set them to each other's spouse.")
mary.spouse = johnny;
johnny.spouse = mary;

console.log("Print all the data on mary and johnny to the console.")
console.log(mary);
console.log(johnny);