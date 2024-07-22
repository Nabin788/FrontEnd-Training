// ! First Class Function
// * Function that used by variable or passed to the variable is called first class function
function names(myName){
    console.log(`First class function: My Name is ${myName}`);
}
// Assign function to the variable
let firstClassFun = names;
firstClassFun("Nabin Poudel");

// ! Higher order function and Call back function
// * Function that take one or more function as argument called Higher order function
// * Function that are passed as an argument to another function and it executed after the completion of task caleed callback function.
function fun (name, fun2){
    console.log(`Hello Higher order function`);
    fun2(name);
}
// * Callback function: passed to another function as argumetn
function fun2(name) {
    console.log(`${name}`);
}
// * higher order function: taking functiona fun2 as an argument
fun("Nabin", fun2);

// ! write a program to perform mathmatical operation using callback function and two variable in  javascript

// ? Higher order function
function mathOperation(a,b, operation){
    return operation(a, b)
}

// ? callback function because it passe to another function as an arguments 
function add(x,y){
    let sum = x+y;
    return sum;
}

function sub(x,y){
    return y-x;
}

// * Higher order function because it take function as an argument
console.log(mathOperation(5, 10, add));
console.log(mathOperation(5, 10, sub));