// Déven Estève / Romain Lavidalie

window.addEventListener("load", function() {
  var easter;
  var easterOn = false;
  var id = -1;
  var name;
  var path = "Images/Characters/";
  var ext = ".png";
  document.getElementById('welcome').onclick = function() {
    if (!easterOn) {
      easterOn = true;
      easter = setInterval(function() {
        id++;
        document.getElementById('welcome').src = path + parseStr(characterInformations[id].name) + ext;
        if (id == 73) {
          id = -1;
        }
      }, 50);
    } else {
      easterOn = false;
      clearInterval(easter);
    }
  }
});
