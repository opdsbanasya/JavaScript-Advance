// methods
// function inside object 
// this - arrow fn ke sath kam nhi krta

function personInfo(){
    console.log(`person name is ${this.fName} and age is ${this.age}`);
}
const person1 = {
    fName : "Anmol",
    age:20,
    about: personInfo,
}
const person2 = {
    fName : "Harsh",
    age:25,
    about: personInfo,
}
// person1.about();
// person2.about();



function fn(){
    "use strict";
    console.log(this);
    // yha by default window object aayega
    // is problem ko solve krne ke liye "use strict" use krte h
}
// fn();


// call(), apply(), bind()
function about(hobby, favFood){
    console.log(`${this.fName}, ${this.age}, ${hobby}, ${favFood}`);
}
const user1 = {
    fName : "Anmol",
    age:20,
    
}
const user2 = {
    fName : "jai",
    age:20,
    
}

// about.call(user2, "coding", "pizza");
// .call() method se hum ek object ke method ko dusre object ke sath use kr skte h

// about.apply(user1, ["coding", "pizza"]);
// apply() method me hume parameter array me pass krna hota h

// about.bind(user1, "coding", "pizza")();
// .bind() method se hume ek function ko bind krna hota h, iska return value ek function hota h

// don't do this mistake
const user3 = {
    fName : "Ram",
    age:20,
    about(){
        console.log(this.fName, this.age);
    }
    // short hand syntax
}
const fun = user3.about.bind(user3);

// yha this window object ko point kr rha h, but ise user3 object ko point krwane ke liye hume call(), apply(), bind() use krna hoga

// fun();

// arrow function me this apne surrounding se value leta h, is pr call(), apply(), bind() ka koi asar nhi hota


