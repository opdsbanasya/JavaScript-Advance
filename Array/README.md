# 🚀 JavaScript Arrays Cheatsheet 📜

## **🛠️ Introduction to Arrays**
An **📦 array** in JavaScript is a collection of elements stored in a single variable. It can hold different data types, including 🔢 `numbers`, ✍️ `strings`, 🏗️ `objects`, and even other 📦 `arrays` (nested arrays). It is a 🔗 `reference type`. It has an 🔢 index number to access values. Array is `zero-based index`.


### **📝 Creating an Array:**
```js
let numbers = [1, 2, 3, 4, 5];  // 🔢 Array of numbers
let fruits = ["🍎", "🍌", "🥭"];  // 🍏 Array of strings
let mixed = [1, "hello", true, { key: "value" }];  // 🔄 Mixed array
```

---

## **🔄 Array Methods**
### **📥 Push, 📤 Pop, ⏪ Shift, ⏩ Unshift**
| Method | Description | Example |
|--------|------------|---------|
| `.push()` | ➕ Adds element(s) to the **end** of an array | `arr.push(6);` |
| `.pop()` | ❌ Removes the **last** element from an array | `arr.pop();` |
| `.unshift()` | ➡️ Adds element(s) to the **beginning** of an array | `arr.unshift(0);` |
| `.shift()` | ⬅️ Removes the **first** element from an array | `arr.shift();` |

**Example:**
```js
let arr = [1, 2, 3];
arr.push(4);   // [1, 2, 3, 4]
arr.pop();     // [1, 2, 3]
arr.unshift(0); // [0, 1, 2, 3]
arr.shift();   // [1, 2, 3]
```

---

## **🆚 Primitive vs Reference Data Types**
### **📍 Primitive Data Types:**
- 🗂️ **Stored in stack memory**
- 🔄 **Immutable** (modifications create a new value)
- Examples: `🔢 Number`, `✍️ String`, `✅ Boolean`, `null`, `undefined`, `🔣 Symbol`

```js
let a = 10;
let b = a;
b = 20;
console.log(a); // 10 (unchanged)
```

### **📌 Reference Data Types:**
- 🗄️ **Stored in heap memory**
- 🔁 **Mutable** (changes affect the original object/array)
- Examples: `📦 Array`, `🏗️ Object`, `🛠️ Function`

```js
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log(arr1); // [1, 2, 3, 4] (changed)
```

---

## **📑 Clone Array & Spread Operator**
### **📋 Cloning Methods:**
- Using `.slice()` ✂️
- Using `[...spread]` 📌
- Using `.concat()` 🔗

```js
let original = [1, 2, 3];
let copy1 = original.slice();
let copy2 = [...original];
let copy3 = original.concat();

copy2.push(4);
console.log(original); // [1, 2, 3] (unchanged)
```

---

## **🚀 Higher Order Array Methods**

### **📌 `map()`** - Transforms each element
```js
let numbers = [1, 2, 3, 4];
let squared = numbers.map(num => num * num);
console.log(squared); // [1, 4, 9, 16]
```

### **📌 `filter()`** - Filters elements based on condition
```js
let ages = [12, 18, 25, 30, 16];
let adults = ages.filter(age => age >= 18);
console.log(adults); // [18, 25, 30]
```

### **📌 `reduce()`** - Accumulates values
```js
let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 10
```

### **📌 `find()`** - Finds first match
```js
let numbers = [5, 12, 8, 130, 44];
let found = numbers.find(num => num > 10);
console.log(found); // 12
```

### **📌 `some()`** - Checks if any element matches condition
```js
let numbers = [1, 2, 3, 4];
let hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // true
```

### **📌 `every()`** - Checks if all elements match condition
```js
let numbers = [2, 4, 6, 8];
let allEven = numbers.every(num => num % 2 === 0);
console.log(allEven); // true
```

### **📌 `sort()`** - Sorts array (default: lexicographical order)
```js
let numbers = [4, 2, 9, 1];
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 2, 4, 9]
```

### **📌 `reverse()`** - Reverses array
```js
let arr = [1, 2, 3];
arr.reverse();
console.log(arr); // [3, 2, 1]
```

### **📌 `splice()`** - Removes or replaces elements
```js
let arr = ["a", "b", "c", "d"];
arr.splice(1, 2, "x", "y");
console.log(arr); // ["a", "x", "y", "d"]
```

---

## **🔄 Loops in Arrays**

### **🔢 For Loop**
```js
let nums = [1, 2, 3];
for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}
```

### **🚫 Using `const` for Arrays**
`const` prevents reassigning the array itself but allows modifications within it.
```js
const arr = [1, 2, 3];
arr.push(4); // ✅ Allowed
arr = [5, 6, 7]; // ❌ Error: Assignment to constant variable
```

### **🔁 While Loop**
```js
let i = 0;
while (i < nums.length) {
    console.log(nums[i]);
    i++;
}
```

### **🔄 For...of Loop (Iterates over values)**
```js
for (let num of nums) {
    console.log(num);
}
```

### **📌 For...in Loop (Iterates over indexes)**
```js
for (let index in nums) {
    console.log(index, nums[index]);
}
```

# JavaScript

## 📌 Array others Methods 
In JavaScript, arrays have many 🛠️ `built-in methods` to perform different operations. Some common methods are:
- **🔄 forEach()**: Iterates over the array.
```javascript
const numbers = [4,5,6,2];
numbers.forEach((number) => {
  console.log(number);
});
```

- **📌 map()**: Iterates over the array and returns a new array.
```javascript
const numbers = [4,5,6,2];
const newNumbers = numbers.map((number) => number * 2);
console.log(newNumbers);
```

- **🎯 filter()**: Iterates over the array and returns a new array with elements that match a condition.
```javascript
const numbers = [4,5,6,2];
const newNumbers = numbers.filter((number) => number > 4);
console.log(newNumbers);
```

- **➕ reduce()**: Iterates over the array and returns a single value.
```javascript
const sum = numbers.reduce((accumulator, currValue) => accumulator + currValue, 100);
console.log(sum);
```

- **🔀 sort()**: Sorts the array. The sort method sorts based on `ASCII values`.
```javascript
const numbers = [4,5,6,2];
numbers.sort();
```
You can sort in `ascending order` by passing a function in the sort method:
```javascript
const nums = [5,8,6,41,8,1,5];
nums.sort((a, b) => a - b); // For descending order -> b - a
```

- **🔎 find()**: Finds the first element in the array that satisfies a condition.
```javascript
const numbers = [4,5,6,2];
const found = numbers.find((number) => number > 4);
console.log(found);
```

- **✅ every()**: Checks if every element in the array satisfies a condition.
```javascript
const numbers = [4,5,6,2];
const isEvery = numbers.every((number) => number > 4);
console.log(isEvery);
```

- **⚡ some()**: Checks if at least one element in the array satisfies a condition.
```javascript
const numbers = [4,5,6,2];
const isSome = numbers.some((number) => number > 4);
console.log(isSome);
```

- **🔍 includes()**: Checks if an element is present in the array.
```javascript
const numbers = [4,5,6,2];
const isInclude = numbers.includes(4);
console.log(isInclude);
```

- **📝 fill()**: Fills the array with a static value.
```javascript
const numbers = [4,5,6,2];
numbers.fill(0);
numbers.fill(0,2,5); // value, start, end
```

- **🛠️ splice()**: Adds or removes elements from the array.
```javascript
const gArr = ['item','item2','item3'];

// ❌ Delete: 1st arg -> index, 2nd arg -> number of elements to delete
const delItem = gArr.splice(1,2);

// ➕ Insert: 1st arg -> index, 2nd arg -> number of elements to delete, 3rd arg -> new element
gArr.splice(1,0,'newItem');

// 🔄 Both: 1st arg -> index, 2nd arg -> number of elements to delete, 3rd arg -> new elements
gArr.splice(1,3,"another","JINC","jai ho");
```

