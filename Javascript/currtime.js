// Déven Estève / Romain Lavidalie

window.addEventListener("load", function() {
  Number.prototype.leadingZero = function(size) {
    var s = String(this);
    while (s.length < (size || 2)) {
      s = "0" + s;
    }
    return s;
  };
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var d = new Date();
  document.getElementById('today').innerHTML = days[d.getDay()] + ", " + ((Number(d.getDate()) < 10) ? d.getDate().leadingZero() : d.getDate()) + " " + months[d.getMonth()];
  document.getElementById('now').innerHTML = ((Number(d.getHours()) < 10) ? d.getHours().leadingZero() : d.getHours()) + ":" + ((Number(d.getMinutes()) < 10) ? d.getMinutes().leadingZero() : d.getMinutes()) + ":" + ((Number(d.getSeconds()) < 10) ? d.getSeconds().leadingZero() : d.getSeconds());
});
