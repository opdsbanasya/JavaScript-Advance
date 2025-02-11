# More useful things 🚀

## 🔄 Iterables
- 📌 Data structures like **Arrays, Strings, Maps, and Sets** that can be looped using `for..of`.
- 📌 Have **indexed elements** and a `length` property (except Maps and Sets).

---

## 📦 Sets
- 🟢 A collection of **unique** values.
- ❌ No index, ❌ No key, ❌ No duplicate values.
- 📌 **Use Case**: Store **unique values** efficiently.

### 🔧 Methods
- ✨ `set.add(value)`: Adds a value.
- ❌ `set.delete(value)`: Removes a value.
- 🔍 `set.has(value)`: Checks if a value exists.
- 🗑️ `set.clear()`: Removes all elements.
- 🔢 `set.size`: Returns the count of values.
- 🔄 `set.keys() / set.values() / set.entries()`: Returns iterators.

**📌 Example:**
```javascript
let set = new Set([1, 2, 3]);
set.add(4);
console.log(set.has(2)); // true
set.delete(3);
console.log(set.size); // 3
```
- If there are same values in the array, it will be considered as one value.    
```js
const nums = new Set();
nums.add(['item1', 'item2']);
nums.add(['item1', 'item2']);
```

---

## 🗺️ Maps
- 🔑 **Key-value pairs** collection.
- 🔄 **Keys can be any type** (Unlike Objects, where keys are converted to strings).
- 📌 **Use Case**: Store structured **key-value** data.

### 🔧 Methods
- ✨ `map.set(key, value)`: Adds a key-value pair.
- 🔍 `map.get(key)`: Retrieves a value.
- ❌ `map.delete(key)`: Removes a key-value pair.
- 🔄 `map.has(key)`: Checks if a key exists.
- 🗑️ `map.clear()`: Removes all key-value pairs.
- 🔢 `map.size`: Returns the number of pairs.
- 🔄 `map.keys() / map.values() / map.entries()`: Returns iterators.

**📌 Example:**
```javascript
let map = new Map([["name", "Deepak"], ["age", 25]]);
map.set("city", "Jaipur");
console.log(map.get("name")); // Deepak
map.delete("age");
console.log(map.size); // 2
```

---

## 📦 Object.assign()
- 🔄 **Copies properties** from one or more objects to a target object.

**📌 Example:**
```javascript
let target = { a: 1 };
let source = { b: 2, c: 3 };
Object.assign(target, source);
console.log(target); // { a: 1, b: 2, c: 3 }
```

---

## 🤔 Optional Chaining `?.`
- 🛑 **Prevents errors** when accessing properties of `null` or `undefined`. There are `?.` operatoe is used.

**📌 Example:**
```javascript
let user = { name: "Alice", address: { city: "Paris" } };
console.log(user?.address?.city); // Paris
console.log(user?.contact?.phone); // undefined (no error)
```

