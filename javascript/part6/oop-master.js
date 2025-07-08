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

// inheritance
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
// console.log(Vehical1.start());
// console.log(Vehical1.drive());

// Encapsulation (Hash)
class Bankbalance {
  #balance = 0;

  deposite(amount) {
    this.#balance += amount;
    return this.#balance;
  }

  getBalance() {
    return `$ ${this.#balance}`;
  }
}

let account = new Bankbalance();
// console.log(account.balance);
// console.log(account.getBalance());

// Abstraction
class CoffeMachine {
  start() {
    // call DB
    // filter value
    return `Starting the machine...`;
  }
  brewCoffee() {
    // complex calculation
    return `Brewing Coffee`;
  }
  pressStartButton() {
    let msgOne = this.start();
    let msgTwo = this.brewCoffee();
    return `${msgOne} \n${msgTwo}`;
  }
}

let myMachine = new CoffeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());
// console.log(myMachine.pressStartButton());

// polymorphism

class Bird {
  fly() {
    return `Flying...`;
  }
}

class Panguin extends Bird {
  fly() {
    return `Panguin can't fly`;
  }
}

let bird = new Bird();
let panguin = new Panguin();

// console.log(bird.fly());
// console.log(panguin.fly());

// static keyword
class Calculator {
  static add(a, b) {
    return a + b;
  }
}
let addTwoNum = new Calculator();
// console.log(addTwoNum.add(4, 5));
// console.log(Calculator.add(5, 6));

// Getters and Setters
class Employee {
  #salary;

  constructor(name, salary) {
    if (salary < 0) {
      throw new Error("Salary can't be negative");
    }
    this.name = name;
    this.#salary = salary;
  }

  get salary() {
    return `You are not allowed to see salary`;
  }

  set salary(value) {
    if (value < 0) {
      console.error("Invalid salary");
    } else {
      this.#salary = value;
    }
  }
  getActualSalary() {
    return this.#salary;
  }
}

let emp = new Employee("Shiv", 59999);
console.log(emp.name); // Shiv
console.log(emp.salary); // You are not allowed to see salary
emp.salary = 60000;
console.log(emp.getActualSalary());
