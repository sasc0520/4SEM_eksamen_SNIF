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
}