//! control statement

//? 1. if.. else statement
//* if else
var temprature = 15;
if (temprature >= 15) {
    console.log("we want summar vacation.");
} else {
    console.log("we want winter vacation");
}

//* if elseif statement
var temprature = 10;
if (temprature >= 30) {
    console.log("we want summar vacation");
} else if (temprature >= 30 || temprature) {
    console.log("we want winter vacation");
} else {
    console.log("Class will be open.");
}


var age = 10;
var citizen = false;
var registered = false;
if (age > 18) {
    if (citizen && registered) {
        console.log("The person is able to vote");
    } else if (citizen != true) {
        console.log("The person not able to vote due to citizenship status");
    } else if (citizen && (registered != true)) {
        console.log("they are not eligible due to registration status");
    } else {
        console.log("error");
    }

} else if (age < 18 && (citizen != true) && (registered != true)) {
    console.log("they are not eligible to vode");
} else {
    console.log("extend the voting system");
}


//* write a program to check evn or odd
var num = 10;
var result = num / 2;
if (result == 0) {
    console.log(`Number is an even: ${result}`);
} else {
    console.log(`Number is an odd : ${result}`);
}

//* write a program to check the number is positive or negative or zero.
var num = 0;
if (num > 0) {
    console.log(`${num} is an positive number`);
} else if (num < 0) {
    console.log(`${num} is an negative number`);
} else {
    console.log(`${num} is an zero number`);
}


// ? 2. switch statement
var day = "";
switch (day) {
    case "sunday":
        console.log(`${day} is an holiday.`);
        break;

    case "monday":
        console.log(`${day} is an working day.`);
        break;

    default:
        console.log(`${day} wrong day.`);
}

//* find the area of different shape 
var areaofShape = "";
var a = 5;
var b = 10;
var pi = 22 / 7;
switch (areaofShape) {
    case "circle":
        var r = 2;
        var area = pi * r * r;
        if (area == 25) {
            console.log(`${area} is an area of circle`);
        }
        break;

    case "rectangle":
        var area = a * b;
        if (area == 25) {
            console.log(`${area} is an area of rectangle`);
        } else {
            console.log(`${area} is not an area of rectangle`);
        }
        break;

    case "square":
        var area = a * a;
        if (area == 25) {
            console.log(`${area} is an area of square`);
        } else {
            console.log(`${area} is not an area of square`);
        }
        break;

    default:
        console.log("sorry the shape is not available");
}