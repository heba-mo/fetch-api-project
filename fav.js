let get_favarray=[];



    
const load_fav_page = ()=>{ 
 const fav_arr =   localStorage.getItem('fav_arr');
 if(fav_arr){
const  fav_array=JSON.parse(fav_arr);
get_favarray=fav_array
fill_products(get_favarray)

}
 
    }
    load_fav_page ();
    
    const delet_fav_list=function(e){
  cards.innerHTML=" "
 
 let item_id = e.target.id;
     let getid = item_id.split("_")
     let item_num = getid[1];
     console.log(item_num);
     const deletarr=get_favarray.forEach(delet_item);
     function delet_item(item,index,arr){
      console.log("item",item.id);
      console.log("index",index);
      if(item.id==item_num){
        console.log("this is deleted item");
        console.log("before",arr)
       const new_favarr=arr.splice(index,1);
       console.log("after",arr);
      localStorage.fav_arr=JSON.stringify(arr);
       
       fill_products(arr)
      }
      else{
        console.log("this is not deleted item")
      }

     }
    }
    