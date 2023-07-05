/*=====================================
Slide-in Animation setup
=====================================*/
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
        } else {
            entry.target.classList.remove('appear');
        }
    })
})
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((elem) => observer.observe(elem));

/*=====================================
Reviews image setup
=====================================*/
let myImage = document.querySelector('.img');
let Heading = document.querySelector(".head");
let info = document.querySelector(".head-info");
let details = document.querySelector(".info");

setInterval(() => {
    const Src = myImage.getAttribute("src");
    if (Src == "Images/profiles/prof-1.jpg") {
        myImage.setAttribute("src", "Images/profiles/prof-2.jpg");
        Heading.textContent = ("James Billway")
        info.textContent = ("Busy high school teacher with a sweet tooth");
        details.textContent = ("I used to give-in to my hunger for sugary treats but was recommended controlled and healthier alternatives from the use of foodlens");
    } else if (Src == "Images/profiles/prof-2.jpg") {
        myImage.setAttribute("src", "Images/profiles/prof-3.jpg");
        Heading.textContent = ("Emily Anthlers")
        info.textContent = ("I basically live in the kitchen as I'm in love with cooking");
        details.textContent = ("Running a restaurant whilst being a foodie, i tend to engulf my self in new and healthy food trends and serving quality meals is everything to me.");
    } else {
        myImage.setAttribute("src", "Images/profiles/prof-1.jpg");
        Heading.textContent = ("Martha Lindsay");
        info.textContent = ("From fast-food addict to mindful eater.");
        details.textContent = ("I naturally fell into the concept of mindful eating, It takes 15-20 minutes for the food to hit your stomach, so I started eating slower.");
    }
}, 10000);