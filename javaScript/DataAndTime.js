// ! Date objects 
// ? new Date() constructor creates Date objects. When called as a function it return a string representing the current time.
// * There are 9 way to used date()
let date = new Date();
console.log(date);
let date1 = new Date(2024);
console.log(date1);
let date2 = new Date(2024, 7);
console.log(date2);
let date3 = new Date(2024, 7, 15);
console.log(date3);
// new Date(date string);
// new Date(year,month,day,time);
// new Date(year,month,day,time,second);
// new Date(year,month,day,time,second, milisecond);

// ? Write a function to add a specified number of days to a given date
let addDaysToDate = ((date, addDay) => {
    // Create a new Date instance to avoid mutating the original date
    date.setDate(dates.getDate() + addDay);
    return dates;
});
const dates = new Date('2024-02-29');
const newDate = addDaysToDate(dates, 7);
console.log(newDate.toLocaleDateString());

const getDaysDifference = (date1, date2) => {
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

const dates1 = new Date("2024-02-19");
const dates2 = new Date("2024-03-01");
const differenceDays = getDaysDifference(dates1, dates2);
console.log(differenceDays);

let newElement= document.createElement("p");
newElement.textContent = `Difference day between ${dates1} and ${dates2} = ${differenceDays}`;
document.body.appendChild(newElement);






