var modal1 = document.getElementById("myModalSignup");          //Accessing the SignUp Modal
var modal2 = document.getElementById("myModalSignin");          //Accessing the SignIn Modal

//Function to close the modal if clicked anywhere other than the modal body
window.onclick = function(event) {
    if (event.target == modal1 || event.target==modal2 ) {
      modal1.style.display = "none";
      modal2.style.display = "none";
    }
  }

//Function to display the SignUp Modal
function signup(){
    modal1.style.display='none';
    modal2.style.display='none';
    modal1.style.display='block';
}

//Function to display the SignIn Modal
function signin(){
    modal1.style.display='none';
    modal2.style.display='none';
    modal2.style.display='block';
}

//Function to display the SignIn / SignUp Modal
function closeit(){
    modal1.style.display='none';
    modal2.style.display='none';   
}