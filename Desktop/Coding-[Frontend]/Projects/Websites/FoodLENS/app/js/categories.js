/*============================================
Category page head links Setup
============================================*/
const catgory_all = document.querySelector('.a');
const catgory_starch = document.querySelector('.b');
const catgory_meat = document.querySelector('.c');
const catgory_pastries = document.querySelector('.d');
const catgory_fruits = document.querySelector('.e');
const catgory_vegan = document.querySelector('.f');


catgory_all.addEventListener('click', function() {
    catgory_all.classList.add('big');
    catgory_all.classList.remove('small');

    catgory_starch.classList.remove('big');
    catgory_meat.classList.remove('big');
    catgory_pastries.classList.remove('big');
    catgory_fruits.classList.remove('big');
    catgory_vegan.classList.remove('big');

    catgory_starch.classList.add('small');
    catgory_meat.classList.add('small');
    catgory_pastries.classList.add('small');
    catgory_fruits.classList.add('small');
    catgory_vegan.classList.add('small');
});

catgory_starch.addEventListener('click', function() {
    catgory_starch.classList.add('big');
    catgory_starch.classList.remove('small');

    catgory_all.classList.remove('big');
    catgory_meat.classList.remove('big');
    catgory_pastries.classList.remove('big');
    catgory_fruits.classList.remove('big');
    catgory_vegan.classList.remove('big');

    catgory_all.classList.add('small');
    catgory_meat.classList.add('small');
    catgory_pastries.classList.add('small');
    catgory_fruits.classList.add('small');
    catgory_vegan.classList.add('small');
});

catgory_meat.addEventListener('click', function() {
    catgory_meat.classList.add('big');
    catgory_meat.classList.remove('small');

    catgory_all.classList.remove('big');
    catgory_starch.classList.remove('big');
    catgory_pastries.classList.remove('big');
    catgory_fruits.classList.remove('big');
    catgory_vegan.classList.remove('big');

    catgory_all.classList.add('small');
    catgory_starch.classList.add('small');
    catgory_pastries.classList.add('small');
    catgory_fruits.classList.add('small');
    catgory_vegan.classList.add('small');
});

catgory_pastries.addEventListener('click', function() {
    catgory_pastries.classList.add('big');
    catgory_pastries.classList.remove('small');

    catgory_all.classList.remove('big');
    catgory_meat.classList.remove('big');
    catgory_starch.classList.remove('big');
    catgory_fruits.classList.remove('big');
    catgory_vegan.classList.remove('big');

    catgory_all.classList.add('small');
    catgory_meat.classList.add('small');
    catgory_starch.classList.add('small');
    catgory_fruits.classList.add('small');
    catgory_vegan.classList.add('small');
});

catgory_fruits.addEventListener('click', function() {
    catgory_fruits.classList.add('big');
    catgory_fruits.classList.remove('small');

    catgory_all.classList.remove('big');
    catgory_meat.classList.remove('big');
    catgory_pastries.classList.remove('big');
    catgory_starch.classList.remove('big');
    catgory_vegan.classList.remove('big');

    catgory_all.classList.add('small');
    catgory_meat.classList.add('small');
    catgory_pastries.classList.add('small');
    catgory_starch.classList.add('small');
    catgory_vegan.classList.add('small');
});

catgory_vegan.addEventListener('click', function() {
    catgory_vegan.classList.add('big');
    catgory_vegan.classList.remove('small');

    catgory_all.classList.remove('big');
    catgory_meat.classList.remove('big');
    catgory_pastries.classList.remove('big');
    catgory_starch.classList.remove('big');
    catgory_fruits.classList.remove('big');

    catgory_all.classList.add('small');
    catgory_meat.classList.add('small');
    catgory_pastries.classList.add('small');
    catgory_starch.classList.add('small');
    catgory_fruits.classList.add('small');
});