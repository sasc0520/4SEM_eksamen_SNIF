"use strict";
const endpoint = "https://snifagent.dk/wordpress/wp-json/wp/v2/";
document.addEventListener("DOMContentLoaded", () => {
    getSplash();
});

async function getSplash() {
    const response = await fetch(endpoint + "splash/43");
    let splash = await response.json();    
    let splashContainer = document.querySelector(".splash");
    splashContainer.style.backgroundImage = `url(${splash.splashbillede.guid})`;
    getAbout();
}

async function getAbout () {
    const response = await fetch(endpoint + "om/47");
    let aboutPod = await response.json();    
    document.querySelector("#about h1").textContent = aboutPod.overskrift;
    document.querySelector(".about_img_container img").src = aboutPod.billede.guid;
    document.querySelector(".about_img_container img").alt = aboutPod.billede.post_title;
    document.querySelector("#about h2").textContent = aboutPod.manchette;
    document.querySelector(".about_text_container p").textContent = aboutPod.tekst;
    getSnif();
}

async function getSnif() {
    const response = await fetch(endpoint + "om_snif/49");
    let snifPod = await response.json();    
    document.querySelector("#snif h1").textContent = snifPod.overskrift;
    document.querySelector(".snif_text_left h2").textContent = snifPod.manchette;
    document.querySelector(".snif_text_left p").textContent = snifPod.tekst_venstre;
    document.querySelector(".snif_text_right p").textContent = snifPod.tekst_hjre;
    document.querySelector(".snif_img_container img").src = snifPod.billede.guid;
    document.querySelector(".snif_img_container img").alt = snifPod.billede.post_title;
    getProcess();
}

async function getProcess() {
    const response = await fetch(endpoint + "om_forlbet/51");
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
        clone.querySelector(".step_image_container img").alt = step.billede.post_title;
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
    const response = await fetch(endpoint + "kundeudtalelser/66");
    let testPod = await response.json();
    const testimonialsR = await fetch(endpoint + "udtalelser");
    let testimonials = await testimonialsR.json();
    document.querySelector("#kundeudtalelser h1").textContent = testPod.overskrift;
    document.querySelector(".test_text_container h2").textContent = testPod.manchette;
    let testimonialTemplate = document.querySelector(".testimonial_template");
    let testimonialContainer = document.querySelector("#testimonial_container");
    testimonialContainer.textContent = "";
    testimonials.forEach(testimonial => {
        let clone = testimonialTemplate.cloneNode(true).content;
        clone.querySelector(".quote").textContent = '"' + testimonial.udtalelse + '"';
        clone.querySelector(".author_img .author").src = testimonial.billede.guid;
        if (testimonial.billede === false) {
            clone.querySelector(".author_img .author").src = "img/anon.png";
        }
        clone.querySelector(".title").textContent = '"' + testimonial.titel + '"';
        clone.querySelector(".name").textContent = testimonial.navn;
        testimonialContainer.appendChild(clone);
    });
    getContact();
    makeCarousel();
}

async function getContact() {
    const response = await fetch(endpoint + "kontakt/74");
    let contactPod = await response.json();
    document.querySelector("#kontakt h1").textContent = contactPod.overskrift;
    document.querySelector("#kontakt h2").textContent = contactPod.manchette;
    document.querySelector(".contact_img_container img").src = contactPod.billede.guid;
    document.querySelector(".contact_img_container img").alt = contactPod.billede.post_title;
    document.querySelector(".adress").textContent = contactPod.adresse;
    document.querySelector(".email").textContent = contactPod.mail;
    document.querySelector(".phone").textContent = contactPod.telefon;
}

function makeCarousel() {
    const nextIcon = '<img src="img/knap_hoejre.png">';
    const prevIcon = '<img src="img/knap_venstre.png">';
     $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay: true,
        margin:20,
        navText: [
            prevIcon,
            nextIcon
        ],
        responsiveClass:true,
        dots: false,
        responsive:{
            0:{
                items:1,
                nav:true,
            },
            600:{
                items:2,
                nav:true
            },
            1000:{
                items:3,
                nav:true,
            }
        }
    })
}