// ! string. Two way we can used string.
// * 1. "Double quoted" string
// * There is no difference between them
let world = "Hello World!";
console.log(world);

// * 2. 'Single quoted' string
let world2 = "Hello World2!";
console.log(world2);

// * using Escape character
// * 1. using "" within a "" by using \"\" 
console.log("Nabin \"Siwan\" Poudel");
// * 2. using "" within a ''. 
console.log('Nabin "Siwan" Poudel');

// * 3. using '' within a '' by using \'\'.
console.log('Nabin \'Siwan\' Poudel');
// * 4. using '' within a "". 
console.log("Nabin 'Siwan' Poudel");

// * 5. adding new line by using \n
console.log("Nabin Poudel \nSiwan Poudel");

// * search method.
//  we can used search method same as we are used in array.
// same meth0d indexof and lastindexof.

// ?Array.form convert string each element to array. it will place string to array. 
let myNames = 'nabin';
const s = Array.from(myNames);
const n = s.map((word, index, arr) => {
    return (`${word} index value: ${index}`);
})
console.log(n);

// ? search().
// It search a string for a string or a regular expression and return the position of the match.
// it returns the first index number if match other wise it return -1.
// we can not search backward.
const namess = 'ram, shyam, hari';
// we cna tackle case sensitive in a regular expression by using i(ignore).
// if we used global in search it will return only one value.
let sNumber = namess.search(/S/i);
console.log(sNumber); 

// ? match()
// it will return null value if the data not matched.
// by using global in regular exprestion it will return the all data that presented. but not detailed
let result = namess.match(/h/g);
// let result = namess.match('h');
// if the data is correct it will return the detaile dinformation.
console.log(result);
// like its [0: 'h', index: 6, input: 'ram, shyam, hari', groups: undefined]

// ? matchAll()
// same as match() method but it will retun the detailed information if we also used global g.
// if data not found it will return the empty iterator.
//  js convert string into global regular expression
let result1 = namess.matchAll("a");
// by using global in regular exprestion it will return the all data detailed that presented.
console.log(...result1);

// ? includes(). It is an feature of ES6
// it return the truth if correct otherwise false
let result3 = namess.includes('m'); //true
let result4 = namess.includes('R'); //flase
console.log(result3, result4);




