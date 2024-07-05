// ! Array is an object. in java script every thing id sn object. array start with 0. basically first is always 0 instead of 1.

// ? array litera
const allName = ['nabin', 'siwan', 'sabina', 'mom', 'father', 'nabina']
console.log(allName[5]);
console.log(allName);

// ? Array using constructor
const fruit = new Array('apple', 'banana', 'orange', 'mango')
console.log(fruit[3]);
console.log(fruit);

// *we can also modify the element of an array 
fruit[3] = "stroibery";
console.log(fruit);

// ! CRUD operation on Array
// * push or insert data. it add data on the last.
let given = ['apple', 'banana', 'orange'];
given.push('mango');
console.log(given); 

// * pop or delet data. it delete the data of the last array.
console.log(given.pop('apple'));
console.log(given);

// * unshift or insert the data. it will add data on the begining of array.
given.unshift('nabin', 'poudel');
console.log(given);

//  * shift or delete the data. it will delete the data of the first array.
console.log(given.shift());
console.log(given);

// * splice or modified the data, It wil delete the data and also it can replace data.
given.splice(0,1, 'Nabin');
console.log(given);
// ! CRUD operation on Array

// ? array traversal / Iterating over array
// * 1. for of loops. used to iterate or repeat the iterable object such as string, array and others objects.

for(items of fruit){
    console.log(items);
}

// *2. for in or index(index is an number) loops. used to iterate over the properties of an object.

for(items in fruit){ 
    console.log(items);
}

// *3. for each. it provide function for each or perform task to elements of the array. but we cannot used return and chain method.

fruit.forEach ((fall, index, fruit) => {
    console.log(`${fall} ${index}`);
})

// *4. for map. it is same as for each but the difference is that we can save the data on variale and it will return the data. 

let khana = fruit.map ((fall, index, arr) => {
    return(`${fall}}`)
})
console.log(fruit);

// *write a programme to multiply each element with 2

let myNumber = [5, 10];
myNumber.forEach((number, index, array) => {
    let operation = number * 2;
    console.log(`${index}. ${number} * 2 =`, operation);
})


// ? searching and filter in array. We can used indexof and includes to search and filter.
// * 1. Indexof and lastindexof
let userName = ['siwan', 'nabin', 'siwan', 'shiva', 'siwan'];
// first value is data or search element inserted and second is index no = (it will search the element from inserted index number ) 
// it will search the datat from forward
console.log(userName.indexOf('siwan', 1)); 
// it will search the datat from backward
console.log(userName.lastIndexOf('siwan', 4));

// * 2. Includes. it will return the boolean value
// first value is data or element and second is optional - index. 
// if the search element match from data it will display true otherwise false. 
console.log(userName.includes('siwan', 0));


// ! task
// ? 1. add any name at the end of an given array?
let userNames = ['ram', 'Sam', 'hari', 'subash'];
userNames.push("nabin");
console.log(userNames);

// ? 2. what is the return value of splice method?
console.log(userNames.splice());
console.log(userNames);

// ? 3. update nabin to Nabin?
userNames.splice(4,4, "Nabin");
console.log(userNames);

// ? 4. delete hari from an array
userNames.splice(2,1);
console.log(userNames);
// ! task
