"use strict";

document.addEventListener("DOMContentLoaded", () => {
    window.onscroll = function () {
        changeNavBar();
    };
    openCloseMenu();
});

function changeNavBar() {
    let navBar = document.querySelector("header");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        navBar.classList.add("nav_scrolled");
    } else {
        navBar.classList.remove("nav_scrolled");
    }
    scrollToTop();
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

function scrollToTop() {
    let toTopButton = document.querySelector(".totop_button");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        toTopButton.style.display = "block";
        toTopButton.addEventListener("click", topFunction);
    } else {
        toTopButton.style.display = "none";
        toTopButton.removeEventListener("click", topFunction);
    }
    function topFunction(e) {
        e.preventDefault();
        scroll({
          top: 0,
          behavior: "smooth"
        });
    }
}
