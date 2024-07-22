// ! Events. There are 3 way to writing events in java Script. we can use any of this events but most prefer events are addEventListeners.
// * we are using mosue event for practice
// ? 1. Inline Event. writing the js code within a html code.

// ? 2. DOM Event Handler.
// * by using document.getElementById("id name") we can get html element who have that idname 
// * by using .onclick (we have to used function) mouse event we can manipulate that element value by click on the value
// Here we are displaying alert when user click on that value  
document.getElementById("btn").onclick = (() => {
    alert("Hello onclick DOM Event handle")
})

// * by using .ondblclick (we have to used function) mouse event we can manipulate that element value by click on the value
// Here we are displaying alert when user double click on that value  
document.getElementById("btn1").ondblclick = function () {
    alert("Hello ondbClick by using DOM Event handler");
}

// ? 3. addEventListener Event Haldler
// * by using mouse event In the addEventListerner('mouse event', function() or => { alert() });
// in the addEventListern we have to remove on from the mouse event.
document.getElementById("btn2").addEventListener('click' , () => {
    alert("Hello onclick by using addEventListener")
});

document.getElementById("btn3").addEventListener('dblclick', function() {
    alert("Hello ondbclick by using addEventListener");
})