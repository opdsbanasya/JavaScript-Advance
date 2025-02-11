# ⚡ Asynchronous JavaScript 🚀  

## 🤔 Is JavaScript Synchronous or Asynchronous?  
JavaScript is **single-threaded** and executes code **synchronously** by default. However, it can handle **asynchronous** operations using:  
✔️ **Callbacks**  
✔️ **Promises**  
✔️ **Async/Await**  

---

## ⏳ `setTimeout()`  
Delays execution of a function.  

**Syntax:**  
```javascript
setTimeout(callback, delay);
```

**Example:**  
```javascript
setTimeout(() => {
  console.log("Executed after 2 seconds");
}, 2000);
```

---

## ⏳ `setTimeout()` with 0ms  
Even with `0ms`, it runs **after** the current execution finishes due to the **event loop**.  

**Example:**  
```javascript
console.log("Start");
setTimeout(() => console.log("Inside setTimeout"), 0);
console.log("End");

// Output: Start -> End -> Inside setTimeout
```

---

## 📌 Callback Queue (Task Queue)  
- Holds **asynchronous tasks** (`setTimeout`, `setInterval`, etc.).  
- Tasks wait in the queue until the **call stack is empty**.  
- The **event loop** moves tasks from the queue to the call stack when it's clear.  

---

## 🔁 `setInterval()` (Repeating Timer)  
Runs a function at fixed intervals.  

**Example:**  
```javascript
let count = 0;
let interval = setInterval(() => {
  console.log("Count:", count);
  count++;
  if (count === 5) clearInterval(interval); // Stops after 5 runs
}, 1000);
```

---

## 🛠️ Mini Project: Digital Clock ⏰  
```javascript
setInterval(() => {
  let now = new Date();
  console.log(now.toLocaleTimeString());
}, 1000);
```

---

## 🎭 Understanding Callbacks  
A **callback** is a function passed as an argument to another function and executed later.  

**Example:**  
```javascript
function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}

function afterGreet() {
  console.log("How are you?");
}

greet("Alice", afterGreet);
```

---

## 🔄 Callbacks in Asynchronous Programming  
Used to handle **delayed operations** like fetching data, animations, and timers.  

**Example:**  
```javascript
function fetchData(callback) {
  setTimeout(() => {
    console.log("Data received");
    callback();
  }, 2000);
}

fetchData(() => console.log("Processing data..."));
```

---

## 😵 Callback Hell & Pyramid of Doom  
Nested callbacks create **hard-to-read** code.  

**Example (Callback Hell 👎):**  
```javascript
setTimeout(() => {
  console.log("Task 1");
  setTimeout(() => {
    console.log("Task 2");
    setTimeout(() => {
      console.log("Task 3");
    }, 1000);
  }, 1000);
}, 1000);
```

**Solution: Use Promises or Async/Await ✅**  
```javascript
function task(delay, message) {
  return new Promise((resolve) => setTimeout(() => resolve(message), delay));
}

task(1000, "Task 1")
  .then(console.log)
  .then(() => task(1000, "Task 2"))
  .then(console.log)
  .then(() => task(1000, "Task 3"))
  .then(console.log);
```
