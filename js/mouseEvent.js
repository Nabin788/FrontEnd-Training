let container = document.querySelector(".box-container");
let button = document.getElementById("btn");

const btnClick = (() => {
    console.log("click");
    container.style.backgroundColor = "red";
});
button.addEventListener('click', btnClick);

const btnClick1 = (() => {
    console.log("mouseover");
    container.classList.add("box");
});
button.addEventListener('mouseover', btnClick1);



