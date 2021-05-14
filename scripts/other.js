"use strict";

document.addEventListener("DOMContentLoaded", () => {
    window.onscroll = function () {
        changeNavBar();
    };
});

function changeNavBar() {
    let navBar = document.querySelector("header");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        navBar.classList.add("nav_scrolled");
    } else {
        navBar.classList.remove("nav_scrolled");
    }
}