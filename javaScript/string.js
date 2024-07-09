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


// ! extracting string part.
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
// we can also used replaceAll or regular expresstion  to replace the same data present multiple time.
const word = "nepal";
const word1 = "I don't want to live in India";
let rWord = word.replace("nepal", "NEPAL");
let rWord1 = word1.replace("", "don't ");
let rWord2 = word1.replace("I don't want to live in India", "I want to live in Nepal.");
console.log(`${word} = ${rWord}`);
console.log(`${word1} = ${rWord1}`);
console.log(`${word1} = ${rWord2}`);

// ? Extracting string character code
// it will return character code
const cha = "nabin";
let chart = cha.charCodeAt(1);
console.log(chart);

// ? at() method. ECMA2022 feature
// now we can used negative value to extract data
const word10 = "Nabin Poudel"
let atWord = word10.at(-2);
console.log(atWord);


// ? trim. It used to remove whitespace from starting and end but not from middle.
const wName = "    N abin poudel ";
// before using trim
console.log(`Before using trim the length of text is ${wName.length} and word ${wName}`);
// after using trim
let whiteName = wName.trim();
console.log(`After using trim the length of text is ${whiteName.length} and word ${whiteName}`);

// ? splite(). It used to convert string to array.
const sName = "nabin poudel, siwan poudel";
// it will splite  string value to single value of array
let arrNames = sName.split();
// it will splite  string value to array in a individual value.  
let arrNames1 = sName.split("");
// it will splite string value to array in a each word which is separeted by ",".
let arrnames2 = sName.split(",");

console.log(arrNames, arrNames1, arrnames2);

// !task
// * write a programme to print a to z.
const words = "a";
const words1 = "z";
// finding code of charatcer
let charWord = words.charCodeAt(words);
let charWord1 = words1.charCodeAt(words1);
for (charWord = charWord; charWord <= charWord1; charWord++) {
    // finding character of code
    let all = String.fromCharCode(charWord)
    console.log(all);
}


// * write a programme to find the vowels
// defining vowels
const vowels = 'aeiou';
// create function
let findVowels = ((str) => {
    // for of loops of indivisual character
    for (oun of vowels) {
        // it will check str arguemnets one by one from vowels data
        let check = str.includes(oun);
        // it will check if the vowels are present in difine value.
        if (check === true) {
            // it will display the result after the condition is true or vowels are present in define value.
            console.log(`${oun} are present in "${str}" `);
        } else {
            // if the any vowels character missing from define value it will dis[lay given result
            console.log(`${oun} is not present in "${str}" `);
        }
    }
});
// function call and defining value of parameter. 
findVowels("My Name is Nabin Pudel");

// * write a programme to count the vowels
let countVowels = ((str) => {

    let c = 0;
    // vowels from upper programme
    for (char of vowels) {
        let counts = str.includes(char);
        if (counts) {
            c++;
        }
    }
    return c;

})
console.log(countVowels("My Name is nabin podel"));
// ! task


