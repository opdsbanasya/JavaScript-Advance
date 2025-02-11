# OOPs
# JavaScript OOPs Cheatsheet 🚀

## 📌 Class Keyword
- Introduced in ES6, provides a blueprint for creating objects.
- A syntactical sugar over constructor functions.

**Example:**
```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}
let user = new Person('Alice', 25);
user.greet(); // Hello, my name is Alice.
```

---

## 🏆 Super Keyword
- Used to call methods from a parent class.
- Must be called in child class constructor before using `this`.

**Example:**
```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Calls Animal's constructor
    this.breed = breed;
  }
  speak() {
    super.speak(); // Calls parent class method
    console.log(`${this.name} barks.`);
  }
}
let dog = new Dog('Buddy', 'Golden Retriever');
dog.speak();
```

---

## 🔄 Method Overriding
- Allows a subclass to provide a specific implementation of a method already defined in the parent class.

**Example:**
```javascript
class Parent {
  showMessage() {
    console.log("Message from Parent class");
  }
}

class Child extends Parent {
  showMessage() {
    console.log("Message from Child class");
  }
}
let obj = new Child();
obj.showMessage(); // Message from Child class
```

---

## 🎭 Getters & Setters
- Used to define computed properties.
- Allows encapsulation of object properties.

**Example:**
```javascript
class Circle {
  constructor(radius) {
    this._radius = radius;
  }
  get radius() {
    return this._radius;
  }
  set radius(value) {
    if (value > 0) this._radius = value;
    else console.log("Radius must be positive!");
  }
}
let c = new Circle(5);
c.radius = 10;
console.log(c.radius); // 10
```

---

## ⚡ Static Methods & Properties
- Static methods/properties belong to the class, not instances.
- Can be accessed without creating an instance.

**Example:**
```javascript
class MathUtil {
  static square(n) {
    return n * n;
  }
  static PI = 3.14159;
}
console.log(MathUtil.square(4)); // 16
console.log(MathUtil.PI); // 3.14159
```

