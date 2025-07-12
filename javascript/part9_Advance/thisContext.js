const person = {
  name: "Shiv",
  greet() {
    console.log(`hello ${this.name}`);
  },
};

person.greet();

const GreetFun = person.greet;
GreetFun();

const boundGreet = person.greet.bind({ name: "Kamna" });
boundGreet();

// bind call apply
