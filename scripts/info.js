"use strict";
const endpoint = "https://snifagent.dk/wordpress/wp-json/wp/v2/";

document.addEventListener("DOMContentLoaded", () => {
    getSplash();
});


async function getSplash() {
    const response = await fetch(endpoint + "splash/29");
    let splash = await response.json();    
    let splashContainer = document.querySelector(".splash");
    splashContainer.style.backgroundImage = `url(${splash.splashbillede.guid})`;
    getAbout();
}

async function getAbout () {
    const response = await fetch(endpoint + "om/35");
    let aboutPod = await response.json();    
    document.querySelector("#about h1").textContent = aboutPod.overskrift;
    document.querySelector(".about_img_container img").src = aboutPod.billede.guid;
    document.querySelector(".about_text_container h3").textContent = aboutPod.manchette;
    document.querySelector(".about_text_container p").textContent = aboutPod.tekst;
    getSnif();
}

async function getSnif() {
    const response = await fetch(endpoint + "om_snif/23");
    let snifPod = await response.json();    
    document.querySelector("#snif h1").textContent = snifPod.overskrift;
    document.querySelector(".snif_text_left p").textContent = snifPod.tekst_venstre;
    document.querySelector(".snif_text_right p").textContent = snifPod.tekst_hjre;
    document.querySelector(".snif_img_container img").src = snifPod.billede.guid;
}
