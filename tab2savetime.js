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
  if (typeof savedGame.Cash !== undefined) Cash = savedGame.Cash;
  if (typeof savedGame.ShackCost !== undefined) ShackCost = savedGame.ShackCost;
  if (typeof savedGame.Shack !== undefined) Shack = savedGame.Shack;
  if (typeof savedGame.ShackTot !== undefined) ShackTot = savedGame.ShackTot;

  if (typeof savedGame.ApartmentCost !== undefined) ApartmentCost = savedGame.ApartmentCost;
  if (typeof savedGame.Apartment !== undefined) Apartment = savedGame.Apartment;
  if (typeof savedGame.ApartmentTot !== undefined) ApartmentTot = savedGame.ApartmentTot;

  if (typeof savedGame.HouseCost !== undefined) HouseCost = savedGame.HouseCost;
  if (typeof savedGame.House !== undefined) House = savedGame.House;
  if (typeof savedGame.HouseTot !== undefined) HouseTot = savedGame.HouseTot;

  if (typeof savedGame.MotelCost !== undefined) MotelCost = savedGame.MotelCost;
  if (typeof savedGame.Motel !== undefined) Motel = savedGame.Motel;
  if (typeof savedGame.MotelTot !== undefined) MotelTot = savedGame.MotelTot;

  if (typeof savedGame.ApartmentComplexCost !== undefined) ApartmentComplexCost = savedGame.ApartmentComplexCost;
  if (typeof savedGame.ApartmentComplex !== undefined) ApartmentComplex = savedGame.ApartmentComplex;
  if (typeof savedGame.ApartmentComplexTot !== undefined) ApartmentComplexTot = savedGame.ApartmentComplexTot;

  if (typeof savedGame.TowerCost !== undefined) TowerCost = savedGame.TowerCost;
  if (typeof savedGame.Tower !== undefined) Tower = savedGame.Tower;
  if (typeof savedGame.TowerTot !== undefined) TowerTot = savedGame.TowerTot;

  if (typeof savedGame.SkyscraperCost !== undefined) SkyscraperCost = savedGame.SkyscraperCost;
  if (typeof savedGame.Skyscraper !== undefined) Skyscraper = savedGame.Skyscraper;
  if (typeof savedGame.SkyscraperTot !== undefined) SkyscraperTot = savedGame.SkyscraperTot;

  if (typeof savedGame.Reputation !== undefined) Reputation = savedGame.Reputation;
  if (typeof savedGame.ReputationCost !== undefined) ReputationCost = savedGame.ReputationCost;
  if (typeof savedGame.ReputationTot !== undefined) ReputationTot = savedGame.ReputationTot;

  if (typeof savedGame.GDRepCost !== undefined) GDRepCost = savedGame.GDRepCost;
  if (typeof savedGame.GDRep !== undefined) GDRep = savedGame.GDRep;
  if (typeof savedGame.GDRepTot !== undefined) GDRepTot = savedGame.GDRepTot;

  if (typeof savedGame.VSRepCost !== undefined) VSRepCost = savedGame.VSRepCost;
  if (typeof savedGame.VSRep !== undefined) VSRep = savedGame.VSRep;
  if (typeof savedGame.VSRepTot !== undefined) VSRepTot = savedGame.VSRepTot;

  if (typeof savedGame.OTRepCost !== undefined) OTRepCost = savedGame.OTRepCost;
  if (typeof savedGame.OTRep !== undefined) OTRep = savedGame.OTRep;
  if (typeof savedGame.OTRepTot !== undefined) OTRepTot = savedGame.OTRepTot;

  if (typeof savedGame.ETRepCost !== undefined) ETRepCost = savedGame.ETRepCost;
  if (typeof savedGame.ETRep !== undefined) ETRep = savedGame.ETRep;
  if (typeof savedGame.ETRepTot !== undefined) ETRepTot = savedGame.ETRepTot;

  if (typeof savedGame.HCRepCost !== undefined) HCRepCost = savedGame.HCRepCost;
  if (typeof savedGame.HCRep !== undefined) HCRep = savedGame.HCRep;
  if (typeof savedGame.HCRepTot !== undefined) HCRepTot = savedGame.HCRepTot;

  if (typeof savedGame.MSARepCost !== undefined) MSARepCost = savedGame.MSARepCost;
  if (typeof savedGame.MSARep !== undefined) MSARep = savedGame.MSARep;
  if (typeof savedGame.MSARepTot !== undefined) MSARepTot = savedGame.MSARepTot;

  if (typeof savedGame.Bricks !== undefined) Bricks = savedGame.Bricks;
  if (typeof savedGame.ShackOut !== undefined) ShackOut = savedGame.ShackOut;
  if (typeof savedGame.ShackUpgradeCost !== undefined) ShackUpgradeCost = savedGame.ShackUpgradeCost;
  if (typeof savedGame.ApartmentOut !== undefined) ApartmentOut = savedGame.ApartmentOut;
  if (typeof savedGame.ApartmentUpgradeCost !== undefined) ApartmentUpgradeCost = savedGame.ApartmentUpgradeCost;
  if (typeof savedGame.HouseOut !== undefined) HouseOut = savedGame.HouseOut;
  if (typeof savedGame.HouseUpgradeCost !== undefined) HouseUpgradeCost = savedGame.HouseUpgradeCost;
  if (typeof savedGame.MotelOut !== undefined) MotelOut = savedGame.MotelOut;
  if (typeof savedGame.MotelUpgradeCost !== undefined) MotelUpgradeCost = savedGame.MotelUpgradeCost;
  if (typeof savedGame.ApartmentComplexOut !== undefined) ApartmentComplexOut = savedGame.ApartmentOut;
  if (typeof savedGame.ApartmentComplexUpgradeCost !== undefined) ApartmentComplexCost = savedGame.ApartmentUpgradeCost;
  if (typeof savedGame.TowerOut !== undefined) TowerOut = savedGame.TowerOut;
  if (typeof savedGame.TowerUpgradeCost !== undefined) TowerUpgradeCost = savedGame.TowerUpgradeCost;
  if (typeof savedGame.SkyscraperOut !== undefined) SkyscraperOut = savedGame.SkyscraperOut;
  if (typeof savedGame.SkyscraperUpgradeCost !== undefined) SkyscraperUpgradeCost = savedGame.SkyscraperUpgradeCost;
}

function saveGame() {
  var gameSave = {
    Cash: Cash,

    ShackCost: ShackCost,
    Shack: Shack,
    ShackTot: ShackTot,

    ApartmentCost: ApartmentCost,
    Apartment: Apartment,
    ApartmentTot: ApartmentTot,

    HouseCost: HouseCost,
    House: House,
    HouseTot: HouseTot,

    MotelCost: MotelCost,
    Motel: Motel,
    MotelTot: MotelTot,

    ApartmentComplexCost: ApartmentComplexCost,
    ApartmentComplex: ApartmentComplex,
    ApartmentComplexTot: ApartmentComplexTot,

    TowerCost: TowerCost,
    Tower: Tower,
    TowerTot: TowerTot,

    SkyscraperCost: SkyscraperCost,
    Skyscraper: Skyscraper,
    SkyscraperTot: SkyscraperTot,

    Reputation: Reputation,
    ReputationCost: ReputationCost,
    ReputationTot: ReputationTot,

    GDRepCost: GDRepCost,
    GDRep: GDRep,
    GDRepTot: GDRepTot,

    VSRepCost: VSRepCost,
    VSRep: VSRep,
    VSRepTot: VSRepTot,

    OTRepCost: OTRepCost,
    OTRep: OTRep,
    OTRepTot: OTRepTot,

    ETRepCost: ETRepCost,
    ETRep: ETRep,
    ETRepTot: ETRepTot,

    HCRepCost: HCRepCost,
    HCRep: HCRep,
    HCRepTot: HCRepTot,

    MSARepCost: MSARepCost,
    MSARep: MSARep,
    MSARepTot: MSARepTot,

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
  document.getElementById("Cash").innerHTML = Cash;
  
  document.getElementById("ShackCost").innerHTML = ShackCost;
  document.getElementById("Shack").innerHTML = Shack;
  document.getElementById("ShackTot").innerHTML = ShackTot;

  document.getElementById("ApartmentCost").innerHTML = ApartmentCost;
  document.getElementById("Apartment").innerHTML = Apartment;
  document.getElementById("ApartmentTot").innerHTML = ApartmentTot;

  document.getElementById("HouseCost").innerHTML = HouseCost;
  document.getElementById("House").innerHTML = House;
  document.getElementById("HouseTot").innerHTML = HouseTot;

  document.getElementById("MotelCost").innerHTML = MotelCost;
  document.getElementById("Motel").innerHTML = Motel;
  document.getElementById("MotelTot").innerHTML = MotelTot;

  document.getElementById("ApartmentComplexCost").innerHTML = ApartmentComplexCost;
  document.getElementById("ApartmentComplex").innerHTML = ApartmentComplex;
  document.getElementById("ApartmentComplexTot").innerHTML = ApartmentComplexTot;

  document.getElementById("TowerCost").innerHTML = TowerCost;
  document.getElementById("Tower").innerHTML = Tower;
  document.getElementById("TowerTot").innerHTML = TowerTot;

  document.getElementById("SkyscraperCost").innerHTML = SkyscraperCost;
  document.getElementById("Skyscraper").innerHTML = Skyscraper;
  document.getElementById("SkyscraperTot").innerHTML = SkyscraperTot;

  document.getElementById("Reputation").innerHTML = Reputation;
  document.getElementById("ReputationCostTot").innerHTML = ReputationCost;
  document.getElementById("ReputationTot").innerHTML = ReputationTot;

  document.getElementById("GDRepCost").innerHTML = GDRepCost;
  document.getElementById("GDRep").innerHTML = GDRep;
  document.getElementById("GDRepTot").innerHTML = GDRepTot;

  document.getElementById("VSRepCost").innerHTML = VSRepCost;
  document.getElementById("VSRep").innerHTML = VSRep;
  document.getElementById("VSRepTot").innerHTML = VSRepTot;

  document.getElementById("OTRepCost").innerHTML = OTRepCost;
  document.getElementById("OTRep").innerHTML = OTRep;
  document.getElementById("OTRepTot").innerHTML = OTRepTot;

  document.getElementById("ETRepCost").innerHTML = ETRepCost;
  document.getElementById("ETRep").innerHTML = ETRep;
  document.getElementById("ETRepTot").innerHTML = ETRepTot;

  document.getElementById("HCRepCost").innerHTML = HCRepCost;
  document.getElementById("HCRep").innerHTML = HCRep;
  document.getElementById("HCRepTot").innerHTML = HCRepTot;

  document.getElementById("MSARepCost").innerHTML = MSARepCost;
  document.getElementById("MSARep").innerHTML = MSARep;
  document.getElementById("MSARepTot").innerHTML = MSARepTot;

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

document.addEventListener("keydown", function(event) {
  if (event.ctrlKey && event.which == 83) { /* Control + S to manual save */
      event.preventDefault();
      saveGame();
  }
}, false);

function resetGame() {
  if (confirm("Are you sure you want to reset your game data?")) {
    var gameSave = {};
    localStorage.setItem("gameSave", JSON.stringify(gameSave));
    location.reload();
  }
}
