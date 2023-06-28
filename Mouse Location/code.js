function updateCoordinates(event) {
  var x = event.clientX;
  var y = event.clientY - 303;

  var cartesianCoords = "X = " + x + ", Y = " + Math.abs(y);
  var polarCoords = "r = " + Math.round(Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)) * 100) / 100 +
    ", θ = " + Math.abs(Math.round(Math.atan(y / x) * 57.2957795 * 100) / 100);

  document.getElementById("coords").innerHTML = cartesianCoords;
  document.getElementById("coords-polar").innerHTML = polarCoords;
}

function resetCoordinates() {
  document.getElementById("coords").innerHTML = "X = , Y = ";
  document.getElementById("coords-polar").innerHTML = "r = , θ = ";
}