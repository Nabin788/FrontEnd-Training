// ! Object Creation
// ? Creating an object with various properties and a method
let objValue = { // Define an object with multiple properties and a method
    name: "Nabin Poudel", // String property
    age: 24, // Number property
    address: "Bhaluwan-3, Dang", // String property
    Gender: true, // Boolean property
    computer: function () { // Method property
        console.log("Welcome to my JavaScript learning session"); // Log a message
    }
};
console.log(objValue); // Display the entire object
console.log(objValue.name); // Accessing property using dot notation
console.log(objValue['age']); // Accessing property using bracket notation
console.log(objValue.Gender); // Accessing a boolean property
objValue["married Status"] = "Unmarried"; // Adding a new property
objValue.Gender = "Male"; // Modifying an existing property
objValue.computer(); // Calling the method within the object

// ? Creating an object with dynamic property names
let idType = "collegeId"; // Define a variable to be used as a dynamic key
let object = { // Define an object with properties, using the variable as a dynamic key
    [idType]: "019530115", // Dynamic key property
    Name: "Nabin Poudel", // String property
    address: "Bhaluwang", // String property
    collegeFun: function () { // Method property
        console.log(`My ${idType} is ${object[idType]} and My Name is ${object.Name}`); // Log a message using dynamic key and object properties
    }
};
object.collegeFun(); // Calling the method within the object

// ! Pass by Value and Pass by Reference
// ? Demonstrating pass by value with primitive types
let num = 10; // Define a number
let calculation = (x => { // Define an arrow function
    return num + x; // Return the sum of num and the argument
});
console.log(calculation(num)); // Outputs 20, num (10) + num (10)
console.log(num); // Outputs 10, num remains unchanged

// ? Demonstrating pass by reference with objects
let objReference = { // Define an object
    id: 1, // Number property
    name: "siwan", // String property
    age: "20" // String property
};
console.log(objReference.name); // Outputs "siwan"
let newName = objReference; // newName references the same object
newName.name = "Siwan Poudel"; // Modify the name property
console.log(newName.name); // Outputs "Siwan Poudel"
console.log(objReference.name); // Outputs "Siwan Poudel" (both references point to the same object)

// ? Cloning an object to demonstrate independent changes
// * it use to replace pass by reference
let objReference1 = { // Define another object
    id: 1, // Number property
    name: "siwan", // String property
    age: "20" // String property
};
console.log(objReference1.name); // Outputs "siwan"
let newNames = Object.assign({}, objReference1); // Clone the object
newNames.name = "Siwan Poudel"; // Modify the name property in the clone
console.log(newNames.name); // Outputs "Siwan Poudel"
console.log(objReference1.name); // Outputs "siwan" (original object remains unchanged)

// ! JSON "JavaScript Object Notation"
// ? Converting an object to JSON and back
let object1 = { // Define an object
    id: 1, // Number property
    name: "ram", // String property
}
let jobject1 = JSON.stringify(object1); // Convert object to JSON string
console.log(jobject1); // Outputs JSON string
console.log(JSON.parse(jobject1)); // Parse JSON string back to object

// ! Some useful Object methods
Object.assign({}, object1, objReference1); // Merging objects
Object.entries(object1); // Get key-value pairs of the object
Object.freeze(object1); // Freeze the object (no changes allowed)
Object.keys(object1); // Get all keys of the object
Object.values(object1); // Get all values of the object
object1.hasOwnProperty('id'); // Check if property exists

// ! Add a new subject with its grades to the student record
let student = { // Define a student object
    name: "Bob", // String property
    age: 20, // Number property
    grades: { // Nested object for grades
        math: 90, // Grade for math
        science: 85, // Grade for science
        history: 88 // Grade for history
    }
}
const addSubject = ((marks) => { // Define a function to add a subject and its grade
    if (student.grades) { // Check if grades property exists
        student.grades.computer = marks; // Adding new subject with grade
    } else {
        console.error("Grades not found"); // Error message if grades property does not exist
    }
});
addSubject(95); // Adding computer subject with grade 95
console.log(student); // Display updated student object

// ! Compare objects to find which ones match
let objA = { name: "Siwan Poudel", age: 24, address: "Bhalubang" }; // Define object A
let objB = { name: "Nabin", age: 24, address: "Bhalubang" }; // Define object B
let objc = { name: "Siwan Poudel", age: 24, address: "Bhalubang" }; // Define object C

const areObjectsEqual = (obj1, obj2) => { // Define a function to compare two objects
    let values1 = Object.values(obj1); // Get values of object 1
    let values2 = Object.values(obj2); // Get values of object 2
    if (values1.length !== values2.length) { // Check if they have the same number of values
        return false; // If not, they are not equal
    }

    for (let i = 0; i < values1.length; i++) { // Loop through values
        if (values1[i] !== values2[i]) { // Check if values are different
            return false; // If different, they are not equal
        }
    }

    return true; // If all values match, they are equal
};

if (areObjectsEqual(objA, objB)) { // Compare object A and B
    console.log("objA and objB match"); // If equal, log match
} else {
    console.log("objA and objB do not match"); // If not equal, log do not match
}

if (areObjectsEqual(objB, objc)) { // Compare object B and C
    console.log("objB and objc match"); // If equal, log match
} else {
    console.log("objB and objc do not match"); // If not equal, log do not match
}

if (areObjectsEqual(objA, objc)) { // Compare object A and C
    console.log("objA and objc match"); // If equal, log match
} else {
    console.log("objA and objc do not match"); // If not equal, log do not match
}

// ! Create a function where array of objects into an object where keys are the objects' ids
let arrObj = [ // Define an array of objects
    { id: 1, name: "Nabin", age: 24 }, // Object 1
    { id: 2, name: "Siwan", age: 24 }, // Object 2
    { id: 3, name: "Basanta", age: 24 } // Object 3
];

const transferObject = ((obj) => { // Define a function to transform the array
    let emptyObj = {}; // Define an empty object
    for (let key of obj) { // Loop through the array
        emptyObj[key.id] = key; // Using object ids as keys
    }
    return emptyObj; // Return the transformed object
});
console.log(transferObject(arrObj)); // Display the transformed object
