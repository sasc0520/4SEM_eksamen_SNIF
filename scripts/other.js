"use strict";

document.addEventListener("DOMContentLoaded", () => {
    window.onscroll = function () {
        changeNavBar();
    };
    openCloseMenu();
});

function changeNavBar() {
    let navBar = document.querySelector("header");
    let scrollDownButton = document.querySelector(".scrolldown");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        navBar.classList.add("nav_scrolled");
        scrollDownButton.style.display = "none";
    } else {
        navBar.classList.remove("nav_scrolled");
        scrollDownButton.style.display = "block";
    }
}

function openCloseMenu() {
    const burgerMenu = document.querySelector(".menu_btn");
    let menuOpen = false;  
    burgerMenu.addEventListener("click", () => {
        if(!menuOpen) {
            burgerMenu.classList.add("open");
            document.querySelector("nav > div.menu_items").style.display = "flex";
            document.querySelector("nav > div.menu_items").classList.add("fade_in");
            menuOpen = true;
        } else {
            burgerMenu.classList.remove("open");
            document.querySelector("nav > div.menu_items").style.display = "none";
            document.querySelector("nav > div.menu_items").classList.remove("fade_in");
            menuOpen = false;
        }
    });
    closeMenu ();
    function closeMenu() {
        const main = document.querySelector("main");
        main.addEventListener("click", () => {
            if(menuOpen = true) {
                burgerMenu.classList.remove("open");
                document.querySelector("nav > div.menu_items").style.display = "none";
                document.querySelector("nav > div.menu_items").classList.remove("fade_in");
                menuOpen = false;
            } else {
                burgerMenu.classList.remove("open");
                document.querySelector("nav > div.menu_items").style.display = "none";
                document.querySelector("nav > div.menu_items").classList.remove("fade_in");
                menuOpen = false;
            }
        })
    }
}