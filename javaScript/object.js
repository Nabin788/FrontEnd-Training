// // ! Object Creation
// // ? Creating an object using curly brackets {}.
// // * This object contains properties like name, age, address, Gender, and a method named computer.
// let objValue = {
//     name: "Nabin Poudel",
//     age: 24,
//     address: "Bhaluwan-3, Dang",
//     Gender: true,
//     computer: function () {
//         console.log("Welcome to my JavaScript learning session");
//     }
// };
// console.log(objValue); // Output the entire objValue object.

// // * Accessing Object Properties
// // * Extracting single key values from an object using dot notation and bracket notation.
// console.log(objValue.name); // Accessing the name property using dot notation.
// console.log(objValue['age']); // Accessing the age property using bracket notation.
// console.log(objValue.Gender); // Accessing the Gender property using dot notation.

// // ? Modifying Object Properties
// // * Adding a new key-value pair to the object using bracket notation.
// objValue["married Status"] = "Unmarried"; // Adds a new property married Status with value "Unmarried".
// // * Modifying an existing value in the object using dot notation.
// objValue.Gender = "Male"; // Changes the value of the Gender property to "Male".

// // * Accessing Object Methods
// // * Calling a method defined in the object.
// objValue.computer(); // Invokes the computer method, which logs a welcome message to the console.

// // ? Dynamic Key in Object
// // * Creating a dynamic key in an object using square brackets.
// let idType = "collegeId"; // Defines a variable to be used as a dynamic key.
// let object = {
//     [idType]: "019530115", // Uses the value of idType as the key.
//     Name: "Nabin Poudel",
//     address: "Bhaluwang",
//     collegeFun: function () {
//         console.log(`My ${idType} is ${object[idType]} and My Name is ${object.Name}`);
//     }
// };
// object.collegeFun(); // Invokes the collegeFun method, which logs a message using dynamic keys.

// // ! Pass by Value and Pass by Reference
// // ? Pass by Value
// // * Demonstrating pass by value with primitive types.
// let num = 10; // Defines a primitive variable num.
// let calculation = (x => {
//     return num + x; // Returns the sum of num and x.
// });
// console.log(calculation(num)); // Logs the result of calculation with num as argument.
// console.log(num); // Logs the original value of num, which remains unchanged.

// // ? Pass by Reference
// // * Demonstrating pass by reference with objects.
// let objReference = {
//     id: 1,
//     name: "siwan",
//     age: "20"
// };
// console.log(objReference.name); // Logs the original name property of objReference.
// let newName = objReference; // Copies the reference of objReference to newName.
// newName.name = "Siwan Poudel"; // Modifies the name property via the new reference.
// console.log(newName.name); // Logs the modified name property from newName.
// console.log(objReference.name); // Logs the modified name property from objReference, showing the change.

// // ? Overcoming Pass by Reference using Object.assign()
// // * Demonstrating how to create a copy of an object to avoid pass by reference issues.
// let objReference1 = {
//     id: 1,
//     name: "siwan",
//     age: "20"
// };
// console.log(objReference1.name); // Logs the original name property of objReference1.
// let newNames = Object.assign({}, objReference1); // Creates a copy of objReference1.
// newNames.name = "Siwan Poudel"; // Modifies the name property of the new copy.
// console.log(newNames.name); // Logs the modified name property from the new copy.
// console.log(objReference1.name); // Logs the original name property from objReference1, showing it remains unchanged.

// // ! JSON "JavaScript Object Notattion"
// // ? JSON.stringify.
// // * Used to convert the data into JSON string
// // Expample
// let object1 = {
//     id: 1,
//     name: "ram",
// }
// let jobject1 = JSON.stringify(object1);
// // by using JSON.stringify, the object convert into json string where the key indside the object will place within the Double quotation"".
// console.log(jobject1);
// // by using JSON.parse, the data will be convert to its original state
// console.log(JSON.parse(jobject1));

// // ! Some useful method
// // ? it will copy the object data to new empty object for original object remain same.
// Object.assign({}, object1, objReference1);
// Object.entries(object1);
// // ? It will free the object to not manipulate its data.
// Object.freeze(object1);
// // ? it will get the key of an object
// Object.keys(object1);
// // ? it will get the value of key of an object
// Object.values(object1);
// // ? it will return boolean true if object have own property otherwise false 
// object1.hasOwnProperty(object1);


// ! write function to add a new subject with its grades to the student record. Also check if the grades property is present or not
let student = {
    name: "Bob",
    age: 20,
    grades: {
        math: 90,
        science: 85,
        history: 88
    }
}
// * adding new subject with grades
const addSubject = (() => {
    // * check if the grades present then execute adding new subject with grades
    if(student.hasOwnProperty('grades')){
    student.grades.computer = 95;
    } else {
        // * display error if the grades not found 
        console.error("Grades not found");
    }
});
// execute the fuction by calling it
addSubject();
// checking if the computer is added or not
console.log(student);