/*=====================================
Profile page Setup
=====================================*/
const dashBtn = document.querySelector("#editt");
const editBtn = document.querySelector("#edit");

const Active = document.querySelector(".Active");
const Editbtn = document.querySelector(".edit-btn");
const Homebtn = document.querySelector(".home-btn");
const Catbtn = document.querySelector(".cat-btn");
const Contctbtn = document.querySelector(".contct-btn");


/*Desktop side navigation buttons setup*/
Homebtn.addEventListener("click", function () {
    Homebtn.classList.add('Active');

    Active.classList.remove('Active');
    Editbtn.classList.remove('Active');
    Catbtn.classList.remove('Active');
    Contctbtn.classList.remove('Active');
})

Catbtn.addEventListener("click", function () {
    Catbtn.classList.add('Active');

    Active.classList.remove('Active');
    Editbtn.classList.remove('Active');
    Homebtn.classList.remove('Active');
    Contctbtn.classList.remove('Active');
})

Contctbtn.addEventListener("click", function () {
    Contctbtn.classList.add('Active');

    Active.classList.remove('Active');
    Editbtn.classList.remove('Active');
    Catbtn.classList.remove('Active');
    Homebtn.classList.remove('Active');
})

Active.addEventListener("click", function () {
    Active.classList.add('Active');

    Editbtn.classList.remove('Active');
    Catbtn.classList.remove('Active');
    Homebtn.classList.remove('Active');
    Contctbtn.classList.remove('Active');
})

Editbtn.addEventListener("click", function () {
    Editbtn.classList.add('Active');

    Active.classList.remove('Active');
    Catbtn.classList.remove('Active');
    Homebtn.classList.remove('Active');
    Contctbtn.classList.remove('Active');
});