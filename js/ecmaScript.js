// !JavaScript branded standard after in 1997 it take within a ECMA script.
// ?ECMA script 2016 EC6 add various feature in javaScript 

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
if (true) {
    const name = "siwan";
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
const result = (a, b) => {
    console.log(a + b);
}
result(5, 6);
// * 3. fat arrow function or annonymouse function

// ? write a program to calculate two number and operator as paameter in function. and retiurn the result of operation.
// ? the function should support addition, substraction, multipliation and division.
const expression = (a, b, add, sub, mul, div) => {
    console.log(add = a + b, `addition of a and b ${add}`);
    console.log(sub = a - b, `substraction of a and b ${sub}`);
    console.log(mul = a * b, `multiplication of a and b ${mul}`);
    console.log(div = a / b, `division of a and b ${div}`);
}
expression(5, 10);


// ?write a program to reverse a given string without using build in reverse method
const myName = (str) => {
    let reverse = "";
    for (i = str.length - 1; i > 0; i--) {
        reverse = reverse + str;
    }
    return reverse;
};
console.log(myName("Siwan Poudel"));

// ? Destructuring Array
// * Extracting element from array
let names = ["nabin", "Siwan", "basanta"];
// Traditional way
// let extractingArray  = names[0];
// console.log(extractingArray);
let [first, second, third] = names;
console.log(first);
console.log(second);
console.log(third);

// ! write a programme to swap two variable without using third variable
let a = 1;
let b = 2;
[a, b] = [b, a]
console.log(a, b);
// Traditional way using third variable
// let c = a;
// a = b;
// b = c;
// console.log(a,b);

// ? destructuring object VeryIMP
// * we can extract value from object but we have to define same key as obj.
// and order doesnot matter in this method it can extract value by searching it's key and extract it on how we want.
let obj = {
    Name: "objName",
    ages: 24
};
const { Name, ages } = obj;
console.log(Name, ages);

// ? spread operator .... . in 2018 we can used in object also.
// but in object if two object haver multiple value with same key it will replace the first value with second.
// * in this code it will spread every string word to array individually
// we can use it as substitute of split operator
let spName = "hell0";
console.log([...spName]);

//  * in this code spread operator concatinate two variable data into another single variable
let spNum = [1, 2, 3];
let spNum2 = [1, 2, 3];
// Array will present multiple same value without removing it
let sum = [...spNum, ...spNum2];
console.log(sum);

// ! rest parameter
// ? the used of  ... in parameter called rest parameter. here ... not represent spread operator.
// * Define a function using an arrow function syntax
// The 'numbers' parameter uses the rest operator, which collects all arguments into an array
//  reset parameter combine indefinite argument to one array
const restParameter = ((...numbers) => {
    // Use the reduce method to sum all the numbers in the array
    // reduce method sum of the value. accu is first number and curVal is second
    return numbers.reduce((accu, curVal) => accu + curVal);
    // First Iteration:
    // accu = 10(first element of the array)
    // curVal = 20(second element of the array)
    // accu + curVal = 10 + 20 = 30
    // accu = 30(result from the first iteration)
    // curVal = 30(third element of the array)
    // accu + curVal = 30 + 30 = 60
    // 60 + 40 = 100
    // 100 + 50 = 150
    // 150 + 60 = 210
    // 210 + 70 = 280
    // 280 + 80 = 360
    // 360 + 90 = 450
    // 450 + 100 = 550
    // Note: Simplified the reduction function by directly returning the sum
});
// Call the restParameter function with a series of numbers and log the result to the console
console.log(restParameter(10, 20, 30, 40, 50, 60, 70, 80, 90, 100));

// ! ECMAScript 2019 ES10
// ? Array.flat and flatmap
let normalArr = [1, 2, 3];
console.log(normalArr);

// * array.flat. it used to represent nested array to single individual array
let nestedArr = [1, 2, [3, 4, 5, 6], 7, 8];
let nestedArr1 = [1, 2, [3, [4, [5], 6], 7], 8];
let flatArr = nestedArr.flat();
let flatArr1 = nestedArr1.flat(3);
console.log(flatArr);
console.log(flatArr1);

// * flatmap
let arrayNAme = ["my", 'name is', 'nabin poudel.'];
let flatMap = arrayNAme.flatMap((acc) =>
    acc.split(" ")
);
console.log(flatMap);


// ? entris and fromenteris
let objEnteris = { name: "nunu", age: 24 }
// * Object.entries.
// it will create the object keyValue to individual array  within a array
let enteris = Object.entries(objEnteris);
console.log(enteris);

// * it will fall back original object to new variable
// it means the original object of objEnteris is not same to fromEnteries because they are store on different location
let formEntries = Object.fromEntries(enteris);
console.log(formEntries);

// ! EXMAScript 2021 ES12
// ? .replaceAll();.
// * .replace() only replace fires value but replaceAll replace all value of definite value.
// in this code we replacing name
let stringName = "Hi, My  Name  is  Nabin  Poudel not Nabin Paudel";
let replaceName = stringName.replaceAll("Nabin", "Siwan");
console.log(replaceName);

// in this code we replacing multiple space and to required space
// we can used trim() to replace white space and we can use replaceAll() to replace in between space within a charactor
let spaceName = "Hi  My  Name  Is  Nabin  Poudel";
let replaceSpace = spaceName.replaceAll(/\s+/g, " ");
console.log(replaceSpace);

// ? logical or assignment
// * in the or asignment when lefthand value is true it will function that value
let x = 20;
x ||= 10;
console.log(x);

// * and when the lefthand value is false it will function right hand value
let y = false;
y ||= 10;
console.log(y);

// ? logical and assignment
// * in the and asignment when lefthand value is true it will function rignthand value
let z = 20;
z &&= 10;
console.log(z);

// * in the and asignment when lefthand value is false it will function that value
let f = false;
f &&= 10;
console.log(f);

// ! ECMAScript2022 ES13
// ? .at() by using this we can get value from last
// * .at support all type of data type like string, array etc.
let arrayNum = [1, 2, 3, 4, 5];
console.log(arrayNum[1]);
console.log(arrayNum[-1]);
console.log(arrayNum.at(-1));

// ? hasOwn().
// * hasOwn() method used to find if the property is present or not and return true if present otherwise false
let hasObj = {
    name: "nabin",
    age: 24
}
// bothe hasOwn is the updated version of hasOwnProperty.both work same butthe difference is that hasOwnProperty is not work on null object.
console.log(Object.hasOwn(hasObj, "name"));
console.log(hasObj.hasOwnProperty("name"));

// for exapmle of null object
let nullObject = Object.create(null);
nullObject.name = "Nabin";
console.log(nullObject);
console.log(Object.hasOwn(nullObject, "name"));
// this hasOwnProperty output will be error saying it is not a function
// console.log(nullObject.hasOwnProperty("name"));

// ! ECMAScript2023 ES14
// ? array.findlast() and .findLastIndex
// * array.find(() =>); used to find the last value
let arrayFind = [1, 2, 3, 4, 1, 2, 3, 4];
console.log(arrayFind.findLast((curVal) =>
    curVal
));
// * array.findLastIndex(() =>) used to find the last value index number
console.log(arrayFind.findLastIndex((elem) => elem));

// ? array.reverse.
// It will reverse the value and the original value also changed
let reverseName = ['nabin', 'siwan', 'basanta'];
console.log(reverseName.reverse()); //* output ['basanta', 'siwan' ,'nabin']
console.log(reverseName);

// ? array.splice
// it will replace the value and the original value also changed
// first value is starting and second is end
// if both first and second value is same it will select same value and replace it with define new value
// if both first value and second value is not same for ex if first 1 and second 2 it will remove both and place new value.
reverseName.splice(2,2, "MadhuSudhan");
console.log(reverseName);
//  we can also used to add new value on array and the original value also changed
reverseName.splice(3,3, "nabin");
console.log(reverseName);

// ? array.with();
// it will replace the value without chnaging  the original value also 
console.log(reverseName.with(0, "nabin"));
console.log(reverseName);

