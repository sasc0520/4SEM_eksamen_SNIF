"use strict";

window.addEventListener("load", init);
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

function init() {
    const games = "spil.json";
    const array = [];
    fetchGames(games, array);
    enterFullscreen();
}

async function fetchGames(games, array) {
    const response = await fetch(games);
    array = await response.json();
    displayGames(array);
    displayGameMenu(array);
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

function displayGameMenu(array) {
    let thumbNail1 = document.querySelector("#en");
    let thumbNail2 = document.querySelector("#to");
    if(id === "1") {
        thumbNail1.src = array[1].image;
        thumbNail2.src = array[2].image;
        thumbNail1.addEventListener("click", () => {window.location = "single.html?id=2"});
        thumbNail2.addEventListener("click", () => {window.location = "single.html?id=3"});
    } else if (id === "2") {
        console.log("it is two");
        thumbNail1.src = array[0].image;
        thumbNail2.src = array[2].image;   
        thumbNail1.addEventListener("click", () => {window.location = "single.html?id=1"});
        thumbNail2.addEventListener("click", () => {window.location = "single.html?id=3"}); 
    } else {
        thumbNail1.src = array[0].image;
        thumbNail2.src = array[1].image;    
        thumbNail1.addEventListener("click", () => {window.location = "single.html?id=1"});
        thumbNail2.addEventListener("click", () => {window.location = "single.html?id=2"});
    }
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
          } else if (iframe.msRequestFullscreen) {
            iframe.msRequestFullscreen();
            clickedButton = true;
          }
    })
}
