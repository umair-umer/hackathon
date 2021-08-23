// resturantsignup

function RsignUp(){
    let resturant=document.getElementById("Resturantname").value;
    let remail=document.getElementById("Remail").value;
    let rcountry=document.getElementById("Rcountry").value;
    let rcity=document.getElementById("Rcity").value;
    let password=document.getElementById("Rpsw").value;
  
    let ruser={
      resturant:resturant,
      remail:remail,
      rcountry:rcountry,
      rcity:rcity,
      password:password


     }
  firebase.database().ref('resturantSdata').push(ruser)
  
  
    firebase.auth().createUserWithEmailAndPassword(remail, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    window.location.href="wellcome.html"
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(error)
  });
      
     
alert("successfull ")

}

function Rsigin(){
     
  let rsemail=document.getElementById("remail").value;
  let rspass=document.getElementById("rpsw").value;
  firebase.auth().signInWithEmailAndPassword(rsemail, rspass)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    window.location.href="dboard.html"
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(error)
  });

}