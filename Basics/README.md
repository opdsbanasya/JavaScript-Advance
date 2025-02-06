# Basics of Programming in JavaScript 🚀
## Hello world program 👋
To print hello world in JavaScript, we can use `console.log()` function. 
```javascript
console.log("Hello World");
```

## Declare variable using var 📦
Variable are used to store data. To declare a variable in JavaScript, we can use `var` keyword. variable is declared by let can be change. Syntax is: `var variable_name = value;`
```javascript
var name = "Ajay";
console.log(name);
```

## More about variable 📦
**Variable Naming Rules**: 
- Variable name can contain `letters`(`a-zA-Z`), `digits`(`0-9`), `underscore`(`_`) and `dollar sign`(`$`).
- Variable name can't start with a digit.
- Variable name can't contain spaces.
- Variable name can't be a reserved keyword.

## Let 📦
`let` is a new way to declare variable is `JavaScript`. It is `block scoped`. Block scope means, variable declared using `let` is only available in the `block` where it is declared. Once a variable is declared by `let` can't be `declared` but can `reinitialize`. Syntax is: `let variable_name = value;`
```javascript
let name = "Kumar Verma";
console.log(name);
```

## Const 📦
`const` is used to declare constant variable in JS. Once a variable is declared using `const` keyword it can't be changed. Syntax is: `const variable_name = value;`
```javascript
const number = 513;
console.log(number);
```

##  String 🏷️ Indexing
- **What**: Access individual characters in a string using their position (index).
- **Why**: To manipulate or extract specific parts of a string.
- **Syntax**: `string[index]`
- **Example**:
  ```js
  let str = "Hello";
  console.log(str[0]); // H
  console.log(str[str.length - 1]); // o
  ```
- **📌 Use Case:** Accessing characters in a string.

## Useful String ✂️ Methods
- `.length` 📏 - Returns string length.
- `.toUpperCase()` & `.toLowerCase()` 🔠 - Changes case.
- `.trim()` ✂️ - Removes whitespace.
- `.slice(start, end)` 🍕 - Extracts part of a string.
- `.replace(old, new)` 🔄 - Replaces substring.
- `.includes(substring)` 🔍 - Checks existence.
  ```js
  let str = "Hello World";
  console.log(str.length); // 11
  console.log(str.toUpperCase()); // "HELLO WORLD"
  console.log(str.toLowerCase()); // "hello world"
  console.log(str.indexOf("World")); // 6
  console.log(str.slice(6, 11)); // "World"
  ```
- **📌 Use Case:** String manipulation, validation.

## Template Strings 📝
- **What**: Embed expressions inside strings using backticks.
- **Why**: To create dynamic strings easily.
- **Syntax**: `` `string ${expression}` ``
- **Example**:
  ```js
  let name = "John";
  console.log(`Hello, ${name}!`); // Hello, John!
  ```
- **📌 Use Case:** Easier string formatting.

## Null, Undefined, BigInt, typeof 🤷‍♂️
- **Null**: Represents an intentional absence of value.
- **Undefined**: A variable declared but not assigned.
- **BigInt**: Used for very large integers (beyond `Number` limits).
- **typeof**: Returns the type of a variable.
- **Examples**:
  ```javascript
  let a = null;
  let b;
  let c = 123n; // BigInt
  console.log(typeof a); // "object"
  console.log(typeof b); // "undefined"
  console.log(typeof c); // "bigint"
  ```
- **📌 Use Case:** Type checking.

## Booleans & Comparison Operators ✅❌
- **What**: `true` or `false` values, and operators to compare values.
- **Why**: To make decisions based on conditions.
- **Operators**: `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`
- **Examples**:
  ```javascript
  console.log(5 > 3); // true
  console.log(5 === "5"); // false (strict equality)
  ```
- **📌 Use Case:** Conditional checks.

## Truthy & Falsy Values ⚖️
- **What**: Values that evaluate to `true` or `false` in a boolean context.
- **Falsy Values**: `false`, `0`, `""`, `null`, `undefined`, `NaN`
- **Truthy Values**: Everything else.
- **Example**:
  ```js
  if ("hello") console.log("Truthy");
  ```
- **📌 Use Case:** Shorter conditional checks.

## If-Else Statement 🤔
- **Why**: To control the flow of your program.
- **Syntax**:
  ```javascript
  if (condition) {
    // code
  } else {
    // code
  }
  ```
- **📌 Use Case:** Decision-making.

## Ternary Operator 🎭
- **What**: A shorthand for `if-else`.
- **Why**: To write concise conditional logic.
- **Syntax**: `condition ? expr1 : expr2`
- **Example**:
  ```js
  let isMember = true;
  let discount = isMember ? "10% off" : "No discount";
  ```
- **📌 Use Case:** Shorter `if-else`.

## && (AND) || (OR) Operator 🔗
 **What**: Logical operators to combine conditions.
- **Why**: To check multiple conditions at once.
- **Examples**:
  ```javascript
  let a = true, b = false;
  console.log(a && b); // false
  console.log(a || b); // true
  ```
- **📌 Use Case:** Combining conditions.

## Nested If-Else 🏗️
- **What**: `if-else` statements inside other `if-else` statements.
- **Why**: To handle complex decision-making.
- **Example**:
  ```javascript
  let num = 10;
  if (num > 0) {
    if (num % 2 === 0) {
      console.log("Positive and Even");
    } else {
      console.log("Positive and Odd");
    }
  }
  ```
- **📌 Use Case:** Multiple conditions.

## Switch Statement 🔄
- **What**: A cleaner alternative to multiple `if-else` statements.
- **Why**: To handle multiple cases efficiently.
- **Syntax**:
  ```javascript
  switch (expression) {
    case value1:
      // code
      break;
    case value2:
      // code
      break;
    default:
      // code
  }
  ```
- **📌 Use Case:** Multiple possible values.

## While Loop 🔁
- **Why**: To iterate when the number of iterations is unknown.
- **Syntax**:
  ```javascript
  while (condition) {
    // code
  }
  ```
- **Example**:
  ```javascript
  let i = 0;
  while (i < 5) {
    console.log(i); // 0, 1, 2, 3, 4
    i++;
  }
  ```

## For Loop 🔄
- **Why**: To iterate when the number of iterations is known.
- **Syntax**:
  ```javascript
  for (initialization; condition; increment) {
    // code
  }
  ```
- **Example**:
  ```javascript
  for (let i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
  }
  ```
- **📌 Use Case:** Known iterations.

##  Break & Continue ⏭️⏹️
- **Break**: Exit a loop immediately.
- **Continue**: Skip the current iteration and move to the next.
- **Examples**:
  ```javascript
  for (let i = 0; i < 10; i++) {
    if (i === 5) break; // stops at 5
    if (i % 2 === 0) continue; // skips even numbers
    console.log(i); // 1, 3
  }
  ```
- **📌 Use Case:** Skipping or exiting loops.

## Do-While Loop 🔄
- **What**: Execute code at least once, then repeat while a condition is true.
- **Why**: To ensure the loop runs at least once.
- **Syntax**:
  ```javascript
  do {
    // code
  } while (condition);
  ```
- **Example**:
  ```javascript
  let i = 0;
  do {
    console.log(i); // 0
    i++;
  } while (i < 0);
  ```
- **📌 Use Case:** Runs at least once.


