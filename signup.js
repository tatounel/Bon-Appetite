//const isEnabled = email.length > 0 && password.length > 0;
//<button disabled={!isEnabled}>Sign up</button>

function visitPage(){
        window.location='recipes.html';
    }
var email = document.getElementById("email");
var password = document.getElementById("password")
  , confirm_password = document.getElementById("confirm_password");

function disableSubmit(){
  if(email.length < 4){
    document.getElementById("mySubmit").disabled = true;
  }
  else {
    document.getElementById("mySubmit").disabled = false;
  }
}
function validateName(){
    var name = document.getElementById('name').value;
    if( /[^a-zA-Z]/.test( Name ) ) {
       alert('Input is not alphanumeric');
       name.setCustomValidity("Only letters");
       return false;
    }
    return true;
 }

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  }
  else{
    confirm_password.setCustomValidity('');
    visitPage();
    sessionStorage.setItem("name", document.getElementById('name').value);
    alert('Hi '+sessionStorage.getItem("name").toUpperCase()+'!');
  }
}

//document.getElementById("result").innerHTML = sessionStorage.getItem("lastname");
