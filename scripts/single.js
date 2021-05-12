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
}

async function fetchGames(games, array) {
    const response = await fetch(games);
    array = await response.json();
    displayGames(array);
}

function displayGames(array) {
    const singleElement = document.querySelector(".single_container");
    console.log(id);
    array.forEach(game => {
        if(game.id == id) {
            singleElement.querySelector("iframe").src = game.link;
            singleElement.querySelector(".credits span").textContent = game.credits;
        }
    });
}