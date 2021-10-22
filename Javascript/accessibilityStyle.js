// Déven Estève / Romain Lavidalie

window.onload = function() {
    var accdiv = document.createElement("div");
    var acclabel = document.createElement("label");
    var acccheck = document.createElement("input");
    var accspan = document.createElement("span");
    accdiv.className = "accessicon";
    acclabel.className = "toggleswitch";
    acclabel.title = "Accessibility Mode";
    acccheck.type = "checkbox";
    acccheck.setAttribute("onchange", "switchCSS()");
    accspan.className = "slider";
    document.body.prepend(accdiv);
    document.body.firstElementChild.append(acclabel);
    document.body.firstElementChild.firstElementChild.append(acccheck);
    document.body.firstElementChild.firstElementChild.append(accspan);
}

function switchCSS() {
  if (event.target.checked) {
    document.getElementById('defaultColor').href = "./Styles/accstyle.css";
  } else {
    document.getElementById('defaultColor').href = "./Styles/defaultstyle.css";
  }
}
