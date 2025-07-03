const username = {
  firstname: "shivkant",
  isloggedIn: true,
};
// const username = {
//   "first name": "shivkant",
//   isloggedIn: true,
// };
// console.log(username["first name"]);

console.log(username);
// console.log(typeof username);

// edit and add in objects
username.firstname = "Mr. Shiv";
username.lastname = "Pal";

console.log(username.firstname);
console.log(username.lastname);
console.log(username);

// Date
let today = new Date();
console.log(today.getDate());

// // Array
let anotherUser = ["shivkant", "pal", true];
console.log(anotherUser[0]);

console.log(1 + "1");
console.log("1" + 1);

let isValue = "2abc";
console.log(Number(isValue));
console.log(typeof Number(isValue));
