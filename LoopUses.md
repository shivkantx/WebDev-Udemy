A quick reference to all loop types in JavaScript with short descriptions and examples.

---

## 📋 Summary Table

| Loop Type    | Use Case                                     |
| ------------ | -------------------------------------------- |
| `for`        | Known number of iterations (e.g., 0 to n)    |
| `while`      | Loop until a condition becomes false         |
| `do...while` | Loop at least once, then check condition     |
| `for...of`   | Iterate over array, string, Set, etc.        |
| `for...in`   | Iterate over keys in an object               |
| `.forEach()` | Run function for each array item (no return) |
| `.map()`     | Return new array by transforming items       |
| `.filter()`  | Return new array with filtered items         |
| `.reduce()`  | Combine all array items into one value       |

---

## 1. `for` Loop

🔹 Best for: Known number of iterations

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i); // 0 1 2 3 4
}
```

---

## 2. `while` Loop

🔹 Best for: Unknown end condition, check before each run

```javascript
let i = 0;
while (i < 5) {
  console.log(i); // 0 1 2 3 4
  i++;
}
```

---

## 3. `do...while` Loop

🔹 Best for: Ensure loop runs at least once

```javascript
let i = 0;
do {
  console.log(i); // 0 1 2 3 4
  i++;
} while (i < 5);
```

---

## 4. `for...of` Loop

🔹 Best for: Looping over iterable values (arrays, strings, sets)

```javascript
const arr = [10, 20, 30];
for (const val of arr) {
  console.log(val); // 10 20 30
}
```

---

## 5. `for...in` Loop

🔹 Best for: Looping over object keys

```javascript
const obj = { a: 1, b: 2 };
for (const key in obj) {
  console.log(key, obj[key]);
  // Output:
  // a 1
  // b 2
}
```

---

## 6. `.forEach()`

🔹 Best for: Executing a function on each array element (no return)

```javascript
[1, 2, 3].forEach((num) => {
  console.log(num); // 1 2 3
});
```

---

## 7. `.map()`

🔹 Best for: Creating a new array by transforming items

```javascript
const nums = [1, 2, 3];
const squared = nums.map((n) => n * n);
console.log(squared); // [1, 4, 9]
```

---

## 8. `.filter()`

🔹 Best for: Filtering array based on condition

```javascript
const nums = [1, 2, 3, 4, 5];
const even = nums.filter((n) => n % 2 === 0);
console.log(even); // [2, 4]
```

---

## 9. `.reduce()`

🔹 Best for: Reducing array to a single value (e.g., sum)

```javascript
const nums = [1, 2, 3, 4];
const sum = nums.reduce((acc, n) => acc + n, 0);
console.log(sum); // 10
```

---

📆 Use `for`, `while`, or `do...while` for controlled logic.
📆 Use `.map()`, `.filter()`, `.reduce()` for functional, clean code.
