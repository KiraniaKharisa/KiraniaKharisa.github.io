const navbar = document.querySelector(".navbar"),
allSection = document.querySelectorAll("section"),
allLink = document.querySelectorAll(".navbar .menu a");

window.addEventListener("scroll", () => {
    allSection.forEach(section => {
        let scrollWindow = window.scrollY,
        sectionOffset = section.offsetTop - 100,
        sectionHeight = section.offsetHeight,
        idSection = section.getAttribute('id');

        if(scrollWindow >= sectionOffset && scrollWindow < sectionOffset + sectionHeight) {
            allLink.forEach(link => {
                link.classList.remove("active");
                document.querySelector(".navbar .menu a[href*=" + idSection + "]").classList.add("active");
            })
        }
    })

    navbar.classList.toggle("discroll", window.scrollY > 50);
})

document.querySelector(".hamburger").addEventListener("click", () => {
    navbar.classList.toggle("active");
})