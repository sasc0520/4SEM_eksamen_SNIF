"use strict";
document.addEventListener("DOMContentLoaded", function () {
    
    getPage();
    window.onscroll = function () {
        changeNavBar();
    };
});

const endpoint = "https://snifagent.dk/wordpress/wp-json/wp/v2/";

async function getPage() { 
    const response = await fetch(endpoint + "om/21");
    let om = await response.json();
    let main = document.querySelector("main");
    main.innerHTML = om.tekst;
}

function changeNavBar() {
    let navBar = document.querySelector("header");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        navBar.classList.add("nav_scrolled");
    } else {
        navBar.classList.remove("nav_scrolled");
    }
}