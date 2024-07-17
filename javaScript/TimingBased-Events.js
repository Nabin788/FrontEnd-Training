// ! Timing Based Event
// ? 1. setTimeout function is used to execute a function or code block after a some time or delay in milliseconds
// * function to display hello World
const fun = ((x) => {
    console.log("Hello World!", x);
});
// * called function using setTimeout with specified time
// first value is function call and second in time value in a milliseconds
// 1000 = 1s
// we will not able to used parameter and  arfgument with setTimeout events by using given code.
// it will execute the code but not able or ignored to used setTimeout milliseconds
setTimeout(fun(5), 2000);
// we will able to used parameter and  arfgument with setTimeout events by using given code
// it will perfectly able to execute the settimeout with argument function.concise arrow function.
let setTimeouts = setTimeout(() =>
    fun(5), 2000
);

// ? setinterval() function is used to repeatedly execute a function or code block at a specified interval in milliseconds.
const intervalFunction = (() => {
    console.log("Set Interval Function");
});
// * Every one second intervalfunction is executed
let setintervals = setInterval(intervalFunction, 1000);

// ? clearTimeout() to cancel the function or time out of setTimeout()
clearTimeout(setTimeouts);
// ? clearInterval() to cancel the function or time out of setinterval()
clearInterval(setintervals);

// ! Write a function to display content only 5 time using setInterval().
// ? function to display content
const contents = (() => {
    console.log("Function that display content");
});
// * setInterval to repeatedly display content after every one second
let intervals = setInterval(contents, 1000);
setTimeout(() => {
    // * it will clear the content
    clearInterval(intervals)
    // * it will clear the content after 5 second
}, 5000);


