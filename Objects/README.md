## Objects in JavaScript
# JavaScript Objects Cheatsheet

## 📝 Introduction to Objects
Objects in JavaScript are collections of key-value pairs. They are used to store structured data and can contain different data types, including other objects and functions.
```javascript
const person = {
  name: "John",
  age: 25,
  isStudent: true
};
console.log(person.name); // John
```

## 🎯 Dot vs Bracket Notation
- **Dot Notation (.)** is used when the property name is known and does not contain special characters.
- **Bracket Notation ([])** is useful when the property name is dynamic or contains special characters.
```javascript
const obj = { name: "Alice", "user-role": "admin" };
console.log(obj.name); // Alice
console.log(obj["user-role"]); // admin
```

## 🔄 Iterating Over Objects
You can iterate over an object's properties using:
- `for...in` loop
- `Object.keys(obj)`
- `Object.values(obj)`
- `Object.entries(obj)`
```javascript
const user = { name: "Sam", age: 30, city: "NY" };
for (let key in user) {
  console.log(`${key}: ${user[key]}`);
}

console.log(Object.keys(user)); // ["name", "age", "city"]
console.log(Object.values(user)); // ["Sam", 30, "NY"]
console.log(Object.entries(user)); // [["name", "Sam"], ["age", 30], ["city", "NY"]]
```

## 🎭 Computed Properties
Computed properties allow you to dynamically define property names.
```javascript
const key = "email";
const user = {
  name: "John",
  [key]: "john@example.com"
};
console.log(user.email); // john@example.com
```

## 🌍 Spread Operator in Objects
The spread operator (`...`) allows copying properties from one object to another.
```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log(obj2); // { a: 1, b: 2, c: 3 }
```

## 🛠 Object Destructuring
Destructuring makes it easy to extract properties from an object.
```javascript
const user = { name: "Sara", age: 27 };
const { name, age } = user;
console.log(name); // Sara
console.log(age); // 27
```

## 📦 Objects Inside an Array
An array can contain multiple objects.
```javascript
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];
console.log(users[0].name); // Alice
```

## 🏗 Nested Destructuring
Destructuring can also be applied to nested objects.
```javascript
const user = {
  name: "Mike",
  address: { city: "LA", zip: "90001" }
};
const { name, address: { city, zip } } = user;
console.log(city); // LA
```

## 🔥 Additional Important Methods
### 📌 Object.assign()
Copies properties from one object to another.
```javascript
const target = { a: 1 };
const source = { b: 2 };
const result = Object.assign(target, source);
console.log(result); // { a: 1, b: 2 }
```

### 📌 Object.freeze() & Object.seal()
- `Object.freeze(obj)`: Prevents modifications (add, delete, update) to the object.
- `Object.seal(obj)`: Allows updates but prevents adding/removing properties.
```javascript
const obj = { name: "Sam" };
Object.freeze(obj);
obj.name = "John"; // No effect
console.log(obj.name); // Sam
```

### 📌 Object.hasOwnProperty()
Checks if an object has a specific property.
```javascript
const obj = { name: "Emma" };
console.log(obj.hasOwnProperty("name")); // true
console.log(obj.hasOwnProperty("age")); // false
```

### 📌 Object.keys(), Object.values(), Object.entries()
Used to get keys, values, and key-value pairs from an object.
```javascript
const obj = { name: "Liam", age: 30 };
console.log(Object.keys(obj)); // ["name", "age"]
console.log(Object.values(obj)); // ["Liam", 30]
console.log(Object.entries(obj)); // [["name", "Liam"], ["age", 30]]
```

# Questions 🚀
### 1. **Problem Statement**

You are given an array of objects representing students. Each object has the following properties:
- `name` (string): The name of the student.
- `age` (number): The age of the student.
- `grades` (array of numbers): An array of the student's grades.

Write a function `getTopStudents` that takes two arguments:
1. `students` (array): An array of student objects.
2. `threshold` (number): A grade threshold.

The function should return an array of names of students whose **average grade** is greater than or equal to the `threshold`. The returned array should be sorted alphabetically by the students' names.

---

### **Example**

```javascript
const students = [
    { name: "Alice", age: 20, grades: [85, 90, 88] },
    { name: "Bob", age: 21, grades: [75, 80, 78] },
    { name: "Charlie", age: 19, grades: [95, 92, 98] },
    { name: "Diana", age: 22, grades: [88, 85, 90] }
];

console.log(getTopStudents(students, 90));
// Output: ["Charlie", "Diana"]
```
