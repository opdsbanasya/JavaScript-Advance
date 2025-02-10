## Functions in JavaScript ✨🚀🔥

## 🎯 Function Declaration
A function declaration defines a named function that can be used before its definition due to **hoisting**.
```javascript
function greet() {
  console.log("Hello, world!");
}
greet();
```

## 💡 Function Expression
A function expression assigns an **anonymous** function to a variable. 
```javascript
const greet = function() {
  console.log("Hello, world!");
};
greet();
```

## ⚡ Arrow Functions
Arrow functions provide a shorter syntax and automatically bind `this`. 
```javascript
const add = (a, b) => a + b;
console.log(add(2, 3));
```

## 🔄 Function Declarations Are Hoisted
Function declarations are **hoisted**, meaning they can be called before their definition. 
```javascript
greet(); // ✅ Works due to hoisting
function greet() {
  console.log("Hello!");
}
```
🚫 However, function expressions and arrow functions are **not hoisted**. 
```javascript
sayHello(); // ❌ Error: Cannot access before initialization
const sayHello = function() {
  console.log("Hi!");
};
```

## 🏗️ Function Inside Function
Functions can be **nested** within another function. 
```javascript
function outer() {
  console.log("Outer function");
  function inner() {
    console.log("Inner function");
  }
  inner();
}
outer();
```

## 🔍 Lexical Scope
Inner functions can **access** variables of outer functions due to lexical scope. 
```javascript
function outer() {
  let outerVar = "I am outer";
  function inner() {
    console.log(outerVar);
  }
  inner();
}
outer();
```

## ⚠️ Block Scope vs Function Scope
- **`var` is function-scoped**
- **`let` & `const` are block-scoped** 
```javascript
function test() {
  if (true) {
    var a = 10;
    let b = 20;
    const c = 30;
  }
  console.log(a); // ✅ Accessible
  console.log(b); // ❌ Error
  console.log(c); // ❌ Error
}
test();
```

## 🛠️ Default Parameters
Assign default values to parameters to prevent `undefined` values. 
```javascript
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}
greet(); // "Hello, Guest!"
greet("Alice"); // "Hello, Alice!"
```

## 📦 Rest Parameters
Rest parameters allow **multiple arguments** to be collected into an array. 
```javascript
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4, 5));
```

## 🎭 Parameter Destructuring
Extract values directly from objects/arrays in function parameters. 
```javascript
const person = { name: "John", age: 25 };
function display({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}
display(person);
```

## 🔄 Brief Intro to Callback Functions
A function passed as an argument to another function is called a **callback function**. 
```javascript
function greet(name, callback) {
  console.log(`Hello, ${name}`);
  callback();
}
greet("Alice", () => console.log("How are you?"));
```
🎓 _Callback functions will be covered in detail later._ 

## 🔗 Functions Returning Functions
A function can return another function. 
```javascript
function multiplier(factor) {
  return function (num) {
    return num * factor;
  };
}
const double = multiplier(2);
console.log(double(5)); // 10
```