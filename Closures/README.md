# 🔒 Closures  

## 🔹 What is a Closure?  
A **closure** is a function that **remembers the variables from its outer scope** even after the outer function has finished execution.  

💡 **Think of it as a function bundled together with its lexical environment!**  

---

## 📌 Closure Example 1: Basic Closure  
```javascript
function outer() {
  let count = 0; // Private variable

  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();
counter(); // 1
counter(); // 2
counter(); // 3
```
✅ **Here’s what's happening:**  
- The `inner` function **remembers** the `count` variable from `outer()`, even after `outer()` has finished execution.  

---

## 📌 Closure Example 2: Function with Parameters  
```javascript
function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // 10

const triple = multiplier(3);
console.log(triple(5)); // 15
```
✅ **Here’s what's happening:**  
- `double` remembers `factor = 2`, and `triple` remembers `factor = 3`, even though `multiplier()` has finished execution.  

---

## 📌 Closure Example 3: Private Variables (Encapsulation)  
```javascript
function createCounter() {
  let count = 0;

  return {
    increment() {
      count++;
      console.log(count);
    },
    decrement() {
      count--;
      console.log(count);
    },
    getCount() {
      return count;
    }
  };
}

const counter = createCounter();
counter.increment(); // 1
counter.increment(); // 2
console.log(counter.getCount()); // 2
counter.decrement(); // 1
```
✅ **Why is this useful?**  
- `count` **cannot** be accessed directly from outside.  
- **Encapsulation**: The closure keeps `count` **private** while still allowing controlled access.  

---

## 🚀 Why Use Closures?  
✔ **Data Encapsulation** (Hide variables and control access)  
✔ **Function Factories** (Create reusable functions dynamically)  
✔ **Maintaining State** (Remember values between function calls)  

---

⚠ **Closures Can Cause Memory Issues**  
- If not handled properly, closures **retain memory** and can lead to **memory leaks**.  
- Always be mindful when using closures inside event listeners, loops, or long-running functions.  