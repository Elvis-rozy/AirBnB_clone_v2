const hamburgerBtn =  document.querySelector("#menu");
const hamburger =  document.querySelectorAll(".hamburger");
const menuBox = document.querySelector(".mobile-menu");
const links = document.querySelectorAll(".lnk");

links.forEach((link=> link.addEventListener("click", ()=>  {
  menuBox.classList.replace("nav-open", "nav-closed");
  hamburgerBtn.classList.remove("menu-open");
  hamburger.forEach(burger=>burger.style.background = ("#fff"));
  hamburgerBtn.style.background = ("black");
})));

hamburgerBtn.addEventListener("click", function(){
  if(menuBox.classList.contains("nav-open")){ //Close hamburger menu
    hamburgerBtn.classList.remove("menu-open");
    hamburgerBtn.style.background = ("black");
    hamburger.forEach(burger=>burger.style.background = ("#fff"));
    menuBox.classList.replace("nav-open", "nav-closed");
  }
  else { //Open hamburger menu
    hamburgerBtn.classList.add("menu-open");
    hamburgerBtn.style.background = ("#fff");
    hamburger.forEach(burger=>burger.style.background = ("black"));
    menuBox.classList.replace("nav-closed", "nav-open");
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => entry.isIntersecting ? entry.target.classList.add("show") : entry.target.classList.remove("show"));
});
const hiddenElements = document.querySelectorAll(".hidden-left, .hidden-right");
hiddenElements.forEach(element => observer.observe(element));

const observ = new IntersectionObserver((entries) => {
  entries.forEach(entry => entry.isIntersecting ? entry.target.classList.add("dark") : entry.target.classList.remove("dark"));
});
const background = document.querySelectorAll(".light");
background.forEach(element => observ.observe(element));

const cancelOn = new IntersectionObserver((entries) => {
  entries.forEach(entry => !entry.isIntersecting ? hamburgerBtn.classList.replace("fadeOut", "fadeIn") : hamburgerBtn.classList.replace("fadeIn", "fadeOut"));
});
const visibleCancel = document.querySelector(".shown");
cancelOn.observe(visibleCancel);


const previewImg = document.querySelectorAll(".workImage");
let index = 0;
const workSection = document.querySelector(".work");
const workDetailsSection = document.querySelector(".workDetails");
const description = document.querySelector(".description");
const workHeading = document.querySelector(".job-details");
const workHeadingText = document.querySelector(".headingText");
const box = document.querySelector(".set1");

const cancelBtn = document.querySelector(".exitBtn");

const exitBtn = document.querySelector(".extBtn");
const viewAll = document.querySelector(".viewAll");
const allProjects = document.querySelector(".projects");

window.addEventListener("DOMContentLoaded", () => {

  previewImg.forEach((image) => {
    image.classList.add ("workPreview");
  });

  viewAll.addEventListener("click", ()=>{
    allProjects.classList.replace("hide", "flex");
  });
  exitBtn.addEventListener("click", ()=>{
    allProjects.classList.replace("flex", "hide");
  });

  Array.from(document.getElementsByClassName("workImage")).forEach((previewImage)=>{
    previewImage.addEventListener("click", (e) => {
      index = e.target.id;

      description.classList.replace("hide", "flex");
      workDetailsSection.classList.remove("hide");

      workSection.style.display = "block";
      workSection.classList.remove("overflow");
      previewImage.classList.add("inView");
      previewImage.style.height = 300 + "px";
      previewImage.style.width = 75 + "vw";
      workHeading.classList.add("headingstyle");
      workHeading.style.height = 50 + "%";
      box.classList.add("jstoverflow");
      box.classList.replace("flex", "hide");
      workHeadingText.classList.add("headingposition");
      workHeadingText.classList.replace("headerText", "activeText");
      cancelBtn.classList.remove("hide");

      cancelBtn.addEventListener("click", ()=> {
        cancelBtn.classList.add("hide");
        description.classList.replace("flex", "hide");
        workDetailsSection.classList.add("hide");

        workSection.style.display = "grid";
        workSection.classList.add("overflow");
        previewImage.classList.remove("inView");
        previewImage.classList.replace("rot", "orignal");
        previewImage.style.height = 200 + "px";
        previewImage.style.width = 400 + "px";
        box.style.height = 50 + "%";
        workHeadingText.classList.replace("activeText", "headerText");
        workHeadingText.classList.remove("headingposition");
        box.classList.remove("jstoverflow");
        workHeading.classList.remove("headingstyle");
        workHeading.style.height = 90 + "%";
      });

      const stillShowing = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            cancelBtn.classList.add("hide");
            description.classList.replace("flex", "hide");
            workDetailsSection.classList.add("hide");

            workSection.style.display = "grid";
            workSection.classList.add("overflow");
            previewImage.classList.remove("inView");
            previewImage.classList.replace("rot", "orignal");
            previewImage.style.height = 200 + "px";
            previewImage.style.width = 400 + "px";
            box.style.height = 50 + "%";
            workHeadingText.classList.replace("activeText", "headerText");
            workHeadingText.classList.remove("headingposition");
            box.classList.remove("jstoverflow");
            workHeading.classList.remove("headingstyle");
            workHeading.style.height = 90 + "%";
          }
          else {
            entry.target.classList.remove("dark");
          }
        });
      });
      const showing = document.querySelectorAll(".showing");
      showing.forEach(element => stillShowing.observe(element));
    });
  });
});
/* let arr = ["bob", "billy", "santa"];
let a = 0;
const welcomeText = document.querySelector(".lock");
setTimeout (()=> {
  while (a < arr.length) {
    welcomeText.innerHTML= arr[a];
  }
  a+=1;
}, 50);
 */
//setTimeout(function() {
//  welcomeText.innerHTML="tata",
//  welcomeText.innerHTML="lalaata";
//}, 50);


/*JSON
const projects = [
  {
    "projectID" : 1,
    "projectName" : "PixelMind",
    "projectImageSrc" : "source",


  },
  {

  }


];

//The function that displays NEW RELEASES section
function displayWorks (workpanning) {
  let displayWorks = workpanning.map((item) => {
    return `
      <img id="${item.projectID}" class="workImage orignal" src="id="${item.projectImgSRC}" " alt="">`;
  });
  displayWorks = displayWorks.join("");
  box.innerHTML = displayWorks;
}
*/