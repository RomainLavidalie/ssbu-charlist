// Déven Estève / Romain Lavidalie

function readURL() {

  if (document.getElementById("charImg").files && document.getElementById("charImg").files[0]) {
    var reader = new FileReader();

    reader.onload = function(e) {
      document.getElementById("characterImg").src = e.target.result;
    }

    reader.readAsDataURL(document.getElementById("charImg").files[0]);
  }
}

function previewNewChar() {
  var inputs = Array.from(document.getElementsByTagName('input'));
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].type !== "text") {
      inputs.splice(i, 1);
      i--;
    }
  }
  inputs.push(document.getElementById("charImg"));

  var charPreview = window.open("", "CharacterPreview");
  charPreview.document.write("Character Name: " + inputs[0].value + "<br/>Initial Game: " + inputs[1].value + "<br/>First Appearance: " + inputs[2].value + "<br/>Final Smash: " + inputs[3].value + "<br/>Neutral B: " + inputs[4].value + "<br/>Side B: " + inputs[5].value + "<br/>Up B: " + inputs[6].value + "<br/>Down B: " + inputs[7].value);
}

function previewVisitorsBook() {
  var inputs = Array.from(document.getElementsByTagName('input'));
  var vbPreview = window.open("", "Your message");
  vbPreview.document.write("Your name: " + inputs[0].value + "<br/>Your email: " + inputs[1].value + "<br/>Your message: " + inputs[2].value);
}
