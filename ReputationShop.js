function buyReputation() {
  if (Skyscraper >= ReputationCost) {
    Skyscraper = Skyscraper - ReputationCost;
    Reputation = Reputation + 1;
    Reputation = Reputation;

    document.getElementById("Reputation").innerHTML = Reputation;
    document.getElementById("Skyscraper").innerHTML = Skyscraper;
  }
}
function buyGDRep() {
  if (Reputation >= GDRepCost) {
    Reputation = Reputation - GDRepCost;
    GDRep = GDRep + 1;
    GDRepCost = Math.round(GDRepCost * 3.5);
    GDRep = GDRep;
    GDRepCost = GDRepCost;

    document.getElementById("Reputation").innerHTML = Reputation;
    document.getElementById("GDRepCost").innerHTML = GDRepCost;
    document.getElementById("GDRep").innerHTML = GDRep;
  }
}
function buyVSRep() {
  if (Reputation >= VSRepCost) {
    Reputation = Reputation - VSRepCost;
    VSRep = VSRep + 1;
    VSRepCost = Math.round(VSRepCost * 3.5);
    VSRep = VSRep;
    VSRepCost = VSRepCost;

    document.getElementById("Reputation").innerHTML = Reputation;
    document.getElementById("VSRepCost").innerHTML = VSRepCost;
    document.getElementById("VSRep").innerHTML = VSRep;
  }
}
function buyOTRep() {
  if (Reputation >= OTRepCost) {
    Reputation = Reputation - OTRepCost;
    OTRep = OTRep + 1;
    OTRepCost = Math.round(OTRepCost * 3.5);
    OTRep = OTRep;
    OTRepCost = OTRepCost;

    document.getElementById("Reputation").innerHTML = Reputation;
    document.getElementById("OTRepCost").innerHTML = OTRepCost;
    document.getElementById("OTRep").innerHTML = OTRep;
  }
}
function buyETRep() {
  if (Reputation >= ETRepCost) {
    Reputation = Reputation - ETRepCost;
    ETRep = ETRep + 1;
    ETRepCost = Math.round(ETRepCost * 3.5);
    ETRep = ETRep;
    ETRepCost = ETRepCost;

    document.getElementById("Reputation").innerHTML = Reputation;
    document.getElementById("ETRepCost").innerHTML = ETRepCost;
    document.getElementById("ETRep").innerHTML = ETRep;
  }
}
function buyHCRep() {
  if (Reputation >= HCRepCost) {
    Reputation = Reputation - HCRepCost;
    HCRep = HCRep + 1;
    HCRepCost = Math.round(HCRepCost * 3.5);
    HCRep = HCRep;
    HCRepCost = HCRepCost;

    document.getElementById("Reputation").innerHTML = Reputation;
    document.getElementById("HCRepCost").innerHTML = HCRepCost;
    document.getElementById("HCRep").innerHTML = HCRep;
  }
}
function buyMSARep() {
  if (Reputation >= MSARepCost) {
    Reputation = Reputation - MSARepCost;
    MSARep = MSARep + 1;
    MSARepCost = Math.round(MSARepCost * 3.5);
    MSARep = MSARep;
    MSARepCost = MSARepCost;

    document.getElementById("Reputation").innerHTML = Reputation;
    document.getElementById("MSARepCost").innerHTML = MSARepCost;
    document.getElementById("MSARep").innerHTML = MSARep;
  }
}

var Bricks = 0;

setInterval(function() {
  Bricks = Bricks + VSRep * 1;
  Bricks = Bricks + OTRep * 3;
  Bricks = Bricks + ETRep * 7;
  Bricks = Bricks + HCRep * 13;
  Bricks = Bricks + MSARep * 18;
  document.getElementById("Bricks").innerHTML = Bricks;
}, 1000);
