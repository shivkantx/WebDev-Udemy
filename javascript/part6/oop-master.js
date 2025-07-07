let car = {
  make: "Toyota",
  modelk: "Camry",
  year: 2000,
  start: function () {
    return `${this.make} car got started in ${this.year}`;
  },
};
// console.log(car.start());

function Person(name, age) {
  this.name = name;
  this.age = age;
}

let john = new Person("John Doe", 20);
// console.log(john.name);
// console.log(john);

function Animal(type) {
  this.type = type;
}

Animal.prototype.speak = function () {
  return `${this.type} makes a sound`;
};

Array.prototype.shiv = function () {
  return `Custom methods ${this}`;
};

let myArray = [1, 2, 3];
// console.log(myArray.shiv());

let myNewArray = [1, 2, 3, 4, 5];
// console.log(myNewArray.shiv());

class Vehical {
  constructor(model, make) {
    this.model = model;
    this.make = make;
  }
  start() {
    return `${this.model} is a car from ${this.make}`;
  }
}

class Car extends Vehical {
  drive() {
    return `${this.make} : This is an inheritance example`;
  }
}

let myCar = new Car("Toyota", "Carolla");
// console.log(myCar.start());
// console.log(myCar.drive());

let Vehical1 = new Vehical("Toyota", "Carolla");
console.log(Vehical1.start());
// console.log(Vehical1.drive());
