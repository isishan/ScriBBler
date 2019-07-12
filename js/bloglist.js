var modaldelete=document.getElementById('deletemodal');
var modal1 = document.getElementById("myModalSignup");
var modal2 = document.getElementById("myModalSignin");

function closemodal()
{
    modaldelete.style.display='block';
}

function nobutton()
{
    modaldelete.style.display='none';
}

function signup()
{
    modal1.style.display='none';
    modal2.style.display='none';
    modal1.style.display='block';
}
function signin()
{
    modal1.style.display='none';
    modal2.style.display='none';
    modal2.style.display='block';
}
function closeit()
{
    console.log('closing');
    modal1.style.display='none';
    modal2.style.display='none';
}


window.onclick = function(event) {
    if (event.target == modal1 || event.target==modal2) {
      modal1.style.display = "none";
      modal2.style.display = "none";

    }
  }