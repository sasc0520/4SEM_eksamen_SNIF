document.addEventListener("DOMContentLoaded", () => {
    getTestimonialsItem();
});

async function getTestimonialsItem() {
    const response = await fetch(endpoint + "udtalelse");
    let testimonials = await response.json(); 
    displayTestimonials(testimonials);   
}

function displayTestimonials(testimonials){
    let testContainer = document.querySelector("#testimonial_clone");
    let testTemplate = document.querySelector("#kundeudtalelser template");
    testContainer.textContent = "";
    testimonials.forEach(testimonial => {
        let clone = testTemplate.cloneNode(true).content;
        clone.querySelector(".quote").textContent = testimonial.udtalelse;
        if(testimonial.billede === false) {
            clone.querySelector(".author_image_container img").src = "img/anon.png";
        } else {
            clone.querySelector(".author_image_container img").src = testimonial.billede.guid;
        }
        clone.querySelector(".title").textContent = testimonial.titel;
        clone.querySelector(".name").textContent = testimonial.navn;
        testContainer.appendChild(clone);
    });
}