fetch('app/js/fooddata.json').then(response => response.json())
.then(data => {
    const categories = [...new Set(data.map((item)=> {return item}))]

    document.getElementById('search-box').addEventListener('keyup', (e)=> {
        const searchData = e.target.value.toLowerCase();
        const filterData = categories.filter((item)=> {
            return (
                item.food_name.toLocaleLowerCase().includes(searchData)
            )
        })
        displayItem(filterData);
    });

    const displayItem = (items) => {
        document.getElementById('root').innerHTML = items.map((item)=> {
            return(`<div id "${item.food_name}" class="menu-item">
                <img src=${item.img_url} class="photo" alt="">
                <div class="item-info">
                  <h4>${item.food_name}</h4>
                  <p class="item-text">${item.cuisine}
                  </p>
                </div>
              </div>`
            )
        }).join('')
    };
    displayItem(categories);

}).catch(error => console.error(error));