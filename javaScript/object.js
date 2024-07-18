// ! Object
// ? creating object.
// * We can create object within open close curly bracket {}.
let objValue = {
    name: "Nabin Poudel",
    age: 24,
    address: "Bhaluwan-3, Dang",
    Gender: true,
    computer: function(){
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
    collegeFun: function(){
        console.log(`My ${idType} is ${object[idType]} and My Name is ${object.Name}`);
    }
}
object.collegeFun();
