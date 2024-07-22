// ! Asynchronous and Await. to simplified promise async, await created
// ? async: This keyword is used to define a function that returns a promise.
// ? It allows you to use the await keyword inside the function, which can simplify handling asynchronous code.
// ? They were introduced in ECMAScript 2017 (ES8).

// * Here we declare async and async alsways return the promise to handle the promise we used await or then(), catch () error handling
// * use await inside an async 
const calc = (async (a, b) => {
    // *The try-catch block is used to handle any potential errors,
    //  but since a + b is a straightforward operation, it’s unlikely to throw an error.
    try {
        let sum = a + b;
        return sum;
    } catch (error) {
        console.log("wrong calculation");
    }
});

const promiseHandle = (async () => {
    let sum = await calc(10, 20);
    console.log(sum);
});
promiseHandle();