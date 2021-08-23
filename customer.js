let signup = () => {

    let name = document.getElementById("name").value.length;
    if (name === 0) {
      alert("Please Enter Your Name:");
      return false;
    }
    else if (name <= 5) {
      alert("Name must have atleast 6 Characters: ");
      return false;
  
    }
  
    else if (name >= 17) {
      alert("Name can contain only upto 16 Characters:")
    }
    var speChar = "!`@#$%^&*()+=-[]\\\';,./{}|\":<>?~_";
  
    var data = document.getElementById("name").value;
  
    for (var i = 0; i < data.length; i++) {
  
      if (speChar.indexOf(data.charAt(i)) != -1) {
  
        alert("Your string has special characters. \nThese are not allowed.");
  
        return false;
      }
    }
  
  
    var email = document.getElementById('email').value.length;
    if (email === 0) {
      alert("Providing an email is mandotory");
      return false;
    }
  
  
    let password = document.getElementById("password").value.length;
    if (password === 0) {
      alert("Please Enter Your Password:");
      return false;
    }
  
    else if (password <= 5) {
      alert("Password Should have minimun 6 characters");
      return false;
    }
  
    else if (password >= 17) {
      alert("Password can contains only upto 16 characters:");
      return false;
    }
  
    var name1 = document.getElementById('name');
  
  
  
    var email1 = document.getElementById('email');
    var password1 = document.getElementById('password ');
  
  
    let password2 = document.getElementById('password')
    
  
    
  
  
    let country = document.getElementById("country").value;
    if (country.length === 0) {
      alert("Please Enter Your Country:");
      return false;
    }
  
  
  
    let city = document.getElementById("city").value;
    if (city.length === 0) {
      alert("Please Enter Your City:");
      return false;
    }
  
  
  
    var obj = {
      Name: name1.value,
      Email: email1.value,
      Password: password,
      Country: country,
      City: city,
  
    }
  
    console.log(obj)
  
    
  
  
  
  
  
    firebase.auth().createUserWithEmailAndPassword(email1.value, password2.value)
      .then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
        firebase.database().ref("UserData").push(obj);
     
  
        setTimeout(function(){
          window.location.href = 'customersigIn.html'
        },7000)
         
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert('Please fill the form Correctly:')
  
      });
  
  }
  
  
  
  
  let signin = () => {



    let localName = document.getElementById("name").value;
    if (localName.length === 0) {
      alert("Please Enter Your Name:");
      return false;
    }
    else if (localName.length <= 5) {
      alert("Name must have atleast 6 Characters: ");
      return false;
  
    }
  
    else if (localName.length >= 17) {
      alert("Name can contain only upto 16 Characters:")
      return false;
    }
  
    
  
    localStorage.setItem('localName', localName)
  
  
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
  
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
  
        // Signed in
        var user = userCredential.user;
        window.location.href = 'home.html'
  
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert('Invalid Email or Password:')
      });
  
  
  
  
  
  }
  