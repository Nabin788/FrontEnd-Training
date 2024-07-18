// ! Object
// ? creating object.
// * We can create object within open close curly bracket {}.
let objValue = {
    name: "Nabin Poudel",
    age: 24,
    address: "Bhaluwan-3, Dang",
    Gender: true,
    computer: function () {
        console.log("Welcome to my java Script learning season");
    }
}
console.log(objValue);

// * we can extract single key value from object by using notation and bracket
console.log(objValue.name);
console.log(objValue[`age`]);
console.log(objValue.Gender);

// * we can add key value on define object and also modify
// Here we can add key value by using notatio or bracket
objValue["married Status"] = "Unmarried";
// Here we can modify value by using notatio or bracket
objValue.Gender = "Male";

// * We can acess function or method of object
objValue.computer();

// ? we can create dynamic key of an object
let idType = "collegeId";
let object = {
    // We can create dynamic key by using open close square bracket outside of key []
    [idType]: "019530115",
    Name: "Nabin Poudel",
    address: "Bhaluwang",
    collegeFun: function () {
        console.log(`My ${idType} is ${object[idType]} and My Name is ${object.Name}`);
    }
}
object.collegeFun();

// ! Pass by value and Pass By reference
// ? pass By value
// * In the given example we can see that we can share the value of num to other and the original value not affect.
// By sharing the copy of value and not affect original state called pass by value or primitive
let num = 10;
let calculation = ((x) => {
    return num + x;
});
console.log(calculation(num));
console.log(num);

// ? pass By Reference
// * In the given example we can see that we can share the value of objReference to other and the original value affect.
// By sharing the copy of value and affect the original state called pass by Reference
let objReference = {
    id: 1,
    name: "siwan",
    age: "20"
}
// In the given log the value will display original name define within an object
console.log(objReference.name);
// here the key value will be share to other variable
let newName = objReference;
// Here the share key value redefine to new value
newName.name = "Siwan Poudel";
// here the log will display the variable where the redefine value store 
console.log(newName.name);
// here the log display original key bvalue variable but the name value is changed because of pass by rederence
console.log(objReference.name);
