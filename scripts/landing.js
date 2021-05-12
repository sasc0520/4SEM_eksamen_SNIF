"use strict";

window.addEventListener("load", () => {
    document.querySelector(".blue_button").addEventListener("mouseover", () => {
        document.querySelector(".boern .img_container").classList.add("wiggle");
        document.querySelector(".blue_button").addEventListener("mouseout", () => {
            document.querySelector(".boern .img_container").classList.remove("wiggle");
        });
    });
    document.querySelector("#container > div.btn_container > a > button").addEventListener("mouseover", () => {
        document.querySelector("#container > div.img_container").classList.add("float");
        document.querySelector("#container > div.btn_container > a > button").addEventListener("mouseout", () => {
            document.querySelector("#container > div.img_container").classList.remove("float");
        });
    });
});

