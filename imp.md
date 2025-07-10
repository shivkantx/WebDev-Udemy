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


# 🔁 JavaScript Loop Types – Quick Guide

A quick reference to all loop types in JavaScript with short descriptions and examples.

---

## 1. `for` Loop  
🔹 Best for: Known number of iterations

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i); // 0 1 2 3 4
}

