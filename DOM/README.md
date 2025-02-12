## DOM Tutorial
# JavaScript DOM Manipulation Cheatsheet 🚀

## 📌 Async vs Defer
- **Async**: Downloads script **asynchronously** and executes it **immediately** when ready.
- **Defer**: Downloads script **asynchronously** but executes it **after** the HTML is fully parsed.

```html
<script src="script.js" async></script>
<script src="script.js" defer></script>
```

---

## 🎯 Selecting Elements
### **🔍 Select an element by ID**
```javascript
document.getElementById("myElement");
```

### **🆕 querySelector**
- Selects the **first** matching element
```javascript
document.querySelector(".className");
```

### **📌 Select multiple elements & loop through them**
```javascript
document.querySelectorAll(".className").forEach(el => console.log(el));
```

---

## ✏️ Modifying Content
### **📝 textContent vs innerText**
- `textContent`: Gets **all** text (even hidden ones)
- `innerText`: Gets **only visible** text

```javascript
document.getElementById("myElement").textContent = "Hello!";
document.getElementById("myElement").innerText = "Hi!";
```

### **🖥 innerHTML**
- Allows setting **HTML content** inside an element.
```javascript
document.getElementById("myElement").innerHTML = "<strong>Bold Text</strong>";
```

---

## 🎨 Changing Styles
```javascript
document.getElementById("myElement").style.color = "red";
document.getElementById("myElement").style.backgroundColor = "yellow";
```

---

## 🎭 Get & Set Attributes
```javascript
document.getElementById("myImage").getAttribute("src");
document.getElementById("myImage").setAttribute("alt", "New Image");
```

---

## 🌳 Understanding the DOM Tree
- **Root Node**: `document`
- **Element Nodes**: `<div>`, `<p>`, etc.
- **Text Nodes**: Contain text inside elements

```javascript
console.log(document.documentElement); // Entire HTML document
console.log(document.body); // Body tag
```

---

## 📂 classList Manipulation
```javascript
document.getElementById("myElement").classList.add("newClass");
document.getElementById("myElement").classList.remove("oldClass");
document.getElementById("myElement").classList.toggle("toggleClass");
```

---

## 🆕 Adding Elements to the Page
### **✏️ Create Elements**
```javascript
let newDiv = document.createElement("div");
newDiv.textContent = "New Element";
document.body.appendChild(newDiv);
```

### **📌 Insert Adjacent Elements**
```javascript
document.getElementById("myElement").insertAdjacentHTML("beforeend", "<p>Inserted Element</p>");
```

### **🔄 Clone Nodes**
```javascript
let clone = document.getElementById("myElement").cloneNode(true);
document.body.appendChild(clone);
```

### **📌 More Methods to Add Elements**
```javascript
document.body.prepend(newDiv); // Adds at beginning
document.body.append(newDiv); // Adds at end
document.getElementById("myElement").before(newDiv); // Before element
document.getElementById("myElement").after(newDiv); // After element
```

---

## 📏 Getting Element Dimensions
```javascript
let box = document.getElementById("myElement");
console.log(box.offsetWidth, box.offsetHeight); // Includes padding & border
console.log(box.clientWidth, box.clientHeight); // Only content & padding
console.log(box.getBoundingClientRect()); // Get precise dimensions & position
```

## DOM API