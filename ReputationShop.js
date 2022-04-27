function buyReputation() {
  if (Skyscraper >= ReputationCost) {
    Skyscraper = Skyscraper - ReputationCost;
    Reputation = Reputation + 1;
    ReputationCount = Reputation;

    document.getElementById("ReputationTot").innerHTML = ReputationCount;
    document.getElementById("SkyscraperTot").innerHTML = Skyscraper;
  }
}
function buyGDRep() {
  if (Reputation >= GDRepCost) {
    Reputation = Reputation - GDRepCost;
    GDRep = GDRep + 1;
    GDRepCost = Math.round(GDRepCost * 3.5);
    GDRepCount = GDRep;
    GDRepTotCost1 = GDRepCost;

    document.getElementById("ReputationTot").innerHTML = Reputation;
    document.getElementById("GDRepCost").innerHTML = GDRepCost;
    document.getElementById("GDRepTot").innerHTML = GDRepCount;
  }
}
function buyVSRep() {
  if (Reputation >= VSRepCost) {
    Reputation = Reputation - VSRepCost;
    VSRep = VSRep + 1;
    VSRepCost = Math.round(VSRepCost * 3.5);
    VSRepCount = VSRep;
    VSRepTotCost1 = VSRepCost;

    document.getElementById("ReputationTot").innerHTML = Reputation;
    document.getElementById("VSRepCost").innerHTML = VSRepCost;
    document.getElementById("VSRepTot").innerHTML = VSRepCount;
  }
}
function buyOTRep() {
  if (Reputation >= OTRepCost) {
    Reputation = Reputation - OTRepCost;
    OTRep = OTRep + 1;
    OTRepCost = Math.round(OTRepCost * 3.5);
    OTRepCount = OTRep;
    OTRepTotCost1 = OTRepCost;

    document.getElementById("ReputationTot").innerHTML = Reputation;
    document.getElementById("OTRepCost").innerHTML = OTRepCost;
    document.getElementById("OTRepTot").innerHTML = OTRepCount;
  }
}
function buyETRep() {
  if (Reputation >= ETRepCost) {
    Reputation = Reputation - ETRepCost;
    ETRep = ETRep + 1;
    ETRepCost = Math.round(ETRepCost * 3.5);
    ETRepCount = ETRep;
    ETRepTotCost1 = ETRepCost;

    document.getElementById("ReputationTot").innerHTML = Reputation;
    document.getElementById("ETRepCost").innerHTML = ETRepCost;
    document.getElementById("ETRepTot").innerHTML = ETRepCount;
  }
}
function buyHCRep() {
  if (Reputation >= HCRepCost) {
    Reputation = Reputation - HCRepCost;
    HCRep = HCRep + 1;
    HCRepCost = Math.round(HCRepCost * 3.5);
    HCRepCount = HCRep;
    HCRepTotCost1 = HCRepCost;

    document.getElementById("ReputationTot").innerHTML = Reputation;
    document.getElementById("HCRepCost").innerHTML = HCRepCost;
    document.getElementById("HCRepTot").innerHTML = HCRepCount;
  }
}
function buyMSARep() {
  if (Reputation >= MSARepCost) {
    Reputation = Reputation - MSARepCost;
    MSARep = MSARep + 1;
    MSARepCost = Math.round(MSARepCost * 3.5);
    MSARepCount = MSARep;
    MSARepTotCost1 = MSARepCost;

    document.getElementById("ReputationTot").innerHTML = Reputation;
    document.getElementById("MSARepCost").innerHTML = MSARepCost;
    document.getElementById("MSARepTot").innerHTML = MSARepCount;
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
