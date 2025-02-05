function printFullname(fName, lName){
    function pName(){
        console.log(fName, lName);
    }
    return  pName;
}

const ans = printFullname("Harshit", "Sharma");
console.log(ans);
ans();