// ? using reference of html input element
let input = document.getElementById("input");

// ? create function of input filed to perfome a specific task.
// *data parameter access the data inserted by user
const inputEvent = ((data) => {
    // * it will reference the p element and display the data inserted in the input field
    document.querySelector(".inputValue").textContent = `Input Value:${data.target.value}`;
    // * it will reference the p element and display the input data name define in the input field.
    document.querySelector(".inputName").textContent = `Input Name:${data.target.name}`;
    // * it will reference the p element and display the data input type.
    document.querySelector(".inputType").textContent =`Input Type:${data.inputType}`;
    // * it will reference the p element and display the data input event type.
    document.querySelector(".eventType").textContent = `Event Type:${data.type}`
})
// * create event to fire input event type and callback the function 
input.addEventListener("input", inputEvent);
// * create event to fire change event type and callback the function 
// only difference between input and change is that input will display the data user inserted everytime
// and the change is display the data after the user completely type the data
// input.addEventListener("change", inputEvent);

