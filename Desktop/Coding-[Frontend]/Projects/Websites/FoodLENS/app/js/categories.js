let buttonDisplay = document.querySelector(".buttons");

const categories = document.querySelector('.categories');
const selection = document.querySelector('.search-result-section');
const link = document.querySelector('.link');

const food = document.getElementById('food');
const foodName = document.getElementById('foodName');
const foodN = document.getElementById('foodN');

const myImage = document.getElementById('img');

const cuisine = document.getElementById('cuisine');
const category = document.getElementById('category');
const description = document.getElementById('descript');
const servQty = document.getElementById('servQty');
const servUnit = document.getElementById('servUnit');
const servWtgram = document.getElementById('servWtgrm');
const calories = document.getElementById('calor');
const totFats = document.getElementById('totfat');
const satFat = document.getElementById('satfat');

const cholesterol = document.getElementById('cholest');
const sodium = document.getElementById('sodium');

const totCarb = document.getElementById('totcarb');
const dietFiber = document.getElementById('dietfib');
const sugars = document.getElementById('sugars');
const totProtein = document.getElementById('totprot');
const potassium = document.getElementById('pot');
const iron = document.getElementById('irn');

const carbvalue1 = document.getElementById('val1');
const dietfibvalue2 = document.getElementById('val2');
const sugarvalue3 = document.getElementById('val3');
const totprotvalue4 = document.getElementById('val4');
const ironvalue5 = document.getElementById('val5');
const potassvalue6 = document.getElementById('val6');
const totfatvalue7 = document.getElementById('val7');
const satfatvalue8 = document.getElementById('val8');
const sodiumvalue9 = document.getElementById('val9');
const cholesvalue10 = document.getElementById('val10');

const ingredients = document.getElementById('ingredient-details');
const ingredientsSrc = document.getElementById('ingsrc');
const videoEmbedSRC = document.getElementById('video');

const sectionCenter = document.querySelector(".section-center");

window.addEventListener("DOMContentLoaded", () => {
  fetch('app/js/fooddata.json').then(response => response.json())
  .then(data => {

    displayMenuItem(data);
    displayMenuButton();

    function displayMenuButton() {
      const categories = data.reduce(
        (newCategory, newItem) => {
          if (!newCategory.includes(newItem.category)) {
            newCategory.push(newItem.category);
          }
          return newCategory;
        },
        ["All"]
      );

      // mapping through the butons array
      let categoryBtn = categories.map((category) => {
        return `<h3 class="btn" data-filter=${category}>${category.charAt(0).toUpperCase() + category.slice(1)}</h3>`;
      });

      categoryBtn = categoryBtn.join("");

      buttonDisplay.innerHTML = categoryBtn;
      const buttons = document.querySelectorAll(".btn");

      buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
          const filter = e.target.dataset.filter;

          const menuCategory = data.filter(function (menuItem) {
            //console.log(menuItem.category)
            if (menuItem.category === filter) {
              return menuItem;
            }
          });

          if (filter == "All") {
            displayMenuItem(data);
          } else {
            displayMenuItem(menuCategory);
          }
        });
      });
    }
  }).catch(error => console.error(error));
});

function displayMenuItem(menuItems) {
  let displayMenu = menuItems.map((item) => {
    return `<div id "${item.food_name}" class="menu-item">
        <img src=${item.img_url} class="photo" alt="">
        <div class="item-info">
          <h4 id="${item.food_name}">${item.food_name}</h4>
          <p class="item-text">${item.cuisine}
          </p>
        </div>
      </div>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;

//categories to selection page flow
  const elements = document.querySelectorAll('.menu-item');

  fetch('app/js/fooddata.json').then(response => response.json())
  .then(data => {

    elements.forEach((element, Index)=>{
      element.addEventListener('click', ()=>{

        //hide categories page and show selection page
        categories.classList.add('Hide');
        link.classList.remove('Hide');
        selection.classList.remove('Hide');

        // Get the unique ID of the clicked element
        const id = element.getAttribute('id');
        // Calculate the number based on index for dynamic text
        const number = Index;

        // Change the content based on the unique ID
        myImage.setAttribute("src", data[`${number}`].img_url);
        foodName.textContent = data[`${number}`].food_name.charAt(0).toUpperCase() + data[`${number}`].food_name.slice(1);
        foodN.textContent = data[`${number}`].food_name.charAt(0).toUpperCase() + data[`${number}`].food_name.slice(1);;
        cuisine.textContent = data[`${number}`].cuisine.charAt(0).toUpperCase() + data[`${number}`].cuisine.slice(1);;
        category.textContent = data[`${number}`].category.charAt(0).toUpperCase() + data[`${number}`].category.slice(1);;
        description.textContent = data[`${number}`].description.charAt(0).toUpperCase() + data[`${number}`].description.slice(1);;
        servQty.textContent = data[`${number}`].serving_qty;
        servUnit.textContent = data[`${number}`].serving_unit.charAt(0).toUpperCase() + data[`${number}`].serving_unit.slice(1);;
        servWtgram.textContent = data[`${number}`].serving_weight_grams;
        calories.textContent = data[`${number}`].nutrition_fact.nf_calories;
        totFats.textContent = data[`${number}`].nutrition_fact.nf_total_fat;
        satFat.textContent = data[`${number}`].nutrition_fact.nf_saturated_fat;
        cholesterol.textContent = data[`${number}`].nutrition_fact.nf_cholesterol;
        sodium.textContent = data[`${number}`].nutrition_fact.nf_sodium;
        totCarb.textContent = data[`${number}`].nutrition_fact.nf_total_carbohydrate;
        dietFiber.textContent = data[`${number}`].nutrition_fact.nf_dietary_fiber;
        sugars.textContent = data[`${number}`].nutrition_fact.nf_sugars;
        totProtein.textContent = data[`${number}`].nutrition_fact.nf_protein;
        potassium.textContent = data[`${number}`].nutrition_fact.nf_potassium;
        iron.textContent = data[`${number}`].nutrition_fact.nf_p;

        totfatvalue7.textContent = data[`${number}`].nutrition_fact.nf_total_fat;
        satfatvalue8.textContent = data[`${number}`].nutrition_fact.nf_saturated_fat;
        cholesvalue10.textContent = data[`${number}`].nutrition_fact.nf_cholesterol;
        sodiumvalue9.textContent = data[`${number}`].nutrition_fact.nf_sodium;
        carbvalue1.textContent = data[`${number}`].nutrition_fact.nf_total_carbohydrate;
        dietfibvalue2.textContent = data[`${number}`].nutrition_fact.nf_dietary_fiber;
        sugarvalue3.textContent = data[`${number}`].nutrition_fact.nf_sugars;
        totprotvalue4.textContent = data[`${number}`].nutrition_fact.nf_protein;
        potassvalue6.textContent = data[`${number}`].nutrition_fact.nf_potassium;
        ironvalue5.textContent = data[`${number}`].nutrition_fact.nf_p;

        data[`${number}`].ingredients.forEach(elem=>ingredients.textContent+=(`Ingredient Name: ${elem.ingredient_name}. Serving Quantity: ${elem.serving_qty}. Description: ${elem.description}. Serving Weight grams: ${elem.serving_weight_grams}. Serving Unit: ${elem.serving_unit}. Note: ${elem.note}. Source: ${elem.source}.`));
        videoEmbedSRC.setAttribute("src", data[`${number}`].video_url);

        videoWatchSRC.textContent = data[`${number}`].video_url;
      })
    })
  }).catch(error => console.error(error));
}