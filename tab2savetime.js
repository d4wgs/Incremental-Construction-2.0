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
  if (typeof savedGame.Cash !== "undefined") Cash = savedGame.Cash;
}

function saveGame() {
  var gameSave = {
    Cash: Cash,

    ShackCost: ShackCost,
    Shack: Shack,
    ShackTot: ShackTot,
    ShackTotCost1: ShackTotCost1,

    ApartmentCost: ApartmentCost,
    Apartment: Apartment,
    ApartmentTot: ApartmentTot,
    ApartmentTotCost1: ApartmentTotCost1,

    HouseCost: HouseCost,
    House: House,
    HouseTot: HouseTot,
    HouseTotCost1: HouseTotCost1,

    MotelCost: MotelCost,
    Motel: Motel,
    MotelTot: MotelTot,
    MotelTotCost1: MotelTotCost1,

    ApartmentComplexCost: ApartmentComplexCost,
    ApartmentComplex: ApartmentComplex,
    ApartmentComplexTot: ApartmentComplexTot,
    ApartmentComplexTotCost1: ApartmentComplexTotCost1,

    TowerCost: TowerCost,
    Tower: Tower,
    TowerTot: TowerTot,
    TowerTotCost1: TowerTotCost1,

    SkyscraperCost: SkyscraperCost,
    Skyscraper: Skyscraper,
    SkyscraperTot: SkyscraperTot,
    SkyscraperTotCost1: SkyscraperTotCost1,

    Reputation: Reputation,
    ReputationCost: ReputationCost,
    ReputationTot: ReputationTot,

    GDRepCost: GDRepCost,
    GDRep: GDRep,
    GDRepTot: GDRepTot,
    GDRepTotCost1: GDRepTotCost1,

    VSRepCost: VSRepCost,
    VSRep: VSRep,
    VSRepTot: VSRepTot,
    VSRepTotCost1: VSRepTotCost1,

    OTRepCost: OTRepCost,
    OTRep: OTRep,
    OTRepTot: OTRepTot,
    OTRepTotCost1: OTRepTotCost1,

    ETRepCost: ETRepCost,
    ETRep: ETRep,
    ETRepTot: ETRepTot,
    ETRepTotCost1: ETRepTotCost1,

    HCRepCost: HCRepCost,
    HCRep: HCRep,
    HCRepTot: HCRepTot,
    HCRepTotCost1: HCRepTotCost1,

    MSARepCost: MSARepCost,
    MSARep: MSARep,
    MSARepTot: MSARepTot,
    MSARepTotCost1: MSARepTotCost1,

    Bricks: Bricks,

    ShackOut: ShackOut,
    ShackUpgradeCost: ShackUpgradeCost,

    ApartmentOut: ApartmentOut,
    ApartmentUpgradeCost: ApartmentUpgradeCost,

    HouseOut: HouseOut,
    HouseUpgradeCost: HouseUpgradeCost,

    MotelOut: MotelOut,
    MotelUpgradeCost: MotelUpgradeCost,

    ApartmentComplexOut: ApartmentComplexOut,
    ApartmentComplexUpgradeCost: ApartmentComplexCost,

    TowerOut: TowerOut,
    TowerUpgradeCost: TowerUpgradeCost,

    SkyscraperOut: SkyscraperOut,
    SkyscraperUpgradeCost: SkyscraperUpgradeCost
  };
  localStorage.setItem("gameSave", JSON.stringify(gameSave));
}

window.onload = function() {
  loadGame();
};

setInterval(function() {
    saveGame();
}, 30000);
