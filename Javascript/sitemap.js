// Déven Estève / Romain Lavidalie

document.addEventListener("click", function() {
  var element = event.target
  if (element.hasAttribute("for")) {
    if (element.classList.contains("hidden")) {
      element.classList = "";
    } else {
      element.classList = "hidden";
    }
  }
});
