// Déven Estève / Romain Lavidalie

function generateChart() {
  // Fetching the character list length
  var charNum = characterInformations.length;
  // Defining the size of the table
  var rowNum = 5;
  var colNum = 15;
  for (var i = 0; i < rowNum; i++) {
    var table = document.getElementById('charlist');
    var row = table.insertRow();
    // Basic for loop for the first line. Going from 0 to 14
    if (i == 0) {
      for (var j = 0; j < colNum; j++) {
        var code = "<a href='../Collection/character.xhtml?c=" + characterInformations[j]["id"] + "' title='" + characterInformations[j]["name"] + "'><img src='../../Images/Characters/" + parseStr(characterInformations[j]["name"]) + ".png' alt='Thumbnail of " + characterInformations[j]["name"] + "' /></a>";
        var cell = row.insertCell();
        cell.innerHTML = code;
      }
      // Handling the last row as going to 75 led to an error while trying to generate a cell with id 74, going from 60 to 73
    } else if (i == 4) {
      for (var j = i * colNum; j < charNum; j++) {
        var code = "<a href='../Collection/character.xhtml?c=" + characterInformations[j]["id"] + "' title='" + characterInformations[j]["name"] + "'><img src='../../Images/Characters/" + parseStr(characterInformations[j]["name"]) + ".png' alt='Thumbnail of " + characterInformations[j]["name"] + "' /></a>";
        var cell = row.insertCell();
        cell.innerHTML = code;
      }
      // Dealing with the 2nd and 3rd lines, going resp from 15 to 29 and 30 to 44
    } else {
      for (var j = i * colNum; j < colNum * (i + 1); j++) {
        var code = "<a href='../Collection/character.xhtml?c=" + characterInformations[j]["id"] + "' title='" + characterInformations[j]["name"] + "'><img src='../../Images/Characters/" + parseStr(characterInformations[j]["name"]) + ".png' alt='Thumbnail of " + characterInformations[j]["name"] + "' /></a>";
        var cell = row.insertCell();
        cell.innerHTML = code;
      }
    }
  }
}
window.onload = function() {
  generateChart();
}
