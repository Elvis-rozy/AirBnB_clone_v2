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

/*============================================
Dark mode / Light mode setup
============================================*/
const body = document.querySelector("#body");
const toggleBtn = document.getElementById("toggle-mode");

toggleBtn.addEventListener("click", function() {
    body.classList.toggle("light-mode");
    console.log("clicker");
  });