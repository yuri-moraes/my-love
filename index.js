function getRandomPosition(element) {
  var x = document.body.offsetHeight - element.clientHeight;
  var y = document.body.offsetWidth - element.clientWidth;
  var randomX = Math.floor(Math.random() * x);
  var randomY = Math.floor(Math.random() * y);
  return [randomX, randomY];
}

var noButton = document.getElementById("no-button");
noButton.addEventListener("mouseover", function() {
  var position = getRandomPosition(noButton);
  noButton.style.top = position[0] + "px";
  noButton.style.left = position[1] + "px";
});

noButton.addEventListener("click", function(event) {
  event.preventDefault();
});