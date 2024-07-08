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

// !search
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

// * start with search from first value
let result5 = namess.startsWith("ram");
let result8 = namess.startsWith("r");
let result7 = namess.startsWith("rom");
console.log(result5, result7, result8);

// * endwith search form last value
let result6 = namess.endsWith("hari");
let result9 = namess.endsWith("a");
let result10 = namess.endsWith("h");
console.log(result6, result9, result10);

// !search

// ? extracting string part.
// * slice. it will extract string by using stringName.slice(first index, last index).
// but it will not extract last index 
const names = "nabin poudel";
let eNames = names.slice(0);
// it will extract from 0 to 5 index string but not 5 index.
let eNames1 = names.slice(0, 5);
// negative value extract from backwards.
let eNames2 = names.slice(-12);
console.log(eNames, eNames1, eNames2);

// * substring. same as alice but the differnee is that negative used froeward like get original data from variable
let sNames = names.substring(0); 
let sNames2 = names.substring(-1);

let sNames1 = names.substring(0, 5);
console.log(sNames, sNames1, sNames2); 

// ? replacing word
const word = "nepal";
const word1 = "I don't want to live in India";
let rWord = word.replace("nepal", "NEPAL");
let rWord1 = word1.replace("", "don't ");
let rWord2 = word1.replace("I don't want to live in India", "I want to live in Nepal.");
console.log(`${word} = ${rWord}`);
console.log(`${word1} = ${rWord1}`);
console.log(`${word1} = ${rWord2}`);





