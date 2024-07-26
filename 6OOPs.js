// 2015 / es6
// class keyword
// classes are fake in js

class CreateUser{
    constructor(fName, lName, email, age, address){
        // console.log("constructor called");
        this.fName = fName;
        this.lName = lName;
        this.email = email;
        this.age = age;
        this.address = address;
    }
    about(){
        return `Name: ${this.fName} ${this.lName}, Age: ${this.age}`
    }
    isAdult(){
        return this.age >= 18;
    }
    func(a){
        console.log(a);
    }
}

const user1 = new CreateUser("Anmol", "Srivastava", "abc@gmail.com", 20, "Delhi");
const user2 = new CreateUser("Harsh", "Srivastava", "abc@gmail.com", 25, "Delhi");
const user3 = new CreateUser("Jai", "Srivastava", "abc@gmail.com", 15, "Delhi");
// console.log(user1.fName);
// console.log(user3.isAdult());

// console.log(Object.getPrototypeOf(user1));
// user2.func("hello")


/*------------------------------------------------*/


class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eating`;
    }
    isSuperCute(){
        return this.age<=1;
    }
    isCute(){
        return true;
    }
}
// const animal1 = new Animal("Tom", 2);
// console.log(animal1);
// console.log(animal1.eat());
// console.log(animal1.isSuperCute());


class Dog extends Animal{
    constructor(name, age, speed){
        super(name, age);
        this.speed = speed;
    }
    run(){
        return `${this.name} running at ${this.speed}.`
    }
    eat(){
        return `Modified eat : ${this.name} is eating food.`
    }
}
// object / instance
const dog1 = new Dog("chandu", 3, 50)
// console.log(dog1);
// console.log(dog1.run());
// console.log(dog1.eat()); 
// overloading

// getter and setter
class Person{
    constructor(fName, lName, age){
        this.fName = fName;
        this.lName = lName;
        this.age = age;
    }
    static classInfo(){
        return `this is Person class`;
    }
    static desc = "STATIC prop";
    get fullName(){
        return `${this.fName} ${this.lName}`
    }
    // get ka use krk kisi bhi function ko propery ki tarah use kiya ja sakta hai
    set fullName(fullName){
        const [fName, lName] = fullName.split(" ")
        this.fName = fName;
        this.lName = lName;
    }
    // set ka use krk hum properties ko update kr sakte hai
}
const p1 = new Person("Ajay", "Singh", 30);
// console.log(p1);
// console.log(p1.fullName);
// p1.fullName = "Dharm singh";
// console.log(p1.fullName);




// static method and properties

const person2 = new Person("aadarsh","Vyas", 23);
console.log(Person.classInfo());
console.log(Person.desc);
