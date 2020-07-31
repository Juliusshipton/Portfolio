


//JS for flyout menu
var roundButton = document.querySelector("#roundButton");
roundButton.addEventListener("click", showMenu, false);

var flyoutMenu = document.querySelector("#flyoutMenu");
flyoutMenu.addEventListener("click", hideMenu, false);

function showMenu(e) {
    flyoutMenu.classList.add("show");

    document.body.style.overflow = "hidden";
}

function hideMenu(e) {
    flyoutMenu.classList.remove("show");
    e.stopPropagation();

    document.body.style.overflow = "auto";
}


//JS for loader
let loaderWrapper = document.querySelector('.loader-wrapper');

window.addEventListener('load', function () {
    loaderWrapper.style.display = 'none';
})
