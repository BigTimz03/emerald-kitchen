// const toggleButton = document.getElementById('nav-toggle');
var navLinks = document.getElementById('nav-links');

function toggleButton() {
    navLinks.classList.toggle('active');
}


function HandleRoute(num) {
    console.log(num)
    localStorage.setItem("ID", num)
}