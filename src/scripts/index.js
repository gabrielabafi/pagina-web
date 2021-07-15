import list from './modules/list'

console.log(`Hello ${list[0]}`)




// Hamburger Menu
var hamburger = document.querySelector(".hamburger")
var hamburgerMenuContent = document.querySelector(".despl")

var body = document.body;


hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");

    // tancar i obrir el menu
    hamburgerMenuContent.classList.toggle("hamburger-open");

    // Fixar el body
    body.classList.toggle("body-fixed");
});