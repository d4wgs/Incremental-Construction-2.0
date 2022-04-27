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
  if (typeof savedGame.Cash !== "udnefined") score = savedGame.Cash;
}

function saveGame() {
  var gameSave = {
    Cash: Cash,

    ShackCost: 50,
     Shack: 0,
     ShackTot: 0,
     ShackTotCost1: 50,

     ApartmentCost: 300,
     Apartment: 0,
     ApartmentTot: 0,
     ApartmentTotCost1: 300,

     HouseCost: 1000,
     House: 0,
     HouseTot: 0,
     HouseTotCost1: 1000,

     MotelCost: 10000,
     Motel: 0,
     MotelTot: 0,
     MotelTotCost1: 10000,

     ApartmentComplexCost: 50000,
     ApartmentComplex: 0,
     ApartmentComplexTot: 0,
     ApartmentComplexTotCost1: 50000,

     TowerCost: 300000,
     Tower: 0,
     TowerTot: 0,
     TowerTotCost1: 300000,

     SkyscraperCost: 1000000,
     Skyscraper: 0,
     SkyscraperTot: 0,
     SkyscraperTotCost1: 1000000,

     Reputation: 100000,
     ReputationCost: 3,
     ReputationTot: 100000,

     GDRepCost: 3,
     GDRep: 0,
     GDRepTot: 0,
     GDRepTotCost1: 3,

     VSRepCost: 10,
     VSRep: 0,
     VSRepTot: 0,
     VSRepTotCost1: 10,

     OTRepCost: 25,
     OTRep: 0,
     OTRepTot: 0,
     OTRepTotCost1: 25,

     ETRepCost: 60,
     ETRep: 0,
     ETRepTot: 0,
     ETRepTotCost1: 60,

     HCRepCost: 125,
     HCRep: 0,
     HCRepTot: 0,
     HCRepTotCost1: 125,

     MSARepCost: 1000,
     MSARep: 0,
     MSARepTot: 0,
     MSARepTotCost1: 100
  };
  localStorage.setItem("gameSave", JSON.stringify(gameSave));
}

window.onload = function() {
  loadGame();
};

setInterval(function() {
    saveGame();
}, 30000);
