    
var icon = document.getElementById("icon");
    icon.onclick = function(){
      document.body.classList.toggle("dark-theme");
      if(document.body.classList.contains("dark-theme")){
        icon.src = "Our Gallery/sun (1).png";
      }
      else{
        icon.src = "Our Gallery/moon.png";
      }
    }

let list = document.getElementById('list');
    let filter = document.querySelector('.filter');
    let count = document.getElementById('count');
    let listProducts = [
      {
          id: 1,
          name: 'Pottery',
          price: 5600,
          quantity: 0,
          image: './Our Gallery/pottery.png',
          nature: {
              Rarity: ['Popular', 'Common'],
              Chronology: ['Ancient','Modern'], 
              Category: 'Pottery',
          }
      },
      {
          id: 2,
          name: 'Art',
          price: 3000,
          quantiy: 30,
          image: './Our Gallery/Art.png',
          nature: {
            Rarity: 'Common',
            Chronology: ['Ancient','Medival'], 
            Category: 'Art',
          }
      },
      {
          id: 3,
          name: 'Jewellery',
          price: 200,
          quantiy: 30,
          image: './Our Gallery/Jewellery.png',
          nature: {
            Rarity: ['Popular', 'Unique'],
            Chronology: ['Modern'], 
            Category: 'Jewellery',
          }
      },
      {
          id: 4,
          name: 'Pottery',
          price: 400,
          quantiy: 30,
          image: './Our Gallery/pottery.png',
          nature: {
            Rarity: ['Rare', 'Unique'],
            Chronology: ['Ancient'], 
            Category: 'Pottery',
          }
      },
      {
          id: 5,
          name: 'Art',
          price: 320000,
          quantiy: 30,
          image: './Our Gallery/rare.png',
          nature: {
            Rarity: ['Rare', 'Common'],
            Chronology: ['Medival'], 
            Category: 'Art',
          }
       },
       {
          id: 6,
          name: 'Jewellery',
          price: 1000,
          quantiy: 30,
          image: './Our Gallery/Jewellery.png',
          nature: {
            Rarity: ['Common', 'Unique','Rare','Popular'],
            Chronology: ['Modern','Medival'], 
            Category: 'Jewellery',
          }
      },
  
  ];
  let productFilter = listProducts;
    showProduct(productFilter);
    
    filter.addEventListener('submit', function(event){
        event.preventDefault();
        let valueFilter = event.target.elements;
        productFilter = listProducts.filter(item => {
            // check category
            if(valueFilter.Category.value != ''){
                if(item.nature.Category != valueFilter.Category.value){
                    return false;
                }
            }
            // check color
            if(valueFilter.Rarity.value != ''){
                if(!item.nature.Rarity.includes(valueFilter.Rarity.value)){
                    return false;
                }
            }
            if(valueFilter.Chronology.value != ''){
                if(!item.nature.Chronology.includes(valueFilter.Chronology.value)){
                    return false;
                }
            }
            // check name
            if(valueFilter.name.value != ''){
                if(!item.name.includes(valueFilter.name.value)){
                    return false;
                }
            }
            // check min price
            if(valueFilter.minPrice.value != ''){
                if(item.price < valueFilter.minPrice.value){
                    return false;
                }
            }
            //  check max price
            if(valueFilter.maxPrice.value != ''){
                if(item.price > valueFilter.maxPrice.value){
                    return false;
                }
            }
    
    
            return true;
        })
        showProduct(productFilter);
    })
    function showProduct(productFilter){
        count.innerText = productFilter.length;
        list.innerHTML = '';
        productFilter.forEach(item => {
            let newItem = document.createElement('div');
            newItem.classList.add('item');
    
            // create image
            let newImage = new Image();
            newImage.src = item.image;
            newItem.appendChild(newImage);
            // create name product
            let newTitle = document.createElement('div');
            newTitle.classList.add('title');
            newTitle.innerText = item.name;
            newItem.appendChild(newTitle);
            // create price
            let newPrice = document.createElement('div');
            newPrice.classList.add('price');
            newPrice.innerText = item.price.toLocaleString() + '$';
            newItem.appendChild(newPrice);
    
            list.appendChild(newItem);
        });
    }

    var feedback_btn = document.querySelector(".feedback_btn");
    var wrapper = document.querySelector(".wrapper1");
    var close_btns = document.querySelectorAll(".close_btn");
    var li_items = document.querySelectorAll("ul li");
    
    feedback_btn.addEventListener("click", function () {
      wrapper.classList.add("active");
    });
    
    close_btns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        wrapper.classList.remove("active");
      });
    });
    
    li_items.forEach(function (item) {
      item.addEventListener("click", function () {
        li_items.forEach(function (item) {
          item.classList.remove("active");
        });
    
        item.classList.add("active");
      });
    });
