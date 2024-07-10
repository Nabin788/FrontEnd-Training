// // ! Window object. Global window in a browser. Both the BOM and DOM are part of the window object.
// // ? 1. BOM 
// // * Browser Object Model provides the methods and properties for interacting with the browser itself. 
// // * It focuse on browser enviroment
// // BOM feature includes window.navigator for browser information
// // window.location for URL manipulation.
// // window.alert for displaying the alert.

// // ? 2. DOM is an API. Document Object Model. Create tree like structure
// // * DOM Intract, navigate and manipulatrr the the HTML code with the help of Js dynamically
// // * It focus on the content of the page.
// // * Type of nodes
// // Element node : Html tag, tree building blocks
// // text node : text content including new lines, spaces and tabs.
// // attribures node: attribute of an element.
// // comment node : Comment of HTML.
// // Processing node : <? xml-stylesheet ... ?>
// // Document node : A document node.
// // Document type node : <! Doctype html>

// // ! DOM Navigation
// // It will navigate the overal html code
// let parent = document;
// console.log(parent);
// // It will navigate only head tag element
// let documentHead = document.head;
// console.log(documentHead);
// // It will navigate only body tag element
// let documentBody = document.body;
// console.log(documentBody);
// // It will navigate tag used in html body.
// let bodyChildren = documentBody.children;
// console.log(bodyChildren);
// //  It will navigate the detailed tag element used in body
// let bodyChildrenNodes = documentBody.childNodes;
// console.log(bodyChildrenNodes);
// // It will navigate the first elemetn of body.
// let firstElementChild = documentBody.firstElementChild
// console.log(firstElementChild);
// // It will navigate the last Element of body
// let lastElementChild = documentBody.lastElementChild;
// console.log(lastElementChild);
// // It will navigate to next sibling of child
// let nextElementSibling = firstElementChild.nextElementSibling;
// console.log(nextElementSibling);
// // It will navigate to previous sibling of next child
// let previousElementSibling = nextElementSibling.previousElementSibling;
// console.log(previousElementSibling);

// // ! DOM search
// // * document.getElementsById. 
// //  it is used to search the element by ID 
// let idNames = document.getElementById("heading");
// // It will get to the element where id is present and display the overall code or html collection of that element
// console.log(idNames);
// // it will get the data present in a element
// console.log(idNames.innerHTML);
// console.log(idNames.innerText);
// console.log(idNames.textContent);

// // *document.getElementsByClassName
// let className = document.getElementsByClassName("nav-container");
// // it is object like array but not actual array
// // it will display the html collection
// console.log(className);
// // display error because it will is iterable by using spread operator and display undefine if we remove spread operator
// console.log(className.innerHTML);
// console.log(className.innerText);
// console.log(className.textContent);
// // for get elements by id we have to use for of loop
// for (data of className) {
//     // it will get the element use within a class
//     console.log(data.innerHTML);
//     // it will get the data present in a element but it will not ignore css and present same data as it display in a page. 
//     console.log(data.innerText);
//     // it will get the data present in a element and ignore the css.
//     console.log(data.textContent);
// }

// // * document.getElementsByTagName
// let tagName = document.getElementsByTagName("li");
// // it will get iterate li 
// console.log(tagName);
// for(tag of tagName){
//     // it will get the data from that element
//     console.log(tag.innerHTML);
// }

// // * document.getElementsByQuerySelector.
// let querySelector = document.querySelector("#heading");
// let querySelector1 = document.querySelector(".nav-container");
// console.log(querySelector, querySelector1);
// // it will display first li element
// let querySelector2 = document.querySelector("li");
// // it will display all li present in a page
// let querySelector3 = document.querySelectorAll("li");
// console.log(querySelector2, querySelector3);
// // we can also changed manipulate the data by using DOM 
// let querySelector4 = document.querySelector("p");
// // here we can manipulate the data of p element 
// console.log(querySelector4.innerText = "DOM stand for Document Object Model and BOM stand for Browser Object Model");

// ! create element operation DOM
let input = document.getElementById("search");
let todo = document.querySelector(".todo");
let clickBtn = document.querySelector("#btn");

const add = () => {
    console.log(input.value);
    let values = document.createElement("p");
    values.textContent = input.value;
    console.log(values);
    todo.append(values)

    input.value = "";
}

clickBtn.addEventListener("click", () => {
    add();
})


