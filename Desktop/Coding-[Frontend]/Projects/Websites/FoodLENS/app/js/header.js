/*=====================================
Header links active state setup
=====================================*/
const home = document.querySelector('.link1');
const features = document.querySelector('.link2');
const about = document.querySelector('.link3');
const reviews = document.querySelector('.link4');
const blog = document.querySelector('.link5');
const contact = document.querySelector('.link6');

home.onclick = () => {
    home.classList.add('nav-active');

    features.classList.remove('nav-active');
    about.classList.remove('nav-active');
    reviews.classList.remove('nav-active');
    blog.classList.remove('nav-active');
    contact.classList.remove('nav-active');
}

features.onclick = () => {
    features.classList.add('nav-active');

    home.classList.remove('nav-active');
    about.classList.remove('nav-active');
    reviews.classList.remove('nav-active');
    blog.classList.remove('nav-active');
    contact.classList.remove('nav-active');
}

about.onclick = () => {
    about.classList.add('nav-active');

    features.classList.remove('nav-active');
    home.classList.remove('nav-active');
    reviews.classList.remove('nav-active');
    blog.classList.remove('nav-active');
    contact.classList.remove('nav-active');
}

reviews.onclick = () => {
    reviews.classList.add('nav-active');

    features.classList.remove('nav-active');
    about.classList.remove('nav-active');
    home.classList.remove('nav-active');
    blog.classList.remove('nav-active');
    contact.classList.remove('nav-active');
}

blog.onclick = () => {
    blog.classList.add('nav-active');

    features.classList.remove('nav-active');
    about.classList.remove('nav-active');
    reviews.classList.remove('nav-active');
    home.classList.remove('nav-active');
    contact.classList.remove('nav-active');
}

contact.onclick = () => {
    contact.classList.add('nav-active');

    features.classList.remove('nav-active');
    about.classList.remove('nav-active');
    reviews.classList.remove('nav-active');
    blog.classList.remove('nav-active');
    home.classList.remove('nav-active');
}