/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(a) {
  if (!a.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
	}
  }
  if (!a.target.matches('.dropbtna')) {
  var aDropdown = document.getElementById("aDropdown");
    if (aDropdown.classList.contains('showing')) {
      aDropdown.classList.remove('showing');
    }
  }
}