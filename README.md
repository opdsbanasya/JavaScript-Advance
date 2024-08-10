# JavaScript

## array 
Array is `collection of Data type`. It is used to store `multiple values` in a single variable. It is `reference type`. It have index number to access the value. Array is `zero based index`.
In JavaScript, array have lot of `built-in methods` to perform different operations on array. There are some common methods are:
- `push()`: Add element at the end of the array.
```javascript
let arr = [1, 2, 3];
arr.push(4);
```
- `pop()`: Remove element from the end of the array.
```javascript
let arr = [1, 2, 3];
arr.pop();
```
- `shift()`: Remove element from the beginning of the array.
```javascript
let arr = [1, 2, 3];
arr.shift();
```
- `unshift()`: Add element at the beginning of the array.
```javascript

let arr = [1, 2, 3];
arr.unshift(0);
```
- forEach(): Iterate over the array.
```javascript
const numbers = [4,5,6,2];
numbers.forEach((number) => {
  console.log(number);
});
```
- map(): Iterate over the array and return new array.
```javascript
const numbers = [4,5,6,2];
const newNumbers = numbers.map((number) => {
  return number * 2;
});
console.log(newNumbers);
```
- filter(): Iterate over the array and return new array with condition.
```javascript
const numbers = [4,5,6,2];
const newNumbers = numbers.filter((number) => {
  return number > 4;
});
console.log(newNumbers);
```
- reduce(): Iterate over the array and return single value.
```javascript
const sum = numbers.reduce((accumulator, currValue)=> {
    // console.log(accumulator, currValue);
    return accumulator + currValue;
}, /*100-> yha accumulator ki initial value pass kr skate h*/)

// Working of reduce
// acc  curr    return
// 4    5       4+5
// 9    6       9+6
// 15   2       15+2
```

-sort(): Sort the array. sort method ASCII values ke according sort krta h
```javascript
const numbers = [4,5,6,2];
numbers.sort();
```
you can sort in ascending order by passing a function in sort method
```javascript
const nums = [5,8,6,41,8,1,5];
nums.sort((a,b)=>  a-b
// for desending -> b-a
) 
```


