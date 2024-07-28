// iterables -> those data structures which can be looped over using for..of loop
// like arrays, strings, maps, sets, arguments, DOM node lists, etc.

// array like Object with indexed elements and jinke pass length hoti hai like string

const item = ['item1', 'item2', 'item3'];
// 1.
// Set -> it is also iterable
// No index, no key, no duplicate
// can unordered

const nums = new Set();
nums.add(1);
nums.add(2);
nums.add(['item1', 'item2']);
nums.add(['item1', 'item2']);
// agar square bracket me same value hai to wo bhi alag alag count hoga bcoz unka reference alag hota hai
// nums.has(elem) // ye return karega true ya false

for(let num of nums){
    // console.log(num);
}

// use case -> when you want to store unique values

const arr = [1, 2, 3, 4, 8, 4, 2, 8, 9, 1, 2, 3];
const uniqueArr = new Set(arr);
// console.log(uniqueArr);
let length = 0;
for(let num of uniqueArr){
    length++;
    
}
// console.log(length);

/*-------------------------------------------------------------------------------*/


// Map - key value pair 

// object literals -> keys can string and symbols, agar key ka name number bhi likha declare to to bhi wo string me change ho jata hai

const person = new Map();
person.set('fName','dharm')
person.set('age',20)
person.set({'k':5},'oneTwoThree')
// iske propKey name ko kuch bhi declare kr sakte hai.

// console.log(person);
// to access values use get method
// console.log(person.get('fName')); 

for(let key of person.keys()){
    // console.log(key, typeof key);
}
for(let per of person){
    console.log(per);
    // console.log(Array.isArray(per));
    // map array bna ke de deta hai
}
// map have orderes pasion 

const person1 = new Map([['name',"BILLA"],['kam','dab daba banana']])

const user1 = {
    id:1,
    name: 'dharm',
}
const user2 = {
    id:2,
    name: 'kamal',
}
const extraInfo = new Map();
extraInfo.set(user1,{age:5,gender:'m'})
// console.log(extraInfo.get(user1).age);
extraInfo.set(user2,{age:22,gender:'m'})



// cloning object

const obj = {
    key1: 'value1',
    key2: 'value2',
}
const obj2 = {...obj};
const obj3 = Object.assign({},obj)
obj.key3 = "value3"


// optional chaining -> agar obj me kisi prop ke andar ke prop ko access krte hai or wo prop nhi hai to by default error aayega but option chaining se error nhi aayega. optional chaining me '?.' use hota hai access karne ke liye. 
// iska most use case nested object me hota hai.

const opObj = {
    name:"jibnhg",
}
// console.log(opObj?.add?.hs);