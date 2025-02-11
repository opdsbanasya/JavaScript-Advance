# Prototypal Inheritance 🚀

## 🔗 Prototypal Inheritance
- JavaScript uses **prototypes** to enable object inheritance.
- Objects inherit properties and methods from other objects.
- Each object has an internal `[[Prototype]]` property that links to another object.

---

## 🛠️ Methods
- Objects can have methods defined directly or inherited via prototype.
- Methods help in code reuse and memory efficiency.

```javascript
const animal = {
  speak() {
    console.log("Animal makes a sound");
  }
};

const dog = Object.create(animal);
dog.speak(); // Animal makes a sound
```

---

## 🔍 `this` Keyword & Window Object
- `this` refers to the object that is executing the function.
- In the **global scope**, `this` refers to the `window` object (in browsers).

```javascript
console.log(this === window); // true in browsers
```

Inside objects:
```javascript
const obj = {
  name: "JS",
  show() {
    console.log(this.name);
  }
};
obj.show(); // "JS"
```

---

## 📞 `call`, `apply`, and `bind` Methods
- **`call`**: Calls a function with a given `this` value and arguments.
- **`apply`**: Similar to `call`, but arguments are passed as an array.
- **`bind`**: Returns a new function with a bound `this`.

```javascript
function greet(greeting) {
  console.log(greeting + ", " + this.name);
}

const user = { name: "Alice" };
greet.call(user, "Hello"); // Hello, Alice
greet.apply(user, ["Hi"]); // Hi, Alice

const boundGreet = greet.bind(user);
boundGreet("Hey"); // Hey, Alice
```

---

## ⚠️ Some Warnings
- `this` inside a function depends on how the function is **called**, not where it is defined.
- Arrow functions do **not** have their own `this`; they inherit from their **lexical scope**.

```javascript
const obj = {
  value: 42,
  func: function() {
    setTimeout(() => console.log(this.value), 1000);
  }
};
obj.func(); // 42 (arrow function inherits `this`)
```

---

## 🎯 Short Syntax for Methods
- Methods inside objects can be written in a shorter syntax.

```javascript
const person = {
  name: "John",
  greet() {
    console.log("Hello, " + this.name);
  }
};
person.greet(); // Hello, John
```

---

## 🏭 Factory Functions & Memory Issues
- Factory functions return new objects without using `new`.
- Memory issue: Each instance gets a copy of methods, wasting memory.

```javascript
function createPerson(name) {
  return {
    name,
    greet() {
      console.log("Hi, " + this.name);
    }
  };
}

const p1 = createPerson("Alice");
const p2 = createPerson("Bob");
p1.greet(); // Hi, Alice
```

### 🚨 Problem: Methods are duplicated in each instance.
### ✅ Solution: Use `prototype`

```javascript
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() {
  console.log("Hi, " + this.name);
};

const p1 = new Person("Alice");
p1.greet(); // Hi, Alice
```

---

## 🔍 `__proto__` vs `[[Prototype]]`
- `__proto__` is a property that points to the object's prototype.
- `[[Prototype]]` is the internal link to an object's prototype.

```javascript
const obj = {};
console.log(obj.__proto__ === Object.prototype); // true
```

---

## 🏗️ `prototype` and Its Use
- Every function in JavaScript has a `prototype` property.
- Used to share methods across instances.

```javascript
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function() {
  console.log(this.name + " makes a sound");
};

const dog = new Animal("Dog");
dog.speak(); // Dog makes a sound
```

---

## ✨ `new` Keyword
- Creates a new object and sets its prototype.
- Calls the constructor function.

```javascript
function Car(brand) {
  this.brand = brand;
}
const myCar = new Car("Tesla");
console.log(myCar.brand); // Tesla
```

---

## 🏗️ Constructor Function with `new`
- Constructor functions help create multiple instances efficiently.

```javascript
function User(name, age) {
  this.name = name;
  this.age = age;
}
const user1 = new User("Alice", 30);
console.log(user1.name); // Alice
```

---

## 🔄 More on `__proto__` and `prototype`
- `__proto__` refers to the prototype of an object.
- `prototype` is a property of constructor functions.

```javascript
function Human() {}
console.log(Human.prototype); // Prototype object

const h = new Human();
console.log(h.__proto__ === Human.prototype); // true
```

