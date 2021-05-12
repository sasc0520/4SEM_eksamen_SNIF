"use strict";

window.addEventListener("load", () => {
    fetchSVG();
});

async function fetchSVG() {
    const response = await fetch("img/logo.svg");
    const svgLogo = await response.text();
    document.querySelector(".svg_container").innerHTML = svgLogo; 
}