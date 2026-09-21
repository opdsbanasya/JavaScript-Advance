# 📌 JavaScript Events 🚀

## 🎉 Intro to Events  
Events are user interactions like clicks, keypresses, or mouse movements that trigger JavaScript code execution.  

## ⚡ `this` Inside `addEventListener` Callback  
- Inside a regular function, `this` refers to the element that received the event.  
- Inside an arrow function, `this` refers to the outer lexical scope.  

**Example:**  
```javascript
button.addEventListener("click", function() {
  console.log(this); // Refers to the button element
});
```

---

## 🔁 Add Events to Multiple Elements  
Use `forEach()` to attach an event to multiple elements.  

**Example:**  
```javascript
document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => console.log("Button Clicked!"));
});
```

---

## 🎭 Event Object (`event`)  
The event object contains details about the triggered event.  

**Example:**  
```javascript
document.addEventListener("click", (event) => {
  console.log(event.type);  // click
  console.log(event.target); // Element that was clicked
});
```

---

## 🛠️ How Event Listeners Work  
- `addEventListener("event", callback, useCapture)`: Adds an event listener.  
- `removeEventListener("event", callback)`: Removes an event listener.  

**Example:**  
```javascript
function handleClick() {
  console.log("Clicked!");
}
button.addEventListener("click", handleClick);
button.removeEventListener("click", handleClick);
```

---

## 🎯 Event Bubbling vs Capturing  
1. **Event Bubbling**: Event propagates from the target element **up** to ancestors.  
2. **Event Capturing**: Event propagates **down** from ancestors to the target element.  

**Example:**  
```javascript
document.body.addEventListener("click", () => console.log("Body Clicked!"), true); // Capturing phase
document.querySelector("button").addEventListener("click", () => console.log("Button Clicked!")); // Bubbling phase

e.preventDefault() // prevents the default action of an event. add it to callback function of event listener.
```

---

## 🚀 Event Delegation  
Use event delegation to handle multiple elements efficiently.  

**Example:**  
```javascript
document.querySelector(".parent").addEventListener("click", (event) => {
  if (event.target.matches(".child")) {
    console.log("Child Clicked!");
  }
});
```

---

## 🛠️ More Events  
- `keydown`, `keyup`, `keypress`: Detect key events.  
- `mouseover`, `mouseout`: Detect mouse hover.  
- `submit`: Form submission event.  
- `change`: Detect input changes.  
- `focus`, `blur`: Detect input focus changes.  

---

## 🎨 Create a Project Using Event Delegation  
🔹 **Task**: Create a dynamic to-do list using event delegation.  

**Example:**  
```javascript
document.querySelector("#todo-list").addEventListener("click", (event) => {
  if (event.target.matches(".delete-btn")) {
    event.target.parentElement.remove();
  }
});
```

---

This cheatsheet gives you a solid understanding of JavaScript events! 🚀 Let me know if you need more explanations or examples. 😊