// 01
let str = "JavaScript";
console.log("4th character of Str: ", str[3]); 
console.log(str.toUpperCase());
let newStr = str.replace("Script", "Code");
console.log(newStr);

// 2
let name = "Harsh Sharma";
let age = 10;
console.log(`Hello ${name}, You are ${age} Year old.`);
console.log(age > 18 ? "Adult" : "Minor");

// 3
let a = 0, b = "Hello", c = null;
console.log(a || b);
console.log(a && b);
console.log(b || c);
console.log(b && c);
console.log(a || c);
console.log(a && c);

// 4
let day = "Monday";
switch(day.toLowerCase()){
    case "monday":
        console.log("Week Stated");
        break;
    case "wednesday":
        console.log("Mid of week");
        break;
    case "friday":
        console.log("Weekend is near");
        break;
    default:
        console.log("Invalid");
}

// 5 
for(let i = 1; i<=10; i++){
    if(i%2 === 0) continue;
    if(i === 7 ) break;
    console.log(i);
}