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
  Cash: Cash,

  document.getElementById("ShackCost").innerHTML = ShackCost;
  document.getElementById("Shack").innerHTML = Shack;
  document.getElementById("ShackTot").innerHTML = ShackTot;
  document.getElementById("ShackTotCost1").innerHTML = ShackTotCost1;

  document.getElementById("ApartmentCost").innerHTML = ApartmentCost;
  document.getElementById("Apartment").innerHTML = Apartment;
  document.getElementById("ApartmentTot").innerHTML = ApartmentTot;
  document.getElementById("ApartmentTotCost1").innerHTML = ApartmentTotCost1;

  document.getElementById("HouseCost").innerHTML = HouseCost;
  document.getElementById("House").innerHTML = House;
  document.getElementById("HouseTot").innerHTML = HouseTot;
  document.getElementById("HouseTotCost1").innerHTML = HouseTotCost1;

  document.getElementById("MotelCost").innerHTML = MotelCost;
  document.getElementById("Motel").innerHTML = Motel;
  document.getElementById("MotelTot").innerHTML = MotelTot;
  document.getElementById("MotelTotCost1").innerHTML = MotelTotCost1;

  document.getElementById("ApartmentComplexCost").innerHTML = ApartmentComplexCost;
  document.getElementById("ApartmentComplex").innerHTML = ApartmentComplex;
  document.getElementById("ApartmentComplexTot").innerHTML = ApartmentComplexTot;
  document.getElementById("ApartmentComplexTotCost1").innerHTML = ApartmentComplexTotCost1;

  document.getElementById("TowerCost").innerHTML = TowerCost;
  document.getElementById("Tower").innerHTML = Tower;
  document.getElementById("TowerTot").innerHTML = TowerTot;
  document.getElementById("TowerTotCost1").innerHTML = TowerTotCost1;

  document.getElementById("SkyscraperCost").innerHTML = SkyscraperCost;
  document.getElementById("Skyscraper").innerHTML = Skyscraper;
  document.getElementById("SkyscraperTot").innerHTML = SkyscraperTot;
  document.getElementById("SkyscraperTotCost1").innerHTML = SkyscraperTotCost1;

  document.getElementById("Reputation").innerHTML = Reputation;
  document.getElementById("ReputationCostTot").innerHTML = ReputationCost;
  document.getElementById("ReputationTot").innerHTML = ReputationTot;

  document.getElementById("GDRepCost").innerHTML = GDRepCost;
  document.getElementById("GDRep").innerHTML = GDRep;
  document.getElementById("GDRepTot").innerHTML = GDRepTot;
  document.getElementById("GDRepTotCost1").innerHTML = GDRepTotCost1;

  document.getElementById("VSRepCost").innerHTML = VSRepCost;
  document.getElementById("VSRep").innerHTML = VSRep;
  document.getElementById("VSRepTot").innerHTML = VSRepTot;
  document.getElementById("VSRepTotCost1").innerHTML = VSRepTotCost1;

  document.getElementById("OTRepCost").innerHTML = OTRepCost;
  document.getElementById("OTRep").innerHTML = OTRep;
  document.getElementById("OTRepTot").innerHTML = OTRepTot;
  document.getElementById("OTRepTotCost1").innerHTML = OTRepTotCost1;

  document.getElementById("ETRepCost").innerHTML = ETRepCost;
  document.getElementById("ETRep").innerHTML = ETRep;
  document.getElementById("ETRepTot").innerHTML = ETRepTot;
  document.getElementById("ETRepTotCost1").innerHTML = ETRepTotCost1;

  document.getElementById("HCRepCost").innerHTML = HCRepCost;
  document.getElementById("HCRep").innerHTML = HCRep;
  document.getElementById("HCRepTot").innerHTML = HCRepTot;
  document.getElementById("HCRepTotCost1").innerHTML = HCRepTotCost1;

  document.getElementById("MSARepCost").innerHTML = MSARepCost;
  document.getElementById("MSARep").innerHTML = MSARep;
  document.getElementById("MSARepTot").innerHTML = MSARepTot;
  document.getElementById("MSARepTotCost1").innerHTML = MSARepTotCost1;

  document.getElementById("Bricks").innerHTML = Bricks;

  document.getElementById("ShackOut").innerHTML = ShackOut;
  document.getElementById("ShackUpgradeCost").innerHTML = ShackUpgradeCost;

  document.getElementById("ApartmentOut").innerHTML = ApartmentOut;
  document.getElementById("ApartmentUpgradeCost").innerHTML = ApartmentUpgradeCost;

  document.getElementById("HouseOut").innerHTML = HouseOut;
  document.getElementById("HouseUpgradeCost").innerHTML = HouseUpgradeCost;

  document.getElementById("MotelOut").innerHTML = MotelOut;
  document.getElementById("MotelUpgradeCost").innerHTML = MotelUpgradeCost;

  document.getElementById("ApartmentComplexOut").innerHTML = ApartmentComplexOut;
  document.getElementById("ApartmentComplexUpgradeCost").innerHTML = ApartmentComplexCost;

  document.getElementById("TowerOut").innerHTML = TowerOut;
  document.getElementById("TowerUpgradeCost").innerHTML = TowerUpgradeCost;

  document.getElementById("SkyscraperOut").innerHTML = SkyscraperOut;
  document.getElementById("SkyscraperUpgradeCost").innerHTML = SkyscraperUpgradeCost;
};

setInterval(function() {
    saveGame();
}, 30000);
