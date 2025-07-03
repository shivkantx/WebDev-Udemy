let num1 = 4;
let num2 = 7;

// 1. check which number is greter
if (num1 > num2) {
  console.log(`${num1} is greater`);
} else {
  console.log(`${num2} is greater`);
}

// 2. check if the username is exist or not
let username = "shiv";
let anotherUsername = "shiv";
if (username != anotherUsername) {
  console.log(`${anotherUsername} username has been picked`);
} else {
  console.log(`${anotherUsername} exists! pick another username`);
}

// 3. checking the variable is number or not
let score = 44;

if (typeof score == "number") {
  console.log("yes this is number");
} else {
  console.log("yes this is number");
}

// 4. Check if an array is empty or not
let items = [];

if (items.length == 0) {
  console.log("array is empty");
} else {
  console.log("array is empty");
}
