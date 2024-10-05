var car = {make:"Ford",model:"Mustang",year:"1990",color:"silver",value:"6,000.95",numberOfDoors:4}
//KEY


car.numberOfDoors = 2;
car.motor = "V6";


for (keyname in car){
    console.log(keyname);
    console.log(car[keyname]);
}


var someObject = {a:"Value 1"}
someObject.b = "Value 2"
console.log(someObject.b)

//var someObject = {a:"Value 1"}  //create the object. the only property is a
//someObject.b = "Value 2" //add a new property, b, and assign it a value
//console.log(someObject.b)

var dog  = {
    name:"Milo",
    breed:"German Shepard",
    age: "5", 
    bark: function() {
        console.log(this.name + " barks! Watch out!")
    }
}
dog.bark();

var dog2  = {
  name:"Princess",
  breed:"Poodle",
  age: "2", 
  bark: function() {
      console.log(this.name + " barks! But she isn't scary at all.")
  }
}

dog2.bark();


console.log(Object.keys(dog));