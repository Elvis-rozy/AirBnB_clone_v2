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

/* Profile page and profile edit page selectors */
const profileDetails = document.querySelector(".profile-details");
const profileEdit = document.querySelector(".profile-edit");

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

dashBtn.addEventListener("click", function () {
    profileEdit.classList.remove('visible');
    profileEdit.classList.add('invisible');

    Editbtn.classList.add('edit-btn');
    Editbtn.classList.remove('Active');
    Active.classList.add('Active');
    Active.classList.remove('edit-btn');

    profileDetails.classList.remove('invisible');
    profileDetails.classList.add('visible');
})

editBtn.addEventListener("click", function () {
    profileEdit.classList.add('visible');
    profileEdit.classList.remove('invisible');

    Editbtn.classList.add('Active');
    Editbtn.classList.remove('edit-btn');
    Active.classList.add('edit-btn');
    Active.classList.remove('Active');

    profileDetails.classList.add('invisible');
    profileDetails.classList.remove('visible');
});

/* mobile menu links setup*/
const profile = document.querySelector(".Edit");
const Edit = document.querySelector(".edit");

profile.addEventListener("click", function () {
    profileEdit.classList.remove('visible');
    profileEdit.classList.add('invisible');

    profileDetails.classList.remove('invisible');
    profileDetails.classList.add('visible');
})

Edit.addEventListener("click", function () {
    profileEdit.classList.add('visible');
    profileEdit.classList.remove('invisible');

    profileDetails.classList.add('invisible');
    profileDetails.classList.remove('visible');
});