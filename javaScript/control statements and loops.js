// //! control statement

// //? 1. if.. else statement
// //* if else
// var temprature = 15;
// if (temprature >= 15) {
//     console.log("we want summer vacation.");
// } else {
//     console.log("we want winter vacation");
// }

// //* if elseif statement
// var temprature = 10;
// if (temprature >= 30) {
//     console.log("we want summer vacation");
// } else if (temprature >= 30 || temprature) {
//     console.log("we want winter vacation");
// } else {
//     console.log("Class will be open.");
// }


// var age = 10;
// var citizen = false;
// var registered = false;
// if (age > 18) {
//     if (citizen && registered) {
//         console.log("The person is able to vote");
//     } else if (citizen != true) {
//         console.log("The person not able to vote due to citizenship status");
//     } else if (citizen && (registered != true)) {
//         console.log("they are not eligible due to registration status");
//     } else {
//         console.log("error");
//     }

// } else if (age < 18 && (citizen != true) && (registered != true)) {
//     console.log("they are not eligible to vode");
// } else {
//     console.log("extend the voting system");
// }


// //* write a program to check evn or odd
// var num = prompt("Enter the number");
// var result = num % 2;
// if (result == 0) {
//     console.log(`${num} Number is an even`);
// } else {
//     console.log(`${num} Number is an odd`);
// }

// //* write a program to check the number is positive or negative or zero.
// var num = 0;
// if (num > 0) {
//     console.log(`${num} is an positive number`);
// } else if (num < 0) {
//     console.log(`${num} is an negative number`);
// } else {
//     console.log(`${num} is an zero number`);
// }


// // ? 2. switch statement
// var day = "";
// switch (day) {
//     case "sunday":
//         console.log(`${day} is an holiday.`);
//         break;

//     case "monday":
//         console.log(`${day} is an working day.`);
//         break;

//     default:
//         console.log(`${day} wrong day.`);
// }

// //* find the area of different shape 
// var areaofShape = "";
// var a = 5;
// var b = 10;
// var pi = 22 / 7;
// switch (areaofShape) {
//     case "circle":
//         var r = 2;
//         var area = pi * r * r;
//         if (area == 25) {
//             console.log(`${area} is an area of circle`);
//         }
//         break;

//     case "rectangle":
//         var area = a * b;
//         if (area == 25) {
//             console.log(`${area} is an area of rectangle`);
//         } else {
//             console.log(`${area} is not an area of rectangle`);
//         }
//         break;

//     case "square":
//         var area = a * a;
//         if (area == 25) {
//             console.log(`${area} is an area of square`);
//         } else {
//             console.log(`${area} is not an area of square`);
//         }
//         break;

//     default:
//         console.log("sorry the shape is not available");
// }

// // ? 3. Loops

// // *a. for loop
// for (
//     i = 1;
//     i <= 10;
//     i++
// )
//     console.log(`${i} in a for loop.`);

// // *b. while loop
// var i = 1;
// while (i <= 10) {
//     console.log(`${i} in a while loop`);
//     i++;
// }

// var i = 1;
// do {
//     console.log(`${i} in a do while loop`);
//     i++;
// } while (i <= 10)


// // * display the multiplication of 5
// var mul = 5
// for (i = 1; i <= 10; i++) {
//     var multiplication = mul * i;
//     console.log(`5 * ${i} = ${multiplication}`);
// }

// // * find the prime number
// var num = parseFloat(prompt("Enter which number you want to check"));
// var primeNumber = true;
// for (i = 2; i < num; i++) {
//     if (num % 2 === 0) {
//         primeNumber = false;
//         break;
//     }
// }
// if (primeNumber) {
//     console.log(`${num} is an prime number`);
// } else {
//     console.log(`${num} is not an prime number`);
// }

// // * check if the year is leap year or not
// var year = parseFloat(prompt("Enter the year"));
// if (year % 4 === 0 || year % 400 === 0) {
//     console.log(`${year} is an leap year`);
// }else {
//     console.log(`${year} is not leap year`);
// }

// *1
for(i=1; i<=5; i++){
    var pattern = "";
    for(j=1; j<=i-1; j++){
        pattern += "";
    }
    for(k=1; k<=6-i; k++){
        pattern +="* ";
    }
    console.log(pattern);
}


for(i=1; i<=5; i++){
    var pattern = "";
    for(j=1; j<=i; j++){
        pattern += "* ";
    }
    console.log(pattern);
}
// *2


// *3
for(i=1; i<=5; i++){
    var space ="";
    for(j=1; j<=5-i; j++){
        space += "  ";
    }
    for(k=i; k<=(2*i - 1); k++){
        space += " *";
    }
    console.log(space);
}

for(i=1; i<=5; i++){
    var pattern = "";
    for(j=1; j<=i-1; j++){
        pattern += "  ";
    }
    for(k=1; k<=6-i; k++){
        pattern +=" *";
    }
    console.log(pattern);
}
// *4


// *5
for(i=1; i<=5; i++){
    var pattern = "";
    for(j=2; j<=1+i; j++){
        pattern += "*";
    }
    console.log(pattern);
}

for(i=1; i<=5; i++){
    var pattern = "";
    for(j=1; j<=i-1; j++){
        pattern += "";
    }
    for(k=1; k<=6-i; k++){
        pattern +="*";
    }
    console.log(pattern);
}
// * 6


// *7
for(i=1; i<=5; i++){
    var pattern = "";
    for(j=1; j<=i-1; j++){
        pattern += " ";
    }
    for(k=1; k<=6-i; k++){
        pattern +="*";
    }
    console.log(pattern);
}

for(i=1; i<=5; i++){
    var space ="";
    for(j=1; j<=5-i; j++){
        space += " ";
    }
    for(k=i; k<=(2*i - 1); k++){
        space += "*";
    }
    console.log(space);
}
// * 8


// *9
for(i=1; i<=5; i++){
    var pattern = "";
    for(j=1; j<=i-1; j++){
        pattern += " ";
    }
    for(k=1; k<=6-i; k++){
        pattern +=" *";
    }
    console.log(pattern);
}

for(i=1; i<=5; i++){
    var space ="";
    for(j=1; j<=5-i; j++){
        space += " ";
    }
    for(k=i; k<=(2*i - 1); k++){
        space += " *";
    }
    console.log(space);
}
// *10

