

 function getdata(){
    let show =document.getElementById("product");
        firebase.database().ref('categerii').once('value',function(data){
         let d =data.val()
              for(let i in d ){

              console.log(d[i])

                show.innerHTML +=` <div class="card">
        <img   src="image/jhjgj.jpg" alt="">
    
    <p>${d[i].itemname}</p>
    <h5>${d[i].price}</h5>
    <button ">orderlace</button>
</div>`   
              }
              
        })
        
        
        
    }
    getdata();


   