/*Open the sidenav*/
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

/*Close/hide the sidenav*/
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}
