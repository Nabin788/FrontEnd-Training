// !JavaScript branded standard after in 1997 it take within a ECMA script.
// ?ECMA script 2015 EC6 add various feature in javaScript 

// * 1. Let,const variable
// In the past we used variable but now days 99% developer insist to used Let and const variable. 


// using var variable we can chnage variable value inside of block and outside of block code
var name = "nabin";
if (true) {
    var name = "siwan";
    console.log(name);
}
console.log(name);
// using var variable we can chnage variable value inside of block and outside of block code

// let is an block scope variable. after declaring let within a {} we can not used it's value outside of block code.
// in the given code if is an block code having{} and outside log can not able to access the value of name which is define in if statement
if (true) {
    let name = "siwan";
    console.log(name);
}
console.log(name);
// let is an block scope variable. after declaring let within a {} we can not used it's value outside of block code.

// const is the one time define variable. we can not change its variable value.
if(true){
    const name= "siwan";
    console.log(name);
}
console.log(name);
// const is the one time define variable. we can not change its variable value.

// * 2. string Interpolation and string concatination template 

// string Interpolation is the method to display the defined value with the help of `${}`.
let age = 24;
console.log(`I am ${age} year old`);
// string Interpolation is the method to display the defined value with the help of `${}`.

// string concatination templete is the method to concatinate the value withhout adding something like space in the value.
// we can see that without template the value is merged and with the help of template we can make the value better lokable
let firstName = "Nabin";
let lastName = "Poudel";
console.log(firstName + lastName);
console.log(`${firstName} ${lastName}`);
// string concatination templete is the method to concatinate the value withhout adding something like space in the value

// * 3. fat arrow function or annonymouse function
const result = (a,b) => {
    console.log(a+b);
}
result(5,6);
// * 3. fat arrow function or annonymouse function









