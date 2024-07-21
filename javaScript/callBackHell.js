// // ! Callback Hell or Pyramid of DOOM
// // ? Situation in asynchronous JavScript where multiple nested callbacks are used to handle asyn operation. 
// // * because the code often difficult to understand, read and maintain due nested structure.

// const hellFuncton = (() => {
//     setTimeout(() => {
//         console.log("Hi");
//         setTimeout(() => {
//             console.log("Hi My");
//             setTimeout(() => {
//                 console.log("Hi My Name");
//                 setTimeout(() => {
//                     console.log("Hi My Name is");
//                     setTimeout(() => {
//                         console.log("Hi My Name is Nabin");
//                         setTimeout(() => {
//                             console.log("Hi My name is Nabin Poudel");
//                         }, 1000);
//                     }, 1000);
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// });
// hellFuncton();

// ? Promises
// * To avoid call back function we can used promises
// * a Promise is an object representing the eventual completion or failure of an asynchronous operation.
// * Promises provide a cleaner, more robust way to handle asynchronous code compared to traditional callback-based approaches,
// * helping to avoid issues like callback hell.

// here we are creating Promise
const promisesFun = new Promise((resolve, reject) => {
    // here we are creating settimeout function to display msga after 1 secound. 
    setTimeout(() => {
        // we are given boolean data to variable
        let msg = false;
        // Here we are checking the condition
        if (msg) {
            resolve("Hi, My Name is Nabin Poudel");
        } else {
            reject("Sorry your are rejected");
        }
    }, 1000);
    // if true it will execute res msg
}).then((res) => {
    console.log(res);
    // if false it will execute err msg
}).catch((err) => {
    console.log(err);
    // it does not matter if there is an error or not finally always executed.
}).finally(() => {
    console.log("Sorry you seems lost.")
});
