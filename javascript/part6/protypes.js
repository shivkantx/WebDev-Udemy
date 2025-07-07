let computer = { cpu: 12 };
let lenovo = {
  screen: "HD",
  __proto__: computer,
};
let tomHardware = {};

// console.log(`computer : `, computer.__proto__);

let genericCar = { tyres: 4 };
let tesla = {
  driver: "AI",
};

Object.setPrototypeOf(tesla, genericCar);
console.log(`tesla : `, tesla);
console.log(tesla.tyres);
console.log("tesla : ", Object.getPrototypeOf(tesla));
