const editBtn = document.querySelector("#edit");
const dashBtn = document.querySelector("#editt");

const profileDetails = document.querySelector(".profile-details");
const profileEdit = document.querySelector(".profile-edit");

const Active = document.querySelector(".Active");
const Editbtn = document.querySelector(".edit-btn");


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