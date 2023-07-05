const categories = document.querySelector('.categories');
const selection = document.querySelector('.search-result-section');
const link = document.querySelector('.link');

const food = document.getElementById('food');
const foodName = document.getElementById('foodName');

const myImage = document.getElementById('img');

const description = document.getElementById('descript');
const servQty = document.getElementById('servQty');
const servUnit = document.getElementById('servUnit');
const servWtgram = document.getElementById('servWtgrm');
const calories = document.getElementById('calor');

const totCarb = document.getElementById('totcarb');
const dietFiber = document.getElementById('dietfib');
const sugars = document.getElementById('sugars');
const totProtein = document.getElementById('totprot');
const vitamin = document.getElementById('vit');
const calcium = document.getElementById('calc');
const iron = document.getElementById('irn');
const potassium = document.getElementById('pot');
const totFats = document.getElementById('totfat');
const satFat = document.getElementById('satfat');
const transFat = document.getElementById('transfat');
const polyunsatFat = document.getElementById('polfat');
const monounsatFat = document.getElementById('monofat');

const dayvalue1 = document.getElementById('val1');
const dayvalue2 = document.getElementById('val2');
const dayvalue3 = document.getElementById('val3');
const dayvalue4 = document.getElementById('val4');
const dayvalue5 = document.getElementById('val5');
const dayvalue6 = document.getElementById('val6');
const dayvalue7 = document.getElementById('val7');
const dayvalue8 = document.getElementById('val8');
const dayvalue9 = document.getElementById('val9');
const dayvalue10 = document.getElementById('val10');
const dayvalue11 = document.getElementById('val11');
const dayvalue12 = document.getElementById('val12');
const dayvalue13 = document.getElementById('val13');

const ingredients = document.getElementById('ingredients');
const ingredientsSrc = document.getElementById('ingsrc');

const videoEmbedSRC = document.getElementById('');
const videoWatchSRC = document.getElementById('');



// Select the first five elements with a similar class
const elements = document.querySelectorAll('.pad');

//fetch the json file and convert to javascript object
/* fetch('https://backend-hzm1.onrender.com/api/v1/all-foods-item/all') */
fetch('app/js/fooddata.json')
.then(response => response.json())
.then(data => {

    console.log(data);

    // Add click event listeners to each element
    elements.forEach((element, index) => {
        element.addEventListener('click', () => {

            //hide categories page and show selection page
            categories.classList.add('Hide');
            link.classList.remove('Hide');
            selection.classList.remove('Hide');
            // Get the unique ID of the clicked element
            const id = element.getAttribute('id');
            // Calculate the number based on index for dynamic text
            const number = index;

            // Change the content based on the unique ID
            myImage.setAttribute("src", data[`${number}`].img_url);
            foodName.textContent = data[`${number}`].food_name;
            description.textContent = data[`${number}`].food_name;
            servQty.textContent = data[`${number}`].serving_qty;
            servUnit.textContent = data[`${number}`].serving_unit;
            servWtgram.textContent = data[`${number}`].serving_weight_grams;
            calories.textContent = data[`${number}`].nutrition_fact.nf_calories;
            totCarb.textContent = data[`${number}`].nutrition_fact.nf_total_carbohydrate;
            dietFiber.textContent = data[`${number}`].nutrition_fact.nf_dietary_fiber;
            sugars.textContent = data[`${number}`].nutrition_fact.nf_sugars;
            totProtein.textContent = data[`${number}`].nutrition_fact.nf_protein;
            vitamin.textContent = data[`${number}`].nutrition_fact.v;
            calcium.textContent = data[`${number}`].nutrition_fact.v;
            iron.textContent = data[`${number}`].nutrition_fact.v;
            potassium.textContent = data[`${number}`].nutrition_fact.nf_potassium;
            totFats.textContent = data[`${number}`].nutrition_fact.nf_total_fat;
            satFat.textContent = data[`${number}`].nutrition_fact.nf_saturated_fat;
            transFat.textContent = data[`${number}`].nutrition_fact.v;
            polyunsatFat.textContent = data[`${number}`].nutrition_fact.v;
            monounsatFat.textContent = data[`${number}`].food_name;
            dayvalue1.textContent = data[`${number}`].food_name;
            dayvalue2.textContent = data[i].food_name;
            dayvalue3.textContent = data[i].food_name;
            dayvalue4.textContent = data[i].food_name;
            dayvalue5.textContent = data[i].food_name;
            dayvalue6.textContent = data[i].food_name;
            dayvalue7.textContent = data[i].food_name;
            dayvalue8.textContent = data[i].food_name;
            dayvalue9.textContent = data[i].food_name;
            dayvalue10.textContent = data[i].food_name;
            dayvalue11.textContent = data[i].food_name;
            dayvalue12.textContent = data[i].food_name;
            dayvalue13.textContent = data[i].food_name;
            ingredients.textContent = data[i].ingredients;
            videoEmbedSRC.textContent = data[i].video_url;
            videoWatchSRC.textContent = data[i].food_name;
        });
    });

}).catch(error => console.error(error));