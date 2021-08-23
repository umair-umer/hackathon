const nav_lin=document.getElementsByClassName("nav-links")
  const on=()=>{
    for(var i=0;i<nav_lin.length;i++){
        nav_lin[i].classList.toggle('active')
        
    }
  }


//   databasee from catrgri  part
function post(){
  let categri= document.getElementById("Categeori").value
  let itemname = document.getElementById("itemname").value
  let price= document.getElementById("itemprice").value
  let paymetod= document.getElementById("paidmethod").value
     let resource={
         categri:categri,
         itemname:itemname,
         price:price,
         paymetod:paymetod,
     }
     firebase.database().ref(`resturantSdata/categeries`).child("categerii").push(resource);
    

  
}