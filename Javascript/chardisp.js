// Déven Estève / Romain Lavidalie

function fillInformations() {
  var urlParams = new URLSearchParams(window.location.search);
  var charid = Number(urlParams.get('c'));
  var char = characterInformations[charid];
  document.title += " " + char.name;
  document.getElementById('subtitle').innerHTML += char.name;
  document.getElementById('charimg').src += parseStr(char.name) + '.png';
  document.getElementById('charimg').title += char.name;
  document.getElementById('charimg').alt += " " + char.name;
  document.getElementById('fapp').innerHTML += char.initGame;
  document.getElementById('camein').innerHTML += char.appearedFirst;
  document.getElementById('finalSmash').innerHTML += char.finalSmash;
  document.getElementById('neutralB').innerHTML += char.neutralB;
  document.getElementById('sideB').innerHTML += char.sideB;
  document.getElementById('upB').innerHTML += char.upB;
  document.getElementById('downB').innerHTML += char.downB;
  if (typeof charid != "undefined") {
    document.getElementById('previouschar').href += charid - 1;
    document.getElementById('nextchar').href += charid + 1;
    if (charid == 0) {
      document.getElementById('previouschar').remove();
    } else if (charid == 73) {
      document.getElementById('nextchar').remove();
    }
  } else {
    window.location.replace("./charlist.xhtml");
  }
}
window.addEventListener("load", function() {
  fillInformations();
});
