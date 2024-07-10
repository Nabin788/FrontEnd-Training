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

// ! DOM search
// * document.getElementById. 
//  it is used to search the element by ID 
let names = document.getElementById("heading");
// It will get to the element where id is present and display the overall code of that element
console.log(names);
// it will get the data present in a element
console.log(names.innerHTML);
console.log(names.innerText);
console.log(names.textContent);


// *