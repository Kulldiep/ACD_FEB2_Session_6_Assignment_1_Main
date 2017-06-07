var radius =prompt("Please enter radius", '');
  
var circArea= function() {

return Math.PI * Math.pow(radius, 2);

}
document.getElementById("demo").innerHTML = circArea();