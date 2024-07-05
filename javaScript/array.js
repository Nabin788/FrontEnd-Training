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
