const navbar = document.querySelector(".navbar"),
allSEction = document.querySelectorAll("section"),
allLink = document.querySelectorAll(".navbar .menu a");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("discroll");
    } else if(window.scrollY < 50) {
        navbar.classList.remove("discroll");

    }
})

document.querySelector(".hamburger").addEventListener("click", () => {
    navbar.classList.toggle("active");
})