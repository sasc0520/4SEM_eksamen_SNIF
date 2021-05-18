"use strict";

window.addEventListener("load", init);
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

function init() {
    const games = "spil.json";
    const array = [];
    const mediaQuery = window.matchMedia('(min-width: 939px)');
    if (mediaQuery.matches) {
        document.querySelector("body").style.overflow = "visible";
    } else {
        document.querySelector("body").style.overflow = "hidden";
    }
    fetchGames(games, array);
    enterFullscreen();
}

async function fetchGames(games, array) {
    const response = await fetch(games);
    array = await response.json();
    displayGames(array);
}

function displayGames(array) {
    const singleElement = document.querySelector(".single_container");
    array.forEach(game => {
        if(game.id == id) {
            singleElement.querySelector("iframe").src = game.link;
            singleElement.querySelector(".credits span").textContent = game.credits;
        }
    });
}

function enterFullscreen() {
    const fullscreenButton = document.querySelector(".fullscreen");
    const iframe = document.querySelector("iframe");
    let clickedButton = false;
    fullscreenButton.addEventListener("click", () => {
        if (clickedButton = false) {
            iframe.requestFullscreen();
            clickedButton = true;
          } else if (iframe.webkitRequestFullscreen) {
            iframe.webkitRequestFullscreen();
            clickedButton = true;
          } else if (elem.msRequestFullscreen) {
            iframe.msRequestFullscreen();
            clickedButton = true;
          }
    })
}
