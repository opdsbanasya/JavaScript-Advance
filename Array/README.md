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

- **🔀 sort()**: Sorts the array (default: lexicographical order). The sort method sorts based on `ASCII values`.
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

- **🔄 reverse()**: Reverses the array.
```javascript
const numbers = [4,5,6,2];
numbers.reverse(); // [2, 6, 5, 4]
```
- **🔀 concat()**: Concatenates two or more arrays.
```javascript
const numbers = [4,5,6,2];
const newNumbers = numbers.concat([7,8,9]);
console.log(newNumbers); // [4, 5, 6, 2, 7, 8, 9]
```

- **🔢 indexOf()**: Returns the index of the first occurrence of an element in the array.
```javascript
const numbers = [4,5,6,2];
const index = numbers.indexOf(5);
console.log(index); // 1
```

- **🔢 lastIndexOf()**: Returns the index of the last occurrence of an element in the array.
```javascript
const numbers = [4,5,6,2,5];
const index = numbers.lastIndexOf(5);
console.log(index); // 4
```

- **➕ join()**: Joins all elements of the array into a string.
```javascript
const numbers = [4,5,6,2];
const str = numbers.join('-');
console.log(str); // "4-5-6-2"
```

- **➖ slice()**: Returns a new array from a specified index. 
```javascript
const numbers = [4,5,6,2];
const newNumbers = numbers.slice(1,3);
console.log(newNumbers); // [5, 6]
```

