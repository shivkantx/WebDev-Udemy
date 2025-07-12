function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`Hello, My name is ${this.name}`);
};

let Shiv = new Person("Shiv Kant");
Shiv.greet();
