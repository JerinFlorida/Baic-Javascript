var val = 67;
let val2 = 34;
//console.log(val);

//console.log("45"==45);
//console.log("45"===45);
const prompt = require("prompt-sync")(); 
//let age = prompt("enter the age");
let urname = prompt("enter the name");
//console.log(age);
console.log(urname);


//////////////
var age = prompt("enter the age")
if(age >= 70){
    console.log("retired")
}
  else{
    console.log("working")
}
//console.log(age)


var markStr = prompt("enter the mark")
var mark = parseInt(markStr)
console.log(mark)
if(mark<=80 & mark>=100){
    console.log("Grade A")
}
else if(mark<=60 & mark>=80){
    console.log("Grade B")
}
else if(mark<=40 & mark>= 60){
    console.log("Grade C")
}
else{
    console.log("fail")
}

