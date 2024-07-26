// multiple users ke liye hum ek function banayenge
// jo key value pair add karega
// and return karega

/*
const userMethods = {
    about: function(){
        return `Name: ${this.fName} ${this.lName}, Age: ${this.age}`
    },
    isAdult: function(){
        return this.age >= 18;
    }
}
    */
// * abhi isme bhi ek problem hai ki agar hum yha multiple method add karenge to unko createUser function me add karna padega or agr galti kisi method ko add krna bhool gye to error aayega, is problem se bachne ke liye hum Object.create ka use karenge and sare methods ko createUser function me pass ho jayenge

// hum abhi userMethods ke bajay prototype ka use karenge

function createUser(fName, lName, email, age, address){
    // const user = {};
    // const user = Object.create(userMethods);
    const user = Object.create(createUser.prototype);
    user.fName = fName;
    user.lName = lName;
    user.email = email;
    user.age = age;
    user.address = address;
    /*user.about = function(){
        return `Name: ${this.fName} ${this.lName}, Age: ${this.age}`
    };
    user.isAdult = function(){
        return this.age >= 18;
    };*/ 
    // * jitne user banengr utni baar ye function banega and memory waste hogi isliye inko alag se define karenge and inka refence rakhenge

    /*user.about = userMethods.about;
    user.isAdult = userMethods.isAdult;*/


    return user;
}


// console.log(user1.about());
// yha about method user1 me nhi hai to wo userMethods me jayega and waha se return karega __proto__ ke through

createUser.prototype.about = function(){
    return `Name: ${this.fName} ${this.lName}, Age: ${this.age}`
}
createUser.prototype.isAdult = function(){
    return this.age >= 18;
}

const user1 = createUser("Anmol", "Srivastava", "abc@gmail.com", 20, "Delhi");
const user2 = createUser("Harsh", "Srivastava", "abc@gmail.com", 25, "Delhi");
const user3 = createUser("Jai", "Srivastava", "abc@gmail.com", 15, "Delhi");

// console.log(user1.about());
// console.log(user2.isAdult());
// console.log(user3);

// __proto__ or [[Prototype]] is same thing
// prototype is different from __proto__

const obj1 = {
    key1: "value1",
    key2: "value2"
}
// there is a special method in object called create
const obj2 = Object.create(obj1);
obj2.key3 = "value3";

// console.log(obj2);
// this is happenening because obj2 is not having key2 but it is present in obj1 so it is searching in obj1 and returning the value

// ye sb __proto__ ke through hota hai
// console.log(obj2.__proto__);





/* -------------------------------------------- */

function hello(){
    console.log("Hello");
}

// js Function ==> function + object
// mean function is also an object

// functionName.name -> name of the function

// you can add your own props

hello.myProp = "Hello Prop";
// console.log(hello);

// name prop -> tells function name

// function provide more usefull props

// function hume ek empty object {} dete hai
// jise hum prototype bolte hai
// only function have prototype prop


hello.prototype.myProp = "Hello Prototype Prop";
hello.prototype.myMethod = function(){
    console.log("Hello Prototype Method");
}
// console.log(hello.prototype);
