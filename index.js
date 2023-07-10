
let all_productarr = [];

let select_value = "";
let favourirtarray = [];



const fill_products = arr => {

  // Clear items
  cards.innerHTML = '';

  arr.forEach((item) => {
    pictures = item.images;
    pictures1 = pictures[0]
    title = item.title;
    description = item.description;
    price = item.price;
    num = item.id;

    cards.innerHTML += ` <div class="box">
  <h2>${title}</h2>
  <img src="${pictures1}" alt="">
  <p>${description}</p>
  <h3> $ ${price}</h3>
  <a href="#" id="add_list class="add">add_list</a>
  <button id="add_${num}" onclick="fav_list(event)">add</button>
  <button id="add_${num}" onclick="delet_fav_list(event)">delete</button>
 </div>`
  });
}




const get_products = async () => {
  let api = "https://dummyjson.com/products";
  let res = await fetch(api);
  console.log(res);
  let all_product = await res.json();
  all_productarr = all_product.products;
  console.log(all_productarr);
  fill_products(all_productarr)
}
// favoutrit_list
function fav_list(e) {
    console.log(all_productarr);
  
    let item_id = e.target.id;
    let getid = item_id.split("_")
    let item_num = getid[1];
    console.log(item_num)
    const favourirtarray = all_productarr.filter((item) => {
      if (item.id == item_num) {
        return item
  
  
      }
    });
    // to stote in localStorage
    console.log('favourirtarray', favourirtarray);
    const cur_fav_str = localStorage.getItem('fav_arr');
    console.log('cur_fav_str', cur_fav_str);
    let fav_arr = [];
  
    if (cur_fav_str) {
      fav_arr = JSON.parse(cur_fav_str)
    }
  
    fav_arr = [...fav_arr, ...favourirtarray]
    // console.log('fav_arr', fav_arr);
    localStorage.fav_arr = JSON.stringify(fav_arr)
  
  }
  
  
  // end--favouritlist
  
  function filter_changed() {
    const select_value = select.value;
    // return;
    // select_value = select.options[select.selectedIndex].value;
    // console.log(select_value);
    if (select_value == "name") {
      const sorted_arr = all_productarr.sort((a, b) => {
        if ((a.title).toUpperCase() > (b.title).toUpperCase()) {
          return 1;
        } else if ((a.title).toUpperCase() < (b.title).toUpperCase()) {
          return -1;
        } else {
          return 0;
        }
      
        console.log(a.title) 
      }
      
      
      )
      
      fill_products(sorted_arr);
  
    }
    else if (select_value == "price") {
      const sorted_arr = all_productarr.sort((a, b) => {
        if (a.price > b.price) {
          return -1;
        } else if (a.price < b.price) {
          return 1;
        } else {
          return 0;
        }
      });
  
      fill_products(sorted_arr);
    }
  }
  // delete from fav_list
