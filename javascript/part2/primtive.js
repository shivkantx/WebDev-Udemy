//
let balance = 120;
console.log(typeof balance);

let anotherBalance = new Number(120); // not recommended
// console.log(typeof anotherBalance);
console.log(anotherBalance.valueOf());

// boolean
let isActive = 120;
let isReallyActive = new Number(120);
console.log(typeof isReallyActive);
console.log(typeof isActive);

// null and undefined
let firstname = null;
let lastName;
// let lastName = undefined;
console.log(firstname);
console.log(lastName);

// String
let myString = "hello";
let myStringOne = "Hola";
let getMessage = `Hello`;
let username = "Shivkant";

let oldGreet = myString + " " + "shiv";
console.log(oldGreet);

let newGreet = `${myString} ${username}!`;
console.log(newGreet);

let demoOne = `value is ${2 * 4 - 6} `;
console.log(demoOne);
