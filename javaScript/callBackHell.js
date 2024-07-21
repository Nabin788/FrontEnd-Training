// // // ! Callback Hell or Pyramid of DOOM
// // // ? Situation in asynchronous JavScript where multiple nested callbacks are used to handle asyn operation. 
// // // * because the code often difficult to understand, read and maintain due nested structure.

// // const hellFuncton = (() => {
// //     setTimeout(() => {
// //         console.log("Hi");
// //         setTimeout(() => {
// //             console.log("Hi My");
// //             setTimeout(() => {
// //                 console.log("Hi My Name");
// //                 setTimeout(() => {
// //                     console.log("Hi My Name is");
// //                     setTimeout(() => {
// //                         console.log("Hi My Name is Nabin");
// //                         setTimeout(() => {
// //                             console.log("Hi My name is Nabin Poudel");
// //                         }, 1000);
// //                     }, 1000);
// //                 }, 1000);
// //             }, 1000);
// //         }, 1000);
// //     }, 1000);
// // });
// // hellFuncton();

// // ! Promises
// // * To avoid call back function we can used promises
// // * a Promise is an object representing the eventual completion or failure of an asynchronous operation.
// // * Promises provide a cleaner, more robust way to handle asynchronous code compared to traditional callback-based approaches,
// // * helping to avoid issues like callback hell.

// // here we are creating Promise
// const promisesFun = new Promise((resolve, reject) => {
//     // here we are creating settimeout function to display msga after 1 secound. 
//     setTimeout(() => {
//         // we are given boolean data to variable
//         let msg = false;
//         // Here we are checking the condition
//         if (msg) {
//             resolve("Hi, My Name is Nabin Poudel");
//         } else {
//             reject("Sorry your are rejected");
//         }
//     }, 1000);
//     // if true it will execute res msg
// }).then((res) => {
//     console.log(res);
//     // if false it will execute err msg
// }).catch((err) => {
//     console.log(err);
//     // it does not matter if there is an error or not finally always executed.
// }).finally(() => {
//     console.log("Sorry you seems lost.")
// });

// ? Promise Method
// * 1. Promise.all
// it is used to waite for all promise to complete sucessfully. if one promise have error it will throw an error.
let promise1 = new Promise((resolve) => {
    setTimeout(() =>{
    resolve("Promise 1");
}, 2000);
});

// let promise2 = new Promise((resolve) => {
//     resolve("Promise 2");
// }, 1000);

// here from three promise  it is set to execute err, in a compile phase when error found promise.all throw error.
let promise2 = new Promise((resolve, reject) => {
    setTimeout(() =>{
    reject("Promise 2");
}, 2000)
});

let promise3 = new Promise((resolve) => {
    setTimeout(() =>{
    resolve("Promise 3");
}, 2000);
});


// Here it will waite all promises to complete sucessfully and then execute 
Promise.all([promise1, promise2, promise3])
    .then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    });

// * Promise.allSettled
//  it is used to waite for all promise to complete sucessfully.
//  It is used when get outcome of all promises even if one or more promise have problem.
Promise.allSettled([promise1, promise2, promise3])
    .then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    });


// * Promise.race
// it is used to execute the code either sucess or err but it will execute first code that will take short time and then end.
// here it waite for all promises to sucess and then execute that promise which take short time to execute.

let promise4 = new Promise((resolve) => {
    setTimeout(() =>{
    resolve("Promise 4 will display in Promise.race because it take short time");
}, 1000);
});

Promise.race([promise1, promise2, promise3, promise4])
    .then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    });

