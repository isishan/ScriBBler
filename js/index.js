var modal1 = document.getElementById("myModalSignup");
var modal2 = document.getElementById("myModalSignin");
var modal3 = document.getElementById('myModalCreatePost');
console.log(modal1);
console.log(modal2);

window.onclick = function(event) {
    if (event.target == modal1 || event.target==modal2 || event.target==modal3) {
      modal1.style.display = "none";
      modal2.style.display = "none";
      modal3.style.display='none';
    }
  }

function signup()
{
    modal3.style.display='none';
    modal1.style.display='none';
    modal2.style.display='none';
    modal1.style.display='block';
}
function signin()
{
    modal3.style.display='none';
    modal1.style.display='none';
    modal2.style.display='none';
    modal2.style.display='block';
}

function closeit()
{
    console.log('closing');
    modal1.style.display='none';
    modal2.style.display='none';   
    modal3.style.display='none';

}

function createpost()
{
  modal1.style.display='none';
  modal2.style.display='none';
  modal3.style.display='block';
}
