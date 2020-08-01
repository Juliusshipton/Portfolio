﻿

//JS for navbar on scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos >= currentScrollPos) {
        document.getElementById("customNavbar").style.top = "0";
        document.getElementById("customNavbar").style.zIndex = "1";
    } else {
        document.getElementById("customNavbar").style.top = "-150px";
    }
    prevScrollpos = currentScrollPos;
}



//JS for flyout menu
var roundButton = document.querySelector("#roundButton");
roundButton.addEventListener("click", showMenu, false);

var flyoutMenu = document.querySelector("#flyoutMenu");
flyoutMenu.addEventListener("click", hideMenu, false);

//fix for info overlapping menu
var infoDiv = document.querySelector("#info");

function showMenu(e) {
    flyoutMenu.classList.add("show");

    //hide stuff that was overlapping menu
    infoDiv.style.display = 'none';

    document.body.style.overflow = "hidden";
}

function hideMenu(e) {
    flyoutMenu.classList.remove("show");
    e.stopPropagation();

    //show stuff that was overlapping menu
    infoDiv.style.display = 'block';

    document.body.style.overflow = "auto";
}


//JS for loader
let loaderWrapper = document.querySelector('.loader-wrapper');

window.addEventListener('load', function () {
    loaderWrapper.style.display = 'none';
})
