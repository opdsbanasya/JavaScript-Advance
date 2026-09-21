# 📦 ES6 Modules Cheatsheet  

## 🔹 What are ES6 Modules?  
ES6 modules allow you to **split JavaScript code** into **separate files** and import/export functionality when needed. This makes the code **more organized, reusable, and maintainable**.  

---

## 📤 Exporting from a Module  
You can export **variables, functions, or classes** from a module.  

### 1️⃣ **Named Exports** (Multiple exports possible)  
```javascript
// 📁 math.js
export const PI = 3.14159;

export function add(a, b) {
  return a + b;
}
```

### 2️⃣ **Default Export** (Only one per file)  
```javascript
// 📁 greet.js
export default function greet(name) {
  return `Hello, ${name}!`;
}
```

---

## 📥 Importing in Another File  
Use `import` to bring in exported values.  

### 1️⃣ **Import Named Exports**  
```javascript
// 📁 main.js
import { PI, add } from "./math.js";

console.log(PI); // 3.14159
console.log(add(2, 3)); // 5
```

👉 **Import with Alias:**  
```javascript
import { add as sum } from "./math.js";
console.log(sum(4, 5)); // 9
```

### 2️⃣ **Import Default Export**  
```javascript
// 📁 main.js
import greet from "./greet.js";

console.log(greet("Alice")); // Hello, Alice!
```

### 3️⃣ **Import Everything**  
```javascript
import * as math from "./math.js";

console.log(math.PI); // 3.14159
console.log(math.add(10, 5)); // 15
```

---

## 🚀 Why Use ES6 Modules?  
✅ **Better Code Organization**  
✅ **Avoid Global Namespace Pollution**  
✅ **Easier Maintenance & Debugging**  
✅ **Code Reusability**  

---

## ⚠️ Important Notes  
- **Modules work in modern browsers** but need `type="module"` in HTML:  
  ```html
  <script type="module" src="main.js"></script>
  ```
- **Modules run in strict mode (`"use strict"`) by default.**  
- **File paths must be relative (e.g., `./module.js`) in `import` statements.**  
- **Use a local server (Live Server/Node.js) to load modules, as direct file imports may cause CORS issues.**  

---

**Congratulations** 
**Now you know javascript in Great Details**
**What next ?**
- Multiple Projects
- Interview Questions
- Web Performance
- Testing