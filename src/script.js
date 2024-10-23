const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("discroll");
    } else if(window.scrollY < 50) {
        navbar.classList.remove("discroll");

    }
})