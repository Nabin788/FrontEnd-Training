//! operator in javaScript

//? 1. assign operator. = is an assign operator
var a = 1;
console.log(" = is an assign operator");

//? 2. Arithmatic operator. there are 5 different type of arithmatic operator. in the operator 1+2 = 3, 1 and two are operand, + are operaot and output 3 are expression
//* addition operator. + is an addition operator
var a = 1;
var b = 2;
var sum = a + b;
console.log(`The value of sum is  ${sum}`);

//* substraction operator. - is an substraction operator
var a = 1;
var b = 2;
var sub = a - b;
console.log(`The value of difference is ${sub}`);

//* multiplication operator. * is an multiplication operator
var a = 1;
var b = 2;
var mul = a * b;
console.log(`The value of multiplication is ${mul}`);

//* division operator. / is an division operator
var a = 1;
var b = 2;
var div = a / b;
console.log(`The value of division is ${div}`);

//* modular operator. % is an modular operator
var a = 10;
var b = 4;
var mod = a % b;
console.log(`The value of modular is ${mod}`);

// ? 3. comparision operator. == is an comparision operator
var a = 1;
var b = "1";
if (a == b) {
    console.log("true");
} else {
    console.log('false');
}

// ? 4. not operator. != is an comparision operator
var a = 1;
var b = "1";
if (a != b) {
    console.log("true");
} else {
    console.log('false');
}

// ? 5. data type check operator. === is an comparision operator
//* output must be false because a is an num data type and b is an string data type. 
var a = 1;
var b = "1";
if (a === b) {
    console.log("true");
} else {
    console.log('false');
}

console.log(a === b);


// ? 6. logical operator. There are three different type.
//* And operator. true + true = true, t + f = f, f + t = f, f + f = f;
var a = 1;
var b = 2; 
console.log(a>0 && b>0);

// //* or operator. true + false = true, t + t = t, f + t = t, f+f = f
var a = 1;
var b = 2; 
console.log(a>5 || b>0);

//* nor operator. false + false = true
var a = 1;
var b = 2; 
console.log(!a>b);

var age = 18;
var license = true;
if (age >= 18 && license) {
    console.log("he or she able to drive");
} else {
    console.log("under age");
}

//? conditional ternary operator
var age = 18;
var output = age >= 18? "yes he or she able to drive" : "no they are under age";
console.log(output);

var score = 65;
var result = score >= 60 ? "passed" : "failed";
console.log(result);


