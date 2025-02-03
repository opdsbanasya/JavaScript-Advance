console.log(this);
console.log(window);
console.log(fName);
var fName = "Jai";


let h = 10;
console.log(h); // 10
function getFullName(fName, lName){
    console.log(arguments);
    let myVar = "inside function";
    console.log(myVar);
    const fullName = fName + " " + lName;
    return fullName;
}
const name = getFullName("Jai", "Kumar");
console.log(name);