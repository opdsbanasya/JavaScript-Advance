function createUserWithNew(name, age){
    this.name = name;
    this.age = age;
}

createUserWithNew.prototype.about = function(){   
    return `Name: ${this.name}, Age: ${this.age}`;
}
const user = new createUserWithNew("Anmol", 20);
// console.log(user);

// new key 
// 1. new keyword creates an empty object
// 2. return this
// 3. Object.create(createUser.prototype)

// __proto__ 
// oficial ecmascript - [[prototype]]


/* -------------------------------------------- */
// jis function ko new keyword ke sath call karte hai us function ke starting letter Capital likhte hai and us function ko constructor function bolte hai
function CreateUser(fName, lName, email, age, address){
    this.fName = fName;
    this.lName = lName;
    this.email = email;
    this.age = age;
    this.address = address;
}


CreateUser.prototype.about = function(){
    return `Name: ${this.fName} ${this.lName}, Age: ${this.age}`
}
CreateUser.prototype.isAdult = function(){
    return this.age >= 18;
}

const user1 = new CreateUser("Anmol", "Srivastava", "abc@gmail.com", 20, "Delhi");
const user2 = new CreateUser("Harsh", "Srivastava", "abc@gmail.com", 25, "Delhi");
const user3 = new CreateUser("Jai", "Srivastava", "abc@gmail.com", 15, "Delhi");

for(let key in user1){
    // console.log(key);
    // ye prototype wali ki bhi utha ke la rha hai than only own properties ko access krne ke liye hasOwnProperty use karte hai

    if(user1.hasOwnProperty(key)){
        // console.log(key);
    }
}

// let num = [1,2,3];
// console.log(num);

// humne dekha ki prototype sirf function ka hota hai but yha to array ka bhi prototype hai bcoz jb hum array declare krte hai hai to JavaScript internally array 'new' ke sath Array ko call krke krta 

let num = new Array(1,2,3)
console.log(Object.getPrototypeOf(num))
// console.log(num);


function hello(){
    console.log("hello");
}
