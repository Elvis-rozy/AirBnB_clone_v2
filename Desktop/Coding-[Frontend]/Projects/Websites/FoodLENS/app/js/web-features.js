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
        info.textContent = ("Norem ipsum dolor sit amet consecteturn");
        details.textContent = ("elit. Commodi, consequatur error illo laudantiu corrupti expedita adipisci repellendus corporis, accusantium neque ipsum quidem similique aliquid odit necessitatibus esse dolorom");
    }else if (Src == "Images/profiles/prof-2.jpg") {
        myImage.setAttribute("src", "Images/profiles/prof-3.jpg");
        Heading.textContent = ("Emily Anthlers")
        info.textContent = ("Norem ipsum dolor sit amet consecteturn");
        details.textContent = ("Commodi, consequatur error illo laudantiu corrupti expedita adipisci repellendus corporis, accusantium neque ipsum quidem similique aliquid odit necessitatibus esse dolorom");
    } else {
        myImage.setAttribute("src", "Images/profiles/prof-1.jpg");
        Heading.textContent = ("Martha Lindsay");
        info.textContent = ("From fast-food addict to mindful eater.");
        details.textContent = ("I naturally fell into the concept of mindful eating, It takes 15-20 minutes for the food to hit your stomach, so I started eating slower.");
    }
}, 10000);
/*=====================================
Mobile menu setup
=====================================*/
const Bttn = document.querySelector("#menu");
const navBar = document.querySelector(".mobile-menu");
const linK = document.querySelector(".lnk");

/*============================================
Menu Icon Open and Close Function
============================================*/
Bttn.addEventListener("click", () => {
    //close menu
    if (Bttn.classList.contains('menu-open')) {
        console.log('Menu Closed')
        Bttn.classList.remove('menu-open')
        navBar.classList.remove('nav-open')
    }//Open menu
    else {
        console.log('Menu Opened')
        Bttn.classList.add('menu-open')
        navBar.classList.add('nav-open')
    }
})
//Menu Links Closing Function
linK.addEventListener('click', () => {
    Bttn.classList.remove('menu-open')
    navBar.classList.remove('nav-open')
})


/* async function fetchUserData() {
    try {
        const response = await fetch ('https://.....', {
            method: 'POST',
            //what other headers or body parameters should we add here
        });
        if (!response.ok) {
            throw new Error('Request failed with status : ' + response.status);
        }
        const userData = await response.json();
        //Processing the userData as a JSON object
        console.log(userData);

        return userData;
        //returning the userData JSON object
    } catch (error) {
        console.error('Error fetching user data : ', error);
        //return an empty object
        return {};
    }
}


document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Collect form data
    var formData = new FormData(this);

    // Make a POST request using fetch API
    fetch("http://example.com/submit", {
        method: "POST",
        body: formData
    })
    .then(function(response) {
        if (response.ok) {
            // Successful response handling
            console.log("Form data successfully submitted!");
            // You can perform further actions here, like showing a success message
        } else {
            // Error response handling
            console.log("Error submitting form data.");
            // You can display an error message or handle the error in a desired way
        }
    })
    .catch(function(error) {
        // Network or fetch API error handling
        console.log("An error occurred:", error);
        // You can display an error message or handle the error in a desired way
    });
});
 */