let skills = document.querySelector("#skills");
let interest = document.querySelector("#interest");
let career = document.querySelector("#career");
let skillLink = document.querySelector("#skillsLink")
let interestLink = document.querySelector("#interestLink")
let careerLink = document.querySelector("#careerLink")
let colorBtn = document.querySelector("#color")
let placeBtn = document.querySelector("#place")
let ritualBtn = document.querySelector("#ritual")

function showSkills() {
    skills.classList.add("show")
    interest.classList.remove("show")
    career.classList.remove("show")
    skillsLink.classList.add("border")
    interestLink.classList.remove("border")
    careerLink.classList.remove("border")
}

function showInterest() {
    skills.classList.remove("show")
    interest.classList.add("show")
    career.classList.remove("show")
    skillsLink.classList.remove("border")
    interestLink.classList.add("border")
    careerLink.classList.remove("border")
}
function showCareer() {
    skills.classList.remove("show")
    interest.classList.remove("show")
    career.classList.add("show")
    skillsLink.classList.remove("border")
    interestLink.classList.remove("border")
    careerLink.classList.add("border")
}

skillLink.addEventListener("click", showSkills)
interestLink.addEventListener("click", showInterest)
careerLink.addEventListener("click", showCareer)

function favoriteColor(){
    alert('Lime Green or Royal Purple')
}

function favoritePlace(){
    alert('San Juan, Puerto Rico')
}

function favoriteRitual(){
    alert('Summoning Super-Ducky')
}

colorBtn.addEventListener("click", favoriteColor)
placeBtn.addEventListener("click", favoritePlace)
ritualBtn.addEventListener("click", favoriteRitual)