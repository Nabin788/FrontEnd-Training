let parentList = document.getElementById("parent_list");

const listItems = (event) => {
    // it will target each element of list individually
    let listItems = event.target;
    listItems.style.transform = "rotateY(360deg)";
    let displayItems = document.getElementById("items_value");
    displayItems.innerText = `${listItems.innerText}`;
};

parentList.addEventListener("click", listItems);
