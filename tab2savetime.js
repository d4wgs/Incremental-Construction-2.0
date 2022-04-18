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

function SaveGame() {
  var save = {
    Cash: Cash,
    ShackCost: ShackCost,
    Shack: Shack,
    ShackTot: ShackTot,
    ShackTotCost1: ShackTotCost1,
    ShackOut: ShackOut,
    Shacks: Shacks,

    ApartmentCost: ApartmentCost,
    Apartment: Apartment,
    ApartmentTot: ApartmentTot,
    ApartmentTotCost1: ApartmentTotCost1,
    ApartmentOut: ApartmentOut,

    HouseCost: HouseCost,
    House: House,
    HouseTot: HouseTot,
    HouseTotCost1: HouseTotCost1,
    HouseOut: HouseOut,

    MotelCost: MotelCost,
    Motel: Motel,
    MotelTot: MotelTot,
    MotelTotCost1: MotelTotCost1,
    MotelOut: MotelOut,

    ApartmentComplexCost: ApartmentComplexCost,
    ApartmentComplex: ApartmentComplex,
    ApartmentComplexTot: ApartmentComplexTot,
    ApartmentComplexTotCost1: ApartmentComplexTotCost1,
    ApartmentComplexOut: ApartmentComplexOut,

    TowerCost: TowerCost,
    Tower: Tower,
    TowerTot: TowerTot,
    TowerTotCost1: TowerTotCost1,
    TowerOut: TowerOut,

    SkyscraperCost: SkyscraperCost,
    Skyscraper: Skyscraper,
    Skyscraper: SkyscraperTot,
    SkyscraperTotCost1: SkyscraperTotCost1,
    SkyscraperOut: SkyscraperOut,

    Reputation: Reputation,
    ReputationCost: ReputationCost,
    ReputationTot: ReputationTot,
    ReputationTotCost1: ReputationTotCost1

  };
  localStorage.setItem("save", JSON.stringify(save));
}

setInterval(function() {
    SaveGame();
}, 30000);