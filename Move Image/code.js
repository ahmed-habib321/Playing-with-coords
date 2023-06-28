var isDragging = false;

function moveImage(event) {
  if (isDragging) {
    var image = document.getElementById("image");
    image.style.position = "absolute";
    image.style.top = event.clientY - 75 + "px";
    image.style.left = event.clientX - 75 + "px";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var image = document.getElementById("image");
  image.addEventListener("mousedown", function () {
    isDragging = true;
  });
  image.addEventListener("mouseup", function () {
    isDragging = false;
  });
});

document.addEventListener("mousemove", moveImage);
