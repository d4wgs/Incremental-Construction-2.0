function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  function openCity2(evt, cityName) {
    var i, tabcontent2, tablinks;
    tabcontent2 = document.getElementsByClassName("tabcontent2");
    for (i = 0; i < tabcontent2.length; i++) {
      tabcontent2[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active2", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active2";
  }

function loadGame() {
  var savedGame = JSON.parse(localStorage.getItem("gameSave"));
  if (typeof savedGame.Cash !== "undefined") score = savedGame.Cash;
}

function saveGame() {
  var gameSave = {
    Cash: Cash,
  };
  localStorage.setItem("gameSave", JSON.stringify(gameSave));
}

window.onload = function() {
  loadGame();
};

setInterval(function() {
    saveGame();
}, 30000);
