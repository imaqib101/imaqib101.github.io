//scope 
//root scope(parent scope)
//
var num = 5;
function numSum(){
    //child scope
    var num = "Hello!!!";
} 

console.log(num);





//ternary operators
function isUserValid(bool){
    return bool;
}
var output  =   isUserValid(true) ? "You may enter" : "Access Denied";

var automatedAnswer = "Your acc no is" + isUserValid(true) ? "88997765623" : "Not Valid";


//template strings

const name = 'aqib';
const age = 22;
const pet = 'cat'

const greeting = `'Hello' ${name} "you seem to be" ${age}. "and your pet is" ${pet}`

//default arg

function greet(name = "", age = 30, pet = 'cat'){//here name, age and pet are default args
    return `Hello ${name} you seem to be ${age}. and your pet is ${pet}`
}


//arrow function

const add = (a, b) => a+b;


//closures// currying
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const multiplyBy5 = curriedMultiply(5);

