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
  tablinks = document.getElementsByClassName("tablinks2");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

function loadGame() {
  var savedGame = JSON.parse(localStorage.getItem("gameSave"));
  if (typeof savedGame.Cash !== undefined) Cash = savedGame.Cash;

  if (typeof savedGame.ShackCost !== undefined) ShackCost = savedGame.ShackCost;
  if (typeof savedGame.Shack !== undefined) Shack = savedGame.Shack;

  if (typeof savedGame.ApartmentCost !== undefined) ApartmentCost = savedGame.ApartmentCost;
  if (typeof savedGame.Apartment !== undefined) Apartment = savedGame.Apartment;

  if (typeof savedGame.HouseCost !== undefined) HouseCost = savedGame.HouseCost;
  if (typeof savedGame.House !== undefined) House = savedGame.House;

  if (typeof savedGame.MotelCost !== undefined) MotelCost = savedGame.MotelCost;
  if (typeof savedGame.Motel !== undefined) Motel = savedGame.Motel;

  if (typeof savedGame.ApartmentComplexCost !== undefined) ApartmentComplexCost = savedGame.ApartmentComplexCost;
  if (typeof savedGame.ApartmentComplex !== undefined) ApartmentComplex = savedGame.ApartmentComplex;

  if (typeof savedGame.TowerCost !== undefined) TowerCost = savedGame.TowerCost;
  if (typeof savedGame.Tower !== undefined) Tower = savedGame.Tower;

  if (typeof savedGame.SkyscraperCost !== undefined) SkyscraperCost = savedGame.SkyscraperCost;
  if (typeof savedGame.Skyscraper !== undefined) Skyscraper = savedGame.Skyscraper;

  if (typeof savedGame.Reputation !== undefined) Reputation = savedGame.Reputation;
  if (typeof savedGame.ReputationCost !== undefined) ReputationCost = savedGame.ReputationCost;

  if (typeof savedGame.GDRepCost !== undefined) GDRepCost = savedGame.GDRepCost;
  if (typeof savedGame.GDRep !== undefined) GDRep = savedGame.GDRep;

  if (typeof savedGame.VSRepCost !== undefined) VSRepCost = savedGame.VSRepCost;
  if (typeof savedGame.VSRep !== undefined) VSRep = savedGame.VSRep;

  if (typeof savedGame.OTRepCost !== undefined) OTRepCost = savedGame.OTRepCost;
  if (typeof savedGame.OTRep !== undefined) OTRep = savedGame.OTRep;

  if (typeof savedGame.ETRepCost !== undefined) ETRepCost = savedGame.ETRepCost;
  if (typeof savedGame.ETRep !== undefined) ETRep = savedGame.ETRep;

  if (typeof savedGame.HCRepCost !== undefined) HCRepCost = savedGame.HCRepCost;
  if (typeof savedGame.HCRep !== undefined) HCRep = savedGame.HCRep;

  if (typeof savedGame.MSARepCost !== undefined) MSARepCost = savedGame.MSARepCost;
  if (typeof savedGame.MSARep !== undefined) MSARep = savedGame.MSARep;

  if (typeof savedGame.Bricks !== undefined) Bricks = savedGame.Bricks;

  if (typeof savedGame.ShackOut !== undefined) ShackOut = savedGame.ShackOut;
  if (typeof savedGame.ShackUpgradeCost !== undefined) ShackUpgradeCost = savedGame.ShackUpgradeCost;

  if (typeof savedGame.ApartmentOut !== undefined) ApartmentOut = savedGame.ApartmentOut;
  if (typeof savedGame.ApartmentUpgradeCost !== undefined) ApartmentUpgradeCost = savedGame.ApartmentUpgradeCost;

  if (typeof savedGame.HouseOut !== undefined) HouseOut = savedGame.HouseOut;
  if (typeof savedGame.HouseUpgradeCost !== undefined) HouseUpgradeCost = savedGame.HouseUpgradeCost;

  if (typeof savedGame.MotelOut !== undefined) MotelOut = savedGame.MotelOut;
  if (typeof savedGame.MotelUpgradeCost !== undefined) MotelUpgradeCost = savedGame.MotelUpgradeCost;

  if (typeof savedGame.ApartmentComplexOut !== undefined) ApartmentComplexOut = savedGame.ApartmentComplexOut;
  if (typeof savedGame.ApartmentComplexUpgradeCost !== undefined) ApartmentComplexCost = savedGame.ApartmentComplexUpgradeCost;

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

    ApartmentCost: ApartmentCost,
    Apartment: Apartment,

    HouseCost: HouseCost,
    House: House,

    MotelCost: MotelCost,
    Motel: Motel,

    ApartmentComplexCost: ApartmentComplexCost,
    ApartmentComplex: ApartmentComplex,

    TowerCost: TowerCost,
    Tower: Tower,

    SkyscraperCost: SkyscraperCost,
    Skyscraper: Skyscraper,

    Reputation: Reputation,
    ReputationCost: ReputationCost,

    GDRepCost: GDRepCost,
    GDRep: GDRep,

    VSRepCost: VSRepCost,
    VSRep: VSRep,

    OTRepCost: OTRepCost,
    OTRep: OTRep,

    ETRepCost: ETRepCost,
    ETRep: ETRep,

    HCRepCost: HCRepCost,
    HCRep: HCRep,

    MSARepCost: MSARepCost,
    MSARep: MSARep,

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

  document.getElementById("ApartmentCost").innerHTML = ApartmentCost;
  document.getElementById("Apartment").innerHTML = Apartment;

  document.getElementById("HouseCost").innerHTML = HouseCost;
  document.getElementById("House").innerHTML = House;

  document.getElementById("MotelCost").innerHTML = MotelCost;
  document.getElementById("Motel").innerHTML = Motel;

  document.getElementById("ApartmentComplexCost").innerHTML = ApartmentComplexCost;
  document.getElementById("ApartmentComplex").innerHTML = ApartmentComplex;

  document.getElementById("TowerCost").innerHTML = TowerCost;
  document.getElementById("Tower").innerHTML = Tower;

  document.getElementById("SkyscraperCost").innerHTML = SkyscraperCost;
  document.getElementById("Skyscraper").innerHTML = Skyscraper;

  document.getElementById("Reputation").innerHTML = Reputation;

  document.getElementById("GDRep").innerHTML = GDRep;
  document.getElementById("GDRepCost").innerHTML = GDRepCost;

  document.getElementById("VSRepCost").innerHTML = VSRepCost;
  document.getElementById("VSRep").innerHTML = VSRep;

  document.getElementById("OTRepCost").innerHTML = OTRepCost;
  document.getElementById("OTRep").innerHTML = OTRep;

  document.getElementById("ETRepCost").innerHTML = ETRepCost;
  document.getElementById("ETRep").innerHTML = ETRep;

  document.getElementById("HCRepCost").innerHTML = HCRepCost;
  document.getElementById("HCRep").innerHTML = HCRep;

  document.getElementById("MSARepCost").innerHTML = MSARepCost;
  document.getElementById("MSARep").innerHTML = MSARep;

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
  document.getElementById("ApartmentComplexUpgradeCost").innerHTML = ApartmentComplexUpgradeCost;

  document.getElementById("TowerOut").innerHTML = TowerOut;
  document.getElementById("TowerUpgradeCost").innerHTML = TowerUpgradeCost;

  document.getElementById("SkyscraperOut").innerHTML = SkyscraperOut;
  document.getElementById("SkyscraperUpgradeCost").innerHTML = SkyscraperUpgradeCost;

  document.getElementById("VisibleText_Apartment").style.visibility;
  document.getElementById("HiddenText_Apartment").style.visibility;
  document.getElementById("HiddenApartmentName").style.visibility;
  document.getElementById("VisibleApartmentName").style.visibility;
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
