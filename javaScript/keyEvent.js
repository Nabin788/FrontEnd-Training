// ! geting type id html property 
let inputBox = document.getElementById("type");

// ?defining function having data parameter. data represent the the data we are inserted in input box
const inputBoxfunc = ((data) => {
    // *it will get the keyname class HTML element and display the data inserted in textcontent.
    document.querySelector(".keyName").textContent = `Key Press:${data.key}`;
    // * it will get the charcode class HTML element  and display the inserted data char code number.
    document.querySelector(".charCode").textContent = `Char code:${data.key.charCodeAt(0)}`

});
// ? function with eventListener for event fire.
inputBox.addEventListener("keypress", inputBoxfunc);

