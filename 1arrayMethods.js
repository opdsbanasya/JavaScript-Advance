// array - collection of elements of same type or different type
// array method

// forEach

const numbers = [4,5,6,2];


function multiByTwo(number,index){
    console.log(`index is ${index}`)
    console.log(`${number*2}`)
}
// num.forEach(multiByTwo); // callback function

const arr = [
    {name:"ankit",age:23},
    {name:"shivam",age:25},
    {name:"gurmeet",age:32},
]
// arr.forEach((user)=> console.log(user.name))


// map method
const square = (num)=>{
    return num*num
}
// numbers.map((num)=> console.log(num*num)); // yha kuch bhi return mhi horha

// const sqArr = numbers.map(square)
// console.log(sqArr)

const name = arr.map((user)=>{
    return user.name;
})
// console.log(name);



// filter method - return array of elements which satisfy the condition
const even = numbers.filter((num)=> {
    return num%2===0;
})
// console.log(even);


// reduce method - return single value from array sum, avg, max, min etc
//  [4,5,6,2];
const sum = numbers.reduce((accumulator, currValue)=> {
    // console.log(accumulator, currValue);
    return accumulator + currValue;
}, /*100-> yha accumulator ki initial value pass kr skate h*/)
// acc  curr    return
// 4    5       4+5
// 9    6       9+6
// 15   2       15+2

// console.log(sum);


const userCart = [
    {id:1, name:"mobile", price:30000},
    {id:2, name:"laptop", price:80000},
    {id:3, name:"TV", price:50000},
]

const total = userCart.reduce((totalPrice, currProduct)=>{
    return currProduct.price + totalPrice;
},0)

// totalPrice  currProduct return
// 0           1            0+30000
// 30000        2           30000+80000
// 110000       3           110000+50000

// console.log(total);



// sort method -> actual array me changes krta h
// sort method ASCII values ke according sort krta h
const userd = ["harsh","jink","dharm","Suio"];
userd.sort()
// console.log(userd);

const nums = [5,8,6,41,8,1,5];
nums.sort((a,b)=>  a-b
    // for desending -> b-a
)                                                                                              
// console.log(nums);

//a-b -> negative -> a,b
//a-b -> positive -> b,a

// js yha as nums sort nhi krta ye string samjh kr sort krta h behalf of ASCII values
// console.log(nums);

const prod = [
    {id:1,name:"phone",price:200},
    {id:2,name:"tv",price:400},
    {id:3,name:"lptp",price:1000},
    {id:4,name:"watch",price:60},
]
// low to high
const lowToHigh = prod.slice(0).sort((a,b)=> a.price-b.price)
// console.log(lowToHigh);
// high to low
const highToLow = prod.slice(0).sort((a,b)=> b.price-a.price)
// console.log(highToLow);



// find method - return first element which satisfy the condition

const msg = ["hello","namaste","tata","bye"]

let ans = msg.find((string)=> string.length === 3)
// console.log(ans);

const users = [
    {name:"ankit",id:1},
    {name:"shivam",id:2},
    {name:"gurmeet",id:3},
]

const userFind = users.find((user)=> user.id === 2)
// console.log(userFind);




// every method - return true if all elements satisfy the condition
const evenNot = nums.every((num)=> num%2 === 0)

// callback mrthod -> true / false
// every method -> true / false

// console.log(evenNot);

const priceLess = userCart.every((item) => item.price<30000)
// console.log(priceLess);



// some method - return true if any element satisfy the condition
const oddNot = nums.some((num)=> num%2 === 0)
// console.log(oddNot);

const priceLessSome = userCart.some((item) => item.price<50000)
// console.log(priceLess);



// fill method - fill the array with static value
// value, start, end

const myArray = new Array(10).fill(0);
// console.log(myArray);

const myArray1 = [1,2,3,4,5,6,7,8,9];
myArray1.fill(0,2,5)
// console.log(myArray1);




// splice method - delete, insert, both
const gArr = ['item','item2','item3'];
// console.log(gArr);

// delete - 1st arg -> index, 2nd arg -> no of elements to delete from that index 
const delItem = gArr.splice(1,2);
// console.log(gArr);
// console.log(delItem);

// insert - 1st arg -> index, 2nd arg -> no of elements to delete from that index, 3rd arg -> new element
gArr.splice(1,0,'newItem');
console.log(gArr);

// both  - 1st arg -> index, 2nd arg -> no of elements to delete from that index, 3rd arg -> new element
gArr.splice(1,3,"another","JINC","jai ho")
console.log(gArr);
