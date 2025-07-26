A quick and practical guide to the most commonly used and important array methods in JavaScript.

---

## 📋 Summary Table

| Method        | Description                                    |
| ------------- | ---------------------------------------------- |
| `.push()`     | Add item(s) to the end of an array             |
| `.pop()`      | Remove the last item from an array             |
| `.unshift()`  | Add item(s) to the beginning of an array       |
| `.shift()`    | Remove the first item from an array            |
| `.map()`      | Create a new array by transforming items       |
| `.filter()`   | Create a new array with only matching items    |
| `.reduce()`   | Reduce array to a single value                 |
| `.forEach()`  | Run a function on each array item (no return)  |
| `.find()`     | Return the first matching element              |
| `.includes()` | Check if array contains a value                |
| `.indexOf()`  | Get index of a value (or -1 if not found)      |
| `.concat()`   | Merge two or more arrays                       |
| `.slice()`    | Copy part of an array into a new array         |
| `.splice()`   | Add/remove items from an array (in-place)      |
| `.sort()`     | Sort array elements (modifies original array)  |
| `.reverse()`  | Reverse the order of items (modifies original) |

---

## 1. `.push()`

🔹 Adds one or more items to the **end** of an array.

```javascript
const arr = [1, 2];
arr.push(3);
console.log(arr); // [1, 2, 3]
```

---

## 2. `.pop()`

🔹 Removes the **last** item from an array.

```javascript
const arr = [1, 2, 3];
arr.pop();
console.log(arr); // [1, 2]
```

---

## 3. `.unshift()`

🔹 Adds item(s) to the **start** of an array.

```javascript
const arr = [2, 3];
arr.unshift(1);
console.log(arr); // [1, 2, 3]
```

---

## 4. `.shift()`

🔹 Removes the **first** item of an array.

```javascript
const arr = [1, 2, 3];
arr.shift();
console.log(arr); // [2, 3]
```

---

## 5. `.map()`

🔹 Returns a new array by applying a function to each item.

```javascript
const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);
console.log(doubled); // [2, 4, 6]
```

---

## 6. `.filter()`

🔹 Returns a new array with items that match a condition.

```javascript
const nums = [1, 2, 3, 4];
const even = nums.filter(n => n % 2 === 0);
console.log(even); // [2, 4]
```

---

## 7. `.reduce()`

🔹 Reduces the array to a single value.

```javascript
const nums = [1, 2, 3, 4];
const sum = nums.reduce((acc, val) => acc + val, 0);
console.log(sum); // 10
```

---

## 8. `.forEach()`

🔹 Executes a function for each item (no return value).

```javascript
["a", "b", "c"].forEach(val => console.log(val));
// Output: a b c
```

---

## 9. `.find()`

🔹 Returns the **first** matching element.

```javascript
const nums = [3, 5, 8, 10];
const found = nums.find(n => n > 5);
console.log(found); // 8
```

---

## 10. `.includes()`

🔹 Checks if array contains a specific value.

```javascript
const fruits = ["apple", "banana"];
console.log(fruits.includes("banana")); // true
```

---

## 11. `.indexOf()`

🔹 Returns the index of the value or -1 if not found.

```javascript
const letters = ["a", "b", "c"];
console.log(letters.indexOf("b")); // 1
```

---

## 12. `.concat()`

🔹 Merges two or more arrays.

```javascript
const a = [1, 2];
const b = [3, 4];
const merged = a.concat(b);
console.log(merged); // [1, 2, 3, 4]
```

---

## 13. `.slice()`

🔹 Returns a shallow copy from part of the array.

```javascript
const nums = [0, 1, 2, 3, 4];
const sliced = nums.slice(1, 4);
console.log(sliced); // [1, 2, 3]
```

---

## 14. `.splice()`

🔹 Add/remove items at a specific index (modifies original).

```javascript
const nums = [1, 2, 5];
nums.splice(2, 0, 3, 4);
console.log(nums); // [1, 2, 3, 4, 5]
```

---

## 15. `.sort()`

🔹 Sorts items in place (default is string sort).

```javascript
const nums = [3, 1, 2];
nums.sort();
console.log(nums); // [1, 2, 3] (after using sort with compare function)
```

```javascript
// Custom numeric sort
nums.sort((a, b) => a - b);
```

---

## 16. `.reverse()`

🔹 Reverses the array (in place).

```javascript
const nums = [1, 2, 3];
nums.reverse();
console.log(nums); // [3, 2, 1]
```

---

✅ Combine methods like `.map().filter().reduce()` for clean functional code.
✅ Use `.slice()` and `.concat()` for non-mutating changes.
✅ Use `.splice()`, `.sort()`, and `.reverse()` carefully (they mutate the original array).
