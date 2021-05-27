"use strict";
window.addEventListener("load", () => {
    init();

    let snifAnimation = bodymovin.loadAnimation({
        container: document.querySelector(".snif_container"),
        renderer: "svg",
        loop: false,
        autoplay: true,
        path: "animation_with_sound.json"
    });
});

function init() {
    const games = "spil.json";
    const array = [];
    fetchGames(games, array);
}

async function fetchGames(games, array) {
    const response = await fetch(games);
    array = await response.json();
    displayGames(array);
}

function displayGames(array) {
    const contentHolder = document.querySelector("main");
    const gameTemplate = document.querySelector("template");
    contentHolder.textContent = "";
    array.forEach(game => {
        let clone = gameTemplate.cloneNode(true).content;
        clone.querySelector(".title").textContent = game.title;
        clone.querySelector("img").src = game.image;

        clone.querySelector(".thumbnail").addEventListener("click", () => {
            location.href = `single.html?id=${game.id}`;
          });
        contentHolder.appendChild(clone);
    });
    setTimeout(() => {
        randomizeThumbnails();
    }, 3000); 
}
function randomizeThumbnails() {
    let thumbnails = document.querySelectorAll(".thumbnail");
    let randomThumbnail = Math.floor(Math.random() * thumbnails.length);
    thumbnails[randomThumbnail].removeEventListener("animationend", randomizeThumbnails);
    thumbnails[randomThumbnail].classList.remove("game_wiggle");
    setTimeout(() => {
        animateThumbnails(randomThumbnail, thumbnails);
    }, 3000); 
}

function animateThumbnails(randomThumbnail, thumbnails) {
    thumbnails[randomThumbnail].classList.add("game_wiggle");
    thumbnails[randomThumbnail].addEventListener("animationend", randomizeThumbnails);
}