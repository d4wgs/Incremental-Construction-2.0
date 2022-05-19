function buyReputation() {
  if (Skyscraper >= ReputationCost) {
    Skyscraper = Skyscraper - ReputationCost;
    Reputation = Reputation + 1;
    CPS = CPS - (SkyscraperOut * 3);
    document.getElementById("Skyscraper").innerHTML = Skyscraper;
    document.getElementById("Reputation").innerHTML = Reputation;
    document.getElementById("CPS").innerHTML = CPS;
    }

    if (Reputation >= 1) {
      document.getElementById("BuyGD").style.visibility = "visible";
    } else {
      document.getElementById("BuyGD").style.visibility = "hidden";
    }
    if (Reputation >= 2) {
      document.getElementById("BuyVS").style.visibility = "visible";
    } else {
      document.getElementById("BuyVS").style.visibility = "hidden";
    }
    if (Reputation >= 5) {
      document.getElementById("BuyOT").style.visibility = "visible";
    } else {
      document.getElementById("BuyOT").style.visibility = "hidden";
    }
    if (Reputation >= 7) {
      document.getElementById("BuyET").style.visibility = "visible";
    } else {
      document.getElementById("BuyET").style.visibility = "hidden";
    }
    if (Reputation >= 10) {
      document.getElementById("BuyHC").style.visibility = "visible";
    } else {
      document.getElementById("BuyHC").style.visibility = "hidden";
    }
    if (Reputation >= 11) {
      document.getElementById("BuyMSA").style.visibility = "visible";
    } else {
      document.getElementById("BuyMSA").style.visibility = "hidden";
    }
}
function buyGDRep() {
  if (Reputation >= GDRepCost) {
    Reputation = Reputation - GDRepCost;
    GDRep = GDRep + 1;
    GDRepCost = Math.round(GDRepCost * 1.5);
    CPS = (Shack * ShackOut) + (Apartment * ApartmentOut) + (House * HouseOut) + (Motel * MotelOut) + (ApartmentComplex * ApartmentComplexOut) + (Tower * TowerOut) + (Skyscraper * SkyscraperOut) + (GDRep * GDOut);
    document.getElementById("Reputation").innerHTML = Reputation;
    document.getElementById("GDRep").innerHTML = GDRep;
    document.getElementById("GDRepCost").innerHTML = GDRepCost;
    document.getElementById("CPS").innerHTML = CPS;

    if (GDRep >= 1) {
      document.getElementById("GDTot").style.visibility = "visible";
    } else {
      document.getElementById("GDTot").style.visibility = "hidden";
    }
  }
}
function buyVSRep() {
  if (Reputation >= VSRepCost) {
    Reputation = Reputation - VSRepCost;
    VSRep = VSRep + 1;
    VSRepCost = Math.round(VSRepCost * 1.5);
    document.getElementById("Reputation").innerHTML = Reputation;
    document.getElementById("VSRepCost").innerHTML = VSRepCost;
    document.getElementById("VSRep").innerHTML = VSRep;

    if (VSRep >= 1) {
      document.getElementById("VSTot").style.visibility = "visible";
    } else {
      document.getElementById("VSTot").style.visibility = "hidden";
    }
  }
}
function buyOTRep() {
  if (Reputation >= OTRepCost) {
    Reputation = Reputation - OTRepCost;
    OTRep = OTRep + 1;
    OTRepCost = Math.round(OTRepCost * 1.5);
    document.getElementById("Reputation").innerHTML = Reputation;
    document.getElementById("OTRepCost").innerHTML = OTRepCost;
    document.getElementById("OTRep").innerHTML = OTRep;

    if (OTRep >= 1) {
      document.getElementById("OTTot").style.visibility = "visible";
    } else {
      document.getElementById("OTTot").style.visibility = "hidden";
    }
  }
}
function buyETRep() {
  if (Reputation >= ETRepCost) {
    Reputation = Reputation - ETRepCost;
    ETRep = ETRep + 1;
    ETRepCost = Math.round(ETRepCost * 1.5);
    document.getElementById("Reputation").innerHTML = Reputation;
    document.getElementById("ETRepCost").innerHTML = ETRepCost;
    document.getElementById("ETRep").innerHTML = ETRep;

    if (ETRep >= 1) {
      document.getElementById("ETTot").style.visibility = "visible";
    } else {
      document.getElementById("ETTot").style.visibility = "hidden";
    }
  }
}
function buyHCRep() {
  if (Reputation >= HCRepCost) {
    Reputation = Reputation - HCRepCost;
    HCRep = HCRep + 1;
    HCRepCost = Math.round(HCRepCost * 1.5);
    document.getElementById("Reputation").innerHTML = Reputation;
    document.getElementById("HCRepCost").innerHTML = HCRepCost;
    document.getElementById("HCRep").innerHTML = HCRep;

    if (HCRep >= 1) {
      document.getElementById("HCTot").style.visibility = "visible";
    } else {
      document.getElementById("HCTot").style.visibility = "hidden";
    }
  }
}
function buyMSARep() {
  if (Reputation >= MSARepCost) {
    Reputation = Reputation - MSARepCost;
    MSARep = MSARep + 1;
    MSARepCost = Math.round(MSARepCost * 1.5);
    document.getElementById("Reputation").innerHTML = Reputation;
    document.getElementById("MSARepCost").innerHTML = MSARepCost;
    document.getElementById("MSARep").innerHTML = MSARep;

    if (MSARep >= 1) {
      document.getElementById("MSATot").style.visibility = "visible";
    } else {
      document.getElementById("MSATot").style.visibility = "hidden";
    }
  }
}
