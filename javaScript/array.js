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
given.splice(0, 1, 'Nabin');
console.log(given);
// ! CRUD operation on Array

// ? array traversal / Iterating over array
// * 1. for of loops. used to iterate or repeat the iterable object such as string, array and others objects.

for (items of fruit) {
    console.log(items);
}

// *2. for in or index(index is an number) loops. used to iterate over the properties of an object.

for (items in fruit) {
    console.log(items);
}

// *3. for each. it provide function for each or perform task to elements of the array. but we cannot used return and chain method.

fruit.forEach((fall, index, fruit) => {
    console.log(`${fall} ${index}`);
})

// *4. for map. it is same as for each but the difference is that we can save the data on variale and it will return the data. 

let khana = fruit.map((fall, index, arr) => {
    return (`${fall}}`)
})
console.log(fruit);

// !task
// *using map to square each number and create a new array
const no = [1, 2, 3];
let squareNumber = no.map((numbers, index, arr) => {
    return numbers * numbers;
})
console.log(squareNumber);

// * using map method, write a function that takes an array of strings and returns a new aray where each string is capitalized
const array = ['apple', 'banana', 'mango'];
let capA = array.map((cap) => {
    return cap.toUpperCase(cap);

})
console.log(capA);

// * using map method, write a function that takes an array of numbers and returns a new array where each numbers is squared, but only if it's an even number
const n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let squareA = n.map((square, index, arr) => {
    if (square % 2 == 0) {
        return square * 2;
    } else {
        console.log();

    }
})
    //2. it will filter the unique undefine and remoived from array.
    .filter((no) => {
        if (no !== undefined) {
            return no;
        }
    })
// 1.set will removes return undefine to single unique undefine value.
console.log([...new Set(squareA)]);

// * using the map method, write a function that takes an array of names and returns a new array where each name is prefixed with Mr.
let clientNames = ['nabin', 'Siwan', 'ashok'];
const preName = clientNames.map((name) => {
    return (`Mr.${name}`);
})
console.log(preName);
// !task


// *write a programme to multiply each element with 2

let myNumber = [5, 10];
myNumber.forEach((number, index, array) => {
    let operation = number * 2;
    console.log(`${index}. ${number} * 2 =`, operation);
})


// ? searching in array. We can used indexof and includes to search and filter.
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
userNames.splice(4, 4, "Nabin");
console.log(userNames);

// ? 4. delete hari from an array
userNames.splice(2, 1);
console.log(userNames);
// ! task

// ? search and filter in array. We can used find method and findindex method to search and filter.
// * 1. find method. in this method it will find only one element instead of all 
let numbers = [1, 2, 3, 4, 5, 10, 6, 7, 8, 9, 10];
const result = numbers.find((count) => {
    return count > 5;
})
console.log(result);

// * 2. filter. imp. in this method it will find all element.
const result1 = numbers.filter((count) => {
    return count > 4;
})
console.log(result1);

// ! task
// * write a function to return an array containing with products with prices less or equal to 500
const products = [
    { name: "laptop", price: 1200 },
    { name: 'phone', price: 800 },
    { name: 'tablet', price: 300 },
    { name: 'smartwatch', price: 150 }
]
const filterProducts = products.filter((product) => {
    if (product.price <= 500) {
        console.log(product.name);
        return (product);
    }
})
console.log(filterProducts);
// ! task

//  * 3. findIndex method. it will display the index number of data or element.
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const outputs = num.map((counts) => {
    return counts * 2;
})
console.log(outputs);
const output = outputs.findIndex((counts) => {
    return counts > 11;
})
console.log(output);

// * display the unique number
let uniqueNumber = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10];
// new set is an special type of object that only contain unique value and remives the duplicate in the form of object.
// to display it on array we have to used [...]
// The spread operator (...) is used to "spread" the elements of the Set into a new array.
// When used inside an array literal [ ], the spread operator takes each element of the Set and adds it to the new array.
// The Set itself cannot be directly logged as an array, so we use the spread operator to convert it back into an array format.
console.log([...new Set(uniqueNumber)]);

// ? sort and compare. by default sor elements as string
let container = ['Apple', 'Samsug', 'Huawei', 'Nokia'];
// sort the datat in the ascending order
container.sort();
console.log(container);

// or 
container.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
})
console.log(container);

// or
container.sort((a, b) => {
    if (a > b) {
        return 1;
    } else {
        return -1;
    }
})
console.log(container);

// sor the data in the descending order
container.sort(() => {
    return -1
});
console.log(container);

// or
container.sort((a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;
})
console.log(container);

// or
container.sort((a, b) => {
    if (a > b) {
        return -1;
    } else {
        return 1;
    }
})
console.log(container);

// ? reduce methpd
// * write a  js function that calculates the total price of items in a shopping cart. the function should take an array of item prices as input and return the total price.
const productPrice = [1000,2000,3000,4000];
const totalPrice = productPrice.reduce((totalPrice, pPrice, index, arr) => {
    let sum;
    return pPrice + totalPrice;
});
console.log(`Total price of product is: ${totalPrice}`);



