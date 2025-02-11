
# 🚀 Promises in JavaScript

## 🌟 Introduction to Promises  
A **Promise** is an object representing **the eventual completion or failure** of an asynchronous operation.  
- **States of a Promise:**  
  ✔️ `pending` → Initial state (neither resolved nor rejected)  
  ✔️ `fulfilled` → Operation completed successfully  
  ✔️ `rejected` → Operation failed  

**Syntax:**  
```javascript
let promise = new Promise((resolve, reject) => {
  // Perform async operation
  let success = true;
  if (success) {
    resolve("Operation Successful ✅");
  } else {
    reject("Operation Failed ❌");
  }
});
```

---

## 🛠️ Microtask Queue  
- **Promises use the Microtask Queue**, which has higher priority than the Callback Queue.  
- **Microtasks execute immediately after the current execution context finishes.**  

**Example:**  
```javascript
console.log("Start");

setTimeout(() => console.log("setTimeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");

// Output: Start -> End -> Promise -> setTimeout
```
---

## 🔄 Function That Returns a Promise  
**Example:**  
```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data received 📦");
    }, 2000);
  });
}

fetchData().then(console.log);
```

---

## ⏳ Promise with `setTimeout()`  
```javascript
function delayedMessage() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Hello after 2 seconds! ⏳"), 2000);
  });
}

delayedMessage().then(console.log);
```

---

## 🔗 `Promise.resolve()` & `.then()` Chaining  
- **`Promise.resolve(value)`** → Instantly resolves a promise with a given value.  
- `.then()` **chains multiple async steps**.  

**Example:**  
```javascript
Promise.resolve("Step 1 ✅")
  .then((msg) => {
    console.log(msg);
    return "Step 2 ✅";
  })
  .then(console.log);
```

---

## 🔄 Convert Callback Hell to Flat Code Using Promises  
**Callback Hell 👎**  
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

**Using Promises ✅**  
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

---

# 🌐 JavaScript Network Requests  

## 📡 Introduction to AJAX & HTTP Requests  
**AJAX (Asynchronous JavaScript and XML)** allows web pages to update dynamically **without reloading**.  
**HTTP Requests** communicate with a server using methods like:  
- `GET` → Retrieve data  
- `POST` → Send data  
- `PUT/PATCH` → Update data  
- `DELETE` → Remove data  

---

## 🔁 XHR (XMLHttpRequest) Requests  
**Creating an XHR Request:**  
```javascript
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1");
xhr.send();

xhr.onload = function () {
  if (xhr.status === 200) {
    console.log(JSON.parse(xhr.responseText)); // ✅ Success
  } else {
    console.error("Error:", xhr.status); // ❌ Error handling
  }
};
```

---

## 🚨 Error Handling in XHR Requests  
- **Handle network errors & timeouts**  
- Check `xhr.status` for response success/failure  
- Use `onerror` & `ontimeout`  

```javascript
xhr.onerror = function () {
  console.error("Network Error! ❌");
};

xhr.timeout = 5000; // Set timeout to 5s
xhr.ontimeout = function () {
  console.warn("Request Timed Out! ⏳");
};
```

---

## 🔗 XHR Request Chaining  
To make **multiple dependent requests**, call `send()` inside `onload`:  
```javascript
let xhr1 = new XMLHttpRequest();
xhr1.open("GET", "https://jsonplaceholder.typicode.com/users/1");
xhr1.send();

xhr1.onload = function () {
  if (xhr1.status === 200) {
    let user = JSON.parse(xhr1.responseText);
    console.log("User:", user);

    let xhr2 = new XMLHttpRequest();
    xhr2.open("GET", `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
    xhr2.send();

    xhr2.onload = function () {
      if (xhr2.status === 200) {
        console.log("User Posts:", JSON.parse(xhr2.responseText));
      }
    };
  }
};
```

---

## 📜 Promisifying XHR Requests & Chaining with `.then()`  
To avoid **callback hell**, wrap XHR in a Promise:  
```javascript
function fetchData(url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();

    xhr.onload = () => (xhr.status === 200 ? resolve(JSON.parse(xhr.responseText)) : reject("Error ❌"));
    xhr.onerror = () => reject("Network Error ❌");
  });
}

// Promise chaining
fetchData("https://jsonplaceholder.typicode.com/users/1")
  .then((user) => {
    console.log("User:", user);
    return fetchData(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
  })
  .then((posts) => console.log("User Posts:", posts))
  .catch(console.error);
```

---

## 🚀 Fetch API  
A **modern alternative to XHR**, supports **Promises & cleaner syntax**.  

```javascript
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json()) // Convert response to JSON
  .then((data) => console.log(data)) // Handle data
  .catch((error) => console.error("Fetch Error ❌", error));
```

---

## ⚠️ Error Handling in Fetch API  
Fetch **does NOT reject on HTTP errors (like 404)**, so manually check `response.ok`.  
```javascript
fetch("https://jsonplaceholder.typicode.com/invalid-url")
  .then((response) => {
    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
    return response.json();
  })
  .then(console.log)
  .catch(console.error);
```

---

## ✨ Consuming Promises with `async` & `await`  
`async` functions allow **cleaner & readable** asynchronous code.  

```javascript
async function getUserData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    if (!response.ok) throw new Error("HTTP Error ❌");

    let user = await response.json();
    console.log("User:", user);

    let postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
    let posts = await postsResponse.json();
    console.log("User Posts:", posts);
  } catch (error) {
    console.error(error);
  }
}

getUserData();
```
