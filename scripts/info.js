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
    document.querySelector("#snif h3").textContent = snifPod.manchette;
    document.querySelector(".snif_text_left p").textContent = snifPod.tekst_venstre;
    document.querySelector(".snif_text_right p").textContent = snifPod.tekst_hjre;
    document.querySelector(".snif_img_container img").src = snifPod.billede.guid;
    getProcess();
}

async function getProcess() {
    const response = await fetch(endpoint + "forlbet/62");
    let procPod = await response.json();
    document.querySelector("#forloebet h1").textContent = procPod.overskrift;
    document.querySelector("#forloebet .manchette").textContent = procPod.manchette;
    document.querySelector(".first_text_container p").textContent = procPod.tekst;
    getSteps();
}

async function getSteps() {
    const response = await fetch(endpoint + "trin");
    let stepsPods = await response.json();
    displaySteps(stepsPods);
    getTestimonials();
}

function displaySteps(stepsPods) {
    let stepContainer = document.querySelector("#clone_container");
    let stepTemplate = document.querySelector("template");
    stepContainer.textContent = "";
    stepsPods.forEach(step => {
        let clone = stepTemplate.cloneNode(true).content;
        clone.querySelector(".step_number").textContent = step.nummer;
        clone.querySelector(".step_image_container img").src = step.billede.guid;
        clone.querySelector(".step_text").textContent = step.tekst;
        if (step.venstre_eller_hjre === "0") {
            clone.querySelector("#step_container").classList.add("right");
        } else if (step.venstre_eller_hjre === "1") {
            clone.querySelector("#step_container").classList.add("left");
        }
        stepContainer.appendChild(clone);
    });
}

async function getTestimonials() {
    const response = await fetch(endpoint + "kundeudtalelser/81");
    let testPod = await response.json();    
    document.querySelector("#kundeudtalelser h1").textContent = testPod.overskrift;
    document.querySelector(".test_text_container h3").textContent = testPod.manchette;
    getContact();
}

async function getContact() {
    const response = await fetch(endpoint + "kontakt/100");
    let contactPod = await response.json();
    document.querySelector("#kontakt h1").textContent = contactPod.overskrift;
    document.querySelector("#kontakt h3").textContent = contactPod.manchette;
    document.querySelector(".contact_img_container img").src = contactPod.logo.guid;
    document.querySelector(".adress").textContent = contactPod.adresse;
    document.querySelector(".email").textContent = contactPod.mail;
    document.querySelector(".phone").textContent = contactPod.telefon;
}